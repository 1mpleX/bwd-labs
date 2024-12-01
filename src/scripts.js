document.querySelector('.burger-menu').addEventListener('click', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Переключение классов для бургер-меню и навигационного меню
    burgerMenu.classList.toggle('active');
    navLinks.classList.toggle('show');
});


// Обработчик для кнопки добавления задачи
document.getElementById('add-task-btn').addEventListener('click', () => {
    document.getElementById('task-modal').showModal();
});

// Обработчик для закрытия модального окна по клику вне окна
document.getElementById('task-modal').addEventListener('click', (e) => {
    if (e.target.tagName === 'DIALOG') {
        e.target.close();
    }
});

// Обработчик для кнопки отмены в модальном окне
document.querySelector('button[value="cancel"]').addEventListener('click', () => {
    document.getElementById('task-modal').close();
});


