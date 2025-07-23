const shopping = document.querySelector(".cart");
document.querySelector("#button-close").addEventListener("click", 
    function(){
        shopping.style.display="none";
    }
)
document.querySelector("#img-shopping").addEventListener("click", 
    function(){
        shopping.style.display="block";
    }
)






let slideindex=0;
showSlides();
function showSlides(){
    let slides=document.getElementsByClassName("slides");
    for (let i = 0; i<slides.length; i++){
        slides[i].classList.remove("active");
    }
    slideindex++;
    if (slideindex> slides.length){
        slideindex=1;

    }
    slides[slideindex-1].classList.add("active");
    setTimeout(showSlides,2000);
}










const cartList = document.getElementById("cart-list");

const checkoutBtn = document.getElementById("checkout-btn");

const clearCartBtn = document.getElementById("clear-cart-btn");

const paymentForm = document.querySelector(".payment-form");
const cart = document.querySelector(".cart");

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", event => {
    
        const product = event.target.parentNode;
        const productName = product.querySelector("h2").textContent;
        const productPrice = product.querySelector(".price").textContent;
        const productRating = product.querySelector(".rating").textContent;
        const cartItem =document.createElement("td");
        const cartItem_tr_1 = document.createElement("tr");
        const cartItem_tr_2 = document.createElement("tr");
        const removeBtn = document.createElement("button");
        removeBtn.textContent="delet";

         cartItem_tr_1.textContent=productName;
         cartItem_tr_2.textContent = ` ${productPrice} - ${productRating}`;
         
        // for(let i=0; i<zero;i++)

         removeBtn.addEventListener("click", event => {
             cartItem.remove();
            
            });
        cartItem_tr_2.appendChild(removeBtn);
        cartItem.appendChild(cartItem_tr_1);
        cartItem.appendChild(cartItem_tr_2);
        cartList.appendChild(cartItem);
    });
});

    // Add event listener to the clear cart button
    clearCartBtn.addEventListener("click", event => {
        cartList.innerHTML = "";
    });
    
    // Add event listener to the checkout button
    checkoutBtn.addEventListener("click", event => {
        
        updateCart();
       
    });

    // Add event listener to the pay button
    document.getElementById("pay-btn").addEventListener("click", event => {
        // Replace with actual payment processing logic
        alert("Payment successful!");
    });
    document.getElementById("button-closs-bay").addEventListener("click", event => {
        // Replace with actual payment processing logic
        paymentForm.style.display = "none";
    });

    // Update the cart and payment form display
    function updateCart() {
        if (cartList.children.length < 0) {
            paymentForm.style.display = "none";
        } else {
            paymentForm.style.display = "block";
        }
    }