// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__26602__auto__ = (((value == null))?null:value);
var m__26603__auto__ = (devtools.format._header[goog.typeOf(x__26602__auto__)]);
if(!((m__26603__auto__ == null))){
return m__26603__auto__.call(null,value);
} else {
var m__26603__auto____$1 = (devtools.format._header["_"]);
if(!((m__26603__auto____$1 == null))){
return m__26603__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__26602__auto__ = (((value == null))?null:value);
var m__26603__auto__ = (devtools.format._has_body[goog.typeOf(x__26602__auto__)]);
if(!((m__26603__auto__ == null))){
return m__26603__auto__.call(null,value);
} else {
var m__26603__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__26603__auto____$1 == null))){
return m__26603__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__26602__auto__ = (((value == null))?null:value);
var m__26603__auto__ = (devtools.format._body[goog.typeOf(x__26602__auto__)]);
if(!((m__26603__auto__ == null))){
return m__26603__auto__.call(null,value);
} else {
var m__26603__auto____$1 = (devtools.format._body["_"]);
if(!((m__26603__auto____$1 == null))){
return m__26603__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37358__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37358__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37358__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37358__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37357__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37357__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37358__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37358__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37358__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37358__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37357__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37357__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37358__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37358__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37358__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37358__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37357__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37357__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37358__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37358__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37358__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37358__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37357__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37357__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37358__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37358__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37358__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37358__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37357__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37357__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37358__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37358__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37358__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37358__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37357__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37357__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37358__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37358__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37358__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37358__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37357__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37357__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__27021__auto__ = [];
var len__27014__auto___50304 = arguments.length;
var i__27015__auto___50305 = (0);
while(true){
if((i__27015__auto___50305 < len__27014__auto___50304)){
args__27021__auto__.push((arguments[i__27015__auto___50305]));

var G__50306 = (i__27015__auto___50305 + (1));
i__27015__auto___50305 = G__50306;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((0) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__27022__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq50303){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50303));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27021__auto__ = [];
var len__27014__auto___50308 = arguments.length;
var i__27015__auto___50309 = (0);
while(true){
if((i__27015__auto___50309 < len__27014__auto___50308)){
args__27021__auto__.push((arguments[i__27015__auto___50309]));

var G__50310 = (i__27015__auto___50309 + (1));
i__27015__auto___50309 = G__50310;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((0) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__27022__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq50307){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50307));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27021__auto__ = [];
var len__27014__auto___50312 = arguments.length;
var i__27015__auto___50313 = (0);
while(true){
if((i__27015__auto___50313 < len__27014__auto___50312)){
args__27021__auto__.push((arguments[i__27015__auto___50313]));

var G__50314 = (i__27015__auto___50313 + (1));
i__27015__auto___50313 = G__50314;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((0) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27022__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq50311){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50311));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27021__auto__ = [];
var len__27014__auto___50316 = arguments.length;
var i__27015__auto___50317 = (0);
while(true){
if((i__27015__auto___50317 < len__27014__auto___50316)){
args__27021__auto__.push((arguments[i__27015__auto___50317]));

var G__50318 = (i__27015__auto___50317 + (1));
i__27015__auto___50317 = G__50318;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((0) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27022__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq50315){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50315));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27021__auto__ = [];
var len__27014__auto___50320 = arguments.length;
var i__27015__auto___50321 = (0);
while(true){
if((i__27015__auto___50321 < len__27014__auto___50320)){
args__27021__auto__.push((arguments[i__27015__auto___50321]));

var G__50322 = (i__27015__auto___50321 + (1));
i__27015__auto___50321 = G__50322;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((0) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__27022__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq50319){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50319));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27021__auto__ = [];
var len__27014__auto___50324 = arguments.length;
var i__27015__auto___50325 = (0);
while(true){
if((i__27015__auto___50325 < len__27014__auto___50324)){
args__27021__auto__.push((arguments[i__27015__auto___50325]));

var G__50326 = (i__27015__auto___50325 + (1));
i__27015__auto___50325 = G__50326;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((0) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__27022__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq50323){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50323));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27021__auto__ = [];
var len__27014__auto___50328 = arguments.length;
var i__27015__auto___50329 = (0);
while(true){
if((i__27015__auto___50329 < len__27014__auto___50328)){
args__27021__auto__.push((arguments[i__27015__auto___50329]));

var G__50330 = (i__27015__auto___50329 + (1));
i__27015__auto___50329 = G__50330;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((0) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27022__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq50327){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50327));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27021__auto__ = [];
var len__27014__auto___50338 = arguments.length;
var i__27015__auto___50339 = (0);
while(true){
if((i__27015__auto___50339 < len__27014__auto___50338)){
args__27021__auto__.push((arguments[i__27015__auto___50339]));

var G__50340 = (i__27015__auto___50339 + (1));
i__27015__auto___50339 = G__50340;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((1) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27022__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__50334){
var vec__50335 = p__50334;
var state_override = cljs.core.nth.call(null,vec__50335,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__50335,state_override){
return (function (p1__50331_SHARP_){
return cljs.core.merge.call(null,p1__50331_SHARP_,state_override);
});})(vec__50335,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq50332){
var G__50333 = cljs.core.first.call(null,seq50332);
var seq50332__$1 = cljs.core.next.call(null,seq50332);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__50333,seq50332__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27021__auto__ = [];
var len__27014__auto___50342 = arguments.length;
var i__27015__auto___50343 = (0);
while(true){
if((i__27015__auto___50343 < len__27014__auto___50342)){
args__27021__auto__.push((arguments[i__27015__auto___50343]));

var G__50344 = (i__27015__auto___50343 + (1));
i__27015__auto___50343 = G__50344;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((0) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__27022__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq50341){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50341));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27021__auto__ = [];
var len__27014__auto___50347 = arguments.length;
var i__27015__auto___50348 = (0);
while(true){
if((i__27015__auto___50348 < len__27014__auto___50347)){
args__27021__auto__.push((arguments[i__27015__auto___50348]));

var G__50349 = (i__27015__auto___50348 + (1));
i__27015__auto___50348 = G__50349;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((1) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27022__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq50345){
var G__50346 = cljs.core.first.call(null,seq50345);
var seq50345__$1 = cljs.core.next.call(null,seq50345);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__50346,seq50345__$1);
});


//# sourceMappingURL=format.js.map?rel=1496347453457