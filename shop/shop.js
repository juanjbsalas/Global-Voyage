document.getElementById("addToCartBtn").addEventListener("click", function(){
    const message = document.getElementById("cartMessage");
    message.textContent = "Added to Cart!";
    message.style.color = "green";

    //Optional: hide message after 3 seconds
    setTimeout(()=> {
        message.textContent = "";
    }, 3000);
});