 $(document).ready(function(){
    function updateSeclection(){
        var selectedValues = "";
        $('.product_options input[type="radio"]:checked').each(function(){
            selectedValues += (selectedValues ? " / " : "") + $(this).val();
        });
       //select the main variant
       $(".variants option").each(function(){
        if( $(this).text().toLowerCase().trim() == selectedValues.toLowerCase().trim() ){
            $(this).prop("selected", true);
            return false
        }
       })

    }
    $('.product_options input[type="radio"]').change(updateSeclection);
    updateSeclection();
    
 })