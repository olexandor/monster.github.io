$(document).ready(function(){function s(){var s=$(".header");180<$(window).scrollTop()?s.addClass("is-sticky"):s.removeClass("is-sticky")}objectFitImages(),s(),$(window).resize(function(){s()}),$(window).scroll(function(){s()});var t=$(".header__content"),l=$(".header-content"),n=$(".mainmenu-toggle");n.click(function(){$(this).toggleClass("-is-active"),t.toggleClass("-is-visible"),$("body").toggleClass("menu-open")}),$(document).on("click touchstart",function(s){var e=$(s.target),i=!e.is(l)||!e.closest(l).length,a=e.is(n)||0<n.has(e).length;i&&!a&&(n.removeClass("-is-active"),t.removeClass("-is-visible"),$("body").removeClass("menu-open"))}),$(".ambassadors-list.-slider").slick({dots:!1,arrows:!0,prevArrow:'<button type="button" class="slick-prev">←</button>',nextArrow:'<button type="button" class="slick-next">→</button>',infinite:!0,draggable:!1,variableWidth:!0}),$(".gallery-slider__list").each(function(){$(this).slick({dots:!0,arrows:!0,slidesToShow:1,slidesToScroll:1,fade:!0,infinite:!0,draggable:!1})}),$(".gallery-slider").each(function(){$(this).magnificPopup({type:"image",delegate:"div:not(.slick-cloned) figure > a",gallery:{enabled:!0}})}),$(".content-image").each(function(){$(this).magnificPopup({type:"image",delegate:"figure a",gallery:{enabled:!0}})}),$(".content-gallery").each(function(){$(this).magnificPopup({type:"image",delegate:".content-gallery__media a",gallery:{enabled:!0}})});var i=$(".news-list"),a=i.find(".news-list__item"),o=a.find(".news-preview"),d=!1,r=!1,c=0,h=null,m=$(".section.-news-list").attr("data-no-results");function u(s){var e=0;null!=h&&(h=null,i.removeClass("articles-loading"),i.removeClass("articles-loaded")),i.addClass("articles-loading"),i.removeClass("articles-loaded"),c=0,s.each(function(){e<6?d&&r?$(this).hasClass("-is-enabled")&&$(this).hasClass("-is-search-success")?($(this).removeClass("-is-visible -is-hidden").addClass("-is-visible"),e+=1):$(this).removeClass("-is-visible -is-hidden").addClass("-is-hidden"):d?$(this).hasClass("-is-enabled")?($(this).removeClass("-is-visible -is-hidden").addClass("-is-visible"),e+=1):$(this).removeClass("-is-visible -is-hidden").addClass("-is-hidden"):r?$(this).hasClass("-is-search-success")?($(this).removeClass("-is-visible -is-hidden").addClass("-is-visible"),e+=1):$(this).removeClass("-is-visible -is-hidden").addClass("-is-hidden"):($(this).removeClass("-is-visible -is-hidden").addClass("-is-visible"),e+=1):d&&r?$(this).hasClass("-is-enabled")&&$(this).hasClass("-is-search-success")?($(this).removeClass("-is-visible -is-hidden").addClass("-is-hidden"),c+=1):$(this).removeClass("-is-visible -is-hidden").addClass("-is-hidden"):d?$(this).hasClass("-is-enabled")?($(this).removeClass("-is-visible -is-hidden").addClass("-is-hidden"),c+=1):$(this).removeClass("-is-visible -is-hidden").addClass("-is-hidden"):r?$(this).hasClass("-is-search-success")?($(this).removeClass("-is-visible -is-hidden").addClass("-is-hidden"),c+=1):$(this).removeClass("-is-visible -is-hidden").addClass("-is-hidden"):($(this).removeClass("-is-visible -is-hidden").addClass("-is-hidden"),c+=1)}),h=setTimeout(function(){i.removeClass("articles-loading"),i.addClass("articles-loaded")},200),s.hasClass("-is-visible")||$(".no-results").length?s.hasClass("-is-visible")?$(".no-results").removeClass("-is-visible -is-hidden").addClass("-is-hidden"):$(".no-results").removeClass("-is-visible -is-hidden").addClass("-is-visible"):$(".section.-news-list").append('<h2 class="no-results -is-visible">'+m+"</h2>"),$(".load-more").length&&0<c?$(".load-more").removeClass("-is-hidden -is-visible").addClass("-is-visible"):$(".load-more").removeClass("-is-hidden -is-visible").addClass("-is-hidden")}u(a),$(".filter-news form").submit(function(s){var i=$(this).find(".filter-news-search").val();s.preventDefault(),o.each(function(){var s=$(this).find(".news-preview__title").text().toLowerCase(),e=$(this).find(".news-preview__description").text().toLowerCase();-1!==s.indexOf(i.toLowerCase())||-1!==e.indexOf(i.toLowerCase())?$(this).parent(".news-list__item").removeClass("-is-search-success -is-search-error").addClass("-is-search-success"):$(this).parent(".news-list__item").removeClass("-is-search-success -is-search-error").addClass("-is-search-error"),r=!0}),u(a)}),i.length&&$(".filter-news").length&&($(".filter-news form select").on("change",function(s){var e=s.target.value;$(this).find("option:first-child").attr("value")==e?o.each(function(){a.removeClass("-is-enabled -is-disabled"),d=!1}):o.each(function(){-1!==$(this).attr("data-categories").toLowerCase().indexOf(e.toLowerCase())?$(this).parent(".news-list__item").removeClass("-is-disabled -is-enabled").addClass("-is-enabled"):$(this).parent(".news-list__item").removeClass("-is-disabled -is-enabled").addClass("-is-disabled"),d=!0}),u(a)}),$(".load-more button").on("click",function(s){var e=$(".news-list__item").not(".-is-visible"),i=0;e.each(function(){0!==c&&i<6&&(d&&r?$(this).hasClass("-is-enabled")&&$(this).hasClass("-is-search-success")&&($(this).removeClass("-is-hidden").addClass("-is-visible"),c-=1,i+=1):d?$(this).hasClass("-is-enabled")&&($(this).removeClass("-is-hidden").addClass("-is-visible"),c-=1,i+=1):r?$(this).hasClass("-is-search-success")&&($(this).removeClass("-is-hidden").addClass("-is-visible"),c-=1,i+=1):($(this).removeClass("-is-hidden").addClass("-is-visible"),c-=1,i+=1))}),0<c?$(this).parent(".load-more").removeClass("-is-hidden -is-visible").addClass("-is-visible"):$(this).parent(".load-more").removeClass("-is-hidden -is-visible").addClass("-is-hidden")})),$(".news-list.-slider").slick({dots:!1,arrows:!0,slidesToShow:3,slidesToScroll:1,infinite:!0,draggable:!1,responsive:[{breakpoint:1550,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]});var v=$(".hero.-slider .hero__list").slick({dots:!0,arrows:!0,slidesToShow:1,slidesToScroll:1,fade:!0,infinite:!0,draggable:!1,autoplay:!0}),p=null;function e(){$(".volume-controls-slider");var s,e=$(".volume-controls-slider > span"),i=e.prop("style").height.slice(0,e.prop("style").height.length-1),a=$(".volume-controls-trigger");return 0==(s=Math.round(i/10)/10)?a.removeClass("-low -hight").addClass("-mute"):0<s&&s<=.5?a.removeClass("-mute -hight").addClass("-low"):a.removeClass("-mute -low").addClass("-hight"),null!==p&&(p.volume=s),s}function g(s){var e=$(".volume-controls-slider"),i=$(".volume-controls-slider > span"),a=e.offset().top,t=e.outerHeight(),l=a,n=a+t,o=s.pageY?s.pageY:s.originalEvent.touches[0].pageY;o<l?o=l:n<o&&(o=n),resizeElementHeightValue=(o-a)/t*100,i.css({height:resizeElementHeightValue+"%"})}function f(){$(".volume-controls-trigger").hasClass("-mute")?p.volume=0:e()}$(".volume-controls-slider").on("mousedown touchstart",function(s){1==s.which&&(document.onmousemove=function(s){g(s),e(),$(".volume-controls").addClass("-active")},document.ontouchmove=function(s){g(s),e(),$(".volume-controls").addClass("-active")},$(document).on("mouseup touchend touchcancel",function(s){document.onmousemove=null,document.ontouchmove=null,$(".volume-controls").removeClass("-active")}))}),(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&$(".volume-controls-slider").click(function(s){g(s),e()}),$(".volume-controls-trigger").click(function(){$(this).hasClass("-mute")?e():($(this).removeClass("-low -hight").addClass("-mute"),null!==p&&(p.volume=0))}),!$(".hero").hasClass("-slider")&&$(".hero__item").find("video").length&&$(".hero__item").find("video").each(function(s){0==s&&(p=$(this)[0],setTimeout(function(){p.play(),f()},500))}),v.on("init",function(s,e){v.find(".hero__item.slick-current").find("video").length&&(e.slickPause(),p=v.find(".hero__item.slick-current").find("video")[0],setTimeout(function(){p.play(),f()},500))}),v.on("beforeChange",function(s,e,i,a){null!==p&&p.pause()}),v.on("afterChange",function(s,e,i){v.find(".hero__item").eq(i).find("video").length&&(e.slickPause(),p=v.find(".hero__item").eq(i).find("video")[0],setTimeout(function(){p.play(),f()},500))});var b=$("#social-share");if(b.length){var w=JSON.parse(b.attr("data-share")),_=b.attr("data-url");b.jsSocials({shares:w,url:_,showLabel:!1,shareIn:"popup",showCount:!1})}var C=$(".social-wall").isotope({percentPosition:!0,itemSelector:".social-wall__item",masonry:{columnWidth:".social-wall__item"},getSortData:{bootSequence:function(s){return+$(s).attr("data-boot-sequence")}}}),k=4,y=0,x=0,S=4,z=!1,q=0,E=0;function T(){var s=$(".social-wall__item"),e=$(".media-hub-loader button");if(E+=1,s.not(".-init-displayed").addClass("-is-hidden"),$(".social-wall__item.-init-displayed").not("[data-boot-sequence]").attr("data-boot-sequence",E),0<y){var i=$(".social-wall__item.-init-displayed.-is-visible"),a=$(".social-wall__item.-init-displayed").not(".-is-visible"),t=0,l=0;2<i.length&&2<a.length?(t=i.length-2,l=k-2):i.length<=2&&(l=k-i.length),i.each(function(){0!=t&&($(this).removeClass("-init-displayed -is-visible").addClass("-is-hidden").removeAttr("data-boot-sequence"),t-=1)}),a.each(function(){0!=l?($(this).addClass("-is-visible"),l-=1):$(this).removeClass("-init-displayed").addClass("-is-hidden").removeAttr("data-boot-sequence")})}else $(".social-wall__item.-init-displayed").not(".-is-visible").addClass("-is-visible");y+=1,setTimeout(function(){C.isotope({filter:".-is-visible"}).isotope("shuffle")},300),s.length<=k?e.parent().removeClass("-is-hidden -is-visible").addClass("-is-hidden"):e.parent().removeClass("-is-hidden -is-visible").addClass("-is-visible")}if($(window).width()<1200&&768<=$(window).width()&&(S=k=3),$(window).resize(function(){S=k=$(window).width()<1200&&768<=$(window).width()?3:4}),$(".social-wall").length&&$(".media-hub-loader button").length&&$(".media-hub-loader button").on("click",function(s){z=!0,E+=1;var e=$(".social-wall__item").not(".-is-visible"),i=($(".social-wall__item.-is-visible"),$(".media-hub-loader button"));e.each(function(s){s<S&&($(this).removeClass("-is-hidden"),$(this).not(".-is-visible").addClass("-is-visible"),$(this).not("[data-boot-sequence]").attr("data-boot-sequence",E))}),C.isotope("updateSortData").isotope({filter:".-is-visible",sortBy:"bootSequence",sortAscending:!0}),x=$(".social-wall__item.-is-visible").length,$(".social-wall__item").length<=x?i.parent().removeClass("-is-hidden -is-visible").addClass("-is-hidden"):i.parent().removeClass("-is-hidden -is-visible").addClass("-is-visible")}),$("[data-profiles]").length){var A=$(".social-wall"),J=JSON.parse(A.attr("data-profiles")),P=A.attr("data-twitter-icon"),O=(A.attr("data-facebook-icon"),A.attr("data-instagram-icon"));J.forEach(function(s){"twitter"===s.type?function(e){var s=new Codebird,i=e.count;s.setConsumerKey("f96EkPGYVd9w28BX6E5ISZb0J","qT8qsxkK6mZpzD6s4zefuOyITvjbai1UZ6dJBDdgAkexEUbz5s"),s.setToken("2900373881-NhyYX6nX6fdxhP2MzwdSc9gNRCShSdQcEmftOJR","lYAu9mQ4pVJVkXgbN1qz3udSTG5khwvCGVEEkeY4pWQaq"),s.__call("statuses_userTimeline",{screen_name:e.profile,count:i,tweet_mode:"extended"},function(s){var v=1;if(console.log(s),200===s.httpstatus){var p=e.profile;e.profile;q+=1,i>s.length&&(i=s.length),s.forEach(function(s){var e=s.full_text,i=e.match(/(https?:\/\/[^\s]+)/gi),a="",t=s.user.name,l=s.entities.media?s.entities.media[0].media_url_https:null,n=e.match(/#[a-z0-9_]+/gi),o="https://twitter.com/".concat(p,"/status/").concat(s.id_str),d=s.created_at.split(" "),r=d[2]+". "+d[1],c=e||"",h=l?'<div class="social-post__media">\n <img src="'.concat(l,'" alt="">\n </div>\n'):"";null!==n&&n.forEach(function(s){c=c.replace(s,"<span>"+s+"</span>")}),null!==i&&i.forEach(function(s){c=c.replace(s,""),a=a+'<a href="'+s+'" target="_blank" class="url">'+s+"</a>\n "}),c='<p class="social-post__title">'+c+"\n "+a+"</p>\n ";var m=$(".social-wall"),u=$('<li class="social-wall__item">\n <article class="social-post twitter" data-social-type="twitter">\n <div class="social-post__inner">\n'+h+'<div class="social-post__content">\n <div class="social-post__meta-bar">\n <div class="social-post__logo">\n <a href="'+o+'" target="_blank">\n <img src="'+P+'" alt="Twitter">\n </a>\n </div>\n <span class="social-post__date">'+r+'</span>\n <span class="social-post__profile">@'+t+"</span>\n </div>\n "+c+"</div>\n </div>\n </article>\n </li>");v<=k&&!z&&q<2?(u.addClass("-init-displayed"),v+=1):(z||2<=q)&&u.addClass("-is-hidden"),m.append(u).isotope("insert",u)}),!z&&q<2&&T()}})}(s):"twitterHash"===s.type?function(e){var s=new Codebird,i=e.count;s.setConsumerKey("f96EkPGYVd9w28BX6E5ISZb0J","qT8qsxkK6mZpzD6s4zefuOyITvjbai1UZ6dJBDdgAkexEUbz5s"),s.setToken("2900373881-NhyYX6nX6fdxhP2MzwdSc9gNRCShSdQcEmftOJR","lYAu9mQ4pVJVkXgbN1qz3udSTG5khwvCGVEEkeY4pWQaq"),s.__call("search_tweets",{q:e.profile,count:i,tweet_mode:"extended"},function(s){var v=1;if(console.log(s),200===s.httpstatus){var p=e.profile;e.profile;q+=1,i>s.length&&(i=s.length),s.statuses.forEach(function(s){var e=s.full_text,i=e.match(/(https?:\/\/[^\s]+)/gi),a="",t=s.user.name,l=s.entities.media?s.entities.media[0].media_url_https:null,n=e.match(/#[a-z0-9_]+/gi),o="https://twitter.com/".concat(p,"/status/").concat(s.id_str),d=s.created_at.split(" "),r=d[2]+". "+d[1],c=e||"",h=l?'<div class="social-post__media">\n <img src="'.concat(l,'" alt="">\n </div>\n'):"";null!==n&&n.forEach(function(s){c=c.replace(s,"<span>"+s+"</span>")}),null!==i&&i.forEach(function(s){c=c.replace(s,""),a=a+'<a href="'+s+'" target="_blank" class="url">'+s+"</a>\n "}),c='<p class="social-post__title">'+c+"\n "+a+"</p>\n ";var m=$(".social-wall"),u=$('<li class="social-wall__item">\n <article class="social-post twitter" data-social-type="twitter">\n <div class="social-post__inner">\n'+h+'<div class="social-post__content">\n <div class="social-post__meta-bar">\n <div class="social-post__logo">\n <a href="'+o+'" target="_blank">\n <img src="'+P+'" alt="Twitter">\n </a>\n </div>\n <span class="social-post__date">'+r+'</span>\n <span class="social-post__profile">@'+t+"</span>\n </div>\n "+c+"</div>\n </div>\n </article>\n </li>");v<=k&&!z&&q<2?(u.addClass("-init-displayed"),v+=1):(z||2<=q)&&u.addClass("-is-hidden"),m.append(u).isotope("insert",u)}),!z&&q<2&&T()}})}(s):"facebook"===s.type||"instagram"===s.type&&function(s){var e=s.count;$.getJSON("https://api.instagram.com/v1/users/self/media/recent/?access_token=4614834842.94bfa5a.9af5ab1f507541daa860db8f1c8b5723&count="+e,function(s){if(s){var m=1;e>s.length&&(e=s.length),s.data.forEach(function(s){var e=s.link,i=s.user.username,a=s.caption.text?'<p class="social-post__title">'+s.caption.text+"</p>\n ":"",t=a.match(/(https?:\/\/[^\s]+)/gi),l=a.match(/#[a-z0-9_]+/gi),n=s.images.low_resolution.url?s.images.low_resolution.url:null,o=new Date(1e3*s.created_time),d=("0"+o.getDate()).slice(-2)+". "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"][o.getMonth()],r=n?'<div class="social-post__media">\n <img src="'.concat(n,'" alt="">\n </div>\n'):"";null!==l&&l.forEach(function(s){a=a.replace(s,"<span>"+s+"</span>")}),null!==t&&t.forEach(function(s){a=a.replace(s,'<a href="'+s+'" target="_blank" class="url">'+s+"</a>\n ")});var c=$(".social-wall"),h=$('<li class="social-wall__item">\n <article class="social-post instagram" data-social-type="instagram">\n <div class="social-post__inner">\n'+r+'<div class="social-post__content">\n <div class="social-post__meta-bar">\n <div class="social-post__logo">\n <a href="'+e+'" target="_blank">\n <img src="'+O+'" alt="Instagram">\n </a>\n </div>\n <span class="social-post__date">'+d+'</span>\n <span class="social-post__profile">'+i+"</span>\n </div>\n "+a+"</div>\n </div>\n </article>\n </li>");m<=k&&!z?(h.addClass("-init-displayed"),m+=1):z&&h.addClass("-is-hidden"),c.append(h).isotope("insert",h)}),z||T()}})}(s)})}!function(){var s=$(".job-portal__content");if(s.find("iframe"),navigator.userAgent.match(/(iPod|iPhone|iPad)/)){s.addClass("-ios")}}()}),$(window).on("load",function(){}),$(window).resize(function(){}),$(window).scroll(function(){});