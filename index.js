import { menuArray } from './data.js'
const menuSection = document.querySelector('#menu-section')

const currentMenuHtml = menuArray.map(function(item){
    return `
        <div class='food-item'>
            <div class='food-info'>
                <div class='food-emojis'>
                    <p class='food-emoji'>${item.emoji}</p>
                </div>
                <div class='food-details'>
                    <p class='food-name'>${item.name}</p>
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

addIcon.addEventListener('click', function(e){
    
})