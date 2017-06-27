// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args44110 = [];
var len__27014__auto___44116 = arguments.length;
var i__27015__auto___44117 = (0);
while(true){
if((i__27015__auto___44117 < len__27014__auto___44116)){
args44110.push((arguments[i__27015__auto___44117]));

var G__44118 = (i__27015__auto___44117 + (1));
i__27015__auto___44117 = G__44118;
continue;
} else {
}
break;
}

var G__44112 = args44110.length;
switch (G__44112) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44110.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async44113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44113 = (function (f,blockable,meta44114){
this.f = f;
this.blockable = blockable;
this.meta44114 = meta44114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44115,meta44114__$1){
var self__ = this;
var _44115__$1 = this;
return (new cljs.core.async.t_cljs$core$async44113(self__.f,self__.blockable,meta44114__$1));
});

cljs.core.async.t_cljs$core$async44113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44115){
var self__ = this;
var _44115__$1 = this;
return self__.meta44114;
});

cljs.core.async.t_cljs$core$async44113.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44113.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44114","meta44114",-233062002,null)], null);
});

cljs.core.async.t_cljs$core$async44113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44113";

cljs.core.async.t_cljs$core$async44113.cljs$lang$ctorPrWriter = (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async44113");
});

cljs.core.async.__GT_t_cljs$core$async44113 = (function cljs$core$async$__GT_t_cljs$core$async44113(f__$1,blockable__$1,meta44114){
return (new cljs.core.async.t_cljs$core$async44113(f__$1,blockable__$1,meta44114));
});

}

return (new cljs.core.async.t_cljs$core$async44113(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args44122 = [];
var len__27014__auto___44125 = arguments.length;
var i__27015__auto___44126 = (0);
while(true){
if((i__27015__auto___44126 < len__27014__auto___44125)){
args44122.push((arguments[i__27015__auto___44126]));

var G__44127 = (i__27015__auto___44126 + (1));
i__27015__auto___44126 = G__44127;
continue;
} else {
}
break;
}

var G__44124 = args44122.length;
switch (G__44124) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44122.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args44129 = [];
var len__27014__auto___44132 = arguments.length;
var i__27015__auto___44133 = (0);
while(true){
if((i__27015__auto___44133 < len__27014__auto___44132)){
args44129.push((arguments[i__27015__auto___44133]));

var G__44134 = (i__27015__auto___44133 + (1));
i__27015__auto___44133 = G__44134;
continue;
} else {
}
break;
}

var G__44131 = args44129.length;
switch (G__44131) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44129.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args44136 = [];
var len__27014__auto___44139 = arguments.length;
var i__27015__auto___44140 = (0);
while(true){
if((i__27015__auto___44140 < len__27014__auto___44139)){
args44136.push((arguments[i__27015__auto___44140]));

var G__44141 = (i__27015__auto___44140 + (1));
i__27015__auto___44140 = G__44141;
continue;
} else {
}
break;
}

var G__44138 = args44136.length;
switch (G__44138) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44136.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44143 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44143);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44143,ret){
return (function (){
return fn1.call(null,val_44143);
});})(val_44143,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args44144 = [];
var len__27014__auto___44147 = arguments.length;
var i__27015__auto___44148 = (0);
while(true){
if((i__27015__auto___44148 < len__27014__auto___44147)){
args44144.push((arguments[i__27015__auto___44148]));

var G__44149 = (i__27015__auto___44148 + (1));
i__27015__auto___44148 = G__44149;
continue;
} else {
}
break;
}

var G__44146 = args44144.length;
switch (G__44146) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44144.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26854__auto___44151 = n;
var x_44152 = (0);
while(true){
if((x_44152 < n__26854__auto___44151)){
(a[x_44152] = (0));

var G__44153 = (x_44152 + (1));
x_44152 = G__44153;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__44154 = (i + (1));
i = G__44154;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44158 = (function (alt_flag,flag,meta44159){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta44159 = meta44159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44160,meta44159__$1){
var self__ = this;
var _44160__$1 = this;
return (new cljs.core.async.t_cljs$core$async44158(self__.alt_flag,self__.flag,meta44159__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44160){
var self__ = this;
var _44160__$1 = this;
return self__.meta44159;
});})(flag))
;

cljs.core.async.t_cljs$core$async44158.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44158.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44158.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44158.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44158.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44159","meta44159",-1930027324,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44158";

cljs.core.async.t_cljs$core$async44158.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async44158");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44158 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44158(alt_flag__$1,flag__$1,meta44159){
return (new cljs.core.async.t_cljs$core$async44158(alt_flag__$1,flag__$1,meta44159));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44158(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44164 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44164 = (function (alt_handler,flag,cb,meta44165){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta44165 = meta44165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44166,meta44165__$1){
var self__ = this;
var _44166__$1 = this;
return (new cljs.core.async.t_cljs$core$async44164(self__.alt_handler,self__.flag,self__.cb,meta44165__$1));
});

cljs.core.async.t_cljs$core$async44164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44166){
var self__ = this;
var _44166__$1 = this;
return self__.meta44165;
});

cljs.core.async.t_cljs$core$async44164.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44164.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44165","meta44165",1060170808,null)], null);
});

cljs.core.async.t_cljs$core$async44164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44164";

cljs.core.async.t_cljs$core$async44164.cljs$lang$ctorPrWriter = (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async44164");
});

cljs.core.async.__GT_t_cljs$core$async44164 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44164(alt_handler__$1,flag__$1,cb__$1,meta44165){
return (new cljs.core.async.t_cljs$core$async44164(alt_handler__$1,flag__$1,cb__$1,meta44165));
});

}

return (new cljs.core.async.t_cljs$core$async44164(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44167_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44167_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44168_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44168_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25939__auto__ = wport;
if(cljs.core.truth_(or__25939__auto__)){
return or__25939__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44169 = (i + (1));
i = G__44169;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25939__auto__ = ret;
if(cljs.core.truth_(or__25939__auto__)){
return or__25939__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25927__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25927__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25927__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27021__auto__ = [];
var len__27014__auto___44175 = arguments.length;
var i__27015__auto___44176 = (0);
while(true){
if((i__27015__auto___44176 < len__27014__auto___44175)){
args__27021__auto__.push((arguments[i__27015__auto___44176]));

var G__44177 = (i__27015__auto___44176 + (1));
i__27015__auto___44176 = G__44177;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((1) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27022__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44172){
var map__44173 = p__44172;
var map__44173__$1 = ((((!((map__44173 == null)))?((((map__44173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44173):map__44173);
var opts = map__44173__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44170){
var G__44171 = cljs.core.first.call(null,seq44170);
var seq44170__$1 = cljs.core.next.call(null,seq44170);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44171,seq44170__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args44178 = [];
var len__27014__auto___44228 = arguments.length;
var i__27015__auto___44229 = (0);
while(true){
if((i__27015__auto___44229 < len__27014__auto___44228)){
args44178.push((arguments[i__27015__auto___44229]));

var G__44230 = (i__27015__auto___44229 + (1));
i__27015__auto___44229 = G__44230;
continue;
} else {
}
break;
}

var G__44180 = args44178.length;
switch (G__44180) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44178.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28051__auto___44232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto___44232){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto___44232){
return (function (state_44204){
var state_val_44205 = (state_44204[(1)]);
if((state_val_44205 === (7))){
var inst_44200 = (state_44204[(2)]);
var state_44204__$1 = state_44204;
var statearr_44206_44233 = state_44204__$1;
(statearr_44206_44233[(2)] = inst_44200);

(statearr_44206_44233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44205 === (1))){
var state_44204__$1 = state_44204;
var statearr_44207_44234 = state_44204__$1;
(statearr_44207_44234[(2)] = null);

(statearr_44207_44234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44205 === (4))){
var inst_44183 = (state_44204[(7)]);
var inst_44183__$1 = (state_44204[(2)]);
var inst_44184 = (inst_44183__$1 == null);
var state_44204__$1 = (function (){var statearr_44208 = state_44204;
(statearr_44208[(7)] = inst_44183__$1);

return statearr_44208;
})();
if(cljs.core.truth_(inst_44184)){
var statearr_44209_44235 = state_44204__$1;
(statearr_44209_44235[(1)] = (5));

} else {
var statearr_44210_44236 = state_44204__$1;
(statearr_44210_44236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44205 === (13))){
var state_44204__$1 = state_44204;
var statearr_44211_44237 = state_44204__$1;
(statearr_44211_44237[(2)] = null);

(statearr_44211_44237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44205 === (6))){
var inst_44183 = (state_44204[(7)]);
var state_44204__$1 = state_44204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44204__$1,(11),to,inst_44183);
} else {
if((state_val_44205 === (3))){
var inst_44202 = (state_44204[(2)]);
var state_44204__$1 = state_44204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44204__$1,inst_44202);
} else {
if((state_val_44205 === (12))){
var state_44204__$1 = state_44204;
var statearr_44212_44238 = state_44204__$1;
(statearr_44212_44238[(2)] = null);

(statearr_44212_44238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44205 === (2))){
var state_44204__$1 = state_44204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44204__$1,(4),from);
} else {
if((state_val_44205 === (11))){
var inst_44193 = (state_44204[(2)]);
var state_44204__$1 = state_44204;
if(cljs.core.truth_(inst_44193)){
var statearr_44213_44239 = state_44204__$1;
(statearr_44213_44239[(1)] = (12));

} else {
var statearr_44214_44240 = state_44204__$1;
(statearr_44214_44240[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44205 === (9))){
var state_44204__$1 = state_44204;
var statearr_44215_44241 = state_44204__$1;
(statearr_44215_44241[(2)] = null);

(statearr_44215_44241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44205 === (5))){
var state_44204__$1 = state_44204;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44216_44242 = state_44204__$1;
(statearr_44216_44242[(1)] = (8));

} else {
var statearr_44217_44243 = state_44204__$1;
(statearr_44217_44243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44205 === (14))){
var inst_44198 = (state_44204[(2)]);
var state_44204__$1 = state_44204;
var statearr_44218_44244 = state_44204__$1;
(statearr_44218_44244[(2)] = inst_44198);

(statearr_44218_44244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44205 === (10))){
var inst_44190 = (state_44204[(2)]);
var state_44204__$1 = state_44204;
var statearr_44219_44245 = state_44204__$1;
(statearr_44219_44245[(2)] = inst_44190);

(statearr_44219_44245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44205 === (8))){
var inst_44187 = cljs.core.async.close_BANG_.call(null,to);
var state_44204__$1 = state_44204;
var statearr_44220_44246 = state_44204__$1;
(statearr_44220_44246[(2)] = inst_44187);

(statearr_44220_44246[(1)] = (10));


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
});})(c__28051__auto___44232))
;
return ((function (switch__28030__auto__,c__28051__auto___44232){
return (function() {
var cljs$core$async$state_machine__28031__auto__ = null;
var cljs$core$async$state_machine__28031__auto____0 = (function (){
var statearr_44224 = [null,null,null,null,null,null,null,null];
(statearr_44224[(0)] = cljs$core$async$state_machine__28031__auto__);

(statearr_44224[(1)] = (1));

return statearr_44224;
});
var cljs$core$async$state_machine__28031__auto____1 = (function (state_44204){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_44204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e44225){if((e44225 instanceof Object)){
var ex__28034__auto__ = e44225;
var statearr_44226_44247 = state_44204;
(statearr_44226_44247[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44248 = state_44204;
state_44204 = G__44248;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$state_machine__28031__auto__ = function(state_44204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28031__auto____1.call(this,state_44204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28031__auto____0;
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28031__auto____1;
return cljs$core$async$state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto___44232))
})();
var state__28053__auto__ = (function (){var statearr_44227 = f__28052__auto__.call(null);
(statearr_44227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___44232);

return statearr_44227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto___44232))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__44436){
var vec__44437 = p__44436;
var v = cljs.core.nth.call(null,vec__44437,(0),null);
var p = cljs.core.nth.call(null,vec__44437,(1),null);
var job = vec__44437;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28051__auto___44623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto___44623,res,vec__44437,v,p,job,jobs,results){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto___44623,res,vec__44437,v,p,job,jobs,results){
return (function (state_44444){
var state_val_44445 = (state_44444[(1)]);
if((state_val_44445 === (1))){
var state_44444__$1 = state_44444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44444__$1,(2),res,v);
} else {
if((state_val_44445 === (2))){
var inst_44441 = (state_44444[(2)]);
var inst_44442 = cljs.core.async.close_BANG_.call(null,res);
var state_44444__$1 = (function (){var statearr_44446 = state_44444;
(statearr_44446[(7)] = inst_44441);

return statearr_44446;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44444__$1,inst_44442);
} else {
return null;
}
}
});})(c__28051__auto___44623,res,vec__44437,v,p,job,jobs,results))
;
return ((function (switch__28030__auto__,c__28051__auto___44623,res,vec__44437,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____0 = (function (){
var statearr_44450 = [null,null,null,null,null,null,null,null];
(statearr_44450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__);

(statearr_44450[(1)] = (1));

return statearr_44450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____1 = (function (state_44444){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_44444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e44451){if((e44451 instanceof Object)){
var ex__28034__auto__ = e44451;
var statearr_44452_44624 = state_44444;
(statearr_44452_44624[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44625 = state_44444;
state_44444 = G__44625;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__ = function(state_44444){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____1.call(this,state_44444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto___44623,res,vec__44437,v,p,job,jobs,results))
})();
var state__28053__auto__ = (function (){var statearr_44453 = f__28052__auto__.call(null);
(statearr_44453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___44623);

return statearr_44453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto___44623,res,vec__44437,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44454){
var vec__44455 = p__44454;
var v = cljs.core.nth.call(null,vec__44455,(0),null);
var p = cljs.core.nth.call(null,vec__44455,(1),null);
var job = vec__44455;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26854__auto___44626 = n;
var __44627 = (0);
while(true){
if((__44627 < n__26854__auto___44626)){
var G__44458_44628 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__44458_44628) {
case "compute":
var c__28051__auto___44630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44627,c__28051__auto___44630,G__44458_44628,n__26854__auto___44626,jobs,results,process,async){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (__44627,c__28051__auto___44630,G__44458_44628,n__26854__auto___44626,jobs,results,process,async){
return (function (state_44471){
var state_val_44472 = (state_44471[(1)]);
if((state_val_44472 === (1))){
var state_44471__$1 = state_44471;
var statearr_44473_44631 = state_44471__$1;
(statearr_44473_44631[(2)] = null);

(statearr_44473_44631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44472 === (2))){
var state_44471__$1 = state_44471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44471__$1,(4),jobs);
} else {
if((state_val_44472 === (3))){
var inst_44469 = (state_44471[(2)]);
var state_44471__$1 = state_44471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44471__$1,inst_44469);
} else {
if((state_val_44472 === (4))){
var inst_44461 = (state_44471[(2)]);
var inst_44462 = process.call(null,inst_44461);
var state_44471__$1 = state_44471;
if(cljs.core.truth_(inst_44462)){
var statearr_44474_44632 = state_44471__$1;
(statearr_44474_44632[(1)] = (5));

} else {
var statearr_44475_44633 = state_44471__$1;
(statearr_44475_44633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44472 === (5))){
var state_44471__$1 = state_44471;
var statearr_44476_44634 = state_44471__$1;
(statearr_44476_44634[(2)] = null);

(statearr_44476_44634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44472 === (6))){
var state_44471__$1 = state_44471;
var statearr_44477_44635 = state_44471__$1;
(statearr_44477_44635[(2)] = null);

(statearr_44477_44635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44472 === (7))){
var inst_44467 = (state_44471[(2)]);
var state_44471__$1 = state_44471;
var statearr_44478_44636 = state_44471__$1;
(statearr_44478_44636[(2)] = inst_44467);

(statearr_44478_44636[(1)] = (3));


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
});})(__44627,c__28051__auto___44630,G__44458_44628,n__26854__auto___44626,jobs,results,process,async))
;
return ((function (__44627,switch__28030__auto__,c__28051__auto___44630,G__44458_44628,n__26854__auto___44626,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____0 = (function (){
var statearr_44482 = [null,null,null,null,null,null,null];
(statearr_44482[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__);

(statearr_44482[(1)] = (1));

return statearr_44482;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____1 = (function (state_44471){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_44471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e44483){if((e44483 instanceof Object)){
var ex__28034__auto__ = e44483;
var statearr_44484_44637 = state_44471;
(statearr_44484_44637[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44638 = state_44471;
state_44471 = G__44638;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__ = function(state_44471){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____1.call(this,state_44471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__;
})()
;})(__44627,switch__28030__auto__,c__28051__auto___44630,G__44458_44628,n__26854__auto___44626,jobs,results,process,async))
})();
var state__28053__auto__ = (function (){var statearr_44485 = f__28052__auto__.call(null);
(statearr_44485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___44630);

return statearr_44485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(__44627,c__28051__auto___44630,G__44458_44628,n__26854__auto___44626,jobs,results,process,async))
);


break;
case "async":
var c__28051__auto___44639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44627,c__28051__auto___44639,G__44458_44628,n__26854__auto___44626,jobs,results,process,async){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (__44627,c__28051__auto___44639,G__44458_44628,n__26854__auto___44626,jobs,results,process,async){
return (function (state_44498){
var state_val_44499 = (state_44498[(1)]);
if((state_val_44499 === (1))){
var state_44498__$1 = state_44498;
var statearr_44500_44640 = state_44498__$1;
(statearr_44500_44640[(2)] = null);

(statearr_44500_44640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (2))){
var state_44498__$1 = state_44498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44498__$1,(4),jobs);
} else {
if((state_val_44499 === (3))){
var inst_44496 = (state_44498[(2)]);
var state_44498__$1 = state_44498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44498__$1,inst_44496);
} else {
if((state_val_44499 === (4))){
var inst_44488 = (state_44498[(2)]);
var inst_44489 = async.call(null,inst_44488);
var state_44498__$1 = state_44498;
if(cljs.core.truth_(inst_44489)){
var statearr_44501_44641 = state_44498__$1;
(statearr_44501_44641[(1)] = (5));

} else {
var statearr_44502_44642 = state_44498__$1;
(statearr_44502_44642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (5))){
var state_44498__$1 = state_44498;
var statearr_44503_44643 = state_44498__$1;
(statearr_44503_44643[(2)] = null);

(statearr_44503_44643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (6))){
var state_44498__$1 = state_44498;
var statearr_44504_44644 = state_44498__$1;
(statearr_44504_44644[(2)] = null);

(statearr_44504_44644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (7))){
var inst_44494 = (state_44498[(2)]);
var state_44498__$1 = state_44498;
var statearr_44505_44645 = state_44498__$1;
(statearr_44505_44645[(2)] = inst_44494);

(statearr_44505_44645[(1)] = (3));


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
});})(__44627,c__28051__auto___44639,G__44458_44628,n__26854__auto___44626,jobs,results,process,async))
;
return ((function (__44627,switch__28030__auto__,c__28051__auto___44639,G__44458_44628,n__26854__auto___44626,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____0 = (function (){
var statearr_44509 = [null,null,null,null,null,null,null];
(statearr_44509[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__);

(statearr_44509[(1)] = (1));

return statearr_44509;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____1 = (function (state_44498){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_44498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e44510){if((e44510 instanceof Object)){
var ex__28034__auto__ = e44510;
var statearr_44511_44646 = state_44498;
(statearr_44511_44646[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44647 = state_44498;
state_44498 = G__44647;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__ = function(state_44498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____1.call(this,state_44498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__;
})()
;})(__44627,switch__28030__auto__,c__28051__auto___44639,G__44458_44628,n__26854__auto___44626,jobs,results,process,async))
})();
var state__28053__auto__ = (function (){var statearr_44512 = f__28052__auto__.call(null);
(statearr_44512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___44639);

return statearr_44512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(__44627,c__28051__auto___44639,G__44458_44628,n__26854__auto___44626,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__44648 = (__44627 + (1));
__44627 = G__44648;
continue;
} else {
}
break;
}

var c__28051__auto___44649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto___44649,jobs,results,process,async){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto___44649,jobs,results,process,async){
return (function (state_44534){
var state_val_44535 = (state_44534[(1)]);
if((state_val_44535 === (1))){
var state_44534__$1 = state_44534;
var statearr_44536_44650 = state_44534__$1;
(statearr_44536_44650[(2)] = null);

(statearr_44536_44650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44535 === (2))){
var state_44534__$1 = state_44534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44534__$1,(4),from);
} else {
if((state_val_44535 === (3))){
var inst_44532 = (state_44534[(2)]);
var state_44534__$1 = state_44534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44534__$1,inst_44532);
} else {
if((state_val_44535 === (4))){
var inst_44515 = (state_44534[(7)]);
var inst_44515__$1 = (state_44534[(2)]);
var inst_44516 = (inst_44515__$1 == null);
var state_44534__$1 = (function (){var statearr_44537 = state_44534;
(statearr_44537[(7)] = inst_44515__$1);

return statearr_44537;
})();
if(cljs.core.truth_(inst_44516)){
var statearr_44538_44651 = state_44534__$1;
(statearr_44538_44651[(1)] = (5));

} else {
var statearr_44539_44652 = state_44534__$1;
(statearr_44539_44652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44535 === (5))){
var inst_44518 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44534__$1 = state_44534;
var statearr_44540_44653 = state_44534__$1;
(statearr_44540_44653[(2)] = inst_44518);

(statearr_44540_44653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44535 === (6))){
var inst_44515 = (state_44534[(7)]);
var inst_44520 = (state_44534[(8)]);
var inst_44520__$1 = cljs.core.async.chan.call(null,(1));
var inst_44521 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44522 = [inst_44515,inst_44520__$1];
var inst_44523 = (new cljs.core.PersistentVector(null,2,(5),inst_44521,inst_44522,null));
var state_44534__$1 = (function (){var statearr_44541 = state_44534;
(statearr_44541[(8)] = inst_44520__$1);

return statearr_44541;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44534__$1,(8),jobs,inst_44523);
} else {
if((state_val_44535 === (7))){
var inst_44530 = (state_44534[(2)]);
var state_44534__$1 = state_44534;
var statearr_44542_44654 = state_44534__$1;
(statearr_44542_44654[(2)] = inst_44530);

(statearr_44542_44654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44535 === (8))){
var inst_44520 = (state_44534[(8)]);
var inst_44525 = (state_44534[(2)]);
var state_44534__$1 = (function (){var statearr_44543 = state_44534;
(statearr_44543[(9)] = inst_44525);

return statearr_44543;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44534__$1,(9),results,inst_44520);
} else {
if((state_val_44535 === (9))){
var inst_44527 = (state_44534[(2)]);
var state_44534__$1 = (function (){var statearr_44544 = state_44534;
(statearr_44544[(10)] = inst_44527);

return statearr_44544;
})();
var statearr_44545_44655 = state_44534__$1;
(statearr_44545_44655[(2)] = null);

(statearr_44545_44655[(1)] = (2));


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
});})(c__28051__auto___44649,jobs,results,process,async))
;
return ((function (switch__28030__auto__,c__28051__auto___44649,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____0 = (function (){
var statearr_44549 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44549[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__);

(statearr_44549[(1)] = (1));

return statearr_44549;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____1 = (function (state_44534){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_44534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e44550){if((e44550 instanceof Object)){
var ex__28034__auto__ = e44550;
var statearr_44551_44656 = state_44534;
(statearr_44551_44656[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44657 = state_44534;
state_44534 = G__44657;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__ = function(state_44534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____1.call(this,state_44534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto___44649,jobs,results,process,async))
})();
var state__28053__auto__ = (function (){var statearr_44552 = f__28052__auto__.call(null);
(statearr_44552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___44649);

return statearr_44552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto___44649,jobs,results,process,async))
);


var c__28051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto__,jobs,results,process,async){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto__,jobs,results,process,async){
return (function (state_44590){
var state_val_44591 = (state_44590[(1)]);
if((state_val_44591 === (7))){
var inst_44586 = (state_44590[(2)]);
var state_44590__$1 = state_44590;
var statearr_44592_44658 = state_44590__$1;
(statearr_44592_44658[(2)] = inst_44586);

(statearr_44592_44658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (20))){
var state_44590__$1 = state_44590;
var statearr_44593_44659 = state_44590__$1;
(statearr_44593_44659[(2)] = null);

(statearr_44593_44659[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (1))){
var state_44590__$1 = state_44590;
var statearr_44594_44660 = state_44590__$1;
(statearr_44594_44660[(2)] = null);

(statearr_44594_44660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (4))){
var inst_44555 = (state_44590[(7)]);
var inst_44555__$1 = (state_44590[(2)]);
var inst_44556 = (inst_44555__$1 == null);
var state_44590__$1 = (function (){var statearr_44595 = state_44590;
(statearr_44595[(7)] = inst_44555__$1);

return statearr_44595;
})();
if(cljs.core.truth_(inst_44556)){
var statearr_44596_44661 = state_44590__$1;
(statearr_44596_44661[(1)] = (5));

} else {
var statearr_44597_44662 = state_44590__$1;
(statearr_44597_44662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (15))){
var inst_44568 = (state_44590[(8)]);
var state_44590__$1 = state_44590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44590__$1,(18),to,inst_44568);
} else {
if((state_val_44591 === (21))){
var inst_44581 = (state_44590[(2)]);
var state_44590__$1 = state_44590;
var statearr_44598_44663 = state_44590__$1;
(statearr_44598_44663[(2)] = inst_44581);

(statearr_44598_44663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (13))){
var inst_44583 = (state_44590[(2)]);
var state_44590__$1 = (function (){var statearr_44599 = state_44590;
(statearr_44599[(9)] = inst_44583);

return statearr_44599;
})();
var statearr_44600_44664 = state_44590__$1;
(statearr_44600_44664[(2)] = null);

(statearr_44600_44664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (6))){
var inst_44555 = (state_44590[(7)]);
var state_44590__$1 = state_44590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44590__$1,(11),inst_44555);
} else {
if((state_val_44591 === (17))){
var inst_44576 = (state_44590[(2)]);
var state_44590__$1 = state_44590;
if(cljs.core.truth_(inst_44576)){
var statearr_44601_44665 = state_44590__$1;
(statearr_44601_44665[(1)] = (19));

} else {
var statearr_44602_44666 = state_44590__$1;
(statearr_44602_44666[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (3))){
var inst_44588 = (state_44590[(2)]);
var state_44590__$1 = state_44590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44590__$1,inst_44588);
} else {
if((state_val_44591 === (12))){
var inst_44565 = (state_44590[(10)]);
var state_44590__$1 = state_44590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44590__$1,(14),inst_44565);
} else {
if((state_val_44591 === (2))){
var state_44590__$1 = state_44590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44590__$1,(4),results);
} else {
if((state_val_44591 === (19))){
var state_44590__$1 = state_44590;
var statearr_44603_44667 = state_44590__$1;
(statearr_44603_44667[(2)] = null);

(statearr_44603_44667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (11))){
var inst_44565 = (state_44590[(2)]);
var state_44590__$1 = (function (){var statearr_44604 = state_44590;
(statearr_44604[(10)] = inst_44565);

return statearr_44604;
})();
var statearr_44605_44668 = state_44590__$1;
(statearr_44605_44668[(2)] = null);

(statearr_44605_44668[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (9))){
var state_44590__$1 = state_44590;
var statearr_44606_44669 = state_44590__$1;
(statearr_44606_44669[(2)] = null);

(statearr_44606_44669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (5))){
var state_44590__$1 = state_44590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44607_44670 = state_44590__$1;
(statearr_44607_44670[(1)] = (8));

} else {
var statearr_44608_44671 = state_44590__$1;
(statearr_44608_44671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (14))){
var inst_44568 = (state_44590[(8)]);
var inst_44570 = (state_44590[(11)]);
var inst_44568__$1 = (state_44590[(2)]);
var inst_44569 = (inst_44568__$1 == null);
var inst_44570__$1 = cljs.core.not.call(null,inst_44569);
var state_44590__$1 = (function (){var statearr_44609 = state_44590;
(statearr_44609[(8)] = inst_44568__$1);

(statearr_44609[(11)] = inst_44570__$1);

return statearr_44609;
})();
if(inst_44570__$1){
var statearr_44610_44672 = state_44590__$1;
(statearr_44610_44672[(1)] = (15));

} else {
var statearr_44611_44673 = state_44590__$1;
(statearr_44611_44673[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (16))){
var inst_44570 = (state_44590[(11)]);
var state_44590__$1 = state_44590;
var statearr_44612_44674 = state_44590__$1;
(statearr_44612_44674[(2)] = inst_44570);

(statearr_44612_44674[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (10))){
var inst_44562 = (state_44590[(2)]);
var state_44590__$1 = state_44590;
var statearr_44613_44675 = state_44590__$1;
(statearr_44613_44675[(2)] = inst_44562);

(statearr_44613_44675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (18))){
var inst_44573 = (state_44590[(2)]);
var state_44590__$1 = state_44590;
var statearr_44614_44676 = state_44590__$1;
(statearr_44614_44676[(2)] = inst_44573);

(statearr_44614_44676[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (8))){
var inst_44559 = cljs.core.async.close_BANG_.call(null,to);
var state_44590__$1 = state_44590;
var statearr_44615_44677 = state_44590__$1;
(statearr_44615_44677[(2)] = inst_44559);

(statearr_44615_44677[(1)] = (10));


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
});})(c__28051__auto__,jobs,results,process,async))
;
return ((function (switch__28030__auto__,c__28051__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____0 = (function (){
var statearr_44619 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44619[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__);

(statearr_44619[(1)] = (1));

return statearr_44619;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____1 = (function (state_44590){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_44590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e44620){if((e44620 instanceof Object)){
var ex__28034__auto__ = e44620;
var statearr_44621_44678 = state_44590;
(statearr_44621_44678[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44679 = state_44590;
state_44590 = G__44679;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__ = function(state_44590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____1.call(this,state_44590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28031__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto__,jobs,results,process,async))
})();
var state__28053__auto__ = (function (){var statearr_44622 = f__28052__auto__.call(null);
(statearr_44622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto__);

return statearr_44622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto__,jobs,results,process,async))
);

return c__28051__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args44680 = [];
var len__27014__auto___44683 = arguments.length;
var i__27015__auto___44684 = (0);
while(true){
if((i__27015__auto___44684 < len__27014__auto___44683)){
args44680.push((arguments[i__27015__auto___44684]));

var G__44685 = (i__27015__auto___44684 + (1));
i__27015__auto___44684 = G__44685;
continue;
} else {
}
break;
}

var G__44682 = args44680.length;
switch (G__44682) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44680.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args44687 = [];
var len__27014__auto___44690 = arguments.length;
var i__27015__auto___44691 = (0);
while(true){
if((i__27015__auto___44691 < len__27014__auto___44690)){
args44687.push((arguments[i__27015__auto___44691]));

var G__44692 = (i__27015__auto___44691 + (1));
i__27015__auto___44691 = G__44692;
continue;
} else {
}
break;
}

var G__44689 = args44687.length;
switch (G__44689) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44687.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args44694 = [];
var len__27014__auto___44747 = arguments.length;
var i__27015__auto___44748 = (0);
while(true){
if((i__27015__auto___44748 < len__27014__auto___44747)){
args44694.push((arguments[i__27015__auto___44748]));

var G__44749 = (i__27015__auto___44748 + (1));
i__27015__auto___44748 = G__44749;
continue;
} else {
}
break;
}

var G__44696 = args44694.length;
switch (G__44696) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44694.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28051__auto___44751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto___44751,tc,fc){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto___44751,tc,fc){
return (function (state_44722){
var state_val_44723 = (state_44722[(1)]);
if((state_val_44723 === (7))){
var inst_44718 = (state_44722[(2)]);
var state_44722__$1 = state_44722;
var statearr_44724_44752 = state_44722__$1;
(statearr_44724_44752[(2)] = inst_44718);

(statearr_44724_44752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (1))){
var state_44722__$1 = state_44722;
var statearr_44725_44753 = state_44722__$1;
(statearr_44725_44753[(2)] = null);

(statearr_44725_44753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (4))){
var inst_44699 = (state_44722[(7)]);
var inst_44699__$1 = (state_44722[(2)]);
var inst_44700 = (inst_44699__$1 == null);
var state_44722__$1 = (function (){var statearr_44726 = state_44722;
(statearr_44726[(7)] = inst_44699__$1);

return statearr_44726;
})();
if(cljs.core.truth_(inst_44700)){
var statearr_44727_44754 = state_44722__$1;
(statearr_44727_44754[(1)] = (5));

} else {
var statearr_44728_44755 = state_44722__$1;
(statearr_44728_44755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (13))){
var state_44722__$1 = state_44722;
var statearr_44729_44756 = state_44722__$1;
(statearr_44729_44756[(2)] = null);

(statearr_44729_44756[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (6))){
var inst_44699 = (state_44722[(7)]);
var inst_44705 = p.call(null,inst_44699);
var state_44722__$1 = state_44722;
if(cljs.core.truth_(inst_44705)){
var statearr_44730_44757 = state_44722__$1;
(statearr_44730_44757[(1)] = (9));

} else {
var statearr_44731_44758 = state_44722__$1;
(statearr_44731_44758[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (3))){
var inst_44720 = (state_44722[(2)]);
var state_44722__$1 = state_44722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44722__$1,inst_44720);
} else {
if((state_val_44723 === (12))){
var state_44722__$1 = state_44722;
var statearr_44732_44759 = state_44722__$1;
(statearr_44732_44759[(2)] = null);

(statearr_44732_44759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (2))){
var state_44722__$1 = state_44722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44722__$1,(4),ch);
} else {
if((state_val_44723 === (11))){
var inst_44699 = (state_44722[(7)]);
var inst_44709 = (state_44722[(2)]);
var state_44722__$1 = state_44722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44722__$1,(8),inst_44709,inst_44699);
} else {
if((state_val_44723 === (9))){
var state_44722__$1 = state_44722;
var statearr_44733_44760 = state_44722__$1;
(statearr_44733_44760[(2)] = tc);

(statearr_44733_44760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (5))){
var inst_44702 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44703 = cljs.core.async.close_BANG_.call(null,fc);
var state_44722__$1 = (function (){var statearr_44734 = state_44722;
(statearr_44734[(8)] = inst_44702);

return statearr_44734;
})();
var statearr_44735_44761 = state_44722__$1;
(statearr_44735_44761[(2)] = inst_44703);

(statearr_44735_44761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (14))){
var inst_44716 = (state_44722[(2)]);
var state_44722__$1 = state_44722;
var statearr_44736_44762 = state_44722__$1;
(statearr_44736_44762[(2)] = inst_44716);

(statearr_44736_44762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (10))){
var state_44722__$1 = state_44722;
var statearr_44737_44763 = state_44722__$1;
(statearr_44737_44763[(2)] = fc);

(statearr_44737_44763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44723 === (8))){
var inst_44711 = (state_44722[(2)]);
var state_44722__$1 = state_44722;
if(cljs.core.truth_(inst_44711)){
var statearr_44738_44764 = state_44722__$1;
(statearr_44738_44764[(1)] = (12));

} else {
var statearr_44739_44765 = state_44722__$1;
(statearr_44739_44765[(1)] = (13));

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
});})(c__28051__auto___44751,tc,fc))
;
return ((function (switch__28030__auto__,c__28051__auto___44751,tc,fc){
return (function() {
var cljs$core$async$state_machine__28031__auto__ = null;
var cljs$core$async$state_machine__28031__auto____0 = (function (){
var statearr_44743 = [null,null,null,null,null,null,null,null,null];
(statearr_44743[(0)] = cljs$core$async$state_machine__28031__auto__);

(statearr_44743[(1)] = (1));

return statearr_44743;
});
var cljs$core$async$state_machine__28031__auto____1 = (function (state_44722){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_44722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e44744){if((e44744 instanceof Object)){
var ex__28034__auto__ = e44744;
var statearr_44745_44766 = state_44722;
(statearr_44745_44766[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44767 = state_44722;
state_44722 = G__44767;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$state_machine__28031__auto__ = function(state_44722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28031__auto____1.call(this,state_44722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28031__auto____0;
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28031__auto____1;
return cljs$core$async$state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto___44751,tc,fc))
})();
var state__28053__auto__ = (function (){var statearr_44746 = f__28052__auto__.call(null);
(statearr_44746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___44751);

return statearr_44746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto___44751,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto__){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto__){
return (function (state_44831){
var state_val_44832 = (state_44831[(1)]);
if((state_val_44832 === (7))){
var inst_44827 = (state_44831[(2)]);
var state_44831__$1 = state_44831;
var statearr_44833_44854 = state_44831__$1;
(statearr_44833_44854[(2)] = inst_44827);

(statearr_44833_44854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44832 === (1))){
var inst_44811 = init;
var state_44831__$1 = (function (){var statearr_44834 = state_44831;
(statearr_44834[(7)] = inst_44811);

return statearr_44834;
})();
var statearr_44835_44855 = state_44831__$1;
(statearr_44835_44855[(2)] = null);

(statearr_44835_44855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44832 === (4))){
var inst_44814 = (state_44831[(8)]);
var inst_44814__$1 = (state_44831[(2)]);
var inst_44815 = (inst_44814__$1 == null);
var state_44831__$1 = (function (){var statearr_44836 = state_44831;
(statearr_44836[(8)] = inst_44814__$1);

return statearr_44836;
})();
if(cljs.core.truth_(inst_44815)){
var statearr_44837_44856 = state_44831__$1;
(statearr_44837_44856[(1)] = (5));

} else {
var statearr_44838_44857 = state_44831__$1;
(statearr_44838_44857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44832 === (6))){
var inst_44818 = (state_44831[(9)]);
var inst_44811 = (state_44831[(7)]);
var inst_44814 = (state_44831[(8)]);
var inst_44818__$1 = f.call(null,inst_44811,inst_44814);
var inst_44819 = cljs.core.reduced_QMARK_.call(null,inst_44818__$1);
var state_44831__$1 = (function (){var statearr_44839 = state_44831;
(statearr_44839[(9)] = inst_44818__$1);

return statearr_44839;
})();
if(inst_44819){
var statearr_44840_44858 = state_44831__$1;
(statearr_44840_44858[(1)] = (8));

} else {
var statearr_44841_44859 = state_44831__$1;
(statearr_44841_44859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44832 === (3))){
var inst_44829 = (state_44831[(2)]);
var state_44831__$1 = state_44831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44831__$1,inst_44829);
} else {
if((state_val_44832 === (2))){
var state_44831__$1 = state_44831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44831__$1,(4),ch);
} else {
if((state_val_44832 === (9))){
var inst_44818 = (state_44831[(9)]);
var inst_44811 = inst_44818;
var state_44831__$1 = (function (){var statearr_44842 = state_44831;
(statearr_44842[(7)] = inst_44811);

return statearr_44842;
})();
var statearr_44843_44860 = state_44831__$1;
(statearr_44843_44860[(2)] = null);

(statearr_44843_44860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44832 === (5))){
var inst_44811 = (state_44831[(7)]);
var state_44831__$1 = state_44831;
var statearr_44844_44861 = state_44831__$1;
(statearr_44844_44861[(2)] = inst_44811);

(statearr_44844_44861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44832 === (10))){
var inst_44825 = (state_44831[(2)]);
var state_44831__$1 = state_44831;
var statearr_44845_44862 = state_44831__$1;
(statearr_44845_44862[(2)] = inst_44825);

(statearr_44845_44862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44832 === (8))){
var inst_44818 = (state_44831[(9)]);
var inst_44821 = cljs.core.deref.call(null,inst_44818);
var state_44831__$1 = state_44831;
var statearr_44846_44863 = state_44831__$1;
(statearr_44846_44863[(2)] = inst_44821);

(statearr_44846_44863[(1)] = (10));


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
});})(c__28051__auto__))
;
return ((function (switch__28030__auto__,c__28051__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28031__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28031__auto____0 = (function (){
var statearr_44850 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44850[(0)] = cljs$core$async$reduce_$_state_machine__28031__auto__);

(statearr_44850[(1)] = (1));

return statearr_44850;
});
var cljs$core$async$reduce_$_state_machine__28031__auto____1 = (function (state_44831){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_44831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e44851){if((e44851 instanceof Object)){
var ex__28034__auto__ = e44851;
var statearr_44852_44864 = state_44831;
(statearr_44852_44864[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44865 = state_44831;
state_44831 = G__44865;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28031__auto__ = function(state_44831){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28031__auto____1.call(this,state_44831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28031__auto____0;
cljs$core$async$reduce_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28031__auto____1;
return cljs$core$async$reduce_$_state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto__))
})();
var state__28053__auto__ = (function (){var statearr_44853 = f__28052__auto__.call(null);
(statearr_44853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto__);

return statearr_44853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto__))
);

return c__28051__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto__,f__$1){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto__,f__$1){
return (function (state_44885){
var state_val_44886 = (state_44885[(1)]);
if((state_val_44886 === (1))){
var inst_44880 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_44885__$1 = state_44885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44885__$1,(2),inst_44880);
} else {
if((state_val_44886 === (2))){
var inst_44882 = (state_44885[(2)]);
var inst_44883 = f__$1.call(null,inst_44882);
var state_44885__$1 = state_44885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44885__$1,inst_44883);
} else {
return null;
}
}
});})(c__28051__auto__,f__$1))
;
return ((function (switch__28030__auto__,c__28051__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28031__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28031__auto____0 = (function (){
var statearr_44890 = [null,null,null,null,null,null,null];
(statearr_44890[(0)] = cljs$core$async$transduce_$_state_machine__28031__auto__);

(statearr_44890[(1)] = (1));

return statearr_44890;
});
var cljs$core$async$transduce_$_state_machine__28031__auto____1 = (function (state_44885){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_44885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e44891){if((e44891 instanceof Object)){
var ex__28034__auto__ = e44891;
var statearr_44892_44894 = state_44885;
(statearr_44892_44894[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44895 = state_44885;
state_44885 = G__44895;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28031__auto__ = function(state_44885){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28031__auto____1.call(this,state_44885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28031__auto____0;
cljs$core$async$transduce_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28031__auto____1;
return cljs$core$async$transduce_$_state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto__,f__$1))
})();
var state__28053__auto__ = (function (){var statearr_44893 = f__28052__auto__.call(null);
(statearr_44893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto__);

return statearr_44893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto__,f__$1))
);

return c__28051__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args44896 = [];
var len__27014__auto___44948 = arguments.length;
var i__27015__auto___44949 = (0);
while(true){
if((i__27015__auto___44949 < len__27014__auto___44948)){
args44896.push((arguments[i__27015__auto___44949]));

var G__44950 = (i__27015__auto___44949 + (1));
i__27015__auto___44949 = G__44950;
continue;
} else {
}
break;
}

var G__44898 = args44896.length;
switch (G__44898) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44896.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto__){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto__){
return (function (state_44923){
var state_val_44924 = (state_44923[(1)]);
if((state_val_44924 === (7))){
var inst_44905 = (state_44923[(2)]);
var state_44923__$1 = state_44923;
var statearr_44925_44952 = state_44923__$1;
(statearr_44925_44952[(2)] = inst_44905);

(statearr_44925_44952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44924 === (1))){
var inst_44899 = cljs.core.seq.call(null,coll);
var inst_44900 = inst_44899;
var state_44923__$1 = (function (){var statearr_44926 = state_44923;
(statearr_44926[(7)] = inst_44900);

return statearr_44926;
})();
var statearr_44927_44953 = state_44923__$1;
(statearr_44927_44953[(2)] = null);

(statearr_44927_44953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44924 === (4))){
var inst_44900 = (state_44923[(7)]);
var inst_44903 = cljs.core.first.call(null,inst_44900);
var state_44923__$1 = state_44923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44923__$1,(7),ch,inst_44903);
} else {
if((state_val_44924 === (13))){
var inst_44917 = (state_44923[(2)]);
var state_44923__$1 = state_44923;
var statearr_44928_44954 = state_44923__$1;
(statearr_44928_44954[(2)] = inst_44917);

(statearr_44928_44954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44924 === (6))){
var inst_44908 = (state_44923[(2)]);
var state_44923__$1 = state_44923;
if(cljs.core.truth_(inst_44908)){
var statearr_44929_44955 = state_44923__$1;
(statearr_44929_44955[(1)] = (8));

} else {
var statearr_44930_44956 = state_44923__$1;
(statearr_44930_44956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44924 === (3))){
var inst_44921 = (state_44923[(2)]);
var state_44923__$1 = state_44923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44923__$1,inst_44921);
} else {
if((state_val_44924 === (12))){
var state_44923__$1 = state_44923;
var statearr_44931_44957 = state_44923__$1;
(statearr_44931_44957[(2)] = null);

(statearr_44931_44957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44924 === (2))){
var inst_44900 = (state_44923[(7)]);
var state_44923__$1 = state_44923;
if(cljs.core.truth_(inst_44900)){
var statearr_44932_44958 = state_44923__$1;
(statearr_44932_44958[(1)] = (4));

} else {
var statearr_44933_44959 = state_44923__$1;
(statearr_44933_44959[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44924 === (11))){
var inst_44914 = cljs.core.async.close_BANG_.call(null,ch);
var state_44923__$1 = state_44923;
var statearr_44934_44960 = state_44923__$1;
(statearr_44934_44960[(2)] = inst_44914);

(statearr_44934_44960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44924 === (9))){
var state_44923__$1 = state_44923;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44935_44961 = state_44923__$1;
(statearr_44935_44961[(1)] = (11));

} else {
var statearr_44936_44962 = state_44923__$1;
(statearr_44936_44962[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44924 === (5))){
var inst_44900 = (state_44923[(7)]);
var state_44923__$1 = state_44923;
var statearr_44937_44963 = state_44923__$1;
(statearr_44937_44963[(2)] = inst_44900);

(statearr_44937_44963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44924 === (10))){
var inst_44919 = (state_44923[(2)]);
var state_44923__$1 = state_44923;
var statearr_44938_44964 = state_44923__$1;
(statearr_44938_44964[(2)] = inst_44919);

(statearr_44938_44964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44924 === (8))){
var inst_44900 = (state_44923[(7)]);
var inst_44910 = cljs.core.next.call(null,inst_44900);
var inst_44900__$1 = inst_44910;
var state_44923__$1 = (function (){var statearr_44939 = state_44923;
(statearr_44939[(7)] = inst_44900__$1);

return statearr_44939;
})();
var statearr_44940_44965 = state_44923__$1;
(statearr_44940_44965[(2)] = null);

(statearr_44940_44965[(1)] = (2));


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
});})(c__28051__auto__))
;
return ((function (switch__28030__auto__,c__28051__auto__){
return (function() {
var cljs$core$async$state_machine__28031__auto__ = null;
var cljs$core$async$state_machine__28031__auto____0 = (function (){
var statearr_44944 = [null,null,null,null,null,null,null,null];
(statearr_44944[(0)] = cljs$core$async$state_machine__28031__auto__);

(statearr_44944[(1)] = (1));

return statearr_44944;
});
var cljs$core$async$state_machine__28031__auto____1 = (function (state_44923){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_44923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e44945){if((e44945 instanceof Object)){
var ex__28034__auto__ = e44945;
var statearr_44946_44966 = state_44923;
(statearr_44946_44966[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44967 = state_44923;
state_44923 = G__44967;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$state_machine__28031__auto__ = function(state_44923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28031__auto____1.call(this,state_44923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28031__auto____0;
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28031__auto____1;
return cljs$core$async$state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto__))
})();
var state__28053__auto__ = (function (){var statearr_44947 = f__28052__auto__.call(null);
(statearr_44947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto__);

return statearr_44947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto__))
);

return c__28051__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26602__auto__ = (((_ == null))?null:_);
var m__26603__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26602__auto__)]);
if(!((m__26603__auto__ == null))){
return m__26603__auto__.call(null,_);
} else {
var m__26603__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26603__auto____$1 == null))){
return m__26603__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26602__auto__ = (((m == null))?null:m);
var m__26603__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26602__auto__)]);
if(!((m__26603__auto__ == null))){
return m__26603__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26603__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26603__auto____$1 == null))){
return m__26603__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26602__auto__ = (((m == null))?null:m);
var m__26603__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26602__auto__)]);
if(!((m__26603__auto__ == null))){
return m__26603__auto__.call(null,m,ch);
} else {
var m__26603__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26603__auto____$1 == null))){
return m__26603__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26602__auto__ = (((m == null))?null:m);
var m__26603__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26602__auto__)]);
if(!((m__26603__auto__ == null))){
return m__26603__auto__.call(null,m);
} else {
var m__26603__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26603__auto____$1 == null))){
return m__26603__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async45193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45193 = (function (mult,ch,cs,meta45194){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta45194 = meta45194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45195,meta45194__$1){
var self__ = this;
var _45195__$1 = this;
return (new cljs.core.async.t_cljs$core$async45193(self__.mult,self__.ch,self__.cs,meta45194__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45193.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45195){
var self__ = this;
var _45195__$1 = this;
return self__.meta45194;
});})(cs))
;

cljs.core.async.t_cljs$core$async45193.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async45193.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45193.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async45193.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45193.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45193.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45193.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45194","meta45194",-1476227870,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45193";

cljs.core.async.t_cljs$core$async45193.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async45193");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async45193 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45193(mult__$1,ch__$1,cs__$1,meta45194){
return (new cljs.core.async.t_cljs$core$async45193(mult__$1,ch__$1,cs__$1,meta45194));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45193(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28051__auto___45418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto___45418,cs,m,dchan,dctr,done){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto___45418,cs,m,dchan,dctr,done){
return (function (state_45330){
var state_val_45331 = (state_45330[(1)]);
if((state_val_45331 === (7))){
var inst_45326 = (state_45330[(2)]);
var state_45330__$1 = state_45330;
var statearr_45332_45419 = state_45330__$1;
(statearr_45332_45419[(2)] = inst_45326);

(statearr_45332_45419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (20))){
var inst_45229 = (state_45330[(7)]);
var inst_45241 = cljs.core.first.call(null,inst_45229);
var inst_45242 = cljs.core.nth.call(null,inst_45241,(0),null);
var inst_45243 = cljs.core.nth.call(null,inst_45241,(1),null);
var state_45330__$1 = (function (){var statearr_45333 = state_45330;
(statearr_45333[(8)] = inst_45242);

return statearr_45333;
})();
if(cljs.core.truth_(inst_45243)){
var statearr_45334_45420 = state_45330__$1;
(statearr_45334_45420[(1)] = (22));

} else {
var statearr_45335_45421 = state_45330__$1;
(statearr_45335_45421[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (27))){
var inst_45198 = (state_45330[(9)]);
var inst_45271 = (state_45330[(10)]);
var inst_45278 = (state_45330[(11)]);
var inst_45273 = (state_45330[(12)]);
var inst_45278__$1 = cljs.core._nth.call(null,inst_45271,inst_45273);
var inst_45279 = cljs.core.async.put_BANG_.call(null,inst_45278__$1,inst_45198,done);
var state_45330__$1 = (function (){var statearr_45336 = state_45330;
(statearr_45336[(11)] = inst_45278__$1);

return statearr_45336;
})();
if(cljs.core.truth_(inst_45279)){
var statearr_45337_45422 = state_45330__$1;
(statearr_45337_45422[(1)] = (30));

} else {
var statearr_45338_45423 = state_45330__$1;
(statearr_45338_45423[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (1))){
var state_45330__$1 = state_45330;
var statearr_45339_45424 = state_45330__$1;
(statearr_45339_45424[(2)] = null);

(statearr_45339_45424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (24))){
var inst_45229 = (state_45330[(7)]);
var inst_45248 = (state_45330[(2)]);
var inst_45249 = cljs.core.next.call(null,inst_45229);
var inst_45207 = inst_45249;
var inst_45208 = null;
var inst_45209 = (0);
var inst_45210 = (0);
var state_45330__$1 = (function (){var statearr_45340 = state_45330;
(statearr_45340[(13)] = inst_45207);

(statearr_45340[(14)] = inst_45209);

(statearr_45340[(15)] = inst_45210);

(statearr_45340[(16)] = inst_45208);

(statearr_45340[(17)] = inst_45248);

return statearr_45340;
})();
var statearr_45341_45425 = state_45330__$1;
(statearr_45341_45425[(2)] = null);

(statearr_45341_45425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (39))){
var state_45330__$1 = state_45330;
var statearr_45345_45426 = state_45330__$1;
(statearr_45345_45426[(2)] = null);

(statearr_45345_45426[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (4))){
var inst_45198 = (state_45330[(9)]);
var inst_45198__$1 = (state_45330[(2)]);
var inst_45199 = (inst_45198__$1 == null);
var state_45330__$1 = (function (){var statearr_45346 = state_45330;
(statearr_45346[(9)] = inst_45198__$1);

return statearr_45346;
})();
if(cljs.core.truth_(inst_45199)){
var statearr_45347_45427 = state_45330__$1;
(statearr_45347_45427[(1)] = (5));

} else {
var statearr_45348_45428 = state_45330__$1;
(statearr_45348_45428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (15))){
var inst_45207 = (state_45330[(13)]);
var inst_45209 = (state_45330[(14)]);
var inst_45210 = (state_45330[(15)]);
var inst_45208 = (state_45330[(16)]);
var inst_45225 = (state_45330[(2)]);
var inst_45226 = (inst_45210 + (1));
var tmp45342 = inst_45207;
var tmp45343 = inst_45209;
var tmp45344 = inst_45208;
var inst_45207__$1 = tmp45342;
var inst_45208__$1 = tmp45344;
var inst_45209__$1 = tmp45343;
var inst_45210__$1 = inst_45226;
var state_45330__$1 = (function (){var statearr_45349 = state_45330;
(statearr_45349[(13)] = inst_45207__$1);

(statearr_45349[(14)] = inst_45209__$1);

(statearr_45349[(18)] = inst_45225);

(statearr_45349[(15)] = inst_45210__$1);

(statearr_45349[(16)] = inst_45208__$1);

return statearr_45349;
})();
var statearr_45350_45429 = state_45330__$1;
(statearr_45350_45429[(2)] = null);

(statearr_45350_45429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (21))){
var inst_45252 = (state_45330[(2)]);
var state_45330__$1 = state_45330;
var statearr_45354_45430 = state_45330__$1;
(statearr_45354_45430[(2)] = inst_45252);

(statearr_45354_45430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (31))){
var inst_45278 = (state_45330[(11)]);
var inst_45282 = done.call(null,null);
var inst_45283 = cljs.core.async.untap_STAR_.call(null,m,inst_45278);
var state_45330__$1 = (function (){var statearr_45355 = state_45330;
(statearr_45355[(19)] = inst_45282);

return statearr_45355;
})();
var statearr_45356_45431 = state_45330__$1;
(statearr_45356_45431[(2)] = inst_45283);

(statearr_45356_45431[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (32))){
var inst_45271 = (state_45330[(10)]);
var inst_45270 = (state_45330[(20)]);
var inst_45273 = (state_45330[(12)]);
var inst_45272 = (state_45330[(21)]);
var inst_45285 = (state_45330[(2)]);
var inst_45286 = (inst_45273 + (1));
var tmp45351 = inst_45271;
var tmp45352 = inst_45270;
var tmp45353 = inst_45272;
var inst_45270__$1 = tmp45352;
var inst_45271__$1 = tmp45351;
var inst_45272__$1 = tmp45353;
var inst_45273__$1 = inst_45286;
var state_45330__$1 = (function (){var statearr_45357 = state_45330;
(statearr_45357[(10)] = inst_45271__$1);

(statearr_45357[(20)] = inst_45270__$1);

(statearr_45357[(22)] = inst_45285);

(statearr_45357[(12)] = inst_45273__$1);

(statearr_45357[(21)] = inst_45272__$1);

return statearr_45357;
})();
var statearr_45358_45432 = state_45330__$1;
(statearr_45358_45432[(2)] = null);

(statearr_45358_45432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (40))){
var inst_45298 = (state_45330[(23)]);
var inst_45302 = done.call(null,null);
var inst_45303 = cljs.core.async.untap_STAR_.call(null,m,inst_45298);
var state_45330__$1 = (function (){var statearr_45359 = state_45330;
(statearr_45359[(24)] = inst_45302);

return statearr_45359;
})();
var statearr_45360_45433 = state_45330__$1;
(statearr_45360_45433[(2)] = inst_45303);

(statearr_45360_45433[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (33))){
var inst_45289 = (state_45330[(25)]);
var inst_45291 = cljs.core.chunked_seq_QMARK_.call(null,inst_45289);
var state_45330__$1 = state_45330;
if(inst_45291){
var statearr_45361_45434 = state_45330__$1;
(statearr_45361_45434[(1)] = (36));

} else {
var statearr_45362_45435 = state_45330__$1;
(statearr_45362_45435[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (13))){
var inst_45219 = (state_45330[(26)]);
var inst_45222 = cljs.core.async.close_BANG_.call(null,inst_45219);
var state_45330__$1 = state_45330;
var statearr_45363_45436 = state_45330__$1;
(statearr_45363_45436[(2)] = inst_45222);

(statearr_45363_45436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (22))){
var inst_45242 = (state_45330[(8)]);
var inst_45245 = cljs.core.async.close_BANG_.call(null,inst_45242);
var state_45330__$1 = state_45330;
var statearr_45364_45437 = state_45330__$1;
(statearr_45364_45437[(2)] = inst_45245);

(statearr_45364_45437[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (36))){
var inst_45289 = (state_45330[(25)]);
var inst_45293 = cljs.core.chunk_first.call(null,inst_45289);
var inst_45294 = cljs.core.chunk_rest.call(null,inst_45289);
var inst_45295 = cljs.core.count.call(null,inst_45293);
var inst_45270 = inst_45294;
var inst_45271 = inst_45293;
var inst_45272 = inst_45295;
var inst_45273 = (0);
var state_45330__$1 = (function (){var statearr_45365 = state_45330;
(statearr_45365[(10)] = inst_45271);

(statearr_45365[(20)] = inst_45270);

(statearr_45365[(12)] = inst_45273);

(statearr_45365[(21)] = inst_45272);

return statearr_45365;
})();
var statearr_45366_45438 = state_45330__$1;
(statearr_45366_45438[(2)] = null);

(statearr_45366_45438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (41))){
var inst_45289 = (state_45330[(25)]);
var inst_45305 = (state_45330[(2)]);
var inst_45306 = cljs.core.next.call(null,inst_45289);
var inst_45270 = inst_45306;
var inst_45271 = null;
var inst_45272 = (0);
var inst_45273 = (0);
var state_45330__$1 = (function (){var statearr_45367 = state_45330;
(statearr_45367[(10)] = inst_45271);

(statearr_45367[(20)] = inst_45270);

(statearr_45367[(12)] = inst_45273);

(statearr_45367[(27)] = inst_45305);

(statearr_45367[(21)] = inst_45272);

return statearr_45367;
})();
var statearr_45368_45439 = state_45330__$1;
(statearr_45368_45439[(2)] = null);

(statearr_45368_45439[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (43))){
var state_45330__$1 = state_45330;
var statearr_45369_45440 = state_45330__$1;
(statearr_45369_45440[(2)] = null);

(statearr_45369_45440[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (29))){
var inst_45314 = (state_45330[(2)]);
var state_45330__$1 = state_45330;
var statearr_45370_45441 = state_45330__$1;
(statearr_45370_45441[(2)] = inst_45314);

(statearr_45370_45441[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (44))){
var inst_45323 = (state_45330[(2)]);
var state_45330__$1 = (function (){var statearr_45371 = state_45330;
(statearr_45371[(28)] = inst_45323);

return statearr_45371;
})();
var statearr_45372_45442 = state_45330__$1;
(statearr_45372_45442[(2)] = null);

(statearr_45372_45442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (6))){
var inst_45262 = (state_45330[(29)]);
var inst_45261 = cljs.core.deref.call(null,cs);
var inst_45262__$1 = cljs.core.keys.call(null,inst_45261);
var inst_45263 = cljs.core.count.call(null,inst_45262__$1);
var inst_45264 = cljs.core.reset_BANG_.call(null,dctr,inst_45263);
var inst_45269 = cljs.core.seq.call(null,inst_45262__$1);
var inst_45270 = inst_45269;
var inst_45271 = null;
var inst_45272 = (0);
var inst_45273 = (0);
var state_45330__$1 = (function (){var statearr_45373 = state_45330;
(statearr_45373[(30)] = inst_45264);

(statearr_45373[(29)] = inst_45262__$1);

(statearr_45373[(10)] = inst_45271);

(statearr_45373[(20)] = inst_45270);

(statearr_45373[(12)] = inst_45273);

(statearr_45373[(21)] = inst_45272);

return statearr_45373;
})();
var statearr_45374_45443 = state_45330__$1;
(statearr_45374_45443[(2)] = null);

(statearr_45374_45443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (28))){
var inst_45270 = (state_45330[(20)]);
var inst_45289 = (state_45330[(25)]);
var inst_45289__$1 = cljs.core.seq.call(null,inst_45270);
var state_45330__$1 = (function (){var statearr_45375 = state_45330;
(statearr_45375[(25)] = inst_45289__$1);

return statearr_45375;
})();
if(inst_45289__$1){
var statearr_45376_45444 = state_45330__$1;
(statearr_45376_45444[(1)] = (33));

} else {
var statearr_45377_45445 = state_45330__$1;
(statearr_45377_45445[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (25))){
var inst_45273 = (state_45330[(12)]);
var inst_45272 = (state_45330[(21)]);
var inst_45275 = (inst_45273 < inst_45272);
var inst_45276 = inst_45275;
var state_45330__$1 = state_45330;
if(cljs.core.truth_(inst_45276)){
var statearr_45378_45446 = state_45330__$1;
(statearr_45378_45446[(1)] = (27));

} else {
var statearr_45379_45447 = state_45330__$1;
(statearr_45379_45447[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (34))){
var state_45330__$1 = state_45330;
var statearr_45380_45448 = state_45330__$1;
(statearr_45380_45448[(2)] = null);

(statearr_45380_45448[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (17))){
var state_45330__$1 = state_45330;
var statearr_45381_45449 = state_45330__$1;
(statearr_45381_45449[(2)] = null);

(statearr_45381_45449[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (3))){
var inst_45328 = (state_45330[(2)]);
var state_45330__$1 = state_45330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45330__$1,inst_45328);
} else {
if((state_val_45331 === (12))){
var inst_45257 = (state_45330[(2)]);
var state_45330__$1 = state_45330;
var statearr_45382_45450 = state_45330__$1;
(statearr_45382_45450[(2)] = inst_45257);

(statearr_45382_45450[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (2))){
var state_45330__$1 = state_45330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45330__$1,(4),ch);
} else {
if((state_val_45331 === (23))){
var state_45330__$1 = state_45330;
var statearr_45383_45451 = state_45330__$1;
(statearr_45383_45451[(2)] = null);

(statearr_45383_45451[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (35))){
var inst_45312 = (state_45330[(2)]);
var state_45330__$1 = state_45330;
var statearr_45384_45452 = state_45330__$1;
(statearr_45384_45452[(2)] = inst_45312);

(statearr_45384_45452[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (19))){
var inst_45229 = (state_45330[(7)]);
var inst_45233 = cljs.core.chunk_first.call(null,inst_45229);
var inst_45234 = cljs.core.chunk_rest.call(null,inst_45229);
var inst_45235 = cljs.core.count.call(null,inst_45233);
var inst_45207 = inst_45234;
var inst_45208 = inst_45233;
var inst_45209 = inst_45235;
var inst_45210 = (0);
var state_45330__$1 = (function (){var statearr_45385 = state_45330;
(statearr_45385[(13)] = inst_45207);

(statearr_45385[(14)] = inst_45209);

(statearr_45385[(15)] = inst_45210);

(statearr_45385[(16)] = inst_45208);

return statearr_45385;
})();
var statearr_45386_45453 = state_45330__$1;
(statearr_45386_45453[(2)] = null);

(statearr_45386_45453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (11))){
var inst_45207 = (state_45330[(13)]);
var inst_45229 = (state_45330[(7)]);
var inst_45229__$1 = cljs.core.seq.call(null,inst_45207);
var state_45330__$1 = (function (){var statearr_45387 = state_45330;
(statearr_45387[(7)] = inst_45229__$1);

return statearr_45387;
})();
if(inst_45229__$1){
var statearr_45388_45454 = state_45330__$1;
(statearr_45388_45454[(1)] = (16));

} else {
var statearr_45389_45455 = state_45330__$1;
(statearr_45389_45455[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (9))){
var inst_45259 = (state_45330[(2)]);
var state_45330__$1 = state_45330;
var statearr_45390_45456 = state_45330__$1;
(statearr_45390_45456[(2)] = inst_45259);

(statearr_45390_45456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (5))){
var inst_45205 = cljs.core.deref.call(null,cs);
var inst_45206 = cljs.core.seq.call(null,inst_45205);
var inst_45207 = inst_45206;
var inst_45208 = null;
var inst_45209 = (0);
var inst_45210 = (0);
var state_45330__$1 = (function (){var statearr_45391 = state_45330;
(statearr_45391[(13)] = inst_45207);

(statearr_45391[(14)] = inst_45209);

(statearr_45391[(15)] = inst_45210);

(statearr_45391[(16)] = inst_45208);

return statearr_45391;
})();
var statearr_45392_45457 = state_45330__$1;
(statearr_45392_45457[(2)] = null);

(statearr_45392_45457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (14))){
var state_45330__$1 = state_45330;
var statearr_45393_45458 = state_45330__$1;
(statearr_45393_45458[(2)] = null);

(statearr_45393_45458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (45))){
var inst_45320 = (state_45330[(2)]);
var state_45330__$1 = state_45330;
var statearr_45394_45459 = state_45330__$1;
(statearr_45394_45459[(2)] = inst_45320);

(statearr_45394_45459[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (26))){
var inst_45262 = (state_45330[(29)]);
var inst_45316 = (state_45330[(2)]);
var inst_45317 = cljs.core.seq.call(null,inst_45262);
var state_45330__$1 = (function (){var statearr_45395 = state_45330;
(statearr_45395[(31)] = inst_45316);

return statearr_45395;
})();
if(inst_45317){
var statearr_45396_45460 = state_45330__$1;
(statearr_45396_45460[(1)] = (42));

} else {
var statearr_45397_45461 = state_45330__$1;
(statearr_45397_45461[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (16))){
var inst_45229 = (state_45330[(7)]);
var inst_45231 = cljs.core.chunked_seq_QMARK_.call(null,inst_45229);
var state_45330__$1 = state_45330;
if(inst_45231){
var statearr_45398_45462 = state_45330__$1;
(statearr_45398_45462[(1)] = (19));

} else {
var statearr_45399_45463 = state_45330__$1;
(statearr_45399_45463[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (38))){
var inst_45309 = (state_45330[(2)]);
var state_45330__$1 = state_45330;
var statearr_45400_45464 = state_45330__$1;
(statearr_45400_45464[(2)] = inst_45309);

(statearr_45400_45464[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (30))){
var state_45330__$1 = state_45330;
var statearr_45401_45465 = state_45330__$1;
(statearr_45401_45465[(2)] = null);

(statearr_45401_45465[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (10))){
var inst_45210 = (state_45330[(15)]);
var inst_45208 = (state_45330[(16)]);
var inst_45218 = cljs.core._nth.call(null,inst_45208,inst_45210);
var inst_45219 = cljs.core.nth.call(null,inst_45218,(0),null);
var inst_45220 = cljs.core.nth.call(null,inst_45218,(1),null);
var state_45330__$1 = (function (){var statearr_45402 = state_45330;
(statearr_45402[(26)] = inst_45219);

return statearr_45402;
})();
if(cljs.core.truth_(inst_45220)){
var statearr_45403_45466 = state_45330__$1;
(statearr_45403_45466[(1)] = (13));

} else {
var statearr_45404_45467 = state_45330__$1;
(statearr_45404_45467[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (18))){
var inst_45255 = (state_45330[(2)]);
var state_45330__$1 = state_45330;
var statearr_45405_45468 = state_45330__$1;
(statearr_45405_45468[(2)] = inst_45255);

(statearr_45405_45468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (42))){
var state_45330__$1 = state_45330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45330__$1,(45),dchan);
} else {
if((state_val_45331 === (37))){
var inst_45198 = (state_45330[(9)]);
var inst_45298 = (state_45330[(23)]);
var inst_45289 = (state_45330[(25)]);
var inst_45298__$1 = cljs.core.first.call(null,inst_45289);
var inst_45299 = cljs.core.async.put_BANG_.call(null,inst_45298__$1,inst_45198,done);
var state_45330__$1 = (function (){var statearr_45406 = state_45330;
(statearr_45406[(23)] = inst_45298__$1);

return statearr_45406;
})();
if(cljs.core.truth_(inst_45299)){
var statearr_45407_45469 = state_45330__$1;
(statearr_45407_45469[(1)] = (39));

} else {
var statearr_45408_45470 = state_45330__$1;
(statearr_45408_45470[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45331 === (8))){
var inst_45209 = (state_45330[(14)]);
var inst_45210 = (state_45330[(15)]);
var inst_45212 = (inst_45210 < inst_45209);
var inst_45213 = inst_45212;
var state_45330__$1 = state_45330;
if(cljs.core.truth_(inst_45213)){
var statearr_45409_45471 = state_45330__$1;
(statearr_45409_45471[(1)] = (10));

} else {
var statearr_45410_45472 = state_45330__$1;
(statearr_45410_45472[(1)] = (11));

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
});})(c__28051__auto___45418,cs,m,dchan,dctr,done))
;
return ((function (switch__28030__auto__,c__28051__auto___45418,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28031__auto__ = null;
var cljs$core$async$mult_$_state_machine__28031__auto____0 = (function (){
var statearr_45414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45414[(0)] = cljs$core$async$mult_$_state_machine__28031__auto__);

(statearr_45414[(1)] = (1));

return statearr_45414;
});
var cljs$core$async$mult_$_state_machine__28031__auto____1 = (function (state_45330){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_45330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e45415){if((e45415 instanceof Object)){
var ex__28034__auto__ = e45415;
var statearr_45416_45473 = state_45330;
(statearr_45416_45473[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45474 = state_45330;
state_45330 = G__45474;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28031__auto__ = function(state_45330){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28031__auto____1.call(this,state_45330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28031__auto____0;
cljs$core$async$mult_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28031__auto____1;
return cljs$core$async$mult_$_state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto___45418,cs,m,dchan,dctr,done))
})();
var state__28053__auto__ = (function (){var statearr_45417 = f__28052__auto__.call(null);
(statearr_45417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___45418);

return statearr_45417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto___45418,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args45475 = [];
var len__27014__auto___45478 = arguments.length;
var i__27015__auto___45479 = (0);
while(true){
if((i__27015__auto___45479 < len__27014__auto___45478)){
args45475.push((arguments[i__27015__auto___45479]));

var G__45480 = (i__27015__auto___45479 + (1));
i__27015__auto___45479 = G__45480;
continue;
} else {
}
break;
}

var G__45477 = args45475.length;
switch (G__45477) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45475.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26602__auto__ = (((m == null))?null:m);
var m__26603__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26602__auto__)]);
if(!((m__26603__auto__ == null))){
return m__26603__auto__.call(null,m,ch);
} else {
var m__26603__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26603__auto____$1 == null))){
return m__26603__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26602__auto__ = (((m == null))?null:m);
var m__26603__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26602__auto__)]);
if(!((m__26603__auto__ == null))){
return m__26603__auto__.call(null,m,ch);
} else {
var m__26603__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26603__auto____$1 == null))){
return m__26603__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26602__auto__ = (((m == null))?null:m);
var m__26603__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26602__auto__)]);
if(!((m__26603__auto__ == null))){
return m__26603__auto__.call(null,m);
} else {
var m__26603__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26603__auto____$1 == null))){
return m__26603__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26602__auto__ = (((m == null))?null:m);
var m__26603__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26602__auto__)]);
if(!((m__26603__auto__ == null))){
return m__26603__auto__.call(null,m,state_map);
} else {
var m__26603__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26603__auto____$1 == null))){
return m__26603__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26602__auto__ = (((m == null))?null:m);
var m__26603__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26602__auto__)]);
if(!((m__26603__auto__ == null))){
return m__26603__auto__.call(null,m,mode);
} else {
var m__26603__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26603__auto____$1 == null))){
return m__26603__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27021__auto__ = [];
var len__27014__auto___45492 = arguments.length;
var i__27015__auto___45493 = (0);
while(true){
if((i__27015__auto___45493 < len__27014__auto___45492)){
args__27021__auto__.push((arguments[i__27015__auto___45493]));

var G__45494 = (i__27015__auto___45493 + (1));
i__27015__auto___45493 = G__45494;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((3) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27022__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45486){
var map__45487 = p__45486;
var map__45487__$1 = ((((!((map__45487 == null)))?((((map__45487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45487):map__45487);
var opts = map__45487__$1;
var statearr_45489_45495 = state;
(statearr_45489_45495[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__45487,map__45487__$1,opts){
return (function (val){
var statearr_45490_45496 = state;
(statearr_45490_45496[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45487,map__45487__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_45491_45497 = state;
(statearr_45491_45497[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45482){
var G__45483 = cljs.core.first.call(null,seq45482);
var seq45482__$1 = cljs.core.next.call(null,seq45482);
var G__45484 = cljs.core.first.call(null,seq45482__$1);
var seq45482__$2 = cljs.core.next.call(null,seq45482__$1);
var G__45485 = cljs.core.first.call(null,seq45482__$2);
var seq45482__$3 = cljs.core.next.call(null,seq45482__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45483,G__45484,G__45485,seq45482__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async45663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45663 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45664){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45664 = meta45664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45665,meta45664__$1){
var self__ = this;
var _45665__$1 = this;
return (new cljs.core.async.t_cljs$core$async45663(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45664__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45665){
var self__ = this;
var _45665__$1 = this;
return self__.meta45664;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45663.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async45663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45663.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async45663.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45663.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45663.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45663.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45663.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45663.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45664","meta45664",-823349645,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45663";

cljs.core.async.t_cljs$core$async45663.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async45663");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async45663 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async45663(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45664){
return (new cljs.core.async.t_cljs$core$async45663(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45664));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async45663(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28051__auto___45828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto___45828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto___45828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_45765){
var state_val_45766 = (state_45765[(1)]);
if((state_val_45766 === (7))){
var inst_45681 = (state_45765[(2)]);
var state_45765__$1 = state_45765;
var statearr_45767_45829 = state_45765__$1;
(statearr_45767_45829[(2)] = inst_45681);

(statearr_45767_45829[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (20))){
var inst_45693 = (state_45765[(7)]);
var state_45765__$1 = state_45765;
var statearr_45768_45830 = state_45765__$1;
(statearr_45768_45830[(2)] = inst_45693);

(statearr_45768_45830[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (27))){
var state_45765__$1 = state_45765;
var statearr_45769_45831 = state_45765__$1;
(statearr_45769_45831[(2)] = null);

(statearr_45769_45831[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (1))){
var inst_45669 = (state_45765[(8)]);
var inst_45669__$1 = calc_state.call(null);
var inst_45671 = (inst_45669__$1 == null);
var inst_45672 = cljs.core.not.call(null,inst_45671);
var state_45765__$1 = (function (){var statearr_45770 = state_45765;
(statearr_45770[(8)] = inst_45669__$1);

return statearr_45770;
})();
if(inst_45672){
var statearr_45771_45832 = state_45765__$1;
(statearr_45771_45832[(1)] = (2));

} else {
var statearr_45772_45833 = state_45765__$1;
(statearr_45772_45833[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (24))){
var inst_45725 = (state_45765[(9)]);
var inst_45739 = (state_45765[(10)]);
var inst_45716 = (state_45765[(11)]);
var inst_45739__$1 = inst_45716.call(null,inst_45725);
var state_45765__$1 = (function (){var statearr_45773 = state_45765;
(statearr_45773[(10)] = inst_45739__$1);

return statearr_45773;
})();
if(cljs.core.truth_(inst_45739__$1)){
var statearr_45774_45834 = state_45765__$1;
(statearr_45774_45834[(1)] = (29));

} else {
var statearr_45775_45835 = state_45765__$1;
(statearr_45775_45835[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (4))){
var inst_45684 = (state_45765[(2)]);
var state_45765__$1 = state_45765;
if(cljs.core.truth_(inst_45684)){
var statearr_45776_45836 = state_45765__$1;
(statearr_45776_45836[(1)] = (8));

} else {
var statearr_45777_45837 = state_45765__$1;
(statearr_45777_45837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (15))){
var inst_45710 = (state_45765[(2)]);
var state_45765__$1 = state_45765;
if(cljs.core.truth_(inst_45710)){
var statearr_45778_45838 = state_45765__$1;
(statearr_45778_45838[(1)] = (19));

} else {
var statearr_45779_45839 = state_45765__$1;
(statearr_45779_45839[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (21))){
var inst_45715 = (state_45765[(12)]);
var inst_45715__$1 = (state_45765[(2)]);
var inst_45716 = cljs.core.get.call(null,inst_45715__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45717 = cljs.core.get.call(null,inst_45715__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45718 = cljs.core.get.call(null,inst_45715__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45765__$1 = (function (){var statearr_45780 = state_45765;
(statearr_45780[(11)] = inst_45716);

(statearr_45780[(12)] = inst_45715__$1);

(statearr_45780[(13)] = inst_45717);

return statearr_45780;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_45765__$1,(22),inst_45718);
} else {
if((state_val_45766 === (31))){
var inst_45747 = (state_45765[(2)]);
var state_45765__$1 = state_45765;
if(cljs.core.truth_(inst_45747)){
var statearr_45781_45840 = state_45765__$1;
(statearr_45781_45840[(1)] = (32));

} else {
var statearr_45782_45841 = state_45765__$1;
(statearr_45782_45841[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (32))){
var inst_45724 = (state_45765[(14)]);
var state_45765__$1 = state_45765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45765__$1,(35),out,inst_45724);
} else {
if((state_val_45766 === (33))){
var inst_45715 = (state_45765[(12)]);
var inst_45693 = inst_45715;
var state_45765__$1 = (function (){var statearr_45783 = state_45765;
(statearr_45783[(7)] = inst_45693);

return statearr_45783;
})();
var statearr_45784_45842 = state_45765__$1;
(statearr_45784_45842[(2)] = null);

(statearr_45784_45842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (13))){
var inst_45693 = (state_45765[(7)]);
var inst_45700 = inst_45693.cljs$lang$protocol_mask$partition0$;
var inst_45701 = (inst_45700 & (64));
var inst_45702 = inst_45693.cljs$core$ISeq$;
var inst_45703 = (inst_45701) || (inst_45702);
var state_45765__$1 = state_45765;
if(cljs.core.truth_(inst_45703)){
var statearr_45785_45843 = state_45765__$1;
(statearr_45785_45843[(1)] = (16));

} else {
var statearr_45786_45844 = state_45765__$1;
(statearr_45786_45844[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (22))){
var inst_45725 = (state_45765[(9)]);
var inst_45724 = (state_45765[(14)]);
var inst_45723 = (state_45765[(2)]);
var inst_45724__$1 = cljs.core.nth.call(null,inst_45723,(0),null);
var inst_45725__$1 = cljs.core.nth.call(null,inst_45723,(1),null);
var inst_45726 = (inst_45724__$1 == null);
var inst_45727 = cljs.core._EQ_.call(null,inst_45725__$1,change);
var inst_45728 = (inst_45726) || (inst_45727);
var state_45765__$1 = (function (){var statearr_45787 = state_45765;
(statearr_45787[(9)] = inst_45725__$1);

(statearr_45787[(14)] = inst_45724__$1);

return statearr_45787;
})();
if(cljs.core.truth_(inst_45728)){
var statearr_45788_45845 = state_45765__$1;
(statearr_45788_45845[(1)] = (23));

} else {
var statearr_45789_45846 = state_45765__$1;
(statearr_45789_45846[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (36))){
var inst_45715 = (state_45765[(12)]);
var inst_45693 = inst_45715;
var state_45765__$1 = (function (){var statearr_45790 = state_45765;
(statearr_45790[(7)] = inst_45693);

return statearr_45790;
})();
var statearr_45791_45847 = state_45765__$1;
(statearr_45791_45847[(2)] = null);

(statearr_45791_45847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (29))){
var inst_45739 = (state_45765[(10)]);
var state_45765__$1 = state_45765;
var statearr_45792_45848 = state_45765__$1;
(statearr_45792_45848[(2)] = inst_45739);

(statearr_45792_45848[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (6))){
var state_45765__$1 = state_45765;
var statearr_45793_45849 = state_45765__$1;
(statearr_45793_45849[(2)] = false);

(statearr_45793_45849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (28))){
var inst_45735 = (state_45765[(2)]);
var inst_45736 = calc_state.call(null);
var inst_45693 = inst_45736;
var state_45765__$1 = (function (){var statearr_45794 = state_45765;
(statearr_45794[(7)] = inst_45693);

(statearr_45794[(15)] = inst_45735);

return statearr_45794;
})();
var statearr_45795_45850 = state_45765__$1;
(statearr_45795_45850[(2)] = null);

(statearr_45795_45850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (25))){
var inst_45761 = (state_45765[(2)]);
var state_45765__$1 = state_45765;
var statearr_45796_45851 = state_45765__$1;
(statearr_45796_45851[(2)] = inst_45761);

(statearr_45796_45851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (34))){
var inst_45759 = (state_45765[(2)]);
var state_45765__$1 = state_45765;
var statearr_45797_45852 = state_45765__$1;
(statearr_45797_45852[(2)] = inst_45759);

(statearr_45797_45852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (17))){
var state_45765__$1 = state_45765;
var statearr_45798_45853 = state_45765__$1;
(statearr_45798_45853[(2)] = false);

(statearr_45798_45853[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (3))){
var state_45765__$1 = state_45765;
var statearr_45799_45854 = state_45765__$1;
(statearr_45799_45854[(2)] = false);

(statearr_45799_45854[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (12))){
var inst_45763 = (state_45765[(2)]);
var state_45765__$1 = state_45765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45765__$1,inst_45763);
} else {
if((state_val_45766 === (2))){
var inst_45669 = (state_45765[(8)]);
var inst_45674 = inst_45669.cljs$lang$protocol_mask$partition0$;
var inst_45675 = (inst_45674 & (64));
var inst_45676 = inst_45669.cljs$core$ISeq$;
var inst_45677 = (inst_45675) || (inst_45676);
var state_45765__$1 = state_45765;
if(cljs.core.truth_(inst_45677)){
var statearr_45800_45855 = state_45765__$1;
(statearr_45800_45855[(1)] = (5));

} else {
var statearr_45801_45856 = state_45765__$1;
(statearr_45801_45856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (23))){
var inst_45724 = (state_45765[(14)]);
var inst_45730 = (inst_45724 == null);
var state_45765__$1 = state_45765;
if(cljs.core.truth_(inst_45730)){
var statearr_45802_45857 = state_45765__$1;
(statearr_45802_45857[(1)] = (26));

} else {
var statearr_45803_45858 = state_45765__$1;
(statearr_45803_45858[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (35))){
var inst_45750 = (state_45765[(2)]);
var state_45765__$1 = state_45765;
if(cljs.core.truth_(inst_45750)){
var statearr_45804_45859 = state_45765__$1;
(statearr_45804_45859[(1)] = (36));

} else {
var statearr_45805_45860 = state_45765__$1;
(statearr_45805_45860[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (19))){
var inst_45693 = (state_45765[(7)]);
var inst_45712 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45693);
var state_45765__$1 = state_45765;
var statearr_45806_45861 = state_45765__$1;
(statearr_45806_45861[(2)] = inst_45712);

(statearr_45806_45861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (11))){
var inst_45693 = (state_45765[(7)]);
var inst_45697 = (inst_45693 == null);
var inst_45698 = cljs.core.not.call(null,inst_45697);
var state_45765__$1 = state_45765;
if(inst_45698){
var statearr_45807_45862 = state_45765__$1;
(statearr_45807_45862[(1)] = (13));

} else {
var statearr_45808_45863 = state_45765__$1;
(statearr_45808_45863[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (9))){
var inst_45669 = (state_45765[(8)]);
var state_45765__$1 = state_45765;
var statearr_45809_45864 = state_45765__$1;
(statearr_45809_45864[(2)] = inst_45669);

(statearr_45809_45864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (5))){
var state_45765__$1 = state_45765;
var statearr_45810_45865 = state_45765__$1;
(statearr_45810_45865[(2)] = true);

(statearr_45810_45865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (14))){
var state_45765__$1 = state_45765;
var statearr_45811_45866 = state_45765__$1;
(statearr_45811_45866[(2)] = false);

(statearr_45811_45866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (26))){
var inst_45725 = (state_45765[(9)]);
var inst_45732 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_45725);
var state_45765__$1 = state_45765;
var statearr_45812_45867 = state_45765__$1;
(statearr_45812_45867[(2)] = inst_45732);

(statearr_45812_45867[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (16))){
var state_45765__$1 = state_45765;
var statearr_45813_45868 = state_45765__$1;
(statearr_45813_45868[(2)] = true);

(statearr_45813_45868[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (38))){
var inst_45755 = (state_45765[(2)]);
var state_45765__$1 = state_45765;
var statearr_45814_45869 = state_45765__$1;
(statearr_45814_45869[(2)] = inst_45755);

(statearr_45814_45869[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (30))){
var inst_45725 = (state_45765[(9)]);
var inst_45716 = (state_45765[(11)]);
var inst_45717 = (state_45765[(13)]);
var inst_45742 = cljs.core.empty_QMARK_.call(null,inst_45716);
var inst_45743 = inst_45717.call(null,inst_45725);
var inst_45744 = cljs.core.not.call(null,inst_45743);
var inst_45745 = (inst_45742) && (inst_45744);
var state_45765__$1 = state_45765;
var statearr_45815_45870 = state_45765__$1;
(statearr_45815_45870[(2)] = inst_45745);

(statearr_45815_45870[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (10))){
var inst_45669 = (state_45765[(8)]);
var inst_45689 = (state_45765[(2)]);
var inst_45690 = cljs.core.get.call(null,inst_45689,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45691 = cljs.core.get.call(null,inst_45689,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45692 = cljs.core.get.call(null,inst_45689,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45693 = inst_45669;
var state_45765__$1 = (function (){var statearr_45816 = state_45765;
(statearr_45816[(16)] = inst_45690);

(statearr_45816[(7)] = inst_45693);

(statearr_45816[(17)] = inst_45692);

(statearr_45816[(18)] = inst_45691);

return statearr_45816;
})();
var statearr_45817_45871 = state_45765__$1;
(statearr_45817_45871[(2)] = null);

(statearr_45817_45871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (18))){
var inst_45707 = (state_45765[(2)]);
var state_45765__$1 = state_45765;
var statearr_45818_45872 = state_45765__$1;
(statearr_45818_45872[(2)] = inst_45707);

(statearr_45818_45872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (37))){
var state_45765__$1 = state_45765;
var statearr_45819_45873 = state_45765__$1;
(statearr_45819_45873[(2)] = null);

(statearr_45819_45873[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45766 === (8))){
var inst_45669 = (state_45765[(8)]);
var inst_45686 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45669);
var state_45765__$1 = state_45765;
var statearr_45820_45874 = state_45765__$1;
(statearr_45820_45874[(2)] = inst_45686);

(statearr_45820_45874[(1)] = (10));


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
});})(c__28051__auto___45828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28030__auto__,c__28051__auto___45828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28031__auto__ = null;
var cljs$core$async$mix_$_state_machine__28031__auto____0 = (function (){
var statearr_45824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45824[(0)] = cljs$core$async$mix_$_state_machine__28031__auto__);

(statearr_45824[(1)] = (1));

return statearr_45824;
});
var cljs$core$async$mix_$_state_machine__28031__auto____1 = (function (state_45765){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_45765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e45825){if((e45825 instanceof Object)){
var ex__28034__auto__ = e45825;
var statearr_45826_45875 = state_45765;
(statearr_45826_45875[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45876 = state_45765;
state_45765 = G__45876;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28031__auto__ = function(state_45765){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28031__auto____1.call(this,state_45765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28031__auto____0;
cljs$core$async$mix_$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28031__auto____1;
return cljs$core$async$mix_$_state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto___45828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28053__auto__ = (function (){var statearr_45827 = f__28052__auto__.call(null);
(statearr_45827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___45828);

return statearr_45827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto___45828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26602__auto__ = (((p == null))?null:p);
var m__26603__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26602__auto__)]);
if(!((m__26603__auto__ == null))){
return m__26603__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26603__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26603__auto____$1 == null))){
return m__26603__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26602__auto__ = (((p == null))?null:p);
var m__26603__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26602__auto__)]);
if(!((m__26603__auto__ == null))){
return m__26603__auto__.call(null,p,v,ch);
} else {
var m__26603__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26603__auto____$1 == null))){
return m__26603__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args45877 = [];
var len__27014__auto___45880 = arguments.length;
var i__27015__auto___45881 = (0);
while(true){
if((i__27015__auto___45881 < len__27014__auto___45880)){
args45877.push((arguments[i__27015__auto___45881]));

var G__45882 = (i__27015__auto___45881 + (1));
i__27015__auto___45881 = G__45882;
continue;
} else {
}
break;
}

var G__45879 = args45877.length;
switch (G__45879) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45877.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26602__auto__ = (((p == null))?null:p);
var m__26603__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26602__auto__)]);
if(!((m__26603__auto__ == null))){
return m__26603__auto__.call(null,p);
} else {
var m__26603__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26603__auto____$1 == null))){
return m__26603__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26602__auto__ = (((p == null))?null:p);
var m__26603__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26602__auto__)]);
if(!((m__26603__auto__ == null))){
return m__26603__auto__.call(null,p,v);
} else {
var m__26603__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26603__auto____$1 == null))){
return m__26603__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args45885 = [];
var len__27014__auto___46010 = arguments.length;
var i__27015__auto___46011 = (0);
while(true){
if((i__27015__auto___46011 < len__27014__auto___46010)){
args45885.push((arguments[i__27015__auto___46011]));

var G__46012 = (i__27015__auto___46011 + (1));
i__27015__auto___46011 = G__46012;
continue;
} else {
}
break;
}

var G__45887 = args45885.length;
switch (G__45887) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45885.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25939__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25939__auto__)){
return or__25939__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25939__auto__,mults){
return (function (p1__45884_SHARP_){
if(cljs.core.truth_(p1__45884_SHARP_.call(null,topic))){
return p1__45884_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__45884_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25939__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async45888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45888 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45889){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45889 = meta45889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45890,meta45889__$1){
var self__ = this;
var _45890__$1 = this;
return (new cljs.core.async.t_cljs$core$async45888(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45889__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45890){
var self__ = this;
var _45890__$1 = this;
return self__.meta45889;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45888.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async45888.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45888.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async45888.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45888.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45888.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45888.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45888.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45889","meta45889",-2120635854,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45888";

cljs.core.async.t_cljs$core$async45888.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async45888");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async45888 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async45888(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45889){
return (new cljs.core.async.t_cljs$core$async45888(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45889));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async45888(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28051__auto___46014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto___46014,mults,ensure_mult,p){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto___46014,mults,ensure_mult,p){
return (function (state_45962){
var state_val_45963 = (state_45962[(1)]);
if((state_val_45963 === (7))){
var inst_45958 = (state_45962[(2)]);
var state_45962__$1 = state_45962;
var statearr_45964_46015 = state_45962__$1;
(statearr_45964_46015[(2)] = inst_45958);

(statearr_45964_46015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (20))){
var state_45962__$1 = state_45962;
var statearr_45965_46016 = state_45962__$1;
(statearr_45965_46016[(2)] = null);

(statearr_45965_46016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (1))){
var state_45962__$1 = state_45962;
var statearr_45966_46017 = state_45962__$1;
(statearr_45966_46017[(2)] = null);

(statearr_45966_46017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (24))){
var inst_45941 = (state_45962[(7)]);
var inst_45950 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_45941);
var state_45962__$1 = state_45962;
var statearr_45967_46018 = state_45962__$1;
(statearr_45967_46018[(2)] = inst_45950);

(statearr_45967_46018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (4))){
var inst_45893 = (state_45962[(8)]);
var inst_45893__$1 = (state_45962[(2)]);
var inst_45894 = (inst_45893__$1 == null);
var state_45962__$1 = (function (){var statearr_45968 = state_45962;
(statearr_45968[(8)] = inst_45893__$1);

return statearr_45968;
})();
if(cljs.core.truth_(inst_45894)){
var statearr_45969_46019 = state_45962__$1;
(statearr_45969_46019[(1)] = (5));

} else {
var statearr_45970_46020 = state_45962__$1;
(statearr_45970_46020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (15))){
var inst_45935 = (state_45962[(2)]);
var state_45962__$1 = state_45962;
var statearr_45971_46021 = state_45962__$1;
(statearr_45971_46021[(2)] = inst_45935);

(statearr_45971_46021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (21))){
var inst_45955 = (state_45962[(2)]);
var state_45962__$1 = (function (){var statearr_45972 = state_45962;
(statearr_45972[(9)] = inst_45955);

return statearr_45972;
})();
var statearr_45973_46022 = state_45962__$1;
(statearr_45973_46022[(2)] = null);

(statearr_45973_46022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (13))){
var inst_45917 = (state_45962[(10)]);
var inst_45919 = cljs.core.chunked_seq_QMARK_.call(null,inst_45917);
var state_45962__$1 = state_45962;
if(inst_45919){
var statearr_45974_46023 = state_45962__$1;
(statearr_45974_46023[(1)] = (16));

} else {
var statearr_45975_46024 = state_45962__$1;
(statearr_45975_46024[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (22))){
var inst_45947 = (state_45962[(2)]);
var state_45962__$1 = state_45962;
if(cljs.core.truth_(inst_45947)){
var statearr_45976_46025 = state_45962__$1;
(statearr_45976_46025[(1)] = (23));

} else {
var statearr_45977_46026 = state_45962__$1;
(statearr_45977_46026[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (6))){
var inst_45941 = (state_45962[(7)]);
var inst_45893 = (state_45962[(8)]);
var inst_45943 = (state_45962[(11)]);
var inst_45941__$1 = topic_fn.call(null,inst_45893);
var inst_45942 = cljs.core.deref.call(null,mults);
var inst_45943__$1 = cljs.core.get.call(null,inst_45942,inst_45941__$1);
var state_45962__$1 = (function (){var statearr_45978 = state_45962;
(statearr_45978[(7)] = inst_45941__$1);

(statearr_45978[(11)] = inst_45943__$1);

return statearr_45978;
})();
if(cljs.core.truth_(inst_45943__$1)){
var statearr_45979_46027 = state_45962__$1;
(statearr_45979_46027[(1)] = (19));

} else {
var statearr_45980_46028 = state_45962__$1;
(statearr_45980_46028[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (25))){
var inst_45952 = (state_45962[(2)]);
var state_45962__$1 = state_45962;
var statearr_45981_46029 = state_45962__$1;
(statearr_45981_46029[(2)] = inst_45952);

(statearr_45981_46029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (17))){
var inst_45917 = (state_45962[(10)]);
var inst_45926 = cljs.core.first.call(null,inst_45917);
var inst_45927 = cljs.core.async.muxch_STAR_.call(null,inst_45926);
var inst_45928 = cljs.core.async.close_BANG_.call(null,inst_45927);
var inst_45929 = cljs.core.next.call(null,inst_45917);
var inst_45903 = inst_45929;
var inst_45904 = null;
var inst_45905 = (0);
var inst_45906 = (0);
var state_45962__$1 = (function (){var statearr_45982 = state_45962;
(statearr_45982[(12)] = inst_45906);

(statearr_45982[(13)] = inst_45904);

(statearr_45982[(14)] = inst_45905);

(statearr_45982[(15)] = inst_45903);

(statearr_45982[(16)] = inst_45928);

return statearr_45982;
})();
var statearr_45983_46030 = state_45962__$1;
(statearr_45983_46030[(2)] = null);

(statearr_45983_46030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (3))){
var inst_45960 = (state_45962[(2)]);
var state_45962__$1 = state_45962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45962__$1,inst_45960);
} else {
if((state_val_45963 === (12))){
var inst_45937 = (state_45962[(2)]);
var state_45962__$1 = state_45962;
var statearr_45984_46031 = state_45962__$1;
(statearr_45984_46031[(2)] = inst_45937);

(statearr_45984_46031[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (2))){
var state_45962__$1 = state_45962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45962__$1,(4),ch);
} else {
if((state_val_45963 === (23))){
var state_45962__$1 = state_45962;
var statearr_45985_46032 = state_45962__$1;
(statearr_45985_46032[(2)] = null);

(statearr_45985_46032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (19))){
var inst_45893 = (state_45962[(8)]);
var inst_45943 = (state_45962[(11)]);
var inst_45945 = cljs.core.async.muxch_STAR_.call(null,inst_45943);
var state_45962__$1 = state_45962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45962__$1,(22),inst_45945,inst_45893);
} else {
if((state_val_45963 === (11))){
var inst_45917 = (state_45962[(10)]);
var inst_45903 = (state_45962[(15)]);
var inst_45917__$1 = cljs.core.seq.call(null,inst_45903);
var state_45962__$1 = (function (){var statearr_45986 = state_45962;
(statearr_45986[(10)] = inst_45917__$1);

return statearr_45986;
})();
if(inst_45917__$1){
var statearr_45987_46033 = state_45962__$1;
(statearr_45987_46033[(1)] = (13));

} else {
var statearr_45988_46034 = state_45962__$1;
(statearr_45988_46034[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (9))){
var inst_45939 = (state_45962[(2)]);
var state_45962__$1 = state_45962;
var statearr_45989_46035 = state_45962__$1;
(statearr_45989_46035[(2)] = inst_45939);

(statearr_45989_46035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (5))){
var inst_45900 = cljs.core.deref.call(null,mults);
var inst_45901 = cljs.core.vals.call(null,inst_45900);
var inst_45902 = cljs.core.seq.call(null,inst_45901);
var inst_45903 = inst_45902;
var inst_45904 = null;
var inst_45905 = (0);
var inst_45906 = (0);
var state_45962__$1 = (function (){var statearr_45990 = state_45962;
(statearr_45990[(12)] = inst_45906);

(statearr_45990[(13)] = inst_45904);

(statearr_45990[(14)] = inst_45905);

(statearr_45990[(15)] = inst_45903);

return statearr_45990;
})();
var statearr_45991_46036 = state_45962__$1;
(statearr_45991_46036[(2)] = null);

(statearr_45991_46036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (14))){
var state_45962__$1 = state_45962;
var statearr_45995_46037 = state_45962__$1;
(statearr_45995_46037[(2)] = null);

(statearr_45995_46037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (16))){
var inst_45917 = (state_45962[(10)]);
var inst_45921 = cljs.core.chunk_first.call(null,inst_45917);
var inst_45922 = cljs.core.chunk_rest.call(null,inst_45917);
var inst_45923 = cljs.core.count.call(null,inst_45921);
var inst_45903 = inst_45922;
var inst_45904 = inst_45921;
var inst_45905 = inst_45923;
var inst_45906 = (0);
var state_45962__$1 = (function (){var statearr_45996 = state_45962;
(statearr_45996[(12)] = inst_45906);

(statearr_45996[(13)] = inst_45904);

(statearr_45996[(14)] = inst_45905);

(statearr_45996[(15)] = inst_45903);

return statearr_45996;
})();
var statearr_45997_46038 = state_45962__$1;
(statearr_45997_46038[(2)] = null);

(statearr_45997_46038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (10))){
var inst_45906 = (state_45962[(12)]);
var inst_45904 = (state_45962[(13)]);
var inst_45905 = (state_45962[(14)]);
var inst_45903 = (state_45962[(15)]);
var inst_45911 = cljs.core._nth.call(null,inst_45904,inst_45906);
var inst_45912 = cljs.core.async.muxch_STAR_.call(null,inst_45911);
var inst_45913 = cljs.core.async.close_BANG_.call(null,inst_45912);
var inst_45914 = (inst_45906 + (1));
var tmp45992 = inst_45904;
var tmp45993 = inst_45905;
var tmp45994 = inst_45903;
var inst_45903__$1 = tmp45994;
var inst_45904__$1 = tmp45992;
var inst_45905__$1 = tmp45993;
var inst_45906__$1 = inst_45914;
var state_45962__$1 = (function (){var statearr_45998 = state_45962;
(statearr_45998[(12)] = inst_45906__$1);

(statearr_45998[(17)] = inst_45913);

(statearr_45998[(13)] = inst_45904__$1);

(statearr_45998[(14)] = inst_45905__$1);

(statearr_45998[(15)] = inst_45903__$1);

return statearr_45998;
})();
var statearr_45999_46039 = state_45962__$1;
(statearr_45999_46039[(2)] = null);

(statearr_45999_46039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (18))){
var inst_45932 = (state_45962[(2)]);
var state_45962__$1 = state_45962;
var statearr_46000_46040 = state_45962__$1;
(statearr_46000_46040[(2)] = inst_45932);

(statearr_46000_46040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (8))){
var inst_45906 = (state_45962[(12)]);
var inst_45905 = (state_45962[(14)]);
var inst_45908 = (inst_45906 < inst_45905);
var inst_45909 = inst_45908;
var state_45962__$1 = state_45962;
if(cljs.core.truth_(inst_45909)){
var statearr_46001_46041 = state_45962__$1;
(statearr_46001_46041[(1)] = (10));

} else {
var statearr_46002_46042 = state_45962__$1;
(statearr_46002_46042[(1)] = (11));

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
});})(c__28051__auto___46014,mults,ensure_mult,p))
;
return ((function (switch__28030__auto__,c__28051__auto___46014,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28031__auto__ = null;
var cljs$core$async$state_machine__28031__auto____0 = (function (){
var statearr_46006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46006[(0)] = cljs$core$async$state_machine__28031__auto__);

(statearr_46006[(1)] = (1));

return statearr_46006;
});
var cljs$core$async$state_machine__28031__auto____1 = (function (state_45962){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_45962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e46007){if((e46007 instanceof Object)){
var ex__28034__auto__ = e46007;
var statearr_46008_46043 = state_45962;
(statearr_46008_46043[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46044 = state_45962;
state_45962 = G__46044;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$state_machine__28031__auto__ = function(state_45962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28031__auto____1.call(this,state_45962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28031__auto____0;
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28031__auto____1;
return cljs$core$async$state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto___46014,mults,ensure_mult,p))
})();
var state__28053__auto__ = (function (){var statearr_46009 = f__28052__auto__.call(null);
(statearr_46009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___46014);

return statearr_46009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto___46014,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args46045 = [];
var len__27014__auto___46048 = arguments.length;
var i__27015__auto___46049 = (0);
while(true){
if((i__27015__auto___46049 < len__27014__auto___46048)){
args46045.push((arguments[i__27015__auto___46049]));

var G__46050 = (i__27015__auto___46049 + (1));
i__27015__auto___46049 = G__46050;
continue;
} else {
}
break;
}

var G__46047 = args46045.length;
switch (G__46047) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46045.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args46052 = [];
var len__27014__auto___46055 = arguments.length;
var i__27015__auto___46056 = (0);
while(true){
if((i__27015__auto___46056 < len__27014__auto___46055)){
args46052.push((arguments[i__27015__auto___46056]));

var G__46057 = (i__27015__auto___46056 + (1));
i__27015__auto___46056 = G__46057;
continue;
} else {
}
break;
}

var G__46054 = args46052.length;
switch (G__46054) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46052.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args46059 = [];
var len__27014__auto___46130 = arguments.length;
var i__27015__auto___46131 = (0);
while(true){
if((i__27015__auto___46131 < len__27014__auto___46130)){
args46059.push((arguments[i__27015__auto___46131]));

var G__46132 = (i__27015__auto___46131 + (1));
i__27015__auto___46131 = G__46132;
continue;
} else {
}
break;
}

var G__46061 = args46059.length;
switch (G__46061) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46059.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28051__auto___46134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto___46134,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto___46134,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46100){
var state_val_46101 = (state_46100[(1)]);
if((state_val_46101 === (7))){
var state_46100__$1 = state_46100;
var statearr_46102_46135 = state_46100__$1;
(statearr_46102_46135[(2)] = null);

(statearr_46102_46135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46101 === (1))){
var state_46100__$1 = state_46100;
var statearr_46103_46136 = state_46100__$1;
(statearr_46103_46136[(2)] = null);

(statearr_46103_46136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46101 === (4))){
var inst_46064 = (state_46100[(7)]);
var inst_46066 = (inst_46064 < cnt);
var state_46100__$1 = state_46100;
if(cljs.core.truth_(inst_46066)){
var statearr_46104_46137 = state_46100__$1;
(statearr_46104_46137[(1)] = (6));

} else {
var statearr_46105_46138 = state_46100__$1;
(statearr_46105_46138[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46101 === (15))){
var inst_46096 = (state_46100[(2)]);
var state_46100__$1 = state_46100;
var statearr_46106_46139 = state_46100__$1;
(statearr_46106_46139[(2)] = inst_46096);

(statearr_46106_46139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46101 === (13))){
var inst_46089 = cljs.core.async.close_BANG_.call(null,out);
var state_46100__$1 = state_46100;
var statearr_46107_46140 = state_46100__$1;
(statearr_46107_46140[(2)] = inst_46089);

(statearr_46107_46140[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46101 === (6))){
var state_46100__$1 = state_46100;
var statearr_46108_46141 = state_46100__$1;
(statearr_46108_46141[(2)] = null);

(statearr_46108_46141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46101 === (3))){
var inst_46098 = (state_46100[(2)]);
var state_46100__$1 = state_46100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46100__$1,inst_46098);
} else {
if((state_val_46101 === (12))){
var inst_46086 = (state_46100[(8)]);
var inst_46086__$1 = (state_46100[(2)]);
var inst_46087 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46086__$1);
var state_46100__$1 = (function (){var statearr_46109 = state_46100;
(statearr_46109[(8)] = inst_46086__$1);

return statearr_46109;
})();
if(cljs.core.truth_(inst_46087)){
var statearr_46110_46142 = state_46100__$1;
(statearr_46110_46142[(1)] = (13));

} else {
var statearr_46111_46143 = state_46100__$1;
(statearr_46111_46143[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46101 === (2))){
var inst_46063 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46064 = (0);
var state_46100__$1 = (function (){var statearr_46112 = state_46100;
(statearr_46112[(7)] = inst_46064);

(statearr_46112[(9)] = inst_46063);

return statearr_46112;
})();
var statearr_46113_46144 = state_46100__$1;
(statearr_46113_46144[(2)] = null);

(statearr_46113_46144[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46101 === (11))){
var inst_46064 = (state_46100[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46100,(10),Object,null,(9));
var inst_46073 = chs__$1.call(null,inst_46064);
var inst_46074 = done.call(null,inst_46064);
var inst_46075 = cljs.core.async.take_BANG_.call(null,inst_46073,inst_46074);
var state_46100__$1 = state_46100;
var statearr_46114_46145 = state_46100__$1;
(statearr_46114_46145[(2)] = inst_46075);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46100__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46101 === (9))){
var inst_46064 = (state_46100[(7)]);
var inst_46077 = (state_46100[(2)]);
var inst_46078 = (inst_46064 + (1));
var inst_46064__$1 = inst_46078;
var state_46100__$1 = (function (){var statearr_46115 = state_46100;
(statearr_46115[(7)] = inst_46064__$1);

(statearr_46115[(10)] = inst_46077);

return statearr_46115;
})();
var statearr_46116_46146 = state_46100__$1;
(statearr_46116_46146[(2)] = null);

(statearr_46116_46146[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46101 === (5))){
var inst_46084 = (state_46100[(2)]);
var state_46100__$1 = (function (){var statearr_46117 = state_46100;
(statearr_46117[(11)] = inst_46084);

return statearr_46117;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46100__$1,(12),dchan);
} else {
if((state_val_46101 === (14))){
var inst_46086 = (state_46100[(8)]);
var inst_46091 = cljs.core.apply.call(null,f,inst_46086);
var state_46100__$1 = state_46100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46100__$1,(16),out,inst_46091);
} else {
if((state_val_46101 === (16))){
var inst_46093 = (state_46100[(2)]);
var state_46100__$1 = (function (){var statearr_46118 = state_46100;
(statearr_46118[(12)] = inst_46093);

return statearr_46118;
})();
var statearr_46119_46147 = state_46100__$1;
(statearr_46119_46147[(2)] = null);

(statearr_46119_46147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46101 === (10))){
var inst_46068 = (state_46100[(2)]);
var inst_46069 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46100__$1 = (function (){var statearr_46120 = state_46100;
(statearr_46120[(13)] = inst_46068);

return statearr_46120;
})();
var statearr_46121_46148 = state_46100__$1;
(statearr_46121_46148[(2)] = inst_46069);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46100__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46101 === (8))){
var inst_46082 = (state_46100[(2)]);
var state_46100__$1 = state_46100;
var statearr_46122_46149 = state_46100__$1;
(statearr_46122_46149[(2)] = inst_46082);

(statearr_46122_46149[(1)] = (5));


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
});})(c__28051__auto___46134,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28030__auto__,c__28051__auto___46134,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28031__auto__ = null;
var cljs$core$async$state_machine__28031__auto____0 = (function (){
var statearr_46126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46126[(0)] = cljs$core$async$state_machine__28031__auto__);

(statearr_46126[(1)] = (1));

return statearr_46126;
});
var cljs$core$async$state_machine__28031__auto____1 = (function (state_46100){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_46100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e46127){if((e46127 instanceof Object)){
var ex__28034__auto__ = e46127;
var statearr_46128_46150 = state_46100;
(statearr_46128_46150[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46151 = state_46100;
state_46100 = G__46151;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$state_machine__28031__auto__ = function(state_46100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28031__auto____1.call(this,state_46100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28031__auto____0;
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28031__auto____1;
return cljs$core$async$state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto___46134,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28053__auto__ = (function (){var statearr_46129 = f__28052__auto__.call(null);
(statearr_46129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___46134);

return statearr_46129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto___46134,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args46153 = [];
var len__27014__auto___46211 = arguments.length;
var i__27015__auto___46212 = (0);
while(true){
if((i__27015__auto___46212 < len__27014__auto___46211)){
args46153.push((arguments[i__27015__auto___46212]));

var G__46213 = (i__27015__auto___46212 + (1));
i__27015__auto___46212 = G__46213;
continue;
} else {
}
break;
}

var G__46155 = args46153.length;
switch (G__46155) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46153.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28051__auto___46215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto___46215,out){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto___46215,out){
return (function (state_46187){
var state_val_46188 = (state_46187[(1)]);
if((state_val_46188 === (7))){
var inst_46167 = (state_46187[(7)]);
var inst_46166 = (state_46187[(8)]);
var inst_46166__$1 = (state_46187[(2)]);
var inst_46167__$1 = cljs.core.nth.call(null,inst_46166__$1,(0),null);
var inst_46168 = cljs.core.nth.call(null,inst_46166__$1,(1),null);
var inst_46169 = (inst_46167__$1 == null);
var state_46187__$1 = (function (){var statearr_46189 = state_46187;
(statearr_46189[(9)] = inst_46168);

(statearr_46189[(7)] = inst_46167__$1);

(statearr_46189[(8)] = inst_46166__$1);

return statearr_46189;
})();
if(cljs.core.truth_(inst_46169)){
var statearr_46190_46216 = state_46187__$1;
(statearr_46190_46216[(1)] = (8));

} else {
var statearr_46191_46217 = state_46187__$1;
(statearr_46191_46217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (1))){
var inst_46156 = cljs.core.vec.call(null,chs);
var inst_46157 = inst_46156;
var state_46187__$1 = (function (){var statearr_46192 = state_46187;
(statearr_46192[(10)] = inst_46157);

return statearr_46192;
})();
var statearr_46193_46218 = state_46187__$1;
(statearr_46193_46218[(2)] = null);

(statearr_46193_46218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (4))){
var inst_46157 = (state_46187[(10)]);
var state_46187__$1 = state_46187;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46187__$1,(7),inst_46157);
} else {
if((state_val_46188 === (6))){
var inst_46183 = (state_46187[(2)]);
var state_46187__$1 = state_46187;
var statearr_46194_46219 = state_46187__$1;
(statearr_46194_46219[(2)] = inst_46183);

(statearr_46194_46219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (3))){
var inst_46185 = (state_46187[(2)]);
var state_46187__$1 = state_46187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46187__$1,inst_46185);
} else {
if((state_val_46188 === (2))){
var inst_46157 = (state_46187[(10)]);
var inst_46159 = cljs.core.count.call(null,inst_46157);
var inst_46160 = (inst_46159 > (0));
var state_46187__$1 = state_46187;
if(cljs.core.truth_(inst_46160)){
var statearr_46196_46220 = state_46187__$1;
(statearr_46196_46220[(1)] = (4));

} else {
var statearr_46197_46221 = state_46187__$1;
(statearr_46197_46221[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (11))){
var inst_46157 = (state_46187[(10)]);
var inst_46176 = (state_46187[(2)]);
var tmp46195 = inst_46157;
var inst_46157__$1 = tmp46195;
var state_46187__$1 = (function (){var statearr_46198 = state_46187;
(statearr_46198[(10)] = inst_46157__$1);

(statearr_46198[(11)] = inst_46176);

return statearr_46198;
})();
var statearr_46199_46222 = state_46187__$1;
(statearr_46199_46222[(2)] = null);

(statearr_46199_46222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (9))){
var inst_46167 = (state_46187[(7)]);
var state_46187__$1 = state_46187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46187__$1,(11),out,inst_46167);
} else {
if((state_val_46188 === (5))){
var inst_46181 = cljs.core.async.close_BANG_.call(null,out);
var state_46187__$1 = state_46187;
var statearr_46200_46223 = state_46187__$1;
(statearr_46200_46223[(2)] = inst_46181);

(statearr_46200_46223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (10))){
var inst_46179 = (state_46187[(2)]);
var state_46187__$1 = state_46187;
var statearr_46201_46224 = state_46187__$1;
(statearr_46201_46224[(2)] = inst_46179);

(statearr_46201_46224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (8))){
var inst_46168 = (state_46187[(9)]);
var inst_46157 = (state_46187[(10)]);
var inst_46167 = (state_46187[(7)]);
var inst_46166 = (state_46187[(8)]);
var inst_46171 = (function (){var cs = inst_46157;
var vec__46162 = inst_46166;
var v = inst_46167;
var c = inst_46168;
return ((function (cs,vec__46162,v,c,inst_46168,inst_46157,inst_46167,inst_46166,state_val_46188,c__28051__auto___46215,out){
return (function (p1__46152_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46152_SHARP_);
});
;})(cs,vec__46162,v,c,inst_46168,inst_46157,inst_46167,inst_46166,state_val_46188,c__28051__auto___46215,out))
})();
var inst_46172 = cljs.core.filterv.call(null,inst_46171,inst_46157);
var inst_46157__$1 = inst_46172;
var state_46187__$1 = (function (){var statearr_46202 = state_46187;
(statearr_46202[(10)] = inst_46157__$1);

return statearr_46202;
})();
var statearr_46203_46225 = state_46187__$1;
(statearr_46203_46225[(2)] = null);

(statearr_46203_46225[(1)] = (2));


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
});})(c__28051__auto___46215,out))
;
return ((function (switch__28030__auto__,c__28051__auto___46215,out){
return (function() {
var cljs$core$async$state_machine__28031__auto__ = null;
var cljs$core$async$state_machine__28031__auto____0 = (function (){
var statearr_46207 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46207[(0)] = cljs$core$async$state_machine__28031__auto__);

(statearr_46207[(1)] = (1));

return statearr_46207;
});
var cljs$core$async$state_machine__28031__auto____1 = (function (state_46187){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_46187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e46208){if((e46208 instanceof Object)){
var ex__28034__auto__ = e46208;
var statearr_46209_46226 = state_46187;
(statearr_46209_46226[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46227 = state_46187;
state_46187 = G__46227;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$state_machine__28031__auto__ = function(state_46187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28031__auto____1.call(this,state_46187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28031__auto____0;
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28031__auto____1;
return cljs$core$async$state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto___46215,out))
})();
var state__28053__auto__ = (function (){var statearr_46210 = f__28052__auto__.call(null);
(statearr_46210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___46215);

return statearr_46210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto___46215,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args46228 = [];
var len__27014__auto___46277 = arguments.length;
var i__27015__auto___46278 = (0);
while(true){
if((i__27015__auto___46278 < len__27014__auto___46277)){
args46228.push((arguments[i__27015__auto___46278]));

var G__46279 = (i__27015__auto___46278 + (1));
i__27015__auto___46278 = G__46279;
continue;
} else {
}
break;
}

var G__46230 = args46228.length;
switch (G__46230) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46228.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28051__auto___46281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto___46281,out){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto___46281,out){
return (function (state_46254){
var state_val_46255 = (state_46254[(1)]);
if((state_val_46255 === (7))){
var inst_46236 = (state_46254[(7)]);
var inst_46236__$1 = (state_46254[(2)]);
var inst_46237 = (inst_46236__$1 == null);
var inst_46238 = cljs.core.not.call(null,inst_46237);
var state_46254__$1 = (function (){var statearr_46256 = state_46254;
(statearr_46256[(7)] = inst_46236__$1);

return statearr_46256;
})();
if(inst_46238){
var statearr_46257_46282 = state_46254__$1;
(statearr_46257_46282[(1)] = (8));

} else {
var statearr_46258_46283 = state_46254__$1;
(statearr_46258_46283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46255 === (1))){
var inst_46231 = (0);
var state_46254__$1 = (function (){var statearr_46259 = state_46254;
(statearr_46259[(8)] = inst_46231);

return statearr_46259;
})();
var statearr_46260_46284 = state_46254__$1;
(statearr_46260_46284[(2)] = null);

(statearr_46260_46284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46255 === (4))){
var state_46254__$1 = state_46254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46254__$1,(7),ch);
} else {
if((state_val_46255 === (6))){
var inst_46249 = (state_46254[(2)]);
var state_46254__$1 = state_46254;
var statearr_46261_46285 = state_46254__$1;
(statearr_46261_46285[(2)] = inst_46249);

(statearr_46261_46285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46255 === (3))){
var inst_46251 = (state_46254[(2)]);
var inst_46252 = cljs.core.async.close_BANG_.call(null,out);
var state_46254__$1 = (function (){var statearr_46262 = state_46254;
(statearr_46262[(9)] = inst_46251);

return statearr_46262;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46254__$1,inst_46252);
} else {
if((state_val_46255 === (2))){
var inst_46231 = (state_46254[(8)]);
var inst_46233 = (inst_46231 < n);
var state_46254__$1 = state_46254;
if(cljs.core.truth_(inst_46233)){
var statearr_46263_46286 = state_46254__$1;
(statearr_46263_46286[(1)] = (4));

} else {
var statearr_46264_46287 = state_46254__$1;
(statearr_46264_46287[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46255 === (11))){
var inst_46231 = (state_46254[(8)]);
var inst_46241 = (state_46254[(2)]);
var inst_46242 = (inst_46231 + (1));
var inst_46231__$1 = inst_46242;
var state_46254__$1 = (function (){var statearr_46265 = state_46254;
(statearr_46265[(10)] = inst_46241);

(statearr_46265[(8)] = inst_46231__$1);

return statearr_46265;
})();
var statearr_46266_46288 = state_46254__$1;
(statearr_46266_46288[(2)] = null);

(statearr_46266_46288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46255 === (9))){
var state_46254__$1 = state_46254;
var statearr_46267_46289 = state_46254__$1;
(statearr_46267_46289[(2)] = null);

(statearr_46267_46289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46255 === (5))){
var state_46254__$1 = state_46254;
var statearr_46268_46290 = state_46254__$1;
(statearr_46268_46290[(2)] = null);

(statearr_46268_46290[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46255 === (10))){
var inst_46246 = (state_46254[(2)]);
var state_46254__$1 = state_46254;
var statearr_46269_46291 = state_46254__$1;
(statearr_46269_46291[(2)] = inst_46246);

(statearr_46269_46291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46255 === (8))){
var inst_46236 = (state_46254[(7)]);
var state_46254__$1 = state_46254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46254__$1,(11),out,inst_46236);
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
});})(c__28051__auto___46281,out))
;
return ((function (switch__28030__auto__,c__28051__auto___46281,out){
return (function() {
var cljs$core$async$state_machine__28031__auto__ = null;
var cljs$core$async$state_machine__28031__auto____0 = (function (){
var statearr_46273 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46273[(0)] = cljs$core$async$state_machine__28031__auto__);

(statearr_46273[(1)] = (1));

return statearr_46273;
});
var cljs$core$async$state_machine__28031__auto____1 = (function (state_46254){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_46254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e46274){if((e46274 instanceof Object)){
var ex__28034__auto__ = e46274;
var statearr_46275_46292 = state_46254;
(statearr_46275_46292[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46293 = state_46254;
state_46254 = G__46293;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$state_machine__28031__auto__ = function(state_46254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28031__auto____1.call(this,state_46254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28031__auto____0;
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28031__auto____1;
return cljs$core$async$state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto___46281,out))
})();
var state__28053__auto__ = (function (){var statearr_46276 = f__28052__auto__.call(null);
(statearr_46276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___46281);

return statearr_46276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto___46281,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46301 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46301 = (function (map_LT_,f,ch,meta46302){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta46302 = meta46302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46303,meta46302__$1){
var self__ = this;
var _46303__$1 = this;
return (new cljs.core.async.t_cljs$core$async46301(self__.map_LT_,self__.f,self__.ch,meta46302__$1));
});

cljs.core.async.t_cljs$core$async46301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46303){
var self__ = this;
var _46303__$1 = this;
return self__.meta46302;
});

cljs.core.async.t_cljs$core$async46301.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46301.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46301.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46301.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46301.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async46304 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46304 = (function (map_LT_,f,ch,meta46302,_,fn1,meta46305){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta46302 = meta46302;
this._ = _;
this.fn1 = fn1;
this.meta46305 = meta46305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46306,meta46305__$1){
var self__ = this;
var _46306__$1 = this;
return (new cljs.core.async.t_cljs$core$async46304(self__.map_LT_,self__.f,self__.ch,self__.meta46302,self__._,self__.fn1,meta46305__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46304.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46306){
var self__ = this;
var _46306__$1 = this;
return self__.meta46305;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46304.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46304.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46294_SHARP_){
return f1.call(null,(((p1__46294_SHARP_ == null))?null:self__.f.call(null,p1__46294_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46304.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46302","meta46302",350486548,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46301","cljs.core.async/t_cljs$core$async46301",-989108179,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46305","meta46305",516771451,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46304.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46304";

cljs.core.async.t_cljs$core$async46304.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async46304");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async46304 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46304(map_LT___$1,f__$1,ch__$1,meta46302__$1,___$2,fn1__$1,meta46305){
return (new cljs.core.async.t_cljs$core$async46304(map_LT___$1,f__$1,ch__$1,meta46302__$1,___$2,fn1__$1,meta46305));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46304(self__.map_LT_,self__.f,self__.ch,self__.meta46302,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25927__auto__ = ret;
if(cljs.core.truth_(and__25927__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25927__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async46301.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46301.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async46301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46302","meta46302",350486548,null)], null);
});

cljs.core.async.t_cljs$core$async46301.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46301";

cljs.core.async.t_cljs$core$async46301.cljs$lang$ctorPrWriter = (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async46301");
});

cljs.core.async.__GT_t_cljs$core$async46301 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46301(map_LT___$1,f__$1,ch__$1,meta46302){
return (new cljs.core.async.t_cljs$core$async46301(map_LT___$1,f__$1,ch__$1,meta46302));
});

}

return (new cljs.core.async.t_cljs$core$async46301(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46310 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46310 = (function (map_GT_,f,ch,meta46311){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta46311 = meta46311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46312,meta46311__$1){
var self__ = this;
var _46312__$1 = this;
return (new cljs.core.async.t_cljs$core$async46310(self__.map_GT_,self__.f,self__.ch,meta46311__$1));
});

cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46312){
var self__ = this;
var _46312__$1 = this;
return self__.meta46311;
});

cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async46310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46311","meta46311",-159915992,null)], null);
});

cljs.core.async.t_cljs$core$async46310.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46310";

cljs.core.async.t_cljs$core$async46310.cljs$lang$ctorPrWriter = (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async46310");
});

cljs.core.async.__GT_t_cljs$core$async46310 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46310(map_GT___$1,f__$1,ch__$1,meta46311){
return (new cljs.core.async.t_cljs$core$async46310(map_GT___$1,f__$1,ch__$1,meta46311));
});

}

return (new cljs.core.async.t_cljs$core$async46310(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async46316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46316 = (function (filter_GT_,p,ch,meta46317){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta46317 = meta46317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46318,meta46317__$1){
var self__ = this;
var _46318__$1 = this;
return (new cljs.core.async.t_cljs$core$async46316(self__.filter_GT_,self__.p,self__.ch,meta46317__$1));
});

cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46318){
var self__ = this;
var _46318__$1 = this;
return self__.meta46317;
});

cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async46316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46317","meta46317",1327070358,null)], null);
});

cljs.core.async.t_cljs$core$async46316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46316";

cljs.core.async.t_cljs$core$async46316.cljs$lang$ctorPrWriter = (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async46316");
});

cljs.core.async.__GT_t_cljs$core$async46316 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46316(filter_GT___$1,p__$1,ch__$1,meta46317){
return (new cljs.core.async.t_cljs$core$async46316(filter_GT___$1,p__$1,ch__$1,meta46317));
});

}

return (new cljs.core.async.t_cljs$core$async46316(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args46319 = [];
var len__27014__auto___46363 = arguments.length;
var i__27015__auto___46364 = (0);
while(true){
if((i__27015__auto___46364 < len__27014__auto___46363)){
args46319.push((arguments[i__27015__auto___46364]));

var G__46365 = (i__27015__auto___46364 + (1));
i__27015__auto___46364 = G__46365;
continue;
} else {
}
break;
}

var G__46321 = args46319.length;
switch (G__46321) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46319.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28051__auto___46367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto___46367,out){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto___46367,out){
return (function (state_46342){
var state_val_46343 = (state_46342[(1)]);
if((state_val_46343 === (7))){
var inst_46338 = (state_46342[(2)]);
var state_46342__$1 = state_46342;
var statearr_46344_46368 = state_46342__$1;
(statearr_46344_46368[(2)] = inst_46338);

(statearr_46344_46368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46343 === (1))){
var state_46342__$1 = state_46342;
var statearr_46345_46369 = state_46342__$1;
(statearr_46345_46369[(2)] = null);

(statearr_46345_46369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46343 === (4))){
var inst_46324 = (state_46342[(7)]);
var inst_46324__$1 = (state_46342[(2)]);
var inst_46325 = (inst_46324__$1 == null);
var state_46342__$1 = (function (){var statearr_46346 = state_46342;
(statearr_46346[(7)] = inst_46324__$1);

return statearr_46346;
})();
if(cljs.core.truth_(inst_46325)){
var statearr_46347_46370 = state_46342__$1;
(statearr_46347_46370[(1)] = (5));

} else {
var statearr_46348_46371 = state_46342__$1;
(statearr_46348_46371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46343 === (6))){
var inst_46324 = (state_46342[(7)]);
var inst_46329 = p.call(null,inst_46324);
var state_46342__$1 = state_46342;
if(cljs.core.truth_(inst_46329)){
var statearr_46349_46372 = state_46342__$1;
(statearr_46349_46372[(1)] = (8));

} else {
var statearr_46350_46373 = state_46342__$1;
(statearr_46350_46373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46343 === (3))){
var inst_46340 = (state_46342[(2)]);
var state_46342__$1 = state_46342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46342__$1,inst_46340);
} else {
if((state_val_46343 === (2))){
var state_46342__$1 = state_46342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46342__$1,(4),ch);
} else {
if((state_val_46343 === (11))){
var inst_46332 = (state_46342[(2)]);
var state_46342__$1 = state_46342;
var statearr_46351_46374 = state_46342__$1;
(statearr_46351_46374[(2)] = inst_46332);

(statearr_46351_46374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46343 === (9))){
var state_46342__$1 = state_46342;
var statearr_46352_46375 = state_46342__$1;
(statearr_46352_46375[(2)] = null);

(statearr_46352_46375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46343 === (5))){
var inst_46327 = cljs.core.async.close_BANG_.call(null,out);
var state_46342__$1 = state_46342;
var statearr_46353_46376 = state_46342__$1;
(statearr_46353_46376[(2)] = inst_46327);

(statearr_46353_46376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46343 === (10))){
var inst_46335 = (state_46342[(2)]);
var state_46342__$1 = (function (){var statearr_46354 = state_46342;
(statearr_46354[(8)] = inst_46335);

return statearr_46354;
})();
var statearr_46355_46377 = state_46342__$1;
(statearr_46355_46377[(2)] = null);

(statearr_46355_46377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46343 === (8))){
var inst_46324 = (state_46342[(7)]);
var state_46342__$1 = state_46342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46342__$1,(11),out,inst_46324);
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
});})(c__28051__auto___46367,out))
;
return ((function (switch__28030__auto__,c__28051__auto___46367,out){
return (function() {
var cljs$core$async$state_machine__28031__auto__ = null;
var cljs$core$async$state_machine__28031__auto____0 = (function (){
var statearr_46359 = [null,null,null,null,null,null,null,null,null];
(statearr_46359[(0)] = cljs$core$async$state_machine__28031__auto__);

(statearr_46359[(1)] = (1));

return statearr_46359;
});
var cljs$core$async$state_machine__28031__auto____1 = (function (state_46342){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_46342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e46360){if((e46360 instanceof Object)){
var ex__28034__auto__ = e46360;
var statearr_46361_46378 = state_46342;
(statearr_46361_46378[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46379 = state_46342;
state_46342 = G__46379;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$state_machine__28031__auto__ = function(state_46342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28031__auto____1.call(this,state_46342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28031__auto____0;
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28031__auto____1;
return cljs$core$async$state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto___46367,out))
})();
var state__28053__auto__ = (function (){var statearr_46362 = f__28052__auto__.call(null);
(statearr_46362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___46367);

return statearr_46362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto___46367,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args46380 = [];
var len__27014__auto___46383 = arguments.length;
var i__27015__auto___46384 = (0);
while(true){
if((i__27015__auto___46384 < len__27014__auto___46383)){
args46380.push((arguments[i__27015__auto___46384]));

var G__46385 = (i__27015__auto___46384 + (1));
i__27015__auto___46384 = G__46385;
continue;
} else {
}
break;
}

var G__46382 = args46380.length;
switch (G__46382) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46380.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto__){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto__){
return (function (state_46552){
var state_val_46553 = (state_46552[(1)]);
if((state_val_46553 === (7))){
var inst_46548 = (state_46552[(2)]);
var state_46552__$1 = state_46552;
var statearr_46554_46595 = state_46552__$1;
(statearr_46554_46595[(2)] = inst_46548);

(statearr_46554_46595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (20))){
var inst_46518 = (state_46552[(7)]);
var inst_46529 = (state_46552[(2)]);
var inst_46530 = cljs.core.next.call(null,inst_46518);
var inst_46504 = inst_46530;
var inst_46505 = null;
var inst_46506 = (0);
var inst_46507 = (0);
var state_46552__$1 = (function (){var statearr_46555 = state_46552;
(statearr_46555[(8)] = inst_46505);

(statearr_46555[(9)] = inst_46507);

(statearr_46555[(10)] = inst_46504);

(statearr_46555[(11)] = inst_46506);

(statearr_46555[(12)] = inst_46529);

return statearr_46555;
})();
var statearr_46556_46596 = state_46552__$1;
(statearr_46556_46596[(2)] = null);

(statearr_46556_46596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (1))){
var state_46552__$1 = state_46552;
var statearr_46557_46597 = state_46552__$1;
(statearr_46557_46597[(2)] = null);

(statearr_46557_46597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (4))){
var inst_46493 = (state_46552[(13)]);
var inst_46493__$1 = (state_46552[(2)]);
var inst_46494 = (inst_46493__$1 == null);
var state_46552__$1 = (function (){var statearr_46558 = state_46552;
(statearr_46558[(13)] = inst_46493__$1);

return statearr_46558;
})();
if(cljs.core.truth_(inst_46494)){
var statearr_46559_46598 = state_46552__$1;
(statearr_46559_46598[(1)] = (5));

} else {
var statearr_46560_46599 = state_46552__$1;
(statearr_46560_46599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (15))){
var state_46552__$1 = state_46552;
var statearr_46564_46600 = state_46552__$1;
(statearr_46564_46600[(2)] = null);

(statearr_46564_46600[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (21))){
var state_46552__$1 = state_46552;
var statearr_46565_46601 = state_46552__$1;
(statearr_46565_46601[(2)] = null);

(statearr_46565_46601[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (13))){
var inst_46505 = (state_46552[(8)]);
var inst_46507 = (state_46552[(9)]);
var inst_46504 = (state_46552[(10)]);
var inst_46506 = (state_46552[(11)]);
var inst_46514 = (state_46552[(2)]);
var inst_46515 = (inst_46507 + (1));
var tmp46561 = inst_46505;
var tmp46562 = inst_46504;
var tmp46563 = inst_46506;
var inst_46504__$1 = tmp46562;
var inst_46505__$1 = tmp46561;
var inst_46506__$1 = tmp46563;
var inst_46507__$1 = inst_46515;
var state_46552__$1 = (function (){var statearr_46566 = state_46552;
(statearr_46566[(8)] = inst_46505__$1);

(statearr_46566[(9)] = inst_46507__$1);

(statearr_46566[(10)] = inst_46504__$1);

(statearr_46566[(11)] = inst_46506__$1);

(statearr_46566[(14)] = inst_46514);

return statearr_46566;
})();
var statearr_46567_46602 = state_46552__$1;
(statearr_46567_46602[(2)] = null);

(statearr_46567_46602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (22))){
var state_46552__$1 = state_46552;
var statearr_46568_46603 = state_46552__$1;
(statearr_46568_46603[(2)] = null);

(statearr_46568_46603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (6))){
var inst_46493 = (state_46552[(13)]);
var inst_46502 = f.call(null,inst_46493);
var inst_46503 = cljs.core.seq.call(null,inst_46502);
var inst_46504 = inst_46503;
var inst_46505 = null;
var inst_46506 = (0);
var inst_46507 = (0);
var state_46552__$1 = (function (){var statearr_46569 = state_46552;
(statearr_46569[(8)] = inst_46505);

(statearr_46569[(9)] = inst_46507);

(statearr_46569[(10)] = inst_46504);

(statearr_46569[(11)] = inst_46506);

return statearr_46569;
})();
var statearr_46570_46604 = state_46552__$1;
(statearr_46570_46604[(2)] = null);

(statearr_46570_46604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (17))){
var inst_46518 = (state_46552[(7)]);
var inst_46522 = cljs.core.chunk_first.call(null,inst_46518);
var inst_46523 = cljs.core.chunk_rest.call(null,inst_46518);
var inst_46524 = cljs.core.count.call(null,inst_46522);
var inst_46504 = inst_46523;
var inst_46505 = inst_46522;
var inst_46506 = inst_46524;
var inst_46507 = (0);
var state_46552__$1 = (function (){var statearr_46571 = state_46552;
(statearr_46571[(8)] = inst_46505);

(statearr_46571[(9)] = inst_46507);

(statearr_46571[(10)] = inst_46504);

(statearr_46571[(11)] = inst_46506);

return statearr_46571;
})();
var statearr_46572_46605 = state_46552__$1;
(statearr_46572_46605[(2)] = null);

(statearr_46572_46605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (3))){
var inst_46550 = (state_46552[(2)]);
var state_46552__$1 = state_46552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46552__$1,inst_46550);
} else {
if((state_val_46553 === (12))){
var inst_46538 = (state_46552[(2)]);
var state_46552__$1 = state_46552;
var statearr_46573_46606 = state_46552__$1;
(statearr_46573_46606[(2)] = inst_46538);

(statearr_46573_46606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (2))){
var state_46552__$1 = state_46552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46552__$1,(4),in$);
} else {
if((state_val_46553 === (23))){
var inst_46546 = (state_46552[(2)]);
var state_46552__$1 = state_46552;
var statearr_46574_46607 = state_46552__$1;
(statearr_46574_46607[(2)] = inst_46546);

(statearr_46574_46607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (19))){
var inst_46533 = (state_46552[(2)]);
var state_46552__$1 = state_46552;
var statearr_46575_46608 = state_46552__$1;
(statearr_46575_46608[(2)] = inst_46533);

(statearr_46575_46608[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (11))){
var inst_46518 = (state_46552[(7)]);
var inst_46504 = (state_46552[(10)]);
var inst_46518__$1 = cljs.core.seq.call(null,inst_46504);
var state_46552__$1 = (function (){var statearr_46576 = state_46552;
(statearr_46576[(7)] = inst_46518__$1);

return statearr_46576;
})();
if(inst_46518__$1){
var statearr_46577_46609 = state_46552__$1;
(statearr_46577_46609[(1)] = (14));

} else {
var statearr_46578_46610 = state_46552__$1;
(statearr_46578_46610[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (9))){
var inst_46540 = (state_46552[(2)]);
var inst_46541 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_46552__$1 = (function (){var statearr_46579 = state_46552;
(statearr_46579[(15)] = inst_46540);

return statearr_46579;
})();
if(cljs.core.truth_(inst_46541)){
var statearr_46580_46611 = state_46552__$1;
(statearr_46580_46611[(1)] = (21));

} else {
var statearr_46581_46612 = state_46552__$1;
(statearr_46581_46612[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (5))){
var inst_46496 = cljs.core.async.close_BANG_.call(null,out);
var state_46552__$1 = state_46552;
var statearr_46582_46613 = state_46552__$1;
(statearr_46582_46613[(2)] = inst_46496);

(statearr_46582_46613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (14))){
var inst_46518 = (state_46552[(7)]);
var inst_46520 = cljs.core.chunked_seq_QMARK_.call(null,inst_46518);
var state_46552__$1 = state_46552;
if(inst_46520){
var statearr_46583_46614 = state_46552__$1;
(statearr_46583_46614[(1)] = (17));

} else {
var statearr_46584_46615 = state_46552__$1;
(statearr_46584_46615[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (16))){
var inst_46536 = (state_46552[(2)]);
var state_46552__$1 = state_46552;
var statearr_46585_46616 = state_46552__$1;
(statearr_46585_46616[(2)] = inst_46536);

(statearr_46585_46616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46553 === (10))){
var inst_46505 = (state_46552[(8)]);
var inst_46507 = (state_46552[(9)]);
var inst_46512 = cljs.core._nth.call(null,inst_46505,inst_46507);
var state_46552__$1 = state_46552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46552__$1,(13),out,inst_46512);
} else {
if((state_val_46553 === (18))){
var inst_46518 = (state_46552[(7)]);
var inst_46527 = cljs.core.first.call(null,inst_46518);
var state_46552__$1 = state_46552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46552__$1,(20),out,inst_46527);
} else {
if((state_val_46553 === (8))){
var inst_46507 = (state_46552[(9)]);
var inst_46506 = (state_46552[(11)]);
var inst_46509 = (inst_46507 < inst_46506);
var inst_46510 = inst_46509;
var state_46552__$1 = state_46552;
if(cljs.core.truth_(inst_46510)){
var statearr_46586_46617 = state_46552__$1;
(statearr_46586_46617[(1)] = (10));

} else {
var statearr_46587_46618 = state_46552__$1;
(statearr_46587_46618[(1)] = (11));

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
});})(c__28051__auto__))
;
return ((function (switch__28030__auto__,c__28051__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28031__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28031__auto____0 = (function (){
var statearr_46591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46591[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28031__auto__);

(statearr_46591[(1)] = (1));

return statearr_46591;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28031__auto____1 = (function (state_46552){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_46552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e46592){if((e46592 instanceof Object)){
var ex__28034__auto__ = e46592;
var statearr_46593_46619 = state_46552;
(statearr_46593_46619[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46620 = state_46552;
state_46552 = G__46620;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28031__auto__ = function(state_46552){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28031__auto____1.call(this,state_46552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28031__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28031__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto__))
})();
var state__28053__auto__ = (function (){var statearr_46594 = f__28052__auto__.call(null);
(statearr_46594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto__);

return statearr_46594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto__))
);

return c__28051__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args46621 = [];
var len__27014__auto___46624 = arguments.length;
var i__27015__auto___46625 = (0);
while(true){
if((i__27015__auto___46625 < len__27014__auto___46624)){
args46621.push((arguments[i__27015__auto___46625]));

var G__46626 = (i__27015__auto___46625 + (1));
i__27015__auto___46625 = G__46626;
continue;
} else {
}
break;
}

var G__46623 = args46621.length;
switch (G__46623) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46621.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args46628 = [];
var len__27014__auto___46631 = arguments.length;
var i__27015__auto___46632 = (0);
while(true){
if((i__27015__auto___46632 < len__27014__auto___46631)){
args46628.push((arguments[i__27015__auto___46632]));

var G__46633 = (i__27015__auto___46632 + (1));
i__27015__auto___46632 = G__46633;
continue;
} else {
}
break;
}

var G__46630 = args46628.length;
switch (G__46630) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46628.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args46635 = [];
var len__27014__auto___46686 = arguments.length;
var i__27015__auto___46687 = (0);
while(true){
if((i__27015__auto___46687 < len__27014__auto___46686)){
args46635.push((arguments[i__27015__auto___46687]));

var G__46688 = (i__27015__auto___46687 + (1));
i__27015__auto___46687 = G__46688;
continue;
} else {
}
break;
}

var G__46637 = args46635.length;
switch (G__46637) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46635.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28051__auto___46690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto___46690,out){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto___46690,out){
return (function (state_46661){
var state_val_46662 = (state_46661[(1)]);
if((state_val_46662 === (7))){
var inst_46656 = (state_46661[(2)]);
var state_46661__$1 = state_46661;
var statearr_46663_46691 = state_46661__$1;
(statearr_46663_46691[(2)] = inst_46656);

(statearr_46663_46691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46662 === (1))){
var inst_46638 = null;
var state_46661__$1 = (function (){var statearr_46664 = state_46661;
(statearr_46664[(7)] = inst_46638);

return statearr_46664;
})();
var statearr_46665_46692 = state_46661__$1;
(statearr_46665_46692[(2)] = null);

(statearr_46665_46692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46662 === (4))){
var inst_46641 = (state_46661[(8)]);
var inst_46641__$1 = (state_46661[(2)]);
var inst_46642 = (inst_46641__$1 == null);
var inst_46643 = cljs.core.not.call(null,inst_46642);
var state_46661__$1 = (function (){var statearr_46666 = state_46661;
(statearr_46666[(8)] = inst_46641__$1);

return statearr_46666;
})();
if(inst_46643){
var statearr_46667_46693 = state_46661__$1;
(statearr_46667_46693[(1)] = (5));

} else {
var statearr_46668_46694 = state_46661__$1;
(statearr_46668_46694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46662 === (6))){
var state_46661__$1 = state_46661;
var statearr_46669_46695 = state_46661__$1;
(statearr_46669_46695[(2)] = null);

(statearr_46669_46695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46662 === (3))){
var inst_46658 = (state_46661[(2)]);
var inst_46659 = cljs.core.async.close_BANG_.call(null,out);
var state_46661__$1 = (function (){var statearr_46670 = state_46661;
(statearr_46670[(9)] = inst_46658);

return statearr_46670;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46661__$1,inst_46659);
} else {
if((state_val_46662 === (2))){
var state_46661__$1 = state_46661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46661__$1,(4),ch);
} else {
if((state_val_46662 === (11))){
var inst_46641 = (state_46661[(8)]);
var inst_46650 = (state_46661[(2)]);
var inst_46638 = inst_46641;
var state_46661__$1 = (function (){var statearr_46671 = state_46661;
(statearr_46671[(7)] = inst_46638);

(statearr_46671[(10)] = inst_46650);

return statearr_46671;
})();
var statearr_46672_46696 = state_46661__$1;
(statearr_46672_46696[(2)] = null);

(statearr_46672_46696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46662 === (9))){
var inst_46641 = (state_46661[(8)]);
var state_46661__$1 = state_46661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46661__$1,(11),out,inst_46641);
} else {
if((state_val_46662 === (5))){
var inst_46638 = (state_46661[(7)]);
var inst_46641 = (state_46661[(8)]);
var inst_46645 = cljs.core._EQ_.call(null,inst_46641,inst_46638);
var state_46661__$1 = state_46661;
if(inst_46645){
var statearr_46674_46697 = state_46661__$1;
(statearr_46674_46697[(1)] = (8));

} else {
var statearr_46675_46698 = state_46661__$1;
(statearr_46675_46698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46662 === (10))){
var inst_46653 = (state_46661[(2)]);
var state_46661__$1 = state_46661;
var statearr_46676_46699 = state_46661__$1;
(statearr_46676_46699[(2)] = inst_46653);

(statearr_46676_46699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46662 === (8))){
var inst_46638 = (state_46661[(7)]);
var tmp46673 = inst_46638;
var inst_46638__$1 = tmp46673;
var state_46661__$1 = (function (){var statearr_46677 = state_46661;
(statearr_46677[(7)] = inst_46638__$1);

return statearr_46677;
})();
var statearr_46678_46700 = state_46661__$1;
(statearr_46678_46700[(2)] = null);

(statearr_46678_46700[(1)] = (2));


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
});})(c__28051__auto___46690,out))
;
return ((function (switch__28030__auto__,c__28051__auto___46690,out){
return (function() {
var cljs$core$async$state_machine__28031__auto__ = null;
var cljs$core$async$state_machine__28031__auto____0 = (function (){
var statearr_46682 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46682[(0)] = cljs$core$async$state_machine__28031__auto__);

(statearr_46682[(1)] = (1));

return statearr_46682;
});
var cljs$core$async$state_machine__28031__auto____1 = (function (state_46661){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_46661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e46683){if((e46683 instanceof Object)){
var ex__28034__auto__ = e46683;
var statearr_46684_46701 = state_46661;
(statearr_46684_46701[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46702 = state_46661;
state_46661 = G__46702;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$state_machine__28031__auto__ = function(state_46661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28031__auto____1.call(this,state_46661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28031__auto____0;
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28031__auto____1;
return cljs$core$async$state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto___46690,out))
})();
var state__28053__auto__ = (function (){var statearr_46685 = f__28052__auto__.call(null);
(statearr_46685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___46690);

return statearr_46685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto___46690,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args46703 = [];
var len__27014__auto___46773 = arguments.length;
var i__27015__auto___46774 = (0);
while(true){
if((i__27015__auto___46774 < len__27014__auto___46773)){
args46703.push((arguments[i__27015__auto___46774]));

var G__46775 = (i__27015__auto___46774 + (1));
i__27015__auto___46774 = G__46775;
continue;
} else {
}
break;
}

var G__46705 = args46703.length;
switch (G__46705) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46703.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28051__auto___46777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto___46777,out){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto___46777,out){
return (function (state_46743){
var state_val_46744 = (state_46743[(1)]);
if((state_val_46744 === (7))){
var inst_46739 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46745_46778 = state_46743__$1;
(statearr_46745_46778[(2)] = inst_46739);

(statearr_46745_46778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (1))){
var inst_46706 = (new Array(n));
var inst_46707 = inst_46706;
var inst_46708 = (0);
var state_46743__$1 = (function (){var statearr_46746 = state_46743;
(statearr_46746[(7)] = inst_46708);

(statearr_46746[(8)] = inst_46707);

return statearr_46746;
})();
var statearr_46747_46779 = state_46743__$1;
(statearr_46747_46779[(2)] = null);

(statearr_46747_46779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (4))){
var inst_46711 = (state_46743[(9)]);
var inst_46711__$1 = (state_46743[(2)]);
var inst_46712 = (inst_46711__$1 == null);
var inst_46713 = cljs.core.not.call(null,inst_46712);
var state_46743__$1 = (function (){var statearr_46748 = state_46743;
(statearr_46748[(9)] = inst_46711__$1);

return statearr_46748;
})();
if(inst_46713){
var statearr_46749_46780 = state_46743__$1;
(statearr_46749_46780[(1)] = (5));

} else {
var statearr_46750_46781 = state_46743__$1;
(statearr_46750_46781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (15))){
var inst_46733 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46751_46782 = state_46743__$1;
(statearr_46751_46782[(2)] = inst_46733);

(statearr_46751_46782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (13))){
var state_46743__$1 = state_46743;
var statearr_46752_46783 = state_46743__$1;
(statearr_46752_46783[(2)] = null);

(statearr_46752_46783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (6))){
var inst_46708 = (state_46743[(7)]);
var inst_46729 = (inst_46708 > (0));
var state_46743__$1 = state_46743;
if(cljs.core.truth_(inst_46729)){
var statearr_46753_46784 = state_46743__$1;
(statearr_46753_46784[(1)] = (12));

} else {
var statearr_46754_46785 = state_46743__$1;
(statearr_46754_46785[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (3))){
var inst_46741 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46743__$1,inst_46741);
} else {
if((state_val_46744 === (12))){
var inst_46707 = (state_46743[(8)]);
var inst_46731 = cljs.core.vec.call(null,inst_46707);
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46743__$1,(15),out,inst_46731);
} else {
if((state_val_46744 === (2))){
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46743__$1,(4),ch);
} else {
if((state_val_46744 === (11))){
var inst_46723 = (state_46743[(2)]);
var inst_46724 = (new Array(n));
var inst_46707 = inst_46724;
var inst_46708 = (0);
var state_46743__$1 = (function (){var statearr_46755 = state_46743;
(statearr_46755[(7)] = inst_46708);

(statearr_46755[(10)] = inst_46723);

(statearr_46755[(8)] = inst_46707);

return statearr_46755;
})();
var statearr_46756_46786 = state_46743__$1;
(statearr_46756_46786[(2)] = null);

(statearr_46756_46786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (9))){
var inst_46707 = (state_46743[(8)]);
var inst_46721 = cljs.core.vec.call(null,inst_46707);
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46743__$1,(11),out,inst_46721);
} else {
if((state_val_46744 === (5))){
var inst_46708 = (state_46743[(7)]);
var inst_46716 = (state_46743[(11)]);
var inst_46707 = (state_46743[(8)]);
var inst_46711 = (state_46743[(9)]);
var inst_46715 = (inst_46707[inst_46708] = inst_46711);
var inst_46716__$1 = (inst_46708 + (1));
var inst_46717 = (inst_46716__$1 < n);
var state_46743__$1 = (function (){var statearr_46757 = state_46743;
(statearr_46757[(11)] = inst_46716__$1);

(statearr_46757[(12)] = inst_46715);

return statearr_46757;
})();
if(cljs.core.truth_(inst_46717)){
var statearr_46758_46787 = state_46743__$1;
(statearr_46758_46787[(1)] = (8));

} else {
var statearr_46759_46788 = state_46743__$1;
(statearr_46759_46788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (14))){
var inst_46736 = (state_46743[(2)]);
var inst_46737 = cljs.core.async.close_BANG_.call(null,out);
var state_46743__$1 = (function (){var statearr_46761 = state_46743;
(statearr_46761[(13)] = inst_46736);

return statearr_46761;
})();
var statearr_46762_46789 = state_46743__$1;
(statearr_46762_46789[(2)] = inst_46737);

(statearr_46762_46789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (10))){
var inst_46727 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46763_46790 = state_46743__$1;
(statearr_46763_46790[(2)] = inst_46727);

(statearr_46763_46790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (8))){
var inst_46716 = (state_46743[(11)]);
var inst_46707 = (state_46743[(8)]);
var tmp46760 = inst_46707;
var inst_46707__$1 = tmp46760;
var inst_46708 = inst_46716;
var state_46743__$1 = (function (){var statearr_46764 = state_46743;
(statearr_46764[(7)] = inst_46708);

(statearr_46764[(8)] = inst_46707__$1);

return statearr_46764;
})();
var statearr_46765_46791 = state_46743__$1;
(statearr_46765_46791[(2)] = null);

(statearr_46765_46791[(1)] = (2));


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
});})(c__28051__auto___46777,out))
;
return ((function (switch__28030__auto__,c__28051__auto___46777,out){
return (function() {
var cljs$core$async$state_machine__28031__auto__ = null;
var cljs$core$async$state_machine__28031__auto____0 = (function (){
var statearr_46769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46769[(0)] = cljs$core$async$state_machine__28031__auto__);

(statearr_46769[(1)] = (1));

return statearr_46769;
});
var cljs$core$async$state_machine__28031__auto____1 = (function (state_46743){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_46743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e46770){if((e46770 instanceof Object)){
var ex__28034__auto__ = e46770;
var statearr_46771_46792 = state_46743;
(statearr_46771_46792[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46793 = state_46743;
state_46743 = G__46793;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$state_machine__28031__auto__ = function(state_46743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28031__auto____1.call(this,state_46743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28031__auto____0;
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28031__auto____1;
return cljs$core$async$state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto___46777,out))
})();
var state__28053__auto__ = (function (){var statearr_46772 = f__28052__auto__.call(null);
(statearr_46772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___46777);

return statearr_46772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto___46777,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args46794 = [];
var len__27014__auto___46868 = arguments.length;
var i__27015__auto___46869 = (0);
while(true){
if((i__27015__auto___46869 < len__27014__auto___46868)){
args46794.push((arguments[i__27015__auto___46869]));

var G__46870 = (i__27015__auto___46869 + (1));
i__27015__auto___46869 = G__46870;
continue;
} else {
}
break;
}

var G__46796 = args46794.length;
switch (G__46796) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46794.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28051__auto___46872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28051__auto___46872,out){
return (function (){
var f__28052__auto__ = (function (){var switch__28030__auto__ = ((function (c__28051__auto___46872,out){
return (function (state_46838){
var state_val_46839 = (state_46838[(1)]);
if((state_val_46839 === (7))){
var inst_46834 = (state_46838[(2)]);
var state_46838__$1 = state_46838;
var statearr_46840_46873 = state_46838__$1;
(statearr_46840_46873[(2)] = inst_46834);

(statearr_46840_46873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46839 === (1))){
var inst_46797 = [];
var inst_46798 = inst_46797;
var inst_46799 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46838__$1 = (function (){var statearr_46841 = state_46838;
(statearr_46841[(7)] = inst_46798);

(statearr_46841[(8)] = inst_46799);

return statearr_46841;
})();
var statearr_46842_46874 = state_46838__$1;
(statearr_46842_46874[(2)] = null);

(statearr_46842_46874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46839 === (4))){
var inst_46802 = (state_46838[(9)]);
var inst_46802__$1 = (state_46838[(2)]);
var inst_46803 = (inst_46802__$1 == null);
var inst_46804 = cljs.core.not.call(null,inst_46803);
var state_46838__$1 = (function (){var statearr_46843 = state_46838;
(statearr_46843[(9)] = inst_46802__$1);

return statearr_46843;
})();
if(inst_46804){
var statearr_46844_46875 = state_46838__$1;
(statearr_46844_46875[(1)] = (5));

} else {
var statearr_46845_46876 = state_46838__$1;
(statearr_46845_46876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46839 === (15))){
var inst_46828 = (state_46838[(2)]);
var state_46838__$1 = state_46838;
var statearr_46846_46877 = state_46838__$1;
(statearr_46846_46877[(2)] = inst_46828);

(statearr_46846_46877[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46839 === (13))){
var state_46838__$1 = state_46838;
var statearr_46847_46878 = state_46838__$1;
(statearr_46847_46878[(2)] = null);

(statearr_46847_46878[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46839 === (6))){
var inst_46798 = (state_46838[(7)]);
var inst_46823 = inst_46798.length;
var inst_46824 = (inst_46823 > (0));
var state_46838__$1 = state_46838;
if(cljs.core.truth_(inst_46824)){
var statearr_46848_46879 = state_46838__$1;
(statearr_46848_46879[(1)] = (12));

} else {
var statearr_46849_46880 = state_46838__$1;
(statearr_46849_46880[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46839 === (3))){
var inst_46836 = (state_46838[(2)]);
var state_46838__$1 = state_46838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46838__$1,inst_46836);
} else {
if((state_val_46839 === (12))){
var inst_46798 = (state_46838[(7)]);
var inst_46826 = cljs.core.vec.call(null,inst_46798);
var state_46838__$1 = state_46838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46838__$1,(15),out,inst_46826);
} else {
if((state_val_46839 === (2))){
var state_46838__$1 = state_46838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46838__$1,(4),ch);
} else {
if((state_val_46839 === (11))){
var inst_46802 = (state_46838[(9)]);
var inst_46806 = (state_46838[(10)]);
var inst_46816 = (state_46838[(2)]);
var inst_46817 = [];
var inst_46818 = inst_46817.push(inst_46802);
var inst_46798 = inst_46817;
var inst_46799 = inst_46806;
var state_46838__$1 = (function (){var statearr_46850 = state_46838;
(statearr_46850[(11)] = inst_46818);

(statearr_46850[(12)] = inst_46816);

(statearr_46850[(7)] = inst_46798);

(statearr_46850[(8)] = inst_46799);

return statearr_46850;
})();
var statearr_46851_46881 = state_46838__$1;
(statearr_46851_46881[(2)] = null);

(statearr_46851_46881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46839 === (9))){
var inst_46798 = (state_46838[(7)]);
var inst_46814 = cljs.core.vec.call(null,inst_46798);
var state_46838__$1 = state_46838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46838__$1,(11),out,inst_46814);
} else {
if((state_val_46839 === (5))){
var inst_46802 = (state_46838[(9)]);
var inst_46806 = (state_46838[(10)]);
var inst_46799 = (state_46838[(8)]);
var inst_46806__$1 = f.call(null,inst_46802);
var inst_46807 = cljs.core._EQ_.call(null,inst_46806__$1,inst_46799);
var inst_46808 = cljs.core.keyword_identical_QMARK_.call(null,inst_46799,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46809 = (inst_46807) || (inst_46808);
var state_46838__$1 = (function (){var statearr_46852 = state_46838;
(statearr_46852[(10)] = inst_46806__$1);

return statearr_46852;
})();
if(cljs.core.truth_(inst_46809)){
var statearr_46853_46882 = state_46838__$1;
(statearr_46853_46882[(1)] = (8));

} else {
var statearr_46854_46883 = state_46838__$1;
(statearr_46854_46883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46839 === (14))){
var inst_46831 = (state_46838[(2)]);
var inst_46832 = cljs.core.async.close_BANG_.call(null,out);
var state_46838__$1 = (function (){var statearr_46856 = state_46838;
(statearr_46856[(13)] = inst_46831);

return statearr_46856;
})();
var statearr_46857_46884 = state_46838__$1;
(statearr_46857_46884[(2)] = inst_46832);

(statearr_46857_46884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46839 === (10))){
var inst_46821 = (state_46838[(2)]);
var state_46838__$1 = state_46838;
var statearr_46858_46885 = state_46838__$1;
(statearr_46858_46885[(2)] = inst_46821);

(statearr_46858_46885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46839 === (8))){
var inst_46798 = (state_46838[(7)]);
var inst_46802 = (state_46838[(9)]);
var inst_46806 = (state_46838[(10)]);
var inst_46811 = inst_46798.push(inst_46802);
var tmp46855 = inst_46798;
var inst_46798__$1 = tmp46855;
var inst_46799 = inst_46806;
var state_46838__$1 = (function (){var statearr_46859 = state_46838;
(statearr_46859[(14)] = inst_46811);

(statearr_46859[(7)] = inst_46798__$1);

(statearr_46859[(8)] = inst_46799);

return statearr_46859;
})();
var statearr_46860_46886 = state_46838__$1;
(statearr_46860_46886[(2)] = null);

(statearr_46860_46886[(1)] = (2));


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
});})(c__28051__auto___46872,out))
;
return ((function (switch__28030__auto__,c__28051__auto___46872,out){
return (function() {
var cljs$core$async$state_machine__28031__auto__ = null;
var cljs$core$async$state_machine__28031__auto____0 = (function (){
var statearr_46864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46864[(0)] = cljs$core$async$state_machine__28031__auto__);

(statearr_46864[(1)] = (1));

return statearr_46864;
});
var cljs$core$async$state_machine__28031__auto____1 = (function (state_46838){
while(true){
var ret_value__28032__auto__ = (function (){try{while(true){
var result__28033__auto__ = switch__28030__auto__.call(null,state_46838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28033__auto__;
}
break;
}
}catch (e46865){if((e46865 instanceof Object)){
var ex__28034__auto__ = e46865;
var statearr_46866_46887 = state_46838;
(statearr_46866_46887[(5)] = ex__28034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46888 = state_46838;
state_46838 = G__46888;
continue;
} else {
return ret_value__28032__auto__;
}
break;
}
});
cljs$core$async$state_machine__28031__auto__ = function(state_46838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28031__auto____1.call(this,state_46838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28031__auto____0;
cljs$core$async$state_machine__28031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28031__auto____1;
return cljs$core$async$state_machine__28031__auto__;
})()
;})(switch__28030__auto__,c__28051__auto___46872,out))
})();
var state__28053__auto__ = (function (){var statearr_46867 = f__28052__auto__.call(null);
(statearr_46867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28051__auto___46872);

return statearr_46867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28053__auto__);
});})(c__28051__auto___46872,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1496347448910