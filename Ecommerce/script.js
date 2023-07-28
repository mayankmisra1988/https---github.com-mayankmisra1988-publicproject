var signin_btn=document.querySelector('.signin-btn');
var popup=document.querySelector('.popup');
var popup_open=document.querySelector('.popup .open');
var popup_inner=document.querySelector('.popup-inner');

signin_btn.onclick=function(){
    popup.classList.toggle('open');
}

popup.onclick=function(){
    popup.classList.remove('open');
}
popup_inner.onclick=function(e){
    e.stopPropagation();
}


var cart_btn=document.querySelector('.cart-btn');
var cart_sidebar=document.querySelector('.cart-sidebar');
var close_icon=document.querySelector('.close-icon');

cart_btn.onclick=function(){
    cart_sidebar.style.right="0";
}
close_icon.onclick=function(){
    cart_sidebar.style.right="-400";
}










