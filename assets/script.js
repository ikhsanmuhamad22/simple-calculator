let result = document.querySelector('.hasil')
let input1 = document.querySelector('#inputNumber1')
let input2 = document.querySelector('#inputNumber2')

document.querySelector('.tambah').addEventListener('click', function () {
    if (input1.value == !Number || input2 == !Number) {
        alert('Tolong input terlebih dahulu')
    } else {
        result.innerHTML = parseInt(input1.value) + parseInt(input2.value)
        input1.value = ''
        input2.value = ''
    }

})
document.querySelector('.kurang').addEventListener('click', function () {
    if (input1.value == !Number || input2 == !Number) {
        alert('Tolong input terlebih dahulu')
    } else {
        result.innerHTML = input1.value - input2.value
        input1.value = ''
        input2.value = ''
    }
})
document.querySelector('.kali').addEventListener('click', function () {
    if (input1.value == !Number || input2 == !Number) {
        alert('Tolong input terlebih dahulu')
    } else {
        result.innerHTML = input1.value * input2.value
        input1.value = ''
        input2.value = ''
    }
})
document.querySelector('.bagi').addEventListener('click', function () {
    if (input1.value == !Number || input2 == !Number) {
        alert('Tolong input terlebih dahulu')
    } else {
        result.innerHTML = input1.value / input2.value
        input1.value = ''
        input2.value = ''
    }
})
document.querySelector('.riset').addEventListener('click', function () {
    result.innerHTML = '0'

})
