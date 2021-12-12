$(document).ready(function(){
    $('#espresso, #espresso2').click(function(){
        $("#espressoguide").show();
        $("#v60guide").hide();
        $("#aeropressguide").hide();
        $("#frenchpressguide").hide();
        $("#chemexguide").hide();
        $("#mokapotguide").hide();
    });

    $('#v60, #v602').click(function(){
        $("#espressoguide").hide();
        $("#v60guide").show();
        $("#aeropressguide").hide();
        $("#frenchpressguide").hide();
        $("#chemexguide").hide();
        $("#mokapotguide").hide();
    });
  
    $('#aeropress, #aeropress2').click(function(){
        $("#espressoguide").hide();
        $("#v60guide").hide();
        $("#aeropressguide").show();
        $("#frenchpressguide").hide();
        $("#chemexguide").hide();
        $("#mokapotguide").hide();
    });
  
    $('#frenchpress, #frenchpress2').click(function(){
        $("#espressoguide").hide();
        $("#v60guide").hide();
        $("#aeropressguide").hide();
        $("#frenchpressguide").show();
        $("#chemexguide").hide();
        $("#mokapotguide").hide();
    });

    $('#chemex,#chemex2').click(function(){
        $("#espressoguide").hide();
        $("#v60guide").hide();
        $("#aeropressguide").hide();
        $("#frenchpressguide").hide();
        $("#chemexguide").show();
        $("#mokapotguide").hide();
    });

    $('#mokapot, #mokapot2').click(function(){
        $("#espressoguide").hide();
        $("#v60guide").hide();
        $("#aeropressguide").hide();
        $("#frenchpressguide").hide();
        $("#chemexguide").hide();
        $("#mokapotguide").show();
    });
  });