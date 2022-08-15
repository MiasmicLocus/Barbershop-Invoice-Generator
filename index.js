let jobList = [
    {
        id: 1,
        name: 'Haircut',
        price: 10
    },
    {
        id: 2,
        name: 'Beard Cut or Trim',
        price: 5
    },
    {
        id: 3,
        name: 'Hair Wash',
        price: 5
    },
    {
        id: 4,
        name: 'Face Cleaning',
        price: 15
    }
]


let buttons = document.getElementById("buttons")
let itemsList = document.getElementById("items-list")
let totalPrice = document.getElementById("total-price")

let Btns = []
let currentList = []
let total = 0


function showButtons() {
     for (let i = 0; i < jobList.length; i++) {
         buttons.innerHTML += `<button id = item-${jobList[i].id} onclick="addToList(${jobList[i].id})"> ${jobList[i].name} </button>`
     }    
}

function addToList (id) {
        if (currentList.includes(id)) {
            var i = currentList.indexOf(id);
            if (i !== -1) {
                currentList.splice(i, 1);
            }
            else console.log('this is strange. Looks like someone is messing with Dark Magic')
        }
        else currentList.push(id)
    showList(currentList)
    showTotal(currentList)
}

function showList(list) {
    itemsList.innerHTML = ''
      for (let i = 0; i < list.length; i++) {
          if(jobList.some(e => e.id == list[i])) {
            itemsList.innerHTML += `<li> ${jobList[list[i]-1].name} ${jobList[list[i]-1].price}$ </li>`
    }
     }       
 }
 
 function showTotal(list) {
     total = 0
      for (let i = 0; i < list.length; i++) {
          if(currentList.includes(list[i])) {
            total += jobList[list[i]-1].price
          }
     }       
     totalPrice.textContent = `Total: ${total}$`
 }

function main() {
    showButtons()
}