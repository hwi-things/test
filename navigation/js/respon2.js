$(document).ready(function(){

  $('.select button').on('click', function(){
    $(this).next('ul').stop().slideToggle(300);
  });
  $('.btn_search').on('click', function(){
    $('.search').toggleClass('on');
    
    // 포커스 안하면 마크업 순서대로 진행됨
    $('.search input').focus();
  });
  $('header .search input').on('keydown', function(e){
    var keyCode = e.keyCode
    if(keyCode == 9){
      if(e.shiftKey){
        search_focus();
      }
    }
  });
  $('header .search button').on('keydown', function(e){
    var keyCode = e.keyCode
    if(keyCode == 9){
      search_focus();
    }
  });

  function search_focus(){
    $('header .util .btn_search').focus();
    $('.search').removeClass('on');
  }

});
