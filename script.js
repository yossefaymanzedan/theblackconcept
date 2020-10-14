$(document).ready(function(){
    $("#n2").click(function(){
      $('.container').addClass('container-anim')
      $('.container').addClass('container-anim2')
      $("#h1").html("Custom Your Own");
    $("#n2").addClass("active")
    $("#n2").removeClass("no-active")
  $("#n1").removeClass("active")
  $("#n1").addClass("no-active")
  $("#n3").removeClass("active")
  $("#n1").addClass("no-active")
  $("#n3").addClass("no-active")
      $('.image1').css('background-image', 'url("https://i.pinimg.com/564x/6a/05/00/6a0500631622837f4831dee43de7e9b1.jpg")');
      $('.container').css('background-image', 'url("https://i.pinimg.com/564x/6a/05/00/6a0500631622837f4831dee43de7e9b1.jpg")');
  
  
    });
  });
  $(document).ready(function(){
 
    $("#n1").click(function(){
      $("#h1").html("2020 Models");
    $("#n1").addClass("active")
    $("#n1").removeClass("no-active")
  $("#n2").removeClass("active")
  $("#n3").removeClass("active")
  $("#n2").addClass("no-active")
  $("#n3").addClass("no-active")
  
  $("#h1").css('margin-top', -100)
      $('.image1').css('background-image', 'url("https://www.allisonbarbera.com/wp-content/uploads/2018/02/charlotte-tilbury-wonder-glow-review-swatches-2.jpg")');
      $('.container').css('background-image', 'url("https://www.allisonbarbera.com/wp-content/uploads/2018/02/charlotte-tilbury-wonder-glow-review-swatches-2.jpg")');
      $('.container').toggleClass('container-anim')
    });
  });
  $(document).ready(function(){
   
    $("#n3").click(function(){
      $('.container').toggleClass('container-anim')
        $("#h1").html("Learn more &darr;");
    $("#n3").addClass("active")
    $("#n3").removeClass("no-active")
  $("#n1").removeClass("active")
  $("#n2").removeClass("active")
  $("#n2").addClass("no-active")
  $("#n1").addClass("no-active")
      $('.image1').css('background-image', 'url("https://i.pinimg.com/originals/71/b3/6a/71b36a1f20afc6b6bd18102b18b27931.jpg")');
      $('.container').css('background-image', 'url("https://i.pinimg.com/originals/71/b3/6a/71b36a1f20afc6b6bd18102b18b27931.jpg")');
    
    });
  });
  $(document).ready(function(){
    $("#card1").mouseover(function(){
      $("#card1-overlay").css("opacity", "1");
      $("#card-img1").css("opacity", "0.2");
    });
    $("#card1").mouseout(function(){
      $("#card1-overlay").css("opacity", "0");
      $("#card-img1").css("opacity", "1");
      
    });
  });
  $(document).ready(function(){
    $("#card2").mouseover(function(){
      $("#card2-overlay").css("opacity", "1");
      $("#card-img2").css("opacity", "0.2");
    });
    $("#card2").mouseout(function(){
      $("#card2-overlay").css("opacity", "0");
      $("#card-img2").css("opacity", "1");
      
    });
  });
  $(document).ready(function(){
    $("#card3").mouseover(function(){
      $("#card3-overlay").css("opacity", "1");
      $("#card-img3").css("opacity", "0.2");
    });
    $("#card3").mouseout(function(){
      $("#card3-overlay").css("opacity", "0");
      $("#card-img3").css("opacity", "1");
      
    });
  });
  $(document).ready(function(){
    $("#card4").mouseover(function(){
      $("#card4-overlay").css("opacity", "1");
      $("#card-img4").css("opacity", "0.2");
    });
    $("#card4").mouseout(function(){
      $("#card4-overlay").css("opacity", "0");
      $("#card-img4").css("opacity", "1");
      
    });
  });