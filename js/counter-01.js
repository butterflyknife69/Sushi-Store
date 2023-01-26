//Знаходим елементи на сторінці для взаємодії кнопеи мінус плюс і ТД.
const btnMinus= document.querySelector('[data-action="minus"]');
const btnPlus= document.querySelector('[data-action="plus"]');
const counter=document.querySelector('[data-counter]');
//Відслідковуєм клік на Кнопку мінус
btnMinus.addEventListener('click',function(){
//Перевіряєм щоб лічильник був блільше 1
    console.log('Minus click');
if (parseInt(counter.innerText)>1) {
    counter.innerText=--counter.innerText;
}});
//Відслідковуєм клік на Кнопку Плюс
btnPlus.addEventListener('click',function(){
    console.log('Plu s click');
//Збільшуєм лічильник на 1    
    counter.innerText= ++counter.innerText;
});


