// const myCar = {
//     model: 'Tesla',
//     year: 2023
// }
//
// const json = JSON.stringify(myCar)
// console.log(json)
//
// const parsed = JSON.parse(json)
// console.log(parsed)
const list = document.getElementById('list');
// const list = document.querySelector('#list'); the same
const filter = document.getElementById('filter')
let USERS = []

filter.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = USERS.filter((user) => user.name.toLowerCase().includes(value))
    render(filteredUsers)
})


async function start() {
    list.innerHTML = 'Loading...';
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        setTimeout(() => {
            USERS = data
            render(data)
        }, 2000)

    } catch (err) {
        list.style.color = 'red'
        list.innerHTML = err.message
    }
}

function render(users = []) {
    if(users.length === 0){
        list.innerHTML = 'No users found.'
    } else {
        const html = users.map(toHtml).join('')
        list.innerHTML = html
    }
}

function toHtml(user) {
    return `
    <li class="list-group-item">${user.name}</li>
    `
}

start()