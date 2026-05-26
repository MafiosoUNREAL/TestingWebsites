window.onload = function() {
    const carContainer = document.getElementById('car'); 
    const carImage = document.querySelector('#car img');
    
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
    if (blueCyanBtn) blueCyanBtn.addEventListener("click", function() { document.body.className = "theme-1"; });
    if (redOrangeBtn) redOrangeBtn.addEventListener("click", function() { document.body.className = "theme-2"; });
    if (purpleWhiteBtn) purpleWhiteBtn.addEventListener("click", function() { document.body.className = "theme-3"; });
    if (greenBtn) greenBtn.addEventListener("click", function() { document.body.className = "theme-4"; });

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
   
    const carImg1 = document.getElementById('carImg1');
    const carImg2 = document.getElementById('carImg2');
    const carImg3 = document.getElementById('carImg3');
    const carImg4 = document.getElementById('carImg4');
    const carImg5 = document.getElementById('carImg5');
    const carImg6 = document.getElementById('carImg6');
    const customImgUrl = document.getElementById('customImgUrl');
    const setCustomImg = document.getElementById('setCustomImg');
    
    const imageUrls = {
        car1: "https://cdna.artstation.com/p/assets/images/images/028/178/932/large/denys-horokhovskykh-10.jpg?1593701288",
        car2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2UMd9Ojy85iX7wPVBR0g9JjlD5GLbAIoGw&s",
        car3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Ac9KRSzSDpgZDhO7zsd-vpVRajjdQ4dYeg&s",
        car4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7A0u_5J-QMR74pmE30l5VuSy_qRaMzpxRQ&s",
        car5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7M5rTgWOVzP0fYD24O9gvDsI_gcXYab3K3g&s",
        car6: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJDYJfxAlQMpIxSlLjpWplfx4UVguPNvCxg&s"
    };
    
    function changeCarImage(url) {
        if (carImage && url) {
            carImage.src = url;
        }
    }
    
    if (carImg1) {
        carImg1.addEventListener('click', function() {
            changeCarImage(imageUrls.car1);
        });
    }
    
    if (carImg2) {
        carImg2.addEventListener('click', function() {
            changeCarImage(imageUrls.car2);
        });
    }
    
    if (carImg3) {
        carImg3.addEventListener('click', function() {
            changeCarImage(imageUrls.car3);
        });
    }
    
    if (carImg4) {
        carImg4.addEventListener('click', function() {
            changeCarImage(imageUrls.car4);
        });
    }

    if (carImg5) {
        carImg5.addEventListener('click', function() {
            changeCarImage(imageUrls.car5);
        });
    }

    if (carImg6) {
        carImg6.addEventListener('click', function() {
            changeCarImage(imageUrls.car6);
        });
    }
    
    if (setCustomImg && customImgUrl) {
        setCustomImg.addEventListener('click', function() {
            let userUrl = customImgUrl.value.trim();
            if (userUrl !== "") {
                changeCarImage(userUrl);
                customImgUrl.value = "";
            } else {
                alert("Будь ласка, введіть URL фото!");
            }
        });
    }
};



///ПАСХАЛКА///
///ПАСХАЛКА///
let typedKeys = [];

const screamers = [
    {
        words: ["d4c", "invincible"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwtQLk99vcIrKsVU7nJmE_smZz7t3jiBoILg&s"
    },
    {
        words: ["furry", "fur", "romchik", "yaoi"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ooQlIXXRGtxKH-n987fdyfrZm2mQ0ZiznA&s"
    },
    {
        words: ["hate", "hatred", "a.m."],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62magdh3Rl1rTHU94YaMTFaggwTBzdL2Slw&s"
    }
];

function showScreamer(imageUrl) {
    const screamerDiv = document.createElement('div');
    screamerDiv.style.position = 'fixed';
    screamerDiv.style.top = '0';
    screamerDiv.style.left = '0';
    screamerDiv.style.width = '100%';
    screamerDiv.style.height = '100%';
    screamerDiv.style.backgroundColor = 'black';
    screamerDiv.style.zIndex = '99999';
    screamerDiv.style.display = 'flex';
    screamerDiv.style.alignItems = 'center';
    screamerDiv.style.justifyContent = 'center';
    screamerDiv.style.cursor = 'pointer';
    
    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.objectFit = 'contain';
    
    screamerDiv.appendChild(img);
    document.body.appendChild(screamerDiv);
    
    screamerDiv.addEventListener('click', function() {
        screamerDiv.remove();
    });
    
    setTimeout(function() {
        if (document.body.contains(screamerDiv)) {
            screamerDiv.remove();
        }
    }, 4000);
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        typedKeys = [];
        return;
    }
    
    typedKeys.push(event.key.toLowerCase());
    
    if (typedKeys.length > 20) {
        typedKeys.shift();
    }
    
    const currentSequence = typedKeys.join('');
    
    for (let screamer of screamers) {
        for (let word of screamer.words) {
            if (currentSequence.includes(word)) {
                typedKeys = [];
                showScreamer(screamer.image);
                return;
            }
        }
    }
});