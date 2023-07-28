const carousel=document.querySelector(".carousel");
const arrowBtn=document.querySelectorAll(".wrapper i");
const firstCardWidth=carousel.querySelector(".card").offsetWidth;



arrowBtn.forEach(btn=>{
    btn.addEventListener(
        "click",
        ()=>{
            carousel.scrollLeft+=btn.id ==="left" ? -firstCardWidth: firstCardWidth;
            
    })
})


let isDragging=false ,startX ,startScrollLeft;

const dragStart=(e)=>{
    isDragging=true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft=carousel.scrollLeft;
}

const dragging =(e)=>{
    if(! isDragging) return;
    carousel.scrollLeft =startScrollLeft - (e.pageX -startX);
}

const draStop=()=>{
    isDragging=false;
    carousel.classList.remove('dragging');
}



carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("mousemove",dragging);
document.addEventListener("mouseup",draStop);


