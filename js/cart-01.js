// Відслідковуєм клік на сторінці
window.addEventListener('click',function(event){

// Перевіряєм що клік був здійснений по кнопці "добавити в корзину"
if (event.target.hasAttribute('data-cart')) {


// знаходим карточку з товаром по якій було здійсненно клік
const card=event.target.closest('.card')
console.log(card);
}


})