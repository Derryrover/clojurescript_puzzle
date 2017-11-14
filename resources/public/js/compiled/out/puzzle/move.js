// Compiled by ClojureScript 1.9.229 {}
goog.provide('puzzle.move');
goog.require('cljs.core');
goog.require('puzzle.model');
puzzle.move.functor1 = (function puzzle$move$functor1(func,parm1){
if(cljs.core._EQ_.call(null,null,parm1)){
return null;
} else {
return func.call(null,parm1);
}
});
puzzle.move.oneUp = (function puzzle$move$oneUp(coor){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(coor);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(coor);
if(cljs.core._EQ_.call(null,y,(0))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y - (1))], null);
}
});
puzzle.move.oneDown = (function puzzle$move$oneDown(coor){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(coor);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(coor);
if(cljs.core._EQ_.call(null,y,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(puzzle.model.size) - (1)))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1))], null);
}
});
puzzle.move.oneLeft = (function puzzle$move$oneLeft(coor){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(coor);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(coor);
if(cljs.core._EQ_.call(null,x,(0))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
}
});
puzzle.move.oneRight = (function puzzle$move$oneRight(coor){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(coor);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(coor);
if(cljs.core._EQ_.call(null,x,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(puzzle.model.size) - (1)))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
}
});
puzzle.move.canMoveTo = (function puzzle$move$canMoveTo(vecs,coord){
if(cljs.core._EQ_.call(null,coord,null)){
return false;
} else {
if(cljs.core._EQ_.call(null,null,puzzle.model.getFromCollection.call(null,vecs,coord))){
return true;
} else {
return false;
}
}
});
puzzle.move.findMove = (function puzzle$move$findMove(vecs,coord){
var self = puzzle.model.getFromCollection.call(null,vecs,coord);
var up = puzzle.move.canMoveTo.call(null,vecs,puzzle.move.oneUp.call(null,coord));
var down = puzzle.move.canMoveTo.call(null,vecs,puzzle.move.oneDown.call(null,coord));
var left = puzzle.move.canMoveTo.call(null,vecs,puzzle.move.oneLeft.call(null,coord));
var right = puzzle.move.canMoveTo.call(null,vecs,puzzle.move.oneRight.call(null,coord));
if(cljs.core._EQ_.call(null,self,null)){
return null;
} else {
if(cljs.core._EQ_.call(null,up,true)){
return "up";
} else {
if(cljs.core._EQ_.call(null,down,true)){
return "down";
} else {
if(cljs.core._EQ_.call(null,left,true)){
return "left";
} else {
if(cljs.core._EQ_.call(null,right,true)){
return "right";
} else {
return null;
}
}
}
}
}
});
puzzle.move.adaptCoord = (function puzzle$move$adaptCoord(coord,move){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(coord);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(coord);
var G__29904 = move;
switch (G__29904) {
case "up":
return cljs.core.assoc.call(null,coord,new cljs.core.Keyword(null,"y","y",-1757859776),(y - (1)));

break;
case "down":
return cljs.core.assoc.call(null,coord,new cljs.core.Keyword(null,"y","y",-1757859776),(y + (1)));

break;
case "left":
return cljs.core.assoc.call(null,coord,new cljs.core.Keyword(null,"x","x",2099068185),(x - (1)));

break;
case "right":
return cljs.core.assoc.call(null,coord,new cljs.core.Keyword(null,"x","x",2099068185),(x + (1)));

break;
default:
return coord;

}
});
puzzle.move.doMove = (function puzzle$move$doMove(vecs,coord,move){
var excluded = puzzle.model.excludeFromCollection.call(null,vecs,coord);
var item = puzzle.model.getFromCollection.call(null,vecs,coord);
var adaptedCoord = puzzle.move.adaptCoord.call(null,coord,move);
if(cljs.core.truth_(item)){
return cljs.core.conj.call(null,excluded,cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"butIs","butIs",296488762),adaptedCoord));
} else {
return vecs;
}
});
puzzle.move.moveCoord = (function puzzle$move$moveCoord(vecs,coord){
var move = puzzle.move.findMove.call(null,vecs,coord);
if(cljs.core._EQ_.call(null,null,move)){
return vecs;
} else {
return puzzle.move.doMove.call(null,vecs,coord,move);
}
});

//# sourceMappingURL=move.js.map?rel=1510423695457