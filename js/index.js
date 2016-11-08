
$(document).ready(function(){
	$(".lbrs").on({mouseover:function(){
		var index=$(this).index();
	    $(".oo").eq(index).css("display","block");
        },mouseout:function(){
	    $(".oo").css({display:"none"})
        }
   })
    

	
    
});







$(document).ready(function(){
    $(".hl").hover(function(){
        $(".hlb").css("display","block");
    },function(){
        $(".hlb").css("display","none");
    });
});
$(document).ready(function(){
    $(".hrr1").hover(function(){
        $(".hr1").css("display","block");
    },function(){
        $(".hr1").css("display","none");
    });
});
$(document).ready(function(){
    $(".hrr2").hover(function(){
        $(".hr2").css("display","block");
    },function(){
        $(".hr2").css("display","none");
    });
});
$(document).ready(function(){
    $(".hrr3").hover(function(){
        $(".hr3").css("display","block");
    },function(){
        $(".hr3").css("display","none");
    });
});
$(document).ready(function(){
    $(".hrr4").hover(function(){
        $(".hr4").css("display","block");
    },function(){
        $(".hr4").css("display","none");
    });
});
$(document).ready(function(){
    $(".sousuod").hover(function(){
        $(".sousuoe").css("display","block");
    },function(){
        $(".sousuoe").css("display","none");
    });
});


$(document).ready(function(){
    
	function lunbo(a,b,c,d){
		var next=0;
        var now=0;
        $("a",$(a)[0]).eq(now).css({opacity:1}).css({zIndex:"5"});
        $("li",$(b)[0]).eq(next).css({background:"red"});
        // $("li",$(b)[0]).click(function(){

        // })
    	function move(){
    	    next=now+1;
    	    if(next>=$("a",$(a)[0]).length){
    		   next=0;
    	    }
    	    $("a",$(a)[0]).eq(now).css({zIndex:"5"}).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000).css({zIndex:"1"});
    	    $("li",$(b)[0]).eq(next).css({background:"red"}).end().eq(now).css({background:"#ccc"});
    	    now=next;
    	}
    var t=setInterval(move,2000);
    function movel(){
    	    next=now-1;
    	    if(next<0){
    		   next=$("a",$(a)[0]).length-1;
    	    }
    	    $("a",$(a)[0]).eq(now).animate({opacity:0},1000).css({zIndex:"1"}).end().eq(next).animate({opacity:1},1000).css({zIndex:"5"});
    	    $("li",$(b)[0]).eq(next).css({background:"red"}).end().eq(now).css({background:"#ccc"});
    	    now=next;
    }
   
    $(c).eq(next).click(function(){movel()});
    $(d).eq(next).click(function(){move()});
    $(a).eq(next).mouseover(function(){
    	clearInterval(t);
    });
    $(a).eq(next).mouseout(function(){
    	t=setInterval(move,2000);
    });
	}
	 lunbo(".fbrl",".f1cc",".fcl",".fcr");  
	 lunbo(".fbrl2",".f2cc",".fcl2",".fcr2");  
	 lunbo(".fbrl3",".f3cc",".fcl3",".fcr3");  
	 lunbo(".fbrl4",".f4cc",".fcl4",".fcr4");  
	 lunbo(".fbrl5",".f5cc",".fcl5",".fcr5");  
})

$(document).ready(function(){
    $(".xihuanr").click(function(){
        $(".xihuanb1").fadeToggle(500);
    })
});

$(document).ready(function(){
 function bb(a,b){
  $(a).first().show();
    $(a).hover(function(){
        var index=$(this).index();
        $(a).removeClass("ftr1").eq(index).addClass("ftr1");
        $(b).hide().eq(index).show();
    },function(){
    });
 }
    
   bb(".ftrr",".fb1");
   bb(".ftrr2",".fb2");
   bb(".ftrr3",".fff3");
   bb(".ftrr4",".ff4");
   bb(".ftrr5",".ff5");
});
$(document).ready(function(){
    function dd(c,d,e){
    var now=0;
    var next=0;
    $(d).hide().eq(0).show();
    $(e).click(function(){
        var index=$(this).index();
        next++;
        if(next>=$(c).length){
            next=0;
        }
        $(d).eq(now).hide().end().eq(next).show();
        $(c).removeClass("ftr1");
        $(c).eq(next).addClass("ftr1");
        now=next; 
    });
    }
    dd(".ftrr",".fb1",".right1");
    dd(".ftrr2",".fb2",".right2");
    dd(".ftrr3",".fff3",".right3");
    dd(".ftrr4",".ff4",".right4");
    dd(".ftrr5",".ff5",".right5");

});
$(document).ready(function(){
       // 楼层跳转
//      $(".tiao").click(function(event) { 
//    var index=this.title
////    var id='#'+'index_'+index
//   $("html,body").animate({scrollTop: $(".f1").eq(index).offset().top}, 1000);
// });
// function a(x,y){
//  l = $('#main').offset().right;
//  w = $('#main').width();
//  $('#elevator').css('right',(l + w + x) + 'px');
//  $('#elevator').css('bottom',y + 'px');
//}//获取#tbox的div距浏览器底部和页面内容区域右侧的距离函数#main为页面的可视宽度
//// 
//// 楼层跳转
//    var floor=$(".floor");
//    var box=$(".elevator");
//    var span=$("b",box);
//    var tops=[];
//    for (var i = 0; i < floor.length; i++){
//          tops.push(floor[i].offsetTop)
//    }
//    window.onscroll=function(){
//      var stop=document.body.scrollTop||document.documentElement.scrollTop
//      for (var j = 0; j < tops.length; j++) {
//          if (tops[j]-200<stop) {
//              for (var k = 0; k < span.length; k++) {
//                  span.eq(k).css({display:"none"});
//              }
//                  span.eq(j).css({display:"block"});
//          }
//      }
//    }
//   
//
    $(window).scroll(function(){
    t = $(document).scrollTop();
    if(t>2000){
      $('#elevator').show();
    }else{
      $('#elevator').hide();
    }       
})   
    // a(10,100);//#tbox的div距浏览器底部和页面内容区域右侧的距离
    $('#gotop').click(function(){ 
        $('body,html').animate({
            scrollTop: 0
        },
        500);//点击回到顶部按钮，缓懂回到顶部,数字越小越快
        return false;  
    })
    $("#godown").click(function(){ 
        $("body,html").animate({
            scrollTop: 5777
        },
        500);//点击回到顶部按钮，缓懂回到顶部,数字越小越快
        return false;  
    })

$(function() {
	$('#nav').onePageNav({
		scrollThreshold: 0.1,
		filter: ':not(.dowebok)'
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > 2000){
			$('#nav').fadeIn();
		} else {
			$('#nav').fadeOut();
		}
	});
});



// 右侧导航

   $(".yh6s1").hover(function(){
         $(".bian").css({"display":"block"})
         $("img",$(".bian")).animate({width:140},200);
    },function(){
        $(".bian").css({"display":"none"});
         $("img",$(".bian")).animate({width:0},200);
    })
    $(".yh6s2").hover(function(){
         $(".diaoyan").css({"display":"block"})
         $("img",$(".diaoyan")).animate({width:100},200);
    },function(){
        $(".diaoyan").css({"display":"none"});
         $("img",$(".diaoyan")).animate({width:0},200);
    })
     $(".yh6s3").hover(function(){
         $(".kefu").css({"display":"block"})
         $("img",$(".kefu")).animate({width:100},200);
    },function(){
        $(".kefu").css({"display":"none"});
         $("img",$(".kefu")).animate({width:0},200);
    })
     
     
     
     var banner=$(".banner")
   var btnone=$(".btnone")
   var b=$("b",banner)
   var i=$("i",banner)
   var span=$("span",banner)
   var imgs=$("a",banner)
   var bnow=0;
   var bnext=0;
// var bw=a.width();
   var bt;
   var bannerl=$(".goleft")
   var bannerr=$(".goright")
   var bflag=true;
   	i.eq(0).css({height:5,background:"#e3101e"})
   	btnone.eq(0).css("display","block")
   	span.eq(0).css("display","none")
   imgs.css({"zIndex":0,"opacity":0})
   imgs.eq(0).css({"zIndex":1,"opacity":1})
   function bmove(){
   	bnext=bnow+1;
   	if(bnext==imgs.length){
      bnext=0;
   	}
   	imgs.eq(bnext).css({"zIndex":2}).end().eq(bnow).animate({"opacity":0},function(){$(this).css({"zIndex":1})}).
   	end().eq(bnext).animate({"opacity":1},function(){bflag=true});
   	i.css({height:3,background:"#fff"})
   	btnone.css("display","none")
   	span.css("display","block")
   	i.eq(bnext).css({height:5,background:"#e3101e"})
   	var bnext1=Math.floor((bnext)/2)
   	btnone.eq(bnext1).css("display","block")
   	span.eq(bnext1).css("display","none")
   	bnow=bnext
   }
   function bmove1(){
   
   	bnext=bnow+1;
   	if(bnext>=imgs.length){
      bnext=0;
   	}
   	imgs.css({"zIndex":2,"opacity":0})
   	// imgs.eq(bnow).css("opacity",1)
   	// imgs.eq(bnow+2).css("opacity",0)
   	if(bnow%2!=0){
   	imgs.eq(bnext).css({"zIndex":4}).end().eq(bnow).animate({"opacity":0.5},function(){$(this).css({"zIndex":1})}).
   	end().eq(bnext).animate({"opacity":1});
   	i.css({height:3,background:"#fff"})
   	btnone.css("display","none")
   	span.css("display","block")
   	i.eq(bnext).css({height:5,background:"#e3101e"})
   	var bnext1=Math.floor((bnext)/2)
   	btnone.eq(bnext1).css("display","block")
   	span.eq(bnext1).css("display","none")
   	bnow=bnext;
   	}
   	else{
   		imgs.eq(bnext-1).css("opacity",1)
   		bnow=bnext;
   	}
   
   }
    function bmovel(){
   	bnext=bnow-1;
   	if(bnext<0){
      bnext=imgs.length-1;
   	}
   	imgs.eq(bnext).css({"zIndex":2,"opacity":1}).end().eq(bnow).animate({"opacity":0},function(){$(this).css({"zIndex":1})}).
   	end().eq(bnext).animate({"opacity":1},function(){bflag=true});
   	i.css({height:3,background:"#fff"})
   	btnone.css("display","none")
   	span.css("display","block")
   	i.eq(bnext).css({height:5,background:"#e3101e"})
   	var bnext1=Math.floor((bnext)/2)
   	btnone.eq(bnext1).css("display","block")
   	span.eq(bnext1).css("display","none")
   	bnow=bnext
   }
   bannerr.click(function(){
   		if(bflag){bmove()}
   		bflag=false;
   })
    bannerl.click(function(){
   		if(bflag){bmovel()}
   		bflag=false;
   })
    bth=setInterval(bmove1,2000)
   banner.hover(function(){clearInterval(bth);
   },function(){bth=setInterval(bmove1,2000)
   })
   b.mouseover(function(){
   	
	   	i.css({height:3,background:"#fff"})
	   	btnone.css("display","none")
	   	span.css("display","block")
	   	var index=b.index($(this))
	   	i.eq(index).css({height:5,background:"#e3101e"})
	   	var index1=Math.floor((index)/2)
	   	btnone.eq(index1).css("display","block")
	   	span.eq(index1).css("display","none")
	   	imgs.eq(index).css({"zIndex":2}).end().eq(bnow).animate({"opacity":0},function(){$(this).css({"zIndex":1})}).
	   	end().eq(index).animate({"opacity":1},function(){bflag=true});
	   	bnow=index;
   
   })
})