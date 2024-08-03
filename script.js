$(document).ready(function() {
    var slideWidth = $('.menu-item').outerWidth(true);
    var totalSlides = $('.menu-item').length;
    var visibleSlides = Math.floor($('.menu-slider').width() / slideWidth);
    var currentSlide = 0;

    $('.prev-btn').click(function() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    });

    $('.next-btn').click(function() {
        if (currentSlide < totalSlides - visibleSlides) {
            currentSlide++;
            updateSlider();
        }
    });

    function updateSlider() {
        var translateValue = -currentSlide * slideWidth;
        $('.menu-container').css('transform', 'translateX(' + translateValue + 'px)');
    }
});

//cart
function addToCart() {
  // Increment the cart count
  var cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
  cartCount++;
  localStorage.setItem('cartCount', cartCount);

  // Update the cart icon with the new count
  document.getElementById('cart-count').textContent = cartCount;

  // Get item details
  var itemName = 'Food 1';
  var itemDescription = 'Description of Food 1';
  var itemPrice = 10.00;
  var itemImage = 'food1.jpg';

  // Add item to cart
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.push({
    name: itemName,
    description: itemDescription,
    price: itemPrice,
    image: itemImage
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
