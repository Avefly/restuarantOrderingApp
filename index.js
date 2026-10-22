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
const orderSection = document.querySelector('#order-section')
let customerOrder = []

function renderOrder() {
    let counts = {'Pizza': 0, 'Hamburger': 0, 'Beer': 0}
    customerOrder.forEach(function(item){
        counts[item] += 1
    })
    // console.log(counts)
    orderSection.innerHTML = `
    
    `
}

menuSection.addEventListener('click', function(e){
    if (e.target.classList.contains('add-icon')) {
        let placement = e.target.parentElement.parentElement.id
        customerOrder.push(menuArray[placement].name)
        renderOrder()
        // console.log(customerOrder)
    }
})
