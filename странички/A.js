const cards = document.querySelectorAll('.card');
const pageIdentifiers = ['galleryPage1', 'galleryPage2', 'galleryPage3', 'galleryPage4', 'galleryPage5', 'galleryPage6', 'galleryPage7']; // Уникальные идентификаторы для каждой страницы
const currentPageIdentifier = window.location.pathname.split('/').pop().split('.')[0]; // Получаем имя текущей страницы

// Проверяем, что текущая страница есть в массиве идентификаторов
if (!pageIdentifiers.includes(currentPageIdentifier)) {
    console.error('Неверный идентификатор страницы:', currentPageIdentifier);
}

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        // Сохраняем состояние карточки в localStorage с уникальным идентификатором страницы
        localStorage.setItem(`${currentPageIdentifier}_card${index}`, card.classList.contains('flipped') ? 'true' : 'false');
    });
});

// При загрузке страницы восстанавливаем состояние изображений
window.onload = function() {
    restoreImagesState();
};

function restoreImagesState() {
    // Проверяем состояние каждой карточки и восстанавливаем его
    cards.forEach((card, index) => {
        const key = `${currentPageIdentifier}_card${index}`;
        if (localStorage.getItem(key) === 'true') {
            card.classList.add('flipped'); // Добавляем класс 'flipped' если состояние 'true'
        }
    });
}