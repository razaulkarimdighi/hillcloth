$(document).ready(function () {
  function selectedVariant(param, value){
    var url = new URL(window.location.href);

    url.searchParams.set(param, value)
    window.history.replaceState({},'',url)
  }
  function updateSeclection() {
    var selectedValues = "";
    $('.product_options input[type="radio"]:checked').each(function () {
      selectedValues += (selectedValues ? " / " : "") + $(this).val();
    });

    $(".product_options select option:selected").each(function () {
      selectedValues += (selectedValues ? " / " : "") + $(this).val();
    });

    //select the main variant
    $(".variants option").each(function () {
      if (
        $(this).text().toLowerCase().trim() ==
        selectedValues.toLowerCase().trim()
      ) {
        $(this).prop("selected", true);
        return false;
      }
    });
  }
  $('.product_options input[type="radio"]').change(function(){
    updateSeclection();

    var currentVariant =  $(".variants").val();
    var variantAvailable = $(".variants").find("option:selected").data('available');
    if(variantAvailable == false){
      $(".cart-buttons > button").prop('disabled', true);
      $(".cart-buttons > button").text('Not Available');
    }
    else{
      $(".cart-buttons > button").prop('disabled', false);
      $(".cart-buttons > button").text('Add to Cart');
    }
    selectedVariant('variant', currentVariant);
  });

  updateSeclection();
});
