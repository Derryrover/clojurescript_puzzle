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
var args30947 = [];
var len__27014__auto___30953 = arguments.length;
var i__27015__auto___30954 = (0);
while(true){
if((i__27015__auto___30954 < len__27014__auto___30953)){
args30947.push((arguments[i__27015__auto___30954]));

var G__30955 = (i__27015__auto___30954 + (1));
i__27015__auto___30954 = G__30955;
continue;
} else {
}
break;
}

var G__30949 = args30947.length;
switch (G__30949) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30947.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30950 = (function (f,blockable,meta30951){
this.f = f;
this.blockable = blockable;
this.meta30951 = meta30951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30952,meta30951__$1){
var self__ = this;
var _30952__$1 = this;
return (new cljs.core.async.t_cljs$core$async30950(self__.f,self__.blockable,meta30951__$1));
});

cljs.core.async.t_cljs$core$async30950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30952){
var self__ = this;
var _30952__$1 = this;
return self__.meta30951;
});

cljs.core.async.t_cljs$core$async30950.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30950.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30950.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30950.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30951","meta30951",-1295423983,null)], null);
});

cljs.core.async.t_cljs$core$async30950.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30950";

cljs.core.async.t_cljs$core$async30950.cljs$lang$ctorPrWriter = (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async30950");
});

cljs.core.async.__GT_t_cljs$core$async30950 = (function cljs$core$async$__GT_t_cljs$core$async30950(f__$1,blockable__$1,meta30951){
return (new cljs.core.async.t_cljs$core$async30950(f__$1,blockable__$1,meta30951));
});

}

return (new cljs.core.async.t_cljs$core$async30950(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args30959 = [];
var len__27014__auto___30962 = arguments.length;
var i__27015__auto___30963 = (0);
while(true){
if((i__27015__auto___30963 < len__27014__auto___30962)){
args30959.push((arguments[i__27015__auto___30963]));

var G__30964 = (i__27015__auto___30963 + (1));
i__27015__auto___30963 = G__30964;
continue;
} else {
}
break;
}

var G__30961 = args30959.length;
switch (G__30961) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30959.length)].join('')));

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
var args30966 = [];
var len__27014__auto___30969 = arguments.length;
var i__27015__auto___30970 = (0);
while(true){
if((i__27015__auto___30970 < len__27014__auto___30969)){
args30966.push((arguments[i__27015__auto___30970]));

var G__30971 = (i__27015__auto___30970 + (1));
i__27015__auto___30970 = G__30971;
continue;
} else {
}
break;
}

var G__30968 = args30966.length;
switch (G__30968) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30966.length)].join('')));

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
var args30973 = [];
var len__27014__auto___30976 = arguments.length;
var i__27015__auto___30977 = (0);
while(true){
if((i__27015__auto___30977 < len__27014__auto___30976)){
args30973.push((arguments[i__27015__auto___30977]));

var G__30978 = (i__27015__auto___30977 + (1));
i__27015__auto___30977 = G__30978;
continue;
} else {
}
break;
}

var G__30975 = args30973.length;
switch (G__30975) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30973.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30980 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30980);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30980,ret){
return (function (){
return fn1.call(null,val_30980);
});})(val_30980,ret))
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
var args30981 = [];
var len__27014__auto___30984 = arguments.length;
var i__27015__auto___30985 = (0);
while(true){
if((i__27015__auto___30985 < len__27014__auto___30984)){
args30981.push((arguments[i__27015__auto___30985]));

var G__30986 = (i__27015__auto___30985 + (1));
i__27015__auto___30985 = G__30986;
continue;
} else {
}
break;
}

var G__30983 = args30981.length;
switch (G__30983) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30981.length)].join('')));

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
var n__26854__auto___30988 = n;
var x_30989 = (0);
while(true){
if((x_30989 < n__26854__auto___30988)){
(a[x_30989] = (0));

var G__30990 = (x_30989 + (1));
x_30989 = G__30990;
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

var G__30991 = (i + (1));
i = G__30991;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30995 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30995 = (function (alt_flag,flag,meta30996){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30996 = meta30996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30997,meta30996__$1){
var self__ = this;
var _30997__$1 = this;
return (new cljs.core.async.t_cljs$core$async30995(self__.alt_flag,self__.flag,meta30996__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30997){
var self__ = this;
var _30997__$1 = this;
return self__.meta30996;
});})(flag))
;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30995.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30996","meta30996",-263680622,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30995.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30995";

cljs.core.async.t_cljs$core$async30995.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async30995");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30995 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30995(alt_flag__$1,flag__$1,meta30996){
return (new cljs.core.async.t_cljs$core$async30995(alt_flag__$1,flag__$1,meta30996));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30995(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31001 = (function (alt_handler,flag,cb,meta31002){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31002 = meta31002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31003,meta31002__$1){
var self__ = this;
var _31003__$1 = this;
return (new cljs.core.async.t_cljs$core$async31001(self__.alt_handler,self__.flag,self__.cb,meta31002__$1));
});

cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31003){
var self__ = this;
var _31003__$1 = this;
return self__.meta31002;
});

cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31002","meta31002",2011600893,null)], null);
});

cljs.core.async.t_cljs$core$async31001.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31001";

cljs.core.async.t_cljs$core$async31001.cljs$lang$ctorPrWriter = (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async31001");
});

cljs.core.async.__GT_t_cljs$core$async31001 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31001(alt_handler__$1,flag__$1,cb__$1,meta31002){
return (new cljs.core.async.t_cljs$core$async31001(alt_handler__$1,flag__$1,cb__$1,meta31002));
});

}

return (new cljs.core.async.t_cljs$core$async31001(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31004_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31004_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31005_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31005_SHARP_,port], null));
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
var G__31006 = (i + (1));
i = G__31006;
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
var len__27014__auto___31012 = arguments.length;
var i__27015__auto___31013 = (0);
while(true){
if((i__27015__auto___31013 < len__27014__auto___31012)){
args__27021__auto__.push((arguments[i__27015__auto___31013]));

var G__31014 = (i__27015__auto___31013 + (1));
i__27015__auto___31013 = G__31014;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((1) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27022__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31009){
var map__31010 = p__31009;
var map__31010__$1 = ((((!((map__31010 == null)))?((((map__31010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31010):map__31010);
var opts = map__31010__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31007){
var G__31008 = cljs.core.first.call(null,seq31007);
var seq31007__$1 = cljs.core.next.call(null,seq31007);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31008,seq31007__$1);
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
var args31015 = [];
var len__27014__auto___31065 = arguments.length;
var i__27015__auto___31066 = (0);
while(true){
if((i__27015__auto___31066 < len__27014__auto___31065)){
args31015.push((arguments[i__27015__auto___31066]));

var G__31067 = (i__27015__auto___31066 + (1));
i__27015__auto___31066 = G__31067;
continue;
} else {
}
break;
}

var G__31017 = args31015.length;
switch (G__31017) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31015.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30902__auto___31069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto___31069){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto___31069){
return (function (state_31041){
var state_val_31042 = (state_31041[(1)]);
if((state_val_31042 === (7))){
var inst_31037 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31043_31070 = state_31041__$1;
(statearr_31043_31070[(2)] = inst_31037);

(statearr_31043_31070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (1))){
var state_31041__$1 = state_31041;
var statearr_31044_31071 = state_31041__$1;
(statearr_31044_31071[(2)] = null);

(statearr_31044_31071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (4))){
var inst_31020 = (state_31041[(7)]);
var inst_31020__$1 = (state_31041[(2)]);
var inst_31021 = (inst_31020__$1 == null);
var state_31041__$1 = (function (){var statearr_31045 = state_31041;
(statearr_31045[(7)] = inst_31020__$1);

return statearr_31045;
})();
if(cljs.core.truth_(inst_31021)){
var statearr_31046_31072 = state_31041__$1;
(statearr_31046_31072[(1)] = (5));

} else {
var statearr_31047_31073 = state_31041__$1;
(statearr_31047_31073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (13))){
var state_31041__$1 = state_31041;
var statearr_31048_31074 = state_31041__$1;
(statearr_31048_31074[(2)] = null);

(statearr_31048_31074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (6))){
var inst_31020 = (state_31041[(7)]);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31041__$1,(11),to,inst_31020);
} else {
if((state_val_31042 === (3))){
var inst_31039 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31041__$1,inst_31039);
} else {
if((state_val_31042 === (12))){
var state_31041__$1 = state_31041;
var statearr_31049_31075 = state_31041__$1;
(statearr_31049_31075[(2)] = null);

(statearr_31049_31075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (2))){
var state_31041__$1 = state_31041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31041__$1,(4),from);
} else {
if((state_val_31042 === (11))){
var inst_31030 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
if(cljs.core.truth_(inst_31030)){
var statearr_31050_31076 = state_31041__$1;
(statearr_31050_31076[(1)] = (12));

} else {
var statearr_31051_31077 = state_31041__$1;
(statearr_31051_31077[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (9))){
var state_31041__$1 = state_31041;
var statearr_31052_31078 = state_31041__$1;
(statearr_31052_31078[(2)] = null);

(statearr_31052_31078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (5))){
var state_31041__$1 = state_31041;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31053_31079 = state_31041__$1;
(statearr_31053_31079[(1)] = (8));

} else {
var statearr_31054_31080 = state_31041__$1;
(statearr_31054_31080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (14))){
var inst_31035 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31055_31081 = state_31041__$1;
(statearr_31055_31081[(2)] = inst_31035);

(statearr_31055_31081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (10))){
var inst_31027 = (state_31041[(2)]);
var state_31041__$1 = state_31041;
var statearr_31056_31082 = state_31041__$1;
(statearr_31056_31082[(2)] = inst_31027);

(statearr_31056_31082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31042 === (8))){
var inst_31024 = cljs.core.async.close_BANG_.call(null,to);
var state_31041__$1 = state_31041;
var statearr_31057_31083 = state_31041__$1;
(statearr_31057_31083[(2)] = inst_31024);

(statearr_31057_31083[(1)] = (10));


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
});})(c__30902__auto___31069))
;
return ((function (switch__30790__auto__,c__30902__auto___31069){
return (function() {
var cljs$core$async$state_machine__30791__auto__ = null;
var cljs$core$async$state_machine__30791__auto____0 = (function (){
var statearr_31061 = [null,null,null,null,null,null,null,null];
(statearr_31061[(0)] = cljs$core$async$state_machine__30791__auto__);

(statearr_31061[(1)] = (1));

return statearr_31061;
});
var cljs$core$async$state_machine__30791__auto____1 = (function (state_31041){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_31041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e31062){if((e31062 instanceof Object)){
var ex__30794__auto__ = e31062;
var statearr_31063_31084 = state_31041;
(statearr_31063_31084[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31085 = state_31041;
state_31041 = G__31085;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$state_machine__30791__auto__ = function(state_31041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30791__auto____1.call(this,state_31041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30791__auto____0;
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30791__auto____1;
return cljs$core$async$state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto___31069))
})();
var state__30904__auto__ = (function (){var statearr_31064 = f__30903__auto__.call(null);
(statearr_31064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___31069);

return statearr_31064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto___31069))
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
return (function (p__31273){
var vec__31274 = p__31273;
var v = cljs.core.nth.call(null,vec__31274,(0),null);
var p = cljs.core.nth.call(null,vec__31274,(1),null);
var job = vec__31274;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30902__auto___31460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto___31460,res,vec__31274,v,p,job,jobs,results){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto___31460,res,vec__31274,v,p,job,jobs,results){
return (function (state_31281){
var state_val_31282 = (state_31281[(1)]);
if((state_val_31282 === (1))){
var state_31281__$1 = state_31281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31281__$1,(2),res,v);
} else {
if((state_val_31282 === (2))){
var inst_31278 = (state_31281[(2)]);
var inst_31279 = cljs.core.async.close_BANG_.call(null,res);
var state_31281__$1 = (function (){var statearr_31283 = state_31281;
(statearr_31283[(7)] = inst_31278);

return statearr_31283;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31281__$1,inst_31279);
} else {
return null;
}
}
});})(c__30902__auto___31460,res,vec__31274,v,p,job,jobs,results))
;
return ((function (switch__30790__auto__,c__30902__auto___31460,res,vec__31274,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____0 = (function (){
var statearr_31287 = [null,null,null,null,null,null,null,null];
(statearr_31287[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__);

(statearr_31287[(1)] = (1));

return statearr_31287;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____1 = (function (state_31281){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_31281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e31288){if((e31288 instanceof Object)){
var ex__30794__auto__ = e31288;
var statearr_31289_31461 = state_31281;
(statearr_31289_31461[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31462 = state_31281;
state_31281 = G__31462;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__ = function(state_31281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____1.call(this,state_31281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto___31460,res,vec__31274,v,p,job,jobs,results))
})();
var state__30904__auto__ = (function (){var statearr_31290 = f__30903__auto__.call(null);
(statearr_31290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___31460);

return statearr_31290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto___31460,res,vec__31274,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31291){
var vec__31292 = p__31291;
var v = cljs.core.nth.call(null,vec__31292,(0),null);
var p = cljs.core.nth.call(null,vec__31292,(1),null);
var job = vec__31292;
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
var n__26854__auto___31463 = n;
var __31464 = (0);
while(true){
if((__31464 < n__26854__auto___31463)){
var G__31295_31465 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31295_31465) {
case "compute":
var c__30902__auto___31467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31464,c__30902__auto___31467,G__31295_31465,n__26854__auto___31463,jobs,results,process,async){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (__31464,c__30902__auto___31467,G__31295_31465,n__26854__auto___31463,jobs,results,process,async){
return (function (state_31308){
var state_val_31309 = (state_31308[(1)]);
if((state_val_31309 === (1))){
var state_31308__$1 = state_31308;
var statearr_31310_31468 = state_31308__$1;
(statearr_31310_31468[(2)] = null);

(statearr_31310_31468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (2))){
var state_31308__$1 = state_31308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31308__$1,(4),jobs);
} else {
if((state_val_31309 === (3))){
var inst_31306 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31308__$1,inst_31306);
} else {
if((state_val_31309 === (4))){
var inst_31298 = (state_31308[(2)]);
var inst_31299 = process.call(null,inst_31298);
var state_31308__$1 = state_31308;
if(cljs.core.truth_(inst_31299)){
var statearr_31311_31469 = state_31308__$1;
(statearr_31311_31469[(1)] = (5));

} else {
var statearr_31312_31470 = state_31308__$1;
(statearr_31312_31470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (5))){
var state_31308__$1 = state_31308;
var statearr_31313_31471 = state_31308__$1;
(statearr_31313_31471[(2)] = null);

(statearr_31313_31471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (6))){
var state_31308__$1 = state_31308;
var statearr_31314_31472 = state_31308__$1;
(statearr_31314_31472[(2)] = null);

(statearr_31314_31472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (7))){
var inst_31304 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31315_31473 = state_31308__$1;
(statearr_31315_31473[(2)] = inst_31304);

(statearr_31315_31473[(1)] = (3));


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
});})(__31464,c__30902__auto___31467,G__31295_31465,n__26854__auto___31463,jobs,results,process,async))
;
return ((function (__31464,switch__30790__auto__,c__30902__auto___31467,G__31295_31465,n__26854__auto___31463,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____0 = (function (){
var statearr_31319 = [null,null,null,null,null,null,null];
(statearr_31319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__);

(statearr_31319[(1)] = (1));

return statearr_31319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____1 = (function (state_31308){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_31308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e31320){if((e31320 instanceof Object)){
var ex__30794__auto__ = e31320;
var statearr_31321_31474 = state_31308;
(statearr_31321_31474[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31475 = state_31308;
state_31308 = G__31475;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__ = function(state_31308){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____1.call(this,state_31308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__;
})()
;})(__31464,switch__30790__auto__,c__30902__auto___31467,G__31295_31465,n__26854__auto___31463,jobs,results,process,async))
})();
var state__30904__auto__ = (function (){var statearr_31322 = f__30903__auto__.call(null);
(statearr_31322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___31467);

return statearr_31322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(__31464,c__30902__auto___31467,G__31295_31465,n__26854__auto___31463,jobs,results,process,async))
);


break;
case "async":
var c__30902__auto___31476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31464,c__30902__auto___31476,G__31295_31465,n__26854__auto___31463,jobs,results,process,async){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (__31464,c__30902__auto___31476,G__31295_31465,n__26854__auto___31463,jobs,results,process,async){
return (function (state_31335){
var state_val_31336 = (state_31335[(1)]);
if((state_val_31336 === (1))){
var state_31335__$1 = state_31335;
var statearr_31337_31477 = state_31335__$1;
(statearr_31337_31477[(2)] = null);

(statearr_31337_31477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (2))){
var state_31335__$1 = state_31335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31335__$1,(4),jobs);
} else {
if((state_val_31336 === (3))){
var inst_31333 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31335__$1,inst_31333);
} else {
if((state_val_31336 === (4))){
var inst_31325 = (state_31335[(2)]);
var inst_31326 = async.call(null,inst_31325);
var state_31335__$1 = state_31335;
if(cljs.core.truth_(inst_31326)){
var statearr_31338_31478 = state_31335__$1;
(statearr_31338_31478[(1)] = (5));

} else {
var statearr_31339_31479 = state_31335__$1;
(statearr_31339_31479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (5))){
var state_31335__$1 = state_31335;
var statearr_31340_31480 = state_31335__$1;
(statearr_31340_31480[(2)] = null);

(statearr_31340_31480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (6))){
var state_31335__$1 = state_31335;
var statearr_31341_31481 = state_31335__$1;
(statearr_31341_31481[(2)] = null);

(statearr_31341_31481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (7))){
var inst_31331 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
var statearr_31342_31482 = state_31335__$1;
(statearr_31342_31482[(2)] = inst_31331);

(statearr_31342_31482[(1)] = (3));


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
});})(__31464,c__30902__auto___31476,G__31295_31465,n__26854__auto___31463,jobs,results,process,async))
;
return ((function (__31464,switch__30790__auto__,c__30902__auto___31476,G__31295_31465,n__26854__auto___31463,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____0 = (function (){
var statearr_31346 = [null,null,null,null,null,null,null];
(statearr_31346[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__);

(statearr_31346[(1)] = (1));

return statearr_31346;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____1 = (function (state_31335){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_31335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e31347){if((e31347 instanceof Object)){
var ex__30794__auto__ = e31347;
var statearr_31348_31483 = state_31335;
(statearr_31348_31483[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31484 = state_31335;
state_31335 = G__31484;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__ = function(state_31335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____1.call(this,state_31335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__;
})()
;})(__31464,switch__30790__auto__,c__30902__auto___31476,G__31295_31465,n__26854__auto___31463,jobs,results,process,async))
})();
var state__30904__auto__ = (function (){var statearr_31349 = f__30903__auto__.call(null);
(statearr_31349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___31476);

return statearr_31349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(__31464,c__30902__auto___31476,G__31295_31465,n__26854__auto___31463,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31485 = (__31464 + (1));
__31464 = G__31485;
continue;
} else {
}
break;
}

var c__30902__auto___31486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto___31486,jobs,results,process,async){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto___31486,jobs,results,process,async){
return (function (state_31371){
var state_val_31372 = (state_31371[(1)]);
if((state_val_31372 === (1))){
var state_31371__$1 = state_31371;
var statearr_31373_31487 = state_31371__$1;
(statearr_31373_31487[(2)] = null);

(statearr_31373_31487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (2))){
var state_31371__$1 = state_31371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31371__$1,(4),from);
} else {
if((state_val_31372 === (3))){
var inst_31369 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31371__$1,inst_31369);
} else {
if((state_val_31372 === (4))){
var inst_31352 = (state_31371[(7)]);
var inst_31352__$1 = (state_31371[(2)]);
var inst_31353 = (inst_31352__$1 == null);
var state_31371__$1 = (function (){var statearr_31374 = state_31371;
(statearr_31374[(7)] = inst_31352__$1);

return statearr_31374;
})();
if(cljs.core.truth_(inst_31353)){
var statearr_31375_31488 = state_31371__$1;
(statearr_31375_31488[(1)] = (5));

} else {
var statearr_31376_31489 = state_31371__$1;
(statearr_31376_31489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (5))){
var inst_31355 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31371__$1 = state_31371;
var statearr_31377_31490 = state_31371__$1;
(statearr_31377_31490[(2)] = inst_31355);

(statearr_31377_31490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (6))){
var inst_31352 = (state_31371[(7)]);
var inst_31357 = (state_31371[(8)]);
var inst_31357__$1 = cljs.core.async.chan.call(null,(1));
var inst_31358 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31359 = [inst_31352,inst_31357__$1];
var inst_31360 = (new cljs.core.PersistentVector(null,2,(5),inst_31358,inst_31359,null));
var state_31371__$1 = (function (){var statearr_31378 = state_31371;
(statearr_31378[(8)] = inst_31357__$1);

return statearr_31378;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31371__$1,(8),jobs,inst_31360);
} else {
if((state_val_31372 === (7))){
var inst_31367 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
var statearr_31379_31491 = state_31371__$1;
(statearr_31379_31491[(2)] = inst_31367);

(statearr_31379_31491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (8))){
var inst_31357 = (state_31371[(8)]);
var inst_31362 = (state_31371[(2)]);
var state_31371__$1 = (function (){var statearr_31380 = state_31371;
(statearr_31380[(9)] = inst_31362);

return statearr_31380;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31371__$1,(9),results,inst_31357);
} else {
if((state_val_31372 === (9))){
var inst_31364 = (state_31371[(2)]);
var state_31371__$1 = (function (){var statearr_31381 = state_31371;
(statearr_31381[(10)] = inst_31364);

return statearr_31381;
})();
var statearr_31382_31492 = state_31371__$1;
(statearr_31382_31492[(2)] = null);

(statearr_31382_31492[(1)] = (2));


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
});})(c__30902__auto___31486,jobs,results,process,async))
;
return ((function (switch__30790__auto__,c__30902__auto___31486,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____0 = (function (){
var statearr_31386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31386[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__);

(statearr_31386[(1)] = (1));

return statearr_31386;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____1 = (function (state_31371){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_31371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e31387){if((e31387 instanceof Object)){
var ex__30794__auto__ = e31387;
var statearr_31388_31493 = state_31371;
(statearr_31388_31493[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31494 = state_31371;
state_31371 = G__31494;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__ = function(state_31371){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____1.call(this,state_31371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto___31486,jobs,results,process,async))
})();
var state__30904__auto__ = (function (){var statearr_31389 = f__30903__auto__.call(null);
(statearr_31389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___31486);

return statearr_31389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto___31486,jobs,results,process,async))
);


var c__30902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto__,jobs,results,process,async){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto__,jobs,results,process,async){
return (function (state_31427){
var state_val_31428 = (state_31427[(1)]);
if((state_val_31428 === (7))){
var inst_31423 = (state_31427[(2)]);
var state_31427__$1 = state_31427;
var statearr_31429_31495 = state_31427__$1;
(statearr_31429_31495[(2)] = inst_31423);

(statearr_31429_31495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (20))){
var state_31427__$1 = state_31427;
var statearr_31430_31496 = state_31427__$1;
(statearr_31430_31496[(2)] = null);

(statearr_31430_31496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (1))){
var state_31427__$1 = state_31427;
var statearr_31431_31497 = state_31427__$1;
(statearr_31431_31497[(2)] = null);

(statearr_31431_31497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (4))){
var inst_31392 = (state_31427[(7)]);
var inst_31392__$1 = (state_31427[(2)]);
var inst_31393 = (inst_31392__$1 == null);
var state_31427__$1 = (function (){var statearr_31432 = state_31427;
(statearr_31432[(7)] = inst_31392__$1);

return statearr_31432;
})();
if(cljs.core.truth_(inst_31393)){
var statearr_31433_31498 = state_31427__$1;
(statearr_31433_31498[(1)] = (5));

} else {
var statearr_31434_31499 = state_31427__$1;
(statearr_31434_31499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (15))){
var inst_31405 = (state_31427[(8)]);
var state_31427__$1 = state_31427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31427__$1,(18),to,inst_31405);
} else {
if((state_val_31428 === (21))){
var inst_31418 = (state_31427[(2)]);
var state_31427__$1 = state_31427;
var statearr_31435_31500 = state_31427__$1;
(statearr_31435_31500[(2)] = inst_31418);

(statearr_31435_31500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (13))){
var inst_31420 = (state_31427[(2)]);
var state_31427__$1 = (function (){var statearr_31436 = state_31427;
(statearr_31436[(9)] = inst_31420);

return statearr_31436;
})();
var statearr_31437_31501 = state_31427__$1;
(statearr_31437_31501[(2)] = null);

(statearr_31437_31501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (6))){
var inst_31392 = (state_31427[(7)]);
var state_31427__$1 = state_31427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31427__$1,(11),inst_31392);
} else {
if((state_val_31428 === (17))){
var inst_31413 = (state_31427[(2)]);
var state_31427__$1 = state_31427;
if(cljs.core.truth_(inst_31413)){
var statearr_31438_31502 = state_31427__$1;
(statearr_31438_31502[(1)] = (19));

} else {
var statearr_31439_31503 = state_31427__$1;
(statearr_31439_31503[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (3))){
var inst_31425 = (state_31427[(2)]);
var state_31427__$1 = state_31427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31427__$1,inst_31425);
} else {
if((state_val_31428 === (12))){
var inst_31402 = (state_31427[(10)]);
var state_31427__$1 = state_31427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31427__$1,(14),inst_31402);
} else {
if((state_val_31428 === (2))){
var state_31427__$1 = state_31427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31427__$1,(4),results);
} else {
if((state_val_31428 === (19))){
var state_31427__$1 = state_31427;
var statearr_31440_31504 = state_31427__$1;
(statearr_31440_31504[(2)] = null);

(statearr_31440_31504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (11))){
var inst_31402 = (state_31427[(2)]);
var state_31427__$1 = (function (){var statearr_31441 = state_31427;
(statearr_31441[(10)] = inst_31402);

return statearr_31441;
})();
var statearr_31442_31505 = state_31427__$1;
(statearr_31442_31505[(2)] = null);

(statearr_31442_31505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (9))){
var state_31427__$1 = state_31427;
var statearr_31443_31506 = state_31427__$1;
(statearr_31443_31506[(2)] = null);

(statearr_31443_31506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (5))){
var state_31427__$1 = state_31427;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31444_31507 = state_31427__$1;
(statearr_31444_31507[(1)] = (8));

} else {
var statearr_31445_31508 = state_31427__$1;
(statearr_31445_31508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (14))){
var inst_31405 = (state_31427[(8)]);
var inst_31407 = (state_31427[(11)]);
var inst_31405__$1 = (state_31427[(2)]);
var inst_31406 = (inst_31405__$1 == null);
var inst_31407__$1 = cljs.core.not.call(null,inst_31406);
var state_31427__$1 = (function (){var statearr_31446 = state_31427;
(statearr_31446[(8)] = inst_31405__$1);

(statearr_31446[(11)] = inst_31407__$1);

return statearr_31446;
})();
if(inst_31407__$1){
var statearr_31447_31509 = state_31427__$1;
(statearr_31447_31509[(1)] = (15));

} else {
var statearr_31448_31510 = state_31427__$1;
(statearr_31448_31510[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (16))){
var inst_31407 = (state_31427[(11)]);
var state_31427__$1 = state_31427;
var statearr_31449_31511 = state_31427__$1;
(statearr_31449_31511[(2)] = inst_31407);

(statearr_31449_31511[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (10))){
var inst_31399 = (state_31427[(2)]);
var state_31427__$1 = state_31427;
var statearr_31450_31512 = state_31427__$1;
(statearr_31450_31512[(2)] = inst_31399);

(statearr_31450_31512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (18))){
var inst_31410 = (state_31427[(2)]);
var state_31427__$1 = state_31427;
var statearr_31451_31513 = state_31427__$1;
(statearr_31451_31513[(2)] = inst_31410);

(statearr_31451_31513[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (8))){
var inst_31396 = cljs.core.async.close_BANG_.call(null,to);
var state_31427__$1 = state_31427;
var statearr_31452_31514 = state_31427__$1;
(statearr_31452_31514[(2)] = inst_31396);

(statearr_31452_31514[(1)] = (10));


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
});})(c__30902__auto__,jobs,results,process,async))
;
return ((function (switch__30790__auto__,c__30902__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____0 = (function (){
var statearr_31456 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__);

(statearr_31456[(1)] = (1));

return statearr_31456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____1 = (function (state_31427){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_31427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e31457){if((e31457 instanceof Object)){
var ex__30794__auto__ = e31457;
var statearr_31458_31515 = state_31427;
(statearr_31458_31515[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31516 = state_31427;
state_31427 = G__31516;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__ = function(state_31427){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____1.call(this,state_31427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30791__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto__,jobs,results,process,async))
})();
var state__30904__auto__ = (function (){var statearr_31459 = f__30903__auto__.call(null);
(statearr_31459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto__);

return statearr_31459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto__,jobs,results,process,async))
);

return c__30902__auto__;
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
var args31517 = [];
var len__27014__auto___31520 = arguments.length;
var i__27015__auto___31521 = (0);
while(true){
if((i__27015__auto___31521 < len__27014__auto___31520)){
args31517.push((arguments[i__27015__auto___31521]));

var G__31522 = (i__27015__auto___31521 + (1));
i__27015__auto___31521 = G__31522;
continue;
} else {
}
break;
}

var G__31519 = args31517.length;
switch (G__31519) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31517.length)].join('')));

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
var args31524 = [];
var len__27014__auto___31527 = arguments.length;
var i__27015__auto___31528 = (0);
while(true){
if((i__27015__auto___31528 < len__27014__auto___31527)){
args31524.push((arguments[i__27015__auto___31528]));

var G__31529 = (i__27015__auto___31528 + (1));
i__27015__auto___31528 = G__31529;
continue;
} else {
}
break;
}

var G__31526 = args31524.length;
switch (G__31526) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31524.length)].join('')));

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
var args31531 = [];
var len__27014__auto___31584 = arguments.length;
var i__27015__auto___31585 = (0);
while(true){
if((i__27015__auto___31585 < len__27014__auto___31584)){
args31531.push((arguments[i__27015__auto___31585]));

var G__31586 = (i__27015__auto___31585 + (1));
i__27015__auto___31585 = G__31586;
continue;
} else {
}
break;
}

var G__31533 = args31531.length;
switch (G__31533) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31531.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30902__auto___31588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto___31588,tc,fc){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto___31588,tc,fc){
return (function (state_31559){
var state_val_31560 = (state_31559[(1)]);
if((state_val_31560 === (7))){
var inst_31555 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31561_31589 = state_31559__$1;
(statearr_31561_31589[(2)] = inst_31555);

(statearr_31561_31589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (1))){
var state_31559__$1 = state_31559;
var statearr_31562_31590 = state_31559__$1;
(statearr_31562_31590[(2)] = null);

(statearr_31562_31590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (4))){
var inst_31536 = (state_31559[(7)]);
var inst_31536__$1 = (state_31559[(2)]);
var inst_31537 = (inst_31536__$1 == null);
var state_31559__$1 = (function (){var statearr_31563 = state_31559;
(statearr_31563[(7)] = inst_31536__$1);

return statearr_31563;
})();
if(cljs.core.truth_(inst_31537)){
var statearr_31564_31591 = state_31559__$1;
(statearr_31564_31591[(1)] = (5));

} else {
var statearr_31565_31592 = state_31559__$1;
(statearr_31565_31592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (13))){
var state_31559__$1 = state_31559;
var statearr_31566_31593 = state_31559__$1;
(statearr_31566_31593[(2)] = null);

(statearr_31566_31593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (6))){
var inst_31536 = (state_31559[(7)]);
var inst_31542 = p.call(null,inst_31536);
var state_31559__$1 = state_31559;
if(cljs.core.truth_(inst_31542)){
var statearr_31567_31594 = state_31559__$1;
(statearr_31567_31594[(1)] = (9));

} else {
var statearr_31568_31595 = state_31559__$1;
(statearr_31568_31595[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (3))){
var inst_31557 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31559__$1,inst_31557);
} else {
if((state_val_31560 === (12))){
var state_31559__$1 = state_31559;
var statearr_31569_31596 = state_31559__$1;
(statearr_31569_31596[(2)] = null);

(statearr_31569_31596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (2))){
var state_31559__$1 = state_31559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31559__$1,(4),ch);
} else {
if((state_val_31560 === (11))){
var inst_31536 = (state_31559[(7)]);
var inst_31546 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31559__$1,(8),inst_31546,inst_31536);
} else {
if((state_val_31560 === (9))){
var state_31559__$1 = state_31559;
var statearr_31570_31597 = state_31559__$1;
(statearr_31570_31597[(2)] = tc);

(statearr_31570_31597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (5))){
var inst_31539 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31540 = cljs.core.async.close_BANG_.call(null,fc);
var state_31559__$1 = (function (){var statearr_31571 = state_31559;
(statearr_31571[(8)] = inst_31539);

return statearr_31571;
})();
var statearr_31572_31598 = state_31559__$1;
(statearr_31572_31598[(2)] = inst_31540);

(statearr_31572_31598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (14))){
var inst_31553 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31573_31599 = state_31559__$1;
(statearr_31573_31599[(2)] = inst_31553);

(statearr_31573_31599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (10))){
var state_31559__$1 = state_31559;
var statearr_31574_31600 = state_31559__$1;
(statearr_31574_31600[(2)] = fc);

(statearr_31574_31600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (8))){
var inst_31548 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
if(cljs.core.truth_(inst_31548)){
var statearr_31575_31601 = state_31559__$1;
(statearr_31575_31601[(1)] = (12));

} else {
var statearr_31576_31602 = state_31559__$1;
(statearr_31576_31602[(1)] = (13));

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
});})(c__30902__auto___31588,tc,fc))
;
return ((function (switch__30790__auto__,c__30902__auto___31588,tc,fc){
return (function() {
var cljs$core$async$state_machine__30791__auto__ = null;
var cljs$core$async$state_machine__30791__auto____0 = (function (){
var statearr_31580 = [null,null,null,null,null,null,null,null,null];
(statearr_31580[(0)] = cljs$core$async$state_machine__30791__auto__);

(statearr_31580[(1)] = (1));

return statearr_31580;
});
var cljs$core$async$state_machine__30791__auto____1 = (function (state_31559){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_31559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e31581){if((e31581 instanceof Object)){
var ex__30794__auto__ = e31581;
var statearr_31582_31603 = state_31559;
(statearr_31582_31603[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31604 = state_31559;
state_31559 = G__31604;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$state_machine__30791__auto__ = function(state_31559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30791__auto____1.call(this,state_31559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30791__auto____0;
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30791__auto____1;
return cljs$core$async$state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto___31588,tc,fc))
})();
var state__30904__auto__ = (function (){var statearr_31583 = f__30903__auto__.call(null);
(statearr_31583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___31588);

return statearr_31583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto___31588,tc,fc))
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
var c__30902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto__){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto__){
return (function (state_31668){
var state_val_31669 = (state_31668[(1)]);
if((state_val_31669 === (7))){
var inst_31664 = (state_31668[(2)]);
var state_31668__$1 = state_31668;
var statearr_31670_31691 = state_31668__$1;
(statearr_31670_31691[(2)] = inst_31664);

(statearr_31670_31691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (1))){
var inst_31648 = init;
var state_31668__$1 = (function (){var statearr_31671 = state_31668;
(statearr_31671[(7)] = inst_31648);

return statearr_31671;
})();
var statearr_31672_31692 = state_31668__$1;
(statearr_31672_31692[(2)] = null);

(statearr_31672_31692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (4))){
var inst_31651 = (state_31668[(8)]);
var inst_31651__$1 = (state_31668[(2)]);
var inst_31652 = (inst_31651__$1 == null);
var state_31668__$1 = (function (){var statearr_31673 = state_31668;
(statearr_31673[(8)] = inst_31651__$1);

return statearr_31673;
})();
if(cljs.core.truth_(inst_31652)){
var statearr_31674_31693 = state_31668__$1;
(statearr_31674_31693[(1)] = (5));

} else {
var statearr_31675_31694 = state_31668__$1;
(statearr_31675_31694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (6))){
var inst_31655 = (state_31668[(9)]);
var inst_31648 = (state_31668[(7)]);
var inst_31651 = (state_31668[(8)]);
var inst_31655__$1 = f.call(null,inst_31648,inst_31651);
var inst_31656 = cljs.core.reduced_QMARK_.call(null,inst_31655__$1);
var state_31668__$1 = (function (){var statearr_31676 = state_31668;
(statearr_31676[(9)] = inst_31655__$1);

return statearr_31676;
})();
if(inst_31656){
var statearr_31677_31695 = state_31668__$1;
(statearr_31677_31695[(1)] = (8));

} else {
var statearr_31678_31696 = state_31668__$1;
(statearr_31678_31696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (3))){
var inst_31666 = (state_31668[(2)]);
var state_31668__$1 = state_31668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31668__$1,inst_31666);
} else {
if((state_val_31669 === (2))){
var state_31668__$1 = state_31668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31668__$1,(4),ch);
} else {
if((state_val_31669 === (9))){
var inst_31655 = (state_31668[(9)]);
var inst_31648 = inst_31655;
var state_31668__$1 = (function (){var statearr_31679 = state_31668;
(statearr_31679[(7)] = inst_31648);

return statearr_31679;
})();
var statearr_31680_31697 = state_31668__$1;
(statearr_31680_31697[(2)] = null);

(statearr_31680_31697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (5))){
var inst_31648 = (state_31668[(7)]);
var state_31668__$1 = state_31668;
var statearr_31681_31698 = state_31668__$1;
(statearr_31681_31698[(2)] = inst_31648);

(statearr_31681_31698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (10))){
var inst_31662 = (state_31668[(2)]);
var state_31668__$1 = state_31668;
var statearr_31682_31699 = state_31668__$1;
(statearr_31682_31699[(2)] = inst_31662);

(statearr_31682_31699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (8))){
var inst_31655 = (state_31668[(9)]);
var inst_31658 = cljs.core.deref.call(null,inst_31655);
var state_31668__$1 = state_31668;
var statearr_31683_31700 = state_31668__$1;
(statearr_31683_31700[(2)] = inst_31658);

(statearr_31683_31700[(1)] = (10));


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
});})(c__30902__auto__))
;
return ((function (switch__30790__auto__,c__30902__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30791__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30791__auto____0 = (function (){
var statearr_31687 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31687[(0)] = cljs$core$async$reduce_$_state_machine__30791__auto__);

(statearr_31687[(1)] = (1));

return statearr_31687;
});
var cljs$core$async$reduce_$_state_machine__30791__auto____1 = (function (state_31668){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_31668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e31688){if((e31688 instanceof Object)){
var ex__30794__auto__ = e31688;
var statearr_31689_31701 = state_31668;
(statearr_31689_31701[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31702 = state_31668;
state_31668 = G__31702;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30791__auto__ = function(state_31668){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30791__auto____1.call(this,state_31668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30791__auto____0;
cljs$core$async$reduce_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30791__auto____1;
return cljs$core$async$reduce_$_state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto__))
})();
var state__30904__auto__ = (function (){var statearr_31690 = f__30903__auto__.call(null);
(statearr_31690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto__);

return statearr_31690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto__))
);

return c__30902__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__30902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto__,f__$1){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto__,f__$1){
return (function (state_31722){
var state_val_31723 = (state_31722[(1)]);
if((state_val_31723 === (1))){
var inst_31717 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31722__$1 = state_31722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31722__$1,(2),inst_31717);
} else {
if((state_val_31723 === (2))){
var inst_31719 = (state_31722[(2)]);
var inst_31720 = f__$1.call(null,inst_31719);
var state_31722__$1 = state_31722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31722__$1,inst_31720);
} else {
return null;
}
}
});})(c__30902__auto__,f__$1))
;
return ((function (switch__30790__auto__,c__30902__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30791__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30791__auto____0 = (function (){
var statearr_31727 = [null,null,null,null,null,null,null];
(statearr_31727[(0)] = cljs$core$async$transduce_$_state_machine__30791__auto__);

(statearr_31727[(1)] = (1));

return statearr_31727;
});
var cljs$core$async$transduce_$_state_machine__30791__auto____1 = (function (state_31722){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_31722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e31728){if((e31728 instanceof Object)){
var ex__30794__auto__ = e31728;
var statearr_31729_31731 = state_31722;
(statearr_31729_31731[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31732 = state_31722;
state_31722 = G__31732;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30791__auto__ = function(state_31722){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30791__auto____1.call(this,state_31722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30791__auto____0;
cljs$core$async$transduce_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30791__auto____1;
return cljs$core$async$transduce_$_state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto__,f__$1))
})();
var state__30904__auto__ = (function (){var statearr_31730 = f__30903__auto__.call(null);
(statearr_31730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto__);

return statearr_31730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto__,f__$1))
);

return c__30902__auto__;
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
var args31733 = [];
var len__27014__auto___31785 = arguments.length;
var i__27015__auto___31786 = (0);
while(true){
if((i__27015__auto___31786 < len__27014__auto___31785)){
args31733.push((arguments[i__27015__auto___31786]));

var G__31787 = (i__27015__auto___31786 + (1));
i__27015__auto___31786 = G__31787;
continue;
} else {
}
break;
}

var G__31735 = args31733.length;
switch (G__31735) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31733.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto__){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto__){
return (function (state_31760){
var state_val_31761 = (state_31760[(1)]);
if((state_val_31761 === (7))){
var inst_31742 = (state_31760[(2)]);
var state_31760__$1 = state_31760;
var statearr_31762_31789 = state_31760__$1;
(statearr_31762_31789[(2)] = inst_31742);

(statearr_31762_31789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31761 === (1))){
var inst_31736 = cljs.core.seq.call(null,coll);
var inst_31737 = inst_31736;
var state_31760__$1 = (function (){var statearr_31763 = state_31760;
(statearr_31763[(7)] = inst_31737);

return statearr_31763;
})();
var statearr_31764_31790 = state_31760__$1;
(statearr_31764_31790[(2)] = null);

(statearr_31764_31790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31761 === (4))){
var inst_31737 = (state_31760[(7)]);
var inst_31740 = cljs.core.first.call(null,inst_31737);
var state_31760__$1 = state_31760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31760__$1,(7),ch,inst_31740);
} else {
if((state_val_31761 === (13))){
var inst_31754 = (state_31760[(2)]);
var state_31760__$1 = state_31760;
var statearr_31765_31791 = state_31760__$1;
(statearr_31765_31791[(2)] = inst_31754);

(statearr_31765_31791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31761 === (6))){
var inst_31745 = (state_31760[(2)]);
var state_31760__$1 = state_31760;
if(cljs.core.truth_(inst_31745)){
var statearr_31766_31792 = state_31760__$1;
(statearr_31766_31792[(1)] = (8));

} else {
var statearr_31767_31793 = state_31760__$1;
(statearr_31767_31793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31761 === (3))){
var inst_31758 = (state_31760[(2)]);
var state_31760__$1 = state_31760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31760__$1,inst_31758);
} else {
if((state_val_31761 === (12))){
var state_31760__$1 = state_31760;
var statearr_31768_31794 = state_31760__$1;
(statearr_31768_31794[(2)] = null);

(statearr_31768_31794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31761 === (2))){
var inst_31737 = (state_31760[(7)]);
var state_31760__$1 = state_31760;
if(cljs.core.truth_(inst_31737)){
var statearr_31769_31795 = state_31760__$1;
(statearr_31769_31795[(1)] = (4));

} else {
var statearr_31770_31796 = state_31760__$1;
(statearr_31770_31796[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31761 === (11))){
var inst_31751 = cljs.core.async.close_BANG_.call(null,ch);
var state_31760__$1 = state_31760;
var statearr_31771_31797 = state_31760__$1;
(statearr_31771_31797[(2)] = inst_31751);

(statearr_31771_31797[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31761 === (9))){
var state_31760__$1 = state_31760;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31772_31798 = state_31760__$1;
(statearr_31772_31798[(1)] = (11));

} else {
var statearr_31773_31799 = state_31760__$1;
(statearr_31773_31799[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31761 === (5))){
var inst_31737 = (state_31760[(7)]);
var state_31760__$1 = state_31760;
var statearr_31774_31800 = state_31760__$1;
(statearr_31774_31800[(2)] = inst_31737);

(statearr_31774_31800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31761 === (10))){
var inst_31756 = (state_31760[(2)]);
var state_31760__$1 = state_31760;
var statearr_31775_31801 = state_31760__$1;
(statearr_31775_31801[(2)] = inst_31756);

(statearr_31775_31801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31761 === (8))){
var inst_31737 = (state_31760[(7)]);
var inst_31747 = cljs.core.next.call(null,inst_31737);
var inst_31737__$1 = inst_31747;
var state_31760__$1 = (function (){var statearr_31776 = state_31760;
(statearr_31776[(7)] = inst_31737__$1);

return statearr_31776;
})();
var statearr_31777_31802 = state_31760__$1;
(statearr_31777_31802[(2)] = null);

(statearr_31777_31802[(1)] = (2));


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
});})(c__30902__auto__))
;
return ((function (switch__30790__auto__,c__30902__auto__){
return (function() {
var cljs$core$async$state_machine__30791__auto__ = null;
var cljs$core$async$state_machine__30791__auto____0 = (function (){
var statearr_31781 = [null,null,null,null,null,null,null,null];
(statearr_31781[(0)] = cljs$core$async$state_machine__30791__auto__);

(statearr_31781[(1)] = (1));

return statearr_31781;
});
var cljs$core$async$state_machine__30791__auto____1 = (function (state_31760){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_31760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e31782){if((e31782 instanceof Object)){
var ex__30794__auto__ = e31782;
var statearr_31783_31803 = state_31760;
(statearr_31783_31803[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31804 = state_31760;
state_31760 = G__31804;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$state_machine__30791__auto__ = function(state_31760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30791__auto____1.call(this,state_31760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30791__auto____0;
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30791__auto____1;
return cljs$core$async$state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto__))
})();
var state__30904__auto__ = (function (){var statearr_31784 = f__30903__auto__.call(null);
(statearr_31784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto__);

return statearr_31784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto__))
);

return c__30902__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async32030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32030 = (function (mult,ch,cs,meta32031){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32031 = meta32031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32032,meta32031__$1){
var self__ = this;
var _32032__$1 = this;
return (new cljs.core.async.t_cljs$core$async32030(self__.mult,self__.ch,self__.cs,meta32031__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32032){
var self__ = this;
var _32032__$1 = this;
return self__.meta32031;
});})(cs))
;

cljs.core.async.t_cljs$core$async32030.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32030.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32030.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async32030.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32030.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32030.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32030.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32031","meta32031",-1781150436,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32030";

cljs.core.async.t_cljs$core$async32030.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async32030");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32030 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32030(mult__$1,ch__$1,cs__$1,meta32031){
return (new cljs.core.async.t_cljs$core$async32030(mult__$1,ch__$1,cs__$1,meta32031));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32030(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30902__auto___32255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto___32255,cs,m,dchan,dctr,done){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto___32255,cs,m,dchan,dctr,done){
return (function (state_32167){
var state_val_32168 = (state_32167[(1)]);
if((state_val_32168 === (7))){
var inst_32163 = (state_32167[(2)]);
var state_32167__$1 = state_32167;
var statearr_32169_32256 = state_32167__$1;
(statearr_32169_32256[(2)] = inst_32163);

(statearr_32169_32256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (20))){
var inst_32066 = (state_32167[(7)]);
var inst_32078 = cljs.core.first.call(null,inst_32066);
var inst_32079 = cljs.core.nth.call(null,inst_32078,(0),null);
var inst_32080 = cljs.core.nth.call(null,inst_32078,(1),null);
var state_32167__$1 = (function (){var statearr_32170 = state_32167;
(statearr_32170[(8)] = inst_32079);

return statearr_32170;
})();
if(cljs.core.truth_(inst_32080)){
var statearr_32171_32257 = state_32167__$1;
(statearr_32171_32257[(1)] = (22));

} else {
var statearr_32172_32258 = state_32167__$1;
(statearr_32172_32258[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (27))){
var inst_32035 = (state_32167[(9)]);
var inst_32108 = (state_32167[(10)]);
var inst_32115 = (state_32167[(11)]);
var inst_32110 = (state_32167[(12)]);
var inst_32115__$1 = cljs.core._nth.call(null,inst_32108,inst_32110);
var inst_32116 = cljs.core.async.put_BANG_.call(null,inst_32115__$1,inst_32035,done);
var state_32167__$1 = (function (){var statearr_32173 = state_32167;
(statearr_32173[(11)] = inst_32115__$1);

return statearr_32173;
})();
if(cljs.core.truth_(inst_32116)){
var statearr_32174_32259 = state_32167__$1;
(statearr_32174_32259[(1)] = (30));

} else {
var statearr_32175_32260 = state_32167__$1;
(statearr_32175_32260[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (1))){
var state_32167__$1 = state_32167;
var statearr_32176_32261 = state_32167__$1;
(statearr_32176_32261[(2)] = null);

(statearr_32176_32261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (24))){
var inst_32066 = (state_32167[(7)]);
var inst_32085 = (state_32167[(2)]);
var inst_32086 = cljs.core.next.call(null,inst_32066);
var inst_32044 = inst_32086;
var inst_32045 = null;
var inst_32046 = (0);
var inst_32047 = (0);
var state_32167__$1 = (function (){var statearr_32177 = state_32167;
(statearr_32177[(13)] = inst_32046);

(statearr_32177[(14)] = inst_32044);

(statearr_32177[(15)] = inst_32047);

(statearr_32177[(16)] = inst_32085);

(statearr_32177[(17)] = inst_32045);

return statearr_32177;
})();
var statearr_32178_32262 = state_32167__$1;
(statearr_32178_32262[(2)] = null);

(statearr_32178_32262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (39))){
var state_32167__$1 = state_32167;
var statearr_32182_32263 = state_32167__$1;
(statearr_32182_32263[(2)] = null);

(statearr_32182_32263[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (4))){
var inst_32035 = (state_32167[(9)]);
var inst_32035__$1 = (state_32167[(2)]);
var inst_32036 = (inst_32035__$1 == null);
var state_32167__$1 = (function (){var statearr_32183 = state_32167;
(statearr_32183[(9)] = inst_32035__$1);

return statearr_32183;
})();
if(cljs.core.truth_(inst_32036)){
var statearr_32184_32264 = state_32167__$1;
(statearr_32184_32264[(1)] = (5));

} else {
var statearr_32185_32265 = state_32167__$1;
(statearr_32185_32265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (15))){
var inst_32046 = (state_32167[(13)]);
var inst_32044 = (state_32167[(14)]);
var inst_32047 = (state_32167[(15)]);
var inst_32045 = (state_32167[(17)]);
var inst_32062 = (state_32167[(2)]);
var inst_32063 = (inst_32047 + (1));
var tmp32179 = inst_32046;
var tmp32180 = inst_32044;
var tmp32181 = inst_32045;
var inst_32044__$1 = tmp32180;
var inst_32045__$1 = tmp32181;
var inst_32046__$1 = tmp32179;
var inst_32047__$1 = inst_32063;
var state_32167__$1 = (function (){var statearr_32186 = state_32167;
(statearr_32186[(13)] = inst_32046__$1);

(statearr_32186[(14)] = inst_32044__$1);

(statearr_32186[(15)] = inst_32047__$1);

(statearr_32186[(18)] = inst_32062);

(statearr_32186[(17)] = inst_32045__$1);

return statearr_32186;
})();
var statearr_32187_32266 = state_32167__$1;
(statearr_32187_32266[(2)] = null);

(statearr_32187_32266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (21))){
var inst_32089 = (state_32167[(2)]);
var state_32167__$1 = state_32167;
var statearr_32191_32267 = state_32167__$1;
(statearr_32191_32267[(2)] = inst_32089);

(statearr_32191_32267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (31))){
var inst_32115 = (state_32167[(11)]);
var inst_32119 = done.call(null,null);
var inst_32120 = cljs.core.async.untap_STAR_.call(null,m,inst_32115);
var state_32167__$1 = (function (){var statearr_32192 = state_32167;
(statearr_32192[(19)] = inst_32119);

return statearr_32192;
})();
var statearr_32193_32268 = state_32167__$1;
(statearr_32193_32268[(2)] = inst_32120);

(statearr_32193_32268[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (32))){
var inst_32108 = (state_32167[(10)]);
var inst_32109 = (state_32167[(20)]);
var inst_32107 = (state_32167[(21)]);
var inst_32110 = (state_32167[(12)]);
var inst_32122 = (state_32167[(2)]);
var inst_32123 = (inst_32110 + (1));
var tmp32188 = inst_32108;
var tmp32189 = inst_32109;
var tmp32190 = inst_32107;
var inst_32107__$1 = tmp32190;
var inst_32108__$1 = tmp32188;
var inst_32109__$1 = tmp32189;
var inst_32110__$1 = inst_32123;
var state_32167__$1 = (function (){var statearr_32194 = state_32167;
(statearr_32194[(10)] = inst_32108__$1);

(statearr_32194[(22)] = inst_32122);

(statearr_32194[(20)] = inst_32109__$1);

(statearr_32194[(21)] = inst_32107__$1);

(statearr_32194[(12)] = inst_32110__$1);

return statearr_32194;
})();
var statearr_32195_32269 = state_32167__$1;
(statearr_32195_32269[(2)] = null);

(statearr_32195_32269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (40))){
var inst_32135 = (state_32167[(23)]);
var inst_32139 = done.call(null,null);
var inst_32140 = cljs.core.async.untap_STAR_.call(null,m,inst_32135);
var state_32167__$1 = (function (){var statearr_32196 = state_32167;
(statearr_32196[(24)] = inst_32139);

return statearr_32196;
})();
var statearr_32197_32270 = state_32167__$1;
(statearr_32197_32270[(2)] = inst_32140);

(statearr_32197_32270[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (33))){
var inst_32126 = (state_32167[(25)]);
var inst_32128 = cljs.core.chunked_seq_QMARK_.call(null,inst_32126);
var state_32167__$1 = state_32167;
if(inst_32128){
var statearr_32198_32271 = state_32167__$1;
(statearr_32198_32271[(1)] = (36));

} else {
var statearr_32199_32272 = state_32167__$1;
(statearr_32199_32272[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (13))){
var inst_32056 = (state_32167[(26)]);
var inst_32059 = cljs.core.async.close_BANG_.call(null,inst_32056);
var state_32167__$1 = state_32167;
var statearr_32200_32273 = state_32167__$1;
(statearr_32200_32273[(2)] = inst_32059);

(statearr_32200_32273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (22))){
var inst_32079 = (state_32167[(8)]);
var inst_32082 = cljs.core.async.close_BANG_.call(null,inst_32079);
var state_32167__$1 = state_32167;
var statearr_32201_32274 = state_32167__$1;
(statearr_32201_32274[(2)] = inst_32082);

(statearr_32201_32274[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (36))){
var inst_32126 = (state_32167[(25)]);
var inst_32130 = cljs.core.chunk_first.call(null,inst_32126);
var inst_32131 = cljs.core.chunk_rest.call(null,inst_32126);
var inst_32132 = cljs.core.count.call(null,inst_32130);
var inst_32107 = inst_32131;
var inst_32108 = inst_32130;
var inst_32109 = inst_32132;
var inst_32110 = (0);
var state_32167__$1 = (function (){var statearr_32202 = state_32167;
(statearr_32202[(10)] = inst_32108);

(statearr_32202[(20)] = inst_32109);

(statearr_32202[(21)] = inst_32107);

(statearr_32202[(12)] = inst_32110);

return statearr_32202;
})();
var statearr_32203_32275 = state_32167__$1;
(statearr_32203_32275[(2)] = null);

(statearr_32203_32275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (41))){
var inst_32126 = (state_32167[(25)]);
var inst_32142 = (state_32167[(2)]);
var inst_32143 = cljs.core.next.call(null,inst_32126);
var inst_32107 = inst_32143;
var inst_32108 = null;
var inst_32109 = (0);
var inst_32110 = (0);
var state_32167__$1 = (function (){var statearr_32204 = state_32167;
(statearr_32204[(27)] = inst_32142);

(statearr_32204[(10)] = inst_32108);

(statearr_32204[(20)] = inst_32109);

(statearr_32204[(21)] = inst_32107);

(statearr_32204[(12)] = inst_32110);

return statearr_32204;
})();
var statearr_32205_32276 = state_32167__$1;
(statearr_32205_32276[(2)] = null);

(statearr_32205_32276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (43))){
var state_32167__$1 = state_32167;
var statearr_32206_32277 = state_32167__$1;
(statearr_32206_32277[(2)] = null);

(statearr_32206_32277[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (29))){
var inst_32151 = (state_32167[(2)]);
var state_32167__$1 = state_32167;
var statearr_32207_32278 = state_32167__$1;
(statearr_32207_32278[(2)] = inst_32151);

(statearr_32207_32278[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (44))){
var inst_32160 = (state_32167[(2)]);
var state_32167__$1 = (function (){var statearr_32208 = state_32167;
(statearr_32208[(28)] = inst_32160);

return statearr_32208;
})();
var statearr_32209_32279 = state_32167__$1;
(statearr_32209_32279[(2)] = null);

(statearr_32209_32279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (6))){
var inst_32099 = (state_32167[(29)]);
var inst_32098 = cljs.core.deref.call(null,cs);
var inst_32099__$1 = cljs.core.keys.call(null,inst_32098);
var inst_32100 = cljs.core.count.call(null,inst_32099__$1);
var inst_32101 = cljs.core.reset_BANG_.call(null,dctr,inst_32100);
var inst_32106 = cljs.core.seq.call(null,inst_32099__$1);
var inst_32107 = inst_32106;
var inst_32108 = null;
var inst_32109 = (0);
var inst_32110 = (0);
var state_32167__$1 = (function (){var statearr_32210 = state_32167;
(statearr_32210[(30)] = inst_32101);

(statearr_32210[(10)] = inst_32108);

(statearr_32210[(29)] = inst_32099__$1);

(statearr_32210[(20)] = inst_32109);

(statearr_32210[(21)] = inst_32107);

(statearr_32210[(12)] = inst_32110);

return statearr_32210;
})();
var statearr_32211_32280 = state_32167__$1;
(statearr_32211_32280[(2)] = null);

(statearr_32211_32280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (28))){
var inst_32126 = (state_32167[(25)]);
var inst_32107 = (state_32167[(21)]);
var inst_32126__$1 = cljs.core.seq.call(null,inst_32107);
var state_32167__$1 = (function (){var statearr_32212 = state_32167;
(statearr_32212[(25)] = inst_32126__$1);

return statearr_32212;
})();
if(inst_32126__$1){
var statearr_32213_32281 = state_32167__$1;
(statearr_32213_32281[(1)] = (33));

} else {
var statearr_32214_32282 = state_32167__$1;
(statearr_32214_32282[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (25))){
var inst_32109 = (state_32167[(20)]);
var inst_32110 = (state_32167[(12)]);
var inst_32112 = (inst_32110 < inst_32109);
var inst_32113 = inst_32112;
var state_32167__$1 = state_32167;
if(cljs.core.truth_(inst_32113)){
var statearr_32215_32283 = state_32167__$1;
(statearr_32215_32283[(1)] = (27));

} else {
var statearr_32216_32284 = state_32167__$1;
(statearr_32216_32284[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (34))){
var state_32167__$1 = state_32167;
var statearr_32217_32285 = state_32167__$1;
(statearr_32217_32285[(2)] = null);

(statearr_32217_32285[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (17))){
var state_32167__$1 = state_32167;
var statearr_32218_32286 = state_32167__$1;
(statearr_32218_32286[(2)] = null);

(statearr_32218_32286[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (3))){
var inst_32165 = (state_32167[(2)]);
var state_32167__$1 = state_32167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32167__$1,inst_32165);
} else {
if((state_val_32168 === (12))){
var inst_32094 = (state_32167[(2)]);
var state_32167__$1 = state_32167;
var statearr_32219_32287 = state_32167__$1;
(statearr_32219_32287[(2)] = inst_32094);

(statearr_32219_32287[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (2))){
var state_32167__$1 = state_32167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32167__$1,(4),ch);
} else {
if((state_val_32168 === (23))){
var state_32167__$1 = state_32167;
var statearr_32220_32288 = state_32167__$1;
(statearr_32220_32288[(2)] = null);

(statearr_32220_32288[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (35))){
var inst_32149 = (state_32167[(2)]);
var state_32167__$1 = state_32167;
var statearr_32221_32289 = state_32167__$1;
(statearr_32221_32289[(2)] = inst_32149);

(statearr_32221_32289[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (19))){
var inst_32066 = (state_32167[(7)]);
var inst_32070 = cljs.core.chunk_first.call(null,inst_32066);
var inst_32071 = cljs.core.chunk_rest.call(null,inst_32066);
var inst_32072 = cljs.core.count.call(null,inst_32070);
var inst_32044 = inst_32071;
var inst_32045 = inst_32070;
var inst_32046 = inst_32072;
var inst_32047 = (0);
var state_32167__$1 = (function (){var statearr_32222 = state_32167;
(statearr_32222[(13)] = inst_32046);

(statearr_32222[(14)] = inst_32044);

(statearr_32222[(15)] = inst_32047);

(statearr_32222[(17)] = inst_32045);

return statearr_32222;
})();
var statearr_32223_32290 = state_32167__$1;
(statearr_32223_32290[(2)] = null);

(statearr_32223_32290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (11))){
var inst_32044 = (state_32167[(14)]);
var inst_32066 = (state_32167[(7)]);
var inst_32066__$1 = cljs.core.seq.call(null,inst_32044);
var state_32167__$1 = (function (){var statearr_32224 = state_32167;
(statearr_32224[(7)] = inst_32066__$1);

return statearr_32224;
})();
if(inst_32066__$1){
var statearr_32225_32291 = state_32167__$1;
(statearr_32225_32291[(1)] = (16));

} else {
var statearr_32226_32292 = state_32167__$1;
(statearr_32226_32292[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (9))){
var inst_32096 = (state_32167[(2)]);
var state_32167__$1 = state_32167;
var statearr_32227_32293 = state_32167__$1;
(statearr_32227_32293[(2)] = inst_32096);

(statearr_32227_32293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (5))){
var inst_32042 = cljs.core.deref.call(null,cs);
var inst_32043 = cljs.core.seq.call(null,inst_32042);
var inst_32044 = inst_32043;
var inst_32045 = null;
var inst_32046 = (0);
var inst_32047 = (0);
var state_32167__$1 = (function (){var statearr_32228 = state_32167;
(statearr_32228[(13)] = inst_32046);

(statearr_32228[(14)] = inst_32044);

(statearr_32228[(15)] = inst_32047);

(statearr_32228[(17)] = inst_32045);

return statearr_32228;
})();
var statearr_32229_32294 = state_32167__$1;
(statearr_32229_32294[(2)] = null);

(statearr_32229_32294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (14))){
var state_32167__$1 = state_32167;
var statearr_32230_32295 = state_32167__$1;
(statearr_32230_32295[(2)] = null);

(statearr_32230_32295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (45))){
var inst_32157 = (state_32167[(2)]);
var state_32167__$1 = state_32167;
var statearr_32231_32296 = state_32167__$1;
(statearr_32231_32296[(2)] = inst_32157);

(statearr_32231_32296[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (26))){
var inst_32099 = (state_32167[(29)]);
var inst_32153 = (state_32167[(2)]);
var inst_32154 = cljs.core.seq.call(null,inst_32099);
var state_32167__$1 = (function (){var statearr_32232 = state_32167;
(statearr_32232[(31)] = inst_32153);

return statearr_32232;
})();
if(inst_32154){
var statearr_32233_32297 = state_32167__$1;
(statearr_32233_32297[(1)] = (42));

} else {
var statearr_32234_32298 = state_32167__$1;
(statearr_32234_32298[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (16))){
var inst_32066 = (state_32167[(7)]);
var inst_32068 = cljs.core.chunked_seq_QMARK_.call(null,inst_32066);
var state_32167__$1 = state_32167;
if(inst_32068){
var statearr_32235_32299 = state_32167__$1;
(statearr_32235_32299[(1)] = (19));

} else {
var statearr_32236_32300 = state_32167__$1;
(statearr_32236_32300[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (38))){
var inst_32146 = (state_32167[(2)]);
var state_32167__$1 = state_32167;
var statearr_32237_32301 = state_32167__$1;
(statearr_32237_32301[(2)] = inst_32146);

(statearr_32237_32301[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (30))){
var state_32167__$1 = state_32167;
var statearr_32238_32302 = state_32167__$1;
(statearr_32238_32302[(2)] = null);

(statearr_32238_32302[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (10))){
var inst_32047 = (state_32167[(15)]);
var inst_32045 = (state_32167[(17)]);
var inst_32055 = cljs.core._nth.call(null,inst_32045,inst_32047);
var inst_32056 = cljs.core.nth.call(null,inst_32055,(0),null);
var inst_32057 = cljs.core.nth.call(null,inst_32055,(1),null);
var state_32167__$1 = (function (){var statearr_32239 = state_32167;
(statearr_32239[(26)] = inst_32056);

return statearr_32239;
})();
if(cljs.core.truth_(inst_32057)){
var statearr_32240_32303 = state_32167__$1;
(statearr_32240_32303[(1)] = (13));

} else {
var statearr_32241_32304 = state_32167__$1;
(statearr_32241_32304[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (18))){
var inst_32092 = (state_32167[(2)]);
var state_32167__$1 = state_32167;
var statearr_32242_32305 = state_32167__$1;
(statearr_32242_32305[(2)] = inst_32092);

(statearr_32242_32305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (42))){
var state_32167__$1 = state_32167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32167__$1,(45),dchan);
} else {
if((state_val_32168 === (37))){
var inst_32035 = (state_32167[(9)]);
var inst_32126 = (state_32167[(25)]);
var inst_32135 = (state_32167[(23)]);
var inst_32135__$1 = cljs.core.first.call(null,inst_32126);
var inst_32136 = cljs.core.async.put_BANG_.call(null,inst_32135__$1,inst_32035,done);
var state_32167__$1 = (function (){var statearr_32243 = state_32167;
(statearr_32243[(23)] = inst_32135__$1);

return statearr_32243;
})();
if(cljs.core.truth_(inst_32136)){
var statearr_32244_32306 = state_32167__$1;
(statearr_32244_32306[(1)] = (39));

} else {
var statearr_32245_32307 = state_32167__$1;
(statearr_32245_32307[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (8))){
var inst_32046 = (state_32167[(13)]);
var inst_32047 = (state_32167[(15)]);
var inst_32049 = (inst_32047 < inst_32046);
var inst_32050 = inst_32049;
var state_32167__$1 = state_32167;
if(cljs.core.truth_(inst_32050)){
var statearr_32246_32308 = state_32167__$1;
(statearr_32246_32308[(1)] = (10));

} else {
var statearr_32247_32309 = state_32167__$1;
(statearr_32247_32309[(1)] = (11));

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
});})(c__30902__auto___32255,cs,m,dchan,dctr,done))
;
return ((function (switch__30790__auto__,c__30902__auto___32255,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30791__auto__ = null;
var cljs$core$async$mult_$_state_machine__30791__auto____0 = (function (){
var statearr_32251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32251[(0)] = cljs$core$async$mult_$_state_machine__30791__auto__);

(statearr_32251[(1)] = (1));

return statearr_32251;
});
var cljs$core$async$mult_$_state_machine__30791__auto____1 = (function (state_32167){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_32167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e32252){if((e32252 instanceof Object)){
var ex__30794__auto__ = e32252;
var statearr_32253_32310 = state_32167;
(statearr_32253_32310[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32311 = state_32167;
state_32167 = G__32311;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30791__auto__ = function(state_32167){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30791__auto____1.call(this,state_32167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30791__auto____0;
cljs$core$async$mult_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30791__auto____1;
return cljs$core$async$mult_$_state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto___32255,cs,m,dchan,dctr,done))
})();
var state__30904__auto__ = (function (){var statearr_32254 = f__30903__auto__.call(null);
(statearr_32254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___32255);

return statearr_32254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto___32255,cs,m,dchan,dctr,done))
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
var args32312 = [];
var len__27014__auto___32315 = arguments.length;
var i__27015__auto___32316 = (0);
while(true){
if((i__27015__auto___32316 < len__27014__auto___32315)){
args32312.push((arguments[i__27015__auto___32316]));

var G__32317 = (i__27015__auto___32316 + (1));
i__27015__auto___32316 = G__32317;
continue;
} else {
}
break;
}

var G__32314 = args32312.length;
switch (G__32314) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32312.length)].join('')));

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
var len__27014__auto___32329 = arguments.length;
var i__27015__auto___32330 = (0);
while(true){
if((i__27015__auto___32330 < len__27014__auto___32329)){
args__27021__auto__.push((arguments[i__27015__auto___32330]));

var G__32331 = (i__27015__auto___32330 + (1));
i__27015__auto___32330 = G__32331;
continue;
} else {
}
break;
}

var argseq__27022__auto__ = ((((3) < args__27021__auto__.length))?(new cljs.core.IndexedSeq(args__27021__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27022__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32323){
var map__32324 = p__32323;
var map__32324__$1 = ((((!((map__32324 == null)))?((((map__32324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32324):map__32324);
var opts = map__32324__$1;
var statearr_32326_32332 = state;
(statearr_32326_32332[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32324,map__32324__$1,opts){
return (function (val){
var statearr_32327_32333 = state;
(statearr_32327_32333[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32324,map__32324__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32328_32334 = state;
(statearr_32328_32334[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32319){
var G__32320 = cljs.core.first.call(null,seq32319);
var seq32319__$1 = cljs.core.next.call(null,seq32319);
var G__32321 = cljs.core.first.call(null,seq32319__$1);
var seq32319__$2 = cljs.core.next.call(null,seq32319__$1);
var G__32322 = cljs.core.first.call(null,seq32319__$2);
var seq32319__$3 = cljs.core.next.call(null,seq32319__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32320,G__32321,G__32322,seq32319__$3);
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
if(typeof cljs.core.async.t_cljs$core$async32500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32500 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32501){
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
this.meta32501 = meta32501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32502,meta32501__$1){
var self__ = this;
var _32502__$1 = this;
return (new cljs.core.async.t_cljs$core$async32500(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32501__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32502){
var self__ = this;
var _32502__$1 = this;
return self__.meta32501;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32500.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32501","meta32501",-69656207,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32500.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32500";

cljs.core.async.t_cljs$core$async32500.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async32500");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32500 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32500(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32501){
return (new cljs.core.async.t_cljs$core$async32500(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32501));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32500(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30902__auto___32665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto___32665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto___32665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32602){
var state_val_32603 = (state_32602[(1)]);
if((state_val_32603 === (7))){
var inst_32518 = (state_32602[(2)]);
var state_32602__$1 = state_32602;
var statearr_32604_32666 = state_32602__$1;
(statearr_32604_32666[(2)] = inst_32518);

(statearr_32604_32666[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (20))){
var inst_32530 = (state_32602[(7)]);
var state_32602__$1 = state_32602;
var statearr_32605_32667 = state_32602__$1;
(statearr_32605_32667[(2)] = inst_32530);

(statearr_32605_32667[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (27))){
var state_32602__$1 = state_32602;
var statearr_32606_32668 = state_32602__$1;
(statearr_32606_32668[(2)] = null);

(statearr_32606_32668[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (1))){
var inst_32506 = (state_32602[(8)]);
var inst_32506__$1 = calc_state.call(null);
var inst_32508 = (inst_32506__$1 == null);
var inst_32509 = cljs.core.not.call(null,inst_32508);
var state_32602__$1 = (function (){var statearr_32607 = state_32602;
(statearr_32607[(8)] = inst_32506__$1);

return statearr_32607;
})();
if(inst_32509){
var statearr_32608_32669 = state_32602__$1;
(statearr_32608_32669[(1)] = (2));

} else {
var statearr_32609_32670 = state_32602__$1;
(statearr_32609_32670[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (24))){
var inst_32562 = (state_32602[(9)]);
var inst_32576 = (state_32602[(10)]);
var inst_32553 = (state_32602[(11)]);
var inst_32576__$1 = inst_32553.call(null,inst_32562);
var state_32602__$1 = (function (){var statearr_32610 = state_32602;
(statearr_32610[(10)] = inst_32576__$1);

return statearr_32610;
})();
if(cljs.core.truth_(inst_32576__$1)){
var statearr_32611_32671 = state_32602__$1;
(statearr_32611_32671[(1)] = (29));

} else {
var statearr_32612_32672 = state_32602__$1;
(statearr_32612_32672[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (4))){
var inst_32521 = (state_32602[(2)]);
var state_32602__$1 = state_32602;
if(cljs.core.truth_(inst_32521)){
var statearr_32613_32673 = state_32602__$1;
(statearr_32613_32673[(1)] = (8));

} else {
var statearr_32614_32674 = state_32602__$1;
(statearr_32614_32674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (15))){
var inst_32547 = (state_32602[(2)]);
var state_32602__$1 = state_32602;
if(cljs.core.truth_(inst_32547)){
var statearr_32615_32675 = state_32602__$1;
(statearr_32615_32675[(1)] = (19));

} else {
var statearr_32616_32676 = state_32602__$1;
(statearr_32616_32676[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (21))){
var inst_32552 = (state_32602[(12)]);
var inst_32552__$1 = (state_32602[(2)]);
var inst_32553 = cljs.core.get.call(null,inst_32552__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32554 = cljs.core.get.call(null,inst_32552__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32555 = cljs.core.get.call(null,inst_32552__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32602__$1 = (function (){var statearr_32617 = state_32602;
(statearr_32617[(12)] = inst_32552__$1);

(statearr_32617[(13)] = inst_32554);

(statearr_32617[(11)] = inst_32553);

return statearr_32617;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32602__$1,(22),inst_32555);
} else {
if((state_val_32603 === (31))){
var inst_32584 = (state_32602[(2)]);
var state_32602__$1 = state_32602;
if(cljs.core.truth_(inst_32584)){
var statearr_32618_32677 = state_32602__$1;
(statearr_32618_32677[(1)] = (32));

} else {
var statearr_32619_32678 = state_32602__$1;
(statearr_32619_32678[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (32))){
var inst_32561 = (state_32602[(14)]);
var state_32602__$1 = state_32602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32602__$1,(35),out,inst_32561);
} else {
if((state_val_32603 === (33))){
var inst_32552 = (state_32602[(12)]);
var inst_32530 = inst_32552;
var state_32602__$1 = (function (){var statearr_32620 = state_32602;
(statearr_32620[(7)] = inst_32530);

return statearr_32620;
})();
var statearr_32621_32679 = state_32602__$1;
(statearr_32621_32679[(2)] = null);

(statearr_32621_32679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (13))){
var inst_32530 = (state_32602[(7)]);
var inst_32537 = inst_32530.cljs$lang$protocol_mask$partition0$;
var inst_32538 = (inst_32537 & (64));
var inst_32539 = inst_32530.cljs$core$ISeq$;
var inst_32540 = (inst_32538) || (inst_32539);
var state_32602__$1 = state_32602;
if(cljs.core.truth_(inst_32540)){
var statearr_32622_32680 = state_32602__$1;
(statearr_32622_32680[(1)] = (16));

} else {
var statearr_32623_32681 = state_32602__$1;
(statearr_32623_32681[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (22))){
var inst_32562 = (state_32602[(9)]);
var inst_32561 = (state_32602[(14)]);
var inst_32560 = (state_32602[(2)]);
var inst_32561__$1 = cljs.core.nth.call(null,inst_32560,(0),null);
var inst_32562__$1 = cljs.core.nth.call(null,inst_32560,(1),null);
var inst_32563 = (inst_32561__$1 == null);
var inst_32564 = cljs.core._EQ_.call(null,inst_32562__$1,change);
var inst_32565 = (inst_32563) || (inst_32564);
var state_32602__$1 = (function (){var statearr_32624 = state_32602;
(statearr_32624[(9)] = inst_32562__$1);

(statearr_32624[(14)] = inst_32561__$1);

return statearr_32624;
})();
if(cljs.core.truth_(inst_32565)){
var statearr_32625_32682 = state_32602__$1;
(statearr_32625_32682[(1)] = (23));

} else {
var statearr_32626_32683 = state_32602__$1;
(statearr_32626_32683[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (36))){
var inst_32552 = (state_32602[(12)]);
var inst_32530 = inst_32552;
var state_32602__$1 = (function (){var statearr_32627 = state_32602;
(statearr_32627[(7)] = inst_32530);

return statearr_32627;
})();
var statearr_32628_32684 = state_32602__$1;
(statearr_32628_32684[(2)] = null);

(statearr_32628_32684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (29))){
var inst_32576 = (state_32602[(10)]);
var state_32602__$1 = state_32602;
var statearr_32629_32685 = state_32602__$1;
(statearr_32629_32685[(2)] = inst_32576);

(statearr_32629_32685[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (6))){
var state_32602__$1 = state_32602;
var statearr_32630_32686 = state_32602__$1;
(statearr_32630_32686[(2)] = false);

(statearr_32630_32686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (28))){
var inst_32572 = (state_32602[(2)]);
var inst_32573 = calc_state.call(null);
var inst_32530 = inst_32573;
var state_32602__$1 = (function (){var statearr_32631 = state_32602;
(statearr_32631[(15)] = inst_32572);

(statearr_32631[(7)] = inst_32530);

return statearr_32631;
})();
var statearr_32632_32687 = state_32602__$1;
(statearr_32632_32687[(2)] = null);

(statearr_32632_32687[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (25))){
var inst_32598 = (state_32602[(2)]);
var state_32602__$1 = state_32602;
var statearr_32633_32688 = state_32602__$1;
(statearr_32633_32688[(2)] = inst_32598);

(statearr_32633_32688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (34))){
var inst_32596 = (state_32602[(2)]);
var state_32602__$1 = state_32602;
var statearr_32634_32689 = state_32602__$1;
(statearr_32634_32689[(2)] = inst_32596);

(statearr_32634_32689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (17))){
var state_32602__$1 = state_32602;
var statearr_32635_32690 = state_32602__$1;
(statearr_32635_32690[(2)] = false);

(statearr_32635_32690[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (3))){
var state_32602__$1 = state_32602;
var statearr_32636_32691 = state_32602__$1;
(statearr_32636_32691[(2)] = false);

(statearr_32636_32691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (12))){
var inst_32600 = (state_32602[(2)]);
var state_32602__$1 = state_32602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32602__$1,inst_32600);
} else {
if((state_val_32603 === (2))){
var inst_32506 = (state_32602[(8)]);
var inst_32511 = inst_32506.cljs$lang$protocol_mask$partition0$;
var inst_32512 = (inst_32511 & (64));
var inst_32513 = inst_32506.cljs$core$ISeq$;
var inst_32514 = (inst_32512) || (inst_32513);
var state_32602__$1 = state_32602;
if(cljs.core.truth_(inst_32514)){
var statearr_32637_32692 = state_32602__$1;
(statearr_32637_32692[(1)] = (5));

} else {
var statearr_32638_32693 = state_32602__$1;
(statearr_32638_32693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (23))){
var inst_32561 = (state_32602[(14)]);
var inst_32567 = (inst_32561 == null);
var state_32602__$1 = state_32602;
if(cljs.core.truth_(inst_32567)){
var statearr_32639_32694 = state_32602__$1;
(statearr_32639_32694[(1)] = (26));

} else {
var statearr_32640_32695 = state_32602__$1;
(statearr_32640_32695[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (35))){
var inst_32587 = (state_32602[(2)]);
var state_32602__$1 = state_32602;
if(cljs.core.truth_(inst_32587)){
var statearr_32641_32696 = state_32602__$1;
(statearr_32641_32696[(1)] = (36));

} else {
var statearr_32642_32697 = state_32602__$1;
(statearr_32642_32697[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (19))){
var inst_32530 = (state_32602[(7)]);
var inst_32549 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32530);
var state_32602__$1 = state_32602;
var statearr_32643_32698 = state_32602__$1;
(statearr_32643_32698[(2)] = inst_32549);

(statearr_32643_32698[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (11))){
var inst_32530 = (state_32602[(7)]);
var inst_32534 = (inst_32530 == null);
var inst_32535 = cljs.core.not.call(null,inst_32534);
var state_32602__$1 = state_32602;
if(inst_32535){
var statearr_32644_32699 = state_32602__$1;
(statearr_32644_32699[(1)] = (13));

} else {
var statearr_32645_32700 = state_32602__$1;
(statearr_32645_32700[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (9))){
var inst_32506 = (state_32602[(8)]);
var state_32602__$1 = state_32602;
var statearr_32646_32701 = state_32602__$1;
(statearr_32646_32701[(2)] = inst_32506);

(statearr_32646_32701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (5))){
var state_32602__$1 = state_32602;
var statearr_32647_32702 = state_32602__$1;
(statearr_32647_32702[(2)] = true);

(statearr_32647_32702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (14))){
var state_32602__$1 = state_32602;
var statearr_32648_32703 = state_32602__$1;
(statearr_32648_32703[(2)] = false);

(statearr_32648_32703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (26))){
var inst_32562 = (state_32602[(9)]);
var inst_32569 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32562);
var state_32602__$1 = state_32602;
var statearr_32649_32704 = state_32602__$1;
(statearr_32649_32704[(2)] = inst_32569);

(statearr_32649_32704[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (16))){
var state_32602__$1 = state_32602;
var statearr_32650_32705 = state_32602__$1;
(statearr_32650_32705[(2)] = true);

(statearr_32650_32705[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (38))){
var inst_32592 = (state_32602[(2)]);
var state_32602__$1 = state_32602;
var statearr_32651_32706 = state_32602__$1;
(statearr_32651_32706[(2)] = inst_32592);

(statearr_32651_32706[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (30))){
var inst_32562 = (state_32602[(9)]);
var inst_32554 = (state_32602[(13)]);
var inst_32553 = (state_32602[(11)]);
var inst_32579 = cljs.core.empty_QMARK_.call(null,inst_32553);
var inst_32580 = inst_32554.call(null,inst_32562);
var inst_32581 = cljs.core.not.call(null,inst_32580);
var inst_32582 = (inst_32579) && (inst_32581);
var state_32602__$1 = state_32602;
var statearr_32652_32707 = state_32602__$1;
(statearr_32652_32707[(2)] = inst_32582);

(statearr_32652_32707[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (10))){
var inst_32506 = (state_32602[(8)]);
var inst_32526 = (state_32602[(2)]);
var inst_32527 = cljs.core.get.call(null,inst_32526,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32528 = cljs.core.get.call(null,inst_32526,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32529 = cljs.core.get.call(null,inst_32526,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32530 = inst_32506;
var state_32602__$1 = (function (){var statearr_32653 = state_32602;
(statearr_32653[(16)] = inst_32527);

(statearr_32653[(17)] = inst_32528);

(statearr_32653[(7)] = inst_32530);

(statearr_32653[(18)] = inst_32529);

return statearr_32653;
})();
var statearr_32654_32708 = state_32602__$1;
(statearr_32654_32708[(2)] = null);

(statearr_32654_32708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (18))){
var inst_32544 = (state_32602[(2)]);
var state_32602__$1 = state_32602;
var statearr_32655_32709 = state_32602__$1;
(statearr_32655_32709[(2)] = inst_32544);

(statearr_32655_32709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (37))){
var state_32602__$1 = state_32602;
var statearr_32656_32710 = state_32602__$1;
(statearr_32656_32710[(2)] = null);

(statearr_32656_32710[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (8))){
var inst_32506 = (state_32602[(8)]);
var inst_32523 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32506);
var state_32602__$1 = state_32602;
var statearr_32657_32711 = state_32602__$1;
(statearr_32657_32711[(2)] = inst_32523);

(statearr_32657_32711[(1)] = (10));


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
});})(c__30902__auto___32665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30790__auto__,c__30902__auto___32665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30791__auto__ = null;
var cljs$core$async$mix_$_state_machine__30791__auto____0 = (function (){
var statearr_32661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32661[(0)] = cljs$core$async$mix_$_state_machine__30791__auto__);

(statearr_32661[(1)] = (1));

return statearr_32661;
});
var cljs$core$async$mix_$_state_machine__30791__auto____1 = (function (state_32602){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_32602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e32662){if((e32662 instanceof Object)){
var ex__30794__auto__ = e32662;
var statearr_32663_32712 = state_32602;
(statearr_32663_32712[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32713 = state_32602;
state_32602 = G__32713;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30791__auto__ = function(state_32602){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30791__auto____1.call(this,state_32602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30791__auto____0;
cljs$core$async$mix_$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30791__auto____1;
return cljs$core$async$mix_$_state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto___32665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30904__auto__ = (function (){var statearr_32664 = f__30903__auto__.call(null);
(statearr_32664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___32665);

return statearr_32664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto___32665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args32714 = [];
var len__27014__auto___32717 = arguments.length;
var i__27015__auto___32718 = (0);
while(true){
if((i__27015__auto___32718 < len__27014__auto___32717)){
args32714.push((arguments[i__27015__auto___32718]));

var G__32719 = (i__27015__auto___32718 + (1));
i__27015__auto___32718 = G__32719;
continue;
} else {
}
break;
}

var G__32716 = args32714.length;
switch (G__32716) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32714.length)].join('')));

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
var args32722 = [];
var len__27014__auto___32847 = arguments.length;
var i__27015__auto___32848 = (0);
while(true){
if((i__27015__auto___32848 < len__27014__auto___32847)){
args32722.push((arguments[i__27015__auto___32848]));

var G__32849 = (i__27015__auto___32848 + (1));
i__27015__auto___32848 = G__32849;
continue;
} else {
}
break;
}

var G__32724 = args32722.length;
switch (G__32724) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32722.length)].join('')));

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
return (function (p1__32721_SHARP_){
if(cljs.core.truth_(p1__32721_SHARP_.call(null,topic))){
return p1__32721_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32721_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25939__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32725 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32725 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32726){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32726 = meta32726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32727,meta32726__$1){
var self__ = this;
var _32727__$1 = this;
return (new cljs.core.async.t_cljs$core$async32725(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32726__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32725.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32727){
var self__ = this;
var _32727__$1 = this;
return self__.meta32726;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32725.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32725.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32725.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32725.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32725.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async32725.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32725.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32725.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32726","meta32726",614572754,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32725.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32725";

cljs.core.async.t_cljs$core$async32725.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async32725");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32725 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32725(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32726){
return (new cljs.core.async.t_cljs$core$async32725(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32726));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32725(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30902__auto___32851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto___32851,mults,ensure_mult,p){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto___32851,mults,ensure_mult,p){
return (function (state_32799){
var state_val_32800 = (state_32799[(1)]);
if((state_val_32800 === (7))){
var inst_32795 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
var statearr_32801_32852 = state_32799__$1;
(statearr_32801_32852[(2)] = inst_32795);

(statearr_32801_32852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (20))){
var state_32799__$1 = state_32799;
var statearr_32802_32853 = state_32799__$1;
(statearr_32802_32853[(2)] = null);

(statearr_32802_32853[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (1))){
var state_32799__$1 = state_32799;
var statearr_32803_32854 = state_32799__$1;
(statearr_32803_32854[(2)] = null);

(statearr_32803_32854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (24))){
var inst_32778 = (state_32799[(7)]);
var inst_32787 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32778);
var state_32799__$1 = state_32799;
var statearr_32804_32855 = state_32799__$1;
(statearr_32804_32855[(2)] = inst_32787);

(statearr_32804_32855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (4))){
var inst_32730 = (state_32799[(8)]);
var inst_32730__$1 = (state_32799[(2)]);
var inst_32731 = (inst_32730__$1 == null);
var state_32799__$1 = (function (){var statearr_32805 = state_32799;
(statearr_32805[(8)] = inst_32730__$1);

return statearr_32805;
})();
if(cljs.core.truth_(inst_32731)){
var statearr_32806_32856 = state_32799__$1;
(statearr_32806_32856[(1)] = (5));

} else {
var statearr_32807_32857 = state_32799__$1;
(statearr_32807_32857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (15))){
var inst_32772 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
var statearr_32808_32858 = state_32799__$1;
(statearr_32808_32858[(2)] = inst_32772);

(statearr_32808_32858[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (21))){
var inst_32792 = (state_32799[(2)]);
var state_32799__$1 = (function (){var statearr_32809 = state_32799;
(statearr_32809[(9)] = inst_32792);

return statearr_32809;
})();
var statearr_32810_32859 = state_32799__$1;
(statearr_32810_32859[(2)] = null);

(statearr_32810_32859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (13))){
var inst_32754 = (state_32799[(10)]);
var inst_32756 = cljs.core.chunked_seq_QMARK_.call(null,inst_32754);
var state_32799__$1 = state_32799;
if(inst_32756){
var statearr_32811_32860 = state_32799__$1;
(statearr_32811_32860[(1)] = (16));

} else {
var statearr_32812_32861 = state_32799__$1;
(statearr_32812_32861[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (22))){
var inst_32784 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
if(cljs.core.truth_(inst_32784)){
var statearr_32813_32862 = state_32799__$1;
(statearr_32813_32862[(1)] = (23));

} else {
var statearr_32814_32863 = state_32799__$1;
(statearr_32814_32863[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (6))){
var inst_32780 = (state_32799[(11)]);
var inst_32778 = (state_32799[(7)]);
var inst_32730 = (state_32799[(8)]);
var inst_32778__$1 = topic_fn.call(null,inst_32730);
var inst_32779 = cljs.core.deref.call(null,mults);
var inst_32780__$1 = cljs.core.get.call(null,inst_32779,inst_32778__$1);
var state_32799__$1 = (function (){var statearr_32815 = state_32799;
(statearr_32815[(11)] = inst_32780__$1);

(statearr_32815[(7)] = inst_32778__$1);

return statearr_32815;
})();
if(cljs.core.truth_(inst_32780__$1)){
var statearr_32816_32864 = state_32799__$1;
(statearr_32816_32864[(1)] = (19));

} else {
var statearr_32817_32865 = state_32799__$1;
(statearr_32817_32865[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (25))){
var inst_32789 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
var statearr_32818_32866 = state_32799__$1;
(statearr_32818_32866[(2)] = inst_32789);

(statearr_32818_32866[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (17))){
var inst_32754 = (state_32799[(10)]);
var inst_32763 = cljs.core.first.call(null,inst_32754);
var inst_32764 = cljs.core.async.muxch_STAR_.call(null,inst_32763);
var inst_32765 = cljs.core.async.close_BANG_.call(null,inst_32764);
var inst_32766 = cljs.core.next.call(null,inst_32754);
var inst_32740 = inst_32766;
var inst_32741 = null;
var inst_32742 = (0);
var inst_32743 = (0);
var state_32799__$1 = (function (){var statearr_32819 = state_32799;
(statearr_32819[(12)] = inst_32742);

(statearr_32819[(13)] = inst_32740);

(statearr_32819[(14)] = inst_32743);

(statearr_32819[(15)] = inst_32741);

(statearr_32819[(16)] = inst_32765);

return statearr_32819;
})();
var statearr_32820_32867 = state_32799__$1;
(statearr_32820_32867[(2)] = null);

(statearr_32820_32867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (3))){
var inst_32797 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32799__$1,inst_32797);
} else {
if((state_val_32800 === (12))){
var inst_32774 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
var statearr_32821_32868 = state_32799__$1;
(statearr_32821_32868[(2)] = inst_32774);

(statearr_32821_32868[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (2))){
var state_32799__$1 = state_32799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32799__$1,(4),ch);
} else {
if((state_val_32800 === (23))){
var state_32799__$1 = state_32799;
var statearr_32822_32869 = state_32799__$1;
(statearr_32822_32869[(2)] = null);

(statearr_32822_32869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (19))){
var inst_32780 = (state_32799[(11)]);
var inst_32730 = (state_32799[(8)]);
var inst_32782 = cljs.core.async.muxch_STAR_.call(null,inst_32780);
var state_32799__$1 = state_32799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32799__$1,(22),inst_32782,inst_32730);
} else {
if((state_val_32800 === (11))){
var inst_32754 = (state_32799[(10)]);
var inst_32740 = (state_32799[(13)]);
var inst_32754__$1 = cljs.core.seq.call(null,inst_32740);
var state_32799__$1 = (function (){var statearr_32823 = state_32799;
(statearr_32823[(10)] = inst_32754__$1);

return statearr_32823;
})();
if(inst_32754__$1){
var statearr_32824_32870 = state_32799__$1;
(statearr_32824_32870[(1)] = (13));

} else {
var statearr_32825_32871 = state_32799__$1;
(statearr_32825_32871[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (9))){
var inst_32776 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
var statearr_32826_32872 = state_32799__$1;
(statearr_32826_32872[(2)] = inst_32776);

(statearr_32826_32872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (5))){
var inst_32737 = cljs.core.deref.call(null,mults);
var inst_32738 = cljs.core.vals.call(null,inst_32737);
var inst_32739 = cljs.core.seq.call(null,inst_32738);
var inst_32740 = inst_32739;
var inst_32741 = null;
var inst_32742 = (0);
var inst_32743 = (0);
var state_32799__$1 = (function (){var statearr_32827 = state_32799;
(statearr_32827[(12)] = inst_32742);

(statearr_32827[(13)] = inst_32740);

(statearr_32827[(14)] = inst_32743);

(statearr_32827[(15)] = inst_32741);

return statearr_32827;
})();
var statearr_32828_32873 = state_32799__$1;
(statearr_32828_32873[(2)] = null);

(statearr_32828_32873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (14))){
var state_32799__$1 = state_32799;
var statearr_32832_32874 = state_32799__$1;
(statearr_32832_32874[(2)] = null);

(statearr_32832_32874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (16))){
var inst_32754 = (state_32799[(10)]);
var inst_32758 = cljs.core.chunk_first.call(null,inst_32754);
var inst_32759 = cljs.core.chunk_rest.call(null,inst_32754);
var inst_32760 = cljs.core.count.call(null,inst_32758);
var inst_32740 = inst_32759;
var inst_32741 = inst_32758;
var inst_32742 = inst_32760;
var inst_32743 = (0);
var state_32799__$1 = (function (){var statearr_32833 = state_32799;
(statearr_32833[(12)] = inst_32742);

(statearr_32833[(13)] = inst_32740);

(statearr_32833[(14)] = inst_32743);

(statearr_32833[(15)] = inst_32741);

return statearr_32833;
})();
var statearr_32834_32875 = state_32799__$1;
(statearr_32834_32875[(2)] = null);

(statearr_32834_32875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (10))){
var inst_32742 = (state_32799[(12)]);
var inst_32740 = (state_32799[(13)]);
var inst_32743 = (state_32799[(14)]);
var inst_32741 = (state_32799[(15)]);
var inst_32748 = cljs.core._nth.call(null,inst_32741,inst_32743);
var inst_32749 = cljs.core.async.muxch_STAR_.call(null,inst_32748);
var inst_32750 = cljs.core.async.close_BANG_.call(null,inst_32749);
var inst_32751 = (inst_32743 + (1));
var tmp32829 = inst_32742;
var tmp32830 = inst_32740;
var tmp32831 = inst_32741;
var inst_32740__$1 = tmp32830;
var inst_32741__$1 = tmp32831;
var inst_32742__$1 = tmp32829;
var inst_32743__$1 = inst_32751;
var state_32799__$1 = (function (){var statearr_32835 = state_32799;
(statearr_32835[(17)] = inst_32750);

(statearr_32835[(12)] = inst_32742__$1);

(statearr_32835[(13)] = inst_32740__$1);

(statearr_32835[(14)] = inst_32743__$1);

(statearr_32835[(15)] = inst_32741__$1);

return statearr_32835;
})();
var statearr_32836_32876 = state_32799__$1;
(statearr_32836_32876[(2)] = null);

(statearr_32836_32876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (18))){
var inst_32769 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
var statearr_32837_32877 = state_32799__$1;
(statearr_32837_32877[(2)] = inst_32769);

(statearr_32837_32877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (8))){
var inst_32742 = (state_32799[(12)]);
var inst_32743 = (state_32799[(14)]);
var inst_32745 = (inst_32743 < inst_32742);
var inst_32746 = inst_32745;
var state_32799__$1 = state_32799;
if(cljs.core.truth_(inst_32746)){
var statearr_32838_32878 = state_32799__$1;
(statearr_32838_32878[(1)] = (10));

} else {
var statearr_32839_32879 = state_32799__$1;
(statearr_32839_32879[(1)] = (11));

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
});})(c__30902__auto___32851,mults,ensure_mult,p))
;
return ((function (switch__30790__auto__,c__30902__auto___32851,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30791__auto__ = null;
var cljs$core$async$state_machine__30791__auto____0 = (function (){
var statearr_32843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32843[(0)] = cljs$core$async$state_machine__30791__auto__);

(statearr_32843[(1)] = (1));

return statearr_32843;
});
var cljs$core$async$state_machine__30791__auto____1 = (function (state_32799){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_32799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e32844){if((e32844 instanceof Object)){
var ex__30794__auto__ = e32844;
var statearr_32845_32880 = state_32799;
(statearr_32845_32880[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32881 = state_32799;
state_32799 = G__32881;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$state_machine__30791__auto__ = function(state_32799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30791__auto____1.call(this,state_32799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30791__auto____0;
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30791__auto____1;
return cljs$core$async$state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto___32851,mults,ensure_mult,p))
})();
var state__30904__auto__ = (function (){var statearr_32846 = f__30903__auto__.call(null);
(statearr_32846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___32851);

return statearr_32846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto___32851,mults,ensure_mult,p))
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
var args32882 = [];
var len__27014__auto___32885 = arguments.length;
var i__27015__auto___32886 = (0);
while(true){
if((i__27015__auto___32886 < len__27014__auto___32885)){
args32882.push((arguments[i__27015__auto___32886]));

var G__32887 = (i__27015__auto___32886 + (1));
i__27015__auto___32886 = G__32887;
continue;
} else {
}
break;
}

var G__32884 = args32882.length;
switch (G__32884) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32882.length)].join('')));

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
var args32889 = [];
var len__27014__auto___32892 = arguments.length;
var i__27015__auto___32893 = (0);
while(true){
if((i__27015__auto___32893 < len__27014__auto___32892)){
args32889.push((arguments[i__27015__auto___32893]));

var G__32894 = (i__27015__auto___32893 + (1));
i__27015__auto___32893 = G__32894;
continue;
} else {
}
break;
}

var G__32891 = args32889.length;
switch (G__32891) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32889.length)].join('')));

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
var args32896 = [];
var len__27014__auto___32967 = arguments.length;
var i__27015__auto___32968 = (0);
while(true){
if((i__27015__auto___32968 < len__27014__auto___32967)){
args32896.push((arguments[i__27015__auto___32968]));

var G__32969 = (i__27015__auto___32968 + (1));
i__27015__auto___32968 = G__32969;
continue;
} else {
}
break;
}

var G__32898 = args32896.length;
switch (G__32898) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32896.length)].join('')));

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
var c__30902__auto___32971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto___32971,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto___32971,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32937){
var state_val_32938 = (state_32937[(1)]);
if((state_val_32938 === (7))){
var state_32937__$1 = state_32937;
var statearr_32939_32972 = state_32937__$1;
(statearr_32939_32972[(2)] = null);

(statearr_32939_32972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (1))){
var state_32937__$1 = state_32937;
var statearr_32940_32973 = state_32937__$1;
(statearr_32940_32973[(2)] = null);

(statearr_32940_32973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (4))){
var inst_32901 = (state_32937[(7)]);
var inst_32903 = (inst_32901 < cnt);
var state_32937__$1 = state_32937;
if(cljs.core.truth_(inst_32903)){
var statearr_32941_32974 = state_32937__$1;
(statearr_32941_32974[(1)] = (6));

} else {
var statearr_32942_32975 = state_32937__$1;
(statearr_32942_32975[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (15))){
var inst_32933 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
var statearr_32943_32976 = state_32937__$1;
(statearr_32943_32976[(2)] = inst_32933);

(statearr_32943_32976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (13))){
var inst_32926 = cljs.core.async.close_BANG_.call(null,out);
var state_32937__$1 = state_32937;
var statearr_32944_32977 = state_32937__$1;
(statearr_32944_32977[(2)] = inst_32926);

(statearr_32944_32977[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (6))){
var state_32937__$1 = state_32937;
var statearr_32945_32978 = state_32937__$1;
(statearr_32945_32978[(2)] = null);

(statearr_32945_32978[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (3))){
var inst_32935 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32937__$1,inst_32935);
} else {
if((state_val_32938 === (12))){
var inst_32923 = (state_32937[(8)]);
var inst_32923__$1 = (state_32937[(2)]);
var inst_32924 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32923__$1);
var state_32937__$1 = (function (){var statearr_32946 = state_32937;
(statearr_32946[(8)] = inst_32923__$1);

return statearr_32946;
})();
if(cljs.core.truth_(inst_32924)){
var statearr_32947_32979 = state_32937__$1;
(statearr_32947_32979[(1)] = (13));

} else {
var statearr_32948_32980 = state_32937__$1;
(statearr_32948_32980[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (2))){
var inst_32900 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32901 = (0);
var state_32937__$1 = (function (){var statearr_32949 = state_32937;
(statearr_32949[(7)] = inst_32901);

(statearr_32949[(9)] = inst_32900);

return statearr_32949;
})();
var statearr_32950_32981 = state_32937__$1;
(statearr_32950_32981[(2)] = null);

(statearr_32950_32981[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (11))){
var inst_32901 = (state_32937[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32937,(10),Object,null,(9));
var inst_32910 = chs__$1.call(null,inst_32901);
var inst_32911 = done.call(null,inst_32901);
var inst_32912 = cljs.core.async.take_BANG_.call(null,inst_32910,inst_32911);
var state_32937__$1 = state_32937;
var statearr_32951_32982 = state_32937__$1;
(statearr_32951_32982[(2)] = inst_32912);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32937__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (9))){
var inst_32901 = (state_32937[(7)]);
var inst_32914 = (state_32937[(2)]);
var inst_32915 = (inst_32901 + (1));
var inst_32901__$1 = inst_32915;
var state_32937__$1 = (function (){var statearr_32952 = state_32937;
(statearr_32952[(10)] = inst_32914);

(statearr_32952[(7)] = inst_32901__$1);

return statearr_32952;
})();
var statearr_32953_32983 = state_32937__$1;
(statearr_32953_32983[(2)] = null);

(statearr_32953_32983[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (5))){
var inst_32921 = (state_32937[(2)]);
var state_32937__$1 = (function (){var statearr_32954 = state_32937;
(statearr_32954[(11)] = inst_32921);

return statearr_32954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32937__$1,(12),dchan);
} else {
if((state_val_32938 === (14))){
var inst_32923 = (state_32937[(8)]);
var inst_32928 = cljs.core.apply.call(null,f,inst_32923);
var state_32937__$1 = state_32937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32937__$1,(16),out,inst_32928);
} else {
if((state_val_32938 === (16))){
var inst_32930 = (state_32937[(2)]);
var state_32937__$1 = (function (){var statearr_32955 = state_32937;
(statearr_32955[(12)] = inst_32930);

return statearr_32955;
})();
var statearr_32956_32984 = state_32937__$1;
(statearr_32956_32984[(2)] = null);

(statearr_32956_32984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (10))){
var inst_32905 = (state_32937[(2)]);
var inst_32906 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32937__$1 = (function (){var statearr_32957 = state_32937;
(statearr_32957[(13)] = inst_32905);

return statearr_32957;
})();
var statearr_32958_32985 = state_32937__$1;
(statearr_32958_32985[(2)] = inst_32906);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32937__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32938 === (8))){
var inst_32919 = (state_32937[(2)]);
var state_32937__$1 = state_32937;
var statearr_32959_32986 = state_32937__$1;
(statearr_32959_32986[(2)] = inst_32919);

(statearr_32959_32986[(1)] = (5));


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
});})(c__30902__auto___32971,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30790__auto__,c__30902__auto___32971,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30791__auto__ = null;
var cljs$core$async$state_machine__30791__auto____0 = (function (){
var statearr_32963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32963[(0)] = cljs$core$async$state_machine__30791__auto__);

(statearr_32963[(1)] = (1));

return statearr_32963;
});
var cljs$core$async$state_machine__30791__auto____1 = (function (state_32937){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_32937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e32964){if((e32964 instanceof Object)){
var ex__30794__auto__ = e32964;
var statearr_32965_32987 = state_32937;
(statearr_32965_32987[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32988 = state_32937;
state_32937 = G__32988;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$state_machine__30791__auto__ = function(state_32937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30791__auto____1.call(this,state_32937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30791__auto____0;
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30791__auto____1;
return cljs$core$async$state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto___32971,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30904__auto__ = (function (){var statearr_32966 = f__30903__auto__.call(null);
(statearr_32966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___32971);

return statearr_32966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto___32971,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args32990 = [];
var len__27014__auto___33048 = arguments.length;
var i__27015__auto___33049 = (0);
while(true){
if((i__27015__auto___33049 < len__27014__auto___33048)){
args32990.push((arguments[i__27015__auto___33049]));

var G__33050 = (i__27015__auto___33049 + (1));
i__27015__auto___33049 = G__33050;
continue;
} else {
}
break;
}

var G__32992 = args32990.length;
switch (G__32992) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32990.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30902__auto___33052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto___33052,out){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto___33052,out){
return (function (state_33024){
var state_val_33025 = (state_33024[(1)]);
if((state_val_33025 === (7))){
var inst_33003 = (state_33024[(7)]);
var inst_33004 = (state_33024[(8)]);
var inst_33003__$1 = (state_33024[(2)]);
var inst_33004__$1 = cljs.core.nth.call(null,inst_33003__$1,(0),null);
var inst_33005 = cljs.core.nth.call(null,inst_33003__$1,(1),null);
var inst_33006 = (inst_33004__$1 == null);
var state_33024__$1 = (function (){var statearr_33026 = state_33024;
(statearr_33026[(7)] = inst_33003__$1);

(statearr_33026[(8)] = inst_33004__$1);

(statearr_33026[(9)] = inst_33005);

return statearr_33026;
})();
if(cljs.core.truth_(inst_33006)){
var statearr_33027_33053 = state_33024__$1;
(statearr_33027_33053[(1)] = (8));

} else {
var statearr_33028_33054 = state_33024__$1;
(statearr_33028_33054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33025 === (1))){
var inst_32993 = cljs.core.vec.call(null,chs);
var inst_32994 = inst_32993;
var state_33024__$1 = (function (){var statearr_33029 = state_33024;
(statearr_33029[(10)] = inst_32994);

return statearr_33029;
})();
var statearr_33030_33055 = state_33024__$1;
(statearr_33030_33055[(2)] = null);

(statearr_33030_33055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33025 === (4))){
var inst_32994 = (state_33024[(10)]);
var state_33024__$1 = state_33024;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33024__$1,(7),inst_32994);
} else {
if((state_val_33025 === (6))){
var inst_33020 = (state_33024[(2)]);
var state_33024__$1 = state_33024;
var statearr_33031_33056 = state_33024__$1;
(statearr_33031_33056[(2)] = inst_33020);

(statearr_33031_33056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33025 === (3))){
var inst_33022 = (state_33024[(2)]);
var state_33024__$1 = state_33024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33024__$1,inst_33022);
} else {
if((state_val_33025 === (2))){
var inst_32994 = (state_33024[(10)]);
var inst_32996 = cljs.core.count.call(null,inst_32994);
var inst_32997 = (inst_32996 > (0));
var state_33024__$1 = state_33024;
if(cljs.core.truth_(inst_32997)){
var statearr_33033_33057 = state_33024__$1;
(statearr_33033_33057[(1)] = (4));

} else {
var statearr_33034_33058 = state_33024__$1;
(statearr_33034_33058[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33025 === (11))){
var inst_32994 = (state_33024[(10)]);
var inst_33013 = (state_33024[(2)]);
var tmp33032 = inst_32994;
var inst_32994__$1 = tmp33032;
var state_33024__$1 = (function (){var statearr_33035 = state_33024;
(statearr_33035[(11)] = inst_33013);

(statearr_33035[(10)] = inst_32994__$1);

return statearr_33035;
})();
var statearr_33036_33059 = state_33024__$1;
(statearr_33036_33059[(2)] = null);

(statearr_33036_33059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33025 === (9))){
var inst_33004 = (state_33024[(8)]);
var state_33024__$1 = state_33024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33024__$1,(11),out,inst_33004);
} else {
if((state_val_33025 === (5))){
var inst_33018 = cljs.core.async.close_BANG_.call(null,out);
var state_33024__$1 = state_33024;
var statearr_33037_33060 = state_33024__$1;
(statearr_33037_33060[(2)] = inst_33018);

(statearr_33037_33060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33025 === (10))){
var inst_33016 = (state_33024[(2)]);
var state_33024__$1 = state_33024;
var statearr_33038_33061 = state_33024__$1;
(statearr_33038_33061[(2)] = inst_33016);

(statearr_33038_33061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33025 === (8))){
var inst_33003 = (state_33024[(7)]);
var inst_33004 = (state_33024[(8)]);
var inst_33005 = (state_33024[(9)]);
var inst_32994 = (state_33024[(10)]);
var inst_33008 = (function (){var cs = inst_32994;
var vec__32999 = inst_33003;
var v = inst_33004;
var c = inst_33005;
return ((function (cs,vec__32999,v,c,inst_33003,inst_33004,inst_33005,inst_32994,state_val_33025,c__30902__auto___33052,out){
return (function (p1__32989_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32989_SHARP_);
});
;})(cs,vec__32999,v,c,inst_33003,inst_33004,inst_33005,inst_32994,state_val_33025,c__30902__auto___33052,out))
})();
var inst_33009 = cljs.core.filterv.call(null,inst_33008,inst_32994);
var inst_32994__$1 = inst_33009;
var state_33024__$1 = (function (){var statearr_33039 = state_33024;
(statearr_33039[(10)] = inst_32994__$1);

return statearr_33039;
})();
var statearr_33040_33062 = state_33024__$1;
(statearr_33040_33062[(2)] = null);

(statearr_33040_33062[(1)] = (2));


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
});})(c__30902__auto___33052,out))
;
return ((function (switch__30790__auto__,c__30902__auto___33052,out){
return (function() {
var cljs$core$async$state_machine__30791__auto__ = null;
var cljs$core$async$state_machine__30791__auto____0 = (function (){
var statearr_33044 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33044[(0)] = cljs$core$async$state_machine__30791__auto__);

(statearr_33044[(1)] = (1));

return statearr_33044;
});
var cljs$core$async$state_machine__30791__auto____1 = (function (state_33024){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_33024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e33045){if((e33045 instanceof Object)){
var ex__30794__auto__ = e33045;
var statearr_33046_33063 = state_33024;
(statearr_33046_33063[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33064 = state_33024;
state_33024 = G__33064;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$state_machine__30791__auto__ = function(state_33024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30791__auto____1.call(this,state_33024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30791__auto____0;
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30791__auto____1;
return cljs$core$async$state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto___33052,out))
})();
var state__30904__auto__ = (function (){var statearr_33047 = f__30903__auto__.call(null);
(statearr_33047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___33052);

return statearr_33047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto___33052,out))
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
var args33065 = [];
var len__27014__auto___33114 = arguments.length;
var i__27015__auto___33115 = (0);
while(true){
if((i__27015__auto___33115 < len__27014__auto___33114)){
args33065.push((arguments[i__27015__auto___33115]));

var G__33116 = (i__27015__auto___33115 + (1));
i__27015__auto___33115 = G__33116;
continue;
} else {
}
break;
}

var G__33067 = args33065.length;
switch (G__33067) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33065.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30902__auto___33118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto___33118,out){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto___33118,out){
return (function (state_33091){
var state_val_33092 = (state_33091[(1)]);
if((state_val_33092 === (7))){
var inst_33073 = (state_33091[(7)]);
var inst_33073__$1 = (state_33091[(2)]);
var inst_33074 = (inst_33073__$1 == null);
var inst_33075 = cljs.core.not.call(null,inst_33074);
var state_33091__$1 = (function (){var statearr_33093 = state_33091;
(statearr_33093[(7)] = inst_33073__$1);

return statearr_33093;
})();
if(inst_33075){
var statearr_33094_33119 = state_33091__$1;
(statearr_33094_33119[(1)] = (8));

} else {
var statearr_33095_33120 = state_33091__$1;
(statearr_33095_33120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33092 === (1))){
var inst_33068 = (0);
var state_33091__$1 = (function (){var statearr_33096 = state_33091;
(statearr_33096[(8)] = inst_33068);

return statearr_33096;
})();
var statearr_33097_33121 = state_33091__$1;
(statearr_33097_33121[(2)] = null);

(statearr_33097_33121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33092 === (4))){
var state_33091__$1 = state_33091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33091__$1,(7),ch);
} else {
if((state_val_33092 === (6))){
var inst_33086 = (state_33091[(2)]);
var state_33091__$1 = state_33091;
var statearr_33098_33122 = state_33091__$1;
(statearr_33098_33122[(2)] = inst_33086);

(statearr_33098_33122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33092 === (3))){
var inst_33088 = (state_33091[(2)]);
var inst_33089 = cljs.core.async.close_BANG_.call(null,out);
var state_33091__$1 = (function (){var statearr_33099 = state_33091;
(statearr_33099[(9)] = inst_33088);

return statearr_33099;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33091__$1,inst_33089);
} else {
if((state_val_33092 === (2))){
var inst_33068 = (state_33091[(8)]);
var inst_33070 = (inst_33068 < n);
var state_33091__$1 = state_33091;
if(cljs.core.truth_(inst_33070)){
var statearr_33100_33123 = state_33091__$1;
(statearr_33100_33123[(1)] = (4));

} else {
var statearr_33101_33124 = state_33091__$1;
(statearr_33101_33124[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33092 === (11))){
var inst_33068 = (state_33091[(8)]);
var inst_33078 = (state_33091[(2)]);
var inst_33079 = (inst_33068 + (1));
var inst_33068__$1 = inst_33079;
var state_33091__$1 = (function (){var statearr_33102 = state_33091;
(statearr_33102[(8)] = inst_33068__$1);

(statearr_33102[(10)] = inst_33078);

return statearr_33102;
})();
var statearr_33103_33125 = state_33091__$1;
(statearr_33103_33125[(2)] = null);

(statearr_33103_33125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33092 === (9))){
var state_33091__$1 = state_33091;
var statearr_33104_33126 = state_33091__$1;
(statearr_33104_33126[(2)] = null);

(statearr_33104_33126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33092 === (5))){
var state_33091__$1 = state_33091;
var statearr_33105_33127 = state_33091__$1;
(statearr_33105_33127[(2)] = null);

(statearr_33105_33127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33092 === (10))){
var inst_33083 = (state_33091[(2)]);
var state_33091__$1 = state_33091;
var statearr_33106_33128 = state_33091__$1;
(statearr_33106_33128[(2)] = inst_33083);

(statearr_33106_33128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33092 === (8))){
var inst_33073 = (state_33091[(7)]);
var state_33091__$1 = state_33091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33091__$1,(11),out,inst_33073);
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
});})(c__30902__auto___33118,out))
;
return ((function (switch__30790__auto__,c__30902__auto___33118,out){
return (function() {
var cljs$core$async$state_machine__30791__auto__ = null;
var cljs$core$async$state_machine__30791__auto____0 = (function (){
var statearr_33110 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33110[(0)] = cljs$core$async$state_machine__30791__auto__);

(statearr_33110[(1)] = (1));

return statearr_33110;
});
var cljs$core$async$state_machine__30791__auto____1 = (function (state_33091){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_33091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e33111){if((e33111 instanceof Object)){
var ex__30794__auto__ = e33111;
var statearr_33112_33129 = state_33091;
(statearr_33112_33129[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33130 = state_33091;
state_33091 = G__33130;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$state_machine__30791__auto__ = function(state_33091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30791__auto____1.call(this,state_33091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30791__auto____0;
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30791__auto____1;
return cljs$core$async$state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto___33118,out))
})();
var state__30904__auto__ = (function (){var statearr_33113 = f__30903__auto__.call(null);
(statearr_33113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___33118);

return statearr_33113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto___33118,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33138 = (function (map_LT_,f,ch,meta33139){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33139 = meta33139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33140,meta33139__$1){
var self__ = this;
var _33140__$1 = this;
return (new cljs.core.async.t_cljs$core$async33138(self__.map_LT_,self__.f,self__.ch,meta33139__$1));
});

cljs.core.async.t_cljs$core$async33138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33140){
var self__ = this;
var _33140__$1 = this;
return self__.meta33139;
});

cljs.core.async.t_cljs$core$async33138.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33138.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33138.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33138.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33138.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33141 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33141 = (function (map_LT_,f,ch,meta33139,_,fn1,meta33142){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33139 = meta33139;
this._ = _;
this.fn1 = fn1;
this.meta33142 = meta33142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33143,meta33142__$1){
var self__ = this;
var _33143__$1 = this;
return (new cljs.core.async.t_cljs$core$async33141(self__.map_LT_,self__.f,self__.ch,self__.meta33139,self__._,self__.fn1,meta33142__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33143){
var self__ = this;
var _33143__$1 = this;
return self__.meta33142;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33131_SHARP_){
return f1.call(null,(((p1__33131_SHARP_ == null))?null:self__.f.call(null,p1__33131_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33141.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33139","meta33139",-1648833073,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33138","cljs.core.async/t_cljs$core$async33138",1543239144,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33142","meta33142",-683344679,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33141.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33141";

cljs.core.async.t_cljs$core$async33141.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async33141");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33141 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33141(map_LT___$1,f__$1,ch__$1,meta33139__$1,___$2,fn1__$1,meta33142){
return (new cljs.core.async.t_cljs$core$async33141(map_LT___$1,f__$1,ch__$1,meta33139__$1,___$2,fn1__$1,meta33142));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33141(self__.map_LT_,self__.f,self__.ch,self__.meta33139,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async33138.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33138.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33139","meta33139",-1648833073,null)], null);
});

cljs.core.async.t_cljs$core$async33138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33138";

cljs.core.async.t_cljs$core$async33138.cljs$lang$ctorPrWriter = (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async33138");
});

cljs.core.async.__GT_t_cljs$core$async33138 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33138(map_LT___$1,f__$1,ch__$1,meta33139){
return (new cljs.core.async.t_cljs$core$async33138(map_LT___$1,f__$1,ch__$1,meta33139));
});

}

return (new cljs.core.async.t_cljs$core$async33138(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33147 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33147 = (function (map_GT_,f,ch,meta33148){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33148 = meta33148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33149,meta33148__$1){
var self__ = this;
var _33149__$1 = this;
return (new cljs.core.async.t_cljs$core$async33147(self__.map_GT_,self__.f,self__.ch,meta33148__$1));
});

cljs.core.async.t_cljs$core$async33147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33149){
var self__ = this;
var _33149__$1 = this;
return self__.meta33148;
});

cljs.core.async.t_cljs$core$async33147.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33147.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33147.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33147.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33147.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33147.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33148","meta33148",1899807374,null)], null);
});

cljs.core.async.t_cljs$core$async33147.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33147";

cljs.core.async.t_cljs$core$async33147.cljs$lang$ctorPrWriter = (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async33147");
});

cljs.core.async.__GT_t_cljs$core$async33147 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33147(map_GT___$1,f__$1,ch__$1,meta33148){
return (new cljs.core.async.t_cljs$core$async33147(map_GT___$1,f__$1,ch__$1,meta33148));
});

}

return (new cljs.core.async.t_cljs$core$async33147(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33153 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33153 = (function (filter_GT_,p,ch,meta33154){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33154 = meta33154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33155,meta33154__$1){
var self__ = this;
var _33155__$1 = this;
return (new cljs.core.async.t_cljs$core$async33153(self__.filter_GT_,self__.p,self__.ch,meta33154__$1));
});

cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33155){
var self__ = this;
var _33155__$1 = this;
return self__.meta33154;
});

cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33153.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33154","meta33154",-1925125191,null)], null);
});

cljs.core.async.t_cljs$core$async33153.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33153";

cljs.core.async.t_cljs$core$async33153.cljs$lang$ctorPrWriter = (function (this__26545__auto__,writer__26546__auto__,opt__26547__auto__){
return cljs.core._write.call(null,writer__26546__auto__,"cljs.core.async/t_cljs$core$async33153");
});

cljs.core.async.__GT_t_cljs$core$async33153 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33153(filter_GT___$1,p__$1,ch__$1,meta33154){
return (new cljs.core.async.t_cljs$core$async33153(filter_GT___$1,p__$1,ch__$1,meta33154));
});

}

return (new cljs.core.async.t_cljs$core$async33153(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args33156 = [];
var len__27014__auto___33200 = arguments.length;
var i__27015__auto___33201 = (0);
while(true){
if((i__27015__auto___33201 < len__27014__auto___33200)){
args33156.push((arguments[i__27015__auto___33201]));

var G__33202 = (i__27015__auto___33201 + (1));
i__27015__auto___33201 = G__33202;
continue;
} else {
}
break;
}

var G__33158 = args33156.length;
switch (G__33158) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33156.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30902__auto___33204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto___33204,out){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto___33204,out){
return (function (state_33179){
var state_val_33180 = (state_33179[(1)]);
if((state_val_33180 === (7))){
var inst_33175 = (state_33179[(2)]);
var state_33179__$1 = state_33179;
var statearr_33181_33205 = state_33179__$1;
(statearr_33181_33205[(2)] = inst_33175);

(statearr_33181_33205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33180 === (1))){
var state_33179__$1 = state_33179;
var statearr_33182_33206 = state_33179__$1;
(statearr_33182_33206[(2)] = null);

(statearr_33182_33206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33180 === (4))){
var inst_33161 = (state_33179[(7)]);
var inst_33161__$1 = (state_33179[(2)]);
var inst_33162 = (inst_33161__$1 == null);
var state_33179__$1 = (function (){var statearr_33183 = state_33179;
(statearr_33183[(7)] = inst_33161__$1);

return statearr_33183;
})();
if(cljs.core.truth_(inst_33162)){
var statearr_33184_33207 = state_33179__$1;
(statearr_33184_33207[(1)] = (5));

} else {
var statearr_33185_33208 = state_33179__$1;
(statearr_33185_33208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33180 === (6))){
var inst_33161 = (state_33179[(7)]);
var inst_33166 = p.call(null,inst_33161);
var state_33179__$1 = state_33179;
if(cljs.core.truth_(inst_33166)){
var statearr_33186_33209 = state_33179__$1;
(statearr_33186_33209[(1)] = (8));

} else {
var statearr_33187_33210 = state_33179__$1;
(statearr_33187_33210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33180 === (3))){
var inst_33177 = (state_33179[(2)]);
var state_33179__$1 = state_33179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33179__$1,inst_33177);
} else {
if((state_val_33180 === (2))){
var state_33179__$1 = state_33179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33179__$1,(4),ch);
} else {
if((state_val_33180 === (11))){
var inst_33169 = (state_33179[(2)]);
var state_33179__$1 = state_33179;
var statearr_33188_33211 = state_33179__$1;
(statearr_33188_33211[(2)] = inst_33169);

(statearr_33188_33211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33180 === (9))){
var state_33179__$1 = state_33179;
var statearr_33189_33212 = state_33179__$1;
(statearr_33189_33212[(2)] = null);

(statearr_33189_33212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33180 === (5))){
var inst_33164 = cljs.core.async.close_BANG_.call(null,out);
var state_33179__$1 = state_33179;
var statearr_33190_33213 = state_33179__$1;
(statearr_33190_33213[(2)] = inst_33164);

(statearr_33190_33213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33180 === (10))){
var inst_33172 = (state_33179[(2)]);
var state_33179__$1 = (function (){var statearr_33191 = state_33179;
(statearr_33191[(8)] = inst_33172);

return statearr_33191;
})();
var statearr_33192_33214 = state_33179__$1;
(statearr_33192_33214[(2)] = null);

(statearr_33192_33214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33180 === (8))){
var inst_33161 = (state_33179[(7)]);
var state_33179__$1 = state_33179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33179__$1,(11),out,inst_33161);
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
});})(c__30902__auto___33204,out))
;
return ((function (switch__30790__auto__,c__30902__auto___33204,out){
return (function() {
var cljs$core$async$state_machine__30791__auto__ = null;
var cljs$core$async$state_machine__30791__auto____0 = (function (){
var statearr_33196 = [null,null,null,null,null,null,null,null,null];
(statearr_33196[(0)] = cljs$core$async$state_machine__30791__auto__);

(statearr_33196[(1)] = (1));

return statearr_33196;
});
var cljs$core$async$state_machine__30791__auto____1 = (function (state_33179){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_33179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e33197){if((e33197 instanceof Object)){
var ex__30794__auto__ = e33197;
var statearr_33198_33215 = state_33179;
(statearr_33198_33215[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33216 = state_33179;
state_33179 = G__33216;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$state_machine__30791__auto__ = function(state_33179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30791__auto____1.call(this,state_33179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30791__auto____0;
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30791__auto____1;
return cljs$core$async$state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto___33204,out))
})();
var state__30904__auto__ = (function (){var statearr_33199 = f__30903__auto__.call(null);
(statearr_33199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___33204);

return statearr_33199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto___33204,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33217 = [];
var len__27014__auto___33220 = arguments.length;
var i__27015__auto___33221 = (0);
while(true){
if((i__27015__auto___33221 < len__27014__auto___33220)){
args33217.push((arguments[i__27015__auto___33221]));

var G__33222 = (i__27015__auto___33221 + (1));
i__27015__auto___33221 = G__33222;
continue;
} else {
}
break;
}

var G__33219 = args33217.length;
switch (G__33219) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33217.length)].join('')));

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
var c__30902__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto__){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto__){
return (function (state_33389){
var state_val_33390 = (state_33389[(1)]);
if((state_val_33390 === (7))){
var inst_33385 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33391_33432 = state_33389__$1;
(statearr_33391_33432[(2)] = inst_33385);

(statearr_33391_33432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (20))){
var inst_33355 = (state_33389[(7)]);
var inst_33366 = (state_33389[(2)]);
var inst_33367 = cljs.core.next.call(null,inst_33355);
var inst_33341 = inst_33367;
var inst_33342 = null;
var inst_33343 = (0);
var inst_33344 = (0);
var state_33389__$1 = (function (){var statearr_33392 = state_33389;
(statearr_33392[(8)] = inst_33342);

(statearr_33392[(9)] = inst_33366);

(statearr_33392[(10)] = inst_33341);

(statearr_33392[(11)] = inst_33344);

(statearr_33392[(12)] = inst_33343);

return statearr_33392;
})();
var statearr_33393_33433 = state_33389__$1;
(statearr_33393_33433[(2)] = null);

(statearr_33393_33433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (1))){
var state_33389__$1 = state_33389;
var statearr_33394_33434 = state_33389__$1;
(statearr_33394_33434[(2)] = null);

(statearr_33394_33434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (4))){
var inst_33330 = (state_33389[(13)]);
var inst_33330__$1 = (state_33389[(2)]);
var inst_33331 = (inst_33330__$1 == null);
var state_33389__$1 = (function (){var statearr_33395 = state_33389;
(statearr_33395[(13)] = inst_33330__$1);

return statearr_33395;
})();
if(cljs.core.truth_(inst_33331)){
var statearr_33396_33435 = state_33389__$1;
(statearr_33396_33435[(1)] = (5));

} else {
var statearr_33397_33436 = state_33389__$1;
(statearr_33397_33436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (15))){
var state_33389__$1 = state_33389;
var statearr_33401_33437 = state_33389__$1;
(statearr_33401_33437[(2)] = null);

(statearr_33401_33437[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (21))){
var state_33389__$1 = state_33389;
var statearr_33402_33438 = state_33389__$1;
(statearr_33402_33438[(2)] = null);

(statearr_33402_33438[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (13))){
var inst_33342 = (state_33389[(8)]);
var inst_33341 = (state_33389[(10)]);
var inst_33344 = (state_33389[(11)]);
var inst_33343 = (state_33389[(12)]);
var inst_33351 = (state_33389[(2)]);
var inst_33352 = (inst_33344 + (1));
var tmp33398 = inst_33342;
var tmp33399 = inst_33341;
var tmp33400 = inst_33343;
var inst_33341__$1 = tmp33399;
var inst_33342__$1 = tmp33398;
var inst_33343__$1 = tmp33400;
var inst_33344__$1 = inst_33352;
var state_33389__$1 = (function (){var statearr_33403 = state_33389;
(statearr_33403[(8)] = inst_33342__$1);

(statearr_33403[(14)] = inst_33351);

(statearr_33403[(10)] = inst_33341__$1);

(statearr_33403[(11)] = inst_33344__$1);

(statearr_33403[(12)] = inst_33343__$1);

return statearr_33403;
})();
var statearr_33404_33439 = state_33389__$1;
(statearr_33404_33439[(2)] = null);

(statearr_33404_33439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (22))){
var state_33389__$1 = state_33389;
var statearr_33405_33440 = state_33389__$1;
(statearr_33405_33440[(2)] = null);

(statearr_33405_33440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (6))){
var inst_33330 = (state_33389[(13)]);
var inst_33339 = f.call(null,inst_33330);
var inst_33340 = cljs.core.seq.call(null,inst_33339);
var inst_33341 = inst_33340;
var inst_33342 = null;
var inst_33343 = (0);
var inst_33344 = (0);
var state_33389__$1 = (function (){var statearr_33406 = state_33389;
(statearr_33406[(8)] = inst_33342);

(statearr_33406[(10)] = inst_33341);

(statearr_33406[(11)] = inst_33344);

(statearr_33406[(12)] = inst_33343);

return statearr_33406;
})();
var statearr_33407_33441 = state_33389__$1;
(statearr_33407_33441[(2)] = null);

(statearr_33407_33441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (17))){
var inst_33355 = (state_33389[(7)]);
var inst_33359 = cljs.core.chunk_first.call(null,inst_33355);
var inst_33360 = cljs.core.chunk_rest.call(null,inst_33355);
var inst_33361 = cljs.core.count.call(null,inst_33359);
var inst_33341 = inst_33360;
var inst_33342 = inst_33359;
var inst_33343 = inst_33361;
var inst_33344 = (0);
var state_33389__$1 = (function (){var statearr_33408 = state_33389;
(statearr_33408[(8)] = inst_33342);

(statearr_33408[(10)] = inst_33341);

(statearr_33408[(11)] = inst_33344);

(statearr_33408[(12)] = inst_33343);

return statearr_33408;
})();
var statearr_33409_33442 = state_33389__$1;
(statearr_33409_33442[(2)] = null);

(statearr_33409_33442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (3))){
var inst_33387 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33389__$1,inst_33387);
} else {
if((state_val_33390 === (12))){
var inst_33375 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33410_33443 = state_33389__$1;
(statearr_33410_33443[(2)] = inst_33375);

(statearr_33410_33443[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (2))){
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33389__$1,(4),in$);
} else {
if((state_val_33390 === (23))){
var inst_33383 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33411_33444 = state_33389__$1;
(statearr_33411_33444[(2)] = inst_33383);

(statearr_33411_33444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (19))){
var inst_33370 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33412_33445 = state_33389__$1;
(statearr_33412_33445[(2)] = inst_33370);

(statearr_33412_33445[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (11))){
var inst_33341 = (state_33389[(10)]);
var inst_33355 = (state_33389[(7)]);
var inst_33355__$1 = cljs.core.seq.call(null,inst_33341);
var state_33389__$1 = (function (){var statearr_33413 = state_33389;
(statearr_33413[(7)] = inst_33355__$1);

return statearr_33413;
})();
if(inst_33355__$1){
var statearr_33414_33446 = state_33389__$1;
(statearr_33414_33446[(1)] = (14));

} else {
var statearr_33415_33447 = state_33389__$1;
(statearr_33415_33447[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (9))){
var inst_33377 = (state_33389[(2)]);
var inst_33378 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33389__$1 = (function (){var statearr_33416 = state_33389;
(statearr_33416[(15)] = inst_33377);

return statearr_33416;
})();
if(cljs.core.truth_(inst_33378)){
var statearr_33417_33448 = state_33389__$1;
(statearr_33417_33448[(1)] = (21));

} else {
var statearr_33418_33449 = state_33389__$1;
(statearr_33418_33449[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (5))){
var inst_33333 = cljs.core.async.close_BANG_.call(null,out);
var state_33389__$1 = state_33389;
var statearr_33419_33450 = state_33389__$1;
(statearr_33419_33450[(2)] = inst_33333);

(statearr_33419_33450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (14))){
var inst_33355 = (state_33389[(7)]);
var inst_33357 = cljs.core.chunked_seq_QMARK_.call(null,inst_33355);
var state_33389__$1 = state_33389;
if(inst_33357){
var statearr_33420_33451 = state_33389__$1;
(statearr_33420_33451[(1)] = (17));

} else {
var statearr_33421_33452 = state_33389__$1;
(statearr_33421_33452[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (16))){
var inst_33373 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33422_33453 = state_33389__$1;
(statearr_33422_33453[(2)] = inst_33373);

(statearr_33422_33453[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (10))){
var inst_33342 = (state_33389[(8)]);
var inst_33344 = (state_33389[(11)]);
var inst_33349 = cljs.core._nth.call(null,inst_33342,inst_33344);
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33389__$1,(13),out,inst_33349);
} else {
if((state_val_33390 === (18))){
var inst_33355 = (state_33389[(7)]);
var inst_33364 = cljs.core.first.call(null,inst_33355);
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33389__$1,(20),out,inst_33364);
} else {
if((state_val_33390 === (8))){
var inst_33344 = (state_33389[(11)]);
var inst_33343 = (state_33389[(12)]);
var inst_33346 = (inst_33344 < inst_33343);
var inst_33347 = inst_33346;
var state_33389__$1 = state_33389;
if(cljs.core.truth_(inst_33347)){
var statearr_33423_33454 = state_33389__$1;
(statearr_33423_33454[(1)] = (10));

} else {
var statearr_33424_33455 = state_33389__$1;
(statearr_33424_33455[(1)] = (11));

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
});})(c__30902__auto__))
;
return ((function (switch__30790__auto__,c__30902__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30791__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30791__auto____0 = (function (){
var statearr_33428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33428[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30791__auto__);

(statearr_33428[(1)] = (1));

return statearr_33428;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30791__auto____1 = (function (state_33389){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_33389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e33429){if((e33429 instanceof Object)){
var ex__30794__auto__ = e33429;
var statearr_33430_33456 = state_33389;
(statearr_33430_33456[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33457 = state_33389;
state_33389 = G__33457;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30791__auto__ = function(state_33389){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30791__auto____1.call(this,state_33389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30791__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30791__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto__))
})();
var state__30904__auto__ = (function (){var statearr_33431 = f__30903__auto__.call(null);
(statearr_33431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto__);

return statearr_33431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto__))
);

return c__30902__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33458 = [];
var len__27014__auto___33461 = arguments.length;
var i__27015__auto___33462 = (0);
while(true){
if((i__27015__auto___33462 < len__27014__auto___33461)){
args33458.push((arguments[i__27015__auto___33462]));

var G__33463 = (i__27015__auto___33462 + (1));
i__27015__auto___33462 = G__33463;
continue;
} else {
}
break;
}

var G__33460 = args33458.length;
switch (G__33460) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33458.length)].join('')));

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
var args33465 = [];
var len__27014__auto___33468 = arguments.length;
var i__27015__auto___33469 = (0);
while(true){
if((i__27015__auto___33469 < len__27014__auto___33468)){
args33465.push((arguments[i__27015__auto___33469]));

var G__33470 = (i__27015__auto___33469 + (1));
i__27015__auto___33469 = G__33470;
continue;
} else {
}
break;
}

var G__33467 = args33465.length;
switch (G__33467) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33465.length)].join('')));

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
var args33472 = [];
var len__27014__auto___33523 = arguments.length;
var i__27015__auto___33524 = (0);
while(true){
if((i__27015__auto___33524 < len__27014__auto___33523)){
args33472.push((arguments[i__27015__auto___33524]));

var G__33525 = (i__27015__auto___33524 + (1));
i__27015__auto___33524 = G__33525;
continue;
} else {
}
break;
}

var G__33474 = args33472.length;
switch (G__33474) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33472.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30902__auto___33527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto___33527,out){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto___33527,out){
return (function (state_33498){
var state_val_33499 = (state_33498[(1)]);
if((state_val_33499 === (7))){
var inst_33493 = (state_33498[(2)]);
var state_33498__$1 = state_33498;
var statearr_33500_33528 = state_33498__$1;
(statearr_33500_33528[(2)] = inst_33493);

(statearr_33500_33528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (1))){
var inst_33475 = null;
var state_33498__$1 = (function (){var statearr_33501 = state_33498;
(statearr_33501[(7)] = inst_33475);

return statearr_33501;
})();
var statearr_33502_33529 = state_33498__$1;
(statearr_33502_33529[(2)] = null);

(statearr_33502_33529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (4))){
var inst_33478 = (state_33498[(8)]);
var inst_33478__$1 = (state_33498[(2)]);
var inst_33479 = (inst_33478__$1 == null);
var inst_33480 = cljs.core.not.call(null,inst_33479);
var state_33498__$1 = (function (){var statearr_33503 = state_33498;
(statearr_33503[(8)] = inst_33478__$1);

return statearr_33503;
})();
if(inst_33480){
var statearr_33504_33530 = state_33498__$1;
(statearr_33504_33530[(1)] = (5));

} else {
var statearr_33505_33531 = state_33498__$1;
(statearr_33505_33531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (6))){
var state_33498__$1 = state_33498;
var statearr_33506_33532 = state_33498__$1;
(statearr_33506_33532[(2)] = null);

(statearr_33506_33532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (3))){
var inst_33495 = (state_33498[(2)]);
var inst_33496 = cljs.core.async.close_BANG_.call(null,out);
var state_33498__$1 = (function (){var statearr_33507 = state_33498;
(statearr_33507[(9)] = inst_33495);

return statearr_33507;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33498__$1,inst_33496);
} else {
if((state_val_33499 === (2))){
var state_33498__$1 = state_33498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33498__$1,(4),ch);
} else {
if((state_val_33499 === (11))){
var inst_33478 = (state_33498[(8)]);
var inst_33487 = (state_33498[(2)]);
var inst_33475 = inst_33478;
var state_33498__$1 = (function (){var statearr_33508 = state_33498;
(statearr_33508[(10)] = inst_33487);

(statearr_33508[(7)] = inst_33475);

return statearr_33508;
})();
var statearr_33509_33533 = state_33498__$1;
(statearr_33509_33533[(2)] = null);

(statearr_33509_33533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (9))){
var inst_33478 = (state_33498[(8)]);
var state_33498__$1 = state_33498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33498__$1,(11),out,inst_33478);
} else {
if((state_val_33499 === (5))){
var inst_33475 = (state_33498[(7)]);
var inst_33478 = (state_33498[(8)]);
var inst_33482 = cljs.core._EQ_.call(null,inst_33478,inst_33475);
var state_33498__$1 = state_33498;
if(inst_33482){
var statearr_33511_33534 = state_33498__$1;
(statearr_33511_33534[(1)] = (8));

} else {
var statearr_33512_33535 = state_33498__$1;
(statearr_33512_33535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (10))){
var inst_33490 = (state_33498[(2)]);
var state_33498__$1 = state_33498;
var statearr_33513_33536 = state_33498__$1;
(statearr_33513_33536[(2)] = inst_33490);

(statearr_33513_33536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33499 === (8))){
var inst_33475 = (state_33498[(7)]);
var tmp33510 = inst_33475;
var inst_33475__$1 = tmp33510;
var state_33498__$1 = (function (){var statearr_33514 = state_33498;
(statearr_33514[(7)] = inst_33475__$1);

return statearr_33514;
})();
var statearr_33515_33537 = state_33498__$1;
(statearr_33515_33537[(2)] = null);

(statearr_33515_33537[(1)] = (2));


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
});})(c__30902__auto___33527,out))
;
return ((function (switch__30790__auto__,c__30902__auto___33527,out){
return (function() {
var cljs$core$async$state_machine__30791__auto__ = null;
var cljs$core$async$state_machine__30791__auto____0 = (function (){
var statearr_33519 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33519[(0)] = cljs$core$async$state_machine__30791__auto__);

(statearr_33519[(1)] = (1));

return statearr_33519;
});
var cljs$core$async$state_machine__30791__auto____1 = (function (state_33498){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_33498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e33520){if((e33520 instanceof Object)){
var ex__30794__auto__ = e33520;
var statearr_33521_33538 = state_33498;
(statearr_33521_33538[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33539 = state_33498;
state_33498 = G__33539;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$state_machine__30791__auto__ = function(state_33498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30791__auto____1.call(this,state_33498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30791__auto____0;
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30791__auto____1;
return cljs$core$async$state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto___33527,out))
})();
var state__30904__auto__ = (function (){var statearr_33522 = f__30903__auto__.call(null);
(statearr_33522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___33527);

return statearr_33522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto___33527,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33540 = [];
var len__27014__auto___33610 = arguments.length;
var i__27015__auto___33611 = (0);
while(true){
if((i__27015__auto___33611 < len__27014__auto___33610)){
args33540.push((arguments[i__27015__auto___33611]));

var G__33612 = (i__27015__auto___33611 + (1));
i__27015__auto___33611 = G__33612;
continue;
} else {
}
break;
}

var G__33542 = args33540.length;
switch (G__33542) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33540.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30902__auto___33614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto___33614,out){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto___33614,out){
return (function (state_33580){
var state_val_33581 = (state_33580[(1)]);
if((state_val_33581 === (7))){
var inst_33576 = (state_33580[(2)]);
var state_33580__$1 = state_33580;
var statearr_33582_33615 = state_33580__$1;
(statearr_33582_33615[(2)] = inst_33576);

(statearr_33582_33615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33581 === (1))){
var inst_33543 = (new Array(n));
var inst_33544 = inst_33543;
var inst_33545 = (0);
var state_33580__$1 = (function (){var statearr_33583 = state_33580;
(statearr_33583[(7)] = inst_33545);

(statearr_33583[(8)] = inst_33544);

return statearr_33583;
})();
var statearr_33584_33616 = state_33580__$1;
(statearr_33584_33616[(2)] = null);

(statearr_33584_33616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33581 === (4))){
var inst_33548 = (state_33580[(9)]);
var inst_33548__$1 = (state_33580[(2)]);
var inst_33549 = (inst_33548__$1 == null);
var inst_33550 = cljs.core.not.call(null,inst_33549);
var state_33580__$1 = (function (){var statearr_33585 = state_33580;
(statearr_33585[(9)] = inst_33548__$1);

return statearr_33585;
})();
if(inst_33550){
var statearr_33586_33617 = state_33580__$1;
(statearr_33586_33617[(1)] = (5));

} else {
var statearr_33587_33618 = state_33580__$1;
(statearr_33587_33618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33581 === (15))){
var inst_33570 = (state_33580[(2)]);
var state_33580__$1 = state_33580;
var statearr_33588_33619 = state_33580__$1;
(statearr_33588_33619[(2)] = inst_33570);

(statearr_33588_33619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33581 === (13))){
var state_33580__$1 = state_33580;
var statearr_33589_33620 = state_33580__$1;
(statearr_33589_33620[(2)] = null);

(statearr_33589_33620[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33581 === (6))){
var inst_33545 = (state_33580[(7)]);
var inst_33566 = (inst_33545 > (0));
var state_33580__$1 = state_33580;
if(cljs.core.truth_(inst_33566)){
var statearr_33590_33621 = state_33580__$1;
(statearr_33590_33621[(1)] = (12));

} else {
var statearr_33591_33622 = state_33580__$1;
(statearr_33591_33622[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33581 === (3))){
var inst_33578 = (state_33580[(2)]);
var state_33580__$1 = state_33580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33580__$1,inst_33578);
} else {
if((state_val_33581 === (12))){
var inst_33544 = (state_33580[(8)]);
var inst_33568 = cljs.core.vec.call(null,inst_33544);
var state_33580__$1 = state_33580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33580__$1,(15),out,inst_33568);
} else {
if((state_val_33581 === (2))){
var state_33580__$1 = state_33580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33580__$1,(4),ch);
} else {
if((state_val_33581 === (11))){
var inst_33560 = (state_33580[(2)]);
var inst_33561 = (new Array(n));
var inst_33544 = inst_33561;
var inst_33545 = (0);
var state_33580__$1 = (function (){var statearr_33592 = state_33580;
(statearr_33592[(7)] = inst_33545);

(statearr_33592[(8)] = inst_33544);

(statearr_33592[(10)] = inst_33560);

return statearr_33592;
})();
var statearr_33593_33623 = state_33580__$1;
(statearr_33593_33623[(2)] = null);

(statearr_33593_33623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33581 === (9))){
var inst_33544 = (state_33580[(8)]);
var inst_33558 = cljs.core.vec.call(null,inst_33544);
var state_33580__$1 = state_33580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33580__$1,(11),out,inst_33558);
} else {
if((state_val_33581 === (5))){
var inst_33545 = (state_33580[(7)]);
var inst_33548 = (state_33580[(9)]);
var inst_33544 = (state_33580[(8)]);
var inst_33553 = (state_33580[(11)]);
var inst_33552 = (inst_33544[inst_33545] = inst_33548);
var inst_33553__$1 = (inst_33545 + (1));
var inst_33554 = (inst_33553__$1 < n);
var state_33580__$1 = (function (){var statearr_33594 = state_33580;
(statearr_33594[(12)] = inst_33552);

(statearr_33594[(11)] = inst_33553__$1);

return statearr_33594;
})();
if(cljs.core.truth_(inst_33554)){
var statearr_33595_33624 = state_33580__$1;
(statearr_33595_33624[(1)] = (8));

} else {
var statearr_33596_33625 = state_33580__$1;
(statearr_33596_33625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33581 === (14))){
var inst_33573 = (state_33580[(2)]);
var inst_33574 = cljs.core.async.close_BANG_.call(null,out);
var state_33580__$1 = (function (){var statearr_33598 = state_33580;
(statearr_33598[(13)] = inst_33573);

return statearr_33598;
})();
var statearr_33599_33626 = state_33580__$1;
(statearr_33599_33626[(2)] = inst_33574);

(statearr_33599_33626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33581 === (10))){
var inst_33564 = (state_33580[(2)]);
var state_33580__$1 = state_33580;
var statearr_33600_33627 = state_33580__$1;
(statearr_33600_33627[(2)] = inst_33564);

(statearr_33600_33627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33581 === (8))){
var inst_33544 = (state_33580[(8)]);
var inst_33553 = (state_33580[(11)]);
var tmp33597 = inst_33544;
var inst_33544__$1 = tmp33597;
var inst_33545 = inst_33553;
var state_33580__$1 = (function (){var statearr_33601 = state_33580;
(statearr_33601[(7)] = inst_33545);

(statearr_33601[(8)] = inst_33544__$1);

return statearr_33601;
})();
var statearr_33602_33628 = state_33580__$1;
(statearr_33602_33628[(2)] = null);

(statearr_33602_33628[(1)] = (2));


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
});})(c__30902__auto___33614,out))
;
return ((function (switch__30790__auto__,c__30902__auto___33614,out){
return (function() {
var cljs$core$async$state_machine__30791__auto__ = null;
var cljs$core$async$state_machine__30791__auto____0 = (function (){
var statearr_33606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33606[(0)] = cljs$core$async$state_machine__30791__auto__);

(statearr_33606[(1)] = (1));

return statearr_33606;
});
var cljs$core$async$state_machine__30791__auto____1 = (function (state_33580){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_33580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e33607){if((e33607 instanceof Object)){
var ex__30794__auto__ = e33607;
var statearr_33608_33629 = state_33580;
(statearr_33608_33629[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33630 = state_33580;
state_33580 = G__33630;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$state_machine__30791__auto__ = function(state_33580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30791__auto____1.call(this,state_33580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30791__auto____0;
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30791__auto____1;
return cljs$core$async$state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto___33614,out))
})();
var state__30904__auto__ = (function (){var statearr_33609 = f__30903__auto__.call(null);
(statearr_33609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___33614);

return statearr_33609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto___33614,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33631 = [];
var len__27014__auto___33705 = arguments.length;
var i__27015__auto___33706 = (0);
while(true){
if((i__27015__auto___33706 < len__27014__auto___33705)){
args33631.push((arguments[i__27015__auto___33706]));

var G__33707 = (i__27015__auto___33706 + (1));
i__27015__auto___33706 = G__33707;
continue;
} else {
}
break;
}

var G__33633 = args33631.length;
switch (G__33633) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33631.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30902__auto___33709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30902__auto___33709,out){
return (function (){
var f__30903__auto__ = (function (){var switch__30790__auto__ = ((function (c__30902__auto___33709,out){
return (function (state_33675){
var state_val_33676 = (state_33675[(1)]);
if((state_val_33676 === (7))){
var inst_33671 = (state_33675[(2)]);
var state_33675__$1 = state_33675;
var statearr_33677_33710 = state_33675__$1;
(statearr_33677_33710[(2)] = inst_33671);

(statearr_33677_33710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (1))){
var inst_33634 = [];
var inst_33635 = inst_33634;
var inst_33636 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33675__$1 = (function (){var statearr_33678 = state_33675;
(statearr_33678[(7)] = inst_33635);

(statearr_33678[(8)] = inst_33636);

return statearr_33678;
})();
var statearr_33679_33711 = state_33675__$1;
(statearr_33679_33711[(2)] = null);

(statearr_33679_33711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (4))){
var inst_33639 = (state_33675[(9)]);
var inst_33639__$1 = (state_33675[(2)]);
var inst_33640 = (inst_33639__$1 == null);
var inst_33641 = cljs.core.not.call(null,inst_33640);
var state_33675__$1 = (function (){var statearr_33680 = state_33675;
(statearr_33680[(9)] = inst_33639__$1);

return statearr_33680;
})();
if(inst_33641){
var statearr_33681_33712 = state_33675__$1;
(statearr_33681_33712[(1)] = (5));

} else {
var statearr_33682_33713 = state_33675__$1;
(statearr_33682_33713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (15))){
var inst_33665 = (state_33675[(2)]);
var state_33675__$1 = state_33675;
var statearr_33683_33714 = state_33675__$1;
(statearr_33683_33714[(2)] = inst_33665);

(statearr_33683_33714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (13))){
var state_33675__$1 = state_33675;
var statearr_33684_33715 = state_33675__$1;
(statearr_33684_33715[(2)] = null);

(statearr_33684_33715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (6))){
var inst_33635 = (state_33675[(7)]);
var inst_33660 = inst_33635.length;
var inst_33661 = (inst_33660 > (0));
var state_33675__$1 = state_33675;
if(cljs.core.truth_(inst_33661)){
var statearr_33685_33716 = state_33675__$1;
(statearr_33685_33716[(1)] = (12));

} else {
var statearr_33686_33717 = state_33675__$1;
(statearr_33686_33717[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (3))){
var inst_33673 = (state_33675[(2)]);
var state_33675__$1 = state_33675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33675__$1,inst_33673);
} else {
if((state_val_33676 === (12))){
var inst_33635 = (state_33675[(7)]);
var inst_33663 = cljs.core.vec.call(null,inst_33635);
var state_33675__$1 = state_33675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33675__$1,(15),out,inst_33663);
} else {
if((state_val_33676 === (2))){
var state_33675__$1 = state_33675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33675__$1,(4),ch);
} else {
if((state_val_33676 === (11))){
var inst_33643 = (state_33675[(10)]);
var inst_33639 = (state_33675[(9)]);
var inst_33653 = (state_33675[(2)]);
var inst_33654 = [];
var inst_33655 = inst_33654.push(inst_33639);
var inst_33635 = inst_33654;
var inst_33636 = inst_33643;
var state_33675__$1 = (function (){var statearr_33687 = state_33675;
(statearr_33687[(11)] = inst_33655);

(statearr_33687[(7)] = inst_33635);

(statearr_33687[(8)] = inst_33636);

(statearr_33687[(12)] = inst_33653);

return statearr_33687;
})();
var statearr_33688_33718 = state_33675__$1;
(statearr_33688_33718[(2)] = null);

(statearr_33688_33718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (9))){
var inst_33635 = (state_33675[(7)]);
var inst_33651 = cljs.core.vec.call(null,inst_33635);
var state_33675__$1 = state_33675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33675__$1,(11),out,inst_33651);
} else {
if((state_val_33676 === (5))){
var inst_33636 = (state_33675[(8)]);
var inst_33643 = (state_33675[(10)]);
var inst_33639 = (state_33675[(9)]);
var inst_33643__$1 = f.call(null,inst_33639);
var inst_33644 = cljs.core._EQ_.call(null,inst_33643__$1,inst_33636);
var inst_33645 = cljs.core.keyword_identical_QMARK_.call(null,inst_33636,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33646 = (inst_33644) || (inst_33645);
var state_33675__$1 = (function (){var statearr_33689 = state_33675;
(statearr_33689[(10)] = inst_33643__$1);

return statearr_33689;
})();
if(cljs.core.truth_(inst_33646)){
var statearr_33690_33719 = state_33675__$1;
(statearr_33690_33719[(1)] = (8));

} else {
var statearr_33691_33720 = state_33675__$1;
(statearr_33691_33720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (14))){
var inst_33668 = (state_33675[(2)]);
var inst_33669 = cljs.core.async.close_BANG_.call(null,out);
var state_33675__$1 = (function (){var statearr_33693 = state_33675;
(statearr_33693[(13)] = inst_33668);

return statearr_33693;
})();
var statearr_33694_33721 = state_33675__$1;
(statearr_33694_33721[(2)] = inst_33669);

(statearr_33694_33721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (10))){
var inst_33658 = (state_33675[(2)]);
var state_33675__$1 = state_33675;
var statearr_33695_33722 = state_33675__$1;
(statearr_33695_33722[(2)] = inst_33658);

(statearr_33695_33722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33676 === (8))){
var inst_33635 = (state_33675[(7)]);
var inst_33643 = (state_33675[(10)]);
var inst_33639 = (state_33675[(9)]);
var inst_33648 = inst_33635.push(inst_33639);
var tmp33692 = inst_33635;
var inst_33635__$1 = tmp33692;
var inst_33636 = inst_33643;
var state_33675__$1 = (function (){var statearr_33696 = state_33675;
(statearr_33696[(7)] = inst_33635__$1);

(statearr_33696[(8)] = inst_33636);

(statearr_33696[(14)] = inst_33648);

return statearr_33696;
})();
var statearr_33697_33723 = state_33675__$1;
(statearr_33697_33723[(2)] = null);

(statearr_33697_33723[(1)] = (2));


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
});})(c__30902__auto___33709,out))
;
return ((function (switch__30790__auto__,c__30902__auto___33709,out){
return (function() {
var cljs$core$async$state_machine__30791__auto__ = null;
var cljs$core$async$state_machine__30791__auto____0 = (function (){
var statearr_33701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33701[(0)] = cljs$core$async$state_machine__30791__auto__);

(statearr_33701[(1)] = (1));

return statearr_33701;
});
var cljs$core$async$state_machine__30791__auto____1 = (function (state_33675){
while(true){
var ret_value__30792__auto__ = (function (){try{while(true){
var result__30793__auto__ = switch__30790__auto__.call(null,state_33675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30793__auto__;
}
break;
}
}catch (e33702){if((e33702 instanceof Object)){
var ex__30794__auto__ = e33702;
var statearr_33703_33724 = state_33675;
(statearr_33703_33724[(5)] = ex__30794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33725 = state_33675;
state_33675 = G__33725;
continue;
} else {
return ret_value__30792__auto__;
}
break;
}
});
cljs$core$async$state_machine__30791__auto__ = function(state_33675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30791__auto____1.call(this,state_33675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30791__auto____0;
cljs$core$async$state_machine__30791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30791__auto____1;
return cljs$core$async$state_machine__30791__auto__;
})()
;})(switch__30790__auto__,c__30902__auto___33709,out))
})();
var state__30904__auto__ = (function (){var statearr_33704 = f__30903__auto__.call(null);
(statearr_33704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30902__auto___33709);

return statearr_33704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30904__auto__);
});})(c__30902__auto___33709,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510423697368