// const array = [1, 2, 3, 5, 42]
// const arrayString = ['a', 'v', 'g', null, 42]
// const array2 = new Array(arrayString.length)
//
// // console.log(arrayString.length)
// console.log(array[1])

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value)

// const notes = ['breakfast', 'lunch', 42]

// function render() {
//     // for (let i = 0; i < notes.length; i++) {
//     //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//     // }
//
//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }
// }
//
// render()

// createBtn.onclick = function () {
//     if (inputElement.value.length === 0) {
//         return
//     }
//     listElement.insertAdjacentHTML('beforeend',
//         getNoteTemplate(inputElement.value)
//     )
//     inputElement.value = ''
// }

// function getNoteTemplate(title) {
//     return `
//         <li
//         class="list-group-item d-flex justify-content-between align-items-center"
//             >
//                 <span>${title}</span>
//                 <span>
//                 <span class="btn btn-small btn-success">&check;</span>
//                 <span class="btn btn-small btn-danger">&times;</span>
//               </span>
//             </li>
//             `
// }

const notes = [
    {
        title: 'breakfast',
        completed: false
    },
    {
        title: 'lunch',
        completed: true
    }

]

function render() {
    // for (let i = 0; i < notes.length; i++) {
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
    // }

    for (let note of notes) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    }
}

render()

function getNoteTemplate(note) {
    return `
        <li
        class="list-group-item d-flex justify-content-between align-items-center"
            >
                <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
                <span>
                <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}">&check;</span>
                <span class="btn btn-small btn-danger">&times;</span>
              </span>
            </li>
            `
}

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false
    }
    listElement.insertAdjacentHTML('beforeend',
        getNoteTemplate(newNote)
    )
    inputElement.value = ''
}