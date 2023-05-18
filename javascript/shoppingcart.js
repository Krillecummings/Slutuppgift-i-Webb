document.addEventListener("DOMContentLoaded", function() {
  // Här hämtas referenser till relevanta DOM-element
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  const cartItemsContainer = document.querySelector(".cart-items");
  const totalPriceElement = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  // Här läggs priset och varorna i en array
  let cartItems = [];
  let totalPrice = 0;

  
  function updateCartUI() {
    cartItemsContainer.innerHTML = "";

    
    cartItems.forEach(function(item) {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");

      // Här skapas ett span-element för objektets namn
      const itemName = document.createElement("span");
      itemName.textContent = item.name;
      cartItem.appendChild(itemName);

      // Här Skapas ett span-element för objektets pris
      const itemPrice = document.createElement("span");
      itemPrice.textContent = item.price + " kr";
      cartItem.appendChild(itemPrice);

     
      cartItemsContainer.appendChild(cartItem);
    });

    // Här Uppdateras totalpriset med det aktuella totalpriset
    totalPriceElement.textContent = totalPrice.toFixed(2) + " kr";
  }

  // Här läggs det till händelselyssnare på varje "Lägg till varukorg" knapp
  addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Här hämtas objektets namn och pris från knappens data-attribut
      const itemName = button.dataset.name;
      const itemPrice = parseFloat(button.dataset.price);

      // Här Skapas ett nytt objekt för varan
      const newItem = {
        name: itemName,
        price: itemPrice
      };

      // Lägg till varan i varukorgen och uppdatera totalpriset
      cartItems.push(newItem);
      totalPrice += itemPrice;

      // Uppdatera varukorgens gränssnitt
      updateCartUI();
    });
  });

  // Lägg till händelselyssnare på knappen
  checkoutBtn.addEventListener("click", function() {

    // Hanterar köper här

    console.log("Hanterar köp...");
    console.log("Tack för ditt köp! Vi hoppas att se dig snart igen.");
  });
});
