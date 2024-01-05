/* VARIABLES */
let starRating = document.querySelectorAll('.star');
let submitBtn = document.querySelector('.submit');
let cardResult = document.querySelector('.card_result');
let cardFeedback = document.querySelector('.card_feedback');

/* RATING */
starRating.forEach((star) => {
    star.addEventListener('click', () => {
        disableStar();
        selectStar(star);
    });
});

function selectStar(star) {
    star.classList.toggle('active');
}

function disableStar() {
    const starSelected = document.querySelector('.active');
    starSelected.classList.remove('active');
}

/* SUBMIT */
submitBtn.addEventListener('click', () => {
    cardFeedback.classList.add('hidden');
    cardResult.classList.remove('hidden');
});


/* FEEDBACK */
