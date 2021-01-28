// .menu_btn класс на кнопке бургера
document.querySelector('.menu_btn').addEventListener('click',()=>{
    // .toggle() добавляет класс если его нет и удаляет если он есть
    document.querySelector('.menu_btn').classList.toggle('active')
    document.querySelector('.header_menu').classList.toggle('active')
})
    // .header_menu_item это класс который в ссылках меню
    //  Нужен для закрытия при клике на них
document.querySelectorAll('.header_menu_item').forEach((oneLink) => {
    oneLink.addEventListener('click', () => {
        // oneLink это имя одной ссылки меню. Придумываем сами  названия
        document.querySelector('.menu_btn').classList.toggle('active')
        document.querySelector('.header_menu').classList.toggle('active')
    })
})

// () =>{
//
// }

// .addEventListener(что слушаем,что делаем)
//       <script src=".js/script.js"></script>