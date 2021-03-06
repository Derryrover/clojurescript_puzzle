// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x40179_40180 = value;
x40179_40180.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x40184_40185 = value;
x40184_40185.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x40189_40190 = value;
x40189_40190.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__25927__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__25927__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__25927__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__27021__auto__ = [];
var len__27014__auto___40198 = arguments.length;
var i__27015__auto___40199 = (0);
while(true){
if((i__27015__auto___40199 < len__27014__auto___40198)){
args__27021__auto__.push((arguments[i__27015__auto___40199]));

var G__40200 = (i__27015__auto___40199 + (1));
i__27015__auto___40199 = G__40200;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((0) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27022__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__40194_40201 = cljs.core.seq.call(null,items);
var chunk__40195_40202 = null;
var count__40196_40203 = (0);
var i__40197_40204 = (0);
while(true){
if((i__40197_40204 < count__40196_40203)){
var item_40205 = cljs.core._nth.call(null,chunk__40195_40202,i__40197_40204);
if(cljs.core.some_QMARK_.call(null,item_40205)){
if(cljs.core.coll_QMARK_.call(null,item_40205)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40205)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40205));
}
} else {
}

var G__40206 = seq__40194_40201;
var G__40207 = chunk__40195_40202;
var G__40208 = count__40196_40203;
var G__40209 = (i__40197_40204 + (1));
seq__40194_40201 = G__40206;
chunk__40195_40202 = G__40207;
count__40196_40203 = G__40208;
i__40197_40204 = G__40209;
continue;
} else {
var temp__4657__auto___40210 = cljs.core.seq.call(null,seq__40194_40201);
if(temp__4657__auto___40210){
var seq__40194_40211__$1 = temp__4657__auto___40210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40194_40211__$1)){
var c__26750__auto___40212 = cljs.core.chunk_first.call(null,seq__40194_40211__$1);
var G__40213 = cljs.core.chunk_rest.call(null,seq__40194_40211__$1);
var G__40214 = c__26750__auto___40212;
var G__40215 = cljs.core.count.call(null,c__26750__auto___40212);
var G__40216 = (0);
seq__40194_40201 = G__40213;
chunk__40195_40202 = G__40214;
count__40196_40203 = G__40215;
i__40197_40204 = G__40216;
continue;
} else {
var item_40217 = cljs.core.first.call(null,seq__40194_40211__$1);
if(cljs.core.some_QMARK_.call(null,item_40217)){
if(cljs.core.coll_QMARK_.call(null,item_40217)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40217)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40217));
}
} else {
}

var G__40218 = cljs.core.next.call(null,seq__40194_40211__$1);
var G__40219 = null;
var G__40220 = (0);
var G__40221 = (0);
seq__40194_40201 = G__40218;
chunk__40195_40202 = G__40219;
count__40196_40203 = G__40220;
i__40197_40204 = G__40221;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq40193){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40193));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27021__auto__ = [];
var len__27014__auto___40229 = arguments.length;
var i__27015__auto___40230 = (0);
while(true){
if((i__27015__auto___40230 < len__27014__auto___40229)){
args__27021__auto__.push((arguments[i__27015__auto___40230]));

var G__40231 = (i__27015__auto___40230 + (1));
i__27015__auto___40230 = G__40231;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((2) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27022__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__40225_40232 = cljs.core.seq.call(null,children);
var chunk__40226_40233 = null;
var count__40227_40234 = (0);
var i__40228_40235 = (0);
while(true){
if((i__40228_40235 < count__40227_40234)){
var child_40236 = cljs.core._nth.call(null,chunk__40226_40233,i__40228_40235);
if(cljs.core.some_QMARK_.call(null,child_40236)){
if(cljs.core.coll_QMARK_.call(null,child_40236)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40236))));
} else {
var temp__4655__auto___40237 = devtools.formatters.helpers.pref.call(null,child_40236);
if(cljs.core.truth_(temp__4655__auto___40237)){
var child_value_40238 = temp__4655__auto___40237;
template.push(child_value_40238);
} else {
}
}
} else {
}

var G__40239 = seq__40225_40232;
var G__40240 = chunk__40226_40233;
var G__40241 = count__40227_40234;
var G__40242 = (i__40228_40235 + (1));
seq__40225_40232 = G__40239;
chunk__40226_40233 = G__40240;
count__40227_40234 = G__40241;
i__40228_40235 = G__40242;
continue;
} else {
var temp__4657__auto___40243 = cljs.core.seq.call(null,seq__40225_40232);
if(temp__4657__auto___40243){
var seq__40225_40244__$1 = temp__4657__auto___40243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40225_40244__$1)){
var c__26750__auto___40245 = cljs.core.chunk_first.call(null,seq__40225_40244__$1);
var G__40246 = cljs.core.chunk_rest.call(null,seq__40225_40244__$1);
var G__40247 = c__26750__auto___40245;
var G__40248 = cljs.core.count.call(null,c__26750__auto___40245);
var G__40249 = (0);
seq__40225_40232 = G__40246;
chunk__40226_40233 = G__40247;
count__40227_40234 = G__40248;
i__40228_40235 = G__40249;
continue;
} else {
var child_40250 = cljs.core.first.call(null,seq__40225_40244__$1);
if(cljs.core.some_QMARK_.call(null,child_40250)){
if(cljs.core.coll_QMARK_.call(null,child_40250)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40250))));
} else {
var temp__4655__auto___40251 = devtools.formatters.helpers.pref.call(null,child_40250);
if(cljs.core.truth_(temp__4655__auto___40251)){
var child_value_40252 = temp__4655__auto___40251;
template.push(child_value_40252);
} else {
}
}
} else {
}

var G__40253 = cljs.core.next.call(null,seq__40225_40244__$1);
var G__40254 = null;
var G__40255 = (0);
var G__40256 = (0);
seq__40225_40232 = G__40253;
chunk__40226_40233 = G__40254;
count__40227_40234 = G__40255;
i__40228_40235 = G__40256;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq40222){
var G__40223 = cljs.core.first.call(null,seq40222);
var seq40222__$1 = cljs.core.next.call(null,seq40222);
var G__40224 = cljs.core.first.call(null,seq40222__$1);
var seq40222__$2 = cljs.core.next.call(null,seq40222__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__40223,G__40224,seq40222__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27021__auto__ = [];
var len__27014__auto___40259 = arguments.length;
var i__27015__auto___40260 = (0);
while(true){
if((i__27015__auto___40260 < len__27014__auto___40259)){
args__27021__auto__.push((arguments[i__27015__auto___40260]));

var G__40261 = (i__27015__auto___40260 + (1));
i__27015__auto___40260 = G__40261;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((1) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27022__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq40257){
var G__40258 = cljs.core.first.call(null,seq40257);
var seq40257__$1 = cljs.core.next.call(null,seq40257);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40258,seq40257__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27021__auto__ = [];
var len__27014__auto___40264 = arguments.length;
var i__27015__auto___40265 = (0);
while(true){
if((i__27015__auto___40265 < len__27014__auto___40264)){
args__27021__auto__.push((arguments[i__27015__auto___40265]));

var G__40266 = (i__27015__auto___40265 + (1));
i__27015__auto___40265 = G__40266;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((1) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27022__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq40262){
var G__40263 = cljs.core.first.call(null,seq40262);
var seq40262__$1 = cljs.core.next.call(null,seq40262);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40263,seq40262__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args40267 = [];
var len__27014__auto___40272 = arguments.length;
var i__27015__auto___40273 = (0);
while(true){
if((i__27015__auto___40273 < len__27014__auto___40272)){
args40267.push((arguments[i__27015__auto___40273]));

var G__40274 = (i__27015__auto___40273 + (1));
i__27015__auto___40273 = G__40274;
continue;
} else {
}
break;
}

var G__40269 = args40267.length;
switch (G__40269) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40267.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj40271 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25939__auto__ = start_index;
if(cljs.core.truth_(or__25939__auto__)){
return or__25939__auto__;
} else {
return (0);
}
})()};
return obj40271;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__27021__auto__ = [];
var len__27014__auto___40282 = arguments.length;
var i__27015__auto___40283 = (0);
while(true){
if((i__27015__auto___40283 < len__27014__auto___40282)){
args__27021__auto__.push((arguments[i__27015__auto___40283]));

var G__40284 = (i__27015__auto___40283 + (1));
i__27015__auto___40283 = G__40284;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((1) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27022__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40278){
var vec__40279 = p__40278;
var state_override_fn = cljs.core.nth.call(null,vec__40279,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq40276){
var G__40277 = cljs.core.first.call(null,seq40276);
var seq40276__$1 = cljs.core.next.call(null,seq40276);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__40277,seq40276__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__26925__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40288_40291 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40289_40292 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40288_40291,_STAR_print_fn_STAR_40289_40292,sb__26925__auto__){
return (function (x__26926__auto__){
return sb__26925__auto__.append(x__26926__auto__);
});})(_STAR_print_newline_STAR_40288_40291,_STAR_print_fn_STAR_40289_40292,sb__26925__auto__))
;

try{var _STAR_print_level_STAR_40290_40293 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40290_40293;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40289_40292;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40288_40291;
}
return [cljs.core.str(sb__26925__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_40295 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40295;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__40297 = name;
switch (G__40297) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__40302 = tag;
var html_tag = cljs.core.nth.call(null,vec__40302,(0),null);
var style = cljs.core.nth.call(null,vec__40302,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_40306 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40306;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_40309 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_40310 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40310;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_40309;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__40311 = initial_value;
var G__40312 = value.call(null);
initial_value = G__40311;
value = G__40312;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__40313 = initial_value;
var G__40314 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__40313;
value = G__40314;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__40315 = initial_value;
var G__40316 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__40315;
value = G__40316;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1510423704737