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
        car3: "https://images.steamusercontent.com/ugc/865111917380159024/6FBBE48A6CA7CAD010DF38D09C56F22333C114F2/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        car4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7A0u_5J-QMR74pmE30l5VuSy_qRaMzpxRQ&s",
        car5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7M5rTgWOVzP0fYD24O9gvDsI_gcXYab3K3g&s",
        car6: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJDYJfxAlQMpIxSlLjpWplfx4UVguPNvCxg&s",
        car7: "https://i.ytimg.com/vi/Zi68A_jKa9A/maxresdefault.jpg",
        car8: "https://preview.redd.it/all-the-jojo-naoya-memes-i-could-find-v0-w6obv8tllwdg1.png?width=640&crop=smart&auto=webp&s=a176ab08751c7030bca126a9c9226a98664b0800",
        car9: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmePERL61kDPyr-7CPZAUCaS7Hddlj56SQ5Q&s"
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

    if (carImg7) {
        carImg7.addEventListener('click', function() {
            changeCarImage(imageUrls.car7);
        });
    }

    if (carImg8) {
        carImg8.addEventListener('click', function() {
            changeCarImage(imageUrls.car8);
        });
    }

    if (carImg9) {
        carImg9.addEventListener('click', function() {
            changeCarImage(imageUrls.car9);
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

    const codeInput = document.getElementById('codeInput');
    const runCodeBtn = document.getElementById('runCodeBtn');
    const clearCodeBtn = document.getElementById('clearCodeBtn');
    const codeOutput = document.getElementById('codeOutput');
    
    function captureLogs() {
        const originalLog = console.log;
        const originalError = console.error;
        const originalWarn = console.warn;
        
        console.log = function(...args) {
            originalLog.apply(console, args);
            displayOutput(args, 'log');
        };
        
        console.error = function(...args) {
            originalError.apply(console, args);
            displayOutput(args, 'error');
        };
        
        console.warn = function(...args) {
            originalWarn.apply(console, args);
            displayOutput(args, 'warn');
        };
        
        return function restore() {
            console.log = originalLog;
            console.error = originalError;
            console.warn = originalWarn;
        };
    }
    
    function displayOutput(args, type) {
        const outputLine = document.createElement('div');
        outputLine.style.margin = '5px 0';
        outputLine.style.fontFamily = 'monospace';
        outputLine.style.fontSize = '13px';
        
        let prefix = '📌 ';
        let color = '#00d4ff';
        
        if (type === 'error') {
            prefix = '❌ ';
            color = '#ff6b6b';
        } else if (type === 'warn') {
            prefix = '⚠️ ';
            color = '#ffcc00';
        }
        
        let text = args.map(arg => {
            if (arg === undefined) return 'undefined';
            if (arg === null) return 'null';
            if (typeof arg === 'object') return JSON.stringify(arg, null, 2);
            return String(arg);
        }).join(' ');
        
        outputLine.innerHTML = `${prefix}<span style="color: ${color};">${escapeHtml(text)}</span>`;
        codeOutput.appendChild(outputLine);
        codeOutput.scrollTop = codeOutput.scrollHeight;
    }
    
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    if (runCodeBtn && codeInput && codeOutput) {
        runCodeBtn.addEventListener('click', function() {
            const restore = captureLogs();
            codeOutput.innerHTML = '';
            
            try {
                const userCode = codeInput.value;
                const asyncWrapper = new AsyncFunction(userCode);
                asyncWrapper().catch(err => {
                    const errorDiv = document.createElement('div');
                    errorDiv.style.color = '#ff6b6b';
                    errorDiv.style.margin = '5px 0';
                    errorDiv.textContent = `❌ Помилка: ${err.message}`;
                    codeOutput.appendChild(errorDiv);
                });
            } catch (err) {
                const errorDiv = document.createElement('div');
                errorDiv.style.color = '#ff6b6b';
                errorDiv.style.margin = '5px 0';
                errorDiv.textContent = `❌ Помилка: ${err.message}`;
                codeOutput.appendChild(errorDiv);
            }
            
            setTimeout(() => restore(), 100);
        });
        
        clearCodeBtn.addEventListener('click', function() {
            codeInput.value = '';
            codeOutput.innerHTML = '<span style="color: #888;">Result will appear here...</span>';
        });
    }
    
    function AsyncFunction(body) {
        return new Function('return (async () => {' + body + '})()');
    }

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

    const keyElements = document.querySelectorAll('.key');
    const lastKeyDisplay = document.getElementById('lastKeyDisplay');
    const keyCodeDisplay = document.getElementById('keyCodeDisplay');
    const clearBtn = document.getElementById('clearLastKey');
    const langBtns = document.querySelectorAll('.lang-btn');

    let currentLang = 'ru';
    let activeKeys = new Set();

    const langLabels = {
        ru: {
            ' ': '␣ Пробел',
            'ControlLeft': 'Ctrl (Л)', 'ControlRight': 'Ctrl (П)',
            'MetaLeft': 'Win (Л)', 'MetaRight': 'Win (П)',
            'AltLeft': 'Alt (Л)', 'AltRight': 'Alt (П)',
            'ShiftLeft': 'Shift (Л)', 'ShiftRight': 'Shift (П)',
            'CapsLock': 'CapsLock', 'Tab': 'Tab', 'Enter': 'Enter',
            'Escape': 'Esc', 'Delete': 'Del', 'Backspace': '← Backspace',
            'ArrowUp': '↑', 'ArrowDown': '↓', 'ArrowLeft': '←', 'ArrowRight': '→',
            'ContextMenu': '☰', 'PrintScreen': 'Print', 'ScrollLock': 'Scroll',
            'Pause': 'Pause', 'Insert': 'Ins', 'Home': 'Home', 'End': 'End',
            'PageUp': 'PgUp', 'PageDown': 'PgDn', 'NumLock': 'Num',
            'F1': 'F1', 'F2': 'F2', 'F3': 'F3', 'F4': 'F4',
            'F5': 'F5', 'F6': 'F6', 'F7': 'F7', 'F8': 'F8',
            'F9': 'F9', 'F10': 'F10', 'F11': 'F11', 'F12': 'F12'
        },
        en: {
            ' ': '␣ Space',
            'ControlLeft': 'Ctrl (L)', 'ControlRight': 'Ctrl (R)',
            'MetaLeft': 'Win (L)', 'MetaRight': 'Win (R)',
            'AltLeft': 'Alt (L)', 'AltRight': 'Alt (R)',
            'ShiftLeft': 'Shift (L)', 'ShiftRight': 'Shift (R)',
            'CapsLock': 'CapsLock', 'Tab': 'Tab', 'Enter': 'Enter',
            'Escape': 'Esc', 'Delete': 'Del', 'Backspace': '← Backspace',
            'ArrowUp': '↑', 'ArrowDown': '↓', 'ArrowLeft': '←', 'ArrowRight': '→',
            'ContextMenu': '☰', 'PrintScreen': 'Print', 'ScrollLock': 'Scroll',
            'Pause': 'Pause', 'Insert': 'Ins', 'Home': 'Home', 'End': 'End',
            'PageUp': 'PgUp', 'PageDown': 'PgDn', 'NumLock': 'Num',
            'F1': 'F1', 'F2': 'F2', 'F3': 'F3', 'F4': 'F4',
            'F5': 'F5', 'F6': 'F6', 'F7': 'F7', 'F8': 'F8',
            'F9': 'F9', 'F10': 'F10', 'F11': 'F11', 'F12': 'F12'
        },
        ua: {
            ' ': '␣ Пробіл',
            'ControlLeft': 'Ctrl (Л)', 'ControlRight': 'Ctrl (П)',
            'MetaLeft': 'Win (Л)', 'MetaRight': 'Win (П)',
            'AltLeft': 'Alt (Л)', 'AltRight': 'Alt (П)',
            'ShiftLeft': 'Shift (Л)', 'ShiftRight': 'Shift (П)',
            'CapsLock': 'CapsLock', 'Tab': 'Tab', 'Enter': 'Enter',
            'Escape': 'Esc', 'Delete': 'Del', 'Backspace': '← Backspace',
            'ArrowUp': '↑', 'ArrowDown': '↓', 'ArrowLeft': '←', 'ArrowRight': '→',
            'ContextMenu': '☰', 'PrintScreen': 'Print', 'ScrollLock': 'Scroll',
            'Pause': 'Pause', 'Insert': 'Ins', 'Home': 'Home', 'End': 'End',
            'PageUp': 'PgUp', 'PageDown': 'PgDn', 'NumLock': 'Num',
            'F1': 'F1', 'F2': 'F2', 'F3': 'F3', 'F4': 'F4',
            'F5': 'F5', 'F6': 'F6', 'F7': 'F7', 'F8': 'F8',
            'F9': 'F9', 'F10': 'F10', 'F11': 'F11', 'F12': 'F12'
        }
    };

    const codeToDataKey = {
        'Backquote': '`',
        'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4',
        'Digit5': '5', 'Digit6': '6', 'Digit7': '7', 'Digit8': '8',
        'Digit9': '9', 'Digit0': '0',
        'Minus': '-', 'Equal': '=',
        'KeyQ': 'q', 'KeyW': 'w', 'KeyE': 'e', 'KeyR': 'r',
        'KeyT': 't', 'KeyY': 'y', 'KeyU': 'u', 'KeyI': 'i',
        'KeyO': 'o', 'KeyP': 'p',
        'BracketLeft': '[', 'BracketRight': ']', 'Backslash': '\\',
        'KeyA': 'a', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f',
        'KeyG': 'g', 'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k',
        'KeyL': 'l', 'Semicolon': ';', 'Quote': "'",
        'KeyZ': 'z', 'KeyX': 'x', 'KeyC': 'c', 'KeyV': 'v',
        'KeyB': 'b', 'KeyN': 'n', 'KeyM': 'm',
        'Comma': ',', 'Period': '.', 'Slash': '/',
        'Space': ' ',
        'Tab': 'tab', 
        'CapsLock': 'capslock', 
        'Enter': 'enter',
        'Escape': 'escape',
        'ContextMenu': 'context',
        'ShiftLeft': 'shift-left',
        'ShiftRight': 'shift-right',
        'ControlLeft': 'control-left',
        'ControlRight': 'control-right',
        'AltLeft': 'alt-left',
        'AltRight': 'alt-right',
        'MetaLeft': 'meta-left',
        'MetaRight': 'meta-right'
    };

    const keyMap = new Map();
    keyElements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (key) keyMap.set(key, el);
    });

    function clearAllHighlights() {
        keyElements.forEach(el => el.classList.remove('key-active'));
    }

    function updateHighlights() {
        clearAllHighlights();
        for (let code of activeKeys) {
            const dataKey = codeToDataKey[code];
            if (dataKey && keyMap.has(dataKey)) {
                keyMap.get(dataKey).classList.add('key-active');
            }
        }
    }

    function getLocalizedKeyName(code, key, lang) {
        const dict = langLabels[lang] || langLabels.ru;
        if (dict[code]) return dict[code];
        if (dict[key]) return dict[key];
        if (key && key.length === 1) {
            if (key.match(/[a-zA-Zа-яА-ЯіІєЄїЇґҐ]/)) {
                return key.toUpperCase();
            }
            return key;
        }
        return key || code || '—';
    }

    function updateInfoPanel() {
        if (activeKeys.size === 0) {
            lastKeyDisplay.textContent = '—';
            keyCodeDisplay.textContent = '—';
            return;
        }
        const lastCode = Array.from(activeKeys).pop();
        const key = lastCode;
        const displayName = getLocalizedKeyName(lastCode, key, currentLang);
        lastKeyDisplay.textContent = displayName;
        keyCodeDisplay.textContent = lastCode;
    }

    function setLanguage(lang) {
        currentLang = lang;
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        updateInfoPanel();
    }

    function handleKeyDown(event) {
        const code = event.code;
        activeKeys.add(code);
        updateHighlights();
        updateInfoPanel();
        const blockedKeys = ['F5', 'F12', 'PrintScreen', ' ', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
        if (blockedKeys.includes(event.key)) {
            event.preventDefault();
        }
    }

    function handleKeyUp(event) {
        const code = event.code;
        activeKeys.delete(code);
        updateHighlights();
        updateInfoPanel();
    }

    function handleBlur() {
        activeKeys.clear();
        updateHighlights();
        updateInfoPanel();
    }

    function resetDisplay() {
        activeKeys.clear();
        updateHighlights();
        lastKeyDisplay.textContent = '—';
        keyCodeDisplay.textContent = '—';
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', handleBlur);

    if (clearBtn) {
        clearBtn.addEventListener('click', resetDisplay);
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });

    resetDisplay();
    setLanguage('ru');
};
    const mouseX = document.getElementById('mouseX');
    const mouseY = document.getElementById('mouseY');
    const mouseScroll = document.getElementById('mouseScroll');
    const mouseEventDisplay = document.getElementById('mouseEventDisplay');
    const mouseLeftBtn = document.getElementById('mouseLeftBtn');
    const mouseMiddleBtn = document.getElementById('mouseMiddleBtn');
    const mouseRightBtn = document.getElementById('mouseRightBtn');
    const clearMouse = document.getElementById('clearMouse');
    const mouseStatus = document.getElementById('mouseStatus');

    let scrollCount = 0;
    let isMouseActive = true;

    function resetMouseButtons() {
        mouseLeftBtn.classList.remove('active-left');
        mouseMiddleBtn.classList.remove('active-middle');
        mouseRightBtn.classList.remove('active-right');
    }

    function updateMouseStatus() {
        if (isMouseActive) {
            mouseStatus.textContent = '✅ Active';
            mouseStatus.style.color = '#00ff88';
        } else {
            mouseStatus.textContent = '⛔ Inactive';
            mouseStatus.style.color = '#ff6b6b';
        }
    }

    document.addEventListener('mousemove', function(event) {
        if (!isMouseActive) return;
        mouseX.textContent = event.clientX;
        mouseY.textContent = event.clientY;
        mouseEventDisplay.textContent = `Move (${event.clientX}, ${event.clientY})`;
        mouseStatus.textContent = '🔄 Moving';
        mouseStatus.style.color = '#ffcc00';
        clearTimeout(window.mouseTimeout);
        window.mouseTimeout = setTimeout(() => {
            mouseStatus.textContent = '✅ Active';
            mouseStatus.style.color = '#00ff88';
        }, 500);
    });

    document.addEventListener('mousedown', function(event) {
        if (!isMouseActive) return;
        resetMouseButtons();
        let buttonName = '';
        if (event.button === 0) {
            mouseLeftBtn.classList.add('active-left');
            buttonName = 'Left button';
        } else if (event.button === 1) {
            mouseMiddleBtn.classList.add('active-middle');
            buttonName = 'Middle button (wheel)';
        } else if (event.button === 2) {
            mouseRightBtn.classList.add('active-right');
            buttonName = 'Right button';
        }
        mouseEventDisplay.textContent = `Pressed: ${buttonName}`;
        mouseStatus.textContent = '🔴 Pressed';
        mouseStatus.style.color = '#ff6b6b';
    });

    document.addEventListener('mouseup', function(event) {
        if (!isMouseActive) return;
        resetMouseButtons();
        mouseEventDisplay.textContent = 'Released';
        mouseStatus.textContent = '✅ Active';
        mouseStatus.style.color = '#00ff88';
    });

    document.addEventListener('wheel', function(event) {
        if (!isMouseActive) return;
        scrollCount += event.deltaY > 0 ? 1 : -1;
        mouseScroll.textContent = scrollCount;
        const direction = event.deltaY > 0 ? 'Down' : 'Up';
        mouseEventDisplay.textContent = `Scroll: ${direction} (${scrollCount})`;
        mouseStatus.textContent = '📜 Scrolling';
        mouseStatus.style.color = '#ffcc00';
        clearTimeout(window.scrollTimeout);
        window.scrollTimeout = setTimeout(() => {
            mouseStatus.textContent = '✅ Active';
            mouseStatus.style.color = '#00ff88';
        }, 500);
    });

    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        if (!isMouseActive) return;
        mouseRightBtn.classList.add('active-right');
        mouseEventDisplay.textContent = 'Context menu (RMB)';
        mouseStatus.textContent = '🔴 RMB';
        mouseStatus.style.color = '#ff6b6b';
        
        setTimeout(function() {
            resetMouseButtons();
            mouseEventDisplay.textContent = 'Released';
            mouseStatus.textContent = '✅ Active';
            mouseStatus.style.color = '#00ff88';
        }, 300);
    });

    if (clearMouse) {
        clearMouse.addEventListener('click', function() {
            mouseX.textContent = '0';
            mouseY.textContent = '0';
            mouseScroll.textContent = '0';
            scrollCount = 0;
            mouseEventDisplay.textContent = '—';
            resetMouseButtons();
            isMouseActive = !isMouseActive;
            updateMouseStatus();
        });
    }

    updateMouseStatus();