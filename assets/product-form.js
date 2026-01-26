$(document).ready(function () {
  if ($('[name="add"]').length > 0) {
    $(document).on("click", "button[name='add']", function (e) {
      e.preventDefault();
      var formData = $(this)
        .closest('.product-form[action="/cart/add"]')
        .serialize();
      $.ajax({
        type: "POST",
        url: "/cart/add.js",
        dataType: "json",
        data: formData,
        success: function (data) {
          console.log(data);
          // $("#offcanvasRight").offcanvas('show');
          getCartDetails();

        },
        error: function (xhr, status, error) {
          console.log("Add to cart error!");
          console.log(xhr.responseJSON);
        },
      });
    });
  }
});

function getCartDetails() {
  fetch("?section_id=header")
    .then((response) => response.text())
    .then((headerData) => {
      var cart_html = $(headerData);
      var cart_count = $('.header-cart-count', cart_html);
      $('.header-cart-count').replaceWith(cart_count);
      console.log(cart_count.text());
    })
    .catch((error) => {
      console.error(error);
    });
}

