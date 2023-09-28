const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]


const toppings = [{
    name: 'Sprinkles',
    price: .25,
    quantity: 0
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
}]


// SECTION FUNCTIONS 


function increaseQuantity(itemName) {
    console.log('here is the passed item', itemName)

    const foundItem = iceCream.find(iceCream => iceCream.name == itemName)
    foundItem.quantity++

    console.log(foundItem)
    drawHTML()

}
function increaseToppings(itemName) {


    const foundItem = toppings.find(toppings => toppings.name == itemName)
    foundItem.quantity++



    console.log(foundItem)
    drawHTML()
}


function drawHTML() {
    let HTML = ''
    let total = ''


    iceCream.forEach(iceCream => {
        if (iceCream.quantity > 0) {
            const totalCost = (iceCream.price * iceCream.quantity).toFixed(2)
            HTML += `<p> ${iceCream.name} Quantity: ${iceCream.quantity} Price $${iceCream.price}</p>`

        }
    })
    toppings.forEach(toppings => {
        if (toppings.quantity > 0) {
            const totalCost = (toppings.price * toppings.quantity).toFixed(2)
            HTML += `<p> ${toppings.name} Quantity: ${toppings.quantity} Price $${toppings.price}</p>`

        }
    })



    toppings.forEach(toppings => {
        if (toppings.quantity > 0) {
            const totalCost = (toppings.price * toppings.quantity).toFixed(2)
            total += totalCost

            const cartTotal = document.getElementById('total')
            cartTotal.innerText = total

            const addedItem = document.getElementById('cart')
            addedItem.innerHTML = HTML





        }

    })
}
