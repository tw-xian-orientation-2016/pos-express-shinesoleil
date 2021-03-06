function addCountSubtotal(id, items, cart) {
  cart.forEach(function (itemCart) {
    if (itemCart.id === id) {
      itemCart.count++;
      itemCart.subtotal += getPrice(id, items);

    }
  });

  return cart;
}

function addButton() {
  $(".plus").click(function () {
    var idItem = this.getAttribute("data-attribute");

    var cart = JSON.parse(getData("cart"));
    var items = JSON.parse(getData("items"));

    var newCart = addCountSubtotal(idItem, items, cart);
    var newCount = getCount(idItem, newCart);
    var newSubtotal = getSubtotal(idItem, newCart);

    $(this).parent().siblings('[name="count"]').text(newCount);
    $(this).parent().siblings('[name="subtotal"]').text(newSubtotal);

    setData("cart", JSON.stringify(newCart));
  })
}
