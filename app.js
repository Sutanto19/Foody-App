//Showing navbar Mobile version

const mobile = document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

//Close

mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars) {
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
})

//Clicking Back and Next Main Menu

var step = 100;
var stepFilter = 60;
var scrolling = true;

$(".back").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    });
});


//Menu Filters
$(".back-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepFilter + "px"
    })
});

$(".next-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + stepFilter + "px"
    })
});

// Add event listener to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const productId = event.target.dataset.id; // Retrieve product ID from data attribute
    const productName = event.target.closest('.detail-card').querySelector('h4').textContent;
    const productPrice = event.target.closest('.detail-card').querySelector('.price').textContent;

    // Store product information in local storage or JavaScript array
    const product = { id: productId, name: productName, price: productPrice };
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Redirect to cart page
    window.location.href = 'bill.html';
}
