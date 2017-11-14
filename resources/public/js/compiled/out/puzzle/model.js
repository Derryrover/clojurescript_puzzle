// Compiled by ClojureScript 1.9.229 {}
goog.provide('puzzle.model');
goog.require('cljs.core');
puzzle.model.size = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(4)], null);
puzzle.model.dims = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.vec.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(puzzle.model.size))),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.vec.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(puzzle.model.size)))], null);
puzzle.model.createTile = (function puzzle$model$createTile(x,y){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldBe","shouldBe",1661396291),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"butIs","butIs",296488762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)], null);
});
puzzle.model.combineItemListWithFunc = (function puzzle$model$combineItemListWithFunc(func,list,item){
return cljs.core.mapv.call(null,(function (p){
return func.call(null,item,p);
}),list);
});
puzzle.model.concat2Vectors = (function puzzle$model$concat2Vectors(list1,list2){
if(cljs.core._EQ_.call(null,list2,cljs.core.PersistentVector.EMPTY)){
return list1;
} else {
return puzzle$model$concat2Vectors.call(null,cljs.core.conj.call(null,list1,cljs.core.nth.call(null,list2,(0))),cljs.core.subvec.call(null,list2,(1)));
}
});
puzzle.model.flattenVecs = (function puzzle$model$flattenVecs(vecs){
return cljs.core.reduce_kv.call(null,(function (init,k,v){
return puzzle.model.concat2Vectors.call(null,init,v);
}),cljs.core.PersistentVector.EMPTY,vecs);
});
puzzle.model.lift2 = (function puzzle$model$lift2(func,list1,list2){
return puzzle.model.flattenVecs.call(null,cljs.core.mapv.call(null,(function (list1_p){
return puzzle.model.combineItemListWithFunc.call(null,func,list2,list1_p);
}),list1));
});
puzzle.model.coords = puzzle.model.lift2.call(null,puzzle.model.createTile,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(puzzle.model.dims),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(puzzle.model.dims));
puzzle.model.getFromCollection = (function puzzle$model$getFromCollection(vecs,coor){
var filtered = cljs.core.filterv.call(null,(function (vec){
return cljs.core._EQ_.call(null,coor,new cljs.core.Keyword(null,"butIs","butIs",296488762).cljs$core$IFn$_invoke$arity$1(vec));
}),vecs);
if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,filtered)){
return null;
} else {
return cljs.core.nth.call(null,filtered,(0));
}
});
puzzle.model.excludeFromCollection = (function puzzle$model$excludeFromCollection(vecs,coor){
return cljs.core.filterv.call(null,(function (vec){
return cljs.core.not_EQ_.call(null,coor,new cljs.core.Keyword(null,"butIs","butIs",296488762).cljs$core$IFn$_invoke$arity$1(vec));
}),vecs);
});
puzzle.model.tiles = puzzle.model.excludeFromCollection.call(null,puzzle.model.coords,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(3)], null));

//# sourceMappingURL=model.js.map?rel=1510423694837