// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36170){
var map__36195 = p__36170;
var map__36195__$1 = ((((!((map__36195 == null)))?((((map__36195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36195):map__36195);
var m = map__36195__$1;
var n = cljs.core.get.call(null,map__36195__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36195__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36197_36219 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36198_36220 = null;
var count__36199_36221 = (0);
var i__36200_36222 = (0);
while(true){
if((i__36200_36222 < count__36199_36221)){
var f_36223 = cljs.core._nth.call(null,chunk__36198_36220,i__36200_36222);
cljs.core.println.call(null,"  ",f_36223);

var G__36224 = seq__36197_36219;
var G__36225 = chunk__36198_36220;
var G__36226 = count__36199_36221;
var G__36227 = (i__36200_36222 + (1));
seq__36197_36219 = G__36224;
chunk__36198_36220 = G__36225;
count__36199_36221 = G__36226;
i__36200_36222 = G__36227;
continue;
} else {
var temp__4657__auto___36228 = cljs.core.seq.call(null,seq__36197_36219);
if(temp__4657__auto___36228){
var seq__36197_36229__$1 = temp__4657__auto___36228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36197_36229__$1)){
var c__26750__auto___36230 = cljs.core.chunk_first.call(null,seq__36197_36229__$1);
var G__36231 = cljs.core.chunk_rest.call(null,seq__36197_36229__$1);
var G__36232 = c__26750__auto___36230;
var G__36233 = cljs.core.count.call(null,c__26750__auto___36230);
var G__36234 = (0);
seq__36197_36219 = G__36231;
chunk__36198_36220 = G__36232;
count__36199_36221 = G__36233;
i__36200_36222 = G__36234;
continue;
} else {
var f_36235 = cljs.core.first.call(null,seq__36197_36229__$1);
cljs.core.println.call(null,"  ",f_36235);

var G__36236 = cljs.core.next.call(null,seq__36197_36229__$1);
var G__36237 = null;
var G__36238 = (0);
var G__36239 = (0);
seq__36197_36219 = G__36236;
chunk__36198_36220 = G__36237;
count__36199_36221 = G__36238;
i__36200_36222 = G__36239;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36240 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25939__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25939__auto__)){
return or__25939__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36240);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36240)))?cljs.core.second.call(null,arglists_36240):arglists_36240));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36201_36241 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36202_36242 = null;
var count__36203_36243 = (0);
var i__36204_36244 = (0);
while(true){
if((i__36204_36244 < count__36203_36243)){
var vec__36205_36245 = cljs.core._nth.call(null,chunk__36202_36242,i__36204_36244);
var name_36246 = cljs.core.nth.call(null,vec__36205_36245,(0),null);
var map__36208_36247 = cljs.core.nth.call(null,vec__36205_36245,(1),null);
var map__36208_36248__$1 = ((((!((map__36208_36247 == null)))?((((map__36208_36247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36208_36247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36208_36247):map__36208_36247);
var doc_36249 = cljs.core.get.call(null,map__36208_36248__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36250 = cljs.core.get.call(null,map__36208_36248__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36246);

cljs.core.println.call(null," ",arglists_36250);

if(cljs.core.truth_(doc_36249)){
cljs.core.println.call(null," ",doc_36249);
} else {
}

var G__36251 = seq__36201_36241;
var G__36252 = chunk__36202_36242;
var G__36253 = count__36203_36243;
var G__36254 = (i__36204_36244 + (1));
seq__36201_36241 = G__36251;
chunk__36202_36242 = G__36252;
count__36203_36243 = G__36253;
i__36204_36244 = G__36254;
continue;
} else {
var temp__4657__auto___36255 = cljs.core.seq.call(null,seq__36201_36241);
if(temp__4657__auto___36255){
var seq__36201_36256__$1 = temp__4657__auto___36255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36201_36256__$1)){
var c__26750__auto___36257 = cljs.core.chunk_first.call(null,seq__36201_36256__$1);
var G__36258 = cljs.core.chunk_rest.call(null,seq__36201_36256__$1);
var G__36259 = c__26750__auto___36257;
var G__36260 = cljs.core.count.call(null,c__26750__auto___36257);
var G__36261 = (0);
seq__36201_36241 = G__36258;
chunk__36202_36242 = G__36259;
count__36203_36243 = G__36260;
i__36204_36244 = G__36261;
continue;
} else {
var vec__36210_36262 = cljs.core.first.call(null,seq__36201_36256__$1);
var name_36263 = cljs.core.nth.call(null,vec__36210_36262,(0),null);
var map__36213_36264 = cljs.core.nth.call(null,vec__36210_36262,(1),null);
var map__36213_36265__$1 = ((((!((map__36213_36264 == null)))?((((map__36213_36264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36213_36264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36213_36264):map__36213_36264);
var doc_36266 = cljs.core.get.call(null,map__36213_36265__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36267 = cljs.core.get.call(null,map__36213_36265__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36263);

cljs.core.println.call(null," ",arglists_36267);

if(cljs.core.truth_(doc_36266)){
cljs.core.println.call(null," ",doc_36266);
} else {
}

var G__36268 = cljs.core.next.call(null,seq__36201_36256__$1);
var G__36269 = null;
var G__36270 = (0);
var G__36271 = (0);
seq__36201_36241 = G__36268;
chunk__36202_36242 = G__36269;
count__36203_36243 = G__36270;
i__36204_36244 = G__36271;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36215 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36216 = null;
var count__36217 = (0);
var i__36218 = (0);
while(true){
if((i__36218 < count__36217)){
var role = cljs.core._nth.call(null,chunk__36216,i__36218);
var temp__4657__auto___36272__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36272__$1)){
var spec_36273 = temp__4657__auto___36272__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36273));
} else {
}

var G__36274 = seq__36215;
var G__36275 = chunk__36216;
var G__36276 = count__36217;
var G__36277 = (i__36218 + (1));
seq__36215 = G__36274;
chunk__36216 = G__36275;
count__36217 = G__36276;
i__36218 = G__36277;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36215);
if(temp__4657__auto____$1){
var seq__36215__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36215__$1)){
var c__26750__auto__ = cljs.core.chunk_first.call(null,seq__36215__$1);
var G__36278 = cljs.core.chunk_rest.call(null,seq__36215__$1);
var G__36279 = c__26750__auto__;
var G__36280 = cljs.core.count.call(null,c__26750__auto__);
var G__36281 = (0);
seq__36215 = G__36278;
chunk__36216 = G__36279;
count__36217 = G__36280;
i__36218 = G__36281;
continue;
} else {
var role = cljs.core.first.call(null,seq__36215__$1);
var temp__4657__auto___36282__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36282__$2)){
var spec_36283 = temp__4657__auto___36282__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36283));
} else {
}

var G__36284 = cljs.core.next.call(null,seq__36215__$1);
var G__36285 = null;
var G__36286 = (0);
var G__36287 = (0);
seq__36215 = G__36284;
chunk__36216 = G__36285;
count__36217 = G__36286;
i__36218 = G__36287;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1510423699794