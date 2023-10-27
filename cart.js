const cart = [];  

function Cart(itemname, Cost) { 
    
    function findProduct(unit) { 
        return unit.itemname === itemname;
    }

    const product = cart.find(findProduct); 

    if (product) {
        product.quantity++;
    } else {
        cart.push({ itemname, Cost, quantity: 1 }); 
    }

    update(); 
}
      
function removeitem(itemname) { 
    const index = cart.findIndex(unit => unit.itemname === itemname); 

    if (index !== -1) {  
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1); 
        }

        update(); 
    }
}

function update() {
    const Items = document.getElementById("Items"); 
    Items.innerHTML = "";

    let total = 0; 

    cart.forEach(unit => { 
        const cartItem = document.createElement("li"); 
        const removeButton = document.createElement("button"); 
        removeButton.textContent = "Remove"; 
        removeButton.className = "remove";
        removeButton.onclick = () => removeitem(unit.itemname);  

        cartItem.textContent = `${unit.itemname} x${unit.quantity} - $${(unit.Cost * unit.quantity).toFixed(2)}`; 
        
        cartItem.appendChild(removeButton);
        Items.appendChild(cartItem);
        total += unit.Cost * unit.quantity;
    });

    const Total = document.getElementById("Total");
    Total.textContent = total.toFixed(2); 
}

function checkout() {
    alert("Order Completed!");
    location.reload();
}