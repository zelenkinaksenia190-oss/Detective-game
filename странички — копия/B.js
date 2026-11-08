const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        // Сохраняем состояние карточки в localStorage
        localStorage.setItem(`card${index}`, card.classList.contains('flipped') ? 'true' : 'false');
    });
});

// При загрузке страницы восстанавливаем состояние изображений
window.onload = function() {
    restoreImagesState();
};

function restoreImagesState() {
    // Проверяем состояние каждой карточки и восстанавливаем его
    cards.forEach((card, index) => {
        const key = `card${index}`;
        if (localStorage.getItem(key) === 'true') {
            card.classList.add('flipped'); // Добавляем класс 'flipped' если состояние 'true'
        }
    });
}