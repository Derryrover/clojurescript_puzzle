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
var x52590_52591 = value;
x52590_52591.devtools$protocols$IGroup$ = true;


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
var x52595_52596 = value;
x52595_52596.devtools$protocols$ITemplate$ = true;


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
var x52600_52601 = value;
x52600_52601.devtools$protocols$ISurrogate$ = true;


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
var len__27014__auto___52609 = arguments.length;
var i__27015__auto___52610 = (0);
while(true){
if((i__27015__auto___52610 < len__27014__auto___52609)){
args__27021__auto__.push((arguments[i__27015__auto___52610]));

var G__52611 = (i__27015__auto___52610 + (1));
i__27015__auto___52610 = G__52611;
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
var seq__52605_52612 = cljs.core.seq.call(null,items);
var chunk__52606_52613 = null;
var count__52607_52614 = (0);
var i__52608_52615 = (0);
while(true){
if((i__52608_52615 < count__52607_52614)){
var item_52616 = cljs.core._nth.call(null,chunk__52606_52613,i__52608_52615);
if(cljs.core.some_QMARK_.call(null,item_52616)){
if(cljs.core.coll_QMARK_.call(null,item_52616)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_52616)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_52616));
}
} else {
}

var G__52617 = seq__52605_52612;
var G__52618 = chunk__52606_52613;
var G__52619 = count__52607_52614;
var G__52620 = (i__52608_52615 + (1));
seq__52605_52612 = G__52617;
chunk__52606_52613 = G__52618;
count__52607_52614 = G__52619;
i__52608_52615 = G__52620;
continue;
} else {
var temp__4657__auto___52621 = cljs.core.seq.call(null,seq__52605_52612);
if(temp__4657__auto___52621){
var seq__52605_52622__$1 = temp__4657__auto___52621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52605_52622__$1)){
var c__26750__auto___52623 = cljs.core.chunk_first.call(null,seq__52605_52622__$1);
var G__52624 = cljs.core.chunk_rest.call(null,seq__52605_52622__$1);
var G__52625 = c__26750__auto___52623;
var G__52626 = cljs.core.count.call(null,c__26750__auto___52623);
var G__52627 = (0);
seq__52605_52612 = G__52624;
chunk__52606_52613 = G__52625;
count__52607_52614 = G__52626;
i__52608_52615 = G__52627;
continue;
} else {
var item_52628 = cljs.core.first.call(null,seq__52605_52622__$1);
if(cljs.core.some_QMARK_.call(null,item_52628)){
if(cljs.core.coll_QMARK_.call(null,item_52628)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_52628)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_52628));
}
} else {
}

var G__52629 = cljs.core.next.call(null,seq__52605_52622__$1);
var G__52630 = null;
var G__52631 = (0);
var G__52632 = (0);
seq__52605_52612 = G__52629;
chunk__52606_52613 = G__52630;
count__52607_52614 = G__52631;
i__52608_52615 = G__52632;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq52604){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52604));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27021__auto__ = [];
var len__27014__auto___52640 = arguments.length;
var i__27015__auto___52641 = (0);
while(true){
if((i__27015__auto___52641 < len__27014__auto___52640)){
args__27021__auto__.push((arguments[i__27015__auto___52641]));

var G__52642 = (i__27015__auto___52641 + (1));
i__27015__auto___52641 = G__52642;
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
var seq__52636_52643 = cljs.core.seq.call(null,children);
var chunk__52637_52644 = null;
var count__52638_52645 = (0);
var i__52639_52646 = (0);
while(true){
if((i__52639_52646 < count__52638_52645)){
var child_52647 = cljs.core._nth.call(null,chunk__52637_52644,i__52639_52646);
if(cljs.core.some_QMARK_.call(null,child_52647)){
if(cljs.core.coll_QMARK_.call(null,child_52647)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_52647))));
} else {
var temp__4655__auto___52648 = devtools.formatters.helpers.pref.call(null,child_52647);
if(cljs.core.truth_(temp__4655__auto___52648)){
var child_value_52649 = temp__4655__auto___52648;
template.push(child_value_52649);
} else {
}
}
} else {
}

var G__52650 = seq__52636_52643;
var G__52651 = chunk__52637_52644;
var G__52652 = count__52638_52645;
var G__52653 = (i__52639_52646 + (1));
seq__52636_52643 = G__52650;
chunk__52637_52644 = G__52651;
count__52638_52645 = G__52652;
i__52639_52646 = G__52653;
continue;
} else {
var temp__4657__auto___52654 = cljs.core.seq.call(null,seq__52636_52643);
if(temp__4657__auto___52654){
var seq__52636_52655__$1 = temp__4657__auto___52654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52636_52655__$1)){
var c__26750__auto___52656 = cljs.core.chunk_first.call(null,seq__52636_52655__$1);
var G__52657 = cljs.core.chunk_rest.call(null,seq__52636_52655__$1);
var G__52658 = c__26750__auto___52656;
var G__52659 = cljs.core.count.call(null,c__26750__auto___52656);
var G__52660 = (0);
seq__52636_52643 = G__52657;
chunk__52637_52644 = G__52658;
count__52638_52645 = G__52659;
i__52639_52646 = G__52660;
continue;
} else {
var child_52661 = cljs.core.first.call(null,seq__52636_52655__$1);
if(cljs.core.some_QMARK_.call(null,child_52661)){
if(cljs.core.coll_QMARK_.call(null,child_52661)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_52661))));
} else {
var temp__4655__auto___52662 = devtools.formatters.helpers.pref.call(null,child_52661);
if(cljs.core.truth_(temp__4655__auto___52662)){
var child_value_52663 = temp__4655__auto___52662;
template.push(child_value_52663);
} else {
}
}
} else {
}

var G__52664 = cljs.core.next.call(null,seq__52636_52655__$1);
var G__52665 = null;
var G__52666 = (0);
var G__52667 = (0);
seq__52636_52643 = G__52664;
chunk__52637_52644 = G__52665;
count__52638_52645 = G__52666;
i__52639_52646 = G__52667;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq52633){
var G__52634 = cljs.core.first.call(null,seq52633);
var seq52633__$1 = cljs.core.next.call(null,seq52633);
var G__52635 = cljs.core.first.call(null,seq52633__$1);
var seq52633__$2 = cljs.core.next.call(null,seq52633__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__52634,G__52635,seq52633__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27021__auto__ = [];
var len__27014__auto___52670 = arguments.length;
var i__27015__auto___52671 = (0);
while(true){
if((i__27015__auto___52671 < len__27014__auto___52670)){
args__27021__auto__.push((arguments[i__27015__auto___52671]));

var G__52672 = (i__27015__auto___52671 + (1));
i__27015__auto___52671 = G__52672;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq52668){
var G__52669 = cljs.core.first.call(null,seq52668);
var seq52668__$1 = cljs.core.next.call(null,seq52668);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52669,seq52668__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27021__auto__ = [];
var len__27014__auto___52675 = arguments.length;
var i__27015__auto___52676 = (0);
while(true){
if((i__27015__auto___52676 < len__27014__auto___52675)){
args__27021__auto__.push((arguments[i__27015__auto___52676]));

var G__52677 = (i__27015__auto___52676 + (1));
i__27015__auto___52676 = G__52677;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq52673){
var G__52674 = cljs.core.first.call(null,seq52673);
var seq52673__$1 = cljs.core.next.call(null,seq52673);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52674,seq52673__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args52678 = [];
var len__27014__auto___52683 = arguments.length;
var i__27015__auto___52684 = (0);
while(true){
if((i__27015__auto___52684 < len__27014__auto___52683)){
args52678.push((arguments[i__27015__auto___52684]));

var G__52685 = (i__27015__auto___52684 + (1));
i__27015__auto___52684 = G__52685;
continue;
} else {
}
break;
}

var G__52680 = args52678.length;
switch (G__52680) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52678.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj52682 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25939__auto__ = start_index;
if(cljs.core.truth_(or__25939__auto__)){
return or__25939__auto__;
} else {
return (0);
}
})()};
return obj52682;
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
var len__27014__auto___52693 = arguments.length;
var i__27015__auto___52694 = (0);
while(true){
if((i__27015__auto___52694 < len__27014__auto___52693)){
args__27021__auto__.push((arguments[i__27015__auto___52694]));

var G__52695 = (i__27015__auto___52694 + (1));
i__27015__auto___52694 = G__52695;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((1) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27022__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__52689){
var vec__52690 = p__52689;
var state_override_fn = cljs.core.nth.call(null,vec__52690,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq52687){
var G__52688 = cljs.core.first.call(null,seq52687);
var seq52687__$1 = cljs.core.next.call(null,seq52687);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__52688,seq52687__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__26925__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52699_52702 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52700_52703 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52699_52702,_STAR_print_fn_STAR_52700_52703,sb__26925__auto__){
return (function (x__26926__auto__){
return sb__26925__auto__.append(x__26926__auto__);
});})(_STAR_print_newline_STAR_52699_52702,_STAR_print_fn_STAR_52700_52703,sb__26925__auto__))
;

try{var _STAR_print_level_STAR_52701_52704 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_52701_52704;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52700_52703;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52699_52702;
}
return [cljs.core.str(sb__26925__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_52706 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_52706;
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
var G__52708 = name;
switch (G__52708) {
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
var vec__52713 = tag;
var html_tag = cljs.core.nth.call(null,vec__52713,(0),null);
var style = cljs.core.nth.call(null,vec__52713,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_52717 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_52717;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_52720 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_52721 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_52721;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_52720;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__52722 = initial_value;
var G__52723 = value.call(null);
initial_value = G__52722;
value = G__52723;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__52724 = initial_value;
var G__52725 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__52724;
value = G__52725;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__52726 = initial_value;
var G__52727 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__52726;
value = G__52727;
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

//# sourceMappingURL=templating.js.map?rel=1496347458722