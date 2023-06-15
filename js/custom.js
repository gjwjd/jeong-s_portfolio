$(function(){
    $(".h_btn").on("click",function(){
      $(".head").slideUp();
    })
})

$(function(){

  

  let baseline=-400;
  let baseline2=-700;
  let pos1 = $("#main").offset().top+baseline;
  let pos2 = $("#about").offset().top+baseline;
  let pos3 = $("#project").offset().top+baseline;
  let pos4 = $("#design").offset().top+baseline2;
  let pos5 = $("#contact").offset().top+baseline;

  $(window).on("scroll", function(){
    let scroll = $(this).scrollTop();

    if(scroll>=pos1 && scroll<pos2){
      $("#navi li a").removeClass("on");
      $("#navi li a").eq(0).addClass("on");
      $("#navi li h5").removeClass("on");
      $("#navi li h5").eq(0).addClass("on")
    }else if(scroll>=pos2 && scroll <pos3){
      $("#navi li a").removeClass("on");
      $("#navi li a").eq(1).addClass("on");
      $("#navi li h5").removeClass("on");
      $("#navi li h5").eq(1).addClass("on");
      $(".mobile").animate({opacity:1},1000);
     
    }else if(scroll>=pos3 && scroll <pos4){
      $("#navi li a").removeClass("on");
      $("#navi li a").eq(2).addClass("on");
      $("#navi li h5").removeClass("on");
      $("#navi li h5").eq(2).addClass("on")
    }else if(scroll>=pos4 && scroll <pos5){
      $("#navi li a").removeClass("on");
      $("#navi li a").eq(3).addClass("on");
      $("#navi li h5").removeClass("on");
      $("#navi li h5").eq(3).addClass("on")
      $(".d_mobile").animate({opacity:1, bottom:"0px"},1000);
    }else{
      $("#navi li a").removeClass("on");
      $("#navi li a").eq(4).addClass("on");
      $("#navi li h5").removeClass("on");
      $("#navi li h5").eq(4).addClass("on")
    }
  });

  /*맞팔로우하기 누르면 팔로우 숫자 오르기*/
  var number = 0;
  $('.m_btn1').click(function(){  
  if(number >=1){
    alert("이미 팔로우 하셨습니다 :)")
  return false;
  }else{
  number += 1;
  }
  document.getElementById("count").innerHTML = number;

  })
  /*맞팔로우하기 버튼누르면 버튼 바뀌기*/
  $(".m_btn1").on("click",function(){
    $(".m_btn1 a:nth-of-type(1)").hide()
    $(".follow").show();
    $(".m_btn1").addClass("on")
    $(".m_btn1 a").css({color:"#352212"})
    $(".m_btn1").css({background:"#fff"})
  });


  /*project*/
  i=0;
  $(".swiper_next").on("click", function(){
    $(".swiper_wrap").stop().animate({left:"-125%"},function(){
      $(".swiper_wrap>li").first().appendTo(".swiper_wrap");
      $(".swiper_wrap").css({left:"-55%"});
    });
    if(i>=2){
      i=0;
    }else{
      i++;
    }
    $(".page_num li").removeClass("on");
    $(".page_num li").eq(i).addClass("on");
  });


  $(".swiper_prev").on("click", function(){
    $(".swiper_wrap").stop().animate({left:"15%"},function(){
      $(".swiper_wrap>li").last().prependTo(".swiper_wrap");
      $(".swiper_wrap").css({left:"-55%"});
    });
    if(i==0){
      i=2;
    }else{
      i--;
    }
    $(".page_num li").removeClass("on");
    $(".page_num li").eq(i).addClass("on");
  });

  /*view 버튼*/
  $(".view li").on("mouseenter",function(){
    $(this).children(".concept_go").stop().animate({width:"100%"});
    $(this).children("p").stop().animate({color:"#fff"});
  });
  $(".view li").on("mouseleave",function(){
    $(this).children(".concept_go").stop().animate({width:"50px"});
    $(this).children("p").stop().animate({color:"#000"})
  });


  /*기획서서*/
  $(".jeongport_btn").on("click", function(){
    $(".project_proposal").css({display:"block"});
    $(".jeongportfolio_p").css({display:"block"});
  });
  $(".project_proposal").on("click", function(){
    $(".project_proposal").css({display:"none"});
    $(".jeongportfolio_p").css({display:"none"});
  });

  $(".blueone_btn").on("click", function(){
    $(".project_proposal").css({display:"block"});
    $(".blueone_p").css({display:"block"});
  });
  $(".project_proposal").on("click", function(){
    $(".project_proposal").css({display:"none"});
    $(".blueone_p").css({display:"none"});
  });

  $(".index_btn").on("click", function(){
    $(".project_proposal").css({display:"block"});
    $(".index_p").css({display:"block"});
  });
  $(".project_proposal").on("click", function(){
    $(".project_proposal").css({display:"none"});
    $(".index_p").css({display:"none"});
  });



  /*design*/
    let total=$(".panel1 li").length;
    let k=0;

    $(".next").on("click",function(){
      $(".panel0").stop().animate({left:"-200%"},function(){
          $(".panel0 li").first().appendTo(".panel0");
          $(".panel0").css({left:"-100%"});
      });   
      
      $(".panel1").stop().animate({left:"-200%"},function(){
          $(".panel1 li").first().appendTo(".panel1");
          $(".panel1").css({left:"-100%"})
      });

      
      if(k==total-1){
        k=0;     
      }else{
        k++;      
    }
  
    $(".de_navi li").removeClass("on");
    $(".de_navi li").eq(k).addClass("on");
        
      
   });
   
    $(".prev").on("click",function(){
        $(".panel0").stop().animate({left:"0%"},function(){
            $(".panel0 li").last().prependTo(".panel0");
            $(".panel0").css({left:"-100%"});
        });    
        $(".panel1").stop().animate({left:"0%"},function(){
            $(".panel1 li").last().prependTo(".panel1");
            $(".panel1").css({left:"-100%"});
        });

          
          if(k==0){
            k=total-1;         
          }else{
            k--;         
        }
        $(".de_navi li").removeClass("on")
        $(".de_navi li").eq(k).addClass("on")
    });

  

})