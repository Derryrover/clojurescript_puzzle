// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49018){
var map__49043 = p__49018;
var map__49043__$1 = ((((!((map__49043 == null)))?((((map__49043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49043):map__49043);
var m = map__49043__$1;
var n = cljs.core.get.call(null,map__49043__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__49043__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__49045_49067 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49046_49068 = null;
var count__49047_49069 = (0);
var i__49048_49070 = (0);
while(true){
if((i__49048_49070 < count__49047_49069)){
var f_49071 = cljs.core._nth.call(null,chunk__49046_49068,i__49048_49070);
cljs.core.println.call(null,"  ",f_49071);

var G__49072 = seq__49045_49067;
var G__49073 = chunk__49046_49068;
var G__49074 = count__49047_49069;
var G__49075 = (i__49048_49070 + (1));
seq__49045_49067 = G__49072;
chunk__49046_49068 = G__49073;
count__49047_49069 = G__49074;
i__49048_49070 = G__49075;
continue;
} else {
var temp__4657__auto___49076 = cljs.core.seq.call(null,seq__49045_49067);
if(temp__4657__auto___49076){
var seq__49045_49077__$1 = temp__4657__auto___49076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49045_49077__$1)){
var c__26750__auto___49078 = cljs.core.chunk_first.call(null,seq__49045_49077__$1);
var G__49079 = cljs.core.chunk_rest.call(null,seq__49045_49077__$1);
var G__49080 = c__26750__auto___49078;
var G__49081 = cljs.core.count.call(null,c__26750__auto___49078);
var G__49082 = (0);
seq__49045_49067 = G__49079;
chunk__49046_49068 = G__49080;
count__49047_49069 = G__49081;
i__49048_49070 = G__49082;
continue;
} else {
var f_49083 = cljs.core.first.call(null,seq__49045_49077__$1);
cljs.core.println.call(null,"  ",f_49083);

var G__49084 = cljs.core.next.call(null,seq__49045_49077__$1);
var G__49085 = null;
var G__49086 = (0);
var G__49087 = (0);
seq__49045_49067 = G__49084;
chunk__49046_49068 = G__49085;
count__49047_49069 = G__49086;
i__49048_49070 = G__49087;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49088 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25939__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25939__auto__)){
return or__25939__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49088);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49088)))?cljs.core.second.call(null,arglists_49088):arglists_49088));
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
var seq__49049_49089 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49050_49090 = null;
var count__49051_49091 = (0);
var i__49052_49092 = (0);
while(true){
if((i__49052_49092 < count__49051_49091)){
var vec__49053_49093 = cljs.core._nth.call(null,chunk__49050_49090,i__49052_49092);
var name_49094 = cljs.core.nth.call(null,vec__49053_49093,(0),null);
var map__49056_49095 = cljs.core.nth.call(null,vec__49053_49093,(1),null);
var map__49056_49096__$1 = ((((!((map__49056_49095 == null)))?((((map__49056_49095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49056_49095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49056_49095):map__49056_49095);
var doc_49097 = cljs.core.get.call(null,map__49056_49096__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49098 = cljs.core.get.call(null,map__49056_49096__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49094);

cljs.core.println.call(null," ",arglists_49098);

if(cljs.core.truth_(doc_49097)){
cljs.core.println.call(null," ",doc_49097);
} else {
}

var G__49099 = seq__49049_49089;
var G__49100 = chunk__49050_49090;
var G__49101 = count__49051_49091;
var G__49102 = (i__49052_49092 + (1));
seq__49049_49089 = G__49099;
chunk__49050_49090 = G__49100;
count__49051_49091 = G__49101;
i__49052_49092 = G__49102;
continue;
} else {
var temp__4657__auto___49103 = cljs.core.seq.call(null,seq__49049_49089);
if(temp__4657__auto___49103){
var seq__49049_49104__$1 = temp__4657__auto___49103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49049_49104__$1)){
var c__26750__auto___49105 = cljs.core.chunk_first.call(null,seq__49049_49104__$1);
var G__49106 = cljs.core.chunk_rest.call(null,seq__49049_49104__$1);
var G__49107 = c__26750__auto___49105;
var G__49108 = cljs.core.count.call(null,c__26750__auto___49105);
var G__49109 = (0);
seq__49049_49089 = G__49106;
chunk__49050_49090 = G__49107;
count__49051_49091 = G__49108;
i__49052_49092 = G__49109;
continue;
} else {
var vec__49058_49110 = cljs.core.first.call(null,seq__49049_49104__$1);
var name_49111 = cljs.core.nth.call(null,vec__49058_49110,(0),null);
var map__49061_49112 = cljs.core.nth.call(null,vec__49058_49110,(1),null);
var map__49061_49113__$1 = ((((!((map__49061_49112 == null)))?((((map__49061_49112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49061_49112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49061_49112):map__49061_49112);
var doc_49114 = cljs.core.get.call(null,map__49061_49113__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49115 = cljs.core.get.call(null,map__49061_49113__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49111);

cljs.core.println.call(null," ",arglists_49115);

if(cljs.core.truth_(doc_49114)){
cljs.core.println.call(null," ",doc_49114);
} else {
}

var G__49116 = cljs.core.next.call(null,seq__49049_49104__$1);
var G__49117 = null;
var G__49118 = (0);
var G__49119 = (0);
seq__49049_49089 = G__49116;
chunk__49050_49090 = G__49117;
count__49051_49091 = G__49118;
i__49052_49092 = G__49119;
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

var seq__49063 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49064 = null;
var count__49065 = (0);
var i__49066 = (0);
while(true){
if((i__49066 < count__49065)){
var role = cljs.core._nth.call(null,chunk__49064,i__49066);
var temp__4657__auto___49120__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___49120__$1)){
var spec_49121 = temp__4657__auto___49120__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_49121));
} else {
}

var G__49122 = seq__49063;
var G__49123 = chunk__49064;
var G__49124 = count__49065;
var G__49125 = (i__49066 + (1));
seq__49063 = G__49122;
chunk__49064 = G__49123;
count__49065 = G__49124;
i__49066 = G__49125;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__49063);
if(temp__4657__auto____$1){
var seq__49063__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49063__$1)){
var c__26750__auto__ = cljs.core.chunk_first.call(null,seq__49063__$1);
var G__49126 = cljs.core.chunk_rest.call(null,seq__49063__$1);
var G__49127 = c__26750__auto__;
var G__49128 = cljs.core.count.call(null,c__26750__auto__);
var G__49129 = (0);
seq__49063 = G__49126;
chunk__49064 = G__49127;
count__49065 = G__49128;
i__49066 = G__49129;
continue;
} else {
var role = cljs.core.first.call(null,seq__49063__$1);
var temp__4657__auto___49130__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___49130__$2)){
var spec_49131 = temp__4657__auto___49130__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_49131));
} else {
}

var G__49132 = cljs.core.next.call(null,seq__49063__$1);
var G__49133 = null;
var G__49134 = (0);
var G__49135 = (0);
seq__49063 = G__49132;
chunk__49064 = G__49133;
count__49065 = G__49134;
i__49066 = G__49135;
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

//# sourceMappingURL=repl.js.map?rel=1496347452038