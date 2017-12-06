// Compiled by ClojureScript 1.9.229 {}
goog.provide('puzzle.dom_sizes');
goog.require('cljs.core');
goog.require('puzzle.model');
goog.require('dommy.core');
if(typeof puzzle.dom_sizes.busy !== 'undefined'){
} else {
puzzle.dom_sizes.busy = cljs.core.atom.call(null,false);
}
if(typeof puzzle.dom_sizes.referenceToInterval !== 'undefined'){
} else {
puzzle.dom_sizes.referenceToInterval = cljs.core.atom.call(null,null);
}
puzzle.dom_sizes.getTileHeight = (function puzzle$dom_sizes$getTileHeight(){
return ((100) / cljs.core.get.call(null,puzzle.model.size,new cljs.core.Keyword(null,"y","y",-1757859776)));
});
puzzle.dom_sizes.getTileWidth = (function puzzle$dom_sizes$getTileWidth(){
return ((100) / cljs.core.get.call(null,puzzle.model.size,new cljs.core.Keyword(null,"x","x",2099068185)));
});
puzzle.dom_sizes.getTileLeft = (function puzzle$dom_sizes$getTileLeft(tile){
return (cljs.core.get.call(null,tile,new cljs.core.Keyword(null,"x","x",2099068185)) * puzzle.dom_sizes.getTileWidth.call(null));
});
puzzle.dom_sizes.getTileTop = (function puzzle$dom_sizes$getTileTop(tile){
return (cljs.core.get.call(null,tile,new cljs.core.Keyword(null,"y","y",-1757859776)) * puzzle.dom_sizes.getTileHeight.call(null));
});
puzzle.dom_sizes.getAnimStyle = (function puzzle$dom_sizes$getAnimStyle(oldTile,newTile){
var oldTop = puzzle.dom_sizes.getTileTop.call(null,oldTile);
var newTop = puzzle.dom_sizes.getTileTop.call(null,newTile);
var oldLeft = puzzle.dom_sizes.getTileLeft.call(null,oldTile);
var newLeft = puzzle.dom_sizes.getTileLeft.call(null,newTile);
return clojure.string.join.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left:",newLeft,"%;","top:",newTop,"%;"], null));
});
puzzle.dom_sizes.animate = (function puzzle$dom_sizes$animate(id,style,oldTile,newTile){
var frames = (30);
var duration = (400);
var oldTop = puzzle.dom_sizes.getTileTop.call(null,oldTile);
var newTop = puzzle.dom_sizes.getTileTop.call(null,newTile);
var oldLeft = puzzle.dom_sizes.getTileLeft.call(null,oldTile);
var newLeft = puzzle.dom_sizes.getTileLeft.call(null,newTile);
var stepDuration = (duration / frames);
var stepTop = ((newTop - oldTop) / frames);
var stepLeft = ((newLeft - oldLeft) / frames);
var currentStep = cljs.core.atom.call(null,(0));
puzzle.dom_sizes.forStep = ((function (frames,duration,oldTop,newTop,oldLeft,newLeft,stepDuration,stepTop,stepLeft,currentStep){
return (function puzzle$dom_sizes$animate_$_forStep(){
var oldStep = cljs.core.deref.call(null,currentStep);
var newStep = (oldStep + (1));
var tempTop = ((newStep * stepTop) + oldTop);
var tempLeft = ((newStep * stepLeft) + oldLeft);
cljs.core.reset_BANG_.call(null,currentStep,newStep);

if((newStep > frames)){
return ((function (oldStep,newStep,tempTop,tempLeft,frames,duration,oldTop,newTop,oldLeft,newLeft,stepDuration,stepTop,stepLeft,currentStep){
return (function (){
return window.clearInterval(cljs.core.deref.call(null,puzzle.dom_sizes.referenceToInterval),cljs.core.reset_BANG_.call(null,puzzle.dom_sizes.busy,false));
});})(oldStep,newStep,tempTop,tempLeft,frames,duration,oldTop,newTop,oldLeft,newLeft,stepDuration,stepTop,stepLeft,currentStep))
.call(null);
} else {
return dommy.core.set_attr_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,clojure.string.join.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#",id], null)))),new cljs.core.Keyword(null,"style","style",-496642736),clojure.string.join.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [style,"left:",tempLeft,"%;","top:",tempTop,"%;"], null)));
}
});})(frames,duration,oldTop,newTop,oldLeft,newLeft,stepDuration,stepTop,stepLeft,currentStep))
;

cljs.core.reset_BANG_.call(null,puzzle.dom_sizes.busy,true);

var interval = window.setInterval(puzzle.dom_sizes.forStep,stepDuration);
return cljs.core.reset_BANG_.call(null,puzzle.dom_sizes.referenceToInterval,interval);
});

//# sourceMappingURL=dom_sizes.js.map?rel=1512595802865