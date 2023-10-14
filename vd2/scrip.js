document.addEventListener("DOMContentLoaded", function () {
    const slideContainer = document.getElementById('slide');
    const items = document.querySelectorAll('.item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            if (i === index) {
                item.style.opacity = 1;
                item.style.zIndex = 2;
                item.querySelector('.content').style.display = 'block';
            } else {
                item.style.opacity = 0;
                item.style.zIndex = 1;
                item.querySelector('.content').style.display = 'none';
            }
        });
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    showItem(currentIndex);
});
