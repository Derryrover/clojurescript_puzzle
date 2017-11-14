// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36600 = [];
var len__27014__auto___36603 = arguments.length;
var i__27015__auto___36604 = (0);
while(true){
if((i__27015__auto___36604 < len__27014__auto___36603)){
args36600.push((arguments[i__27015__auto___36604]));

var G__36605 = (i__27015__auto___36604 + (1));
i__27015__auto___36604 = G__36605;
continue;
} else {
}
break;
}

var G__36602 = args36600.length;
switch (G__36602) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36600.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27021__auto__ = [];
var len__27014__auto___36608 = arguments.length;
var i__27015__auto___36609 = (0);
while(true){
if((i__27015__auto___36609 < len__27014__auto___36608)){
args__27021__auto__.push((arguments[i__27015__auto___36609]));

var G__36610 = (i__27015__auto___36609 + (1));
i__27015__auto___36609 = G__36610;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((0) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27022__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36607){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36607));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27021__auto__ = [];
var len__27014__auto___36612 = arguments.length;
var i__27015__auto___36613 = (0);
while(true){
if((i__27015__auto___36613 < len__27014__auto___36612)){
args__27021__auto__.push((arguments[i__27015__auto___36613]));

var G__36614 = (i__27015__auto___36613 + (1));
i__27015__auto___36613 = G__36614;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((0) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27022__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36611){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36611));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36615){
var map__36618 = p__36615;
var map__36618__$1 = ((((!((map__36618 == null)))?((((map__36618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36618):map__36618);
var message = cljs.core.get.call(null,map__36618__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36618__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25939__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25939__auto__)){
return or__25939__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25927__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25927__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25927__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30902__auto___36780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto___36780,ch){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto___36780,ch){
return (function (state_36749){
var state_val_36750 = (state_36749[(1)]);
if((state_val_36750 === (7))){
var inst_36745 = (state_36749[(2)]);
var state_36749__$1 = state_36749;
var statearr_36751_36781 = state_36749__$1;
(statearr_36751_36781[(2)] = inst_36745);

(statearr_36751_36781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36750 === (1))){
var state_36749__$1 = state_36749;
var statearr_36752_36782 = state_36749__$1;
(statearr_36752_36782[(2)] = null);

(statearr_36752_36782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36750 === (4))){
var inst_36702 = (state_36749[(7)]);
var inst_36702__$1 = (state_36749[(2)]);
var state_36749__$1 = (function (){var statearr_36753 = state_36749;
(statearr_36753[(7)] = inst_36702__$1);

return statearr_36753;
})();
if(cljs.core.truth_(inst_36702__$1)){
var statearr_36754_36783 = state_36749__$1;
(statearr_36754_36783[(1)] = (5));

} else {
var statearr_36755_36784 = state_36749__$1;
(statearr_36755_36784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36750 === (15))){
var inst_36709 = (state_36749[(8)]);
var inst_36724 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36709);
var inst_36725 = cljs.core.first.call(null,inst_36724);
var inst_36726 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36725);
var inst_36727 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36726)].join('');
var inst_36728 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36727);
var state_36749__$1 = state_36749;
var statearr_36756_36785 = state_36749__$1;
(statearr_36756_36785[(2)] = inst_36728);

(statearr_36756_36785[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36750 === (13))){
var inst_36733 = (state_36749[(2)]);
var state_36749__$1 = state_36749;
var statearr_36757_36786 = state_36749__$1;
(statearr_36757_36786[(2)] = inst_36733);

(statearr_36757_36786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36750 === (6))){
var state_36749__$1 = state_36749;
var statearr_36758_36787 = state_36749__$1;
(statearr_36758_36787[(2)] = null);

(statearr_36758_36787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36750 === (17))){
var inst_36731 = (state_36749[(2)]);
var state_36749__$1 = state_36749;
var statearr_36759_36788 = state_36749__$1;
(statearr_36759_36788[(2)] = inst_36731);

(statearr_36759_36788[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36750 === (3))){
var inst_36747 = (state_36749[(2)]);
var state_36749__$1 = state_36749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36749__$1,inst_36747);
} else {
if((state_val_36750 === (12))){
var inst_36708 = (state_36749[(9)]);
var inst_36722 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36708,opts);
var state_36749__$1 = state_36749;
if(cljs.core.truth_(inst_36722)){
var statearr_36760_36789 = state_36749__$1;
(statearr_36760_36789[(1)] = (15));

} else {
var statearr_36761_36790 = state_36749__$1;
(statearr_36761_36790[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36750 === (2))){
var state_36749__$1 = state_36749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36749__$1,(4),ch);
} else {
if((state_val_36750 === (11))){
var inst_36709 = (state_36749[(8)]);
var inst_36714 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36715 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36709);
var inst_36716 = cljs.core.async.timeout.call(null,(1000));
var inst_36717 = [inst_36715,inst_36716];
var inst_36718 = (new cljs.core.PersistentVector(null,2,(5),inst_36714,inst_36717,null));
var state_36749__$1 = state_36749;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36749__$1,(14),inst_36718);
} else {
if((state_val_36750 === (9))){
var inst_36709 = (state_36749[(8)]);
var inst_36735 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36736 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36709);
var inst_36737 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36736);
var inst_36738 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36737)].join('');
var inst_36739 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36738);
var state_36749__$1 = (function (){var statearr_36762 = state_36749;
(statearr_36762[(10)] = inst_36735);

return statearr_36762;
})();
var statearr_36763_36791 = state_36749__$1;
(statearr_36763_36791[(2)] = inst_36739);

(statearr_36763_36791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36750 === (5))){
var inst_36702 = (state_36749[(7)]);
var inst_36704 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36705 = (new cljs.core.PersistentArrayMap(null,2,inst_36704,null));
var inst_36706 = (new cljs.core.PersistentHashSet(null,inst_36705,null));
var inst_36707 = figwheel.client.focus_msgs.call(null,inst_36706,inst_36702);
var inst_36708 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36707);
var inst_36709 = cljs.core.first.call(null,inst_36707);
var inst_36710 = figwheel.client.autoload_QMARK_.call(null);
var state_36749__$1 = (function (){var statearr_36764 = state_36749;
(statearr_36764[(8)] = inst_36709);

(statearr_36764[(9)] = inst_36708);

return statearr_36764;
})();
if(cljs.core.truth_(inst_36710)){
var statearr_36765_36792 = state_36749__$1;
(statearr_36765_36792[(1)] = (8));

} else {
var statearr_36766_36793 = state_36749__$1;
(statearr_36766_36793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36750 === (14))){
var inst_36720 = (state_36749[(2)]);
var state_36749__$1 = state_36749;
var statearr_36767_36794 = state_36749__$1;
(statearr_36767_36794[(2)] = inst_36720);

(statearr_36767_36794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36750 === (16))){
var state_36749__$1 = state_36749;
var statearr_36768_36795 = state_36749__$1;
(statearr_36768_36795[(2)] = null);

(statearr_36768_36795[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36750 === (10))){
var inst_36741 = (state_36749[(2)]);
var state_36749__$1 = (function (){var statearr_36769 = state_36749;
(statearr_36769[(11)] = inst_36741);

return statearr_36769;
})();
var statearr_36770_36796 = state_36749__$1;
(statearr_36770_36796[(2)] = null);

(statearr_36770_36796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36750 === (8))){
var inst_36708 = (state_36749[(9)]);
var inst_36712 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36708,opts);
var state_36749__$1 = state_36749;
if(cljs.core.truth_(inst_36712)){
var statearr_36771_36797 = state_36749__$1;
(statearr_36771_36797[(1)] = (11));

} else {
var statearr_36772_36798 = state_36749__$1;
(statearr_36772_36798[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30902__auto___36780,ch))
;
return ((function (switch__30790__auto__,c__30902__auto___36780,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30791__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30791__auto____0 = (function (){
var statearr_36776 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36776[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30791__auto__);

(statearr_36776[(1)] = (1));

return statearr_36776;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30791__auto____1 = (function (state_36749){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_36749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e36777){if((e36777 instanceof Object)){
var ex__30794__auto__ = e36777;
var statearr_36778_36799 = state_36749;
(statearr_36778_36799[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36800 = state_36749;
state_36749 = G__36800;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30791__auto__ = function(state_36749){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30791__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30791__auto____1.call(this,state_36749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30791__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30791__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto___36780,ch))
})();
var state__30904__auto__ = (function (){var statearr_36779 = f__30903__auto__.call(null);
(statearr_36779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___36780);

return statearr_36779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto___36780,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36801_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36801_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36804 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36804){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36803){if((e36803 instanceof Error)){
var e = e36803;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36804], null));
} else {
var e = e36803;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36804))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36805){
var map__36814 = p__36805;
var map__36814__$1 = ((((!((map__36814 == null)))?((((map__36814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36814):map__36814);
var opts = map__36814__$1;
var build_id = cljs.core.get.call(null,map__36814__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36814,map__36814__$1,opts,build_id){
return (function (p__36816){
var vec__36817 = p__36816;
var seq__36818 = cljs.core.seq.call(null,vec__36817);
var first__36819 = cljs.core.first.call(null,seq__36818);
var seq__36818__$1 = cljs.core.next.call(null,seq__36818);
var map__36820 = first__36819;
var map__36820__$1 = ((((!((map__36820 == null)))?((((map__36820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36820):map__36820);
var msg = map__36820__$1;
var msg_name = cljs.core.get.call(null,map__36820__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36818__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36817,seq__36818,first__36819,seq__36818__$1,map__36820,map__36820__$1,msg,msg_name,_,map__36814,map__36814__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36817,seq__36818,first__36819,seq__36818__$1,map__36820,map__36820__$1,msg,msg_name,_,map__36814,map__36814__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36814,map__36814__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36828){
var vec__36829 = p__36828;
var seq__36830 = cljs.core.seq.call(null,vec__36829);
var first__36831 = cljs.core.first.call(null,seq__36830);
var seq__36830__$1 = cljs.core.next.call(null,seq__36830);
var map__36832 = first__36831;
var map__36832__$1 = ((((!((map__36832 == null)))?((((map__36832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36832):map__36832);
var msg = map__36832__$1;
var msg_name = cljs.core.get.call(null,map__36832__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36830__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36834){
var map__36846 = p__36834;
var map__36846__$1 = ((((!((map__36846 == null)))?((((map__36846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36846):map__36846);
var on_compile_warning = cljs.core.get.call(null,map__36846__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36846__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36846,map__36846__$1,on_compile_warning,on_compile_fail){
return (function (p__36848){
var vec__36849 = p__36848;
var seq__36850 = cljs.core.seq.call(null,vec__36849);
var first__36851 = cljs.core.first.call(null,seq__36850);
var seq__36850__$1 = cljs.core.next.call(null,seq__36850);
var map__36852 = first__36851;
var map__36852__$1 = ((((!((map__36852 == null)))?((((map__36852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36852):map__36852);
var msg = map__36852__$1;
var msg_name = cljs.core.get.call(null,map__36852__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36850__$1;
var pred__36854 = cljs.core._EQ_;
var expr__36855 = msg_name;
if(cljs.core.truth_(pred__36854.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36855))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36854.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36855))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36846,map__36846__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto__,msg_hist,msg_names,msg){
return (function (state_37083){
var state_val_37084 = (state_37083[(1)]);
if((state_val_37084 === (7))){
var inst_37003 = (state_37083[(2)]);
var state_37083__$1 = state_37083;
if(cljs.core.truth_(inst_37003)){
var statearr_37085_37135 = state_37083__$1;
(statearr_37085_37135[(1)] = (8));

} else {
var statearr_37086_37136 = state_37083__$1;
(statearr_37086_37136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (20))){
var inst_37077 = (state_37083[(2)]);
var state_37083__$1 = state_37083;
var statearr_37087_37137 = state_37083__$1;
(statearr_37087_37137[(2)] = inst_37077);

(statearr_37087_37137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (27))){
var inst_37073 = (state_37083[(2)]);
var state_37083__$1 = state_37083;
var statearr_37088_37138 = state_37083__$1;
(statearr_37088_37138[(2)] = inst_37073);

(statearr_37088_37138[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (1))){
var inst_36996 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37083__$1 = state_37083;
if(cljs.core.truth_(inst_36996)){
var statearr_37089_37139 = state_37083__$1;
(statearr_37089_37139[(1)] = (2));

} else {
var statearr_37090_37140 = state_37083__$1;
(statearr_37090_37140[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (24))){
var inst_37075 = (state_37083[(2)]);
var state_37083__$1 = state_37083;
var statearr_37091_37141 = state_37083__$1;
(statearr_37091_37141[(2)] = inst_37075);

(statearr_37091_37141[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (4))){
var inst_37081 = (state_37083[(2)]);
var state_37083__$1 = state_37083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37083__$1,inst_37081);
} else {
if((state_val_37084 === (15))){
var inst_37079 = (state_37083[(2)]);
var state_37083__$1 = state_37083;
var statearr_37092_37142 = state_37083__$1;
(statearr_37092_37142[(2)] = inst_37079);

(statearr_37092_37142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (21))){
var inst_37032 = (state_37083[(2)]);
var inst_37033 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37034 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37033);
var state_37083__$1 = (function (){var statearr_37093 = state_37083;
(statearr_37093[(7)] = inst_37032);

return statearr_37093;
})();
var statearr_37094_37143 = state_37083__$1;
(statearr_37094_37143[(2)] = inst_37034);

(statearr_37094_37143[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (31))){
var inst_37062 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37083__$1 = state_37083;
if(cljs.core.truth_(inst_37062)){
var statearr_37095_37144 = state_37083__$1;
(statearr_37095_37144[(1)] = (34));

} else {
var statearr_37096_37145 = state_37083__$1;
(statearr_37096_37145[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (32))){
var inst_37071 = (state_37083[(2)]);
var state_37083__$1 = state_37083;
var statearr_37097_37146 = state_37083__$1;
(statearr_37097_37146[(2)] = inst_37071);

(statearr_37097_37146[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (33))){
var inst_37058 = (state_37083[(2)]);
var inst_37059 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37060 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37059);
var state_37083__$1 = (function (){var statearr_37098 = state_37083;
(statearr_37098[(8)] = inst_37058);

return statearr_37098;
})();
var statearr_37099_37147 = state_37083__$1;
(statearr_37099_37147[(2)] = inst_37060);

(statearr_37099_37147[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (13))){
var inst_37017 = figwheel.client.heads_up.clear.call(null);
var state_37083__$1 = state_37083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37083__$1,(16),inst_37017);
} else {
if((state_val_37084 === (22))){
var inst_37038 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37039 = figwheel.client.heads_up.append_warning_message.call(null,inst_37038);
var state_37083__$1 = state_37083;
var statearr_37100_37148 = state_37083__$1;
(statearr_37100_37148[(2)] = inst_37039);

(statearr_37100_37148[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (36))){
var inst_37069 = (state_37083[(2)]);
var state_37083__$1 = state_37083;
var statearr_37101_37149 = state_37083__$1;
(statearr_37101_37149[(2)] = inst_37069);

(statearr_37101_37149[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (29))){
var inst_37049 = (state_37083[(2)]);
var inst_37050 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37051 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37050);
var state_37083__$1 = (function (){var statearr_37102 = state_37083;
(statearr_37102[(9)] = inst_37049);

return statearr_37102;
})();
var statearr_37103_37150 = state_37083__$1;
(statearr_37103_37150[(2)] = inst_37051);

(statearr_37103_37150[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (6))){
var inst_36998 = (state_37083[(10)]);
var state_37083__$1 = state_37083;
var statearr_37104_37151 = state_37083__$1;
(statearr_37104_37151[(2)] = inst_36998);

(statearr_37104_37151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (28))){
var inst_37045 = (state_37083[(2)]);
var inst_37046 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37047 = figwheel.client.heads_up.display_warning.call(null,inst_37046);
var state_37083__$1 = (function (){var statearr_37105 = state_37083;
(statearr_37105[(11)] = inst_37045);

return statearr_37105;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37083__$1,(29),inst_37047);
} else {
if((state_val_37084 === (25))){
var inst_37043 = figwheel.client.heads_up.clear.call(null);
var state_37083__$1 = state_37083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37083__$1,(28),inst_37043);
} else {
if((state_val_37084 === (34))){
var inst_37064 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37083__$1 = state_37083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37083__$1,(37),inst_37064);
} else {
if((state_val_37084 === (17))){
var inst_37023 = (state_37083[(2)]);
var inst_37024 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37025 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37024);
var state_37083__$1 = (function (){var statearr_37106 = state_37083;
(statearr_37106[(12)] = inst_37023);

return statearr_37106;
})();
var statearr_37107_37152 = state_37083__$1;
(statearr_37107_37152[(2)] = inst_37025);

(statearr_37107_37152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (3))){
var inst_37015 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37083__$1 = state_37083;
if(cljs.core.truth_(inst_37015)){
var statearr_37108_37153 = state_37083__$1;
(statearr_37108_37153[(1)] = (13));

} else {
var statearr_37109_37154 = state_37083__$1;
(statearr_37109_37154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (12))){
var inst_37011 = (state_37083[(2)]);
var state_37083__$1 = state_37083;
var statearr_37110_37155 = state_37083__$1;
(statearr_37110_37155[(2)] = inst_37011);

(statearr_37110_37155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (2))){
var inst_36998 = (state_37083[(10)]);
var inst_36998__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37083__$1 = (function (){var statearr_37111 = state_37083;
(statearr_37111[(10)] = inst_36998__$1);

return statearr_37111;
})();
if(cljs.core.truth_(inst_36998__$1)){
var statearr_37112_37156 = state_37083__$1;
(statearr_37112_37156[(1)] = (5));

} else {
var statearr_37113_37157 = state_37083__$1;
(statearr_37113_37157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (23))){
var inst_37041 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37083__$1 = state_37083;
if(cljs.core.truth_(inst_37041)){
var statearr_37114_37158 = state_37083__$1;
(statearr_37114_37158[(1)] = (25));

} else {
var statearr_37115_37159 = state_37083__$1;
(statearr_37115_37159[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (35))){
var state_37083__$1 = state_37083;
var statearr_37116_37160 = state_37083__$1;
(statearr_37116_37160[(2)] = null);

(statearr_37116_37160[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (19))){
var inst_37036 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37083__$1 = state_37083;
if(cljs.core.truth_(inst_37036)){
var statearr_37117_37161 = state_37083__$1;
(statearr_37117_37161[(1)] = (22));

} else {
var statearr_37118_37162 = state_37083__$1;
(statearr_37118_37162[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (11))){
var inst_37007 = (state_37083[(2)]);
var state_37083__$1 = state_37083;
var statearr_37119_37163 = state_37083__$1;
(statearr_37119_37163[(2)] = inst_37007);

(statearr_37119_37163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (9))){
var inst_37009 = figwheel.client.heads_up.clear.call(null);
var state_37083__$1 = state_37083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37083__$1,(12),inst_37009);
} else {
if((state_val_37084 === (5))){
var inst_37000 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37083__$1 = state_37083;
var statearr_37120_37164 = state_37083__$1;
(statearr_37120_37164[(2)] = inst_37000);

(statearr_37120_37164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (14))){
var inst_37027 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37083__$1 = state_37083;
if(cljs.core.truth_(inst_37027)){
var statearr_37121_37165 = state_37083__$1;
(statearr_37121_37165[(1)] = (18));

} else {
var statearr_37122_37166 = state_37083__$1;
(statearr_37122_37166[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (26))){
var inst_37053 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37083__$1 = state_37083;
if(cljs.core.truth_(inst_37053)){
var statearr_37123_37167 = state_37083__$1;
(statearr_37123_37167[(1)] = (30));

} else {
var statearr_37124_37168 = state_37083__$1;
(statearr_37124_37168[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (16))){
var inst_37019 = (state_37083[(2)]);
var inst_37020 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37021 = figwheel.client.heads_up.display_exception.call(null,inst_37020);
var state_37083__$1 = (function (){var statearr_37125 = state_37083;
(statearr_37125[(13)] = inst_37019);

return statearr_37125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37083__$1,(17),inst_37021);
} else {
if((state_val_37084 === (30))){
var inst_37055 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37056 = figwheel.client.heads_up.display_warning.call(null,inst_37055);
var state_37083__$1 = state_37083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37083__$1,(33),inst_37056);
} else {
if((state_val_37084 === (10))){
var inst_37013 = (state_37083[(2)]);
var state_37083__$1 = state_37083;
var statearr_37126_37169 = state_37083__$1;
(statearr_37126_37169[(2)] = inst_37013);

(statearr_37126_37169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (18))){
var inst_37029 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37030 = figwheel.client.heads_up.display_exception.call(null,inst_37029);
var state_37083__$1 = state_37083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37083__$1,(21),inst_37030);
} else {
if((state_val_37084 === (37))){
var inst_37066 = (state_37083[(2)]);
var state_37083__$1 = state_37083;
var statearr_37127_37170 = state_37083__$1;
(statearr_37127_37170[(2)] = inst_37066);

(statearr_37127_37170[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37084 === (8))){
var inst_37005 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37083__$1 = state_37083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37083__$1,(11),inst_37005);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30902__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30790__auto__,c__30902__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30791__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30791__auto____0 = (function (){
var statearr_37131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37131[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30791__auto__);

(statearr_37131[(1)] = (1));

return statearr_37131;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30791__auto____1 = (function (state_37083){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_37083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e37132){if((e37132 instanceof Object)){
var ex__30794__auto__ = e37132;
var statearr_37133_37171 = state_37083;
(statearr_37133_37171[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37172 = state_37083;
state_37083 = G__37172;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30791__auto__ = function(state_37083){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30791__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30791__auto____1.call(this,state_37083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30791__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30791__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto__,msg_hist,msg_names,msg))
})();
var state__30904__auto__ = (function (){var statearr_37134 = f__30903__auto__.call(null);
(statearr_37134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto__);

return statearr_37134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto__,msg_hist,msg_names,msg))
);

return c__30902__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30902__auto___37235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto___37235,ch){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto___37235,ch){
return (function (state_37218){
var state_val_37219 = (state_37218[(1)]);
if((state_val_37219 === (1))){
var state_37218__$1 = state_37218;
var statearr_37220_37236 = state_37218__$1;
(statearr_37220_37236[(2)] = null);

(statearr_37220_37236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37219 === (2))){
var state_37218__$1 = state_37218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37218__$1,(4),ch);
} else {
if((state_val_37219 === (3))){
var inst_37216 = (state_37218[(2)]);
var state_37218__$1 = state_37218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37218__$1,inst_37216);
} else {
if((state_val_37219 === (4))){
var inst_37206 = (state_37218[(7)]);
var inst_37206__$1 = (state_37218[(2)]);
var state_37218__$1 = (function (){var statearr_37221 = state_37218;
(statearr_37221[(7)] = inst_37206__$1);

return statearr_37221;
})();
if(cljs.core.truth_(inst_37206__$1)){
var statearr_37222_37237 = state_37218__$1;
(statearr_37222_37237[(1)] = (5));

} else {
var statearr_37223_37238 = state_37218__$1;
(statearr_37223_37238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37219 === (5))){
var inst_37206 = (state_37218[(7)]);
var inst_37208 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37206);
var state_37218__$1 = state_37218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37218__$1,(8),inst_37208);
} else {
if((state_val_37219 === (6))){
var state_37218__$1 = state_37218;
var statearr_37224_37239 = state_37218__$1;
(statearr_37224_37239[(2)] = null);

(statearr_37224_37239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37219 === (7))){
var inst_37214 = (state_37218[(2)]);
var state_37218__$1 = state_37218;
var statearr_37225_37240 = state_37218__$1;
(statearr_37225_37240[(2)] = inst_37214);

(statearr_37225_37240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37219 === (8))){
var inst_37210 = (state_37218[(2)]);
var state_37218__$1 = (function (){var statearr_37226 = state_37218;
(statearr_37226[(8)] = inst_37210);

return statearr_37226;
})();
var statearr_37227_37241 = state_37218__$1;
(statearr_37227_37241[(2)] = null);

(statearr_37227_37241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__30902__auto___37235,ch))
;
return ((function (switch__30790__auto__,c__30902__auto___37235,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30791__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30791__auto____0 = (function (){
var statearr_37231 = [null,null,null,null,null,null,null,null,null];
(statearr_37231[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30791__auto__);

(statearr_37231[(1)] = (1));

return statearr_37231;
});
var figwheel$client$heads_up_plugin_$_state_machine__30791__auto____1 = (function (state_37218){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_37218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e37232){if((e37232 instanceof Object)){
var ex__30794__auto__ = e37232;
var statearr_37233_37242 = state_37218;
(statearr_37233_37242[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37243 = state_37218;
state_37218 = G__37243;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30791__auto__ = function(state_37218){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30791__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30791__auto____1.call(this,state_37218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30791__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30791__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto___37235,ch))
})();
var state__30904__auto__ = (function (){var statearr_37234 = f__30903__auto__.call(null);
(statearr_37234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___37235);

return statearr_37234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto___37235,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto__){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto__){
return (function (state_37264){
var state_val_37265 = (state_37264[(1)]);
if((state_val_37265 === (1))){
var inst_37259 = cljs.core.async.timeout.call(null,(3000));
var state_37264__$1 = state_37264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37264__$1,(2),inst_37259);
} else {
if((state_val_37265 === (2))){
var inst_37261 = (state_37264[(2)]);
var inst_37262 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37264__$1 = (function (){var statearr_37266 = state_37264;
(statearr_37266[(7)] = inst_37261);

return statearr_37266;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37264__$1,inst_37262);
} else {
return null;
}
}
});})(c__30902__auto__))
;
return ((function (switch__30790__auto__,c__30902__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30791__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30791__auto____0 = (function (){
var statearr_37270 = [null,null,null,null,null,null,null,null];
(statearr_37270[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30791__auto__);

(statearr_37270[(1)] = (1));

return statearr_37270;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30791__auto____1 = (function (state_37264){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_37264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e37271){if((e37271 instanceof Object)){
var ex__30794__auto__ = e37271;
var statearr_37272_37274 = state_37264;
(statearr_37272_37274[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37275 = state_37264;
state_37264 = G__37275;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30791__auto__ = function(state_37264){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30791__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30791__auto____1.call(this,state_37264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30791__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30791__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto__))
})();
var state__30904__auto__ = (function (){var statearr_37273 = f__30903__auto__.call(null);
(statearr_37273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto__);

return statearr_37273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto__))
);

return c__30902__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37298){
var state_val_37299 = (state_37298[(1)]);
if((state_val_37299 === (1))){
var inst_37292 = cljs.core.async.timeout.call(null,(2000));
var state_37298__$1 = state_37298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37298__$1,(2),inst_37292);
} else {
if((state_val_37299 === (2))){
var inst_37294 = (state_37298[(2)]);
var inst_37295 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37296 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37295);
var state_37298__$1 = (function (){var statearr_37300 = state_37298;
(statearr_37300[(7)] = inst_37294);

return statearr_37300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37298__$1,inst_37296);
} else {
return null;
}
}
});})(c__30902__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30790__auto__,c__30902__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30791__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30791__auto____0 = (function (){
var statearr_37304 = [null,null,null,null,null,null,null,null];
(statearr_37304[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30791__auto__);

(statearr_37304[(1)] = (1));

return statearr_37304;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30791__auto____1 = (function (state_37298){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_37298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e37305){if((e37305 instanceof Object)){
var ex__30794__auto__ = e37305;
var statearr_37306_37308 = state_37298;
(statearr_37306_37308[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37309 = state_37298;
state_37298 = G__37309;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30791__auto__ = function(state_37298){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30791__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30791__auto____1.call(this,state_37298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30791__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30791__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30904__auto__ = (function (){var statearr_37307 = f__30903__auto__.call(null);
(statearr_37307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto__);

return statearr_37307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto__,figwheel_version,temp__4657__auto__))
);

return c__30902__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37310){
var map__37314 = p__37310;
var map__37314__$1 = ((((!((map__37314 == null)))?((((map__37314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37314):map__37314);
var file = cljs.core.get.call(null,map__37314__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37314__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37314__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37316 = "";
var G__37316__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37316),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37316);
var G__37316__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37316__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37316__$1);
if(cljs.core.truth_((function (){var and__25927__auto__ = line;
if(cljs.core.truth_(and__25927__auto__)){
return column;
} else {
return and__25927__auto__;
}
})())){
return [cljs.core.str(G__37316__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37316__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37317){
var map__37324 = p__37317;
var map__37324__$1 = ((((!((map__37324 == null)))?((((map__37324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37324):map__37324);
var ed = map__37324__$1;
var formatted_exception = cljs.core.get.call(null,map__37324__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37324__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37324__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37326_37330 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37327_37331 = null;
var count__37328_37332 = (0);
var i__37329_37333 = (0);
while(true){
if((i__37329_37333 < count__37328_37332)){
var msg_37334 = cljs.core._nth.call(null,chunk__37327_37331,i__37329_37333);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37334);

var G__37335 = seq__37326_37330;
var G__37336 = chunk__37327_37331;
var G__37337 = count__37328_37332;
var G__37338 = (i__37329_37333 + (1));
seq__37326_37330 = G__37335;
chunk__37327_37331 = G__37336;
count__37328_37332 = G__37337;
i__37329_37333 = G__37338;
continue;
} else {
var temp__4657__auto___37339 = cljs.core.seq.call(null,seq__37326_37330);
if(temp__4657__auto___37339){
var seq__37326_37340__$1 = temp__4657__auto___37339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37326_37340__$1)){
var c__26750__auto___37341 = cljs.core.chunk_first.call(null,seq__37326_37340__$1);
var G__37342 = cljs.core.chunk_rest.call(null,seq__37326_37340__$1);
var G__37343 = c__26750__auto___37341;
var G__37344 = cljs.core.count.call(null,c__26750__auto___37341);
var G__37345 = (0);
seq__37326_37330 = G__37342;
chunk__37327_37331 = G__37343;
count__37328_37332 = G__37344;
i__37329_37333 = G__37345;
continue;
} else {
var msg_37346 = cljs.core.first.call(null,seq__37326_37340__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37346);

var G__37347 = cljs.core.next.call(null,seq__37326_37340__$1);
var G__37348 = null;
var G__37349 = (0);
var G__37350 = (0);
seq__37326_37330 = G__37347;
chunk__37327_37331 = G__37348;
count__37328_37332 = G__37349;
i__37329_37333 = G__37350;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37351){
var map__37354 = p__37351;
var map__37354__$1 = ((((!((map__37354 == null)))?((((map__37354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37354):map__37354);
var w = map__37354__$1;
var message = cljs.core.get.call(null,map__37354__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25927__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25927__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25927__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37366 = cljs.core.seq.call(null,plugins);
var chunk__37367 = null;
var count__37368 = (0);
var i__37369 = (0);
while(true){
if((i__37369 < count__37368)){
var vec__37370 = cljs.core._nth.call(null,chunk__37367,i__37369);
var k = cljs.core.nth.call(null,vec__37370,(0),null);
var plugin = cljs.core.nth.call(null,vec__37370,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37376 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37366,chunk__37367,count__37368,i__37369,pl_37376,vec__37370,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37376.call(null,msg_hist);
});})(seq__37366,chunk__37367,count__37368,i__37369,pl_37376,vec__37370,k,plugin))
);
} else {
}

var G__37377 = seq__37366;
var G__37378 = chunk__37367;
var G__37379 = count__37368;
var G__37380 = (i__37369 + (1));
seq__37366 = G__37377;
chunk__37367 = G__37378;
count__37368 = G__37379;
i__37369 = G__37380;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37366);
if(temp__4657__auto__){
var seq__37366__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37366__$1)){
var c__26750__auto__ = cljs.core.chunk_first.call(null,seq__37366__$1);
var G__37381 = cljs.core.chunk_rest.call(null,seq__37366__$1);
var G__37382 = c__26750__auto__;
var G__37383 = cljs.core.count.call(null,c__26750__auto__);
var G__37384 = (0);
seq__37366 = G__37381;
chunk__37367 = G__37382;
count__37368 = G__37383;
i__37369 = G__37384;
continue;
} else {
var vec__37373 = cljs.core.first.call(null,seq__37366__$1);
var k = cljs.core.nth.call(null,vec__37373,(0),null);
var plugin = cljs.core.nth.call(null,vec__37373,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37385 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37366,chunk__37367,count__37368,i__37369,pl_37385,vec__37373,k,plugin,seq__37366__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37385.call(null,msg_hist);
});})(seq__37366,chunk__37367,count__37368,i__37369,pl_37385,vec__37373,k,plugin,seq__37366__$1,temp__4657__auto__))
);
} else {
}

var G__37386 = cljs.core.next.call(null,seq__37366__$1);
var G__37387 = null;
var G__37388 = (0);
var G__37389 = (0);
seq__37366 = G__37386;
chunk__37367 = G__37387;
count__37368 = G__37388;
i__37369 = G__37389;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37390 = [];
var len__27014__auto___37397 = arguments.length;
var i__27015__auto___37398 = (0);
while(true){
if((i__27015__auto___37398 < len__27014__auto___37397)){
args37390.push((arguments[i__27015__auto___37398]));

var G__37399 = (i__27015__auto___37398 + (1));
i__27015__auto___37398 = G__37399;
continue;
} else {
}
break;
}

var G__37392 = args37390.length;
switch (G__37392) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37390.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37393_37401 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37394_37402 = null;
var count__37395_37403 = (0);
var i__37396_37404 = (0);
while(true){
if((i__37396_37404 < count__37395_37403)){
var msg_37405 = cljs.core._nth.call(null,chunk__37394_37402,i__37396_37404);
figwheel.client.socket.handle_incoming_message.call(null,msg_37405);

var G__37406 = seq__37393_37401;
var G__37407 = chunk__37394_37402;
var G__37408 = count__37395_37403;
var G__37409 = (i__37396_37404 + (1));
seq__37393_37401 = G__37406;
chunk__37394_37402 = G__37407;
count__37395_37403 = G__37408;
i__37396_37404 = G__37409;
continue;
} else {
var temp__4657__auto___37410 = cljs.core.seq.call(null,seq__37393_37401);
if(temp__4657__auto___37410){
var seq__37393_37411__$1 = temp__4657__auto___37410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37393_37411__$1)){
var c__26750__auto___37412 = cljs.core.chunk_first.call(null,seq__37393_37411__$1);
var G__37413 = cljs.core.chunk_rest.call(null,seq__37393_37411__$1);
var G__37414 = c__26750__auto___37412;
var G__37415 = cljs.core.count.call(null,c__26750__auto___37412);
var G__37416 = (0);
seq__37393_37401 = G__37413;
chunk__37394_37402 = G__37414;
count__37395_37403 = G__37415;
i__37396_37404 = G__37416;
continue;
} else {
var msg_37417 = cljs.core.first.call(null,seq__37393_37411__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37417);

var G__37418 = cljs.core.next.call(null,seq__37393_37411__$1);
var G__37419 = null;
var G__37420 = (0);
var G__37421 = (0);
seq__37393_37401 = G__37418;
chunk__37394_37402 = G__37419;
count__37395_37403 = G__37420;
i__37396_37404 = G__37421;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27021__auto__ = [];
var len__27014__auto___37426 = arguments.length;
var i__27015__auto___37427 = (0);
while(true){
if((i__27015__auto___37427 < len__27014__auto___37426)){
args__27021__auto__.push((arguments[i__27015__auto___37427]));

var G__37428 = (i__27015__auto___37427 + (1));
i__27015__auto___37427 = G__37428;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((0) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27022__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37423){
var map__37424 = p__37423;
var map__37424__$1 = ((((!((map__37424 == null)))?((((map__37424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37424):map__37424);
var opts = map__37424__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37422){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37422));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37430){if((e37430 instanceof Error)){
var e = e37430;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37430;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37434){
var map__37435 = p__37434;
var map__37435__$1 = ((((!((map__37435 == null)))?((((map__37435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37435):map__37435);
var msg_name = cljs.core.get.call(null,map__37435__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510423700435