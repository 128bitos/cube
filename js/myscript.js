// 3D cube Javascript file  "myscript.js" //
 
 $(document).ready(function(){

  $(window).mousedown(function(){
  $(window).mousemove(function(e){
      $('#cube').css('transform', 'rotateX(' + - e.pageY + 'deg)' + 'rotateY(' + e.pageX + 'deg)');
      $('#infodiv').fadeOut();

       });

  $(window).mouseup(function(){
    $(this).off( 'mousemove' );
     $('#infodiv').fadeIn();

  });

  }); 

});
