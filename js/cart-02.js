const cartWraper=document.querySelector('.cart-wrapper');
// Відслідковуєм клік на сторінці
window.addEventListener('click',function(event){
// Перевіряєм що клік був здійснений по кнопці "добавити в корзину"
if (event.target.hasAttribute('data-cart')) {

// знаходим карточку з товаром по якій було здійсненно клік
const card=event.target.closest('.card');
// Збираєм данні з данного обєкта
const productInfo={
 id:card.dataset.id,
 imgSrc:card.querySelector('.product-img').getAttribute('src'),
 title:card.querySelector('.item-title').innerText,
 itemsInBox:card.querySelector('[data-items-in-box]').innerText,
 weight:card.querySelector('.price__weight').innerText,
 price:card.querySelector('.price__currency').innerText,
 counter:card.querySelector('[data-counter]').innerText,
}
const itemInCart= cartWraper.querySelector(`[data-id="${productInfo.id}"]`);
if(itemInCart){
const counterElement=itemInCart.querySelector('[data-counter]');
counterElement.innerText=parseInt(counterElement.innerText) + parseInt(productInfo.counter);
} else{
// Зібранні данні підставим в шаблон для товара в корзині
const cartItemHTML=`<div class="cart-item" data-id="${productInfo.id}">
<div class="cart-item__top">
    <div class="cart-item__img">
        <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
    </div>
    <div class="cart-item__desc">
        <div class="cart-item__title">${productInfo.title}</div>
        <div class="cart-item__weight">${productInfo.itemsInBox}/${productInfo.weight}</div>
        <div class="cart-item__details">
            <div class="items items--small counter-wrapper">
                <div class="items__control" data-action="minus">-</div>
                <div class="items__current" data-counter="">${productInfo.counter}</div>
                <div class="items__control" data-action="plus">+</div>
            </div>
            <div class="price">
                <div class="price__currency">${productInfo.price}</div>
            </div>
        </div>
    </div>
</div>
</div>`;
// Відобразим товар в корзині
cartWraper.insertAdjacentHTML('beforeend',cartItemHTML);
}
// Скидуєм лічильник до одиниці
card.querySelector('[data-counter]').innerText='1';
//Відображення статусу корзини Пуста або Повна 
toggleCartStatus();
}});