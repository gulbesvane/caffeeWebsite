$(document).ready(function(){
    $("#espresso").click(function(){
        $("#espressoguide").show();
        $("#v60guide").hide();
        $("#aeropressguide").hide();
        $("#frenchpressguide").hide();
        $("#chemexguide").hide();
        $("#mokapotguide").hide();
    });

    $("#v60").click(function(){
        $("#espressoguide").hide();
        $("#v60guide").show();
        $("#aeropressguide").hide();
        $("#frenchpressguide").hide();
        $("#chemexguide").hide();
        $("#mokapotguide").hide();
    });
  
    $("#aeropress").click(function(){
        $("#espressoguide").hide();
        $("#v60guide").hide();
        $("#aeropressguide").show();
        $("#frenchpressguide").hide();
        $("#chemexguide").hide();
        $("#mokapotguide").hide();
    });
  
    $("#frenchpress").click(function(){
        $("#espressoguide").hide();
        $("#v60guide").hide();
        $("#aeropressguide").hide();
        $("#frenchpressguide").show();
        $("#chemexguide").hide();
        $("#mokapotguide").hide();
    });

    $("#chemex").click(function(){
        $("#espressoguide").hide();
        $("#v60guide").hide();
        $("#aeropressguide").hide();
        $("#frenchpressguide").hide();
        $("#chemexguide").show();
        $("#mokapotguide").hide();
    });

    $("#mokapot").click(function(){
        $("#espressoguide").hide();
        $("#v60guide").hide();
        $("#aeropressguide").hide();
        $("#frenchpressguide").hide();
        $("#chemexguide").hide();
        $("#mokapotguide").show();
    });
  });