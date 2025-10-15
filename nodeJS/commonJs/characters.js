let characters = [
    {name: 'Фродо', hasRings: false},
    {name: 'Бильбо', hasRings: false},
]

function stealRings(characters, owner) {
    return characters.map(c => {
        if (c.name === owner) {
            c.hasRings = true;
        } else {
            c.hasRings = false;
        }
    })
}

// module.exports = {characters, stealRings};
module.exports = function () {
    console.log('log');
}