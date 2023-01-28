function toggleCartStatus() {
   const cartWrapper=document.querySelector('.cart-wrapper');
   const cartEmptyBage=document.querySelector('[data-cart-empty]');
   console.log(cartWrapper.children); 
   if (cartWrapper.children.length) {
    console.log('Full');
    cartEmptyBage.classList.add('none');
   }else{
    console.log('Empty');
    cartEmptyBage.classList.remove('none');
   }
}
