// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25939__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25939__auto__){
return or__25939__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25939__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25939__auto__)){
return or__25939__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__46966_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__46966_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__46971 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__46972 = null;
var count__46973 = (0);
var i__46974 = (0);
while(true){
if((i__46974 < count__46973)){
var n = cljs.core._nth.call(null,chunk__46972,i__46974);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__46975 = seq__46971;
var G__46976 = chunk__46972;
var G__46977 = count__46973;
var G__46978 = (i__46974 + (1));
seq__46971 = G__46975;
chunk__46972 = G__46976;
count__46973 = G__46977;
i__46974 = G__46978;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46971);
if(temp__4657__auto__){
var seq__46971__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46971__$1)){
var c__26750__auto__ = cljs.core.chunk_first.call(null,seq__46971__$1);
var G__46979 = cljs.core.chunk_rest.call(null,seq__46971__$1);
var G__46980 = c__26750__auto__;
var G__46981 = cljs.core.count.call(null,c__26750__auto__);
var G__46982 = (0);
seq__46971 = G__46979;
chunk__46972 = G__46980;
count__46973 = G__46981;
i__46974 = G__46982;
continue;
} else {
var n = cljs.core.first.call(null,seq__46971__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__46983 = cljs.core.next.call(null,seq__46971__$1);
var G__46984 = null;
var G__46985 = (0);
var G__46986 = (0);
seq__46971 = G__46983;
chunk__46972 = G__46984;
count__46973 = G__46985;
i__46974 = G__46986;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__47037_47048 = cljs.core.seq.call(null,deps);
var chunk__47038_47049 = null;
var count__47039_47050 = (0);
var i__47040_47051 = (0);
while(true){
if((i__47040_47051 < count__47039_47050)){
var dep_47052 = cljs.core._nth.call(null,chunk__47038_47049,i__47040_47051);
topo_sort_helper_STAR_.call(null,dep_47052,(depth + (1)),state);

var G__47053 = seq__47037_47048;
var G__47054 = chunk__47038_47049;
var G__47055 = count__47039_47050;
var G__47056 = (i__47040_47051 + (1));
seq__47037_47048 = G__47053;
chunk__47038_47049 = G__47054;
count__47039_47050 = G__47055;
i__47040_47051 = G__47056;
continue;
} else {
var temp__4657__auto___47057 = cljs.core.seq.call(null,seq__47037_47048);
if(temp__4657__auto___47057){
var seq__47037_47058__$1 = temp__4657__auto___47057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47037_47058__$1)){
var c__26750__auto___47059 = cljs.core.chunk_first.call(null,seq__47037_47058__$1);
var G__47060 = cljs.core.chunk_rest.call(null,seq__47037_47058__$1);
var G__47061 = c__26750__auto___47059;
var G__47062 = cljs.core.count.call(null,c__26750__auto___47059);
var G__47063 = (0);
seq__47037_47048 = G__47060;
chunk__47038_47049 = G__47061;
count__47039_47050 = G__47062;
i__47040_47051 = G__47063;
continue;
} else {
var dep_47064 = cljs.core.first.call(null,seq__47037_47058__$1);
topo_sort_helper_STAR_.call(null,dep_47064,(depth + (1)),state);

var G__47065 = cljs.core.next.call(null,seq__47037_47058__$1);
var G__47066 = null;
var G__47067 = (0);
var G__47068 = (0);
seq__47037_47048 = G__47065;
chunk__47038_47049 = G__47066;
count__47039_47050 = G__47067;
i__47040_47051 = G__47068;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47041){
var vec__47045 = p__47041;
var seq__47046 = cljs.core.seq.call(null,vec__47045);
var first__47047 = cljs.core.first.call(null,seq__47046);
var seq__47046__$1 = cljs.core.next.call(null,seq__47046);
var x = first__47047;
var xs = seq__47046__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47045,seq__47046,first__47047,seq__47046__$1,x,xs,get_deps__$1){
return (function (p1__46987_SHARP_){
return clojure.set.difference.call(null,p1__46987_SHARP_,x);
});})(vec__47045,seq__47046,first__47047,seq__47046__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__47081 = cljs.core.seq.call(null,provides);
var chunk__47082 = null;
var count__47083 = (0);
var i__47084 = (0);
while(true){
if((i__47084 < count__47083)){
var prov = cljs.core._nth.call(null,chunk__47082,i__47084);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47085_47093 = cljs.core.seq.call(null,requires);
var chunk__47086_47094 = null;
var count__47087_47095 = (0);
var i__47088_47096 = (0);
while(true){
if((i__47088_47096 < count__47087_47095)){
var req_47097 = cljs.core._nth.call(null,chunk__47086_47094,i__47088_47096);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47097,prov);

var G__47098 = seq__47085_47093;
var G__47099 = chunk__47086_47094;
var G__47100 = count__47087_47095;
var G__47101 = (i__47088_47096 + (1));
seq__47085_47093 = G__47098;
chunk__47086_47094 = G__47099;
count__47087_47095 = G__47100;
i__47088_47096 = G__47101;
continue;
} else {
var temp__4657__auto___47102 = cljs.core.seq.call(null,seq__47085_47093);
if(temp__4657__auto___47102){
var seq__47085_47103__$1 = temp__4657__auto___47102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47085_47103__$1)){
var c__26750__auto___47104 = cljs.core.chunk_first.call(null,seq__47085_47103__$1);
var G__47105 = cljs.core.chunk_rest.call(null,seq__47085_47103__$1);
var G__47106 = c__26750__auto___47104;
var G__47107 = cljs.core.count.call(null,c__26750__auto___47104);
var G__47108 = (0);
seq__47085_47093 = G__47105;
chunk__47086_47094 = G__47106;
count__47087_47095 = G__47107;
i__47088_47096 = G__47108;
continue;
} else {
var req_47109 = cljs.core.first.call(null,seq__47085_47103__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47109,prov);

var G__47110 = cljs.core.next.call(null,seq__47085_47103__$1);
var G__47111 = null;
var G__47112 = (0);
var G__47113 = (0);
seq__47085_47093 = G__47110;
chunk__47086_47094 = G__47111;
count__47087_47095 = G__47112;
i__47088_47096 = G__47113;
continue;
}
} else {
}
}
break;
}

var G__47114 = seq__47081;
var G__47115 = chunk__47082;
var G__47116 = count__47083;
var G__47117 = (i__47084 + (1));
seq__47081 = G__47114;
chunk__47082 = G__47115;
count__47083 = G__47116;
i__47084 = G__47117;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47081);
if(temp__4657__auto__){
var seq__47081__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47081__$1)){
var c__26750__auto__ = cljs.core.chunk_first.call(null,seq__47081__$1);
var G__47118 = cljs.core.chunk_rest.call(null,seq__47081__$1);
var G__47119 = c__26750__auto__;
var G__47120 = cljs.core.count.call(null,c__26750__auto__);
var G__47121 = (0);
seq__47081 = G__47118;
chunk__47082 = G__47119;
count__47083 = G__47120;
i__47084 = G__47121;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47081__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47089_47122 = cljs.core.seq.call(null,requires);
var chunk__47090_47123 = null;
var count__47091_47124 = (0);
var i__47092_47125 = (0);
while(true){
if((i__47092_47125 < count__47091_47124)){
var req_47126 = cljs.core._nth.call(null,chunk__47090_47123,i__47092_47125);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47126,prov);

var G__47127 = seq__47089_47122;
var G__47128 = chunk__47090_47123;
var G__47129 = count__47091_47124;
var G__47130 = (i__47092_47125 + (1));
seq__47089_47122 = G__47127;
chunk__47090_47123 = G__47128;
count__47091_47124 = G__47129;
i__47092_47125 = G__47130;
continue;
} else {
var temp__4657__auto___47131__$1 = cljs.core.seq.call(null,seq__47089_47122);
if(temp__4657__auto___47131__$1){
var seq__47089_47132__$1 = temp__4657__auto___47131__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47089_47132__$1)){
var c__26750__auto___47133 = cljs.core.chunk_first.call(null,seq__47089_47132__$1);
var G__47134 = cljs.core.chunk_rest.call(null,seq__47089_47132__$1);
var G__47135 = c__26750__auto___47133;
var G__47136 = cljs.core.count.call(null,c__26750__auto___47133);
var G__47137 = (0);
seq__47089_47122 = G__47134;
chunk__47090_47123 = G__47135;
count__47091_47124 = G__47136;
i__47092_47125 = G__47137;
continue;
} else {
var req_47138 = cljs.core.first.call(null,seq__47089_47132__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47138,prov);

var G__47139 = cljs.core.next.call(null,seq__47089_47132__$1);
var G__47140 = null;
var G__47141 = (0);
var G__47142 = (0);
seq__47089_47122 = G__47139;
chunk__47090_47123 = G__47140;
count__47091_47124 = G__47141;
i__47092_47125 = G__47142;
continue;
}
} else {
}
}
break;
}

var G__47143 = cljs.core.next.call(null,seq__47081__$1);
var G__47144 = null;
var G__47145 = (0);
var G__47146 = (0);
seq__47081 = G__47143;
chunk__47082 = G__47144;
count__47083 = G__47145;
i__47084 = G__47146;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__47151_47155 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47152_47156 = null;
var count__47153_47157 = (0);
var i__47154_47158 = (0);
while(true){
if((i__47154_47158 < count__47153_47157)){
var ns_47159 = cljs.core._nth.call(null,chunk__47152_47156,i__47154_47158);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47159);

var G__47160 = seq__47151_47155;
var G__47161 = chunk__47152_47156;
var G__47162 = count__47153_47157;
var G__47163 = (i__47154_47158 + (1));
seq__47151_47155 = G__47160;
chunk__47152_47156 = G__47161;
count__47153_47157 = G__47162;
i__47154_47158 = G__47163;
continue;
} else {
var temp__4657__auto___47164 = cljs.core.seq.call(null,seq__47151_47155);
if(temp__4657__auto___47164){
var seq__47151_47165__$1 = temp__4657__auto___47164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47151_47165__$1)){
var c__26750__auto___47166 = cljs.core.chunk_first.call(null,seq__47151_47165__$1);
var G__47167 = cljs.core.chunk_rest.call(null,seq__47151_47165__$1);
var G__47168 = c__26750__auto___47166;
var G__47169 = cljs.core.count.call(null,c__26750__auto___47166);
var G__47170 = (0);
seq__47151_47155 = G__47167;
chunk__47152_47156 = G__47168;
count__47153_47157 = G__47169;
i__47154_47158 = G__47170;
continue;
} else {
var ns_47171 = cljs.core.first.call(null,seq__47151_47165__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47171);

var G__47172 = cljs.core.next.call(null,seq__47151_47165__$1);
var G__47173 = null;
var G__47174 = (0);
var G__47175 = (0);
seq__47151_47155 = G__47172;
chunk__47152_47156 = G__47173;
count__47153_47157 = G__47174;
i__47154_47158 = G__47175;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25939__auto__ = goog.require__;
if(cljs.core.truth_(or__25939__auto__)){
return or__25939__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__47176__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47177__i = 0, G__47177__a = new Array(arguments.length -  0);
while (G__47177__i < G__47177__a.length) {G__47177__a[G__47177__i] = arguments[G__47177__i + 0]; ++G__47177__i;}
  args = new cljs.core.IndexedSeq(G__47177__a,0);
} 
return G__47176__delegate.call(this,args);};
G__47176.cljs$lang$maxFixedArity = 0;
G__47176.cljs$lang$applyTo = (function (arglist__47178){
var args = cljs.core.seq(arglist__47178);
return G__47176__delegate(args);
});
G__47176.cljs$core$IFn$_invoke$arity$variadic = G__47176__delegate;
return G__47176;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47179 = cljs.core._EQ_;
var expr__47180 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47179.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47180))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__47179,expr__47180){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__47179,expr__47180))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__47179,expr__47180){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e47182){if((e47182 instanceof Error)){
var e = e47182;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47182;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__47179,expr__47180))
} else {
if(cljs.core.truth_(pred__47179.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47180))){
return ((function (pred__47179,expr__47180){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__47179,expr__47180){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__47179,expr__47180))
);

return deferred.addErrback(((function (deferred,pred__47179,expr__47180){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__47179,expr__47180))
);
});
;})(pred__47179,expr__47180))
} else {
if(cljs.core.truth_(pred__47179.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__47180))){
return ((function (pred__47179,expr__47180){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e47183){if((e47183 instanceof Error)){
var e = e47183;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47183;

}
}})());
});
;})(pred__47179,expr__47180))
} else {
return ((function (pred__47179,expr__47180){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47179,expr__47180))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47184,callback){
var map__47187 = p__47184;
var map__47187__$1 = ((((!((map__47187 == null)))?((((map__47187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47187):map__47187);
var file_msg = map__47187__$1;
var request_url = cljs.core.get.call(null,map__47187__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__47187,map__47187__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47187,map__47187__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto__){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto__){
return (function (state_47211){
var state_val_47212 = (state_47211[(1)]);
if((state_val_47212 === (7))){
var inst_47207 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47213_47233 = state_47211__$1;
(statearr_47213_47233[(2)] = inst_47207);

(statearr_47213_47233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (1))){
var state_47211__$1 = state_47211;
var statearr_47214_47234 = state_47211__$1;
(statearr_47214_47234[(2)] = null);

(statearr_47214_47234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (4))){
var inst_47191 = (state_47211[(7)]);
var inst_47191__$1 = (state_47211[(2)]);
var state_47211__$1 = (function (){var statearr_47215 = state_47211;
(statearr_47215[(7)] = inst_47191__$1);

return statearr_47215;
})();
if(cljs.core.truth_(inst_47191__$1)){
var statearr_47216_47235 = state_47211__$1;
(statearr_47216_47235[(1)] = (5));

} else {
var statearr_47217_47236 = state_47211__$1;
(statearr_47217_47236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (6))){
var state_47211__$1 = state_47211;
var statearr_47218_47237 = state_47211__$1;
(statearr_47218_47237[(2)] = null);

(statearr_47218_47237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (3))){
var inst_47209 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47211__$1,inst_47209);
} else {
if((state_val_47212 === (2))){
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47211__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47212 === (11))){
var inst_47203 = (state_47211[(2)]);
var state_47211__$1 = (function (){var statearr_47219 = state_47211;
(statearr_47219[(8)] = inst_47203);

return statearr_47219;
})();
var statearr_47220_47238 = state_47211__$1;
(statearr_47220_47238[(2)] = null);

(statearr_47220_47238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (9))){
var inst_47197 = (state_47211[(9)]);
var inst_47195 = (state_47211[(10)]);
var inst_47199 = inst_47197.call(null,inst_47195);
var state_47211__$1 = state_47211;
var statearr_47221_47239 = state_47211__$1;
(statearr_47221_47239[(2)] = inst_47199);

(statearr_47221_47239[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (5))){
var inst_47191 = (state_47211[(7)]);
var inst_47193 = figwheel.client.file_reloading.blocking_load.call(null,inst_47191);
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47211__$1,(8),inst_47193);
} else {
if((state_val_47212 === (10))){
var inst_47195 = (state_47211[(10)]);
var inst_47201 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47195);
var state_47211__$1 = state_47211;
var statearr_47222_47240 = state_47211__$1;
(statearr_47222_47240[(2)] = inst_47201);

(statearr_47222_47240[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (8))){
var inst_47197 = (state_47211[(9)]);
var inst_47191 = (state_47211[(7)]);
var inst_47195 = (state_47211[(2)]);
var inst_47196 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47197__$1 = cljs.core.get.call(null,inst_47196,inst_47191);
var state_47211__$1 = (function (){var statearr_47223 = state_47211;
(statearr_47223[(9)] = inst_47197__$1);

(statearr_47223[(10)] = inst_47195);

return statearr_47223;
})();
if(cljs.core.truth_(inst_47197__$1)){
var statearr_47224_47241 = state_47211__$1;
(statearr_47224_47241[(1)] = (9));

} else {
var statearr_47225_47242 = state_47211__$1;
(statearr_47225_47242[(1)] = (10));

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
});})(c__28051__auto__))
;
return ((function (switch__28030__auto__,c__28051__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28031__auto__ = null;
var figwheel$client$file_reloading$state_machine__28031__auto____0 = (function (){
var statearr_47229 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47229[(0)] = figwheel$client$file_reloading$state_machine__28031__auto__);

(statearr_47229[(1)] = (1));

return statearr_47229;
});
var figwheel$client$file_reloading$state_machine__28031__auto____1 = (function (state_47211){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_47211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e47230){if((e47230 instanceof Object)){
var ex__28034__auto__ = e47230;
var statearr_47231_47243 = state_47211;
(statearr_47231_47243[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47244 = state_47211;
state_47211 = G__47244;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28031__auto__ = function(state_47211){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28031__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28031__auto____1.call(this,state_47211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28031__auto____0;
figwheel$client$file_reloading$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28031__auto____1;
return figwheel$client$file_reloading$state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto__))
})();
var state__28053__auto__ = (function (){var statearr_47232 = f__28052__auto__.call(null);
(statearr_47232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto__);

return statearr_47232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto__))
);

return c__28051__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47245,callback){
var map__47248 = p__47245;
var map__47248__$1 = ((((!((map__47248 == null)))?((((map__47248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47248):map__47248);
var file_msg = map__47248__$1;
var namespace = cljs.core.get.call(null,map__47248__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47248,map__47248__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47248,map__47248__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__47250){
var map__47253 = p__47250;
var map__47253__$1 = ((((!((map__47253 == null)))?((((map__47253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47253):map__47253);
var file_msg = map__47253__$1;
var namespace = cljs.core.get.call(null,map__47253__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47255){
var map__47258 = p__47255;
var map__47258__$1 = ((((!((map__47258 == null)))?((((map__47258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47258):map__47258);
var file_msg = map__47258__$1;
var namespace = cljs.core.get.call(null,map__47258__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25927__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25927__auto__){
var or__25939__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25939__auto__)){
return or__25939__auto__;
} else {
var or__25939__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25939__auto____$1)){
return or__25939__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25927__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47260,callback){
var map__47263 = p__47260;
var map__47263__$1 = ((((!((map__47263 == null)))?((((map__47263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47263):map__47263);
var file_msg = map__47263__$1;
var request_url = cljs.core.get.call(null,map__47263__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47263__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28051__auto___47367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto___47367,out){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto___47367,out){
return (function (state_47349){
var state_val_47350 = (state_47349[(1)]);
if((state_val_47350 === (1))){
var inst_47323 = cljs.core.seq.call(null,files);
var inst_47324 = cljs.core.first.call(null,inst_47323);
var inst_47325 = cljs.core.next.call(null,inst_47323);
var inst_47326 = files;
var state_47349__$1 = (function (){var statearr_47351 = state_47349;
(statearr_47351[(7)] = inst_47325);

(statearr_47351[(8)] = inst_47326);

(statearr_47351[(9)] = inst_47324);

return statearr_47351;
})();
var statearr_47352_47368 = state_47349__$1;
(statearr_47352_47368[(2)] = null);

(statearr_47352_47368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (2))){
var inst_47332 = (state_47349[(10)]);
var inst_47326 = (state_47349[(8)]);
var inst_47331 = cljs.core.seq.call(null,inst_47326);
var inst_47332__$1 = cljs.core.first.call(null,inst_47331);
var inst_47333 = cljs.core.next.call(null,inst_47331);
var inst_47334 = (inst_47332__$1 == null);
var inst_47335 = cljs.core.not.call(null,inst_47334);
var state_47349__$1 = (function (){var statearr_47353 = state_47349;
(statearr_47353[(10)] = inst_47332__$1);

(statearr_47353[(11)] = inst_47333);

return statearr_47353;
})();
if(inst_47335){
var statearr_47354_47369 = state_47349__$1;
(statearr_47354_47369[(1)] = (4));

} else {
var statearr_47355_47370 = state_47349__$1;
(statearr_47355_47370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (3))){
var inst_47347 = (state_47349[(2)]);
var state_47349__$1 = state_47349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47349__$1,inst_47347);
} else {
if((state_val_47350 === (4))){
var inst_47332 = (state_47349[(10)]);
var inst_47337 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47332);
var state_47349__$1 = state_47349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47349__$1,(7),inst_47337);
} else {
if((state_val_47350 === (5))){
var inst_47343 = cljs.core.async.close_BANG_.call(null,out);
var state_47349__$1 = state_47349;
var statearr_47356_47371 = state_47349__$1;
(statearr_47356_47371[(2)] = inst_47343);

(statearr_47356_47371[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (6))){
var inst_47345 = (state_47349[(2)]);
var state_47349__$1 = state_47349;
var statearr_47357_47372 = state_47349__$1;
(statearr_47357_47372[(2)] = inst_47345);

(statearr_47357_47372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47350 === (7))){
var inst_47333 = (state_47349[(11)]);
var inst_47339 = (state_47349[(2)]);
var inst_47340 = cljs.core.async.put_BANG_.call(null,out,inst_47339);
var inst_47326 = inst_47333;
var state_47349__$1 = (function (){var statearr_47358 = state_47349;
(statearr_47358[(8)] = inst_47326);

(statearr_47358[(12)] = inst_47340);

return statearr_47358;
})();
var statearr_47359_47373 = state_47349__$1;
(statearr_47359_47373[(2)] = null);

(statearr_47359_47373[(1)] = (2));


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
});})(c__28051__auto___47367,out))
;
return ((function (switch__28030__auto__,c__28051__auto___47367,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28031__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28031__auto____0 = (function (){
var statearr_47363 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47363[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28031__auto__);

(statearr_47363[(1)] = (1));

return statearr_47363;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28031__auto____1 = (function (state_47349){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_47349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e47364){if((e47364 instanceof Object)){
var ex__28034__auto__ = e47364;
var statearr_47365_47374 = state_47349;
(statearr_47365_47374[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47375 = state_47349;
state_47349 = G__47375;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28031__auto__ = function(state_47349){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28031__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28031__auto____1.call(this,state_47349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28031__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28031__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto___47367,out))
})();
var state__28053__auto__ = (function (){var statearr_47366 = f__28052__auto__.call(null);
(statearr_47366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___47367);

return statearr_47366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto___47367,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47376,opts){
var map__47380 = p__47376;
var map__47380__$1 = ((((!((map__47380 == null)))?((((map__47380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47380):map__47380);
var eval_body__$1 = cljs.core.get.call(null,map__47380__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47380__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25927__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25927__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25927__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e47382){var e = e47382;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__47383_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47383_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__47392){
var vec__47393 = p__47392;
var k = cljs.core.nth.call(null,vec__47393,(0),null);
var v = cljs.core.nth.call(null,vec__47393,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47396){
var vec__47397 = p__47396;
var k = cljs.core.nth.call(null,vec__47397,(0),null);
var v = cljs.core.nth.call(null,vec__47397,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47403,p__47404){
var map__47651 = p__47403;
var map__47651__$1 = ((((!((map__47651 == null)))?((((map__47651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47651):map__47651);
var opts = map__47651__$1;
var before_jsload = cljs.core.get.call(null,map__47651__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__47651__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__47651__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__47652 = p__47404;
var map__47652__$1 = ((((!((map__47652 == null)))?((((map__47652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47652):map__47652);
var msg = map__47652__$1;
var files = cljs.core.get.call(null,map__47652__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__47652__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__47652__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_47805){
var state_val_47806 = (state_47805[(1)]);
if((state_val_47806 === (7))){
var inst_47666 = (state_47805[(7)]);
var inst_47667 = (state_47805[(8)]);
var inst_47669 = (state_47805[(9)]);
var inst_47668 = (state_47805[(10)]);
var inst_47674 = cljs.core._nth.call(null,inst_47667,inst_47669);
var inst_47675 = figwheel.client.file_reloading.eval_body.call(null,inst_47674,opts);
var inst_47676 = (inst_47669 + (1));
var tmp47807 = inst_47666;
var tmp47808 = inst_47667;
var tmp47809 = inst_47668;
var inst_47666__$1 = tmp47807;
var inst_47667__$1 = tmp47808;
var inst_47668__$1 = tmp47809;
var inst_47669__$1 = inst_47676;
var state_47805__$1 = (function (){var statearr_47810 = state_47805;
(statearr_47810[(7)] = inst_47666__$1);

(statearr_47810[(11)] = inst_47675);

(statearr_47810[(8)] = inst_47667__$1);

(statearr_47810[(9)] = inst_47669__$1);

(statearr_47810[(10)] = inst_47668__$1);

return statearr_47810;
})();
var statearr_47811_47897 = state_47805__$1;
(statearr_47811_47897[(2)] = null);

(statearr_47811_47897[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (20))){
var inst_47709 = (state_47805[(12)]);
var inst_47717 = figwheel.client.file_reloading.sort_files.call(null,inst_47709);
var state_47805__$1 = state_47805;
var statearr_47812_47898 = state_47805__$1;
(statearr_47812_47898[(2)] = inst_47717);

(statearr_47812_47898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (27))){
var state_47805__$1 = state_47805;
var statearr_47813_47899 = state_47805__$1;
(statearr_47813_47899[(2)] = null);

(statearr_47813_47899[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (1))){
var inst_47658 = (state_47805[(13)]);
var inst_47655 = before_jsload.call(null,files);
var inst_47656 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_47657 = (function (){return ((function (inst_47658,inst_47655,inst_47656,state_val_47806,c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47400_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47400_SHARP_);
});
;})(inst_47658,inst_47655,inst_47656,state_val_47806,c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47658__$1 = cljs.core.filter.call(null,inst_47657,files);
var inst_47659 = cljs.core.not_empty.call(null,inst_47658__$1);
var state_47805__$1 = (function (){var statearr_47814 = state_47805;
(statearr_47814[(14)] = inst_47655);

(statearr_47814[(13)] = inst_47658__$1);

(statearr_47814[(15)] = inst_47656);

return statearr_47814;
})();
if(cljs.core.truth_(inst_47659)){
var statearr_47815_47900 = state_47805__$1;
(statearr_47815_47900[(1)] = (2));

} else {
var statearr_47816_47901 = state_47805__$1;
(statearr_47816_47901[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (24))){
var state_47805__$1 = state_47805;
var statearr_47817_47902 = state_47805__$1;
(statearr_47817_47902[(2)] = null);

(statearr_47817_47902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (39))){
var inst_47759 = (state_47805[(16)]);
var state_47805__$1 = state_47805;
var statearr_47818_47903 = state_47805__$1;
(statearr_47818_47903[(2)] = inst_47759);

(statearr_47818_47903[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (46))){
var inst_47800 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47819_47904 = state_47805__$1;
(statearr_47819_47904[(2)] = inst_47800);

(statearr_47819_47904[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (4))){
var inst_47703 = (state_47805[(2)]);
var inst_47704 = cljs.core.List.EMPTY;
var inst_47705 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_47704);
var inst_47706 = (function (){return ((function (inst_47703,inst_47704,inst_47705,state_val_47806,c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47401_SHARP_){
var and__25927__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47401_SHARP_);
if(cljs.core.truth_(and__25927__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47401_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__47401_SHARP_)));
} else {
return and__25927__auto__;
}
});
;})(inst_47703,inst_47704,inst_47705,state_val_47806,c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47707 = cljs.core.filter.call(null,inst_47706,files);
var inst_47708 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_47709 = cljs.core.concat.call(null,inst_47707,inst_47708);
var state_47805__$1 = (function (){var statearr_47820 = state_47805;
(statearr_47820[(12)] = inst_47709);

(statearr_47820[(17)] = inst_47703);

(statearr_47820[(18)] = inst_47705);

return statearr_47820;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_47821_47905 = state_47805__$1;
(statearr_47821_47905[(1)] = (16));

} else {
var statearr_47822_47906 = state_47805__$1;
(statearr_47822_47906[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (15))){
var inst_47693 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47823_47907 = state_47805__$1;
(statearr_47823_47907[(2)] = inst_47693);

(statearr_47823_47907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (21))){
var inst_47719 = (state_47805[(19)]);
var inst_47719__$1 = (state_47805[(2)]);
var inst_47720 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_47719__$1);
var state_47805__$1 = (function (){var statearr_47824 = state_47805;
(statearr_47824[(19)] = inst_47719__$1);

return statearr_47824;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47805__$1,(22),inst_47720);
} else {
if((state_val_47806 === (31))){
var inst_47803 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47805__$1,inst_47803);
} else {
if((state_val_47806 === (32))){
var inst_47759 = (state_47805[(16)]);
var inst_47764 = inst_47759.cljs$lang$protocol_mask$partition0$;
var inst_47765 = (inst_47764 & (64));
var inst_47766 = inst_47759.cljs$core$ISeq$;
var inst_47767 = (inst_47765) || (inst_47766);
var state_47805__$1 = state_47805;
if(cljs.core.truth_(inst_47767)){
var statearr_47825_47908 = state_47805__$1;
(statearr_47825_47908[(1)] = (35));

} else {
var statearr_47826_47909 = state_47805__$1;
(statearr_47826_47909[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (40))){
var inst_47780 = (state_47805[(20)]);
var inst_47779 = (state_47805[(2)]);
var inst_47780__$1 = cljs.core.get.call(null,inst_47779,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_47781 = cljs.core.get.call(null,inst_47779,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_47782 = cljs.core.not_empty.call(null,inst_47780__$1);
var state_47805__$1 = (function (){var statearr_47827 = state_47805;
(statearr_47827[(20)] = inst_47780__$1);

(statearr_47827[(21)] = inst_47781);

return statearr_47827;
})();
if(cljs.core.truth_(inst_47782)){
var statearr_47828_47910 = state_47805__$1;
(statearr_47828_47910[(1)] = (41));

} else {
var statearr_47829_47911 = state_47805__$1;
(statearr_47829_47911[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (33))){
var state_47805__$1 = state_47805;
var statearr_47830_47912 = state_47805__$1;
(statearr_47830_47912[(2)] = false);

(statearr_47830_47912[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (13))){
var inst_47679 = (state_47805[(22)]);
var inst_47683 = cljs.core.chunk_first.call(null,inst_47679);
var inst_47684 = cljs.core.chunk_rest.call(null,inst_47679);
var inst_47685 = cljs.core.count.call(null,inst_47683);
var inst_47666 = inst_47684;
var inst_47667 = inst_47683;
var inst_47668 = inst_47685;
var inst_47669 = (0);
var state_47805__$1 = (function (){var statearr_47831 = state_47805;
(statearr_47831[(7)] = inst_47666);

(statearr_47831[(8)] = inst_47667);

(statearr_47831[(9)] = inst_47669);

(statearr_47831[(10)] = inst_47668);

return statearr_47831;
})();
var statearr_47832_47913 = state_47805__$1;
(statearr_47832_47913[(2)] = null);

(statearr_47832_47913[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (22))){
var inst_47723 = (state_47805[(23)]);
var inst_47727 = (state_47805[(24)]);
var inst_47719 = (state_47805[(19)]);
var inst_47722 = (state_47805[(25)]);
var inst_47722__$1 = (state_47805[(2)]);
var inst_47723__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47722__$1);
var inst_47724 = (function (){var all_files = inst_47719;
var res_SINGLEQUOTE_ = inst_47722__$1;
var res = inst_47723__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_47723,inst_47727,inst_47719,inst_47722,inst_47722__$1,inst_47723__$1,state_val_47806,c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47402_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47402_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_47723,inst_47727,inst_47719,inst_47722,inst_47722__$1,inst_47723__$1,state_val_47806,c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47725 = cljs.core.filter.call(null,inst_47724,inst_47722__$1);
var inst_47726 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_47727__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47726);
var inst_47728 = cljs.core.not_empty.call(null,inst_47727__$1);
var state_47805__$1 = (function (){var statearr_47833 = state_47805;
(statearr_47833[(23)] = inst_47723__$1);

(statearr_47833[(24)] = inst_47727__$1);

(statearr_47833[(26)] = inst_47725);

(statearr_47833[(25)] = inst_47722__$1);

return statearr_47833;
})();
if(cljs.core.truth_(inst_47728)){
var statearr_47834_47914 = state_47805__$1;
(statearr_47834_47914[(1)] = (23));

} else {
var statearr_47835_47915 = state_47805__$1;
(statearr_47835_47915[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (36))){
var state_47805__$1 = state_47805;
var statearr_47836_47916 = state_47805__$1;
(statearr_47836_47916[(2)] = false);

(statearr_47836_47916[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (41))){
var inst_47780 = (state_47805[(20)]);
var inst_47784 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_47785 = cljs.core.map.call(null,inst_47784,inst_47780);
var inst_47786 = cljs.core.pr_str.call(null,inst_47785);
var inst_47787 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_47786)].join('');
var inst_47788 = figwheel.client.utils.log.call(null,inst_47787);
var state_47805__$1 = state_47805;
var statearr_47837_47917 = state_47805__$1;
(statearr_47837_47917[(2)] = inst_47788);

(statearr_47837_47917[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (43))){
var inst_47781 = (state_47805[(21)]);
var inst_47791 = (state_47805[(2)]);
var inst_47792 = cljs.core.not_empty.call(null,inst_47781);
var state_47805__$1 = (function (){var statearr_47838 = state_47805;
(statearr_47838[(27)] = inst_47791);

return statearr_47838;
})();
if(cljs.core.truth_(inst_47792)){
var statearr_47839_47918 = state_47805__$1;
(statearr_47839_47918[(1)] = (44));

} else {
var statearr_47840_47919 = state_47805__$1;
(statearr_47840_47919[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (29))){
var inst_47723 = (state_47805[(23)]);
var inst_47759 = (state_47805[(16)]);
var inst_47727 = (state_47805[(24)]);
var inst_47719 = (state_47805[(19)]);
var inst_47725 = (state_47805[(26)]);
var inst_47722 = (state_47805[(25)]);
var inst_47755 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_47758 = (function (){var all_files = inst_47719;
var res_SINGLEQUOTE_ = inst_47722;
var res = inst_47723;
var files_not_loaded = inst_47725;
var dependencies_that_loaded = inst_47727;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47723,inst_47759,inst_47727,inst_47719,inst_47725,inst_47722,inst_47755,state_val_47806,c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47757){
var map__47841 = p__47757;
var map__47841__$1 = ((((!((map__47841 == null)))?((((map__47841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47841):map__47841);
var namespace = cljs.core.get.call(null,map__47841__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47723,inst_47759,inst_47727,inst_47719,inst_47725,inst_47722,inst_47755,state_val_47806,c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47759__$1 = cljs.core.group_by.call(null,inst_47758,inst_47725);
var inst_47761 = (inst_47759__$1 == null);
var inst_47762 = cljs.core.not.call(null,inst_47761);
var state_47805__$1 = (function (){var statearr_47843 = state_47805;
(statearr_47843[(16)] = inst_47759__$1);

(statearr_47843[(28)] = inst_47755);

return statearr_47843;
})();
if(inst_47762){
var statearr_47844_47920 = state_47805__$1;
(statearr_47844_47920[(1)] = (32));

} else {
var statearr_47845_47921 = state_47805__$1;
(statearr_47845_47921[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (44))){
var inst_47781 = (state_47805[(21)]);
var inst_47794 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47781);
var inst_47795 = cljs.core.pr_str.call(null,inst_47794);
var inst_47796 = [cljs.core.str("not required: "),cljs.core.str(inst_47795)].join('');
var inst_47797 = figwheel.client.utils.log.call(null,inst_47796);
var state_47805__$1 = state_47805;
var statearr_47846_47922 = state_47805__$1;
(statearr_47846_47922[(2)] = inst_47797);

(statearr_47846_47922[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (6))){
var inst_47700 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47847_47923 = state_47805__$1;
(statearr_47847_47923[(2)] = inst_47700);

(statearr_47847_47923[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (28))){
var inst_47725 = (state_47805[(26)]);
var inst_47752 = (state_47805[(2)]);
var inst_47753 = cljs.core.not_empty.call(null,inst_47725);
var state_47805__$1 = (function (){var statearr_47848 = state_47805;
(statearr_47848[(29)] = inst_47752);

return statearr_47848;
})();
if(cljs.core.truth_(inst_47753)){
var statearr_47849_47924 = state_47805__$1;
(statearr_47849_47924[(1)] = (29));

} else {
var statearr_47850_47925 = state_47805__$1;
(statearr_47850_47925[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (25))){
var inst_47723 = (state_47805[(23)]);
var inst_47739 = (state_47805[(2)]);
var inst_47740 = cljs.core.not_empty.call(null,inst_47723);
var state_47805__$1 = (function (){var statearr_47851 = state_47805;
(statearr_47851[(30)] = inst_47739);

return statearr_47851;
})();
if(cljs.core.truth_(inst_47740)){
var statearr_47852_47926 = state_47805__$1;
(statearr_47852_47926[(1)] = (26));

} else {
var statearr_47853_47927 = state_47805__$1;
(statearr_47853_47927[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (34))){
var inst_47774 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
if(cljs.core.truth_(inst_47774)){
var statearr_47854_47928 = state_47805__$1;
(statearr_47854_47928[(1)] = (38));

} else {
var statearr_47855_47929 = state_47805__$1;
(statearr_47855_47929[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (17))){
var state_47805__$1 = state_47805;
var statearr_47856_47930 = state_47805__$1;
(statearr_47856_47930[(2)] = recompile_dependents);

(statearr_47856_47930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (3))){
var state_47805__$1 = state_47805;
var statearr_47857_47931 = state_47805__$1;
(statearr_47857_47931[(2)] = null);

(statearr_47857_47931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (12))){
var inst_47696 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47858_47932 = state_47805__$1;
(statearr_47858_47932[(2)] = inst_47696);

(statearr_47858_47932[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (2))){
var inst_47658 = (state_47805[(13)]);
var inst_47665 = cljs.core.seq.call(null,inst_47658);
var inst_47666 = inst_47665;
var inst_47667 = null;
var inst_47668 = (0);
var inst_47669 = (0);
var state_47805__$1 = (function (){var statearr_47859 = state_47805;
(statearr_47859[(7)] = inst_47666);

(statearr_47859[(8)] = inst_47667);

(statearr_47859[(9)] = inst_47669);

(statearr_47859[(10)] = inst_47668);

return statearr_47859;
})();
var statearr_47860_47933 = state_47805__$1;
(statearr_47860_47933[(2)] = null);

(statearr_47860_47933[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (23))){
var inst_47723 = (state_47805[(23)]);
var inst_47727 = (state_47805[(24)]);
var inst_47719 = (state_47805[(19)]);
var inst_47725 = (state_47805[(26)]);
var inst_47722 = (state_47805[(25)]);
var inst_47730 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_47732 = (function (){var all_files = inst_47719;
var res_SINGLEQUOTE_ = inst_47722;
var res = inst_47723;
var files_not_loaded = inst_47725;
var dependencies_that_loaded = inst_47727;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47723,inst_47727,inst_47719,inst_47725,inst_47722,inst_47730,state_val_47806,c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47731){
var map__47861 = p__47731;
var map__47861__$1 = ((((!((map__47861 == null)))?((((map__47861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47861):map__47861);
var request_url = cljs.core.get.call(null,map__47861__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47723,inst_47727,inst_47719,inst_47725,inst_47722,inst_47730,state_val_47806,c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47733 = cljs.core.reverse.call(null,inst_47727);
var inst_47734 = cljs.core.map.call(null,inst_47732,inst_47733);
var inst_47735 = cljs.core.pr_str.call(null,inst_47734);
var inst_47736 = figwheel.client.utils.log.call(null,inst_47735);
var state_47805__$1 = (function (){var statearr_47863 = state_47805;
(statearr_47863[(31)] = inst_47730);

return statearr_47863;
})();
var statearr_47864_47934 = state_47805__$1;
(statearr_47864_47934[(2)] = inst_47736);

(statearr_47864_47934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (35))){
var state_47805__$1 = state_47805;
var statearr_47865_47935 = state_47805__$1;
(statearr_47865_47935[(2)] = true);

(statearr_47865_47935[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (19))){
var inst_47709 = (state_47805[(12)]);
var inst_47715 = figwheel.client.file_reloading.expand_files.call(null,inst_47709);
var state_47805__$1 = state_47805;
var statearr_47866_47936 = state_47805__$1;
(statearr_47866_47936[(2)] = inst_47715);

(statearr_47866_47936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (11))){
var state_47805__$1 = state_47805;
var statearr_47867_47937 = state_47805__$1;
(statearr_47867_47937[(2)] = null);

(statearr_47867_47937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (9))){
var inst_47698 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47868_47938 = state_47805__$1;
(statearr_47868_47938[(2)] = inst_47698);

(statearr_47868_47938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (5))){
var inst_47669 = (state_47805[(9)]);
var inst_47668 = (state_47805[(10)]);
var inst_47671 = (inst_47669 < inst_47668);
var inst_47672 = inst_47671;
var state_47805__$1 = state_47805;
if(cljs.core.truth_(inst_47672)){
var statearr_47869_47939 = state_47805__$1;
(statearr_47869_47939[(1)] = (7));

} else {
var statearr_47870_47940 = state_47805__$1;
(statearr_47870_47940[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (14))){
var inst_47679 = (state_47805[(22)]);
var inst_47688 = cljs.core.first.call(null,inst_47679);
var inst_47689 = figwheel.client.file_reloading.eval_body.call(null,inst_47688,opts);
var inst_47690 = cljs.core.next.call(null,inst_47679);
var inst_47666 = inst_47690;
var inst_47667 = null;
var inst_47668 = (0);
var inst_47669 = (0);
var state_47805__$1 = (function (){var statearr_47871 = state_47805;
(statearr_47871[(32)] = inst_47689);

(statearr_47871[(7)] = inst_47666);

(statearr_47871[(8)] = inst_47667);

(statearr_47871[(9)] = inst_47669);

(statearr_47871[(10)] = inst_47668);

return statearr_47871;
})();
var statearr_47872_47941 = state_47805__$1;
(statearr_47872_47941[(2)] = null);

(statearr_47872_47941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (45))){
var state_47805__$1 = state_47805;
var statearr_47873_47942 = state_47805__$1;
(statearr_47873_47942[(2)] = null);

(statearr_47873_47942[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (26))){
var inst_47723 = (state_47805[(23)]);
var inst_47727 = (state_47805[(24)]);
var inst_47719 = (state_47805[(19)]);
var inst_47725 = (state_47805[(26)]);
var inst_47722 = (state_47805[(25)]);
var inst_47742 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_47744 = (function (){var all_files = inst_47719;
var res_SINGLEQUOTE_ = inst_47722;
var res = inst_47723;
var files_not_loaded = inst_47725;
var dependencies_that_loaded = inst_47727;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47723,inst_47727,inst_47719,inst_47725,inst_47722,inst_47742,state_val_47806,c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47743){
var map__47874 = p__47743;
var map__47874__$1 = ((((!((map__47874 == null)))?((((map__47874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47874):map__47874);
var namespace = cljs.core.get.call(null,map__47874__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__47874__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47723,inst_47727,inst_47719,inst_47725,inst_47722,inst_47742,state_val_47806,c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47745 = cljs.core.map.call(null,inst_47744,inst_47723);
var inst_47746 = cljs.core.pr_str.call(null,inst_47745);
var inst_47747 = figwheel.client.utils.log.call(null,inst_47746);
var inst_47748 = (function (){var all_files = inst_47719;
var res_SINGLEQUOTE_ = inst_47722;
var res = inst_47723;
var files_not_loaded = inst_47725;
var dependencies_that_loaded = inst_47727;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47723,inst_47727,inst_47719,inst_47725,inst_47722,inst_47742,inst_47744,inst_47745,inst_47746,inst_47747,state_val_47806,c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47723,inst_47727,inst_47719,inst_47725,inst_47722,inst_47742,inst_47744,inst_47745,inst_47746,inst_47747,state_val_47806,c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47749 = setTimeout(inst_47748,(10));
var state_47805__$1 = (function (){var statearr_47876 = state_47805;
(statearr_47876[(33)] = inst_47747);

(statearr_47876[(34)] = inst_47742);

return statearr_47876;
})();
var statearr_47877_47943 = state_47805__$1;
(statearr_47877_47943[(2)] = inst_47749);

(statearr_47877_47943[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (16))){
var state_47805__$1 = state_47805;
var statearr_47878_47944 = state_47805__$1;
(statearr_47878_47944[(2)] = reload_dependents);

(statearr_47878_47944[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (38))){
var inst_47759 = (state_47805[(16)]);
var inst_47776 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47759);
var state_47805__$1 = state_47805;
var statearr_47879_47945 = state_47805__$1;
(statearr_47879_47945[(2)] = inst_47776);

(statearr_47879_47945[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (30))){
var state_47805__$1 = state_47805;
var statearr_47880_47946 = state_47805__$1;
(statearr_47880_47946[(2)] = null);

(statearr_47880_47946[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (10))){
var inst_47679 = (state_47805[(22)]);
var inst_47681 = cljs.core.chunked_seq_QMARK_.call(null,inst_47679);
var state_47805__$1 = state_47805;
if(inst_47681){
var statearr_47881_47947 = state_47805__$1;
(statearr_47881_47947[(1)] = (13));

} else {
var statearr_47882_47948 = state_47805__$1;
(statearr_47882_47948[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (18))){
var inst_47713 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
if(cljs.core.truth_(inst_47713)){
var statearr_47883_47949 = state_47805__$1;
(statearr_47883_47949[(1)] = (19));

} else {
var statearr_47884_47950 = state_47805__$1;
(statearr_47884_47950[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (42))){
var state_47805__$1 = state_47805;
var statearr_47885_47951 = state_47805__$1;
(statearr_47885_47951[(2)] = null);

(statearr_47885_47951[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (37))){
var inst_47771 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47886_47952 = state_47805__$1;
(statearr_47886_47952[(2)] = inst_47771);

(statearr_47886_47952[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (8))){
var inst_47679 = (state_47805[(22)]);
var inst_47666 = (state_47805[(7)]);
var inst_47679__$1 = cljs.core.seq.call(null,inst_47666);
var state_47805__$1 = (function (){var statearr_47887 = state_47805;
(statearr_47887[(22)] = inst_47679__$1);

return statearr_47887;
})();
if(inst_47679__$1){
var statearr_47888_47953 = state_47805__$1;
(statearr_47888_47953[(1)] = (10));

} else {
var statearr_47889_47954 = state_47805__$1;
(statearr_47889_47954[(1)] = (11));

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
});})(c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28030__auto__,c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28031__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28031__auto____0 = (function (){
var statearr_47893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47893[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28031__auto__);

(statearr_47893[(1)] = (1));

return statearr_47893;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28031__auto____1 = (function (state_47805){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_47805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e47894){if((e47894 instanceof Object)){
var ex__28034__auto__ = e47894;
var statearr_47895_47955 = state_47805;
(statearr_47895_47955[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47956 = state_47805;
state_47805 = G__47956;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28031__auto__ = function(state_47805){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28031__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28031__auto____1.call(this,state_47805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28031__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28031__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28053__auto__ = (function (){var statearr_47896 = f__28052__auto__.call(null);
(statearr_47896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto__);

return statearr_47896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto__,map__47651,map__47651__$1,opts,before_jsload,on_jsload,reload_dependents,map__47652,map__47652__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28051__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__47959,link){
var map__47962 = p__47959;
var map__47962__$1 = ((((!((map__47962 == null)))?((((map__47962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47962):map__47962);
var file = cljs.core.get.call(null,map__47962__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__47962,map__47962__$1,file){
return (function (p1__47957_SHARP_,p2__47958_SHARP_){
if(cljs.core._EQ_.call(null,p1__47957_SHARP_,p2__47958_SHARP_)){
return p1__47957_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__47962,map__47962__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__47968){
var map__47969 = p__47968;
var map__47969__$1 = ((((!((map__47969 == null)))?((((map__47969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47969):map__47969);
var match_length = cljs.core.get.call(null,map__47969__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__47969__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__47964_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__47964_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__47971_SHARP_,p2__47972_SHARP_){
return cljs.core.assoc.call(null,p1__47971_SHARP_,cljs.core.get.call(null,p2__47972_SHARP_,key),p2__47972_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_47973 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_47973);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_47973);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__47974,p__47975){
var map__47980 = p__47974;
var map__47980__$1 = ((((!((map__47980 == null)))?((((map__47980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47980):map__47980);
var on_cssload = cljs.core.get.call(null,map__47980__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__47981 = p__47975;
var map__47981__$1 = ((((!((map__47981 == null)))?((((map__47981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47981):map__47981);
var files_msg = map__47981__$1;
var files = cljs.core.get.call(null,map__47981__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1496347449910