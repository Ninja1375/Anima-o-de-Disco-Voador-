document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.getElementById('stars');
    const starContainer2 = document.getElementById('stars2');
    const ufo = document.getElementById('ufo');
    const audioUrl = 'https://github.com/Ninja1375/Disco-Voador-/raw/main/ufo-sound.mp3';

    // Crie um elemento de áudio e defina o link do áudio
    const ufoSound = new Audio(audioUrl);
    ufoSound.loop = true;

    let position = 0;
    let direction = 1;
    const speed = 2; // Pixels por frame

    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        starContainer.appendChild(star);

        const star2 = document.createElement('div');
        star2.classList.add('star2');
        star2.style.top = `${Math.random() * 100}vh`;
        star2.style.left = `${Math.random() * 100}vw`;
        starContainer2.appendChild(star2);
    }

    function animate() {
        position += speed * direction;
        
        if (position >= window.innerWidth - 100 || position <= 0) {
            direction *= -1;
        }
        
        ufo.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }

    // Tentar reproduzir o som automaticamente
    ufoSound.play().catch(error => {
        console.log("Error playing sound automatically: ", error);
        // Tentar reproduzir o som ao passar o mouse
        ufo.addEventListener('mouseenter', () => {
            ufoSound.play().catch(err => console.log("Error playing sound on mouse enter: ", err));
        }, { once: true });
    });

    animate();
});

