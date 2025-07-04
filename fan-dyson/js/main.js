(function () {

// Бургер

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // сортировка

    function toggleSorting() {
        document.querySelector('.sorting').classList.toggle('active');
    }

    function selectOption(element, type) {
        document.querySelectorAll('.sorting-option').forEach(opt => {
            opt.classList.remove('selected');
        });

        element.classList.add('selected');

        document.querySelector('.sorting-toggle span:first-child').textContent = element.querySelector('span:first-child').textContent;

        document.querySelector('.sorting').classList.remove('active');

        console.log('Сортировка по:', type);
    }

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.sorting')) {
            document.querySelector('.sorting').classList.remove('active');
        }
    });

    // value

    document.addEventListener('DOMContentLoaded', function() {
            const minusBtn = document.querySelector('.minus');
            const plusBtn = document.querySelector('.plus');
            const quantityInput = document.querySelector('.quantity-value');
            
            minusBtn.addEventListener('click', function() {
                let value = parseInt(quantityInput.value);
                if (value > 1) {
                    quantityInput.value = value - 1;
                }
            });
            
            plusBtn.addEventListener('click', function() {
                let value = parseInt(quantityInput.value);
                quantityInput.value = value + 1;
            });
        });

    // FAQ

    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentNode;
            item.classList.toggle('active');

            // Закрываем другие открытые вопросы
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
})();