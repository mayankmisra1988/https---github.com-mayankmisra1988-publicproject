const addBtn=document.querySelector("#addBtn");
const main=document.querySelector("#main");

const saveNotes =()=>{
    const notes=document.querySelectorAll(".note textarea");
    console.log(notes)
    const data=[];
    notes.forEach(
        (note)=>{
            data.push(note.value)
        }
    )
    // console.log(data)
    localStorage.setItem('notes',JSON.stringify(data))
}

addBtn.addEventListener(
    "click",
    function (){
        addNote();
    }
)
const addNote =(text="")=>{
    const note=document.createElement('div');
    note.classList.add('note');
    note.innerHTML=`
    <div class="tool">
        <button class="save"> <i class="fas fa-save"></i></button>
        <button class="trash"><i class="fas fa-trash"></i></button>
    </div>
    <textarea >${text}</textarea>
    `;
    note.querySelector(".trash").addEventListener(
        "click",
        function (){
            note.remove();
            saveNotes();
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNotes();

        }
    )
    main.appendChild(note);
    saveNotes();
}

(  
    function(){
        const lsnotes=JSON.parse(localStorage.getItem("notes"));

        lsnotes.forEach(
            (lsNote)=>{
                addNote(lsNote)
            }
        )
        
    }
)()



