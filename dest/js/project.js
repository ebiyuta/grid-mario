$(function () {
    
$(".js_mushroom").click(function(){
  if($(".bl_mario").hasClass("is_flower")){
    
  }else if($(".bl_mario").hasClass("is_toFlower")){
    
  }else{
  $(".js_gameover").removeClass("is_active");
  $(".bl_mario").removeClass("is_flower is_damage is_gameover is_toFlower");
  $(".bl_mario").addClass("is_mushroom");
  }
});

$(".js_flower").click(function(){
  if($(".bl_mario").hasClass("is_mushroom")){
    $(".js_gameover").removeClass("is_active");
    $(".bl_mario").removeClass("is_mushroom is_damage is_gameover");
    $(".bl_mario").addClass("is_toFlower");
    }else if($(".bl_mario").hasClass("is_toFlower")){
    }else{
  $(".js_gameover").removeClass("is_active");
  $(".bl_mario").removeClass("is_mushroom is_damage is_gameover is_toFlower");
  $(".bl_mario").addClass("is_flower");
      }
});
    
$(".js_goomba").click(function(){
    if($(".bl_mario").hasClass("is_flower")){
      $(".bl_mario").removeClass("is_flower");
      $(".bl_mario").addClass("is_damage");
    }else if($(".bl_mario").hasClass("is_toFlower")){
      $(".bl_mario").removeClass("is_toFlower");
      $(".bl_mario").addClass("is_damage");
    }else if($(".bl_mario").hasClass("is_mushroom")){
      $(".bl_mario").removeClass("is_mushroom");
      $(".bl_mario").addClass("is_damage");
    }else{
      $(".bl_mario").addClass("is_gameover");
      $(".js_gameover").addClass("is_active");
    }
});
    
});
