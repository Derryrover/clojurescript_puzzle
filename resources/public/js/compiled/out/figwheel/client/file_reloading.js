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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33835_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33835_SHARP_));
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
var seq__33840 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33841 = null;
var count__33842 = (0);
var i__33843 = (0);
while(true){
if((i__33843 < count__33842)){
var n = cljs.core._nth.call(null,chunk__33841,i__33843);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33844 = seq__33840;
var G__33845 = chunk__33841;
var G__33846 = count__33842;
var G__33847 = (i__33843 + (1));
seq__33840 = G__33844;
chunk__33841 = G__33845;
count__33842 = G__33846;
i__33843 = G__33847;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33840);
if(temp__4657__auto__){
var seq__33840__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33840__$1)){
var c__26750__auto__ = cljs.core.chunk_first.call(null,seq__33840__$1);
var G__33848 = cljs.core.chunk_rest.call(null,seq__33840__$1);
var G__33849 = c__26750__auto__;
var G__33850 = cljs.core.count.call(null,c__26750__auto__);
var G__33851 = (0);
seq__33840 = G__33848;
chunk__33841 = G__33849;
count__33842 = G__33850;
i__33843 = G__33851;
continue;
} else {
var n = cljs.core.first.call(null,seq__33840__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33852 = cljs.core.next.call(null,seq__33840__$1);
var G__33853 = null;
var G__33854 = (0);
var G__33855 = (0);
seq__33840 = G__33852;
chunk__33841 = G__33853;
count__33842 = G__33854;
i__33843 = G__33855;
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

var seq__33906_33917 = cljs.core.seq.call(null,deps);
var chunk__33907_33918 = null;
var count__33908_33919 = (0);
var i__33909_33920 = (0);
while(true){
if((i__33909_33920 < count__33908_33919)){
var dep_33921 = cljs.core._nth.call(null,chunk__33907_33918,i__33909_33920);
topo_sort_helper_STAR_.call(null,dep_33921,(depth + (1)),state);

var G__33922 = seq__33906_33917;
var G__33923 = chunk__33907_33918;
var G__33924 = count__33908_33919;
var G__33925 = (i__33909_33920 + (1));
seq__33906_33917 = G__33922;
chunk__33907_33918 = G__33923;
count__33908_33919 = G__33924;
i__33909_33920 = G__33925;
continue;
} else {
var temp__4657__auto___33926 = cljs.core.seq.call(null,seq__33906_33917);
if(temp__4657__auto___33926){
var seq__33906_33927__$1 = temp__4657__auto___33926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33906_33927__$1)){
var c__26750__auto___33928 = cljs.core.chunk_first.call(null,seq__33906_33927__$1);
var G__33929 = cljs.core.chunk_rest.call(null,seq__33906_33927__$1);
var G__33930 = c__26750__auto___33928;
var G__33931 = cljs.core.count.call(null,c__26750__auto___33928);
var G__33932 = (0);
seq__33906_33917 = G__33929;
chunk__33907_33918 = G__33930;
count__33908_33919 = G__33931;
i__33909_33920 = G__33932;
continue;
} else {
var dep_33933 = cljs.core.first.call(null,seq__33906_33927__$1);
topo_sort_helper_STAR_.call(null,dep_33933,(depth + (1)),state);

var G__33934 = cljs.core.next.call(null,seq__33906_33927__$1);
var G__33935 = null;
var G__33936 = (0);
var G__33937 = (0);
seq__33906_33917 = G__33934;
chunk__33907_33918 = G__33935;
count__33908_33919 = G__33936;
i__33909_33920 = G__33937;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33910){
var vec__33914 = p__33910;
var seq__33915 = cljs.core.seq.call(null,vec__33914);
var first__33916 = cljs.core.first.call(null,seq__33915);
var seq__33915__$1 = cljs.core.next.call(null,seq__33915);
var x = first__33916;
var xs = seq__33915__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33914,seq__33915,first__33916,seq__33915__$1,x,xs,get_deps__$1){
return (function (p1__33856_SHARP_){
return clojure.set.difference.call(null,p1__33856_SHARP_,x);
});})(vec__33914,seq__33915,first__33916,seq__33915__$1,x,xs,get_deps__$1))
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
var seq__33950 = cljs.core.seq.call(null,provides);
var chunk__33951 = null;
var count__33952 = (0);
var i__33953 = (0);
while(true){
if((i__33953 < count__33952)){
var prov = cljs.core._nth.call(null,chunk__33951,i__33953);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33954_33962 = cljs.core.seq.call(null,requires);
var chunk__33955_33963 = null;
var count__33956_33964 = (0);
var i__33957_33965 = (0);
while(true){
if((i__33957_33965 < count__33956_33964)){
var req_33966 = cljs.core._nth.call(null,chunk__33955_33963,i__33957_33965);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33966,prov);

var G__33967 = seq__33954_33962;
var G__33968 = chunk__33955_33963;
var G__33969 = count__33956_33964;
var G__33970 = (i__33957_33965 + (1));
seq__33954_33962 = G__33967;
chunk__33955_33963 = G__33968;
count__33956_33964 = G__33969;
i__33957_33965 = G__33970;
continue;
} else {
var temp__4657__auto___33971 = cljs.core.seq.call(null,seq__33954_33962);
if(temp__4657__auto___33971){
var seq__33954_33972__$1 = temp__4657__auto___33971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33954_33972__$1)){
var c__26750__auto___33973 = cljs.core.chunk_first.call(null,seq__33954_33972__$1);
var G__33974 = cljs.core.chunk_rest.call(null,seq__33954_33972__$1);
var G__33975 = c__26750__auto___33973;
var G__33976 = cljs.core.count.call(null,c__26750__auto___33973);
var G__33977 = (0);
seq__33954_33962 = G__33974;
chunk__33955_33963 = G__33975;
count__33956_33964 = G__33976;
i__33957_33965 = G__33977;
continue;
} else {
var req_33978 = cljs.core.first.call(null,seq__33954_33972__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33978,prov);

var G__33979 = cljs.core.next.call(null,seq__33954_33972__$1);
var G__33980 = null;
var G__33981 = (0);
var G__33982 = (0);
seq__33954_33962 = G__33979;
chunk__33955_33963 = G__33980;
count__33956_33964 = G__33981;
i__33957_33965 = G__33982;
continue;
}
} else {
}
}
break;
}

var G__33983 = seq__33950;
var G__33984 = chunk__33951;
var G__33985 = count__33952;
var G__33986 = (i__33953 + (1));
seq__33950 = G__33983;
chunk__33951 = G__33984;
count__33952 = G__33985;
i__33953 = G__33986;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33950);
if(temp__4657__auto__){
var seq__33950__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33950__$1)){
var c__26750__auto__ = cljs.core.chunk_first.call(null,seq__33950__$1);
var G__33987 = cljs.core.chunk_rest.call(null,seq__33950__$1);
var G__33988 = c__26750__auto__;
var G__33989 = cljs.core.count.call(null,c__26750__auto__);
var G__33990 = (0);
seq__33950 = G__33987;
chunk__33951 = G__33988;
count__33952 = G__33989;
i__33953 = G__33990;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33950__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33958_33991 = cljs.core.seq.call(null,requires);
var chunk__33959_33992 = null;
var count__33960_33993 = (0);
var i__33961_33994 = (0);
while(true){
if((i__33961_33994 < count__33960_33993)){
var req_33995 = cljs.core._nth.call(null,chunk__33959_33992,i__33961_33994);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33995,prov);

var G__33996 = seq__33958_33991;
var G__33997 = chunk__33959_33992;
var G__33998 = count__33960_33993;
var G__33999 = (i__33961_33994 + (1));
seq__33958_33991 = G__33996;
chunk__33959_33992 = G__33997;
count__33960_33993 = G__33998;
i__33961_33994 = G__33999;
continue;
} else {
var temp__4657__auto___34000__$1 = cljs.core.seq.call(null,seq__33958_33991);
if(temp__4657__auto___34000__$1){
var seq__33958_34001__$1 = temp__4657__auto___34000__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33958_34001__$1)){
var c__26750__auto___34002 = cljs.core.chunk_first.call(null,seq__33958_34001__$1);
var G__34003 = cljs.core.chunk_rest.call(null,seq__33958_34001__$1);
var G__34004 = c__26750__auto___34002;
var G__34005 = cljs.core.count.call(null,c__26750__auto___34002);
var G__34006 = (0);
seq__33958_33991 = G__34003;
chunk__33959_33992 = G__34004;
count__33960_33993 = G__34005;
i__33961_33994 = G__34006;
continue;
} else {
var req_34007 = cljs.core.first.call(null,seq__33958_34001__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34007,prov);

var G__34008 = cljs.core.next.call(null,seq__33958_34001__$1);
var G__34009 = null;
var G__34010 = (0);
var G__34011 = (0);
seq__33958_33991 = G__34008;
chunk__33959_33992 = G__34009;
count__33960_33993 = G__34010;
i__33961_33994 = G__34011;
continue;
}
} else {
}
}
break;
}

var G__34012 = cljs.core.next.call(null,seq__33950__$1);
var G__34013 = null;
var G__34014 = (0);
var G__34015 = (0);
seq__33950 = G__34012;
chunk__33951 = G__34013;
count__33952 = G__34014;
i__33953 = G__34015;
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
var seq__34020_34024 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34021_34025 = null;
var count__34022_34026 = (0);
var i__34023_34027 = (0);
while(true){
if((i__34023_34027 < count__34022_34026)){
var ns_34028 = cljs.core._nth.call(null,chunk__34021_34025,i__34023_34027);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34028);

var G__34029 = seq__34020_34024;
var G__34030 = chunk__34021_34025;
var G__34031 = count__34022_34026;
var G__34032 = (i__34023_34027 + (1));
seq__34020_34024 = G__34029;
chunk__34021_34025 = G__34030;
count__34022_34026 = G__34031;
i__34023_34027 = G__34032;
continue;
} else {
var temp__4657__auto___34033 = cljs.core.seq.call(null,seq__34020_34024);
if(temp__4657__auto___34033){
var seq__34020_34034__$1 = temp__4657__auto___34033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34020_34034__$1)){
var c__26750__auto___34035 = cljs.core.chunk_first.call(null,seq__34020_34034__$1);
var G__34036 = cljs.core.chunk_rest.call(null,seq__34020_34034__$1);
var G__34037 = c__26750__auto___34035;
var G__34038 = cljs.core.count.call(null,c__26750__auto___34035);
var G__34039 = (0);
seq__34020_34024 = G__34036;
chunk__34021_34025 = G__34037;
count__34022_34026 = G__34038;
i__34023_34027 = G__34039;
continue;
} else {
var ns_34040 = cljs.core.first.call(null,seq__34020_34034__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34040);

var G__34041 = cljs.core.next.call(null,seq__34020_34034__$1);
var G__34042 = null;
var G__34043 = (0);
var G__34044 = (0);
seq__34020_34024 = G__34041;
chunk__34021_34025 = G__34042;
count__34022_34026 = G__34043;
i__34023_34027 = G__34044;
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
var G__34045__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34046__i = 0, G__34046__a = new Array(arguments.length -  0);
while (G__34046__i < G__34046__a.length) {G__34046__a[G__34046__i] = arguments[G__34046__i + 0]; ++G__34046__i;}
  args = new cljs.core.IndexedSeq(G__34046__a,0);
} 
return G__34045__delegate.call(this,args);};
G__34045.cljs$lang$maxFixedArity = 0;
G__34045.cljs$lang$applyTo = (function (arglist__34047){
var args = cljs.core.seq(arglist__34047);
return G__34045__delegate(args);
});
G__34045.cljs$core$IFn$_invoke$arity$variadic = G__34045__delegate;
return G__34045;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34048 = cljs.core._EQ_;
var expr__34049 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34048.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34049))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34048,expr__34049){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34048,expr__34049))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34048,expr__34049){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34051){if((e34051 instanceof Error)){
var e = e34051;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34051;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34048,expr__34049))
} else {
if(cljs.core.truth_(pred__34048.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34049))){
return ((function (pred__34048,expr__34049){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34048,expr__34049){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34048,expr__34049))
);

return deferred.addErrback(((function (deferred,pred__34048,expr__34049){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34048,expr__34049))
);
});
;})(pred__34048,expr__34049))
} else {
if(cljs.core.truth_(pred__34048.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34049))){
return ((function (pred__34048,expr__34049){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34052){if((e34052 instanceof Error)){
var e = e34052;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34052;

}
}})());
});
;})(pred__34048,expr__34049))
} else {
return ((function (pred__34048,expr__34049){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34048,expr__34049))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34053,callback){
var map__34056 = p__34053;
var map__34056__$1 = ((((!((map__34056 == null)))?((((map__34056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34056):map__34056);
var file_msg = map__34056__$1;
var request_url = cljs.core.get.call(null,map__34056__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34056,map__34056__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34056,map__34056__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto__){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto__){
return (function (state_34080){
var state_val_34081 = (state_34080[(1)]);
if((state_val_34081 === (7))){
var inst_34076 = (state_34080[(2)]);
var state_34080__$1 = state_34080;
var statearr_34082_34102 = state_34080__$1;
(statearr_34082_34102[(2)] = inst_34076);

(statearr_34082_34102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34081 === (1))){
var state_34080__$1 = state_34080;
var statearr_34083_34103 = state_34080__$1;
(statearr_34083_34103[(2)] = null);

(statearr_34083_34103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34081 === (4))){
var inst_34060 = (state_34080[(7)]);
var inst_34060__$1 = (state_34080[(2)]);
var state_34080__$1 = (function (){var statearr_34084 = state_34080;
(statearr_34084[(7)] = inst_34060__$1);

return statearr_34084;
})();
if(cljs.core.truth_(inst_34060__$1)){
var statearr_34085_34104 = state_34080__$1;
(statearr_34085_34104[(1)] = (5));

} else {
var statearr_34086_34105 = state_34080__$1;
(statearr_34086_34105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34081 === (6))){
var state_34080__$1 = state_34080;
var statearr_34087_34106 = state_34080__$1;
(statearr_34087_34106[(2)] = null);

(statearr_34087_34106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34081 === (3))){
var inst_34078 = (state_34080[(2)]);
var state_34080__$1 = state_34080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34080__$1,inst_34078);
} else {
if((state_val_34081 === (2))){
var state_34080__$1 = state_34080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34080__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34081 === (11))){
var inst_34072 = (state_34080[(2)]);
var state_34080__$1 = (function (){var statearr_34088 = state_34080;
(statearr_34088[(8)] = inst_34072);

return statearr_34088;
})();
var statearr_34089_34107 = state_34080__$1;
(statearr_34089_34107[(2)] = null);

(statearr_34089_34107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34081 === (9))){
var inst_34064 = (state_34080[(9)]);
var inst_34066 = (state_34080[(10)]);
var inst_34068 = inst_34066.call(null,inst_34064);
var state_34080__$1 = state_34080;
var statearr_34090_34108 = state_34080__$1;
(statearr_34090_34108[(2)] = inst_34068);

(statearr_34090_34108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34081 === (5))){
var inst_34060 = (state_34080[(7)]);
var inst_34062 = figwheel.client.file_reloading.blocking_load.call(null,inst_34060);
var state_34080__$1 = state_34080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34080__$1,(8),inst_34062);
} else {
if((state_val_34081 === (10))){
var inst_34064 = (state_34080[(9)]);
var inst_34070 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34064);
var state_34080__$1 = state_34080;
var statearr_34091_34109 = state_34080__$1;
(statearr_34091_34109[(2)] = inst_34070);

(statearr_34091_34109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34081 === (8))){
var inst_34066 = (state_34080[(10)]);
var inst_34060 = (state_34080[(7)]);
var inst_34064 = (state_34080[(2)]);
var inst_34065 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34066__$1 = cljs.core.get.call(null,inst_34065,inst_34060);
var state_34080__$1 = (function (){var statearr_34092 = state_34080;
(statearr_34092[(9)] = inst_34064);

(statearr_34092[(10)] = inst_34066__$1);

return statearr_34092;
})();
if(cljs.core.truth_(inst_34066__$1)){
var statearr_34093_34110 = state_34080__$1;
(statearr_34093_34110[(1)] = (9));

} else {
var statearr_34094_34111 = state_34080__$1;
(statearr_34094_34111[(1)] = (10));

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
});})(c__30902__auto__))
;
return ((function (switch__30790__auto__,c__30902__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30791__auto__ = null;
var figwheel$client$file_reloading$state_machine__30791__auto____0 = (function (){
var statearr_34098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34098[(0)] = figwheel$client$file_reloading$state_machine__30791__auto__);

(statearr_34098[(1)] = (1));

return statearr_34098;
});
var figwheel$client$file_reloading$state_machine__30791__auto____1 = (function (state_34080){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_34080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e34099){if((e34099 instanceof Object)){
var ex__30794__auto__ = e34099;
var statearr_34100_34112 = state_34080;
(statearr_34100_34112[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34113 = state_34080;
state_34080 = G__34113;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30791__auto__ = function(state_34080){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30791__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30791__auto____1.call(this,state_34080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30791__auto____0;
figwheel$client$file_reloading$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30791__auto____1;
return figwheel$client$file_reloading$state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto__))
})();
var state__30904__auto__ = (function (){var statearr_34101 = f__30903__auto__.call(null);
(statearr_34101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto__);

return statearr_34101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto__))
);

return c__30902__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34114,callback){
var map__34117 = p__34114;
var map__34117__$1 = ((((!((map__34117 == null)))?((((map__34117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34117):map__34117);
var file_msg = map__34117__$1;
var namespace = cljs.core.get.call(null,map__34117__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34117,map__34117__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34117,map__34117__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34119){
var map__34122 = p__34119;
var map__34122__$1 = ((((!((map__34122 == null)))?((((map__34122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34122):map__34122);
var file_msg = map__34122__$1;
var namespace = cljs.core.get.call(null,map__34122__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34124){
var map__34127 = p__34124;
var map__34127__$1 = ((((!((map__34127 == null)))?((((map__34127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34127):map__34127);
var file_msg = map__34127__$1;
var namespace = cljs.core.get.call(null,map__34127__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34129,callback){
var map__34132 = p__34129;
var map__34132__$1 = ((((!((map__34132 == null)))?((((map__34132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34132):map__34132);
var file_msg = map__34132__$1;
var request_url = cljs.core.get.call(null,map__34132__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34132__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30902__auto___34236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto___34236,out){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto___34236,out){
return (function (state_34218){
var state_val_34219 = (state_34218[(1)]);
if((state_val_34219 === (1))){
var inst_34192 = cljs.core.seq.call(null,files);
var inst_34193 = cljs.core.first.call(null,inst_34192);
var inst_34194 = cljs.core.next.call(null,inst_34192);
var inst_34195 = files;
var state_34218__$1 = (function (){var statearr_34220 = state_34218;
(statearr_34220[(7)] = inst_34194);

(statearr_34220[(8)] = inst_34193);

(statearr_34220[(9)] = inst_34195);

return statearr_34220;
})();
var statearr_34221_34237 = state_34218__$1;
(statearr_34221_34237[(2)] = null);

(statearr_34221_34237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (2))){
var inst_34201 = (state_34218[(10)]);
var inst_34195 = (state_34218[(9)]);
var inst_34200 = cljs.core.seq.call(null,inst_34195);
var inst_34201__$1 = cljs.core.first.call(null,inst_34200);
var inst_34202 = cljs.core.next.call(null,inst_34200);
var inst_34203 = (inst_34201__$1 == null);
var inst_34204 = cljs.core.not.call(null,inst_34203);
var state_34218__$1 = (function (){var statearr_34222 = state_34218;
(statearr_34222[(11)] = inst_34202);

(statearr_34222[(10)] = inst_34201__$1);

return statearr_34222;
})();
if(inst_34204){
var statearr_34223_34238 = state_34218__$1;
(statearr_34223_34238[(1)] = (4));

} else {
var statearr_34224_34239 = state_34218__$1;
(statearr_34224_34239[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (3))){
var inst_34216 = (state_34218[(2)]);
var state_34218__$1 = state_34218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34218__$1,inst_34216);
} else {
if((state_val_34219 === (4))){
var inst_34201 = (state_34218[(10)]);
var inst_34206 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34201);
var state_34218__$1 = state_34218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34218__$1,(7),inst_34206);
} else {
if((state_val_34219 === (5))){
var inst_34212 = cljs.core.async.close_BANG_.call(null,out);
var state_34218__$1 = state_34218;
var statearr_34225_34240 = state_34218__$1;
(statearr_34225_34240[(2)] = inst_34212);

(statearr_34225_34240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (6))){
var inst_34214 = (state_34218[(2)]);
var state_34218__$1 = state_34218;
var statearr_34226_34241 = state_34218__$1;
(statearr_34226_34241[(2)] = inst_34214);

(statearr_34226_34241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (7))){
var inst_34202 = (state_34218[(11)]);
var inst_34208 = (state_34218[(2)]);
var inst_34209 = cljs.core.async.put_BANG_.call(null,out,inst_34208);
var inst_34195 = inst_34202;
var state_34218__$1 = (function (){var statearr_34227 = state_34218;
(statearr_34227[(9)] = inst_34195);

(statearr_34227[(12)] = inst_34209);

return statearr_34227;
})();
var statearr_34228_34242 = state_34218__$1;
(statearr_34228_34242[(2)] = null);

(statearr_34228_34242[(1)] = (2));


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
});})(c__30902__auto___34236,out))
;
return ((function (switch__30790__auto__,c__30902__auto___34236,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30791__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30791__auto____0 = (function (){
var statearr_34232 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34232[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30791__auto__);

(statearr_34232[(1)] = (1));

return statearr_34232;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30791__auto____1 = (function (state_34218){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_34218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e34233){if((e34233 instanceof Object)){
var ex__30794__auto__ = e34233;
var statearr_34234_34243 = state_34218;
(statearr_34234_34243[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34244 = state_34218;
state_34218 = G__34244;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30791__auto__ = function(state_34218){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30791__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30791__auto____1.call(this,state_34218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30791__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30791__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto___34236,out))
})();
var state__30904__auto__ = (function (){var statearr_34235 = f__30903__auto__.call(null);
(statearr_34235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___34236);

return statearr_34235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto___34236,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34245,opts){
var map__34249 = p__34245;
var map__34249__$1 = ((((!((map__34249 == null)))?((((map__34249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34249):map__34249);
var eval_body__$1 = cljs.core.get.call(null,map__34249__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34249__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e34251){var e = e34251;
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
return (function (p1__34252_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34252_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34261){
var vec__34262 = p__34261;
var k = cljs.core.nth.call(null,vec__34262,(0),null);
var v = cljs.core.nth.call(null,vec__34262,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34265){
var vec__34266 = p__34265;
var k = cljs.core.nth.call(null,vec__34266,(0),null);
var v = cljs.core.nth.call(null,vec__34266,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34272,p__34273){
var map__34520 = p__34272;
var map__34520__$1 = ((((!((map__34520 == null)))?((((map__34520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34520):map__34520);
var opts = map__34520__$1;
var before_jsload = cljs.core.get.call(null,map__34520__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34520__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34520__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34521 = p__34273;
var map__34521__$1 = ((((!((map__34521 == null)))?((((map__34521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34521):map__34521);
var msg = map__34521__$1;
var files = cljs.core.get.call(null,map__34521__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34521__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34521__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34674){
var state_val_34675 = (state_34674[(1)]);
if((state_val_34675 === (7))){
var inst_34535 = (state_34674[(7)]);
var inst_34536 = (state_34674[(8)]);
var inst_34538 = (state_34674[(9)]);
var inst_34537 = (state_34674[(10)]);
var inst_34543 = cljs.core._nth.call(null,inst_34536,inst_34538);
var inst_34544 = figwheel.client.file_reloading.eval_body.call(null,inst_34543,opts);
var inst_34545 = (inst_34538 + (1));
var tmp34676 = inst_34535;
var tmp34677 = inst_34536;
var tmp34678 = inst_34537;
var inst_34535__$1 = tmp34676;
var inst_34536__$1 = tmp34677;
var inst_34537__$1 = tmp34678;
var inst_34538__$1 = inst_34545;
var state_34674__$1 = (function (){var statearr_34679 = state_34674;
(statearr_34679[(7)] = inst_34535__$1);

(statearr_34679[(8)] = inst_34536__$1);

(statearr_34679[(9)] = inst_34538__$1);

(statearr_34679[(11)] = inst_34544);

(statearr_34679[(10)] = inst_34537__$1);

return statearr_34679;
})();
var statearr_34680_34766 = state_34674__$1;
(statearr_34680_34766[(2)] = null);

(statearr_34680_34766[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (20))){
var inst_34578 = (state_34674[(12)]);
var inst_34586 = figwheel.client.file_reloading.sort_files.call(null,inst_34578);
var state_34674__$1 = state_34674;
var statearr_34681_34767 = state_34674__$1;
(statearr_34681_34767[(2)] = inst_34586);

(statearr_34681_34767[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (27))){
var state_34674__$1 = state_34674;
var statearr_34682_34768 = state_34674__$1;
(statearr_34682_34768[(2)] = null);

(statearr_34682_34768[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (1))){
var inst_34527 = (state_34674[(13)]);
var inst_34524 = before_jsload.call(null,files);
var inst_34525 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34526 = (function (){return ((function (inst_34527,inst_34524,inst_34525,state_val_34675,c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34269_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34269_SHARP_);
});
;})(inst_34527,inst_34524,inst_34525,state_val_34675,c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34527__$1 = cljs.core.filter.call(null,inst_34526,files);
var inst_34528 = cljs.core.not_empty.call(null,inst_34527__$1);
var state_34674__$1 = (function (){var statearr_34683 = state_34674;
(statearr_34683[(14)] = inst_34524);

(statearr_34683[(13)] = inst_34527__$1);

(statearr_34683[(15)] = inst_34525);

return statearr_34683;
})();
if(cljs.core.truth_(inst_34528)){
var statearr_34684_34769 = state_34674__$1;
(statearr_34684_34769[(1)] = (2));

} else {
var statearr_34685_34770 = state_34674__$1;
(statearr_34685_34770[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (24))){
var state_34674__$1 = state_34674;
var statearr_34686_34771 = state_34674__$1;
(statearr_34686_34771[(2)] = null);

(statearr_34686_34771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (39))){
var inst_34628 = (state_34674[(16)]);
var state_34674__$1 = state_34674;
var statearr_34687_34772 = state_34674__$1;
(statearr_34687_34772[(2)] = inst_34628);

(statearr_34687_34772[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (46))){
var inst_34669 = (state_34674[(2)]);
var state_34674__$1 = state_34674;
var statearr_34688_34773 = state_34674__$1;
(statearr_34688_34773[(2)] = inst_34669);

(statearr_34688_34773[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (4))){
var inst_34572 = (state_34674[(2)]);
var inst_34573 = cljs.core.List.EMPTY;
var inst_34574 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34573);
var inst_34575 = (function (){return ((function (inst_34572,inst_34573,inst_34574,state_val_34675,c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34270_SHARP_){
var and__25927__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34270_SHARP_);
if(cljs.core.truth_(and__25927__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34270_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34270_SHARP_)));
} else {
return and__25927__auto__;
}
});
;})(inst_34572,inst_34573,inst_34574,state_val_34675,c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34576 = cljs.core.filter.call(null,inst_34575,files);
var inst_34577 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34578 = cljs.core.concat.call(null,inst_34576,inst_34577);
var state_34674__$1 = (function (){var statearr_34689 = state_34674;
(statearr_34689[(17)] = inst_34574);

(statearr_34689[(12)] = inst_34578);

(statearr_34689[(18)] = inst_34572);

return statearr_34689;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34690_34774 = state_34674__$1;
(statearr_34690_34774[(1)] = (16));

} else {
var statearr_34691_34775 = state_34674__$1;
(statearr_34691_34775[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (15))){
var inst_34562 = (state_34674[(2)]);
var state_34674__$1 = state_34674;
var statearr_34692_34776 = state_34674__$1;
(statearr_34692_34776[(2)] = inst_34562);

(statearr_34692_34776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (21))){
var inst_34588 = (state_34674[(19)]);
var inst_34588__$1 = (state_34674[(2)]);
var inst_34589 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34588__$1);
var state_34674__$1 = (function (){var statearr_34693 = state_34674;
(statearr_34693[(19)] = inst_34588__$1);

return statearr_34693;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34674__$1,(22),inst_34589);
} else {
if((state_val_34675 === (31))){
var inst_34672 = (state_34674[(2)]);
var state_34674__$1 = state_34674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34674__$1,inst_34672);
} else {
if((state_val_34675 === (32))){
var inst_34628 = (state_34674[(16)]);
var inst_34633 = inst_34628.cljs$lang$protocol_mask$partition0$;
var inst_34634 = (inst_34633 & (64));
var inst_34635 = inst_34628.cljs$core$ISeq$;
var inst_34636 = (inst_34634) || (inst_34635);
var state_34674__$1 = state_34674;
if(cljs.core.truth_(inst_34636)){
var statearr_34694_34777 = state_34674__$1;
(statearr_34694_34777[(1)] = (35));

} else {
var statearr_34695_34778 = state_34674__$1;
(statearr_34695_34778[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (40))){
var inst_34649 = (state_34674[(20)]);
var inst_34648 = (state_34674[(2)]);
var inst_34649__$1 = cljs.core.get.call(null,inst_34648,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34650 = cljs.core.get.call(null,inst_34648,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34651 = cljs.core.not_empty.call(null,inst_34649__$1);
var state_34674__$1 = (function (){var statearr_34696 = state_34674;
(statearr_34696[(21)] = inst_34650);

(statearr_34696[(20)] = inst_34649__$1);

return statearr_34696;
})();
if(cljs.core.truth_(inst_34651)){
var statearr_34697_34779 = state_34674__$1;
(statearr_34697_34779[(1)] = (41));

} else {
var statearr_34698_34780 = state_34674__$1;
(statearr_34698_34780[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (33))){
var state_34674__$1 = state_34674;
var statearr_34699_34781 = state_34674__$1;
(statearr_34699_34781[(2)] = false);

(statearr_34699_34781[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (13))){
var inst_34548 = (state_34674[(22)]);
var inst_34552 = cljs.core.chunk_first.call(null,inst_34548);
var inst_34553 = cljs.core.chunk_rest.call(null,inst_34548);
var inst_34554 = cljs.core.count.call(null,inst_34552);
var inst_34535 = inst_34553;
var inst_34536 = inst_34552;
var inst_34537 = inst_34554;
var inst_34538 = (0);
var state_34674__$1 = (function (){var statearr_34700 = state_34674;
(statearr_34700[(7)] = inst_34535);

(statearr_34700[(8)] = inst_34536);

(statearr_34700[(9)] = inst_34538);

(statearr_34700[(10)] = inst_34537);

return statearr_34700;
})();
var statearr_34701_34782 = state_34674__$1;
(statearr_34701_34782[(2)] = null);

(statearr_34701_34782[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (22))){
var inst_34588 = (state_34674[(19)]);
var inst_34591 = (state_34674[(23)]);
var inst_34596 = (state_34674[(24)]);
var inst_34592 = (state_34674[(25)]);
var inst_34591__$1 = (state_34674[(2)]);
var inst_34592__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34591__$1);
var inst_34593 = (function (){var all_files = inst_34588;
var res_SINGLEQUOTE_ = inst_34591__$1;
var res = inst_34592__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34588,inst_34591,inst_34596,inst_34592,inst_34591__$1,inst_34592__$1,state_val_34675,c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34271_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34271_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34588,inst_34591,inst_34596,inst_34592,inst_34591__$1,inst_34592__$1,state_val_34675,c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34594 = cljs.core.filter.call(null,inst_34593,inst_34591__$1);
var inst_34595 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34596__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34595);
var inst_34597 = cljs.core.not_empty.call(null,inst_34596__$1);
var state_34674__$1 = (function (){var statearr_34702 = state_34674;
(statearr_34702[(23)] = inst_34591__$1);

(statearr_34702[(26)] = inst_34594);

(statearr_34702[(24)] = inst_34596__$1);

(statearr_34702[(25)] = inst_34592__$1);

return statearr_34702;
})();
if(cljs.core.truth_(inst_34597)){
var statearr_34703_34783 = state_34674__$1;
(statearr_34703_34783[(1)] = (23));

} else {
var statearr_34704_34784 = state_34674__$1;
(statearr_34704_34784[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (36))){
var state_34674__$1 = state_34674;
var statearr_34705_34785 = state_34674__$1;
(statearr_34705_34785[(2)] = false);

(statearr_34705_34785[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (41))){
var inst_34649 = (state_34674[(20)]);
var inst_34653 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34654 = cljs.core.map.call(null,inst_34653,inst_34649);
var inst_34655 = cljs.core.pr_str.call(null,inst_34654);
var inst_34656 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34655)].join('');
var inst_34657 = figwheel.client.utils.log.call(null,inst_34656);
var state_34674__$1 = state_34674;
var statearr_34706_34786 = state_34674__$1;
(statearr_34706_34786[(2)] = inst_34657);

(statearr_34706_34786[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (43))){
var inst_34650 = (state_34674[(21)]);
var inst_34660 = (state_34674[(2)]);
var inst_34661 = cljs.core.not_empty.call(null,inst_34650);
var state_34674__$1 = (function (){var statearr_34707 = state_34674;
(statearr_34707[(27)] = inst_34660);

return statearr_34707;
})();
if(cljs.core.truth_(inst_34661)){
var statearr_34708_34787 = state_34674__$1;
(statearr_34708_34787[(1)] = (44));

} else {
var statearr_34709_34788 = state_34674__$1;
(statearr_34709_34788[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (29))){
var inst_34588 = (state_34674[(19)]);
var inst_34591 = (state_34674[(23)]);
var inst_34594 = (state_34674[(26)]);
var inst_34628 = (state_34674[(16)]);
var inst_34596 = (state_34674[(24)]);
var inst_34592 = (state_34674[(25)]);
var inst_34624 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34627 = (function (){var all_files = inst_34588;
var res_SINGLEQUOTE_ = inst_34591;
var res = inst_34592;
var files_not_loaded = inst_34594;
var dependencies_that_loaded = inst_34596;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34588,inst_34591,inst_34594,inst_34628,inst_34596,inst_34592,inst_34624,state_val_34675,c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34626){
var map__34710 = p__34626;
var map__34710__$1 = ((((!((map__34710 == null)))?((((map__34710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34710):map__34710);
var namespace = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34588,inst_34591,inst_34594,inst_34628,inst_34596,inst_34592,inst_34624,state_val_34675,c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34628__$1 = cljs.core.group_by.call(null,inst_34627,inst_34594);
var inst_34630 = (inst_34628__$1 == null);
var inst_34631 = cljs.core.not.call(null,inst_34630);
var state_34674__$1 = (function (){var statearr_34712 = state_34674;
(statearr_34712[(28)] = inst_34624);

(statearr_34712[(16)] = inst_34628__$1);

return statearr_34712;
})();
if(inst_34631){
var statearr_34713_34789 = state_34674__$1;
(statearr_34713_34789[(1)] = (32));

} else {
var statearr_34714_34790 = state_34674__$1;
(statearr_34714_34790[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (44))){
var inst_34650 = (state_34674[(21)]);
var inst_34663 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34650);
var inst_34664 = cljs.core.pr_str.call(null,inst_34663);
var inst_34665 = [cljs.core.str("not required: "),cljs.core.str(inst_34664)].join('');
var inst_34666 = figwheel.client.utils.log.call(null,inst_34665);
var state_34674__$1 = state_34674;
var statearr_34715_34791 = state_34674__$1;
(statearr_34715_34791[(2)] = inst_34666);

(statearr_34715_34791[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (6))){
var inst_34569 = (state_34674[(2)]);
var state_34674__$1 = state_34674;
var statearr_34716_34792 = state_34674__$1;
(statearr_34716_34792[(2)] = inst_34569);

(statearr_34716_34792[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (28))){
var inst_34594 = (state_34674[(26)]);
var inst_34621 = (state_34674[(2)]);
var inst_34622 = cljs.core.not_empty.call(null,inst_34594);
var state_34674__$1 = (function (){var statearr_34717 = state_34674;
(statearr_34717[(29)] = inst_34621);

return statearr_34717;
})();
if(cljs.core.truth_(inst_34622)){
var statearr_34718_34793 = state_34674__$1;
(statearr_34718_34793[(1)] = (29));

} else {
var statearr_34719_34794 = state_34674__$1;
(statearr_34719_34794[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (25))){
var inst_34592 = (state_34674[(25)]);
var inst_34608 = (state_34674[(2)]);
var inst_34609 = cljs.core.not_empty.call(null,inst_34592);
var state_34674__$1 = (function (){var statearr_34720 = state_34674;
(statearr_34720[(30)] = inst_34608);

return statearr_34720;
})();
if(cljs.core.truth_(inst_34609)){
var statearr_34721_34795 = state_34674__$1;
(statearr_34721_34795[(1)] = (26));

} else {
var statearr_34722_34796 = state_34674__$1;
(statearr_34722_34796[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (34))){
var inst_34643 = (state_34674[(2)]);
var state_34674__$1 = state_34674;
if(cljs.core.truth_(inst_34643)){
var statearr_34723_34797 = state_34674__$1;
(statearr_34723_34797[(1)] = (38));

} else {
var statearr_34724_34798 = state_34674__$1;
(statearr_34724_34798[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (17))){
var state_34674__$1 = state_34674;
var statearr_34725_34799 = state_34674__$1;
(statearr_34725_34799[(2)] = recompile_dependents);

(statearr_34725_34799[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (3))){
var state_34674__$1 = state_34674;
var statearr_34726_34800 = state_34674__$1;
(statearr_34726_34800[(2)] = null);

(statearr_34726_34800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (12))){
var inst_34565 = (state_34674[(2)]);
var state_34674__$1 = state_34674;
var statearr_34727_34801 = state_34674__$1;
(statearr_34727_34801[(2)] = inst_34565);

(statearr_34727_34801[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (2))){
var inst_34527 = (state_34674[(13)]);
var inst_34534 = cljs.core.seq.call(null,inst_34527);
var inst_34535 = inst_34534;
var inst_34536 = null;
var inst_34537 = (0);
var inst_34538 = (0);
var state_34674__$1 = (function (){var statearr_34728 = state_34674;
(statearr_34728[(7)] = inst_34535);

(statearr_34728[(8)] = inst_34536);

(statearr_34728[(9)] = inst_34538);

(statearr_34728[(10)] = inst_34537);

return statearr_34728;
})();
var statearr_34729_34802 = state_34674__$1;
(statearr_34729_34802[(2)] = null);

(statearr_34729_34802[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (23))){
var inst_34588 = (state_34674[(19)]);
var inst_34591 = (state_34674[(23)]);
var inst_34594 = (state_34674[(26)]);
var inst_34596 = (state_34674[(24)]);
var inst_34592 = (state_34674[(25)]);
var inst_34599 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34601 = (function (){var all_files = inst_34588;
var res_SINGLEQUOTE_ = inst_34591;
var res = inst_34592;
var files_not_loaded = inst_34594;
var dependencies_that_loaded = inst_34596;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34588,inst_34591,inst_34594,inst_34596,inst_34592,inst_34599,state_val_34675,c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34600){
var map__34730 = p__34600;
var map__34730__$1 = ((((!((map__34730 == null)))?((((map__34730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34730):map__34730);
var request_url = cljs.core.get.call(null,map__34730__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34588,inst_34591,inst_34594,inst_34596,inst_34592,inst_34599,state_val_34675,c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34602 = cljs.core.reverse.call(null,inst_34596);
var inst_34603 = cljs.core.map.call(null,inst_34601,inst_34602);
var inst_34604 = cljs.core.pr_str.call(null,inst_34603);
var inst_34605 = figwheel.client.utils.log.call(null,inst_34604);
var state_34674__$1 = (function (){var statearr_34732 = state_34674;
(statearr_34732[(31)] = inst_34599);

return statearr_34732;
})();
var statearr_34733_34803 = state_34674__$1;
(statearr_34733_34803[(2)] = inst_34605);

(statearr_34733_34803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (35))){
var state_34674__$1 = state_34674;
var statearr_34734_34804 = state_34674__$1;
(statearr_34734_34804[(2)] = true);

(statearr_34734_34804[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (19))){
var inst_34578 = (state_34674[(12)]);
var inst_34584 = figwheel.client.file_reloading.expand_files.call(null,inst_34578);
var state_34674__$1 = state_34674;
var statearr_34735_34805 = state_34674__$1;
(statearr_34735_34805[(2)] = inst_34584);

(statearr_34735_34805[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (11))){
var state_34674__$1 = state_34674;
var statearr_34736_34806 = state_34674__$1;
(statearr_34736_34806[(2)] = null);

(statearr_34736_34806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (9))){
var inst_34567 = (state_34674[(2)]);
var state_34674__$1 = state_34674;
var statearr_34737_34807 = state_34674__$1;
(statearr_34737_34807[(2)] = inst_34567);

(statearr_34737_34807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (5))){
var inst_34538 = (state_34674[(9)]);
var inst_34537 = (state_34674[(10)]);
var inst_34540 = (inst_34538 < inst_34537);
var inst_34541 = inst_34540;
var state_34674__$1 = state_34674;
if(cljs.core.truth_(inst_34541)){
var statearr_34738_34808 = state_34674__$1;
(statearr_34738_34808[(1)] = (7));

} else {
var statearr_34739_34809 = state_34674__$1;
(statearr_34739_34809[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (14))){
var inst_34548 = (state_34674[(22)]);
var inst_34557 = cljs.core.first.call(null,inst_34548);
var inst_34558 = figwheel.client.file_reloading.eval_body.call(null,inst_34557,opts);
var inst_34559 = cljs.core.next.call(null,inst_34548);
var inst_34535 = inst_34559;
var inst_34536 = null;
var inst_34537 = (0);
var inst_34538 = (0);
var state_34674__$1 = (function (){var statearr_34740 = state_34674;
(statearr_34740[(32)] = inst_34558);

(statearr_34740[(7)] = inst_34535);

(statearr_34740[(8)] = inst_34536);

(statearr_34740[(9)] = inst_34538);

(statearr_34740[(10)] = inst_34537);

return statearr_34740;
})();
var statearr_34741_34810 = state_34674__$1;
(statearr_34741_34810[(2)] = null);

(statearr_34741_34810[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (45))){
var state_34674__$1 = state_34674;
var statearr_34742_34811 = state_34674__$1;
(statearr_34742_34811[(2)] = null);

(statearr_34742_34811[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (26))){
var inst_34588 = (state_34674[(19)]);
var inst_34591 = (state_34674[(23)]);
var inst_34594 = (state_34674[(26)]);
var inst_34596 = (state_34674[(24)]);
var inst_34592 = (state_34674[(25)]);
var inst_34611 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34613 = (function (){var all_files = inst_34588;
var res_SINGLEQUOTE_ = inst_34591;
var res = inst_34592;
var files_not_loaded = inst_34594;
var dependencies_that_loaded = inst_34596;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34588,inst_34591,inst_34594,inst_34596,inst_34592,inst_34611,state_val_34675,c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34612){
var map__34743 = p__34612;
var map__34743__$1 = ((((!((map__34743 == null)))?((((map__34743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34743):map__34743);
var namespace = cljs.core.get.call(null,map__34743__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34743__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34588,inst_34591,inst_34594,inst_34596,inst_34592,inst_34611,state_val_34675,c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34614 = cljs.core.map.call(null,inst_34613,inst_34592);
var inst_34615 = cljs.core.pr_str.call(null,inst_34614);
var inst_34616 = figwheel.client.utils.log.call(null,inst_34615);
var inst_34617 = (function (){var all_files = inst_34588;
var res_SINGLEQUOTE_ = inst_34591;
var res = inst_34592;
var files_not_loaded = inst_34594;
var dependencies_that_loaded = inst_34596;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34588,inst_34591,inst_34594,inst_34596,inst_34592,inst_34611,inst_34613,inst_34614,inst_34615,inst_34616,state_val_34675,c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34588,inst_34591,inst_34594,inst_34596,inst_34592,inst_34611,inst_34613,inst_34614,inst_34615,inst_34616,state_val_34675,c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34618 = setTimeout(inst_34617,(10));
var state_34674__$1 = (function (){var statearr_34745 = state_34674;
(statearr_34745[(33)] = inst_34616);

(statearr_34745[(34)] = inst_34611);

return statearr_34745;
})();
var statearr_34746_34812 = state_34674__$1;
(statearr_34746_34812[(2)] = inst_34618);

(statearr_34746_34812[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (16))){
var state_34674__$1 = state_34674;
var statearr_34747_34813 = state_34674__$1;
(statearr_34747_34813[(2)] = reload_dependents);

(statearr_34747_34813[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (38))){
var inst_34628 = (state_34674[(16)]);
var inst_34645 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34628);
var state_34674__$1 = state_34674;
var statearr_34748_34814 = state_34674__$1;
(statearr_34748_34814[(2)] = inst_34645);

(statearr_34748_34814[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (30))){
var state_34674__$1 = state_34674;
var statearr_34749_34815 = state_34674__$1;
(statearr_34749_34815[(2)] = null);

(statearr_34749_34815[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (10))){
var inst_34548 = (state_34674[(22)]);
var inst_34550 = cljs.core.chunked_seq_QMARK_.call(null,inst_34548);
var state_34674__$1 = state_34674;
if(inst_34550){
var statearr_34750_34816 = state_34674__$1;
(statearr_34750_34816[(1)] = (13));

} else {
var statearr_34751_34817 = state_34674__$1;
(statearr_34751_34817[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (18))){
var inst_34582 = (state_34674[(2)]);
var state_34674__$1 = state_34674;
if(cljs.core.truth_(inst_34582)){
var statearr_34752_34818 = state_34674__$1;
(statearr_34752_34818[(1)] = (19));

} else {
var statearr_34753_34819 = state_34674__$1;
(statearr_34753_34819[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (42))){
var state_34674__$1 = state_34674;
var statearr_34754_34820 = state_34674__$1;
(statearr_34754_34820[(2)] = null);

(statearr_34754_34820[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (37))){
var inst_34640 = (state_34674[(2)]);
var state_34674__$1 = state_34674;
var statearr_34755_34821 = state_34674__$1;
(statearr_34755_34821[(2)] = inst_34640);

(statearr_34755_34821[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (8))){
var inst_34535 = (state_34674[(7)]);
var inst_34548 = (state_34674[(22)]);
var inst_34548__$1 = cljs.core.seq.call(null,inst_34535);
var state_34674__$1 = (function (){var statearr_34756 = state_34674;
(statearr_34756[(22)] = inst_34548__$1);

return statearr_34756;
})();
if(inst_34548__$1){
var statearr_34757_34822 = state_34674__$1;
(statearr_34757_34822[(1)] = (10));

} else {
var statearr_34758_34823 = state_34674__$1;
(statearr_34758_34823[(1)] = (11));

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
});})(c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30790__auto__,c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30791__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30791__auto____0 = (function (){
var statearr_34762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34762[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30791__auto__);

(statearr_34762[(1)] = (1));

return statearr_34762;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30791__auto____1 = (function (state_34674){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_34674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e34763){if((e34763 instanceof Object)){
var ex__30794__auto__ = e34763;
var statearr_34764_34824 = state_34674;
(statearr_34764_34824[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34825 = state_34674;
state_34674 = G__34825;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30791__auto__ = function(state_34674){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30791__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30791__auto____1.call(this,state_34674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30791__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30791__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30904__auto__ = (function (){var statearr_34765 = f__30903__auto__.call(null);
(statearr_34765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto__);

return statearr_34765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto__,map__34520,map__34520__$1,opts,before_jsload,on_jsload,reload_dependents,map__34521,map__34521__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30902__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34828,link){
var map__34831 = p__34828;
var map__34831__$1 = ((((!((map__34831 == null)))?((((map__34831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34831):map__34831);
var file = cljs.core.get.call(null,map__34831__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34831,map__34831__$1,file){
return (function (p1__34826_SHARP_,p2__34827_SHARP_){
if(cljs.core._EQ_.call(null,p1__34826_SHARP_,p2__34827_SHARP_)){
return p1__34826_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34831,map__34831__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34837){
var map__34838 = p__34837;
var map__34838__$1 = ((((!((map__34838 == null)))?((((map__34838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34838):map__34838);
var match_length = cljs.core.get.call(null,map__34838__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34838__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34833_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34833_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34840_SHARP_,p2__34841_SHARP_){
return cljs.core.assoc.call(null,p1__34840_SHARP_,cljs.core.get.call(null,p2__34841_SHARP_,key),p2__34841_SHARP_);
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
var loaded_f_datas_34842 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34842);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34842);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34843,p__34844){
var map__34849 = p__34843;
var map__34849__$1 = ((((!((map__34849 == null)))?((((map__34849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34849):map__34849);
var on_cssload = cljs.core.get.call(null,map__34849__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34850 = p__34844;
var map__34850__$1 = ((((!((map__34850 == null)))?((((map__34850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34850):map__34850);
var files_msg = map__34850__$1;
var files = cljs.core.get.call(null,map__34850__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1510423698123