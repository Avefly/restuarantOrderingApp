import { menuArray } from './data.js'
const menuSection = document.querySelector('#menu-section')

const currentMenuHtml = menuArray.map(function(item){
    return `
        <div class='food-item' id=${item.id}>
            <div class='food-info'>
                <div class='food-emojis'>
                    <p class='food-emoji'>${item.emoji}</p>
                </div>
                <div class='food-details'>
                    <p class='big-text'>${item.name}</p>
                    <p class='ingredients'>${item.ingredients.join(', ')}</p>
                    <p class='price'>$${item.price}</p>
                </div>
            </div>
            <div class='add'>
                <i class="fa-solid fa-circle-plus add-icon"></i>
            </div>
        </div>
        `
}).join('')

menuSection.innerHTML = currentMenuHtml

const addIcon = document.querySelector('.add-icon')
const orderDetails = document.querySelector('.order-details')
const orderSection = document.querySelector('#order-section')
const orderButton = document.querySelector('.order-button')
const priceInfo = document.querySelector('.price-info')
const cardSection = document.querySelector('.card-section')
let customerOrder = []

function getCounts(arr) {
    let counts = {}
    arr.forEach(item => {
        counts[item] = (counts[item] || 0) + 1;
    });
    return counts
}

function getItemCost(price, num){
    return price * num
}

function renderOrder() {
    let count = getCounts(customerOrder)
    orderDetails.innerHTML = ''
    orderSection.classList.remove('hidden')
    let priceArr = []
    Object.keys(count).forEach((key) => {
        let price = getItemCost(menuArray[key].price, count[key])
        priceArr.push(price)
        orderDetails.innerHTML += `
        <div class='order-item'>
            <div class='order-format' id=${[key]}>
                <p>${menuArray[key].name} x${count[key]}</p>
                <button class='remove-btn'>remove</button>
            </div>
            <p>$${price}</p>
        </div>
        `
    })
    let totalPrice = priceArr.reduce((a, b) => a + b, 0)
    priceInfo.innerHTML = `
    <p class=big-text> Total Price </p>
    <p>$${totalPrice}</p>
    `
}

menuSection.addEventListener('click', function(e){
    if (e.target.classList.contains('add-icon')) {
        let placement = e.target.parentElement.parentElement.id
        customerOrder.push(menuArray[placement].id)
        renderOrder()
    }
})

const removeBtn = document.querySelector('.remove-btn')

orderSection.addEventListener('click', function(e){
    if (e.target.classList.contains('remove-btn')) {
        let keyName = Number(e.target.parentElement.id)
        customerOrder = customerOrder.filter(item => item !== keyName)
        renderOrder()
    }
    if(orderDetails.innerHTML === ``) {
        orderSection.classList.add('hidden')
    }
    if(e.target.classList.contains('order-button')) {
        cardSection.classList.remove('hidden')
    }
})
