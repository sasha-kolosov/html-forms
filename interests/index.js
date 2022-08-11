const one = document.getElementById('1')
const oneOne = document.getElementById('1-1')
const oneTwo = document.getElementById('1-2')
const two = document.getElementById('2')
const twoOne = document.getElementById('2-1')
const twoTwo = document.getElementById('2-2')

one.addEventListener('change', () => {
    one.checked = true
    oneOne.checked = true
    oneTwo.checked = true
})

two.addEventListener('change', () => {
    two.checked = true
    twoOne.checked = true
    twoTwo.checked = true
})