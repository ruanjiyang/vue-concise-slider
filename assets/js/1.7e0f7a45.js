(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{241:function(t,i,e){"use strict";e(323);var n={props:{options:{type:Object,default:function(){return{}}}},name:"sliderMove",data:function(){return{data:{poswidth:0,posheight:0,start:{},end:{},direction:""},config:{transitionEnding:!1,itemTransitionEnding:!1,animation:!1,tracking:!1,thresholdDistance:this.options.thresholdDistance||50,thresholdTime:this.options.thresholdTime||1e3,direction:this.options.direction||"horizontal",freeze:void 0!==this.options.freeze&&this.options.freeze}}},methods:{swipeStart:function(t){if(!this.config.freeze&&!(this.config.transitionEnding||this.config.itemTransitionEnding&&this.options.itemAnimation))if(this.config.animation=!1,this.options.autoplay&&this.clock().stop(this),!0===this.options.preventDocumentMove&&document.addEventListener("touchmove",this.preventDefault(t)),"touchstart"===t.type){if(t.touches.length>1)return this.config.tracking=!1,!1;this.config.tracking=!0,this.data.start.t=(new Date).getTime(),this.data.start.x=t.targetTouches[0].clientX,this.data.start.y=t.targetTouches[0].clientY,this.data.end.x=t.targetTouches[0].clientX,this.data.end.y=t.targetTouches[0].clientY}else this.config.tracking=!0,this.data.start.t=(new Date).getTime(),this.data.start.x=t.clientX,this.data.start.y=t.clientY,this.data.end.x=t.clientX,this.data.end.y=t.clientY},swipeMove:function(t){if(this.config.tracking){"touchmove"===t.type?(this.data.end.x=t.targetTouches[0].clientX,this.data.end.y=t.targetTouches[0].clientY):(this.data.end.x=t.clientX,this.data.end.y=t.clientY);var i=Math.abs(this.data.end.x-this.data.start.x),e=Math.abs(this.data.end.y-this.data.start.y);if(i>=e&&"vertical"!==this.config.direction?t.preventDefault():i<=e&&"vertical"===this.config.direction&&t.preventDefault(),"vertical"===this.config.direction){if(i>e)return!1}else if(i<e)return!1}},swipeEnd:function(t){this.config.tracking=!1;var i=(new Date).getTime()-this.data.start.t,e=this.data.currentPage,n=this.data.end.x-this.data.start.x,s=this.data.end.y-this.data.start.y,o=this.config.thresholdDistance;if(this.options.autoplay){var a=this;setTimeout(function(){a.clock().begin(a)},this.options.autoplay)}return!0===this.options.preventDocumentMove&&document.removeEventListener("touchmove",this.preventDefault(t)),i>this.config.thresholdTime||i<100?(this.slide(e),!1):(Math.abs(n)<o||Math.abs(s)>o)&&"vertical"!==this.config.direction?(this.slide(e),!1):(Math.abs(n)>o||Math.abs(s)<o)&&"vertical"===this.config.direction?(this.slide(e),!1):"vertical"!==this.config.direction?n>o?(this.pre(),!1):-n>o?(this.next(),!1):(this.slide(e),!1):"vertical"===this.config.direction?s>o?(this.pre(),!1):-s>o?(this.next(),!1):(this.slide(e),!1):void 0},swipeOut:function(t){this.$el===t.target&&this.config.tracking&&this.swipeEnd(t)},onTransitionEnd:function(t,i){if(this.options.loop&&!(this.data.currentPage>0&&this.data.currentPage<this.config.sliderLength)){var e=this;setTimeout(function(){var t=e.data.currentPage,i=e.config.sliderLength;e.config.transitionEnding=!1,t<0?e.slide(i+t,"animationnone"):t>=i&&e.slide(0+t-i,"animationnone")},0)}},onItemTransitionEnd:function(t){if(t.target===t.currentTarget){var i=this;setTimeout(function(){i.config.itemTransitionEnding=!1},0)}}}},s=e(59);e(96),e(63);function o(t,i){return function e(n){var s=function(t){for(var i="",e=0;e<t;e++)i+=Math.floor(10*Math.random());return i}(5),o=n.children&&n.children.map(function(t){return e(t)}),a=i(n.tag,n.data,o);return a.text=n.text,a.isComment=n.isComment,a.componentOptions=n.componentOptions,a.isCloned=!0,a.isOnce=!1,a.elm=n.elm,a.context=n.context,a.ns=n.ns,a.isStatic=n.isStatic,a.key=t.key||0===t.key?t.key+"-cppy":s+"-copy",a}(t)}var a={methods:{renderDom:function(t){this.$parent&&this.$parent.renderDom(t)},onItemTransitionEnd:function(t){this.$parent&&this.$parent.onItemTransitionEnd(t)}},render:function(t){var i=this.$slots.default;if(!i)return"";var e=this.$parent.config.loopedSlides,n=[],a=[];if(this.$parent.config.loop&&"fade"!==this.$parent.config.effect&&"coverflow"!==this.$parent.config.effect){var r=i.filter(function(t){return!!t.componentOptions&&"slideritem"===t.componentOptions.tag});if(r&&r.length>=2)for(var c=r?r.length:0,h=0;h<c;h++)h+e-c>=0&&n.push(o(r[h],t)),h-e<0&&a.push(o(r[h],t))}return t("div",{class:{"slider-wrapper":!0,"slider-fade":"fade"===this.$parent.config.effect},scopedSlots:this.$scopedSlots},[].concat(n,Object(s.a)(i),a))}},r=e(249),c=e.n(r),h={name:"sliderComputed",computed:{styleobj:function(){var t={};return t.transform="translate3D("+this.data.poswidth+"px,"+this.data.posheight+"px,0)",t.transitionTimingFunction=this.options.timingFunction||"ease",t["-webkitTransitionTimingFunction"]=this.options.timingFunction||"ease",t.transitionDuration=(this.config.animation?this.options.speed||300:0)+"ms",t["-webkitTransitionDuration"]=(this.config.animation?this.options.speed||300:0)+"ms","fade"===this.config.effect?{}:"coverflow"===this.config.effect?{}:t},currentWidth:function(){if(0===this.config.sliderLength)return 0;if("fade"===this.config.effect)return 0;if("coverflow"===this.config.effect)return 0;var t,i=this.data.currentPage,e=this.config.pageWidth,n=this.options.loopedSlides||1;if(this.options.loop&&(i+=n?n<=this.config.sliderLength?n:this.config.sliderLength:1),"coverflow"===this.options.effect){this.data.currentPage;1}for(var s in this.$el.children)/slider-touch/gi.test(this.$el.children[s].className)&&(t=this.$el.children[s]);var o=t.children[0].children,a=o[i]?o[i].offsetLeft:0,r=o[i]?o[i].offsetWidth:0,h=this.options.slidesPerView,d=this.config.sliderLength;if(this.options.centeredSlides)if(h){var l=this.data.currentPage,f=c()((h-1)/2);l-f<=0?l=0:l+f>=d?l=d-h:l-=f,a=o[l].offsetLeft}else a=a-e/2+r/2;if(!this.options.centeredSlides&&h){var g=this.data.currentPage,p=this.options.slidesToScroll||1;g+p>=d&&(a=o[d-p].offsetLeft)}return a+e-e},currentHeight:function(){var t,i=this.config.sliderLength,e=this.data.currentPage,n=0,s=e-1,o=this.config.pageWidth,a=this.options.loopedSlides||1;if(0===i||"fade"===this.config.effect)return 0;for(var r in this.options.loop&&(s=a?e+(a<=i?a:i)-1:e+1),this.$el.children)/slider-touch/gi.test(this.$el.children[r].className)&&(t=this.$el.children[r]);var h=t.children[0].children;for(var d in h)d<=s&&(n+=h[d].offsetHeight,n+=c()(h[d].style.marginTop||0),n+=c()(h[d].style.marginBottom||0));return n+o-o},classObject:function(){var t={};switch(this.options.effect){case"fade":t={"slider-fade":!0}}return t}}},d={name:"sliderComputed",mounted:function(){var t=this,i=this;this.$emit("init",this.data),this.$on("slideTo",function(i){t.slide(i)}),this.$on("slideNext",function(){t.next()}),this.$on("slidePre",function(){t.pre()}),this.$on("autoplayStart",function(e){t.options.autoplay=e||t.options.autoplay||1e3,t.clock().begin(i)}),this.$on("autoplayStop",function(){t.options.autoplay=0,t.clock().stop(i)}),this.$on("loadingShow",function(){t.config.loading=!0}),this.$on("loadingHide",function(){t.config.loading=!1}),this.options.autoplay&&this.clock().begin(i),this.config.resize&&window.addEventListener("resize",this.resize),document.addEventListener("visibilitychange",this.visibilitychange,!1)},beforeDestroy:function(){this.options.autoplay&&this.clock().stop(this),!0===this.options.preventDocumentMove&&document.removeEventListener("touchmove",this.preventDefault()),document.removeEventListener("visibilitychange",this.visibilitychange,!1),window.removeEventListener("resize",this.resize)},watch:{$route:function(){if(this.route){var t=this.data.currentPage,i=this.config.sliderLength;this.config.transitionEnding=!1,t<0?this.slide(0,"animationnone"):t>=(this.pagenums||i)?this.slide(i-1,"animationnone"):this.slide(t,"animationnone"),this.options.autoplay&&this.clock().begin(this),this.route=!1}else this.route=!0,this.options.autoplay&&this.clock().stop(this)}},methods:{visibilitychange:function(){document.hidden?this.options.autoplay&&this.clock().stop(this):this.options.autoplay&&this.clock().begin(this)},resize:function(){if(this.config.pageWidth=this.$el.offsetWidth,this.config.pageHeight=this.$el.offsetHeight,this.data.currentPage>=this.config.sliderLength&&this.options.loop)return this.slide(0,"animationnone"),!1;this.slide(this.data.currentPage,"animationnone")},onItemTransitionEnd:function(t){if(t.target===t.currentTarget){var i=this;setTimeout(function(){i.config.itemTransitionEnding=!1},0)}}}},l={props:{options:{type:Object,default:function(){return{}}}},name:"sliderClock",data:function(){return{data:{},config:{setIntervalid:""}}},methods:{clock:function(){return{begin:function(t){t.config.setIntervalid||0!==t.options.autoplay&&(t.config.setIntervalid=setInterval(function(){t.next(),t.data.currentPage!==t.config.sliderLength-1||t.options.loop||(clearInterval(t.config.setIntervalid),t.config.setIntervalid=0)},t.options.autoplay))},stop:function(t){clearInterval(t.config.setIntervalid),t.config.setIntervalid=0}}}}},f={props:{options:{type:Object,default:function(){return{}}}},name:"sliderDom",data:function(){return{data:{currentPage:this.options.currentPage||0},config:{pageWidth:"",pageHeight:"",sliderLength:0,renderTime:"",loop:this.options.loop,loopedSlides:this.options.loopedSlides||1,pagination:void 0===this.options.pagination||this.options.pagination}}},methods:{renderDom:function(t){var i=this,e=this;this.config.renderTime&&clearTimeout(this.config.renderTime),e.config.sliderLength>=1&&"fade"===e.options.effect&&(t.previousSibling?t.style["z-index"]=99-e.config.sliderLength:t.style["z-index"]=99+e.config.sliderLength),this.config.renderTime=setTimeout(function(){i.config.sliderLength=i.config.slotsFilter.length,e.config.renderTime=void 0,e.$emit("hasRenderDom",e.data),e.$nextTick(function(){e.slide(e.data.currentPage,"animationnone")})},0)}}},g=(e(49),e(68),e(99),{props:{options:{type:Object,default:function(){return{}}}},name:"sliderNest",data:function(){return{data:{},config:{slidesToScroll:this.options.slidesToScroll||1,effect:this.options.effect||"slide",thresholdDistance:this.options.thresholdDistance||50,thresholdTime:this.options.thresholdTime||1e3,direction:this.options.direction||"horizontal",transitionEnding:!1,itemTransitionEnding:!1,animation:!1,slidesPerView:void 0===this.options.slidesPerView?0:this.options.slidesPerView,$parent:this.judgeParentSlider(this),nested:void 0===this.options.nested||this.options.nested}}},methods:{judgeParentSlider:function(t){return t.$parent&&t.$parent.$vnode&&"vue-component-1-slider"===t.$parent.$vnode.tag?t.$parent:(!t.$parent||void 0!==t.$parent.$vnode)&&this.judgeParentSlider(t.$parent)},swipeMove:function(t){var i=this.config.$parent;i&&i.config.direction===this.config.direction&&t.stopPropagation(),this.config.tracking&&("vertical"===this.config.direction?i&&"vertical"===i.options.direction&&0===this.data.currentPage&&this.data.end.y-this.data.start.y>=0&&i.config.nested?i.data.posheight=-i.currentHeight+this.data.end.y-this.data.start.y:i&&"vertical"===i.options.direction&&this.data.currentPage===this.config.sliderLength-1&&this.data.end.y-this.data.start.y<=0&&i.config.nested?i.data.posheight=-i.currentHeight+this.data.end.y-this.data.start.y:this.data.posheight=-this.currentHeight+this.data.end.y-this.data.start.y:i&&"vertical"!==i.options.direction&&0===this.data.currentPage&&this.data.end.x-this.data.start.x>=0&&i.config.nested?i.data.poswidth=-i.currentWidth+this.data.end.x-this.data.start.x:i&&"vertical"!==i.options.direction&&this.data.currentPage===this.config.sliderLength-1&&this.data.end.x-this.data.start.x<=0&&i.config.nested?i.data.poswidth=-i.currentWidth+this.data.end.x-this.data.start.x:this.data.poswidth=-this.currentWidth+this.data.end.x-this.data.start.x)},pre:function(){var t=this.config.$parent;if(t&&0===this.data.currentPage&&t.config.nested)return t.pre(),this.slide(),!1},next:function(){var t=this.config.sliderLength,i=this.config.$parent;if(i&&this.data.currentPage===t-1&&i.config.nested)return this.config.$parent.next(),this.slide(),!1}}}),p={props:{options:{type:Object,default:function(){return{}}}},name:"sliderBasic",data:function(){return{data:{},config:{slidesToScroll:this.options.slidesToScroll||1,effect:this.options.effect||"slide",thresholdDistance:this.options.thresholdDistance||50,thresholdTime:this.options.thresholdTime||1e3,direction:this.options.direction||"horizontal",transitionEnding:!1,itemTransitionEnding:!1,animation:!1,slidesPerView:void 0===this.options.slidesPerView?0:this.options.slidesPerView,$parent:this.judgeParentSlider(this),nested:void 0===this.options.nested||this.options.nested}}},methods:{judgeParentSlider:function(t){return t.$parent&&t.$parent.$vnode&&"slider"===t.$parent.$options.name?t.$parent:(!t.$parent||void 0!==t.$parent.$vnode)&&this.judgeParentSlider(t.$parent)},swipeMove:function(t){this.config.tracking&&"slide"===this.config.effect&&("vertical"===this.config.direction?this.data.posheight=-this.currentHeight+this.data.end.y-this.data.start.y:this.data.poswidth=-this.currentWidth+this.data.end.x-this.data.start.x),"nest"===this.config.effect&&g.methods.swipeMove.call(this,t)},pre:function(){var t=this.config.$parent,i=this.config.slidesToScroll;return this.data.currentPage>=1&&this.data.currentPage-i>=0?(this.data.currentPage-=i||1,this.slide(),!1):!(this.options.loop&&this.data.currentPage-i<0)||t&&t.config.nested?"nest"===this.config.effect?g.methods.pre.call(this):void this.slide(0):(this.data.currentPage-=i||1,this.config.transitionEnding=!0,this.config.itemTransitionEnding=!0,this.slide(),!1)},next:function(){var t=this.config.$parent,i=this.config.sliderLength,e=this.config.slidesToScroll;return this.data.currentPage<i-1&&this.data.currentPage+e<=i-1?(this.data.currentPage+=this.options.slidesToScroll||1,this.slide(),!1):!(this.options.loop&&this.data.currentPage+e>i-1)||t&&t.config.nested?"nest"===this.config.effect?g.methods.next.call(this):void this.slide():(this.data.currentPage+=this.options.slidesToScroll||1,this.config.transitionEnding=!0,this.config.itemTransitionEnding=!0,this.slide(),!1)},slide:function(t,i){"vertical"===this.options.direction&&"fade"!==this.config.effect?this.data.posheight=-this.currentHeight:this.data.poswidth=-this.currentWidth}}},u={props:{options:{type:Object,default:function(){return{}}}},name:"sliderCoverflow",data:function(){return{data:{},config:{thresholdDistance:this.options.thresholdDistance||50,widthScalingRatio:this.options.widthScalingRatio||.8,heightScalingRatio:this.options.heightScalingRatio||.8,deviation:this.options.deviation||200}}},methods:{pre:function(){var t=this.config.$parent,i=this.config.slidesToScroll;return this.data.currentPage>=1&&this.data.currentPage-i>=0?(this.data.currentPage-=i||1,this.slide(),!1):!(this.options.loop&&this.data.currentPage-i<0)||t&&t.config.nested?void this.slide():(this.data.currentPage-=i||1,this.config.transitionEnding=!0,this.config.itemTransitionEnding=!0,this.slide(),!1)},next:function(){var t=this.config.$parent,i=this.config.sliderLength,e=this.config.slidesToScroll,n=this.options.loop?0:(i-this.config.slidesPerView)/e;return this.data.currentPage<i-1&&this.data.currentPage+e<=(n?n+e-1:i-1)?(this.data.currentPage+=this.options.slidesToScroll||1,this.slide(),!1):!(this.options.loop&&this.data.currentPage+e>i-1)||t&&t.config.nested?void this.slide():(this.data.currentPage+=this.options.slidesToScroll||1,this.config.transitionEnding=!0,this.config.itemTransitionEnding=!0,this.slide(),!1)}}},m={props:{options:{type:Object,default:function(){return{}}}},name:"sliderCoverflow",data:function(){return{data:{},config:{thresholdDistance:this.options.thresholdDistance||50,transitionEnding:!1,itemTransitionEnding:!1}}},methods:{pre:function(){var t=this.config.sliderLength;return this.data.currentPage>=1?(this.data.currentPage-=1,this.slide(),!1):this.options.loop&&(this.data.currentPage-=1,this.config.transitionEnding=!0,this.config.itemTransitionEnding=!0,this.data.currentPage<0)?(this.slide(t-1),this.config.transitionEnding=!1,this.config.itemTransitionEnding=!1,!1):void this.slide()},next:function(){var t=this.config.sliderLength;return this.data.currentPage<t-1?(this.data.currentPage+=1,this.slide(),!1):this.options.loop&&(this.data.currentPage+=1,this.config.transitionEnding=!0,this.config.itemTransitionEnding=!0,this.data.currentPage>=t)?(this.slide(0),this.config.transitionEnding=!1,this.config.itemTransitionEnding=!1,!1):void this.slide()},slide:function(t,i){this.fadeDom()},fadeDom:function(){for(var t=this.data.currentPage,i=this.$el.getElementsByClassName("slider-wrapper")[0].getElementsByClassName("slider-item"),e=this.options.speed,n=0;n<i.length;n++)n===t||n===t+1?(i[n].style.opacity="1",i[n].style["transition-property"]="opacity",i[n].style["-webkit-transition-property"]="opacity",i[n].style["transition-duration"]=(this.config.animation?e||300:0)+"ms",i[n].style["-wekkit-transition-duration"]=(this.config.animation?e||300:0)+"ms"):(i[n].style.opacity="0",i[n].style["transition-duration"]=(this.config.animation?e||300:0)+"ms",i[n].style["-webkit-transition-duration"]=(this.config.animation?e||300:0)+"ms")}}},v={props:{options:{type:Object,default:function(){return{}}}},name:"slider",mixins:[f,n,l,d,h,p,u,m],data:function(){return{data:{},config:{pageWidth:0,pageHeight:0,loading:!1,effect:this.options.effect||"slide",resize:void 0===this.options.resize||this.options.resize,containerClass:{"swiper-container-vertical":!1,"swiper-container-horizontal":!0,"swiper-container-cursorGrab":this.options.grabCursor||!1}}}},mounted:function(){this.config.pageWidth=this.$el.offsetWidth,this.config.pageHeight=this.$el.offsetHeight,"vertical"===this.options.direction?this.config.containerClass["swiper-container-vertical"]=!0:this.config.containerClass["swiper-container-horizontal"]=!0},methods:{swipeStart:function(t){n.methods.swipeStart.call(this,t)},swipeMove:function(t){n.methods.swipeMove.call(this,t),"slide"!==this.config.effect&&"nest"!==this.config.effect||p.methods.swipeMove.call(this,t)},swipeEnd:function(t){n.methods.swipeEnd.call(this,t)},swipeOut:function(t){n.methods.swipeOut.call(this,t)},pre:function(){this.data.direction="left","slide"!==this.config.effect&&"nest"!==this.config.effect||p.methods.pre.call(this),"coverflow"===this.config.effect&&u.methods.pre.call(this),"fade"===this.config.effect&&m.methods.pre.call(this)},next:function(){this.data.direction="right","slide"!==this.config.effect&&"nest"!==this.config.effect||p.methods.next.call(this),"coverflow"===this.config.effect&&u.methods.next.call(this),"fade"===this.config.effect&&m.methods.next.call(this)},slide:function(t,i){this.$emit("slide",this.data),function(){if(this.config.sliderLength){var t=this.config.sliderLength,i=this.options.loopedSlides||1,e=this.$children[0].$children,n=this.data.currentPage,s=e.filter(function(t){var i=t.$vnode.isCloned;return"slideritem"===t.$options.name&&!i});if(e.forEach(function(t){t.removeActive(),t.removeCopyActive()}),"nest"===this.config.effect)return;s[n]&&s[n].addActive(),(n<0||n>=t)&&(e[n+i]&&e[n+i].addCopyActive(),s[n<0?t+n:0+n-t].addActive())}if(this.data.currentPage<0||this.data.currentPage>=this.config.sliderLength)return!1}.call(this,t,i),this.config.animation=!0,"animationnone"===i&&(this.config.animation=!1),(t||0===t)&&(this.data.currentPage=t),"slide"!==this.config.effect&&"nest"!==this.config.effect||p.methods.slide.call(this,t,i),"fade"===this.config.effect&&m.methods.slide.call(this,t,i)},preventDefault:function(t){t.preventDefault()}},components:{sliderWrapper:a,renderpagination:{render:function(t){var i=this.index,e=this.options.renderPagination;return e.call(this,t,i)},name:"renderpagination",props:{index:{type:Number,required:!0},options:{type:Object,required:!0}}}}},y=(e(324),e(42)),w=Object(y.a)(v,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"slider-container",class:t.config.containerClass,on:{mouseleave:t.swipeOut}},[e("div",{staticClass:"slider-touch",style:t.styleobj,on:{touchmove:t.swipeMove,touchstart:t.swipeStart,touchend:t.swipeEnd,mousedown:t.swipeStart,mouseup:t.swipeEnd,mousemove:t.swipeMove,"webkit-transition-end":t.onTransitionEnd,transitionend:t.onTransitionEnd,transitioncancel:t.onTransitionEnd,"webkit-transition-cancel":t.onTransitionEnd}},[e("sliderWrapper",[t._t("default")],2)],1),t._v(" "),t.config.pagination?e("div",{staticClass:"slider-pagination slider-pagination-bullets"},[t._l(t.config.sliderLength,function(i){return[t.options.renderPagination?t._e():e("span",{key:i,staticClass:"slider-pagination-bullet",class:i-1===t.data.currentPage?"slider-pagination-bullet-active":"",on:{click:function(e){return t.slide(i-1)}}}),t._v(" "),t.options.renderPagination?e("renderpagination",{key:i,class:i-1===t.data.currentPage?"slider-pagination-bullet-active-render":"",attrs:{index:i,options:t.options},nativeOn:{click:function(e){return t.slide(i-1)}}}):t._e()]})],2):t._e(),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0===t.config.sliderLength||t.config.loading,expression:"config.sliderLength === 0 || config.loading"}],staticClass:"slider-loading"},[t._t("loading")],2)])},[],!1,null,null,null);i.a=w.exports},242:function(t,i,e){"use strict";var n={name:"sliderBasic",data:function(){return{data:{},config:{}}},methods:{transform:function(){var t=this.$parent.$parent.options,i=this.$parent.$parent.data,e=this.$parent.$parent.config,n=this.index,s=e.pageWidth/2-this.data.$el.offsetWidth/2,o=s-e.deviation+"px",a=s+e.deviation+"px",r=s+"px",c={};return n===i.currentPage-1||n===this.pageLength-2&&-1===i.currentPage?(c.transform="translate3D("+o+",0 ,0) scale3d("+e.widthScalingRatio+","+e.heightScalingRatio+",1)",c.opacity="1","left"===i.direction?c["z-index"]="10":c["z-index"]="1"):n===i.currentPage+1||1===n&&i.currentPage===this.pageLength?(c.transform="translate3D("+a+",0 ,0)",c.transform="translate3D("+a+",0 ,0) scale3d("+e.widthScalingRatio+","+e.heightScalingRatio+",1)",c.opacity="1","left"===i.direction?c["z-index"]="1":c["z-index"]="10"):n===i.currentPage?(c.transform="translate3D("+r+",0 ,0) scale3d(1,1,1)",c["z-index"]="99",c.opacity="1"):(c.transform="translate3D("+r+",0 ,0)",c.opacity="0"),n===this.pageLength-1&&0===i.currentPage&&(c.transform="translate3D("+o+",0 ,0) scale3d("+e.widthScalingRatio+","+e.heightScalingRatio+",1)",c.opacity="1"),0===n&&i.currentPage===this.pageLength-1&&(c.transform="translate3D("+a+",0 ,0) scale3d("+e.widthScalingRatio+","+e.heightScalingRatio+",1)",c.opacity="1"),(n!==this.pageLength-1&&n!==this.pageLength-2||-1!==i.currentPage)&&(0!==n&&1!==n||i.currentPage!==this.pageLength)||(c.opacity="1",0===n&&(c["z-index"]="99"),n===this.pageLength-1&&(c["z-index"]="99")),c.transitionDuration=(e.animation?t.speed||300:0)+"ms",c["-webkitTransitionDuration"]=(e.animation?t.speed||300:0)+"ms",c.position="absolute",c}}},s={props:["index","pageLength"],name:"slideritem",data:function(){return{slideClass:{"slider-item":!0,"slider-active":!1,"slider-copy":!1,"slider-active-copy":!1},data:{start:{},end:{},index:this.index?this.index:this.$vnode.key,$el:""}}},computed:{transform:function(){var t=this.$parent.$parent.options,i=this.$parent.$parent.data,e=this.$parent.$parent.config;return t&&i&&e&&this.data.$el?"coverflow"===t.effect?n.methods.transform.call(this):void 0:{}}},mounted:function(){this.data.$el=this.$el,this.$vnode.isCloned?this.slideClass["slider-copy"]=!0:this.renderDom()},methods:{touchStart:function(t){if("touchstart"===t.type){if(t.touches.length>1)return this.data.tracking=!1,!1;this.data.start.t=(new Date).getTime(),this.data.start.x=t.targetTouches[0].clientX,this.data.start.y=t.targetTouches[0].clientY,this.data.end.x=t.targetTouches[0].clientX,this.data.end.y=t.targetTouches[0].clientY,this.data.start.pageX=t.targetTouches[0].pageX,this.data.start.pageY=t.targetTouches[0].pageY}else this.data.start.t=(new Date).getTime(),this.data.start.x=t.clientX,this.data.start.y=t.clientY,this.data.end.x=t.clientX,this.data.end.y=t.clientY,this.data.start.pageX=t.pageX,this.data.start.pageY=t.pageY},touchEnd:function(t){var i=(new Date).getTime()-this.data.start.t;"touchend"===t.type?(this.data.end.t=(new Date).getTime(),this.data.end.x=t.changedTouches[0].clientX,this.data.end.y=t.changedTouches[0].clientY,this.data.end.pageX=t.changedTouches[0].pageX,this.data.end.pageY=t.changedTouches[0].pageY):(this.data.end.t=(new Date).getTime(),this.data.end.x=t.clientX,this.data.end.y=t.clientY,this.data.end.pageX=t.pageX,this.data.end.pageY=t.pageY);var e=this.data.end.pageX-this.data.start.pageX||0,n=this.data.end.pageY-this.data.start.pageY||0;i<300&&Math.abs(e)<10&&Math.abs(n)<10&&this.$emit("tap",this.data)},renderDom:function(){this.$parent&&this.$parent.renderDom(this.$el)},addActive:function(){this.slideClass["slider-active"]=!0},addCopyActive:function(){this.slideClass["slider-active-copy"]=!0},removeCopyActive:function(){this.slideClass["slider-active-copy"]=!1},removeActive:function(){this.slideClass["slider-active"]=!1},onTransitionEnd:function(t){this.$parent&&this.$parent.onItemTransitionEnd(t)}}},o=e(42),a=Object(o.a)(s,function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{class:t.slideClass,style:[t.transform],on:{touchstart:t.touchStart,touchend:t.touchEnd,mousedown:t.touchStart,mouseup:t.touchEnd,"webkit-transition-end":t.onTransitionEnd,transitionend:t.onTransitionEnd}},[t._t("default")],2)},[],!1,null,null,null);i.a=a.exports},244:function(t,i){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},246:function(t,i,e){var n=e(136),s=e(97),o=e(64),a=e(133),r=e(46),c=e(134),h=Object.getOwnPropertyDescriptor;i.f=e(19)?h:function(t,i){if(t=o(t),i=a(i,!0),c)try{return h(t,i)}catch(t){}if(r(t,i))return s(!n.f.call(t,i),t[i])}},249:function(t,i,e){t.exports=e(250)},250:function(t,i,e){e(251),t.exports=e(0).parseInt},251:function(t,i,e){var n=e(1),s=e(252);n(n.G+n.F*(parseInt!=s),{parseInt:s})},252:function(t,i,e){var n=e(2).parseInt,s=e(253).trim,o=e(244),a=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,i){var e=s(String(t),3);return n(e,i>>>0||(a.test(e)?16:10))}:n},253:function(t,i,e){var n=e(1),s=e(65),o=e(16),a=e(244),r="["+a+"]",c=RegExp("^"+r+r+"*"),h=RegExp(r+r+"*$"),d=function(t,i,e){var s={},r=o(function(){return!!a[t]()||"​"!="​"[t]()}),c=s[t]=r?i(l):a[t];e&&(s[e]=c),n(n.P+n.F*r,"String",s)},l=d.trim=function(t,i){return t=String(s(t)),1&i&&(t=t.replace(c,"")),2&i&&(t=t.replace(h,"")),t};t.exports=d},255:function(t,i,e){var n=e(10),s=e(44),o=e(43),a=e(256),r="["+a+"]",c=RegExp("^"+r+r+"*"),h=RegExp(r+r+"*$"),d=function(t,i,e){var s={},r=o(function(){return!!a[t]()||"​"!="​"[t]()}),c=s[t]=r?i(l):a[t];e&&(s[e]=c),n(n.P+n.F*r,"String",s)},l=d.trim=function(t,i){return t=String(s(t)),1&i&&(t=t.replace(c,"")),2&i&&(t=t.replace(h,"")),t};t.exports=d},256:function(t,i){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},258:function(t,i,e){var n=e(15),s=e(259).set;t.exports=function(t,i,e){var o,a=i.constructor;return a!==e&&"function"==typeof a&&(o=a.prototype)!==e.prototype&&n(o)&&s&&s(t,o),t}},259:function(t,i,e){var n=e(15),s=e(14),o=function(t,i){if(s(t),!n(i)&&null!==i)throw TypeError(i+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,i,n){try{(n=e(27)(Function.call,e(246).f(Object.prototype,"__proto__").set,2))(t,[]),i=!(t instanceof Array)}catch(t){i=!0}return function(t,e){return o(t,e),i?t.__proto__=e:n(t,e),t}}({},!1):void 0),check:o}},260:function(t,i,e){var n=e(135),s=e(98).concat("length","prototype");i.f=Object.getOwnPropertyNames||function(t){return n(t,s)}},276:function(t,i,e){},323:function(t,i,e){"use strict";var n=e(5),s=e(46),o=e(21),a=e(258),r=e(133),c=e(43),h=e(260).f,d=e(246).f,l=e(26).f,f=e(255).trim,g=n.Number,p=g,u=g.prototype,m="Number"==o(e(137)(u)),v="trim"in String.prototype,y=function(t){var i=r(t,!1);if("string"==typeof i&&i.length>2){var e,n,s,o=(i=v?i.trim():f(i,3)).charCodeAt(0);if(43===o||45===o){if(88===(e=i.charCodeAt(2))||120===e)return NaN}else if(48===o){switch(i.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+i}for(var a,c=i.slice(2),h=0,d=c.length;h<d;h++)if((a=c.charCodeAt(h))<48||a>s)return NaN;return parseInt(c,n)}}return+i};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var i=arguments.length<1?0:t,e=this;return e instanceof g&&(m?c(function(){u.valueOf.call(e)}):"Number"!=o(e))?a(new p(y(i)),e,g):y(i)};for(var w,T=e(19)?h(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$=0;T.length>$;$++)s(p,w=T[$])&&!s(g,w)&&l(g,w,d(p,w));g.prototype=u,u.constructor=g,e(45)(n,"Number",g)}},324:function(t,i,e){"use strict";var n=e(276);e.n(n).a}}]);