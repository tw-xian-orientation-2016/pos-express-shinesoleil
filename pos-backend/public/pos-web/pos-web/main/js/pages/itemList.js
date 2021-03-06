function appendItems(items, cart) {
  var totalCount = 0;

  items.forEach(function (item) {
    $('table').append(
      '<tr>' +
      '<td>' + item.name + '</td>' +
      '<td>' + item.price + '</td>' +
      '<td>' + item.unit + '</td>' +
      '<td name="count">' + getCount(item.id, cart) + '</td>' +
      '<td>' +
      '<button class="btn btn-warning btn-xs minus" data-attribute=' + item.id + '><span class="glyphicon glyphicon-minus"></span></button> ' +
      '<button class="btn btn-success btn-xs plus" data-attribute=' + item.id + '><span class="glyphicon glyphicon-plus"></span></button>' +
      '</td>' +
      '</tr>');
    totalCount += getCount(item.id, cart);
  });

  $('table').after('<h4 id="totalCount">Total Count: ' + totalCount + '</h4>');
}


$(document).ready(function () {
  $.get('/items', function (items) {
    $.get('/cart', function (cart) {
      var items = JSON.parse(items);
      if (items === undefined) {
        initialse();
      }

      if (cart === undefined) {
        initialse();
      }

      console.log('there')
      appendItems(items, cart);

      addButton();
      minusButton();

      $('button').click(function () {
        var cart = JSON.parse(getData("cart"));
        var totalCount = 0;

        cart.forEach(function (itemCart) {
          totalCount += itemCart.count;
        });

        $('#totalCount').html('Total Count:  ' + totalCount);
      })
    })

  })

});

