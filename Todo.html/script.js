const item=document.querySelector('#item');
const ToDoBox=document.querySelector('#toDoBox');

item.addEventListener(
    'keyup',
    function(e){
        if(e.key=='Enter'){
            addToDoLi(this.value)
            this.value=""
        }
    }
)
const addToDoLi =(item)=>{
    const listItem=document.createElement('li');
    listItem.innerHTML=`
        ${item}
        <i class="fas fa-times"></i>
    `;
    listItem.addEventListener(
        "click",
        function (){
            this.classList.toggle("done");
        }
    )
    listItem.querySelector('i').addEventListener(
        'click',
        function(){
            listItem.remove()
        }
    )
    ToDoBox.appendChild(listItem);
}



