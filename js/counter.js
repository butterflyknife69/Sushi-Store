//Добавляю прослуховування на всьому вікні
window.addEventListener('click',function () {
//Повыдомляэм про Перемінну лічильника    
 let counter;   
//Перевірка чи дійсно ми клікнули по кнопці мінус або плюс
if (event.target.dataset.action==='plus'||event.target.dataset.action==='minus') {
//Знаходим обгортку лічильника
const counterWraper= event.target.closest('.counter-wrapper')
//Знаходим "div" з числом лічильника
 counter= counterWraper.querySelector('[data-counter]');
}
//Перевіряєм чи являється елемент кнопкою Мінус    
if (event.target.dataset.action==='plus') {
    counter.innerText= ++counter.innerText;
}
//Перевіряєм чи являється елемент кнопкою Плюс
if (event.target.dataset.action==='minus') {
//Перевіряєм щоб лічильник був більше на 1 
if (parseInt(counter.innerText)>1) {
    counter.innerText=--counter.innerText;
} else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText)===1){
    event.target.closest('.cart-item').remove();
    toggleCartStatus();
}
}});