import { menuArray } from '/data.js'
const menuSection = document.querySelector('#menu-section')

const currentMenuHtml = menuArray.map(function(item){
    return `
        <div class='food-menu'>
            <div class='food-emojis'>
                <p>${item.emoji}</p>
            </div>
            <div class='food-details'>
                <h3>${item.name}</h3>
                <p class='ingredients'>${item.ingredients}</p>
                <p>${item.price}</p>
            </div>
        </div>
        `
})

menuSection.innerHTML = currentMenuHtml