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
          var offcanvasEl = document.getElementById("offcanvasRight");
          var bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);
          bsOffcanvas.show();
        },
        error: function (xhr, status, error) {
          console.log("Add to cart error!");
          console.log(xhr.responseJSON);
        },
      });
    });
  }
});
