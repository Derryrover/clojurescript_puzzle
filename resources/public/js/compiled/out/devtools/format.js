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
var o__37465__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37465__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37465__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37465__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37464__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37464__auto__,"make_template");
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
var o__37465__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37465__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37465__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37465__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37464__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37464__auto__,"make_group");
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
var o__37465__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37465__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37465__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37465__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37464__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37464__auto__,"make_reference");
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
var o__37465__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37465__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37465__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37465__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37464__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37464__auto__,"make_surrogate");
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
var o__37465__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37465__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37465__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37465__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37464__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37464__auto__,"render_markup");
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
var o__37465__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37465__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37465__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37465__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37464__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37464__auto__,"_LT_header_GT_");
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
var o__37465__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37465__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37465__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37465__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37464__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37464__auto__,"_LT_standard_body_GT_");
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
var len__27014__auto___37497 = arguments.length;
var i__27015__auto___37498 = (0);
while(true){
if((i__27015__auto___37498 < len__27014__auto___37497)){
args__27021__auto__.push((arguments[i__27015__auto___37498]));

var G__37499 = (i__27015__auto___37498 + (1));
i__27015__auto___37498 = G__37499;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq37496){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37496));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27021__auto__ = [];
var len__27014__auto___37501 = arguments.length;
var i__27015__auto___37502 = (0);
while(true){
if((i__27015__auto___37502 < len__27014__auto___37501)){
args__27021__auto__.push((arguments[i__27015__auto___37502]));

var G__37503 = (i__27015__auto___37502 + (1));
i__27015__auto___37502 = G__37503;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq37500){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37500));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27021__auto__ = [];
var len__27014__auto___37505 = arguments.length;
var i__27015__auto___37506 = (0);
while(true){
if((i__27015__auto___37506 < len__27014__auto___37505)){
args__27021__auto__.push((arguments[i__27015__auto___37506]));

var G__37507 = (i__27015__auto___37506 + (1));
i__27015__auto___37506 = G__37507;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq37504){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37504));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27021__auto__ = [];
var len__27014__auto___37509 = arguments.length;
var i__27015__auto___37510 = (0);
while(true){
if((i__27015__auto___37510 < len__27014__auto___37509)){
args__27021__auto__.push((arguments[i__27015__auto___37510]));

var G__37511 = (i__27015__auto___37510 + (1));
i__27015__auto___37510 = G__37511;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37508){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37508));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27021__auto__ = [];
var len__27014__auto___37513 = arguments.length;
var i__27015__auto___37514 = (0);
while(true){
if((i__27015__auto___37514 < len__27014__auto___37513)){
args__27021__auto__.push((arguments[i__27015__auto___37514]));

var G__37515 = (i__27015__auto___37514 + (1));
i__27015__auto___37514 = G__37515;
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

devtools.format.template.cljs$lang$applyTo = (function (seq37512){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37512));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27021__auto__ = [];
var len__27014__auto___37517 = arguments.length;
var i__27015__auto___37518 = (0);
while(true){
if((i__27015__auto___37518 < len__27014__auto___37517)){
args__27021__auto__.push((arguments[i__27015__auto___37518]));

var G__37519 = (i__27015__auto___37518 + (1));
i__27015__auto___37518 = G__37519;
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

devtools.format.group.cljs$lang$applyTo = (function (seq37516){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37516));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27021__auto__ = [];
var len__27014__auto___37521 = arguments.length;
var i__27015__auto___37522 = (0);
while(true){
if((i__27015__auto___37522 < len__27014__auto___37521)){
args__27021__auto__.push((arguments[i__27015__auto___37522]));

var G__37523 = (i__27015__auto___37522 + (1));
i__27015__auto___37522 = G__37523;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq37520){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37520));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27021__auto__ = [];
var len__27014__auto___37531 = arguments.length;
var i__27015__auto___37532 = (0);
while(true){
if((i__27015__auto___37532 < len__27014__auto___37531)){
args__27021__auto__.push((arguments[i__27015__auto___37532]));

var G__37533 = (i__27015__auto___37532 + (1));
i__27015__auto___37532 = G__37533;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((1) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27022__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37527){
var vec__37528 = p__37527;
var state_override = cljs.core.nth.call(null,vec__37528,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__37528,state_override){
return (function (p1__37524_SHARP_){
return cljs.core.merge.call(null,p1__37524_SHARP_,state_override);
});})(vec__37528,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq37525){
var G__37526 = cljs.core.first.call(null,seq37525);
var seq37525__$1 = cljs.core.next.call(null,seq37525);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__37526,seq37525__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27021__auto__ = [];
var len__27014__auto___37535 = arguments.length;
var i__27015__auto___37536 = (0);
while(true){
if((i__27015__auto___37536 < len__27014__auto___37535)){
args__27021__auto__.push((arguments[i__27015__auto___37536]));

var G__37537 = (i__27015__auto___37536 + (1));
i__27015__auto___37536 = G__37537;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq37534){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37534));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27021__auto__ = [];
var len__27014__auto___37540 = arguments.length;
var i__27015__auto___37541 = (0);
while(true){
if((i__27015__auto___37541 < len__27014__auto___37540)){
args__27021__auto__.push((arguments[i__27015__auto___37541]));

var G__37542 = (i__27015__auto___37541 + (1));
i__27015__auto___37541 = G__37542;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37538){
var G__37539 = cljs.core.first.call(null,seq37538);
var seq37538__$1 = cljs.core.next.call(null,seq37538);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__37539,seq37538__$1);
});


//# sourceMappingURL=format.js.map?rel=1510423700832