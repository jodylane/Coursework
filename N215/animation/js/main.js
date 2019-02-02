/**
 * Created by Josh Lane on October 27, 2015.
 * N320
 */
$(document).ready(function(){
    //TweenMax.from($("h1"),3,{x: 100,y:200,rotation:10,skewX:"30deg", skewY:"10deg",delay:1,repeat:-1,yoyo:true,ease: Bounce.easeInOut})
    var timeline = new TimelineMax({delay:1})
    timeline.staggerTo(".box",2,{x: 900,y:100,yoyo:true,repeat:-1},.2)
});