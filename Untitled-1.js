"use strict";
    document.addEventListener('DOMContentLoaded', function () {
        // Отримуємо зображення верхнього слайду
        var topSlideImages = document.querySelectorAll('.slide');
        var topSlideIndices = [0, 1, 2]; // Початкові індекси верхнього слайду

        // Отримуємо зображення нижнього слайду
        var bottomSlideImages = document.querySelectorAll('.slide1');
        var bottomSlideIndices = [0, 1, 2]; // Початкові індекси нижнього слайду

        // Функція, яка приховує всі зображення слайдів
        function hideAllSlides(slideImages) {
            for (var i = 0; i < slideImages.length; i++) {
                slideImages[i].style.display = 'none';
            }
        }

        // Функція, яка показує конкретні зображення слайдів
        function showSlides(slideImages, indices) {
            hideAllSlides(slideImages);
            for (var i = 0; i < indices.length; i++) {
                if (indices[i] < slideImages.length) {
                    slideImages[indices[i]].style.display = 'block';
                }
            }
        }

        // Функція, яка показує наступні фото верхнього слайду
        function showNextTopSlides() {
            for (var i = 0; i < topSlideIndices.length; i++) {
                topSlideIndices[i] = (topSlideIndices[i] + 1) % topSlideImages.length;
            }
            showSlides(topSlideImages, topSlideIndices);
        }

        // Функція, яка показує наступні фото нижнього слайду
        function showNextBottomSlides() {
            for (var i = 0; i < bottomSlideIndices.length; i++) {
                bottomSlideIndices[i] = (bottomSlideIndices[i] + 1) % bottomSlideImages.length;
            }
            showSlides(bottomSlideImages, bottomSlideIndices);
        }

        // Початкова ініціалізація: приховуємо всі слайди і показуємо перші 3
        hideAllSlides(topSlideImages);
        hideAllSlides(bottomSlideImages);
        showSlides(topSlideImages, topSlideIndices);
        showSlides(bottomSlideImages, bottomSlideIndices);

        // Інтервал для автоматичної зміни верхнього слайду
        setInterval(showNextTopSlides, 3000);

        // Інтервал для автоматичної зміни нижнього слайду
        setInterval(showNextBottomSlides, 3000);
    });
