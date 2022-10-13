const onScrollAnimationElements = document.querySelectorAll('.onScrollAnimation');
const elementVisible = 150;

function playInAnimationOnScroll() {
    const windowHeight = window.innerHeight;
    
    for (let i = 0; i < onScrollAnimationElements.length; i++) {
        const element = onScrollAnimationElements[i];
        if (element.dataset.onScrollAnimPlayed !== '1') {
            const elementPosition = element.getBoundingClientRect().top;

            if (elementPosition - windowHeight <= elementVisible) {
                element.classList.add(element.dataset.onScrollAnimName);
                element.dataset.onScrollAnimPlayed = '1';
            }
        }
    }
}

window.onscroll = () => {
    playInAnimationOnScroll();
};

playInAnimationOnScroll();

console.log(
    "%cFacepunch if you see this, please hire me!",
    "color: white; font-size: 100px; background-color: black;"
);