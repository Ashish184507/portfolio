  $(document).ready(function(){
      $(window).scroll(function(){
          if(this.scrollV > 20){
            $('.navbar').addClass("sticky");

          }else{

          }
      })
         
       // togle menu /navbar script
     $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
     
     });
  
    });

var typed = new Typed(".typing",{
strings:["Developer","Designer","Dancer","Cricketer","rider","photographer","Youtuber"],
typrspeed:30,
backspeed:10,
loop:true
});



var typed = new Typed(".typing-2",{
  strings:["Developer","Designer","Dancer","Cricketer","rider","photographer","Youtuber"],
  typrspeed:30,
  backspeed:10,
  loop:true
  });