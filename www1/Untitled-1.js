"use strict";

var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName('slide');
    
    // Приховуємо всі фотографії
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Визначаємо індекси початкової і кінцевої фотографії, які будуть відображені
    var startIndex = slideIndex * 3;
    var endIndex = startIndex + 3;

    // Відображаємо обрані фотографії
    for (var j = startIndex; j < endIndex; j++) {
        if (slides[j]) {
            slides[j].style.display = 'block';
        }
    }

    slideIndex++;

    // Якщо досягнуто кінця фотографій, повертаємося до початку
    if (endIndex >= slides.length) {
        slideIndex = 0;
    }

    setTimeout(showSlides, 2000); // Змінюйте цей інтервал, якщо потрібно
}
