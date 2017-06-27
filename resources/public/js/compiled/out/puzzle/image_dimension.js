// Compiled by ClojureScript 1.9.229 {}
goog.provide('puzzle.image_dimension');
goog.require('cljs.core');
goog.require('puzzle.model');
goog.require('dommy.core');
puzzle.image_dimension.get_image_ratio = (function puzzle$image_dimension$get_image_ratio(){
return (document.getElementById("js_img_id").naturalHeight / document.getElementById("js_img_id").naturalWidth);
});
puzzle.image_dimension.get_window_ratio = (function puzzle$image_dimension$get_window_ratio(){
return ((window["innerHeight"]) / (window["innerWidth"]));
});
puzzle.image_dimension.risize_image = (function puzzle$image_dimension$risize_image(){
var window_ratio = puzzle.image_dimension.get_window_ratio.call(null);
var image_ratio = puzzle.image_dimension.get_image_ratio.call(null);
var innerWidth = (window["innerWidth"]);
var innerHeight = (window["innerHeight"]);
var style1 = clojure.string.join.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position:absolute;display:block;margin:auto;","width:",innerWidth,"px;","height:",(innerWidth * image_ratio),"px;"], null));
var style2 = clojure.string.join.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position:absolute;display:block;margin:auto;","width:",(innerHeight / image_ratio),"px;","height:",innerHeight,"px;"], null));
var node = document.getElementById("js_img_id");
var node_puzzle = document.getElementById("puzzle_screen");
var imgs = dommy.utils.__GT_Array.call(null,document.getElementsByClassName("js_img_class"));
if((window_ratio > image_ratio)){
return ((function (window_ratio,image_ratio,innerWidth,innerHeight,style1,style2,node,node_puzzle,imgs){
return (function (){
dommy.core.set_attr_BANG_.call(null,node,new cljs.core.Keyword(null,"width","width",-384071477),innerWidth);

dommy.core.set_attr_BANG_.call(null,node,new cljs.core.Keyword(null,"height","height",1025178622),(innerWidth * image_ratio));

var seq__28941_28957 = cljs.core.seq.call(null,imgs);
var chunk__28942_28958 = null;
var count__28943_28959 = (0);
var i__28944_28960 = (0);
while(true){
if((i__28944_28960 < count__28943_28959)){
var img_28961 = cljs.core._nth.call(null,chunk__28942_28958,i__28944_28960);
dommy.core.set_attr_BANG_.call(null,img_28961,new cljs.core.Keyword(null,"width","width",-384071477),innerWidth);

var G__28962 = seq__28941_28957;
var G__28963 = chunk__28942_28958;
var G__28964 = count__28943_28959;
var G__28965 = (i__28944_28960 + (1));
seq__28941_28957 = G__28962;
chunk__28942_28958 = G__28963;
count__28943_28959 = G__28964;
i__28944_28960 = G__28965;
continue;
} else {
var temp__4657__auto___28966 = cljs.core.seq.call(null,seq__28941_28957);
if(temp__4657__auto___28966){
var seq__28941_28967__$1 = temp__4657__auto___28966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28941_28967__$1)){
var c__26750__auto___28968 = cljs.core.chunk_first.call(null,seq__28941_28967__$1);
var G__28969 = cljs.core.chunk_rest.call(null,seq__28941_28967__$1);
var G__28970 = c__26750__auto___28968;
var G__28971 = cljs.core.count.call(null,c__26750__auto___28968);
var G__28972 = (0);
seq__28941_28957 = G__28969;
chunk__28942_28958 = G__28970;
count__28943_28959 = G__28971;
i__28944_28960 = G__28972;
continue;
} else {
var img_28973 = cljs.core.first.call(null,seq__28941_28967__$1);
dommy.core.set_attr_BANG_.call(null,img_28973,new cljs.core.Keyword(null,"width","width",-384071477),innerWidth);

var G__28974 = cljs.core.next.call(null,seq__28941_28967__$1);
var G__28975 = null;
var G__28976 = (0);
var G__28977 = (0);
seq__28941_28957 = G__28974;
chunk__28942_28958 = G__28975;
count__28943_28959 = G__28976;
i__28944_28960 = G__28977;
continue;
}
} else {
}
}
break;
}

var seq__28945_28978 = cljs.core.seq.call(null,imgs);
var chunk__28946_28979 = null;
var count__28947_28980 = (0);
var i__28948_28981 = (0);
while(true){
if((i__28948_28981 < count__28947_28980)){
var img_28982 = cljs.core._nth.call(null,chunk__28946_28979,i__28948_28981);
dommy.core.set_attr_BANG_.call(null,img_28982,new cljs.core.Keyword(null,"height","height",1025178622),(innerWidth * image_ratio));

var G__28983 = seq__28945_28978;
var G__28984 = chunk__28946_28979;
var G__28985 = count__28947_28980;
var G__28986 = (i__28948_28981 + (1));
seq__28945_28978 = G__28983;
chunk__28946_28979 = G__28984;
count__28947_28980 = G__28985;
i__28948_28981 = G__28986;
continue;
} else {
var temp__4657__auto___28987 = cljs.core.seq.call(null,seq__28945_28978);
if(temp__4657__auto___28987){
var seq__28945_28988__$1 = temp__4657__auto___28987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28945_28988__$1)){
var c__26750__auto___28989 = cljs.core.chunk_first.call(null,seq__28945_28988__$1);
var G__28990 = cljs.core.chunk_rest.call(null,seq__28945_28988__$1);
var G__28991 = c__26750__auto___28989;
var G__28992 = cljs.core.count.call(null,c__26750__auto___28989);
var G__28993 = (0);
seq__28945_28978 = G__28990;
chunk__28946_28979 = G__28991;
count__28947_28980 = G__28992;
i__28948_28981 = G__28993;
continue;
} else {
var img_28994 = cljs.core.first.call(null,seq__28945_28988__$1);
dommy.core.set_attr_BANG_.call(null,img_28994,new cljs.core.Keyword(null,"height","height",1025178622),(innerWidth * image_ratio));

var G__28995 = cljs.core.next.call(null,seq__28945_28988__$1);
var G__28996 = null;
var G__28997 = (0);
var G__28998 = (0);
seq__28945_28978 = G__28995;
chunk__28946_28979 = G__28996;
count__28947_28980 = G__28997;
i__28948_28981 = G__28998;
continue;
}
} else {
}
}
break;
}

return dommy.core.set_attr_BANG_.call(null,node_puzzle,new cljs.core.Keyword(null,"style","style",-496642736),style1);
});})(window_ratio,image_ratio,innerWidth,innerHeight,style1,style2,node,node_puzzle,imgs))
.call(null);
} else {
return ((function (window_ratio,image_ratio,innerWidth,innerHeight,style1,style2,node,node_puzzle,imgs){
return (function (){
dommy.core.set_attr_BANG_.call(null,node,new cljs.core.Keyword(null,"height","height",1025178622),innerHeight);

dommy.core.set_attr_BANG_.call(null,node,new cljs.core.Keyword(null,"width","width",-384071477),(innerHeight / image_ratio));

var seq__28949_28999 = cljs.core.seq.call(null,imgs);
var chunk__28950_29000 = null;
var count__28951_29001 = (0);
var i__28952_29002 = (0);
while(true){
if((i__28952_29002 < count__28951_29001)){
var img_29003 = cljs.core._nth.call(null,chunk__28950_29000,i__28952_29002);
dommy.core.set_attr_BANG_.call(null,img_29003,new cljs.core.Keyword(null,"height","height",1025178622),innerHeight);

var G__29004 = seq__28949_28999;
var G__29005 = chunk__28950_29000;
var G__29006 = count__28951_29001;
var G__29007 = (i__28952_29002 + (1));
seq__28949_28999 = G__29004;
chunk__28950_29000 = G__29005;
count__28951_29001 = G__29006;
i__28952_29002 = G__29007;
continue;
} else {
var temp__4657__auto___29008 = cljs.core.seq.call(null,seq__28949_28999);
if(temp__4657__auto___29008){
var seq__28949_29009__$1 = temp__4657__auto___29008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28949_29009__$1)){
var c__26750__auto___29010 = cljs.core.chunk_first.call(null,seq__28949_29009__$1);
var G__29011 = cljs.core.chunk_rest.call(null,seq__28949_29009__$1);
var G__29012 = c__26750__auto___29010;
var G__29013 = cljs.core.count.call(null,c__26750__auto___29010);
var G__29014 = (0);
seq__28949_28999 = G__29011;
chunk__28950_29000 = G__29012;
count__28951_29001 = G__29013;
i__28952_29002 = G__29014;
continue;
} else {
var img_29015 = cljs.core.first.call(null,seq__28949_29009__$1);
dommy.core.set_attr_BANG_.call(null,img_29015,new cljs.core.Keyword(null,"height","height",1025178622),innerHeight);

var G__29016 = cljs.core.next.call(null,seq__28949_29009__$1);
var G__29017 = null;
var G__29018 = (0);
var G__29019 = (0);
seq__28949_28999 = G__29016;
chunk__28950_29000 = G__29017;
count__28951_29001 = G__29018;
i__28952_29002 = G__29019;
continue;
}
} else {
}
}
break;
}

var seq__28953_29020 = cljs.core.seq.call(null,imgs);
var chunk__28954_29021 = null;
var count__28955_29022 = (0);
var i__28956_29023 = (0);
while(true){
if((i__28956_29023 < count__28955_29022)){
var img_29024 = cljs.core._nth.call(null,chunk__28954_29021,i__28956_29023);
dommy.core.set_attr_BANG_.call(null,img_29024,new cljs.core.Keyword(null,"width","width",-384071477),(innerHeight / image_ratio));

var G__29025 = seq__28953_29020;
var G__29026 = chunk__28954_29021;
var G__29027 = count__28955_29022;
var G__29028 = (i__28956_29023 + (1));
seq__28953_29020 = G__29025;
chunk__28954_29021 = G__29026;
count__28955_29022 = G__29027;
i__28956_29023 = G__29028;
continue;
} else {
var temp__4657__auto___29029 = cljs.core.seq.call(null,seq__28953_29020);
if(temp__4657__auto___29029){
var seq__28953_29030__$1 = temp__4657__auto___29029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28953_29030__$1)){
var c__26750__auto___29031 = cljs.core.chunk_first.call(null,seq__28953_29030__$1);
var G__29032 = cljs.core.chunk_rest.call(null,seq__28953_29030__$1);
var G__29033 = c__26750__auto___29031;
var G__29034 = cljs.core.count.call(null,c__26750__auto___29031);
var G__29035 = (0);
seq__28953_29020 = G__29032;
chunk__28954_29021 = G__29033;
count__28955_29022 = G__29034;
i__28956_29023 = G__29035;
continue;
} else {
var img_29036 = cljs.core.first.call(null,seq__28953_29030__$1);
dommy.core.set_attr_BANG_.call(null,img_29036,new cljs.core.Keyword(null,"width","width",-384071477),(innerHeight / image_ratio));

var G__29037 = cljs.core.next.call(null,seq__28953_29030__$1);
var G__29038 = null;
var G__29039 = (0);
var G__29040 = (0);
seq__28953_29020 = G__29037;
chunk__28954_29021 = G__29038;
count__28955_29022 = G__29039;
i__28956_29023 = G__29040;
continue;
}
} else {
}
}
break;
}

return dommy.core.set_attr_BANG_.call(null,node_puzzle,new cljs.core.Keyword(null,"style","style",-496642736),style2);
});})(window_ratio,image_ratio,innerWidth,innerHeight,style1,style2,node,node_puzzle,imgs))
.call(null);
}
});

//# sourceMappingURL=image_dimension.js.map?rel=1496664152465