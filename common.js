//FAQ
$(document).ready(function(){
    $('#p01').hide();
    $('#p1').click(function(){
        $('#p01').show();
        $('#plus1').hide();
        $('#p1').css({"font-style": "italic"});
        
    })
    $('#p01').click(function(){
        $('#p01').hide();
        $('#plus1').show();
        $('#p1').css({"font-style": "normal"});
    })

    $('#p02').hide();
    $('#p2').click(function(){
        $('#p02').show();
        $('#plus2').hide();
        $('#p2').css({"font-style": "italic"});
    })
    $('#p02').click(function(){
        $('#p02').hide();
        $('#plus2').show();
        $('#p2').css({"font-style": "normal"});
    })

    $('#p03').hide();
    $('#p3').click(function(){
        $('#p03').show();
        $('#plus3').hide();
        $('#p3').css({"font-style": "italic"});
    })
    $('#p03').click(function(){
        $('#p03').hide();
        $('#plus3').show();
        $('#p3').css({"font-style": "normal"});
    })
});


//CART
const cart = [];  

function Cart(itemname, Cost) { 
    
    function Product(unit) { 
        return unit.itemname === itemname;
    }

    const product = cart.find(Product); 

    if (product) {
        product.quantity++;
    } else {
        cart.push({ itemname, Cost, quantity: 1 }); 
    }

    update(); 
}
      
function deleteitem(itemname) { 
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
        removeButton.textContent = "Delete"; 
        removeButton.className = "delete";
        removeButton.onclick = () => deleteitem(unit.itemname);  

        cartItem.textContent = `${unit.itemname} x${unit.quantity} - £${(unit.Cost * unit.quantity).toFixed(2)}`; 
        
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