window.onload = function() {
    const carContainer = document.getElementById('car'); 
    const btnLeft = document.getElementById('btnLeft');
    const btnRight = document.getElementById('btnRight');
    
    let position = 0;
    let velocity = 0;
    let animationId = null;
    let leftPressed = false;
    let rightPressed = false;
    
    const FORCE = 0.4;
    const FRICTION = 0.99;
    const MAX_SPEED = 12;
    
    function updatePhysics() {
        let acceleration = 0;
        
        if (rightPressed) {
            acceleration += FORCE;
        }
        if (leftPressed) {
            acceleration -= FORCE;
        }
        
        velocity += acceleration;
        velocity *= FRICTION;
        
        if (Math.abs(velocity) < 0.02 && !rightPressed && !leftPressed) {
            velocity = 0;
        }
        
        if (velocity > MAX_SPEED) velocity = MAX_SPEED;
        if (velocity < -MAX_SPEED) velocity = -MAX_SPEED;
        
        position += velocity;
        
        carContainer.style.left = position + "px";
        
        let driftAngle = velocity * 1.5;
        if (driftAngle > 10) driftAngle = 10;
        if (driftAngle < -10) driftAngle = -10;
        
        if (Math.abs(velocity) < 0.3) {
            driftAngle = 0;
        }
        
        carContainer.style.transform = `rotate(${driftAngle}deg)`;
        
        animationId = requestAnimationFrame(updatePhysics);
    }
    
    if (carContainer && btnLeft && btnRight) {
        btnRight.onmousedown = () => { rightPressed = true; };
        btnRight.onmouseup = () => { rightPressed = false; };
        btnRight.onmouseleave = () => { rightPressed = false; };
        
        btnLeft.onmousedown = () => { leftPressed = true; };
        btnLeft.onmouseup = () => { leftPressed = false; };
        btnLeft.onmouseleave = () => { leftPressed = false; };
    }
    
    updatePhysics();
 
    const blueCyanBtn = document.getElementById("blue-cyan");
    const redOrangeBtn = document.getElementById("red-orange");
    const purpleWhiteBtn = document.getElementById("purple-white");
    const greenBtn = document.getElementById("green");
    
    document.body.className = "theme-1";
    blueCyanBtn.addEventListener("click", function() {   
        document.body.className = "theme-1";
    });
    redOrangeBtn.addEventListener("click", function() {   
        document.body.className = "theme-2";
    });
    purpleWhiteBtn.addEventListener("click", function() {   
        document.body.className = "theme-3";
    });
    greenBtn.addEventListener("click", function() {   
        document.body.className = "theme-4";
    });

    function fixHeaderOverlap() {
        const header = document.querySelector('header');
        if (header) {
            const headerHeight = header.offsetHeight;
            document.body.style.paddingTop = headerHeight + 20 + "px";
        }
    }
    
    const increaseBtn = document.getElementById("increaseText");
    const decreaseBtn = document.getElementById("decreaseText");
    
    if (increaseBtn) {
        increaseBtn.addEventListener("click", function() {
            let currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
            document.documentElement.style.fontSize = (currentSize + 2) + "px";
            fixHeaderOverlap();
        });
    }
    
    if (decreaseBtn) {
        decreaseBtn.addEventListener("click", function() {
            let currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
            if (currentSize > 12) {
                document.documentElement.style.fontSize = (currentSize - 2) + "px";
                fixHeaderOverlap();
            }
        });
    }
    
    window.addEventListener('load', fixHeaderOverlap);
    window.addEventListener('resize', fixHeaderOverlap);
    
    const closeBtn = document.getElementById('close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() { 
            window.location.replace("about:blank");
        });
    }
};