const addBtn = document.getElementById('add')
addBtn.addEventListener('click', () =>
    addNewNote()
)

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
    <div class="tools">
    <button class="edit">
        <i class="fas fa-edit">
        </i>
    </button>
    <button class="delete">
        <i class="fas fa-trash-alt"></i>
    </button>
</div>

<div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
`

const editBtn = document.querySelector('.edit')
const deleteBtn = document.querySelector('.delete')
const main = document.querySelector('.main')
const textarea = document.querySelector('.textarea')


deleteBtn.addEventListener('click', () => {
    note.remove()
})
editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden')
    textarea.classList.toggle('hidden')
})



document.body.appendChild(note)
}

localStorage.setItem('name', 'Saloni')
localStorage.getItem('name')

function updateLS() {
    const notesText = document.querySelectorAll('textarea')
    const notes = []
    notesText.forEach(note => notes.push(note.value))
    console.log(notes)
}