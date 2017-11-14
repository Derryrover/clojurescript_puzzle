// Compiled by ClojureScript 1.9.229 {}
goog.provide('puzzle.core');
goog.require('cljs.core');
goog.require('puzzle.image_dimension');
goog.require('puzzle.model');
goog.require('dommy.core');
goog.require('puzzle.move');
goog.require('puzzle.dom_sizes');
if(typeof puzzle.core.all_tiles !== 'undefined'){
} else {
puzzle.core.all_tiles = cljs.core.atom.call(null,puzzle.model.tiles);
}
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/puzzle/core.cljs. Go ahead and edit it and see reloading in action.");
puzzle.core.on_js_reload = (function puzzle$core$on_js_reload(){
return null;
});
cljs.core.println.call(null,clojure.string.join.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["testttt","123"], null)));
cljs.core.println.call(null,"testttt");
cljs.core.println.call(null,"testttt__2");
cljs.core.println.call(null,"testttt__3");
cljs.core.println.call(null,"testttt__4");
cljs.core.println.call(null,cljs.core.get.call(null,puzzle.model.size,new cljs.core.Keyword(null,"x","x",2099068185)));
addEventListener("resize",(function (){
return puzzle.image_dimension.risize_image.call(null);
}));
puzzle.image_dimension.risize_image.call(null);
puzzle.core.click_handler = (function puzzle$core$click_handler(e){
return console.log("You clicked my button! Congratulations");
});
puzzle.core.putTile = (function puzzle$core$putTile(tile_model){
var height = ((100) / cljs.core.get.call(null,puzzle.model.size,new cljs.core.Keyword(null,"y","y",-1757859776)));
var width = ((100) / cljs.core.get.call(null,puzzle.model.size,new cljs.core.Keyword(null,"x","x",2099068185)));
var left = (cljs.core.get_in.call(null,tile_model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"butIs","butIs",296488762),new cljs.core.Keyword(null,"x","x",2099068185)], null)) * width);
var top = (cljs.core.get_in.call(null,tile_model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"butIs","butIs",296488762),new cljs.core.Keyword(null,"y","y",-1757859776)], null)) * height);
var heightStyle = clojure.string.join.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["height:",height,"%;"], null));
var widthStyle = clojure.string.join.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["width:",width,"%;"], null));
var leftStyle = clojure.string.join.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left:",left,"%;"], null));
var topStyle = clojure.string.join.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top:",top,"%;"], null));
var leftStyleMinus = clojure.string.join.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left:",(- (left * cljs.core.get.call(null,puzzle.model.size,new cljs.core.Keyword(null,"x","x",2099068185)))),"%;"], null));
var topStyleMinus = clojure.string.join.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top:",(- (top * cljs.core.get.call(null,puzzle.model.size,new cljs.core.Keyword(null,"y","y",-1757859776)))),"%;"], null));
var style_size = clojure.string.join.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["overflow:hidden;position:absolute;",heightStyle,widthStyle,leftStyle,topStyle], null));
var style_inner = clojure.string.join.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["z-index:10;position:absolute;",leftStyleMinus,topStyleMinus], null));
var id = clojure.string.join.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["js_id_tile",cljs.core.get_in.call(null,tile_model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shouldBe","shouldBe",1661396291),new cljs.core.Keyword(null,"x","x",2099068185)], null)),cljs.core.get_in.call(null,tile_model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shouldBe","shouldBe",1661396291),new cljs.core.Keyword(null,"y","y",-1757859776)], null))], null));
var tile_model_state = cljs.core.atom.call(null,cljs.core.get.call(null,tile_model,new cljs.core.Keyword(null,"butIs","butIs",296488762)));
dommy.core.append_BANG_.call(null,document.getElementById("puzzle_screen"),(function (){var node = document.getElementById("prototype_tile").cloneNode(true);
var inner = node.querySelector("#prototype_inner");
dommy.core.set_attr_BANG_.call(null,node,new cljs.core.Keyword(null,"style","style",-496642736),style_size);

dommy.core.set_attr_BANG_.call(null,node,new cljs.core.Keyword(null,"id","id",-1388402092),id);

return dommy.core.set_attr_BANG_.call(null,node,new cljs.core.Keyword(null,"class","class",-2030961996),"css_tiles");
})());

dommy.core.set_attr_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,clojure.string.join.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#",id], null)))).querySelector("#prototype_inner"),new cljs.core.Keyword(null,"style","style",-496642736),style_inner);

puzzle.core.click_tile = ((function (height,width,left,top,heightStyle,widthStyle,leftStyle,topStyle,leftStyleMinus,topStyleMinus,style_size,style_inner,id,tile_model_state){
return (function puzzle$core$putTile_$_click_tile(e){
var butIs = cljs.core.get.call(null,tile_model,new cljs.core.Keyword(null,"butIs","butIs",296488762));
var move = puzzle.move.findMove.call(null,cljs.core.deref.call(null,puzzle.core.all_tiles),cljs.core.deref.call(null,tile_model_state));
if(cljs.core.not_EQ_.call(null,move,null)){
return ((function (butIs,move,height,width,left,top,heightStyle,widthStyle,leftStyle,topStyle,leftStyleMinus,topStyleMinus,style_size,style_inner,id,tile_model_state){
return (function (){
var oldTile = cljs.core.deref.call(null,tile_model_state);
var newTile = puzzle.move.adaptCoord.call(null,oldTile,move);
var animStyle = puzzle.dom_sizes.getAnimStyle.call(null,oldTile,newTile);
var newTileX = cljs.core.get.call(null,newTile,new cljs.core.Keyword(null,"x","x",2099068185));
puzzle.dom_sizes.animate.call(null,id,clojure.string.join.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["overflow:hidden;position:absolute;",heightStyle,widthStyle], null)),oldTile,newTile);

cljs.core.reset_BANG_.call(null,puzzle.core.all_tiles,puzzle.move.doMove.call(null,cljs.core.deref.call(null,puzzle.core.all_tiles),cljs.core.deref.call(null,tile_model_state),move));

return cljs.core.reset_BANG_.call(null,tile_model_state,puzzle.move.adaptCoord.call(null,cljs.core.deref.call(null,tile_model_state),move));
});})(butIs,move,height,width,left,top,heightStyle,widthStyle,leftStyle,topStyle,leftStyleMinus,topStyleMinus,style_size,style_inner,id,tile_model_state))
.call(null);
} else {
return null;
}
});})(height,width,left,top,heightStyle,widthStyle,leftStyle,topStyle,leftStyleMinus,topStyleMinus,style_size,style_inner,id,tile_model_state))
;

return dommy.core.listen_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,clojure.string.join.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#",id], null)))),new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),puzzle.core.click_tile);
});
cljs.core.mapv.call(null,puzzle.core.putTile,cljs.core.deref.call(null,puzzle.core.all_tiles));

//# sourceMappingURL=core.js.map?rel=1510423695516