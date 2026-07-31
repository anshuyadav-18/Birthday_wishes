const quotes = [
    '“This page is the gift I made for you with love, just like you always make life better.”',
    '“Bhaiya, your support means everything; this website is my way of wishing you the happiest birthday.”',
    '“Some people make life brighter just by being in it. This little surprise is for one of those people. ✨”',
    '“May your birthday be as bright and strong as the way you light up our family.”',
];

function showWish() {
    const message =
        '🎉 Wishing you a wonderful 23rd Birthday, Bhaiya! 🎉<br>' +
        'You are always my guide and the one who makes every moment brighter. ' +
        'May this day bring you joy, success, and many smiles — because you deserve the very best. ❤️';

    document.getElementById('message').innerHTML = message;
    document.getElementById('quote').innerHTML = '';
    document.body.style.background = 'linear-gradient(135deg, #081b36, #112d54, #23395d, #1f4068)';
    launchConfetti();
}

function showQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').innerHTML = `“${quote}”`;
    document.getElementById('message').innerHTML = '';
    document.getElementById('gift').classList.remove('open');
    document.getElementById('gift').innerHTML = 'Click the gift button to reveal a surprise message.';
    launchConfetti();
}

function openGift() {
    const gift = document.getElementById('gift');
    gift.classList.add('open');
    gift.innerHTML = 'Opening your gift... 🎁';

    setTimeout(() => {
        gift.innerHTML = 'Here is your special birthday message: Stay awesome, keep shining, and may every wish you make today come true! 🌟';
    }, 700);
    document.getElementById('quote').innerHTML = '';
    document.getElementById('message').innerHTML = '';
    launchConfetti();
}

function toggleLights() {
    const card = document.querySelector('.card');
    const blessing = document.getElementById('blessing');
    card.classList.toggle('light-mode');

    if (card.classList.contains('light-mode')) {
        blessing.innerHTML = 'The birthday lights are on! May your year shine with success and happiness. ✨';
    } else {
        blessing.innerHTML = 'Birthday lights turned off. Click again to sparkle the celebration!';
    }

    launchConfetti();
}

function launchConfetti() {
    const container = document.getElementById('confetti');
    container.innerHTML = '';
    const colors = ['#ff5f7f', '#ffcd73', '#8be9fd', '#9b59b6', '#6be3b6'];

    for (let i = 0; i < 40; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.top = `${Math.random() * -20}vh`;
        piece.style.width = `${8 + Math.random() * 10}px`;
        piece.style.height = `${16 + Math.random() * 12}px`;
        piece.style.animationDuration = `${2.5 + Math.random() * 1.5}s`;
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(piece);
    }

    setTimeout(() => {
        container.innerHTML = '';
    }, 4000);
}

function createStars() {
    const starContainer = document.getElementById('stars');
    const count = 80;
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 4}s`;
        star.style.opacity = `${0.4 + Math.random() * 0.6}`;
        starContainer.appendChild(star);
    }
}

window.addEventListener('DOMContentLoaded', createStars);
