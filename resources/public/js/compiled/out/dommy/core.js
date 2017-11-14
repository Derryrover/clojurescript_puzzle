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
var args29026 = [];
var len__27014__auto___29029 = arguments.length;
var i__27015__auto___29030 = (0);
while(true){
if((i__27015__auto___29030 < len__27014__auto___29029)){
args29026.push((arguments[i__27015__auto___29030]));

var G__29031 = (i__27015__auto___29030 + (1));
i__27015__auto___29030 = G__29031;
continue;
} else {
}
break;
}

var G__29028 = args29026.length;
switch (G__29028) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29026.length)].join('')));

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
var args29033 = [];
var len__27014__auto___29036 = arguments.length;
var i__27015__auto___29037 = (0);
while(true){
if((i__27015__auto___29037 < len__27014__auto___29036)){
args29033.push((arguments[i__27015__auto___29037]));

var G__29038 = (i__27015__auto___29037 + (1));
i__27015__auto___29037 = G__29038;
continue;
} else {
}
break;
}

var G__29035 = args29033.length;
switch (G__29035) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29033.length)].join('')));

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
var args29041 = [];
var len__27014__auto___29044 = arguments.length;
var i__27015__auto___29045 = (0);
while(true){
if((i__27015__auto___29045 < len__27014__auto___29044)){
args29041.push((arguments[i__27015__auto___29045]));

var G__29046 = (i__27015__auto___29045 + (1));
i__27015__auto___29045 = G__29046;
continue;
} else {
}
break;
}

var G__29043 = args29041.length;
switch (G__29043) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29041.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__29040_SHARP_){
return !((p1__29040_SHARP_ === base));
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
var len__27014__auto___29060 = arguments.length;
var i__27015__auto___29061 = (0);
while(true){
if((i__27015__auto___29061 < len__27014__auto___29060)){
args__27021__auto__.push((arguments[i__27015__auto___29061]));

var G__29062 = (i__27015__auto___29061 + (1));
i__27015__auto___29061 = G__29062;
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
var seq__29050_29063 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__29051_29064 = null;
var count__29052_29065 = (0);
var i__29053_29066 = (0);
while(true){
if((i__29053_29066 < count__29052_29065)){
var vec__29054_29067 = cljs.core._nth.call(null,chunk__29051_29064,i__29053_29066);
var k_29068 = cljs.core.nth.call(null,vec__29054_29067,(0),null);
var v_29069 = cljs.core.nth.call(null,vec__29054_29067,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_29068),v_29069);

var G__29070 = seq__29050_29063;
var G__29071 = chunk__29051_29064;
var G__29072 = count__29052_29065;
var G__29073 = (i__29053_29066 + (1));
seq__29050_29063 = G__29070;
chunk__29051_29064 = G__29071;
count__29052_29065 = G__29072;
i__29053_29066 = G__29073;
continue;
} else {
var temp__4657__auto___29074 = cljs.core.seq.call(null,seq__29050_29063);
if(temp__4657__auto___29074){
var seq__29050_29075__$1 = temp__4657__auto___29074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29050_29075__$1)){
var c__26750__auto___29076 = cljs.core.chunk_first.call(null,seq__29050_29075__$1);
var G__29077 = cljs.core.chunk_rest.call(null,seq__29050_29075__$1);
var G__29078 = c__26750__auto___29076;
var G__29079 = cljs.core.count.call(null,c__26750__auto___29076);
var G__29080 = (0);
seq__29050_29063 = G__29077;
chunk__29051_29064 = G__29078;
count__29052_29065 = G__29079;
i__29053_29066 = G__29080;
continue;
} else {
var vec__29057_29081 = cljs.core.first.call(null,seq__29050_29075__$1);
var k_29082 = cljs.core.nth.call(null,vec__29057_29081,(0),null);
var v_29083 = cljs.core.nth.call(null,vec__29057_29081,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_29082),v_29083);

var G__29084 = cljs.core.next.call(null,seq__29050_29075__$1);
var G__29085 = null;
var G__29086 = (0);
var G__29087 = (0);
seq__29050_29063 = G__29084;
chunk__29051_29064 = G__29085;
count__29052_29065 = G__29086;
i__29053_29066 = G__29087;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq29048){
var G__29049 = cljs.core.first.call(null,seq29048);
var seq29048__$1 = cljs.core.next.call(null,seq29048);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29049,seq29048__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__27021__auto__ = [];
var len__27014__auto___29094 = arguments.length;
var i__27015__auto___29095 = (0);
while(true){
if((i__27015__auto___29095 < len__27014__auto___29094)){
args__27021__auto__.push((arguments[i__27015__auto___29095]));

var G__29096 = (i__27015__auto___29095 + (1));
i__27015__auto___29095 = G__29096;
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
var seq__29090_29097 = cljs.core.seq.call(null,keywords);
var chunk__29091_29098 = null;
var count__29092_29099 = (0);
var i__29093_29100 = (0);
while(true){
if((i__29093_29100 < count__29092_29099)){
var kw_29101 = cljs.core._nth.call(null,chunk__29091_29098,i__29093_29100);
style.removeProperty(dommy.utils.as_str.call(null,kw_29101));

var G__29102 = seq__29090_29097;
var G__29103 = chunk__29091_29098;
var G__29104 = count__29092_29099;
var G__29105 = (i__29093_29100 + (1));
seq__29090_29097 = G__29102;
chunk__29091_29098 = G__29103;
count__29092_29099 = G__29104;
i__29093_29100 = G__29105;
continue;
} else {
var temp__4657__auto___29106 = cljs.core.seq.call(null,seq__29090_29097);
if(temp__4657__auto___29106){
var seq__29090_29107__$1 = temp__4657__auto___29106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29090_29107__$1)){
var c__26750__auto___29108 = cljs.core.chunk_first.call(null,seq__29090_29107__$1);
var G__29109 = cljs.core.chunk_rest.call(null,seq__29090_29107__$1);
var G__29110 = c__26750__auto___29108;
var G__29111 = cljs.core.count.call(null,c__26750__auto___29108);
var G__29112 = (0);
seq__29090_29097 = G__29109;
chunk__29091_29098 = G__29110;
count__29092_29099 = G__29111;
i__29093_29100 = G__29112;
continue;
} else {
var kw_29113 = cljs.core.first.call(null,seq__29090_29107__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_29113));

var G__29114 = cljs.core.next.call(null,seq__29090_29107__$1);
var G__29115 = null;
var G__29116 = (0);
var G__29117 = (0);
seq__29090_29097 = G__29114;
chunk__29091_29098 = G__29115;
count__29092_29099 = G__29116;
i__29093_29100 = G__29117;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq29088){
var G__29089 = cljs.core.first.call(null,seq29088);
var seq29088__$1 = cljs.core.next.call(null,seq29088);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29089,seq29088__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__27021__auto__ = [];
var len__27014__auto___29130 = arguments.length;
var i__27015__auto___29131 = (0);
while(true){
if((i__27015__auto___29131 < len__27014__auto___29130)){
args__27021__auto__.push((arguments[i__27015__auto___29131]));

var G__29132 = (i__27015__auto___29131 + (1));
i__27015__auto___29131 = G__29132;
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

var seq__29120_29133 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__29121_29134 = null;
var count__29122_29135 = (0);
var i__29123_29136 = (0);
while(true){
if((i__29123_29136 < count__29122_29135)){
var vec__29124_29137 = cljs.core._nth.call(null,chunk__29121_29134,i__29123_29136);
var k_29138 = cljs.core.nth.call(null,vec__29124_29137,(0),null);
var v_29139 = cljs.core.nth.call(null,vec__29124_29137,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_29138,[cljs.core.str(v_29139),cljs.core.str("px")].join(''));

var G__29140 = seq__29120_29133;
var G__29141 = chunk__29121_29134;
var G__29142 = count__29122_29135;
var G__29143 = (i__29123_29136 + (1));
seq__29120_29133 = G__29140;
chunk__29121_29134 = G__29141;
count__29122_29135 = G__29142;
i__29123_29136 = G__29143;
continue;
} else {
var temp__4657__auto___29144 = cljs.core.seq.call(null,seq__29120_29133);
if(temp__4657__auto___29144){
var seq__29120_29145__$1 = temp__4657__auto___29144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29120_29145__$1)){
var c__26750__auto___29146 = cljs.core.chunk_first.call(null,seq__29120_29145__$1);
var G__29147 = cljs.core.chunk_rest.call(null,seq__29120_29145__$1);
var G__29148 = c__26750__auto___29146;
var G__29149 = cljs.core.count.call(null,c__26750__auto___29146);
var G__29150 = (0);
seq__29120_29133 = G__29147;
chunk__29121_29134 = G__29148;
count__29122_29135 = G__29149;
i__29123_29136 = G__29150;
continue;
} else {
var vec__29127_29151 = cljs.core.first.call(null,seq__29120_29145__$1);
var k_29152 = cljs.core.nth.call(null,vec__29127_29151,(0),null);
var v_29153 = cljs.core.nth.call(null,vec__29127_29151,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_29152,[cljs.core.str(v_29153),cljs.core.str("px")].join(''));

var G__29154 = cljs.core.next.call(null,seq__29120_29145__$1);
var G__29155 = null;
var G__29156 = (0);
var G__29157 = (0);
seq__29120_29133 = G__29154;
chunk__29121_29134 = G__29155;
count__29122_29135 = G__29156;
i__29123_29136 = G__29157;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq29118){
var G__29119 = cljs.core.first.call(null,seq29118);
var seq29118__$1 = cljs.core.next.call(null,seq29118);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29119,seq29118__$1);
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
var args29158 = [];
var len__27014__auto___29177 = arguments.length;
var i__27015__auto___29178 = (0);
while(true){
if((i__27015__auto___29178 < len__27014__auto___29177)){
args29158.push((arguments[i__27015__auto___29178]));

var G__29179 = (i__27015__auto___29178 + (1));
i__27015__auto___29178 = G__29179;
continue;
} else {
}
break;
}

var G__29164 = args29158.length;
switch (G__29164) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__27033__auto__ = (new cljs.core.IndexedSeq(args29158.slice((3)),(0),null));
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
var G__29165 = elem;
(G__29165[k__$1] = v);

return G__29165;
} else {
var G__29166 = elem;
G__29166.setAttribute(k__$1,v);

return G__29166;
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

var seq__29167_29181 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__29168_29182 = null;
var count__29169_29183 = (0);
var i__29170_29184 = (0);
while(true){
if((i__29170_29184 < count__29169_29183)){
var vec__29171_29185 = cljs.core._nth.call(null,chunk__29168_29182,i__29170_29184);
var k_29186__$1 = cljs.core.nth.call(null,vec__29171_29185,(0),null);
var v_29187__$1 = cljs.core.nth.call(null,vec__29171_29185,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_29186__$1,v_29187__$1);

var G__29188 = seq__29167_29181;
var G__29189 = chunk__29168_29182;
var G__29190 = count__29169_29183;
var G__29191 = (i__29170_29184 + (1));
seq__29167_29181 = G__29188;
chunk__29168_29182 = G__29189;
count__29169_29183 = G__29190;
i__29170_29184 = G__29191;
continue;
} else {
var temp__4657__auto___29192 = cljs.core.seq.call(null,seq__29167_29181);
if(temp__4657__auto___29192){
var seq__29167_29193__$1 = temp__4657__auto___29192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29167_29193__$1)){
var c__26750__auto___29194 = cljs.core.chunk_first.call(null,seq__29167_29193__$1);
var G__29195 = cljs.core.chunk_rest.call(null,seq__29167_29193__$1);
var G__29196 = c__26750__auto___29194;
var G__29197 = cljs.core.count.call(null,c__26750__auto___29194);
var G__29198 = (0);
seq__29167_29181 = G__29195;
chunk__29168_29182 = G__29196;
count__29169_29183 = G__29197;
i__29170_29184 = G__29198;
continue;
} else {
var vec__29174_29199 = cljs.core.first.call(null,seq__29167_29193__$1);
var k_29200__$1 = cljs.core.nth.call(null,vec__29174_29199,(0),null);
var v_29201__$1 = cljs.core.nth.call(null,vec__29174_29199,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_29200__$1,v_29201__$1);

var G__29202 = cljs.core.next.call(null,seq__29167_29193__$1);
var G__29203 = null;
var G__29204 = (0);
var G__29205 = (0);
seq__29167_29181 = G__29202;
chunk__29168_29182 = G__29203;
count__29169_29183 = G__29204;
i__29170_29184 = G__29205;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq29159){
var G__29160 = cljs.core.first.call(null,seq29159);
var seq29159__$1 = cljs.core.next.call(null,seq29159);
var G__29161 = cljs.core.first.call(null,seq29159__$1);
var seq29159__$2 = cljs.core.next.call(null,seq29159__$1);
var G__29162 = cljs.core.first.call(null,seq29159__$2);
var seq29159__$3 = cljs.core.next.call(null,seq29159__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29160,G__29161,G__29162,seq29159__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args29206 = [];
var len__27014__auto___29216 = arguments.length;
var i__27015__auto___29217 = (0);
while(true){
if((i__27015__auto___29217 < len__27014__auto___29216)){
args29206.push((arguments[i__27015__auto___29217]));

var G__29218 = (i__27015__auto___29217 + (1));
i__27015__auto___29217 = G__29218;
continue;
} else {
}
break;
}

var G__29211 = args29206.length;
switch (G__29211) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27033__auto__ = (new cljs.core.IndexedSeq(args29206.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27033__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_29220__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_29220__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_29220__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__29212_29221 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__29213_29222 = null;
var count__29214_29223 = (0);
var i__29215_29224 = (0);
while(true){
if((i__29215_29224 < count__29214_29223)){
var k_29225__$1 = cljs.core._nth.call(null,chunk__29213_29222,i__29215_29224);
dommy.core.remove_attr_BANG_.call(null,elem,k_29225__$1);

var G__29226 = seq__29212_29221;
var G__29227 = chunk__29213_29222;
var G__29228 = count__29214_29223;
var G__29229 = (i__29215_29224 + (1));
seq__29212_29221 = G__29226;
chunk__29213_29222 = G__29227;
count__29214_29223 = G__29228;
i__29215_29224 = G__29229;
continue;
} else {
var temp__4657__auto___29230 = cljs.core.seq.call(null,seq__29212_29221);
if(temp__4657__auto___29230){
var seq__29212_29231__$1 = temp__4657__auto___29230;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29212_29231__$1)){
var c__26750__auto___29232 = cljs.core.chunk_first.call(null,seq__29212_29231__$1);
var G__29233 = cljs.core.chunk_rest.call(null,seq__29212_29231__$1);
var G__29234 = c__26750__auto___29232;
var G__29235 = cljs.core.count.call(null,c__26750__auto___29232);
var G__29236 = (0);
seq__29212_29221 = G__29233;
chunk__29213_29222 = G__29234;
count__29214_29223 = G__29235;
i__29215_29224 = G__29236;
continue;
} else {
var k_29237__$1 = cljs.core.first.call(null,seq__29212_29231__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_29237__$1);

var G__29238 = cljs.core.next.call(null,seq__29212_29231__$1);
var G__29239 = null;
var G__29240 = (0);
var G__29241 = (0);
seq__29212_29221 = G__29238;
chunk__29213_29222 = G__29239;
count__29214_29223 = G__29240;
i__29215_29224 = G__29241;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq29207){
var G__29208 = cljs.core.first.call(null,seq29207);
var seq29207__$1 = cljs.core.next.call(null,seq29207);
var G__29209 = cljs.core.first.call(null,seq29207__$1);
var seq29207__$2 = cljs.core.next.call(null,seq29207__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29208,G__29209,seq29207__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args29242 = [];
var len__27014__auto___29245 = arguments.length;
var i__27015__auto___29246 = (0);
while(true){
if((i__27015__auto___29246 < len__27014__auto___29245)){
args29242.push((arguments[i__27015__auto___29246]));

var G__29247 = (i__27015__auto___29246 + (1));
i__27015__auto___29246 = G__29247;
continue;
} else {
}
break;
}

var G__29244 = args29242.length;
switch (G__29244) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29242.length)].join('')));

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
var args29249 = [];
var len__27014__auto___29267 = arguments.length;
var i__27015__auto___29268 = (0);
while(true){
if((i__27015__auto___29268 < len__27014__auto___29267)){
args29249.push((arguments[i__27015__auto___29268]));

var G__29269 = (i__27015__auto___29268 + (1));
i__27015__auto___29268 = G__29269;
continue;
} else {
}
break;
}

var G__29254 = args29249.length;
switch (G__29254) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27033__auto__ = (new cljs.core.IndexedSeq(args29249.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27033__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___29271 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___29271)){
var class_list_29272 = temp__4655__auto___29271;
var seq__29255_29273 = cljs.core.seq.call(null,classes__$1);
var chunk__29256_29274 = null;
var count__29257_29275 = (0);
var i__29258_29276 = (0);
while(true){
if((i__29258_29276 < count__29257_29275)){
var c_29277 = cljs.core._nth.call(null,chunk__29256_29274,i__29258_29276);
class_list_29272.add(c_29277);

var G__29278 = seq__29255_29273;
var G__29279 = chunk__29256_29274;
var G__29280 = count__29257_29275;
var G__29281 = (i__29258_29276 + (1));
seq__29255_29273 = G__29278;
chunk__29256_29274 = G__29279;
count__29257_29275 = G__29280;
i__29258_29276 = G__29281;
continue;
} else {
var temp__4657__auto___29282 = cljs.core.seq.call(null,seq__29255_29273);
if(temp__4657__auto___29282){
var seq__29255_29283__$1 = temp__4657__auto___29282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29255_29283__$1)){
var c__26750__auto___29284 = cljs.core.chunk_first.call(null,seq__29255_29283__$1);
var G__29285 = cljs.core.chunk_rest.call(null,seq__29255_29283__$1);
var G__29286 = c__26750__auto___29284;
var G__29287 = cljs.core.count.call(null,c__26750__auto___29284);
var G__29288 = (0);
seq__29255_29273 = G__29285;
chunk__29256_29274 = G__29286;
count__29257_29275 = G__29287;
i__29258_29276 = G__29288;
continue;
} else {
var c_29289 = cljs.core.first.call(null,seq__29255_29283__$1);
class_list_29272.add(c_29289);

var G__29290 = cljs.core.next.call(null,seq__29255_29283__$1);
var G__29291 = null;
var G__29292 = (0);
var G__29293 = (0);
seq__29255_29273 = G__29290;
chunk__29256_29274 = G__29291;
count__29257_29275 = G__29292;
i__29258_29276 = G__29293;
continue;
}
} else {
}
}
break;
}
} else {
var seq__29259_29294 = cljs.core.seq.call(null,classes__$1);
var chunk__29260_29295 = null;
var count__29261_29296 = (0);
var i__29262_29297 = (0);
while(true){
if((i__29262_29297 < count__29261_29296)){
var c_29298 = cljs.core._nth.call(null,chunk__29260_29295,i__29262_29297);
var class_name_29299 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_29299,c_29298))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_29299 === ""))?c_29298:[cljs.core.str(class_name_29299),cljs.core.str(" "),cljs.core.str(c_29298)].join('')));
}

var G__29300 = seq__29259_29294;
var G__29301 = chunk__29260_29295;
var G__29302 = count__29261_29296;
var G__29303 = (i__29262_29297 + (1));
seq__29259_29294 = G__29300;
chunk__29260_29295 = G__29301;
count__29261_29296 = G__29302;
i__29262_29297 = G__29303;
continue;
} else {
var temp__4657__auto___29304 = cljs.core.seq.call(null,seq__29259_29294);
if(temp__4657__auto___29304){
var seq__29259_29305__$1 = temp__4657__auto___29304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29259_29305__$1)){
var c__26750__auto___29306 = cljs.core.chunk_first.call(null,seq__29259_29305__$1);
var G__29307 = cljs.core.chunk_rest.call(null,seq__29259_29305__$1);
var G__29308 = c__26750__auto___29306;
var G__29309 = cljs.core.count.call(null,c__26750__auto___29306);
var G__29310 = (0);
seq__29259_29294 = G__29307;
chunk__29260_29295 = G__29308;
count__29261_29296 = G__29309;
i__29262_29297 = G__29310;
continue;
} else {
var c_29311 = cljs.core.first.call(null,seq__29259_29305__$1);
var class_name_29312 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_29312,c_29311))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_29312 === ""))?c_29311:[cljs.core.str(class_name_29312),cljs.core.str(" "),cljs.core.str(c_29311)].join('')));
}

var G__29313 = cljs.core.next.call(null,seq__29259_29305__$1);
var G__29314 = null;
var G__29315 = (0);
var G__29316 = (0);
seq__29259_29294 = G__29313;
chunk__29260_29295 = G__29314;
count__29261_29296 = G__29315;
i__29262_29297 = G__29316;
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
var seq__29263_29317 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__29264_29318 = null;
var count__29265_29319 = (0);
var i__29266_29320 = (0);
while(true){
if((i__29266_29320 < count__29265_29319)){
var c_29321 = cljs.core._nth.call(null,chunk__29264_29318,i__29266_29320);
dommy.core.add_class_BANG_.call(null,elem,c_29321);

var G__29322 = seq__29263_29317;
var G__29323 = chunk__29264_29318;
var G__29324 = count__29265_29319;
var G__29325 = (i__29266_29320 + (1));
seq__29263_29317 = G__29322;
chunk__29264_29318 = G__29323;
count__29265_29319 = G__29324;
i__29266_29320 = G__29325;
continue;
} else {
var temp__4657__auto___29326 = cljs.core.seq.call(null,seq__29263_29317);
if(temp__4657__auto___29326){
var seq__29263_29327__$1 = temp__4657__auto___29326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29263_29327__$1)){
var c__26750__auto___29328 = cljs.core.chunk_first.call(null,seq__29263_29327__$1);
var G__29329 = cljs.core.chunk_rest.call(null,seq__29263_29327__$1);
var G__29330 = c__26750__auto___29328;
var G__29331 = cljs.core.count.call(null,c__26750__auto___29328);
var G__29332 = (0);
seq__29263_29317 = G__29329;
chunk__29264_29318 = G__29330;
count__29265_29319 = G__29331;
i__29266_29320 = G__29332;
continue;
} else {
var c_29333 = cljs.core.first.call(null,seq__29263_29327__$1);
dommy.core.add_class_BANG_.call(null,elem,c_29333);

var G__29334 = cljs.core.next.call(null,seq__29263_29327__$1);
var G__29335 = null;
var G__29336 = (0);
var G__29337 = (0);
seq__29263_29317 = G__29334;
chunk__29264_29318 = G__29335;
count__29265_29319 = G__29336;
i__29266_29320 = G__29337;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq29250){
var G__29251 = cljs.core.first.call(null,seq29250);
var seq29250__$1 = cljs.core.next.call(null,seq29250);
var G__29252 = cljs.core.first.call(null,seq29250__$1);
var seq29250__$2 = cljs.core.next.call(null,seq29250__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29251,G__29252,seq29250__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args29338 = [];
var len__27014__auto___29348 = arguments.length;
var i__27015__auto___29349 = (0);
while(true){
if((i__27015__auto___29349 < len__27014__auto___29348)){
args29338.push((arguments[i__27015__auto___29349]));

var G__29350 = (i__27015__auto___29349 + (1));
i__27015__auto___29349 = G__29350;
continue;
} else {
}
break;
}

var G__29343 = args29338.length;
switch (G__29343) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27033__auto__ = (new cljs.core.IndexedSeq(args29338.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27033__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___29352 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___29352)){
var class_list_29353 = temp__4655__auto___29352;
class_list_29353.remove(c__$1);
} else {
var class_name_29354 = dommy.core.class$.call(null,elem);
var new_class_name_29355 = dommy.utils.remove_class_str.call(null,class_name_29354,c__$1);
if((class_name_29354 === new_class_name_29355)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_29355);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__29344 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__29345 = null;
var count__29346 = (0);
var i__29347 = (0);
while(true){
if((i__29347 < count__29346)){
var c = cljs.core._nth.call(null,chunk__29345,i__29347);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__29356 = seq__29344;
var G__29357 = chunk__29345;
var G__29358 = count__29346;
var G__29359 = (i__29347 + (1));
seq__29344 = G__29356;
chunk__29345 = G__29357;
count__29346 = G__29358;
i__29347 = G__29359;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29344);
if(temp__4657__auto__){
var seq__29344__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29344__$1)){
var c__26750__auto__ = cljs.core.chunk_first.call(null,seq__29344__$1);
var G__29360 = cljs.core.chunk_rest.call(null,seq__29344__$1);
var G__29361 = c__26750__auto__;
var G__29362 = cljs.core.count.call(null,c__26750__auto__);
var G__29363 = (0);
seq__29344 = G__29360;
chunk__29345 = G__29361;
count__29346 = G__29362;
i__29347 = G__29363;
continue;
} else {
var c = cljs.core.first.call(null,seq__29344__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__29364 = cljs.core.next.call(null,seq__29344__$1);
var G__29365 = null;
var G__29366 = (0);
var G__29367 = (0);
seq__29344 = G__29364;
chunk__29345 = G__29365;
count__29346 = G__29366;
i__29347 = G__29367;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq29339){
var G__29340 = cljs.core.first.call(null,seq29339);
var seq29339__$1 = cljs.core.next.call(null,seq29339);
var G__29341 = cljs.core.first.call(null,seq29339__$1);
var seq29339__$2 = cljs.core.next.call(null,seq29339__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29340,G__29341,seq29339__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args29368 = [];
var len__27014__auto___29371 = arguments.length;
var i__27015__auto___29372 = (0);
while(true){
if((i__27015__auto___29372 < len__27014__auto___29371)){
args29368.push((arguments[i__27015__auto___29372]));

var G__29373 = (i__27015__auto___29372 + (1));
i__27015__auto___29372 = G__29373;
continue;
} else {
}
break;
}

var G__29370 = args29368.length;
switch (G__29370) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29368.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___29375 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___29375)){
var class_list_29376 = temp__4655__auto___29375;
class_list_29376.toggle(c__$1);
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
var args29377 = [];
var len__27014__auto___29380 = arguments.length;
var i__27015__auto___29381 = (0);
while(true){
if((i__27015__auto___29381 < len__27014__auto___29380)){
args29377.push((arguments[i__27015__auto___29381]));

var G__29382 = (i__27015__auto___29381 + (1));
i__27015__auto___29381 = G__29382;
continue;
} else {
}
break;
}

var G__29379 = args29377.length;
switch (G__29379) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29377.length)].join('')));

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
var args29384 = [];
var len__27014__auto___29387 = arguments.length;
var i__27015__auto___29388 = (0);
while(true){
if((i__27015__auto___29388 < len__27014__auto___29387)){
args29384.push((arguments[i__27015__auto___29388]));

var G__29389 = (i__27015__auto___29388 + (1));
i__27015__auto___29388 = G__29389;
continue;
} else {
}
break;
}

var G__29386 = args29384.length;
switch (G__29386) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29384.length)].join('')));

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
var args29391 = [];
var len__27014__auto___29402 = arguments.length;
var i__27015__auto___29403 = (0);
while(true){
if((i__27015__auto___29403 < len__27014__auto___29402)){
args29391.push((arguments[i__27015__auto___29403]));

var G__29404 = (i__27015__auto___29403 + (1));
i__27015__auto___29403 = G__29404;
continue;
} else {
}
break;
}

var G__29396 = args29391.length;
switch (G__29396) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27033__auto__ = (new cljs.core.IndexedSeq(args29391.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27033__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__29397 = parent;
G__29397.appendChild(child);

return G__29397;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__29398_29406 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__29399_29407 = null;
var count__29400_29408 = (0);
var i__29401_29409 = (0);
while(true){
if((i__29401_29409 < count__29400_29408)){
var c_29410 = cljs.core._nth.call(null,chunk__29399_29407,i__29401_29409);
dommy.core.append_BANG_.call(null,parent,c_29410);

var G__29411 = seq__29398_29406;
var G__29412 = chunk__29399_29407;
var G__29413 = count__29400_29408;
var G__29414 = (i__29401_29409 + (1));
seq__29398_29406 = G__29411;
chunk__29399_29407 = G__29412;
count__29400_29408 = G__29413;
i__29401_29409 = G__29414;
continue;
} else {
var temp__4657__auto___29415 = cljs.core.seq.call(null,seq__29398_29406);
if(temp__4657__auto___29415){
var seq__29398_29416__$1 = temp__4657__auto___29415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29398_29416__$1)){
var c__26750__auto___29417 = cljs.core.chunk_first.call(null,seq__29398_29416__$1);
var G__29418 = cljs.core.chunk_rest.call(null,seq__29398_29416__$1);
var G__29419 = c__26750__auto___29417;
var G__29420 = cljs.core.count.call(null,c__26750__auto___29417);
var G__29421 = (0);
seq__29398_29406 = G__29418;
chunk__29399_29407 = G__29419;
count__29400_29408 = G__29420;
i__29401_29409 = G__29421;
continue;
} else {
var c_29422 = cljs.core.first.call(null,seq__29398_29416__$1);
dommy.core.append_BANG_.call(null,parent,c_29422);

var G__29423 = cljs.core.next.call(null,seq__29398_29416__$1);
var G__29424 = null;
var G__29425 = (0);
var G__29426 = (0);
seq__29398_29406 = G__29423;
chunk__29399_29407 = G__29424;
count__29400_29408 = G__29425;
i__29401_29409 = G__29426;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq29392){
var G__29393 = cljs.core.first.call(null,seq29392);
var seq29392__$1 = cljs.core.next.call(null,seq29392);
var G__29394 = cljs.core.first.call(null,seq29392__$1);
var seq29392__$2 = cljs.core.next.call(null,seq29392__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29393,G__29394,seq29392__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args29427 = [];
var len__27014__auto___29438 = arguments.length;
var i__27015__auto___29439 = (0);
while(true){
if((i__27015__auto___29439 < len__27014__auto___29438)){
args29427.push((arguments[i__27015__auto___29439]));

var G__29440 = (i__27015__auto___29439 + (1));
i__27015__auto___29439 = G__29440;
continue;
} else {
}
break;
}

var G__29432 = args29427.length;
switch (G__29432) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27033__auto__ = (new cljs.core.IndexedSeq(args29427.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27033__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__29433 = parent;
G__29433.insertBefore(child,parent.firstChild);

return G__29433;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__29434_29442 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__29435_29443 = null;
var count__29436_29444 = (0);
var i__29437_29445 = (0);
while(true){
if((i__29437_29445 < count__29436_29444)){
var c_29446 = cljs.core._nth.call(null,chunk__29435_29443,i__29437_29445);
dommy.core.prepend_BANG_.call(null,parent,c_29446);

var G__29447 = seq__29434_29442;
var G__29448 = chunk__29435_29443;
var G__29449 = count__29436_29444;
var G__29450 = (i__29437_29445 + (1));
seq__29434_29442 = G__29447;
chunk__29435_29443 = G__29448;
count__29436_29444 = G__29449;
i__29437_29445 = G__29450;
continue;
} else {
var temp__4657__auto___29451 = cljs.core.seq.call(null,seq__29434_29442);
if(temp__4657__auto___29451){
var seq__29434_29452__$1 = temp__4657__auto___29451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29434_29452__$1)){
var c__26750__auto___29453 = cljs.core.chunk_first.call(null,seq__29434_29452__$1);
var G__29454 = cljs.core.chunk_rest.call(null,seq__29434_29452__$1);
var G__29455 = c__26750__auto___29453;
var G__29456 = cljs.core.count.call(null,c__26750__auto___29453);
var G__29457 = (0);
seq__29434_29442 = G__29454;
chunk__29435_29443 = G__29455;
count__29436_29444 = G__29456;
i__29437_29445 = G__29457;
continue;
} else {
var c_29458 = cljs.core.first.call(null,seq__29434_29452__$1);
dommy.core.prepend_BANG_.call(null,parent,c_29458);

var G__29459 = cljs.core.next.call(null,seq__29434_29452__$1);
var G__29460 = null;
var G__29461 = (0);
var G__29462 = (0);
seq__29434_29442 = G__29459;
chunk__29435_29443 = G__29460;
count__29436_29444 = G__29461;
i__29437_29445 = G__29462;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq29428){
var G__29429 = cljs.core.first.call(null,seq29428);
var seq29428__$1 = cljs.core.next.call(null,seq29428);
var G__29430 = cljs.core.first.call(null,seq29428__$1);
var seq29428__$2 = cljs.core.next.call(null,seq29428__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29429,G__29430,seq29428__$2);
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
var temp__4655__auto___29463 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___29463)){
var next_29464 = temp__4655__auto___29463;
dommy.core.insert_before_BANG_.call(null,elem,next_29464);
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
var args29465 = [];
var len__27014__auto___29469 = arguments.length;
var i__27015__auto___29470 = (0);
while(true){
if((i__27015__auto___29470 < len__27014__auto___29469)){
args29465.push((arguments[i__27015__auto___29470]));

var G__29471 = (i__27015__auto___29470 + (1));
i__27015__auto___29470 = G__29471;
continue;
} else {
}
break;
}

var G__29467 = args29465.length;
switch (G__29467) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29465.length)].join('')));

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
var G__29468 = p;
G__29468.removeChild(elem);

return G__29468;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__29473){
var vec__29474 = p__29473;
var special_mouse_event = cljs.core.nth.call(null,vec__29474,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__29474,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__29474,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__29474,special_mouse_event,real_mouse_event){
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
;})(vec__29474,special_mouse_event,real_mouse_event))
});})(vec__29474,special_mouse_event,real_mouse_event))
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
var len__27014__auto___29480 = arguments.length;
var i__27015__auto___29481 = (0);
while(true){
if((i__27015__auto___29481 < len__27014__auto___29480)){
args__27021__auto__.push((arguments[i__27015__auto___29481]));

var G__29482 = (i__27015__auto___29481 + (1));
i__27015__auto___29481 = G__29482;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq29477){
var G__29478 = cljs.core.first.call(null,seq29477);
var seq29477__$1 = cljs.core.next.call(null,seq29477);
var G__29479 = cljs.core.first.call(null,seq29477__$1);
var seq29477__$2 = cljs.core.next.call(null,seq29477__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29478,G__29479,seq29477__$2);
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
var len__27014__auto___29522 = arguments.length;
var i__27015__auto___29523 = (0);
while(true){
if((i__27015__auto___29523 < len__27014__auto___29522)){
args__27021__auto__.push((arguments[i__27015__auto___29523]));

var G__29524 = (i__27015__auto___29523 + (1));
i__27015__auto___29523 = G__29524;
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

var vec__29485_29525 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_29526 = cljs.core.nth.call(null,vec__29485_29525,(0),null);
var selector_29527 = cljs.core.nth.call(null,vec__29485_29525,(1),null);
var seq__29488_29528 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__29495_29529 = null;
var count__29496_29530 = (0);
var i__29497_29531 = (0);
while(true){
if((i__29497_29531 < count__29496_29530)){
var vec__29504_29532 = cljs.core._nth.call(null,chunk__29495_29529,i__29497_29531);
var orig_type_29533 = cljs.core.nth.call(null,vec__29504_29532,(0),null);
var f_29534 = cljs.core.nth.call(null,vec__29504_29532,(1),null);
var seq__29498_29535 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_29533,cljs.core.PersistentArrayMap.fromArray([orig_type_29533,cljs.core.identity], true, false)));
var chunk__29500_29536 = null;
var count__29501_29537 = (0);
var i__29502_29538 = (0);
while(true){
if((i__29502_29538 < count__29501_29537)){
var vec__29507_29539 = cljs.core._nth.call(null,chunk__29500_29536,i__29502_29538);
var actual_type_29540 = cljs.core.nth.call(null,vec__29507_29539,(0),null);
var factory_29541 = cljs.core.nth.call(null,vec__29507_29539,(1),null);
var canonical_f_29542 = (cljs.core.truth_(selector_29527)?cljs.core.partial.call(null,dommy.core.live_listener,elem_29526,selector_29527):cljs.core.identity).call(null,factory_29541.call(null,f_29534));
dommy.core.update_event_listeners_BANG_.call(null,elem_29526,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29527,actual_type_29540,f_29534], null),canonical_f_29542);

if(cljs.core.truth_(elem_29526.addEventListener)){
elem_29526.addEventListener(cljs.core.name.call(null,actual_type_29540),canonical_f_29542);
} else {
elem_29526.attachEvent(cljs.core.name.call(null,actual_type_29540),canonical_f_29542);
}

var G__29543 = seq__29498_29535;
var G__29544 = chunk__29500_29536;
var G__29545 = count__29501_29537;
var G__29546 = (i__29502_29538 + (1));
seq__29498_29535 = G__29543;
chunk__29500_29536 = G__29544;
count__29501_29537 = G__29545;
i__29502_29538 = G__29546;
continue;
} else {
var temp__4657__auto___29547 = cljs.core.seq.call(null,seq__29498_29535);
if(temp__4657__auto___29547){
var seq__29498_29548__$1 = temp__4657__auto___29547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29498_29548__$1)){
var c__26750__auto___29549 = cljs.core.chunk_first.call(null,seq__29498_29548__$1);
var G__29550 = cljs.core.chunk_rest.call(null,seq__29498_29548__$1);
var G__29551 = c__26750__auto___29549;
var G__29552 = cljs.core.count.call(null,c__26750__auto___29549);
var G__29553 = (0);
seq__29498_29535 = G__29550;
chunk__29500_29536 = G__29551;
count__29501_29537 = G__29552;
i__29502_29538 = G__29553;
continue;
} else {
var vec__29510_29554 = cljs.core.first.call(null,seq__29498_29548__$1);
var actual_type_29555 = cljs.core.nth.call(null,vec__29510_29554,(0),null);
var factory_29556 = cljs.core.nth.call(null,vec__29510_29554,(1),null);
var canonical_f_29557 = (cljs.core.truth_(selector_29527)?cljs.core.partial.call(null,dommy.core.live_listener,elem_29526,selector_29527):cljs.core.identity).call(null,factory_29556.call(null,f_29534));
dommy.core.update_event_listeners_BANG_.call(null,elem_29526,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29527,actual_type_29555,f_29534], null),canonical_f_29557);

if(cljs.core.truth_(elem_29526.addEventListener)){
elem_29526.addEventListener(cljs.core.name.call(null,actual_type_29555),canonical_f_29557);
} else {
elem_29526.attachEvent(cljs.core.name.call(null,actual_type_29555),canonical_f_29557);
}

var G__29558 = cljs.core.next.call(null,seq__29498_29548__$1);
var G__29559 = null;
var G__29560 = (0);
var G__29561 = (0);
seq__29498_29535 = G__29558;
chunk__29500_29536 = G__29559;
count__29501_29537 = G__29560;
i__29502_29538 = G__29561;
continue;
}
} else {
}
}
break;
}

var G__29562 = seq__29488_29528;
var G__29563 = chunk__29495_29529;
var G__29564 = count__29496_29530;
var G__29565 = (i__29497_29531 + (1));
seq__29488_29528 = G__29562;
chunk__29495_29529 = G__29563;
count__29496_29530 = G__29564;
i__29497_29531 = G__29565;
continue;
} else {
var temp__4657__auto___29566 = cljs.core.seq.call(null,seq__29488_29528);
if(temp__4657__auto___29566){
var seq__29488_29567__$1 = temp__4657__auto___29566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29488_29567__$1)){
var c__26750__auto___29568 = cljs.core.chunk_first.call(null,seq__29488_29567__$1);
var G__29569 = cljs.core.chunk_rest.call(null,seq__29488_29567__$1);
var G__29570 = c__26750__auto___29568;
var G__29571 = cljs.core.count.call(null,c__26750__auto___29568);
var G__29572 = (0);
seq__29488_29528 = G__29569;
chunk__29495_29529 = G__29570;
count__29496_29530 = G__29571;
i__29497_29531 = G__29572;
continue;
} else {
var vec__29513_29573 = cljs.core.first.call(null,seq__29488_29567__$1);
var orig_type_29574 = cljs.core.nth.call(null,vec__29513_29573,(0),null);
var f_29575 = cljs.core.nth.call(null,vec__29513_29573,(1),null);
var seq__29489_29576 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_29574,cljs.core.PersistentArrayMap.fromArray([orig_type_29574,cljs.core.identity], true, false)));
var chunk__29491_29577 = null;
var count__29492_29578 = (0);
var i__29493_29579 = (0);
while(true){
if((i__29493_29579 < count__29492_29578)){
var vec__29516_29580 = cljs.core._nth.call(null,chunk__29491_29577,i__29493_29579);
var actual_type_29581 = cljs.core.nth.call(null,vec__29516_29580,(0),null);
var factory_29582 = cljs.core.nth.call(null,vec__29516_29580,(1),null);
var canonical_f_29583 = (cljs.core.truth_(selector_29527)?cljs.core.partial.call(null,dommy.core.live_listener,elem_29526,selector_29527):cljs.core.identity).call(null,factory_29582.call(null,f_29575));
dommy.core.update_event_listeners_BANG_.call(null,elem_29526,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29527,actual_type_29581,f_29575], null),canonical_f_29583);

if(cljs.core.truth_(elem_29526.addEventListener)){
elem_29526.addEventListener(cljs.core.name.call(null,actual_type_29581),canonical_f_29583);
} else {
elem_29526.attachEvent(cljs.core.name.call(null,actual_type_29581),canonical_f_29583);
}

var G__29584 = seq__29489_29576;
var G__29585 = chunk__29491_29577;
var G__29586 = count__29492_29578;
var G__29587 = (i__29493_29579 + (1));
seq__29489_29576 = G__29584;
chunk__29491_29577 = G__29585;
count__29492_29578 = G__29586;
i__29493_29579 = G__29587;
continue;
} else {
var temp__4657__auto___29588__$1 = cljs.core.seq.call(null,seq__29489_29576);
if(temp__4657__auto___29588__$1){
var seq__29489_29589__$1 = temp__4657__auto___29588__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29489_29589__$1)){
var c__26750__auto___29590 = cljs.core.chunk_first.call(null,seq__29489_29589__$1);
var G__29591 = cljs.core.chunk_rest.call(null,seq__29489_29589__$1);
var G__29592 = c__26750__auto___29590;
var G__29593 = cljs.core.count.call(null,c__26750__auto___29590);
var G__29594 = (0);
seq__29489_29576 = G__29591;
chunk__29491_29577 = G__29592;
count__29492_29578 = G__29593;
i__29493_29579 = G__29594;
continue;
} else {
var vec__29519_29595 = cljs.core.first.call(null,seq__29489_29589__$1);
var actual_type_29596 = cljs.core.nth.call(null,vec__29519_29595,(0),null);
var factory_29597 = cljs.core.nth.call(null,vec__29519_29595,(1),null);
var canonical_f_29598 = (cljs.core.truth_(selector_29527)?cljs.core.partial.call(null,dommy.core.live_listener,elem_29526,selector_29527):cljs.core.identity).call(null,factory_29597.call(null,f_29575));
dommy.core.update_event_listeners_BANG_.call(null,elem_29526,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29527,actual_type_29596,f_29575], null),canonical_f_29598);

if(cljs.core.truth_(elem_29526.addEventListener)){
elem_29526.addEventListener(cljs.core.name.call(null,actual_type_29596),canonical_f_29598);
} else {
elem_29526.attachEvent(cljs.core.name.call(null,actual_type_29596),canonical_f_29598);
}

var G__29599 = cljs.core.next.call(null,seq__29489_29589__$1);
var G__29600 = null;
var G__29601 = (0);
var G__29602 = (0);
seq__29489_29576 = G__29599;
chunk__29491_29577 = G__29600;
count__29492_29578 = G__29601;
i__29493_29579 = G__29602;
continue;
}
} else {
}
}
break;
}

var G__29603 = cljs.core.next.call(null,seq__29488_29567__$1);
var G__29604 = null;
var G__29605 = (0);
var G__29606 = (0);
seq__29488_29528 = G__29603;
chunk__29495_29529 = G__29604;
count__29496_29530 = G__29605;
i__29497_29531 = G__29606;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq29483){
var G__29484 = cljs.core.first.call(null,seq29483);
var seq29483__$1 = cljs.core.next.call(null,seq29483);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29484,seq29483__$1);
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
var len__27014__auto___29646 = arguments.length;
var i__27015__auto___29647 = (0);
while(true){
if((i__27015__auto___29647 < len__27014__auto___29646)){
args__27021__auto__.push((arguments[i__27015__auto___29647]));

var G__29648 = (i__27015__auto___29647 + (1));
i__27015__auto___29647 = G__29648;
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

var vec__29609_29649 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_29650 = cljs.core.nth.call(null,vec__29609_29649,(0),null);
var selector_29651 = cljs.core.nth.call(null,vec__29609_29649,(1),null);
var seq__29612_29652 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__29619_29653 = null;
var count__29620_29654 = (0);
var i__29621_29655 = (0);
while(true){
if((i__29621_29655 < count__29620_29654)){
var vec__29628_29656 = cljs.core._nth.call(null,chunk__29619_29653,i__29621_29655);
var orig_type_29657 = cljs.core.nth.call(null,vec__29628_29656,(0),null);
var f_29658 = cljs.core.nth.call(null,vec__29628_29656,(1),null);
var seq__29622_29659 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_29657,cljs.core.PersistentArrayMap.fromArray([orig_type_29657,cljs.core.identity], true, false)));
var chunk__29624_29660 = null;
var count__29625_29661 = (0);
var i__29626_29662 = (0);
while(true){
if((i__29626_29662 < count__29625_29661)){
var vec__29631_29663 = cljs.core._nth.call(null,chunk__29624_29660,i__29626_29662);
var actual_type_29664 = cljs.core.nth.call(null,vec__29631_29663,(0),null);
var __29665 = cljs.core.nth.call(null,vec__29631_29663,(1),null);
var keys_29666 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29651,actual_type_29664,f_29658], null);
var canonical_f_29667 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_29650),keys_29666);
dommy.core.update_event_listeners_BANG_.call(null,elem_29650,dommy.utils.dissoc_in,keys_29666);

if(cljs.core.truth_(elem_29650.removeEventListener)){
elem_29650.removeEventListener(cljs.core.name.call(null,actual_type_29664),canonical_f_29667);
} else {
elem_29650.detachEvent(cljs.core.name.call(null,actual_type_29664),canonical_f_29667);
}

var G__29668 = seq__29622_29659;
var G__29669 = chunk__29624_29660;
var G__29670 = count__29625_29661;
var G__29671 = (i__29626_29662 + (1));
seq__29622_29659 = G__29668;
chunk__29624_29660 = G__29669;
count__29625_29661 = G__29670;
i__29626_29662 = G__29671;
continue;
} else {
var temp__4657__auto___29672 = cljs.core.seq.call(null,seq__29622_29659);
if(temp__4657__auto___29672){
var seq__29622_29673__$1 = temp__4657__auto___29672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29622_29673__$1)){
var c__26750__auto___29674 = cljs.core.chunk_first.call(null,seq__29622_29673__$1);
var G__29675 = cljs.core.chunk_rest.call(null,seq__29622_29673__$1);
var G__29676 = c__26750__auto___29674;
var G__29677 = cljs.core.count.call(null,c__26750__auto___29674);
var G__29678 = (0);
seq__29622_29659 = G__29675;
chunk__29624_29660 = G__29676;
count__29625_29661 = G__29677;
i__29626_29662 = G__29678;
continue;
} else {
var vec__29634_29679 = cljs.core.first.call(null,seq__29622_29673__$1);
var actual_type_29680 = cljs.core.nth.call(null,vec__29634_29679,(0),null);
var __29681 = cljs.core.nth.call(null,vec__29634_29679,(1),null);
var keys_29682 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29651,actual_type_29680,f_29658], null);
var canonical_f_29683 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_29650),keys_29682);
dommy.core.update_event_listeners_BANG_.call(null,elem_29650,dommy.utils.dissoc_in,keys_29682);

if(cljs.core.truth_(elem_29650.removeEventListener)){
elem_29650.removeEventListener(cljs.core.name.call(null,actual_type_29680),canonical_f_29683);
} else {
elem_29650.detachEvent(cljs.core.name.call(null,actual_type_29680),canonical_f_29683);
}

var G__29684 = cljs.core.next.call(null,seq__29622_29673__$1);
var G__29685 = null;
var G__29686 = (0);
var G__29687 = (0);
seq__29622_29659 = G__29684;
chunk__29624_29660 = G__29685;
count__29625_29661 = G__29686;
i__29626_29662 = G__29687;
continue;
}
} else {
}
}
break;
}

var G__29688 = seq__29612_29652;
var G__29689 = chunk__29619_29653;
var G__29690 = count__29620_29654;
var G__29691 = (i__29621_29655 + (1));
seq__29612_29652 = G__29688;
chunk__29619_29653 = G__29689;
count__29620_29654 = G__29690;
i__29621_29655 = G__29691;
continue;
} else {
var temp__4657__auto___29692 = cljs.core.seq.call(null,seq__29612_29652);
if(temp__4657__auto___29692){
var seq__29612_29693__$1 = temp__4657__auto___29692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29612_29693__$1)){
var c__26750__auto___29694 = cljs.core.chunk_first.call(null,seq__29612_29693__$1);
var G__29695 = cljs.core.chunk_rest.call(null,seq__29612_29693__$1);
var G__29696 = c__26750__auto___29694;
var G__29697 = cljs.core.count.call(null,c__26750__auto___29694);
var G__29698 = (0);
seq__29612_29652 = G__29695;
chunk__29619_29653 = G__29696;
count__29620_29654 = G__29697;
i__29621_29655 = G__29698;
continue;
} else {
var vec__29637_29699 = cljs.core.first.call(null,seq__29612_29693__$1);
var orig_type_29700 = cljs.core.nth.call(null,vec__29637_29699,(0),null);
var f_29701 = cljs.core.nth.call(null,vec__29637_29699,(1),null);
var seq__29613_29702 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_29700,cljs.core.PersistentArrayMap.fromArray([orig_type_29700,cljs.core.identity], true, false)));
var chunk__29615_29703 = null;
var count__29616_29704 = (0);
var i__29617_29705 = (0);
while(true){
if((i__29617_29705 < count__29616_29704)){
var vec__29640_29706 = cljs.core._nth.call(null,chunk__29615_29703,i__29617_29705);
var actual_type_29707 = cljs.core.nth.call(null,vec__29640_29706,(0),null);
var __29708 = cljs.core.nth.call(null,vec__29640_29706,(1),null);
var keys_29709 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29651,actual_type_29707,f_29701], null);
var canonical_f_29710 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_29650),keys_29709);
dommy.core.update_event_listeners_BANG_.call(null,elem_29650,dommy.utils.dissoc_in,keys_29709);

if(cljs.core.truth_(elem_29650.removeEventListener)){
elem_29650.removeEventListener(cljs.core.name.call(null,actual_type_29707),canonical_f_29710);
} else {
elem_29650.detachEvent(cljs.core.name.call(null,actual_type_29707),canonical_f_29710);
}

var G__29711 = seq__29613_29702;
var G__29712 = chunk__29615_29703;
var G__29713 = count__29616_29704;
var G__29714 = (i__29617_29705 + (1));
seq__29613_29702 = G__29711;
chunk__29615_29703 = G__29712;
count__29616_29704 = G__29713;
i__29617_29705 = G__29714;
continue;
} else {
var temp__4657__auto___29715__$1 = cljs.core.seq.call(null,seq__29613_29702);
if(temp__4657__auto___29715__$1){
var seq__29613_29716__$1 = temp__4657__auto___29715__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29613_29716__$1)){
var c__26750__auto___29717 = cljs.core.chunk_first.call(null,seq__29613_29716__$1);
var G__29718 = cljs.core.chunk_rest.call(null,seq__29613_29716__$1);
var G__29719 = c__26750__auto___29717;
var G__29720 = cljs.core.count.call(null,c__26750__auto___29717);
var G__29721 = (0);
seq__29613_29702 = G__29718;
chunk__29615_29703 = G__29719;
count__29616_29704 = G__29720;
i__29617_29705 = G__29721;
continue;
} else {
var vec__29643_29722 = cljs.core.first.call(null,seq__29613_29716__$1);
var actual_type_29723 = cljs.core.nth.call(null,vec__29643_29722,(0),null);
var __29724 = cljs.core.nth.call(null,vec__29643_29722,(1),null);
var keys_29725 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29651,actual_type_29723,f_29701], null);
var canonical_f_29726 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_29650),keys_29725);
dommy.core.update_event_listeners_BANG_.call(null,elem_29650,dommy.utils.dissoc_in,keys_29725);

if(cljs.core.truth_(elem_29650.removeEventListener)){
elem_29650.removeEventListener(cljs.core.name.call(null,actual_type_29723),canonical_f_29726);
} else {
elem_29650.detachEvent(cljs.core.name.call(null,actual_type_29723),canonical_f_29726);
}

var G__29727 = cljs.core.next.call(null,seq__29613_29716__$1);
var G__29728 = null;
var G__29729 = (0);
var G__29730 = (0);
seq__29613_29702 = G__29727;
chunk__29615_29703 = G__29728;
count__29616_29704 = G__29729;
i__29617_29705 = G__29730;
continue;
}
} else {
}
}
break;
}

var G__29731 = cljs.core.next.call(null,seq__29612_29693__$1);
var G__29732 = null;
var G__29733 = (0);
var G__29734 = (0);
seq__29612_29652 = G__29731;
chunk__29619_29653 = G__29732;
count__29620_29654 = G__29733;
i__29621_29655 = G__29734;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq29607){
var G__29608 = cljs.core.first.call(null,seq29607);
var seq29607__$1 = cljs.core.next.call(null,seq29607);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29608,seq29607__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__27021__auto__ = [];
var len__27014__auto___29750 = arguments.length;
var i__27015__auto___29751 = (0);
while(true){
if((i__27015__auto___29751 < len__27014__auto___29750)){
args__27021__auto__.push((arguments[i__27015__auto___29751]));

var G__29752 = (i__27015__auto___29751 + (1));
i__27015__auto___29751 = G__29752;
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

var vec__29737_29753 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_29754 = cljs.core.nth.call(null,vec__29737_29753,(0),null);
var selector_29755 = cljs.core.nth.call(null,vec__29737_29753,(1),null);
var seq__29740_29756 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__29741_29757 = null;
var count__29742_29758 = (0);
var i__29743_29759 = (0);
while(true){
if((i__29743_29759 < count__29742_29758)){
var vec__29744_29760 = cljs.core._nth.call(null,chunk__29741_29757,i__29743_29759);
var type_29761 = cljs.core.nth.call(null,vec__29744_29760,(0),null);
var f_29762 = cljs.core.nth.call(null,vec__29744_29760,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_29761,((function (seq__29740_29756,chunk__29741_29757,count__29742_29758,i__29743_29759,vec__29744_29760,type_29761,f_29762,vec__29737_29753,elem_29754,selector_29755){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_29761,dommy$core$this_fn);

return f_29762.call(null,e);
});})(seq__29740_29756,chunk__29741_29757,count__29742_29758,i__29743_29759,vec__29744_29760,type_29761,f_29762,vec__29737_29753,elem_29754,selector_29755))
);

var G__29763 = seq__29740_29756;
var G__29764 = chunk__29741_29757;
var G__29765 = count__29742_29758;
var G__29766 = (i__29743_29759 + (1));
seq__29740_29756 = G__29763;
chunk__29741_29757 = G__29764;
count__29742_29758 = G__29765;
i__29743_29759 = G__29766;
continue;
} else {
var temp__4657__auto___29767 = cljs.core.seq.call(null,seq__29740_29756);
if(temp__4657__auto___29767){
var seq__29740_29768__$1 = temp__4657__auto___29767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29740_29768__$1)){
var c__26750__auto___29769 = cljs.core.chunk_first.call(null,seq__29740_29768__$1);
var G__29770 = cljs.core.chunk_rest.call(null,seq__29740_29768__$1);
var G__29771 = c__26750__auto___29769;
var G__29772 = cljs.core.count.call(null,c__26750__auto___29769);
var G__29773 = (0);
seq__29740_29756 = G__29770;
chunk__29741_29757 = G__29771;
count__29742_29758 = G__29772;
i__29743_29759 = G__29773;
continue;
} else {
var vec__29747_29774 = cljs.core.first.call(null,seq__29740_29768__$1);
var type_29775 = cljs.core.nth.call(null,vec__29747_29774,(0),null);
var f_29776 = cljs.core.nth.call(null,vec__29747_29774,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_29775,((function (seq__29740_29756,chunk__29741_29757,count__29742_29758,i__29743_29759,vec__29747_29774,type_29775,f_29776,seq__29740_29768__$1,temp__4657__auto___29767,vec__29737_29753,elem_29754,selector_29755){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_29775,dommy$core$this_fn);

return f_29776.call(null,e);
});})(seq__29740_29756,chunk__29741_29757,count__29742_29758,i__29743_29759,vec__29747_29774,type_29775,f_29776,seq__29740_29768__$1,temp__4657__auto___29767,vec__29737_29753,elem_29754,selector_29755))
);

var G__29777 = cljs.core.next.call(null,seq__29740_29768__$1);
var G__29778 = null;
var G__29779 = (0);
var G__29780 = (0);
seq__29740_29756 = G__29777;
chunk__29741_29757 = G__29778;
count__29742_29758 = G__29779;
i__29743_29759 = G__29780;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq29735){
var G__29736 = cljs.core.first.call(null,seq29735);
var seq29735__$1 = cljs.core.next.call(null,seq29735);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29736,seq29735__$1);
});


//# sourceMappingURL=core.js.map?rel=1510423695246