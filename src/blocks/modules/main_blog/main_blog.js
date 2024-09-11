const BlockBlog = class BlockBlog {
    constructor(){}
    initBtnMore() {
        document.addEventListener("DOMContentLoaded", function () {
            const items = document.querySelectorAll('.main_blog__item');
            const loadMoreBtn = document.querySelector('.main_blog__more');
            let itemsPerPage = 6;  // Количество элементов на одну "страницу"
            let currentItem = 0;
        
            // Функция для отображения элементов
            function showItems() {
                for (let i = currentItem; i < currentItem + itemsPerPage && i < items.length; i++) {
                    items[i].style.display = 'block';
                }
                currentItem += itemsPerPage;
        
                // Скрываем кнопку, если больше нечего показывать
                if (currentItem >= items.length) {
                    loadMoreBtn.style.display = 'none';
                }
            }
        
            // Изначальное отображение первых 6 элементов
            showItems();
        
            // Обработчик клика на кнопку "Показать еще"
            loadMoreBtn.addEventListener('click', function () {
                showItems();
            });
        });
        
    }
    init() {
        this.initBtnMore();
    }
}

export default BlockBlog;