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
    console.log(currentVariant)
    selectedVariant('variant', currentVariant);
  });

  updateSeclection();
});
