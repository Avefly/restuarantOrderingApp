import { menuArray } from '/data.js'
const menuSection = document.querySelector('#menu-section')

const currentMenuHtml = menuArray.map(function(item){
    return `
        <div class='food-item'>
            <div class='food-emojis'>
                <p class='food-emoji'>${item.emoji}</p>
            </div>
            <div class='food-details'>
                <p class='food-name'>${item.name}</p>
                <p class='ingredients'>${item.ingredients}</p>
                <p class='price'>${item.price}</p>
            </div>
        </div>
        `
}).join('')

menuSection.innerHTML = currentMenuHtml