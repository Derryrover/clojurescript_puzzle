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
var args49448 = [];
var len__27014__auto___49451 = arguments.length;
var i__27015__auto___49452 = (0);
while(true){
if((i__27015__auto___49452 < len__27014__auto___49451)){
args49448.push((arguments[i__27015__auto___49452]));

var G__49453 = (i__27015__auto___49452 + (1));
i__27015__auto___49452 = G__49453;
continue;
} else {
}
break;
}

var G__49450 = args49448.length;
switch (G__49450) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49448.length)].join('')));

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
var len__27014__auto___49456 = arguments.length;
var i__27015__auto___49457 = (0);
while(true){
if((i__27015__auto___49457 < len__27014__auto___49456)){
args__27021__auto__.push((arguments[i__27015__auto___49457]));

var G__49458 = (i__27015__auto___49457 + (1));
i__27015__auto___49457 = G__49458;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq49455){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49455));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27021__auto__ = [];
var len__27014__auto___49460 = arguments.length;
var i__27015__auto___49461 = (0);
while(true){
if((i__27015__auto___49461 < len__27014__auto___49460)){
args__27021__auto__.push((arguments[i__27015__auto___49461]));

var G__49462 = (i__27015__auto___49461 + (1));
i__27015__auto___49461 = G__49462;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq49459){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49459));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__49463){
var map__49466 = p__49463;
var map__49466__$1 = ((((!((map__49466 == null)))?((((map__49466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49466):map__49466);
var message = cljs.core.get.call(null,map__49466__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__49466__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28051__auto___49628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto___49628,ch){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto___49628,ch){
return (function (state_49597){
var state_val_49598 = (state_49597[(1)]);
if((state_val_49598 === (7))){
var inst_49593 = (state_49597[(2)]);
var state_49597__$1 = state_49597;
var statearr_49599_49629 = state_49597__$1;
(statearr_49599_49629[(2)] = inst_49593);

(statearr_49599_49629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (1))){
var state_49597__$1 = state_49597;
var statearr_49600_49630 = state_49597__$1;
(statearr_49600_49630[(2)] = null);

(statearr_49600_49630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (4))){
var inst_49550 = (state_49597[(7)]);
var inst_49550__$1 = (state_49597[(2)]);
var state_49597__$1 = (function (){var statearr_49601 = state_49597;
(statearr_49601[(7)] = inst_49550__$1);

return statearr_49601;
})();
if(cljs.core.truth_(inst_49550__$1)){
var statearr_49602_49631 = state_49597__$1;
(statearr_49602_49631[(1)] = (5));

} else {
var statearr_49603_49632 = state_49597__$1;
(statearr_49603_49632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (15))){
var inst_49557 = (state_49597[(8)]);
var inst_49572 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49557);
var inst_49573 = cljs.core.first.call(null,inst_49572);
var inst_49574 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_49573);
var inst_49575 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_49574)].join('');
var inst_49576 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_49575);
var state_49597__$1 = state_49597;
var statearr_49604_49633 = state_49597__$1;
(statearr_49604_49633[(2)] = inst_49576);

(statearr_49604_49633[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (13))){
var inst_49581 = (state_49597[(2)]);
var state_49597__$1 = state_49597;
var statearr_49605_49634 = state_49597__$1;
(statearr_49605_49634[(2)] = inst_49581);

(statearr_49605_49634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (6))){
var state_49597__$1 = state_49597;
var statearr_49606_49635 = state_49597__$1;
(statearr_49606_49635[(2)] = null);

(statearr_49606_49635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (17))){
var inst_49579 = (state_49597[(2)]);
var state_49597__$1 = state_49597;
var statearr_49607_49636 = state_49597__$1;
(statearr_49607_49636[(2)] = inst_49579);

(statearr_49607_49636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (3))){
var inst_49595 = (state_49597[(2)]);
var state_49597__$1 = state_49597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49597__$1,inst_49595);
} else {
if((state_val_49598 === (12))){
var inst_49556 = (state_49597[(9)]);
var inst_49570 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_49556,opts);
var state_49597__$1 = state_49597;
if(cljs.core.truth_(inst_49570)){
var statearr_49608_49637 = state_49597__$1;
(statearr_49608_49637[(1)] = (15));

} else {
var statearr_49609_49638 = state_49597__$1;
(statearr_49609_49638[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (2))){
var state_49597__$1 = state_49597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49597__$1,(4),ch);
} else {
if((state_val_49598 === (11))){
var inst_49557 = (state_49597[(8)]);
var inst_49562 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49563 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_49557);
var inst_49564 = cljs.core.async.timeout.call(null,(1000));
var inst_49565 = [inst_49563,inst_49564];
var inst_49566 = (new cljs.core.PersistentVector(null,2,(5),inst_49562,inst_49565,null));
var state_49597__$1 = state_49597;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49597__$1,(14),inst_49566);
} else {
if((state_val_49598 === (9))){
var inst_49557 = (state_49597[(8)]);
var inst_49583 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_49584 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49557);
var inst_49585 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49584);
var inst_49586 = [cljs.core.str("Not loading: "),cljs.core.str(inst_49585)].join('');
var inst_49587 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_49586);
var state_49597__$1 = (function (){var statearr_49610 = state_49597;
(statearr_49610[(10)] = inst_49583);

return statearr_49610;
})();
var statearr_49611_49639 = state_49597__$1;
(statearr_49611_49639[(2)] = inst_49587);

(statearr_49611_49639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (5))){
var inst_49550 = (state_49597[(7)]);
var inst_49552 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_49553 = (new cljs.core.PersistentArrayMap(null,2,inst_49552,null));
var inst_49554 = (new cljs.core.PersistentHashSet(null,inst_49553,null));
var inst_49555 = figwheel.client.focus_msgs.call(null,inst_49554,inst_49550);
var inst_49556 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_49555);
var inst_49557 = cljs.core.first.call(null,inst_49555);
var inst_49558 = figwheel.client.autoload_QMARK_.call(null);
var state_49597__$1 = (function (){var statearr_49612 = state_49597;
(statearr_49612[(9)] = inst_49556);

(statearr_49612[(8)] = inst_49557);

return statearr_49612;
})();
if(cljs.core.truth_(inst_49558)){
var statearr_49613_49640 = state_49597__$1;
(statearr_49613_49640[(1)] = (8));

} else {
var statearr_49614_49641 = state_49597__$1;
(statearr_49614_49641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (14))){
var inst_49568 = (state_49597[(2)]);
var state_49597__$1 = state_49597;
var statearr_49615_49642 = state_49597__$1;
(statearr_49615_49642[(2)] = inst_49568);

(statearr_49615_49642[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (16))){
var state_49597__$1 = state_49597;
var statearr_49616_49643 = state_49597__$1;
(statearr_49616_49643[(2)] = null);

(statearr_49616_49643[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (10))){
var inst_49589 = (state_49597[(2)]);
var state_49597__$1 = (function (){var statearr_49617 = state_49597;
(statearr_49617[(11)] = inst_49589);

return statearr_49617;
})();
var statearr_49618_49644 = state_49597__$1;
(statearr_49618_49644[(2)] = null);

(statearr_49618_49644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (8))){
var inst_49556 = (state_49597[(9)]);
var inst_49560 = figwheel.client.reload_file_state_QMARK_.call(null,inst_49556,opts);
var state_49597__$1 = state_49597;
if(cljs.core.truth_(inst_49560)){
var statearr_49619_49645 = state_49597__$1;
(statearr_49619_49645[(1)] = (11));

} else {
var statearr_49620_49646 = state_49597__$1;
(statearr_49620_49646[(1)] = (12));

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
});})(c__28051__auto___49628,ch))
;
return ((function (switch__28030__auto__,c__28051__auto___49628,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28031__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28031__auto____0 = (function (){
var statearr_49624 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49624[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28031__auto__);

(statearr_49624[(1)] = (1));

return statearr_49624;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28031__auto____1 = (function (state_49597){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_49597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e49625){if((e49625 instanceof Object)){
var ex__28034__auto__ = e49625;
var statearr_49626_49647 = state_49597;
(statearr_49626_49647[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49648 = state_49597;
state_49597 = G__49648;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28031__auto__ = function(state_49597){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28031__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28031__auto____1.call(this,state_49597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28031__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28031__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto___49628,ch))
})();
var state__28053__auto__ = (function (){var statearr_49627 = f__28052__auto__.call(null);
(statearr_49627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___49628);

return statearr_49627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto___49628,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__49649_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__49649_SHARP_));
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
var base_path_49652 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_49652){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e49651){if((e49651 instanceof Error)){
var e = e49651;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_49652], null));
} else {
var e = e49651;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_49652))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__49653){
var map__49662 = p__49653;
var map__49662__$1 = ((((!((map__49662 == null)))?((((map__49662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49662):map__49662);
var opts = map__49662__$1;
var build_id = cljs.core.get.call(null,map__49662__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__49662,map__49662__$1,opts,build_id){
return (function (p__49664){
var vec__49665 = p__49664;
var seq__49666 = cljs.core.seq.call(null,vec__49665);
var first__49667 = cljs.core.first.call(null,seq__49666);
var seq__49666__$1 = cljs.core.next.call(null,seq__49666);
var map__49668 = first__49667;
var map__49668__$1 = ((((!((map__49668 == null)))?((((map__49668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49668):map__49668);
var msg = map__49668__$1;
var msg_name = cljs.core.get.call(null,map__49668__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49666__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__49665,seq__49666,first__49667,seq__49666__$1,map__49668,map__49668__$1,msg,msg_name,_,map__49662,map__49662__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__49665,seq__49666,first__49667,seq__49666__$1,map__49668,map__49668__$1,msg,msg_name,_,map__49662,map__49662__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__49662,map__49662__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__49676){
var vec__49677 = p__49676;
var seq__49678 = cljs.core.seq.call(null,vec__49677);
var first__49679 = cljs.core.first.call(null,seq__49678);
var seq__49678__$1 = cljs.core.next.call(null,seq__49678);
var map__49680 = first__49679;
var map__49680__$1 = ((((!((map__49680 == null)))?((((map__49680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49680):map__49680);
var msg = map__49680__$1;
var msg_name = cljs.core.get.call(null,map__49680__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49678__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__49682){
var map__49694 = p__49682;
var map__49694__$1 = ((((!((map__49694 == null)))?((((map__49694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49694):map__49694);
var on_compile_warning = cljs.core.get.call(null,map__49694__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__49694__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__49694,map__49694__$1,on_compile_warning,on_compile_fail){
return (function (p__49696){
var vec__49697 = p__49696;
var seq__49698 = cljs.core.seq.call(null,vec__49697);
var first__49699 = cljs.core.first.call(null,seq__49698);
var seq__49698__$1 = cljs.core.next.call(null,seq__49698);
var map__49700 = first__49699;
var map__49700__$1 = ((((!((map__49700 == null)))?((((map__49700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49700):map__49700);
var msg = map__49700__$1;
var msg_name = cljs.core.get.call(null,map__49700__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49698__$1;
var pred__49702 = cljs.core._EQ_;
var expr__49703 = msg_name;
if(cljs.core.truth_(pred__49702.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__49703))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__49702.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__49703))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__49694,map__49694__$1,on_compile_warning,on_compile_fail))
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
var c__28051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto__,msg_hist,msg_names,msg){
return (function (state_49931){
var state_val_49932 = (state_49931[(1)]);
if((state_val_49932 === (7))){
var inst_49851 = (state_49931[(2)]);
var state_49931__$1 = state_49931;
if(cljs.core.truth_(inst_49851)){
var statearr_49933_49983 = state_49931__$1;
(statearr_49933_49983[(1)] = (8));

} else {
var statearr_49934_49984 = state_49931__$1;
(statearr_49934_49984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (20))){
var inst_49925 = (state_49931[(2)]);
var state_49931__$1 = state_49931;
var statearr_49935_49985 = state_49931__$1;
(statearr_49935_49985[(2)] = inst_49925);

(statearr_49935_49985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (27))){
var inst_49921 = (state_49931[(2)]);
var state_49931__$1 = state_49931;
var statearr_49936_49986 = state_49931__$1;
(statearr_49936_49986[(2)] = inst_49921);

(statearr_49936_49986[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (1))){
var inst_49844 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_49931__$1 = state_49931;
if(cljs.core.truth_(inst_49844)){
var statearr_49937_49987 = state_49931__$1;
(statearr_49937_49987[(1)] = (2));

} else {
var statearr_49938_49988 = state_49931__$1;
(statearr_49938_49988[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (24))){
var inst_49923 = (state_49931[(2)]);
var state_49931__$1 = state_49931;
var statearr_49939_49989 = state_49931__$1;
(statearr_49939_49989[(2)] = inst_49923);

(statearr_49939_49989[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (4))){
var inst_49929 = (state_49931[(2)]);
var state_49931__$1 = state_49931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49931__$1,inst_49929);
} else {
if((state_val_49932 === (15))){
var inst_49927 = (state_49931[(2)]);
var state_49931__$1 = state_49931;
var statearr_49940_49990 = state_49931__$1;
(statearr_49940_49990[(2)] = inst_49927);

(statearr_49940_49990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (21))){
var inst_49880 = (state_49931[(2)]);
var inst_49881 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49882 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49881);
var state_49931__$1 = (function (){var statearr_49941 = state_49931;
(statearr_49941[(7)] = inst_49880);

return statearr_49941;
})();
var statearr_49942_49991 = state_49931__$1;
(statearr_49942_49991[(2)] = inst_49882);

(statearr_49942_49991[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (31))){
var inst_49910 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_49931__$1 = state_49931;
if(cljs.core.truth_(inst_49910)){
var statearr_49943_49992 = state_49931__$1;
(statearr_49943_49992[(1)] = (34));

} else {
var statearr_49944_49993 = state_49931__$1;
(statearr_49944_49993[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (32))){
var inst_49919 = (state_49931[(2)]);
var state_49931__$1 = state_49931;
var statearr_49945_49994 = state_49931__$1;
(statearr_49945_49994[(2)] = inst_49919);

(statearr_49945_49994[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (33))){
var inst_49906 = (state_49931[(2)]);
var inst_49907 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49908 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49907);
var state_49931__$1 = (function (){var statearr_49946 = state_49931;
(statearr_49946[(8)] = inst_49906);

return statearr_49946;
})();
var statearr_49947_49995 = state_49931__$1;
(statearr_49947_49995[(2)] = inst_49908);

(statearr_49947_49995[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (13))){
var inst_49865 = figwheel.client.heads_up.clear.call(null);
var state_49931__$1 = state_49931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49931__$1,(16),inst_49865);
} else {
if((state_val_49932 === (22))){
var inst_49886 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49887 = figwheel.client.heads_up.append_warning_message.call(null,inst_49886);
var state_49931__$1 = state_49931;
var statearr_49948_49996 = state_49931__$1;
(statearr_49948_49996[(2)] = inst_49887);

(statearr_49948_49996[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (36))){
var inst_49917 = (state_49931[(2)]);
var state_49931__$1 = state_49931;
var statearr_49949_49997 = state_49931__$1;
(statearr_49949_49997[(2)] = inst_49917);

(statearr_49949_49997[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (29))){
var inst_49897 = (state_49931[(2)]);
var inst_49898 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49899 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49898);
var state_49931__$1 = (function (){var statearr_49950 = state_49931;
(statearr_49950[(9)] = inst_49897);

return statearr_49950;
})();
var statearr_49951_49998 = state_49931__$1;
(statearr_49951_49998[(2)] = inst_49899);

(statearr_49951_49998[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (6))){
var inst_49846 = (state_49931[(10)]);
var state_49931__$1 = state_49931;
var statearr_49952_49999 = state_49931__$1;
(statearr_49952_49999[(2)] = inst_49846);

(statearr_49952_49999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (28))){
var inst_49893 = (state_49931[(2)]);
var inst_49894 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49895 = figwheel.client.heads_up.display_warning.call(null,inst_49894);
var state_49931__$1 = (function (){var statearr_49953 = state_49931;
(statearr_49953[(11)] = inst_49893);

return statearr_49953;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49931__$1,(29),inst_49895);
} else {
if((state_val_49932 === (25))){
var inst_49891 = figwheel.client.heads_up.clear.call(null);
var state_49931__$1 = state_49931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49931__$1,(28),inst_49891);
} else {
if((state_val_49932 === (34))){
var inst_49912 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49931__$1 = state_49931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49931__$1,(37),inst_49912);
} else {
if((state_val_49932 === (17))){
var inst_49871 = (state_49931[(2)]);
var inst_49872 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49873 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49872);
var state_49931__$1 = (function (){var statearr_49954 = state_49931;
(statearr_49954[(12)] = inst_49871);

return statearr_49954;
})();
var statearr_49955_50000 = state_49931__$1;
(statearr_49955_50000[(2)] = inst_49873);

(statearr_49955_50000[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (3))){
var inst_49863 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_49931__$1 = state_49931;
if(cljs.core.truth_(inst_49863)){
var statearr_49956_50001 = state_49931__$1;
(statearr_49956_50001[(1)] = (13));

} else {
var statearr_49957_50002 = state_49931__$1;
(statearr_49957_50002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (12))){
var inst_49859 = (state_49931[(2)]);
var state_49931__$1 = state_49931;
var statearr_49958_50003 = state_49931__$1;
(statearr_49958_50003[(2)] = inst_49859);

(statearr_49958_50003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (2))){
var inst_49846 = (state_49931[(10)]);
var inst_49846__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_49931__$1 = (function (){var statearr_49959 = state_49931;
(statearr_49959[(10)] = inst_49846__$1);

return statearr_49959;
})();
if(cljs.core.truth_(inst_49846__$1)){
var statearr_49960_50004 = state_49931__$1;
(statearr_49960_50004[(1)] = (5));

} else {
var statearr_49961_50005 = state_49931__$1;
(statearr_49961_50005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (23))){
var inst_49889 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_49931__$1 = state_49931;
if(cljs.core.truth_(inst_49889)){
var statearr_49962_50006 = state_49931__$1;
(statearr_49962_50006[(1)] = (25));

} else {
var statearr_49963_50007 = state_49931__$1;
(statearr_49963_50007[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (35))){
var state_49931__$1 = state_49931;
var statearr_49964_50008 = state_49931__$1;
(statearr_49964_50008[(2)] = null);

(statearr_49964_50008[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (19))){
var inst_49884 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_49931__$1 = state_49931;
if(cljs.core.truth_(inst_49884)){
var statearr_49965_50009 = state_49931__$1;
(statearr_49965_50009[(1)] = (22));

} else {
var statearr_49966_50010 = state_49931__$1;
(statearr_49966_50010[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (11))){
var inst_49855 = (state_49931[(2)]);
var state_49931__$1 = state_49931;
var statearr_49967_50011 = state_49931__$1;
(statearr_49967_50011[(2)] = inst_49855);

(statearr_49967_50011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (9))){
var inst_49857 = figwheel.client.heads_up.clear.call(null);
var state_49931__$1 = state_49931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49931__$1,(12),inst_49857);
} else {
if((state_val_49932 === (5))){
var inst_49848 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_49931__$1 = state_49931;
var statearr_49968_50012 = state_49931__$1;
(statearr_49968_50012[(2)] = inst_49848);

(statearr_49968_50012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (14))){
var inst_49875 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_49931__$1 = state_49931;
if(cljs.core.truth_(inst_49875)){
var statearr_49969_50013 = state_49931__$1;
(statearr_49969_50013[(1)] = (18));

} else {
var statearr_49970_50014 = state_49931__$1;
(statearr_49970_50014[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (26))){
var inst_49901 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_49931__$1 = state_49931;
if(cljs.core.truth_(inst_49901)){
var statearr_49971_50015 = state_49931__$1;
(statearr_49971_50015[(1)] = (30));

} else {
var statearr_49972_50016 = state_49931__$1;
(statearr_49972_50016[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (16))){
var inst_49867 = (state_49931[(2)]);
var inst_49868 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49869 = figwheel.client.heads_up.display_exception.call(null,inst_49868);
var state_49931__$1 = (function (){var statearr_49973 = state_49931;
(statearr_49973[(13)] = inst_49867);

return statearr_49973;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49931__$1,(17),inst_49869);
} else {
if((state_val_49932 === (30))){
var inst_49903 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49904 = figwheel.client.heads_up.display_warning.call(null,inst_49903);
var state_49931__$1 = state_49931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49931__$1,(33),inst_49904);
} else {
if((state_val_49932 === (10))){
var inst_49861 = (state_49931[(2)]);
var state_49931__$1 = state_49931;
var statearr_49974_50017 = state_49931__$1;
(statearr_49974_50017[(2)] = inst_49861);

(statearr_49974_50017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (18))){
var inst_49877 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49878 = figwheel.client.heads_up.display_exception.call(null,inst_49877);
var state_49931__$1 = state_49931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49931__$1,(21),inst_49878);
} else {
if((state_val_49932 === (37))){
var inst_49914 = (state_49931[(2)]);
var state_49931__$1 = state_49931;
var statearr_49975_50018 = state_49931__$1;
(statearr_49975_50018[(2)] = inst_49914);

(statearr_49975_50018[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49932 === (8))){
var inst_49853 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49931__$1 = state_49931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49931__$1,(11),inst_49853);
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
});})(c__28051__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28030__auto__,c__28051__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28031__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28031__auto____0 = (function (){
var statearr_49979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49979[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28031__auto__);

(statearr_49979[(1)] = (1));

return statearr_49979;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28031__auto____1 = (function (state_49931){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_49931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e49980){if((e49980 instanceof Object)){
var ex__28034__auto__ = e49980;
var statearr_49981_50019 = state_49931;
(statearr_49981_50019[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50020 = state_49931;
state_49931 = G__50020;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28031__auto__ = function(state_49931){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28031__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28031__auto____1.call(this,state_49931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28031__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28031__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto__,msg_hist,msg_names,msg))
})();
var state__28053__auto__ = (function (){var statearr_49982 = f__28052__auto__.call(null);
(statearr_49982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto__);

return statearr_49982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto__,msg_hist,msg_names,msg))
);

return c__28051__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28051__auto___50083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto___50083,ch){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto___50083,ch){
return (function (state_50066){
var state_val_50067 = (state_50066[(1)]);
if((state_val_50067 === (1))){
var state_50066__$1 = state_50066;
var statearr_50068_50084 = state_50066__$1;
(statearr_50068_50084[(2)] = null);

(statearr_50068_50084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (2))){
var state_50066__$1 = state_50066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50066__$1,(4),ch);
} else {
if((state_val_50067 === (3))){
var inst_50064 = (state_50066[(2)]);
var state_50066__$1 = state_50066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50066__$1,inst_50064);
} else {
if((state_val_50067 === (4))){
var inst_50054 = (state_50066[(7)]);
var inst_50054__$1 = (state_50066[(2)]);
var state_50066__$1 = (function (){var statearr_50069 = state_50066;
(statearr_50069[(7)] = inst_50054__$1);

return statearr_50069;
})();
if(cljs.core.truth_(inst_50054__$1)){
var statearr_50070_50085 = state_50066__$1;
(statearr_50070_50085[(1)] = (5));

} else {
var statearr_50071_50086 = state_50066__$1;
(statearr_50071_50086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (5))){
var inst_50054 = (state_50066[(7)]);
var inst_50056 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_50054);
var state_50066__$1 = state_50066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50066__$1,(8),inst_50056);
} else {
if((state_val_50067 === (6))){
var state_50066__$1 = state_50066;
var statearr_50072_50087 = state_50066__$1;
(statearr_50072_50087[(2)] = null);

(statearr_50072_50087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (7))){
var inst_50062 = (state_50066[(2)]);
var state_50066__$1 = state_50066;
var statearr_50073_50088 = state_50066__$1;
(statearr_50073_50088[(2)] = inst_50062);

(statearr_50073_50088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50067 === (8))){
var inst_50058 = (state_50066[(2)]);
var state_50066__$1 = (function (){var statearr_50074 = state_50066;
(statearr_50074[(8)] = inst_50058);

return statearr_50074;
})();
var statearr_50075_50089 = state_50066__$1;
(statearr_50075_50089[(2)] = null);

(statearr_50075_50089[(1)] = (2));


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
});})(c__28051__auto___50083,ch))
;
return ((function (switch__28030__auto__,c__28051__auto___50083,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28031__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28031__auto____0 = (function (){
var statearr_50079 = [null,null,null,null,null,null,null,null,null];
(statearr_50079[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28031__auto__);

(statearr_50079[(1)] = (1));

return statearr_50079;
});
var figwheel$client$heads_up_plugin_$_state_machine__28031__auto____1 = (function (state_50066){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_50066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e50080){if((e50080 instanceof Object)){
var ex__28034__auto__ = e50080;
var statearr_50081_50090 = state_50066;
(statearr_50081_50090[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50091 = state_50066;
state_50066 = G__50091;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28031__auto__ = function(state_50066){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28031__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28031__auto____1.call(this,state_50066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28031__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28031__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto___50083,ch))
})();
var state__28053__auto__ = (function (){var statearr_50082 = f__28052__auto__.call(null);
(statearr_50082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___50083);

return statearr_50082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto___50083,ch))
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
var c__28051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto__){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto__){
return (function (state_50112){
var state_val_50113 = (state_50112[(1)]);
if((state_val_50113 === (1))){
var inst_50107 = cljs.core.async.timeout.call(null,(3000));
var state_50112__$1 = state_50112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50112__$1,(2),inst_50107);
} else {
if((state_val_50113 === (2))){
var inst_50109 = (state_50112[(2)]);
var inst_50110 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_50112__$1 = (function (){var statearr_50114 = state_50112;
(statearr_50114[(7)] = inst_50109);

return statearr_50114;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50112__$1,inst_50110);
} else {
return null;
}
}
});})(c__28051__auto__))
;
return ((function (switch__28030__auto__,c__28051__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28031__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28031__auto____0 = (function (){
var statearr_50118 = [null,null,null,null,null,null,null,null];
(statearr_50118[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28031__auto__);

(statearr_50118[(1)] = (1));

return statearr_50118;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28031__auto____1 = (function (state_50112){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_50112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e50119){if((e50119 instanceof Object)){
var ex__28034__auto__ = e50119;
var statearr_50120_50122 = state_50112;
(statearr_50120_50122[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50123 = state_50112;
state_50112 = G__50123;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28031__auto__ = function(state_50112){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28031__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28031__auto____1.call(this,state_50112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28031__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28031__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto__))
})();
var state__28053__auto__ = (function (){var statearr_50121 = f__28052__auto__.call(null);
(statearr_50121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto__);

return statearr_50121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto__))
);

return c__28051__auto__;
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
var c__28051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto__,figwheel_version,temp__4657__auto__){
return (function (state_50146){
var state_val_50147 = (state_50146[(1)]);
if((state_val_50147 === (1))){
var inst_50140 = cljs.core.async.timeout.call(null,(2000));
var state_50146__$1 = state_50146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50146__$1,(2),inst_50140);
} else {
if((state_val_50147 === (2))){
var inst_50142 = (state_50146[(2)]);
var inst_50143 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_50144 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_50143);
var state_50146__$1 = (function (){var statearr_50148 = state_50146;
(statearr_50148[(7)] = inst_50142);

return statearr_50148;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50146__$1,inst_50144);
} else {
return null;
}
}
});})(c__28051__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28030__auto__,c__28051__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28031__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28031__auto____0 = (function (){
var statearr_50152 = [null,null,null,null,null,null,null,null];
(statearr_50152[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28031__auto__);

(statearr_50152[(1)] = (1));

return statearr_50152;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28031__auto____1 = (function (state_50146){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_50146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e50153){if((e50153 instanceof Object)){
var ex__28034__auto__ = e50153;
var statearr_50154_50156 = state_50146;
(statearr_50154_50156[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50157 = state_50146;
state_50146 = G__50157;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28031__auto__ = function(state_50146){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28031__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28031__auto____1.call(this,state_50146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28031__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28031__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28053__auto__ = (function (){var statearr_50155 = f__28052__auto__.call(null);
(statearr_50155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto__);

return statearr_50155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto__,figwheel_version,temp__4657__auto__))
);

return c__28051__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__50158){
var map__50162 = p__50158;
var map__50162__$1 = ((((!((map__50162 == null)))?((((map__50162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50162):map__50162);
var file = cljs.core.get.call(null,map__50162__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__50162__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__50162__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__50164 = "";
var G__50164__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__50164),cljs.core.str("file "),cljs.core.str(file)].join(''):G__50164);
var G__50164__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__50164__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__50164__$1);
if(cljs.core.truth_((function (){var and__25927__auto__ = line;
if(cljs.core.truth_(and__25927__auto__)){
return column;
} else {
return and__25927__auto__;
}
})())){
return [cljs.core.str(G__50164__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__50164__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__50165){
var map__50172 = p__50165;
var map__50172__$1 = ((((!((map__50172 == null)))?((((map__50172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50172):map__50172);
var ed = map__50172__$1;
var formatted_exception = cljs.core.get.call(null,map__50172__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__50172__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__50172__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__50174_50178 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__50175_50179 = null;
var count__50176_50180 = (0);
var i__50177_50181 = (0);
while(true){
if((i__50177_50181 < count__50176_50180)){
var msg_50182 = cljs.core._nth.call(null,chunk__50175_50179,i__50177_50181);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50182);

var G__50183 = seq__50174_50178;
var G__50184 = chunk__50175_50179;
var G__50185 = count__50176_50180;
var G__50186 = (i__50177_50181 + (1));
seq__50174_50178 = G__50183;
chunk__50175_50179 = G__50184;
count__50176_50180 = G__50185;
i__50177_50181 = G__50186;
continue;
} else {
var temp__4657__auto___50187 = cljs.core.seq.call(null,seq__50174_50178);
if(temp__4657__auto___50187){
var seq__50174_50188__$1 = temp__4657__auto___50187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50174_50188__$1)){
var c__26750__auto___50189 = cljs.core.chunk_first.call(null,seq__50174_50188__$1);
var G__50190 = cljs.core.chunk_rest.call(null,seq__50174_50188__$1);
var G__50191 = c__26750__auto___50189;
var G__50192 = cljs.core.count.call(null,c__26750__auto___50189);
var G__50193 = (0);
seq__50174_50178 = G__50190;
chunk__50175_50179 = G__50191;
count__50176_50180 = G__50192;
i__50177_50181 = G__50193;
continue;
} else {
var msg_50194 = cljs.core.first.call(null,seq__50174_50188__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50194);

var G__50195 = cljs.core.next.call(null,seq__50174_50188__$1);
var G__50196 = null;
var G__50197 = (0);
var G__50198 = (0);
seq__50174_50178 = G__50195;
chunk__50175_50179 = G__50196;
count__50176_50180 = G__50197;
i__50177_50181 = G__50198;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50199){
var map__50202 = p__50199;
var map__50202__$1 = ((((!((map__50202 == null)))?((((map__50202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50202):map__50202);
var w = map__50202__$1;
var message = cljs.core.get.call(null,map__50202__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__50214 = cljs.core.seq.call(null,plugins);
var chunk__50215 = null;
var count__50216 = (0);
var i__50217 = (0);
while(true){
if((i__50217 < count__50216)){
var vec__50218 = cljs.core._nth.call(null,chunk__50215,i__50217);
var k = cljs.core.nth.call(null,vec__50218,(0),null);
var plugin = cljs.core.nth.call(null,vec__50218,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50224 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50214,chunk__50215,count__50216,i__50217,pl_50224,vec__50218,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50224.call(null,msg_hist);
});})(seq__50214,chunk__50215,count__50216,i__50217,pl_50224,vec__50218,k,plugin))
);
} else {
}

var G__50225 = seq__50214;
var G__50226 = chunk__50215;
var G__50227 = count__50216;
var G__50228 = (i__50217 + (1));
seq__50214 = G__50225;
chunk__50215 = G__50226;
count__50216 = G__50227;
i__50217 = G__50228;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50214);
if(temp__4657__auto__){
var seq__50214__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50214__$1)){
var c__26750__auto__ = cljs.core.chunk_first.call(null,seq__50214__$1);
var G__50229 = cljs.core.chunk_rest.call(null,seq__50214__$1);
var G__50230 = c__26750__auto__;
var G__50231 = cljs.core.count.call(null,c__26750__auto__);
var G__50232 = (0);
seq__50214 = G__50229;
chunk__50215 = G__50230;
count__50216 = G__50231;
i__50217 = G__50232;
continue;
} else {
var vec__50221 = cljs.core.first.call(null,seq__50214__$1);
var k = cljs.core.nth.call(null,vec__50221,(0),null);
var plugin = cljs.core.nth.call(null,vec__50221,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50233 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50214,chunk__50215,count__50216,i__50217,pl_50233,vec__50221,k,plugin,seq__50214__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50233.call(null,msg_hist);
});})(seq__50214,chunk__50215,count__50216,i__50217,pl_50233,vec__50221,k,plugin,seq__50214__$1,temp__4657__auto__))
);
} else {
}

var G__50234 = cljs.core.next.call(null,seq__50214__$1);
var G__50235 = null;
var G__50236 = (0);
var G__50237 = (0);
seq__50214 = G__50234;
chunk__50215 = G__50235;
count__50216 = G__50236;
i__50217 = G__50237;
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
var args50238 = [];
var len__27014__auto___50245 = arguments.length;
var i__27015__auto___50246 = (0);
while(true){
if((i__27015__auto___50246 < len__27014__auto___50245)){
args50238.push((arguments[i__27015__auto___50246]));

var G__50247 = (i__27015__auto___50246 + (1));
i__27015__auto___50246 = G__50247;
continue;
} else {
}
break;
}

var G__50240 = args50238.length;
switch (G__50240) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50238.length)].join('')));

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

var seq__50241_50249 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50242_50250 = null;
var count__50243_50251 = (0);
var i__50244_50252 = (0);
while(true){
if((i__50244_50252 < count__50243_50251)){
var msg_50253 = cljs.core._nth.call(null,chunk__50242_50250,i__50244_50252);
figwheel.client.socket.handle_incoming_message.call(null,msg_50253);

var G__50254 = seq__50241_50249;
var G__50255 = chunk__50242_50250;
var G__50256 = count__50243_50251;
var G__50257 = (i__50244_50252 + (1));
seq__50241_50249 = G__50254;
chunk__50242_50250 = G__50255;
count__50243_50251 = G__50256;
i__50244_50252 = G__50257;
continue;
} else {
var temp__4657__auto___50258 = cljs.core.seq.call(null,seq__50241_50249);
if(temp__4657__auto___50258){
var seq__50241_50259__$1 = temp__4657__auto___50258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50241_50259__$1)){
var c__26750__auto___50260 = cljs.core.chunk_first.call(null,seq__50241_50259__$1);
var G__50261 = cljs.core.chunk_rest.call(null,seq__50241_50259__$1);
var G__50262 = c__26750__auto___50260;
var G__50263 = cljs.core.count.call(null,c__26750__auto___50260);
var G__50264 = (0);
seq__50241_50249 = G__50261;
chunk__50242_50250 = G__50262;
count__50243_50251 = G__50263;
i__50244_50252 = G__50264;
continue;
} else {
var msg_50265 = cljs.core.first.call(null,seq__50241_50259__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50265);

var G__50266 = cljs.core.next.call(null,seq__50241_50259__$1);
var G__50267 = null;
var G__50268 = (0);
var G__50269 = (0);
seq__50241_50249 = G__50266;
chunk__50242_50250 = G__50267;
count__50243_50251 = G__50268;
i__50244_50252 = G__50269;
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
var len__27014__auto___50274 = arguments.length;
var i__27015__auto___50275 = (0);
while(true){
if((i__27015__auto___50275 < len__27014__auto___50274)){
args__27021__auto__.push((arguments[i__27015__auto___50275]));

var G__50276 = (i__27015__auto___50275 + (1));
i__27015__auto___50275 = G__50276;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((0) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27022__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50271){
var map__50272 = p__50271;
var map__50272__$1 = ((((!((map__50272 == null)))?((((map__50272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50272):map__50272);
var opts = map__50272__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50270){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50270));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50278){if((e50278 instanceof Error)){
var e = e50278;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50278;

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
return (function (p__50282){
var map__50283 = p__50282;
var map__50283__$1 = ((((!((map__50283 == null)))?((((map__50283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50283):map__50283);
var msg_name = cljs.core.get.call(null,map__50283__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1496347452882