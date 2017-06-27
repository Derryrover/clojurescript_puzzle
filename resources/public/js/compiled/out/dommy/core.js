// Compiled by ClojureScript 1.9.229 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__25939__auto__ = elem.textContent;
if(cljs.core.truth_(or__25939__auto__)){
return or__25939__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args43132 = [];
var len__27014__auto___43135 = arguments.length;
var i__27015__auto___43136 = (0);
while(true){
if((i__27015__auto___43136 < len__27014__auto___43135)){
args43132.push((arguments[i__27015__auto___43136]));

var G__43137 = (i__27015__auto___43136 + (1));
i__27015__auto___43136 = G__43137;
continue;
} else {
}
break;
}

var G__43134 = args43132.length;
switch (G__43134) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43132.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args43139 = [];
var len__27014__auto___43142 = arguments.length;
var i__27015__auto___43143 = (0);
while(true){
if((i__27015__auto___43143 < len__27014__auto___43142)){
args43139.push((arguments[i__27015__auto___43143]));

var G__43144 = (i__27015__auto___43143 + (1));
i__27015__auto___43143 = G__43144;
continue;
} else {
}
break;
}

var G__43141 = args43139.length;
switch (G__43141) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43139.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args43147 = [];
var len__27014__auto___43150 = arguments.length;
var i__27015__auto___43151 = (0);
while(true){
if((i__27015__auto___43151 < len__27014__auto___43150)){
args43147.push((arguments[i__27015__auto___43151]));

var G__43152 = (i__27015__auto___43151 + (1));
i__27015__auto___43151 = G__43152;
continue;
} else {
}
break;
}

var G__43149 = args43147.length;
switch (G__43149) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43147.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__43146_SHARP_){
return !((p1__43146_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__27021__auto__ = [];
var len__27014__auto___43166 = arguments.length;
var i__27015__auto___43167 = (0);
while(true){
if((i__27015__auto___43167 < len__27014__auto___43166)){
args__27021__auto__.push((arguments[i__27015__auto___43167]));

var G__43168 = (i__27015__auto___43167 + (1));
i__27015__auto___43167 = G__43168;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((1) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27022__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__43156_43169 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__43157_43170 = null;
var count__43158_43171 = (0);
var i__43159_43172 = (0);
while(true){
if((i__43159_43172 < count__43158_43171)){
var vec__43160_43173 = cljs.core._nth.call(null,chunk__43157_43170,i__43159_43172);
var k_43174 = cljs.core.nth.call(null,vec__43160_43173,(0),null);
var v_43175 = cljs.core.nth.call(null,vec__43160_43173,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_43174),v_43175);

var G__43176 = seq__43156_43169;
var G__43177 = chunk__43157_43170;
var G__43178 = count__43158_43171;
var G__43179 = (i__43159_43172 + (1));
seq__43156_43169 = G__43176;
chunk__43157_43170 = G__43177;
count__43158_43171 = G__43178;
i__43159_43172 = G__43179;
continue;
} else {
var temp__4657__auto___43180 = cljs.core.seq.call(null,seq__43156_43169);
if(temp__4657__auto___43180){
var seq__43156_43181__$1 = temp__4657__auto___43180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43156_43181__$1)){
var c__26750__auto___43182 = cljs.core.chunk_first.call(null,seq__43156_43181__$1);
var G__43183 = cljs.core.chunk_rest.call(null,seq__43156_43181__$1);
var G__43184 = c__26750__auto___43182;
var G__43185 = cljs.core.count.call(null,c__26750__auto___43182);
var G__43186 = (0);
seq__43156_43169 = G__43183;
chunk__43157_43170 = G__43184;
count__43158_43171 = G__43185;
i__43159_43172 = G__43186;
continue;
} else {
var vec__43163_43187 = cljs.core.first.call(null,seq__43156_43181__$1);
var k_43188 = cljs.core.nth.call(null,vec__43163_43187,(0),null);
var v_43189 = cljs.core.nth.call(null,vec__43163_43187,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_43188),v_43189);

var G__43190 = cljs.core.next.call(null,seq__43156_43181__$1);
var G__43191 = null;
var G__43192 = (0);
var G__43193 = (0);
seq__43156_43169 = G__43190;
chunk__43157_43170 = G__43191;
count__43158_43171 = G__43192;
i__43159_43172 = G__43193;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq43154){
var G__43155 = cljs.core.first.call(null,seq43154);
var seq43154__$1 = cljs.core.next.call(null,seq43154);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43155,seq43154__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__27021__auto__ = [];
var len__27014__auto___43200 = arguments.length;
var i__27015__auto___43201 = (0);
while(true){
if((i__27015__auto___43201 < len__27014__auto___43200)){
args__27021__auto__.push((arguments[i__27015__auto___43201]));

var G__43202 = (i__27015__auto___43201 + (1));
i__27015__auto___43201 = G__43202;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((1) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27022__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__43196_43203 = cljs.core.seq.call(null,keywords);
var chunk__43197_43204 = null;
var count__43198_43205 = (0);
var i__43199_43206 = (0);
while(true){
if((i__43199_43206 < count__43198_43205)){
var kw_43207 = cljs.core._nth.call(null,chunk__43197_43204,i__43199_43206);
style.removeProperty(dommy.utils.as_str.call(null,kw_43207));

var G__43208 = seq__43196_43203;
var G__43209 = chunk__43197_43204;
var G__43210 = count__43198_43205;
var G__43211 = (i__43199_43206 + (1));
seq__43196_43203 = G__43208;
chunk__43197_43204 = G__43209;
count__43198_43205 = G__43210;
i__43199_43206 = G__43211;
continue;
} else {
var temp__4657__auto___43212 = cljs.core.seq.call(null,seq__43196_43203);
if(temp__4657__auto___43212){
var seq__43196_43213__$1 = temp__4657__auto___43212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43196_43213__$1)){
var c__26750__auto___43214 = cljs.core.chunk_first.call(null,seq__43196_43213__$1);
var G__43215 = cljs.core.chunk_rest.call(null,seq__43196_43213__$1);
var G__43216 = c__26750__auto___43214;
var G__43217 = cljs.core.count.call(null,c__26750__auto___43214);
var G__43218 = (0);
seq__43196_43203 = G__43215;
chunk__43197_43204 = G__43216;
count__43198_43205 = G__43217;
i__43199_43206 = G__43218;
continue;
} else {
var kw_43219 = cljs.core.first.call(null,seq__43196_43213__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_43219));

var G__43220 = cljs.core.next.call(null,seq__43196_43213__$1);
var G__43221 = null;
var G__43222 = (0);
var G__43223 = (0);
seq__43196_43203 = G__43220;
chunk__43197_43204 = G__43221;
count__43198_43205 = G__43222;
i__43199_43206 = G__43223;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq43194){
var G__43195 = cljs.core.first.call(null,seq43194);
var seq43194__$1 = cljs.core.next.call(null,seq43194);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43195,seq43194__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__27021__auto__ = [];
var len__27014__auto___43236 = arguments.length;
var i__27015__auto___43237 = (0);
while(true){
if((i__27015__auto___43237 < len__27014__auto___43236)){
args__27021__auto__.push((arguments[i__27015__auto___43237]));

var G__43238 = (i__27015__auto___43237 + (1));
i__27015__auto___43237 = G__43238;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((1) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27022__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__43226_43239 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__43227_43240 = null;
var count__43228_43241 = (0);
var i__43229_43242 = (0);
while(true){
if((i__43229_43242 < count__43228_43241)){
var vec__43230_43243 = cljs.core._nth.call(null,chunk__43227_43240,i__43229_43242);
var k_43244 = cljs.core.nth.call(null,vec__43230_43243,(0),null);
var v_43245 = cljs.core.nth.call(null,vec__43230_43243,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_43244,[cljs.core.str(v_43245),cljs.core.str("px")].join(''));

var G__43246 = seq__43226_43239;
var G__43247 = chunk__43227_43240;
var G__43248 = count__43228_43241;
var G__43249 = (i__43229_43242 + (1));
seq__43226_43239 = G__43246;
chunk__43227_43240 = G__43247;
count__43228_43241 = G__43248;
i__43229_43242 = G__43249;
continue;
} else {
var temp__4657__auto___43250 = cljs.core.seq.call(null,seq__43226_43239);
if(temp__4657__auto___43250){
var seq__43226_43251__$1 = temp__4657__auto___43250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43226_43251__$1)){
var c__26750__auto___43252 = cljs.core.chunk_first.call(null,seq__43226_43251__$1);
var G__43253 = cljs.core.chunk_rest.call(null,seq__43226_43251__$1);
var G__43254 = c__26750__auto___43252;
var G__43255 = cljs.core.count.call(null,c__26750__auto___43252);
var G__43256 = (0);
seq__43226_43239 = G__43253;
chunk__43227_43240 = G__43254;
count__43228_43241 = G__43255;
i__43229_43242 = G__43256;
continue;
} else {
var vec__43233_43257 = cljs.core.first.call(null,seq__43226_43251__$1);
var k_43258 = cljs.core.nth.call(null,vec__43233_43257,(0),null);
var v_43259 = cljs.core.nth.call(null,vec__43233_43257,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_43258,[cljs.core.str(v_43259),cljs.core.str("px")].join(''));

var G__43260 = cljs.core.next.call(null,seq__43226_43251__$1);
var G__43261 = null;
var G__43262 = (0);
var G__43263 = (0);
seq__43226_43239 = G__43260;
chunk__43227_43240 = G__43261;
count__43228_43241 = G__43262;
i__43229_43242 = G__43263;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq43224){
var G__43225 = cljs.core.first.call(null,seq43224);
var seq43224__$1 = cljs.core.next.call(null,seq43224);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43225,seq43224__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args43264 = [];
var len__27014__auto___43283 = arguments.length;
var i__27015__auto___43284 = (0);
while(true){
if((i__27015__auto___43284 < len__27014__auto___43283)){
args43264.push((arguments[i__27015__auto___43284]));

var G__43285 = (i__27015__auto___43284 + (1));
i__27015__auto___43284 = G__43285;
continue;
} else {
}
break;
}

var G__43270 = args43264.length;
switch (G__43270) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__27033__auto__ = (new cljs.core.IndexedSeq(args43264.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27033__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__43271 = elem;
(G__43271[k__$1] = v);

return G__43271;
} else {
var G__43272 = elem;
G__43272.setAttribute(k__$1,v);

return G__43272;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__43273_43287 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__43274_43288 = null;
var count__43275_43289 = (0);
var i__43276_43290 = (0);
while(true){
if((i__43276_43290 < count__43275_43289)){
var vec__43277_43291 = cljs.core._nth.call(null,chunk__43274_43288,i__43276_43290);
var k_43292__$1 = cljs.core.nth.call(null,vec__43277_43291,(0),null);
var v_43293__$1 = cljs.core.nth.call(null,vec__43277_43291,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_43292__$1,v_43293__$1);

var G__43294 = seq__43273_43287;
var G__43295 = chunk__43274_43288;
var G__43296 = count__43275_43289;
var G__43297 = (i__43276_43290 + (1));
seq__43273_43287 = G__43294;
chunk__43274_43288 = G__43295;
count__43275_43289 = G__43296;
i__43276_43290 = G__43297;
continue;
} else {
var temp__4657__auto___43298 = cljs.core.seq.call(null,seq__43273_43287);
if(temp__4657__auto___43298){
var seq__43273_43299__$1 = temp__4657__auto___43298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43273_43299__$1)){
var c__26750__auto___43300 = cljs.core.chunk_first.call(null,seq__43273_43299__$1);
var G__43301 = cljs.core.chunk_rest.call(null,seq__43273_43299__$1);
var G__43302 = c__26750__auto___43300;
var G__43303 = cljs.core.count.call(null,c__26750__auto___43300);
var G__43304 = (0);
seq__43273_43287 = G__43301;
chunk__43274_43288 = G__43302;
count__43275_43289 = G__43303;
i__43276_43290 = G__43304;
continue;
} else {
var vec__43280_43305 = cljs.core.first.call(null,seq__43273_43299__$1);
var k_43306__$1 = cljs.core.nth.call(null,vec__43280_43305,(0),null);
var v_43307__$1 = cljs.core.nth.call(null,vec__43280_43305,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_43306__$1,v_43307__$1);

var G__43308 = cljs.core.next.call(null,seq__43273_43299__$1);
var G__43309 = null;
var G__43310 = (0);
var G__43311 = (0);
seq__43273_43287 = G__43308;
chunk__43274_43288 = G__43309;
count__43275_43289 = G__43310;
i__43276_43290 = G__43311;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq43265){
var G__43266 = cljs.core.first.call(null,seq43265);
var seq43265__$1 = cljs.core.next.call(null,seq43265);
var G__43267 = cljs.core.first.call(null,seq43265__$1);
var seq43265__$2 = cljs.core.next.call(null,seq43265__$1);
var G__43268 = cljs.core.first.call(null,seq43265__$2);
var seq43265__$3 = cljs.core.next.call(null,seq43265__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43266,G__43267,G__43268,seq43265__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args43312 = [];
var len__27014__auto___43322 = arguments.length;
var i__27015__auto___43323 = (0);
while(true){
if((i__27015__auto___43323 < len__27014__auto___43322)){
args43312.push((arguments[i__27015__auto___43323]));

var G__43324 = (i__27015__auto___43323 + (1));
i__27015__auto___43323 = G__43324;
continue;
} else {
}
break;
}

var G__43317 = args43312.length;
switch (G__43317) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27033__auto__ = (new cljs.core.IndexedSeq(args43312.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27033__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_43326__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_43326__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_43326__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__43318_43327 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__43319_43328 = null;
var count__43320_43329 = (0);
var i__43321_43330 = (0);
while(true){
if((i__43321_43330 < count__43320_43329)){
var k_43331__$1 = cljs.core._nth.call(null,chunk__43319_43328,i__43321_43330);
dommy.core.remove_attr_BANG_.call(null,elem,k_43331__$1);

var G__43332 = seq__43318_43327;
var G__43333 = chunk__43319_43328;
var G__43334 = count__43320_43329;
var G__43335 = (i__43321_43330 + (1));
seq__43318_43327 = G__43332;
chunk__43319_43328 = G__43333;
count__43320_43329 = G__43334;
i__43321_43330 = G__43335;
continue;
} else {
var temp__4657__auto___43336 = cljs.core.seq.call(null,seq__43318_43327);
if(temp__4657__auto___43336){
var seq__43318_43337__$1 = temp__4657__auto___43336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43318_43337__$1)){
var c__26750__auto___43338 = cljs.core.chunk_first.call(null,seq__43318_43337__$1);
var G__43339 = cljs.core.chunk_rest.call(null,seq__43318_43337__$1);
var G__43340 = c__26750__auto___43338;
var G__43341 = cljs.core.count.call(null,c__26750__auto___43338);
var G__43342 = (0);
seq__43318_43327 = G__43339;
chunk__43319_43328 = G__43340;
count__43320_43329 = G__43341;
i__43321_43330 = G__43342;
continue;
} else {
var k_43343__$1 = cljs.core.first.call(null,seq__43318_43337__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_43343__$1);

var G__43344 = cljs.core.next.call(null,seq__43318_43337__$1);
var G__43345 = null;
var G__43346 = (0);
var G__43347 = (0);
seq__43318_43327 = G__43344;
chunk__43319_43328 = G__43345;
count__43320_43329 = G__43346;
i__43321_43330 = G__43347;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq43313){
var G__43314 = cljs.core.first.call(null,seq43313);
var seq43313__$1 = cljs.core.next.call(null,seq43313);
var G__43315 = cljs.core.first.call(null,seq43313__$1);
var seq43313__$2 = cljs.core.next.call(null,seq43313__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43314,G__43315,seq43313__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args43348 = [];
var len__27014__auto___43351 = arguments.length;
var i__27015__auto___43352 = (0);
while(true){
if((i__27015__auto___43352 < len__27014__auto___43351)){
args43348.push((arguments[i__27015__auto___43352]));

var G__43353 = (i__27015__auto___43352 + (1));
i__27015__auto___43352 = G__43353;
continue;
} else {
}
break;
}

var G__43350 = args43348.length;
switch (G__43350) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43348.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args43355 = [];
var len__27014__auto___43373 = arguments.length;
var i__27015__auto___43374 = (0);
while(true){
if((i__27015__auto___43374 < len__27014__auto___43373)){
args43355.push((arguments[i__27015__auto___43374]));

var G__43375 = (i__27015__auto___43374 + (1));
i__27015__auto___43374 = G__43375;
continue;
} else {
}
break;
}

var G__43360 = args43355.length;
switch (G__43360) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27033__auto__ = (new cljs.core.IndexedSeq(args43355.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27033__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___43377 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___43377)){
var class_list_43378 = temp__4655__auto___43377;
var seq__43361_43379 = cljs.core.seq.call(null,classes__$1);
var chunk__43362_43380 = null;
var count__43363_43381 = (0);
var i__43364_43382 = (0);
while(true){
if((i__43364_43382 < count__43363_43381)){
var c_43383 = cljs.core._nth.call(null,chunk__43362_43380,i__43364_43382);
class_list_43378.add(c_43383);

var G__43384 = seq__43361_43379;
var G__43385 = chunk__43362_43380;
var G__43386 = count__43363_43381;
var G__43387 = (i__43364_43382 + (1));
seq__43361_43379 = G__43384;
chunk__43362_43380 = G__43385;
count__43363_43381 = G__43386;
i__43364_43382 = G__43387;
continue;
} else {
var temp__4657__auto___43388 = cljs.core.seq.call(null,seq__43361_43379);
if(temp__4657__auto___43388){
var seq__43361_43389__$1 = temp__4657__auto___43388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43361_43389__$1)){
var c__26750__auto___43390 = cljs.core.chunk_first.call(null,seq__43361_43389__$1);
var G__43391 = cljs.core.chunk_rest.call(null,seq__43361_43389__$1);
var G__43392 = c__26750__auto___43390;
var G__43393 = cljs.core.count.call(null,c__26750__auto___43390);
var G__43394 = (0);
seq__43361_43379 = G__43391;
chunk__43362_43380 = G__43392;
count__43363_43381 = G__43393;
i__43364_43382 = G__43394;
continue;
} else {
var c_43395 = cljs.core.first.call(null,seq__43361_43389__$1);
class_list_43378.add(c_43395);

var G__43396 = cljs.core.next.call(null,seq__43361_43389__$1);
var G__43397 = null;
var G__43398 = (0);
var G__43399 = (0);
seq__43361_43379 = G__43396;
chunk__43362_43380 = G__43397;
count__43363_43381 = G__43398;
i__43364_43382 = G__43399;
continue;
}
} else {
}
}
break;
}
} else {
var seq__43365_43400 = cljs.core.seq.call(null,classes__$1);
var chunk__43366_43401 = null;
var count__43367_43402 = (0);
var i__43368_43403 = (0);
while(true){
if((i__43368_43403 < count__43367_43402)){
var c_43404 = cljs.core._nth.call(null,chunk__43366_43401,i__43368_43403);
var class_name_43405 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_43405,c_43404))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_43405 === ""))?c_43404:[cljs.core.str(class_name_43405),cljs.core.str(" "),cljs.core.str(c_43404)].join('')));
}

var G__43406 = seq__43365_43400;
var G__43407 = chunk__43366_43401;
var G__43408 = count__43367_43402;
var G__43409 = (i__43368_43403 + (1));
seq__43365_43400 = G__43406;
chunk__43366_43401 = G__43407;
count__43367_43402 = G__43408;
i__43368_43403 = G__43409;
continue;
} else {
var temp__4657__auto___43410 = cljs.core.seq.call(null,seq__43365_43400);
if(temp__4657__auto___43410){
var seq__43365_43411__$1 = temp__4657__auto___43410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43365_43411__$1)){
var c__26750__auto___43412 = cljs.core.chunk_first.call(null,seq__43365_43411__$1);
var G__43413 = cljs.core.chunk_rest.call(null,seq__43365_43411__$1);
var G__43414 = c__26750__auto___43412;
var G__43415 = cljs.core.count.call(null,c__26750__auto___43412);
var G__43416 = (0);
seq__43365_43400 = G__43413;
chunk__43366_43401 = G__43414;
count__43367_43402 = G__43415;
i__43368_43403 = G__43416;
continue;
} else {
var c_43417 = cljs.core.first.call(null,seq__43365_43411__$1);
var class_name_43418 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_43418,c_43417))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_43418 === ""))?c_43417:[cljs.core.str(class_name_43418),cljs.core.str(" "),cljs.core.str(c_43417)].join('')));
}

var G__43419 = cljs.core.next.call(null,seq__43365_43411__$1);
var G__43420 = null;
var G__43421 = (0);
var G__43422 = (0);
seq__43365_43400 = G__43419;
chunk__43366_43401 = G__43420;
count__43367_43402 = G__43421;
i__43368_43403 = G__43422;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__43369_43423 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__43370_43424 = null;
var count__43371_43425 = (0);
var i__43372_43426 = (0);
while(true){
if((i__43372_43426 < count__43371_43425)){
var c_43427 = cljs.core._nth.call(null,chunk__43370_43424,i__43372_43426);
dommy.core.add_class_BANG_.call(null,elem,c_43427);

var G__43428 = seq__43369_43423;
var G__43429 = chunk__43370_43424;
var G__43430 = count__43371_43425;
var G__43431 = (i__43372_43426 + (1));
seq__43369_43423 = G__43428;
chunk__43370_43424 = G__43429;
count__43371_43425 = G__43430;
i__43372_43426 = G__43431;
continue;
} else {
var temp__4657__auto___43432 = cljs.core.seq.call(null,seq__43369_43423);
if(temp__4657__auto___43432){
var seq__43369_43433__$1 = temp__4657__auto___43432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43369_43433__$1)){
var c__26750__auto___43434 = cljs.core.chunk_first.call(null,seq__43369_43433__$1);
var G__43435 = cljs.core.chunk_rest.call(null,seq__43369_43433__$1);
var G__43436 = c__26750__auto___43434;
var G__43437 = cljs.core.count.call(null,c__26750__auto___43434);
var G__43438 = (0);
seq__43369_43423 = G__43435;
chunk__43370_43424 = G__43436;
count__43371_43425 = G__43437;
i__43372_43426 = G__43438;
continue;
} else {
var c_43439 = cljs.core.first.call(null,seq__43369_43433__$1);
dommy.core.add_class_BANG_.call(null,elem,c_43439);

var G__43440 = cljs.core.next.call(null,seq__43369_43433__$1);
var G__43441 = null;
var G__43442 = (0);
var G__43443 = (0);
seq__43369_43423 = G__43440;
chunk__43370_43424 = G__43441;
count__43371_43425 = G__43442;
i__43372_43426 = G__43443;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq43356){
var G__43357 = cljs.core.first.call(null,seq43356);
var seq43356__$1 = cljs.core.next.call(null,seq43356);
var G__43358 = cljs.core.first.call(null,seq43356__$1);
var seq43356__$2 = cljs.core.next.call(null,seq43356__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43357,G__43358,seq43356__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args43444 = [];
var len__27014__auto___43454 = arguments.length;
var i__27015__auto___43455 = (0);
while(true){
if((i__27015__auto___43455 < len__27014__auto___43454)){
args43444.push((arguments[i__27015__auto___43455]));

var G__43456 = (i__27015__auto___43455 + (1));
i__27015__auto___43455 = G__43456;
continue;
} else {
}
break;
}

var G__43449 = args43444.length;
switch (G__43449) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27033__auto__ = (new cljs.core.IndexedSeq(args43444.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27033__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___43458 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___43458)){
var class_list_43459 = temp__4655__auto___43458;
class_list_43459.remove(c__$1);
} else {
var class_name_43460 = dommy.core.class$.call(null,elem);
var new_class_name_43461 = dommy.utils.remove_class_str.call(null,class_name_43460,c__$1);
if((class_name_43460 === new_class_name_43461)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_43461);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__43450 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__43451 = null;
var count__43452 = (0);
var i__43453 = (0);
while(true){
if((i__43453 < count__43452)){
var c = cljs.core._nth.call(null,chunk__43451,i__43453);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__43462 = seq__43450;
var G__43463 = chunk__43451;
var G__43464 = count__43452;
var G__43465 = (i__43453 + (1));
seq__43450 = G__43462;
chunk__43451 = G__43463;
count__43452 = G__43464;
i__43453 = G__43465;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43450);
if(temp__4657__auto__){
var seq__43450__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43450__$1)){
var c__26750__auto__ = cljs.core.chunk_first.call(null,seq__43450__$1);
var G__43466 = cljs.core.chunk_rest.call(null,seq__43450__$1);
var G__43467 = c__26750__auto__;
var G__43468 = cljs.core.count.call(null,c__26750__auto__);
var G__43469 = (0);
seq__43450 = G__43466;
chunk__43451 = G__43467;
count__43452 = G__43468;
i__43453 = G__43469;
continue;
} else {
var c = cljs.core.first.call(null,seq__43450__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__43470 = cljs.core.next.call(null,seq__43450__$1);
var G__43471 = null;
var G__43472 = (0);
var G__43473 = (0);
seq__43450 = G__43470;
chunk__43451 = G__43471;
count__43452 = G__43472;
i__43453 = G__43473;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq43445){
var G__43446 = cljs.core.first.call(null,seq43445);
var seq43445__$1 = cljs.core.next.call(null,seq43445);
var G__43447 = cljs.core.first.call(null,seq43445__$1);
var seq43445__$2 = cljs.core.next.call(null,seq43445__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43446,G__43447,seq43445__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args43474 = [];
var len__27014__auto___43477 = arguments.length;
var i__27015__auto___43478 = (0);
while(true){
if((i__27015__auto___43478 < len__27014__auto___43477)){
args43474.push((arguments[i__27015__auto___43478]));

var G__43479 = (i__27015__auto___43478 + (1));
i__27015__auto___43478 = G__43479;
continue;
} else {
}
break;
}

var G__43476 = args43474.length;
switch (G__43476) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43474.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___43481 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___43481)){
var class_list_43482 = temp__4655__auto___43481;
class_list_43482.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args43483 = [];
var len__27014__auto___43486 = arguments.length;
var i__27015__auto___43487 = (0);
while(true){
if((i__27015__auto___43487 < len__27014__auto___43486)){
args43483.push((arguments[i__27015__auto___43487]));

var G__43488 = (i__27015__auto___43487 + (1));
i__27015__auto___43487 = G__43488;
continue;
} else {
}
break;
}

var G__43485 = args43483.length;
switch (G__43485) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43483.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args43490 = [];
var len__27014__auto___43493 = arguments.length;
var i__27015__auto___43494 = (0);
while(true){
if((i__27015__auto___43494 < len__27014__auto___43493)){
args43490.push((arguments[i__27015__auto___43494]));

var G__43495 = (i__27015__auto___43494 + (1));
i__27015__auto___43494 = G__43495;
continue;
} else {
}
break;
}

var G__43492 = args43490.length;
switch (G__43492) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43490.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args43497 = [];
var len__27014__auto___43508 = arguments.length;
var i__27015__auto___43509 = (0);
while(true){
if((i__27015__auto___43509 < len__27014__auto___43508)){
args43497.push((arguments[i__27015__auto___43509]));

var G__43510 = (i__27015__auto___43509 + (1));
i__27015__auto___43509 = G__43510;
continue;
} else {
}
break;
}

var G__43502 = args43497.length;
switch (G__43502) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27033__auto__ = (new cljs.core.IndexedSeq(args43497.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27033__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__43503 = parent;
G__43503.appendChild(child);

return G__43503;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__43504_43512 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__43505_43513 = null;
var count__43506_43514 = (0);
var i__43507_43515 = (0);
while(true){
if((i__43507_43515 < count__43506_43514)){
var c_43516 = cljs.core._nth.call(null,chunk__43505_43513,i__43507_43515);
dommy.core.append_BANG_.call(null,parent,c_43516);

var G__43517 = seq__43504_43512;
var G__43518 = chunk__43505_43513;
var G__43519 = count__43506_43514;
var G__43520 = (i__43507_43515 + (1));
seq__43504_43512 = G__43517;
chunk__43505_43513 = G__43518;
count__43506_43514 = G__43519;
i__43507_43515 = G__43520;
continue;
} else {
var temp__4657__auto___43521 = cljs.core.seq.call(null,seq__43504_43512);
if(temp__4657__auto___43521){
var seq__43504_43522__$1 = temp__4657__auto___43521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43504_43522__$1)){
var c__26750__auto___43523 = cljs.core.chunk_first.call(null,seq__43504_43522__$1);
var G__43524 = cljs.core.chunk_rest.call(null,seq__43504_43522__$1);
var G__43525 = c__26750__auto___43523;
var G__43526 = cljs.core.count.call(null,c__26750__auto___43523);
var G__43527 = (0);
seq__43504_43512 = G__43524;
chunk__43505_43513 = G__43525;
count__43506_43514 = G__43526;
i__43507_43515 = G__43527;
continue;
} else {
var c_43528 = cljs.core.first.call(null,seq__43504_43522__$1);
dommy.core.append_BANG_.call(null,parent,c_43528);

var G__43529 = cljs.core.next.call(null,seq__43504_43522__$1);
var G__43530 = null;
var G__43531 = (0);
var G__43532 = (0);
seq__43504_43512 = G__43529;
chunk__43505_43513 = G__43530;
count__43506_43514 = G__43531;
i__43507_43515 = G__43532;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq43498){
var G__43499 = cljs.core.first.call(null,seq43498);
var seq43498__$1 = cljs.core.next.call(null,seq43498);
var G__43500 = cljs.core.first.call(null,seq43498__$1);
var seq43498__$2 = cljs.core.next.call(null,seq43498__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43499,G__43500,seq43498__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args43533 = [];
var len__27014__auto___43544 = arguments.length;
var i__27015__auto___43545 = (0);
while(true){
if((i__27015__auto___43545 < len__27014__auto___43544)){
args43533.push((arguments[i__27015__auto___43545]));

var G__43546 = (i__27015__auto___43545 + (1));
i__27015__auto___43545 = G__43546;
continue;
} else {
}
break;
}

var G__43538 = args43533.length;
switch (G__43538) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27033__auto__ = (new cljs.core.IndexedSeq(args43533.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27033__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__43539 = parent;
G__43539.insertBefore(child,parent.firstChild);

return G__43539;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__43540_43548 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__43541_43549 = null;
var count__43542_43550 = (0);
var i__43543_43551 = (0);
while(true){
if((i__43543_43551 < count__43542_43550)){
var c_43552 = cljs.core._nth.call(null,chunk__43541_43549,i__43543_43551);
dommy.core.prepend_BANG_.call(null,parent,c_43552);

var G__43553 = seq__43540_43548;
var G__43554 = chunk__43541_43549;
var G__43555 = count__43542_43550;
var G__43556 = (i__43543_43551 + (1));
seq__43540_43548 = G__43553;
chunk__43541_43549 = G__43554;
count__43542_43550 = G__43555;
i__43543_43551 = G__43556;
continue;
} else {
var temp__4657__auto___43557 = cljs.core.seq.call(null,seq__43540_43548);
if(temp__4657__auto___43557){
var seq__43540_43558__$1 = temp__4657__auto___43557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43540_43558__$1)){
var c__26750__auto___43559 = cljs.core.chunk_first.call(null,seq__43540_43558__$1);
var G__43560 = cljs.core.chunk_rest.call(null,seq__43540_43558__$1);
var G__43561 = c__26750__auto___43559;
var G__43562 = cljs.core.count.call(null,c__26750__auto___43559);
var G__43563 = (0);
seq__43540_43548 = G__43560;
chunk__43541_43549 = G__43561;
count__43542_43550 = G__43562;
i__43543_43551 = G__43563;
continue;
} else {
var c_43564 = cljs.core.first.call(null,seq__43540_43558__$1);
dommy.core.prepend_BANG_.call(null,parent,c_43564);

var G__43565 = cljs.core.next.call(null,seq__43540_43558__$1);
var G__43566 = null;
var G__43567 = (0);
var G__43568 = (0);
seq__43540_43548 = G__43565;
chunk__43541_43549 = G__43566;
count__43542_43550 = G__43567;
i__43543_43551 = G__43568;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq43534){
var G__43535 = cljs.core.first.call(null,seq43534);
var seq43534__$1 = cljs.core.next.call(null,seq43534);
var G__43536 = cljs.core.first.call(null,seq43534__$1);
var seq43534__$2 = cljs.core.next.call(null,seq43534__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43535,G__43536,seq43534__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___43569 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___43569)){
var next_43570 = temp__4655__auto___43569;
dommy.core.insert_before_BANG_.call(null,elem,next_43570);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args43571 = [];
var len__27014__auto___43575 = arguments.length;
var i__27015__auto___43576 = (0);
while(true){
if((i__27015__auto___43576 < len__27014__auto___43575)){
args43571.push((arguments[i__27015__auto___43576]));

var G__43577 = (i__27015__auto___43576 + (1));
i__27015__auto___43576 = G__43577;
continue;
} else {
}
break;
}

var G__43573 = args43571.length;
switch (G__43573) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43571.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__43574 = p;
G__43574.removeChild(elem);

return G__43574;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__43579){
var vec__43580 = p__43579;
var special_mouse_event = cljs.core.nth.call(null,vec__43580,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__43580,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__43580,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__43580,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__25939__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__25939__auto__)){
return or__25939__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__25927__auto__ = related_target;
if(cljs.core.truth_(and__25927__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__25927__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__43580,special_mouse_event,real_mouse_event))
});})(vec__43580,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__25927__auto__ = selected_target;
if(cljs.core.truth_(and__25927__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__25927__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__25939__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__25939__auto__)){
return or__25939__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__27021__auto__ = [];
var len__27014__auto___43586 = arguments.length;
var i__27015__auto___43587 = (0);
while(true){
if((i__27015__auto___43587 < len__27014__auto___43586)){
args__27021__auto__.push((arguments[i__27015__auto___43587]));

var G__43588 = (i__27015__auto___43587 + (1));
i__27015__auto___43587 = G__43588;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((2) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27022__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq43583){
var G__43584 = cljs.core.first.call(null,seq43583);
var seq43583__$1 = cljs.core.next.call(null,seq43583);
var G__43585 = cljs.core.first.call(null,seq43583__$1);
var seq43583__$2 = cljs.core.next.call(null,seq43583__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43584,G__43585,seq43583__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__27021__auto__ = [];
var len__27014__auto___43628 = arguments.length;
var i__27015__auto___43629 = (0);
while(true){
if((i__27015__auto___43629 < len__27014__auto___43628)){
args__27021__auto__.push((arguments[i__27015__auto___43629]));

var G__43630 = (i__27015__auto___43629 + (1));
i__27015__auto___43629 = G__43630;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((1) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27022__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__43591_43631 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_43632 = cljs.core.nth.call(null,vec__43591_43631,(0),null);
var selector_43633 = cljs.core.nth.call(null,vec__43591_43631,(1),null);
var seq__43594_43634 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__43601_43635 = null;
var count__43602_43636 = (0);
var i__43603_43637 = (0);
while(true){
if((i__43603_43637 < count__43602_43636)){
var vec__43610_43638 = cljs.core._nth.call(null,chunk__43601_43635,i__43603_43637);
var orig_type_43639 = cljs.core.nth.call(null,vec__43610_43638,(0),null);
var f_43640 = cljs.core.nth.call(null,vec__43610_43638,(1),null);
var seq__43604_43641 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_43639,cljs.core.PersistentArrayMap.fromArray([orig_type_43639,cljs.core.identity], true, false)));
var chunk__43606_43642 = null;
var count__43607_43643 = (0);
var i__43608_43644 = (0);
while(true){
if((i__43608_43644 < count__43607_43643)){
var vec__43613_43645 = cljs.core._nth.call(null,chunk__43606_43642,i__43608_43644);
var actual_type_43646 = cljs.core.nth.call(null,vec__43613_43645,(0),null);
var factory_43647 = cljs.core.nth.call(null,vec__43613_43645,(1),null);
var canonical_f_43648 = (cljs.core.truth_(selector_43633)?cljs.core.partial.call(null,dommy.core.live_listener,elem_43632,selector_43633):cljs.core.identity).call(null,factory_43647.call(null,f_43640));
dommy.core.update_event_listeners_BANG_.call(null,elem_43632,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43633,actual_type_43646,f_43640], null),canonical_f_43648);

if(cljs.core.truth_(elem_43632.addEventListener)){
elem_43632.addEventListener(cljs.core.name.call(null,actual_type_43646),canonical_f_43648);
} else {
elem_43632.attachEvent(cljs.core.name.call(null,actual_type_43646),canonical_f_43648);
}

var G__43649 = seq__43604_43641;
var G__43650 = chunk__43606_43642;
var G__43651 = count__43607_43643;
var G__43652 = (i__43608_43644 + (1));
seq__43604_43641 = G__43649;
chunk__43606_43642 = G__43650;
count__43607_43643 = G__43651;
i__43608_43644 = G__43652;
continue;
} else {
var temp__4657__auto___43653 = cljs.core.seq.call(null,seq__43604_43641);
if(temp__4657__auto___43653){
var seq__43604_43654__$1 = temp__4657__auto___43653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43604_43654__$1)){
var c__26750__auto___43655 = cljs.core.chunk_first.call(null,seq__43604_43654__$1);
var G__43656 = cljs.core.chunk_rest.call(null,seq__43604_43654__$1);
var G__43657 = c__26750__auto___43655;
var G__43658 = cljs.core.count.call(null,c__26750__auto___43655);
var G__43659 = (0);
seq__43604_43641 = G__43656;
chunk__43606_43642 = G__43657;
count__43607_43643 = G__43658;
i__43608_43644 = G__43659;
continue;
} else {
var vec__43616_43660 = cljs.core.first.call(null,seq__43604_43654__$1);
var actual_type_43661 = cljs.core.nth.call(null,vec__43616_43660,(0),null);
var factory_43662 = cljs.core.nth.call(null,vec__43616_43660,(1),null);
var canonical_f_43663 = (cljs.core.truth_(selector_43633)?cljs.core.partial.call(null,dommy.core.live_listener,elem_43632,selector_43633):cljs.core.identity).call(null,factory_43662.call(null,f_43640));
dommy.core.update_event_listeners_BANG_.call(null,elem_43632,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43633,actual_type_43661,f_43640], null),canonical_f_43663);

if(cljs.core.truth_(elem_43632.addEventListener)){
elem_43632.addEventListener(cljs.core.name.call(null,actual_type_43661),canonical_f_43663);
} else {
elem_43632.attachEvent(cljs.core.name.call(null,actual_type_43661),canonical_f_43663);
}

var G__43664 = cljs.core.next.call(null,seq__43604_43654__$1);
var G__43665 = null;
var G__43666 = (0);
var G__43667 = (0);
seq__43604_43641 = G__43664;
chunk__43606_43642 = G__43665;
count__43607_43643 = G__43666;
i__43608_43644 = G__43667;
continue;
}
} else {
}
}
break;
}

var G__43668 = seq__43594_43634;
var G__43669 = chunk__43601_43635;
var G__43670 = count__43602_43636;
var G__43671 = (i__43603_43637 + (1));
seq__43594_43634 = G__43668;
chunk__43601_43635 = G__43669;
count__43602_43636 = G__43670;
i__43603_43637 = G__43671;
continue;
} else {
var temp__4657__auto___43672 = cljs.core.seq.call(null,seq__43594_43634);
if(temp__4657__auto___43672){
var seq__43594_43673__$1 = temp__4657__auto___43672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43594_43673__$1)){
var c__26750__auto___43674 = cljs.core.chunk_first.call(null,seq__43594_43673__$1);
var G__43675 = cljs.core.chunk_rest.call(null,seq__43594_43673__$1);
var G__43676 = c__26750__auto___43674;
var G__43677 = cljs.core.count.call(null,c__26750__auto___43674);
var G__43678 = (0);
seq__43594_43634 = G__43675;
chunk__43601_43635 = G__43676;
count__43602_43636 = G__43677;
i__43603_43637 = G__43678;
continue;
} else {
var vec__43619_43679 = cljs.core.first.call(null,seq__43594_43673__$1);
var orig_type_43680 = cljs.core.nth.call(null,vec__43619_43679,(0),null);
var f_43681 = cljs.core.nth.call(null,vec__43619_43679,(1),null);
var seq__43595_43682 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_43680,cljs.core.PersistentArrayMap.fromArray([orig_type_43680,cljs.core.identity], true, false)));
var chunk__43597_43683 = null;
var count__43598_43684 = (0);
var i__43599_43685 = (0);
while(true){
if((i__43599_43685 < count__43598_43684)){
var vec__43622_43686 = cljs.core._nth.call(null,chunk__43597_43683,i__43599_43685);
var actual_type_43687 = cljs.core.nth.call(null,vec__43622_43686,(0),null);
var factory_43688 = cljs.core.nth.call(null,vec__43622_43686,(1),null);
var canonical_f_43689 = (cljs.core.truth_(selector_43633)?cljs.core.partial.call(null,dommy.core.live_listener,elem_43632,selector_43633):cljs.core.identity).call(null,factory_43688.call(null,f_43681));
dommy.core.update_event_listeners_BANG_.call(null,elem_43632,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43633,actual_type_43687,f_43681], null),canonical_f_43689);

if(cljs.core.truth_(elem_43632.addEventListener)){
elem_43632.addEventListener(cljs.core.name.call(null,actual_type_43687),canonical_f_43689);
} else {
elem_43632.attachEvent(cljs.core.name.call(null,actual_type_43687),canonical_f_43689);
}

var G__43690 = seq__43595_43682;
var G__43691 = chunk__43597_43683;
var G__43692 = count__43598_43684;
var G__43693 = (i__43599_43685 + (1));
seq__43595_43682 = G__43690;
chunk__43597_43683 = G__43691;
count__43598_43684 = G__43692;
i__43599_43685 = G__43693;
continue;
} else {
var temp__4657__auto___43694__$1 = cljs.core.seq.call(null,seq__43595_43682);
if(temp__4657__auto___43694__$1){
var seq__43595_43695__$1 = temp__4657__auto___43694__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43595_43695__$1)){
var c__26750__auto___43696 = cljs.core.chunk_first.call(null,seq__43595_43695__$1);
var G__43697 = cljs.core.chunk_rest.call(null,seq__43595_43695__$1);
var G__43698 = c__26750__auto___43696;
var G__43699 = cljs.core.count.call(null,c__26750__auto___43696);
var G__43700 = (0);
seq__43595_43682 = G__43697;
chunk__43597_43683 = G__43698;
count__43598_43684 = G__43699;
i__43599_43685 = G__43700;
continue;
} else {
var vec__43625_43701 = cljs.core.first.call(null,seq__43595_43695__$1);
var actual_type_43702 = cljs.core.nth.call(null,vec__43625_43701,(0),null);
var factory_43703 = cljs.core.nth.call(null,vec__43625_43701,(1),null);
var canonical_f_43704 = (cljs.core.truth_(selector_43633)?cljs.core.partial.call(null,dommy.core.live_listener,elem_43632,selector_43633):cljs.core.identity).call(null,factory_43703.call(null,f_43681));
dommy.core.update_event_listeners_BANG_.call(null,elem_43632,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43633,actual_type_43702,f_43681], null),canonical_f_43704);

if(cljs.core.truth_(elem_43632.addEventListener)){
elem_43632.addEventListener(cljs.core.name.call(null,actual_type_43702),canonical_f_43704);
} else {
elem_43632.attachEvent(cljs.core.name.call(null,actual_type_43702),canonical_f_43704);
}

var G__43705 = cljs.core.next.call(null,seq__43595_43695__$1);
var G__43706 = null;
var G__43707 = (0);
var G__43708 = (0);
seq__43595_43682 = G__43705;
chunk__43597_43683 = G__43706;
count__43598_43684 = G__43707;
i__43599_43685 = G__43708;
continue;
}
} else {
}
}
break;
}

var G__43709 = cljs.core.next.call(null,seq__43594_43673__$1);
var G__43710 = null;
var G__43711 = (0);
var G__43712 = (0);
seq__43594_43634 = G__43709;
chunk__43601_43635 = G__43710;
count__43602_43636 = G__43711;
i__43603_43637 = G__43712;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq43589){
var G__43590 = cljs.core.first.call(null,seq43589);
var seq43589__$1 = cljs.core.next.call(null,seq43589);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43590,seq43589__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__27021__auto__ = [];
var len__27014__auto___43752 = arguments.length;
var i__27015__auto___43753 = (0);
while(true){
if((i__27015__auto___43753 < len__27014__auto___43752)){
args__27021__auto__.push((arguments[i__27015__auto___43753]));

var G__43754 = (i__27015__auto___43753 + (1));
i__27015__auto___43753 = G__43754;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((1) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27022__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__43715_43755 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_43756 = cljs.core.nth.call(null,vec__43715_43755,(0),null);
var selector_43757 = cljs.core.nth.call(null,vec__43715_43755,(1),null);
var seq__43718_43758 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__43725_43759 = null;
var count__43726_43760 = (0);
var i__43727_43761 = (0);
while(true){
if((i__43727_43761 < count__43726_43760)){
var vec__43734_43762 = cljs.core._nth.call(null,chunk__43725_43759,i__43727_43761);
var orig_type_43763 = cljs.core.nth.call(null,vec__43734_43762,(0),null);
var f_43764 = cljs.core.nth.call(null,vec__43734_43762,(1),null);
var seq__43728_43765 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_43763,cljs.core.PersistentArrayMap.fromArray([orig_type_43763,cljs.core.identity], true, false)));
var chunk__43730_43766 = null;
var count__43731_43767 = (0);
var i__43732_43768 = (0);
while(true){
if((i__43732_43768 < count__43731_43767)){
var vec__43737_43769 = cljs.core._nth.call(null,chunk__43730_43766,i__43732_43768);
var actual_type_43770 = cljs.core.nth.call(null,vec__43737_43769,(0),null);
var __43771 = cljs.core.nth.call(null,vec__43737_43769,(1),null);
var keys_43772 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43757,actual_type_43770,f_43764], null);
var canonical_f_43773 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_43756),keys_43772);
dommy.core.update_event_listeners_BANG_.call(null,elem_43756,dommy.utils.dissoc_in,keys_43772);

if(cljs.core.truth_(elem_43756.removeEventListener)){
elem_43756.removeEventListener(cljs.core.name.call(null,actual_type_43770),canonical_f_43773);
} else {
elem_43756.detachEvent(cljs.core.name.call(null,actual_type_43770),canonical_f_43773);
}

var G__43774 = seq__43728_43765;
var G__43775 = chunk__43730_43766;
var G__43776 = count__43731_43767;
var G__43777 = (i__43732_43768 + (1));
seq__43728_43765 = G__43774;
chunk__43730_43766 = G__43775;
count__43731_43767 = G__43776;
i__43732_43768 = G__43777;
continue;
} else {
var temp__4657__auto___43778 = cljs.core.seq.call(null,seq__43728_43765);
if(temp__4657__auto___43778){
var seq__43728_43779__$1 = temp__4657__auto___43778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43728_43779__$1)){
var c__26750__auto___43780 = cljs.core.chunk_first.call(null,seq__43728_43779__$1);
var G__43781 = cljs.core.chunk_rest.call(null,seq__43728_43779__$1);
var G__43782 = c__26750__auto___43780;
var G__43783 = cljs.core.count.call(null,c__26750__auto___43780);
var G__43784 = (0);
seq__43728_43765 = G__43781;
chunk__43730_43766 = G__43782;
count__43731_43767 = G__43783;
i__43732_43768 = G__43784;
continue;
} else {
var vec__43740_43785 = cljs.core.first.call(null,seq__43728_43779__$1);
var actual_type_43786 = cljs.core.nth.call(null,vec__43740_43785,(0),null);
var __43787 = cljs.core.nth.call(null,vec__43740_43785,(1),null);
var keys_43788 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43757,actual_type_43786,f_43764], null);
var canonical_f_43789 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_43756),keys_43788);
dommy.core.update_event_listeners_BANG_.call(null,elem_43756,dommy.utils.dissoc_in,keys_43788);

if(cljs.core.truth_(elem_43756.removeEventListener)){
elem_43756.removeEventListener(cljs.core.name.call(null,actual_type_43786),canonical_f_43789);
} else {
elem_43756.detachEvent(cljs.core.name.call(null,actual_type_43786),canonical_f_43789);
}

var G__43790 = cljs.core.next.call(null,seq__43728_43779__$1);
var G__43791 = null;
var G__43792 = (0);
var G__43793 = (0);
seq__43728_43765 = G__43790;
chunk__43730_43766 = G__43791;
count__43731_43767 = G__43792;
i__43732_43768 = G__43793;
continue;
}
} else {
}
}
break;
}

var G__43794 = seq__43718_43758;
var G__43795 = chunk__43725_43759;
var G__43796 = count__43726_43760;
var G__43797 = (i__43727_43761 + (1));
seq__43718_43758 = G__43794;
chunk__43725_43759 = G__43795;
count__43726_43760 = G__43796;
i__43727_43761 = G__43797;
continue;
} else {
var temp__4657__auto___43798 = cljs.core.seq.call(null,seq__43718_43758);
if(temp__4657__auto___43798){
var seq__43718_43799__$1 = temp__4657__auto___43798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43718_43799__$1)){
var c__26750__auto___43800 = cljs.core.chunk_first.call(null,seq__43718_43799__$1);
var G__43801 = cljs.core.chunk_rest.call(null,seq__43718_43799__$1);
var G__43802 = c__26750__auto___43800;
var G__43803 = cljs.core.count.call(null,c__26750__auto___43800);
var G__43804 = (0);
seq__43718_43758 = G__43801;
chunk__43725_43759 = G__43802;
count__43726_43760 = G__43803;
i__43727_43761 = G__43804;
continue;
} else {
var vec__43743_43805 = cljs.core.first.call(null,seq__43718_43799__$1);
var orig_type_43806 = cljs.core.nth.call(null,vec__43743_43805,(0),null);
var f_43807 = cljs.core.nth.call(null,vec__43743_43805,(1),null);
var seq__43719_43808 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_43806,cljs.core.PersistentArrayMap.fromArray([orig_type_43806,cljs.core.identity], true, false)));
var chunk__43721_43809 = null;
var count__43722_43810 = (0);
var i__43723_43811 = (0);
while(true){
if((i__43723_43811 < count__43722_43810)){
var vec__43746_43812 = cljs.core._nth.call(null,chunk__43721_43809,i__43723_43811);
var actual_type_43813 = cljs.core.nth.call(null,vec__43746_43812,(0),null);
var __43814 = cljs.core.nth.call(null,vec__43746_43812,(1),null);
var keys_43815 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43757,actual_type_43813,f_43807], null);
var canonical_f_43816 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_43756),keys_43815);
dommy.core.update_event_listeners_BANG_.call(null,elem_43756,dommy.utils.dissoc_in,keys_43815);

if(cljs.core.truth_(elem_43756.removeEventListener)){
elem_43756.removeEventListener(cljs.core.name.call(null,actual_type_43813),canonical_f_43816);
} else {
elem_43756.detachEvent(cljs.core.name.call(null,actual_type_43813),canonical_f_43816);
}

var G__43817 = seq__43719_43808;
var G__43818 = chunk__43721_43809;
var G__43819 = count__43722_43810;
var G__43820 = (i__43723_43811 + (1));
seq__43719_43808 = G__43817;
chunk__43721_43809 = G__43818;
count__43722_43810 = G__43819;
i__43723_43811 = G__43820;
continue;
} else {
var temp__4657__auto___43821__$1 = cljs.core.seq.call(null,seq__43719_43808);
if(temp__4657__auto___43821__$1){
var seq__43719_43822__$1 = temp__4657__auto___43821__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43719_43822__$1)){
var c__26750__auto___43823 = cljs.core.chunk_first.call(null,seq__43719_43822__$1);
var G__43824 = cljs.core.chunk_rest.call(null,seq__43719_43822__$1);
var G__43825 = c__26750__auto___43823;
var G__43826 = cljs.core.count.call(null,c__26750__auto___43823);
var G__43827 = (0);
seq__43719_43808 = G__43824;
chunk__43721_43809 = G__43825;
count__43722_43810 = G__43826;
i__43723_43811 = G__43827;
continue;
} else {
var vec__43749_43828 = cljs.core.first.call(null,seq__43719_43822__$1);
var actual_type_43829 = cljs.core.nth.call(null,vec__43749_43828,(0),null);
var __43830 = cljs.core.nth.call(null,vec__43749_43828,(1),null);
var keys_43831 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43757,actual_type_43829,f_43807], null);
var canonical_f_43832 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_43756),keys_43831);
dommy.core.update_event_listeners_BANG_.call(null,elem_43756,dommy.utils.dissoc_in,keys_43831);

if(cljs.core.truth_(elem_43756.removeEventListener)){
elem_43756.removeEventListener(cljs.core.name.call(null,actual_type_43829),canonical_f_43832);
} else {
elem_43756.detachEvent(cljs.core.name.call(null,actual_type_43829),canonical_f_43832);
}

var G__43833 = cljs.core.next.call(null,seq__43719_43822__$1);
var G__43834 = null;
var G__43835 = (0);
var G__43836 = (0);
seq__43719_43808 = G__43833;
chunk__43721_43809 = G__43834;
count__43722_43810 = G__43835;
i__43723_43811 = G__43836;
continue;
}
} else {
}
}
break;
}

var G__43837 = cljs.core.next.call(null,seq__43718_43799__$1);
var G__43838 = null;
var G__43839 = (0);
var G__43840 = (0);
seq__43718_43758 = G__43837;
chunk__43725_43759 = G__43838;
count__43726_43760 = G__43839;
i__43727_43761 = G__43840;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq43713){
var G__43714 = cljs.core.first.call(null,seq43713);
var seq43713__$1 = cljs.core.next.call(null,seq43713);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43714,seq43713__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__27021__auto__ = [];
var len__27014__auto___43856 = arguments.length;
var i__27015__auto___43857 = (0);
while(true){
if((i__27015__auto___43857 < len__27014__auto___43856)){
args__27021__auto__.push((arguments[i__27015__auto___43857]));

var G__43858 = (i__27015__auto___43857 + (1));
i__27015__auto___43857 = G__43858;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((1) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27022__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__43843_43859 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_43860 = cljs.core.nth.call(null,vec__43843_43859,(0),null);
var selector_43861 = cljs.core.nth.call(null,vec__43843_43859,(1),null);
var seq__43846_43862 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__43847_43863 = null;
var count__43848_43864 = (0);
var i__43849_43865 = (0);
while(true){
if((i__43849_43865 < count__43848_43864)){
var vec__43850_43866 = cljs.core._nth.call(null,chunk__43847_43863,i__43849_43865);
var type_43867 = cljs.core.nth.call(null,vec__43850_43866,(0),null);
var f_43868 = cljs.core.nth.call(null,vec__43850_43866,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_43867,((function (seq__43846_43862,chunk__43847_43863,count__43848_43864,i__43849_43865,vec__43850_43866,type_43867,f_43868,vec__43843_43859,elem_43860,selector_43861){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_43867,dommy$core$this_fn);

return f_43868.call(null,e);
});})(seq__43846_43862,chunk__43847_43863,count__43848_43864,i__43849_43865,vec__43850_43866,type_43867,f_43868,vec__43843_43859,elem_43860,selector_43861))
);

var G__43869 = seq__43846_43862;
var G__43870 = chunk__43847_43863;
var G__43871 = count__43848_43864;
var G__43872 = (i__43849_43865 + (1));
seq__43846_43862 = G__43869;
chunk__43847_43863 = G__43870;
count__43848_43864 = G__43871;
i__43849_43865 = G__43872;
continue;
} else {
var temp__4657__auto___43873 = cljs.core.seq.call(null,seq__43846_43862);
if(temp__4657__auto___43873){
var seq__43846_43874__$1 = temp__4657__auto___43873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43846_43874__$1)){
var c__26750__auto___43875 = cljs.core.chunk_first.call(null,seq__43846_43874__$1);
var G__43876 = cljs.core.chunk_rest.call(null,seq__43846_43874__$1);
var G__43877 = c__26750__auto___43875;
var G__43878 = cljs.core.count.call(null,c__26750__auto___43875);
var G__43879 = (0);
seq__43846_43862 = G__43876;
chunk__43847_43863 = G__43877;
count__43848_43864 = G__43878;
i__43849_43865 = G__43879;
continue;
} else {
var vec__43853_43880 = cljs.core.first.call(null,seq__43846_43874__$1);
var type_43881 = cljs.core.nth.call(null,vec__43853_43880,(0),null);
var f_43882 = cljs.core.nth.call(null,vec__43853_43880,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_43881,((function (seq__43846_43862,chunk__43847_43863,count__43848_43864,i__43849_43865,vec__43853_43880,type_43881,f_43882,seq__43846_43874__$1,temp__4657__auto___43873,vec__43843_43859,elem_43860,selector_43861){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_43881,dommy$core$this_fn);

return f_43882.call(null,e);
});})(seq__43846_43862,chunk__43847_43863,count__43848_43864,i__43849_43865,vec__43853_43880,type_43881,f_43882,seq__43846_43874__$1,temp__4657__auto___43873,vec__43843_43859,elem_43860,selector_43861))
);

var G__43883 = cljs.core.next.call(null,seq__43846_43874__$1);
var G__43884 = null;
var G__43885 = (0);
var G__43886 = (0);
seq__43846_43862 = G__43883;
chunk__43847_43863 = G__43884;
count__43848_43864 = G__43885;
i__43849_43865 = G__43886;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq43841){
var G__43842 = cljs.core.first.call(null,seq43841);
var seq43841__$1 = cljs.core.next.call(null,seq43841);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43842,seq43841__$1);
});


//# sourceMappingURL=core.js.map?rel=1496347446676