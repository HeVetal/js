function myFunc(callback) {
    const a = [2, 3, 4]
    let element = document.querySelector('.out-1')
    callback(element, a)
}

function out(element, arr){
    element.innerHTML = arr.join(' -')
}

myFunc(out)

fetch()