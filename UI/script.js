const btn = document.getElementById('btn');
const navbar = document.getElementById('navbar');
const button = document.getElementById('button');

btn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    btn.classList.toggle('active');
})

button.addEventListener('click', () => {
    tryThis();
})

function tryThis() {
    const card = document.createElement('div');
    card.classList.add('card-container');

    card.innerHTML = `
    <div class="close"><i class="fa-solid fa-xmark"></i></div>
    
        <div id="carousel" class="carousel">
            <div class="card">
                <img src="../Assets/Page1.jpg" alt="">
            </div>
            <div class="card">
                <img src="../Assets//Page2.jpg" alt="">
            </div>
            <div class="card">
                <img src="../Assets/Page3.jpg" alt="">
            </div>
        </div>

        <div class="container2">
            <h2 class="title-heading">Your Better Half</h2>

            <p class="ruppe">₹399 <sup><del>$2000</del></sup> 60%off</p>

            <div class="line"></div>

            <p class="info">A symbolic card with a bride and a groom painted with their half of the upper body signifies your better-half. Add a message in the blank space between them an intricate backdrop of designs.</p>

            <button class="button" id="button">Try this Card <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    `;

    var cards = card.getElementsByClassName('card'),
        transforms = [
            {
                x: 0,
                z: 0,
                scale: 1,
                opacity: 1
            },
            {
                x: '-55%',
                z: '-50px',
                scale: 0.8,
                opacity: 0.8
            },
            {
                x: '55%',
                z: '-50px',
                scale: 0.8,
                opacity: 0.8
            }
        ];


    var nextTransform = function (x) {
        if (x >= cards.length - 1) {
            x = 0;
        } else {
            x++;
        }
        return x;
    };

    function next() {
        for (i = 0; i < cards.length; i++) {
            cards[i].style.transform =
                'translateX(' + transforms[nextTransform(i)].x + ')' +
                'translateZ(' + transforms[nextTransform(i)].z + ')' +
                'scale(' + transforms[nextTransform(i)].scale + ')';
            cards[i].style.opacity = transforms[nextTransform(i)].opacity;
        }
        transforms.push(transforms.shift());
    }

    var carousel = card.querySelector('.carousel');

    carousel.addEventListener('click', () => {
        next();
    })

    const closeBtn = card.querySelector('.close');

    closeBtn.addEventListener("click", (e) => {
        e.preventDefault();

        card.remove();
    })

    document.body.appendChild(card);
}


var cards = document.getElementsByClassName('card'),
    transforms = [
        {
            x: 0,
            z: 0,
            scale: 1,
            opacity: 1
        },
        {
            x: '-55%',
            z: '-50px',
            scale: 0.8,
            opacity: 0.8
        },
        {
            x: '55%',
            z: '-50px',
            scale: 0.8,
            opacity: 0.8
        }
    ];


var nextTransform = function (x) {
    if (x >= cards.length - 1) {
        x = 0;
    } else {
        x++;
    }
    return x;
};

function next() {
    for (i = 0; i < cards.length; i++) {
        cards[i].style.transform =
            'translateX(' + transforms[nextTransform(i)].x + ')' +
            'translateZ(' + transforms[nextTransform(i)].z + ')' +
            'scale(' + transforms[nextTransform(i)].scale + ')';
        cards[i].style.opacity = transforms[nextTransform(i)].opacity;
    }
    transforms.push(transforms.shift());
}

document.getElementById('carousel').onclick = function () {
    next();
};