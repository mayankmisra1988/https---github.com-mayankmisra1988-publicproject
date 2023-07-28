const mobileMenu=document.querySelector('.mobile-menu');
const scrollBtn=document.querySelector('.scroll-top');
mobileMenu.addEventListener('click',()=>{
    document.querySelector('.menu').classList.toggle('show')

});
window.addEventListener('scroll',function(){
    if(this.document.body.scrollTop>200||this.document.documentElement.scrollTop>200){
        scrollBtn.style.display="block"
    }
    else{
        scrollBtn.style.display="none"
    }
});

scrollBtn.addEventListener('click',()=>{
    document.documentElement.scrollTop=0;
});



