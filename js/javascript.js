$(document).ready(function(){
    var typed = new Typed('#typed', {
      strings: ["با برترین مهندسین",
      "با بروزترین ابزارها",
     " تضمین صد در صدی کار"
    ],
    loop:true,
    typeSpeed:45,
    backSpeed:45});

    
      $('.tab-button').on('click','li',function(){
          let tabmenu = $(this).attr('id');
          $(this).addClass('active2').siblings().removeClass('active2');
          $('#'+ tabmenu + '-content').addClass('active2').siblings().removeClass('active2');
      });

      $("#lightSlider").lightSlider({
        item: 4,
        rtl:true,
        pager: true,
        auto:true,
        loop:true,
        enableTouch:false,
        enableDrag:false,
        responsive: [
          {
            breakpoint: 993,
            settings:{
              item: 3,
              slideMargin: 7
            }
          },
          {
            breakpoint: 577,
            settings:{
              item: 2,
              slideMargin: 5
            }
          },
          {
            breakpoint: 415,
            settings:{
              item: 1,
              slideMargin: 0
            }
          }
        ]
        });
      });

 const btn = document.querySelector('.toggle-menu');
 const list = document.querySelector('nav ul');
 
 btn.addEventListener('click' , function(){
   list.classList.toggle('active');
   btn.classList.toggle('active');
  

 })




    
     
      

  



