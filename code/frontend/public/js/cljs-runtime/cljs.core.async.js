goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30499 = arguments.length;
switch (G__30499) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30500 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30500 = (function (f,blockable,meta30501){
this.f = f;
this.blockable = blockable;
this.meta30501 = meta30501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30502,meta30501__$1){
var self__ = this;
var _30502__$1 = this;
return (new cljs.core.async.t_cljs$core$async30500(self__.f,self__.blockable,meta30501__$1));
}));

(cljs.core.async.t_cljs$core$async30500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30502){
var self__ = this;
var _30502__$1 = this;
return self__.meta30501;
}));

(cljs.core.async.t_cljs$core$async30500.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30500.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30501","meta30501",-158613633,null)], null);
}));

(cljs.core.async.t_cljs$core$async30500.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30500");

(cljs.core.async.t_cljs$core$async30500.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30500");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30500.
 */
cljs.core.async.__GT_t_cljs$core$async30500 = (function cljs$core$async$__GT_t_cljs$core$async30500(f__$1,blockable__$1,meta30501){
return (new cljs.core.async.t_cljs$core$async30500(f__$1,blockable__$1,meta30501));
});

}

return (new cljs.core.async.t_cljs$core$async30500(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__30563 = arguments.length;
switch (G__30563) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30586 = arguments.length;
switch (G__30586) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__30598 = arguments.length;
switch (G__30598) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32475 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32475) : fn1.call(null,val_32475));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32475) : fn1.call(null,val_32475));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30616 = arguments.length;
switch (G__30616) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___32481 = n;
var x_32482 = (0);
while(true){
if((x_32482 < n__4706__auto___32481)){
(a[x_32482] = x_32482);

var G__32483 = (x_32482 + (1));
x_32482 = G__32483;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30618 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30618 = (function (flag,meta30619){
this.flag = flag;
this.meta30619 = meta30619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30620,meta30619__$1){
var self__ = this;
var _30620__$1 = this;
return (new cljs.core.async.t_cljs$core$async30618(self__.flag,meta30619__$1));
}));

(cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30620){
var self__ = this;
var _30620__$1 = this;
return self__.meta30619;
}));

(cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30619","meta30619",1708456388,null)], null);
}));

(cljs.core.async.t_cljs$core$async30618.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30618");

(cljs.core.async.t_cljs$core$async30618.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30618");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30618.
 */
cljs.core.async.__GT_t_cljs$core$async30618 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30618(flag__$1,meta30619){
return (new cljs.core.async.t_cljs$core$async30618(flag__$1,meta30619));
});

}

return (new cljs.core.async.t_cljs$core$async30618(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30648 = (function (flag,cb,meta30649){
this.flag = flag;
this.cb = cb;
this.meta30649 = meta30649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30650,meta30649__$1){
var self__ = this;
var _30650__$1 = this;
return (new cljs.core.async.t_cljs$core$async30648(self__.flag,self__.cb,meta30649__$1));
}));

(cljs.core.async.t_cljs$core$async30648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30650){
var self__ = this;
var _30650__$1 = this;
return self__.meta30649;
}));

(cljs.core.async.t_cljs$core$async30648.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30648.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30648.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30648.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30649","meta30649",979189451,null)], null);
}));

(cljs.core.async.t_cljs$core$async30648.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30648");

(cljs.core.async.t_cljs$core$async30648.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30648");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30648.
 */
cljs.core.async.__GT_t_cljs$core$async30648 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30648(flag__$1,cb__$1,meta30649){
return (new cljs.core.async.t_cljs$core$async30648(flag__$1,cb__$1,meta30649));
});

}

return (new cljs.core.async.t_cljs$core$async30648(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30675_SHARP_){
var G__30679 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30675_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30679) : fret.call(null,G__30679));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30676_SHARP_){
var G__30680 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30676_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30680) : fret.call(null,G__30680));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32484 = (i + (1));
i = G__32484;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4835__auto__ = [];
var len__4829__auto___32485 = arguments.length;
var i__4830__auto___32486 = (0);
while(true){
if((i__4830__auto___32486 < len__4829__auto___32485)){
args__4835__auto__.push((arguments[i__4830__auto___32486]));

var G__32487 = (i__4830__auto___32486 + (1));
i__4830__auto___32486 = G__32487;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30683){
var map__30684 = p__30683;
var map__30684__$1 = cljs.core.__destructure_map(map__30684);
var opts = map__30684__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30681){
var G__30682 = cljs.core.first(seq30681);
var seq30681__$1 = cljs.core.next(seq30681);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30682,seq30681__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__30692 = arguments.length;
switch (G__30692) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30416__auto___32489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_30750){
var state_val_30751 = (state_30750[(1)]);
if((state_val_30751 === (7))){
var inst_30746 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
var statearr_30755_32490 = state_30750__$1;
(statearr_30755_32490[(2)] = inst_30746);

(statearr_30755_32490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (1))){
var state_30750__$1 = state_30750;
var statearr_30756_32491 = state_30750__$1;
(statearr_30756_32491[(2)] = null);

(statearr_30756_32491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (4))){
var inst_30728 = (state_30750[(7)]);
var inst_30728__$1 = (state_30750[(2)]);
var inst_30730 = (inst_30728__$1 == null);
var state_30750__$1 = (function (){var statearr_30759 = state_30750;
(statearr_30759[(7)] = inst_30728__$1);

return statearr_30759;
})();
if(cljs.core.truth_(inst_30730)){
var statearr_30760_32492 = state_30750__$1;
(statearr_30760_32492[(1)] = (5));

} else {
var statearr_30766_32493 = state_30750__$1;
(statearr_30766_32493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (13))){
var state_30750__$1 = state_30750;
var statearr_30770_32494 = state_30750__$1;
(statearr_30770_32494[(2)] = null);

(statearr_30770_32494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (6))){
var inst_30728 = (state_30750[(7)]);
var state_30750__$1 = state_30750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30750__$1,(11),to,inst_30728);
} else {
if((state_val_30751 === (3))){
var inst_30748 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30750__$1,inst_30748);
} else {
if((state_val_30751 === (12))){
var state_30750__$1 = state_30750;
var statearr_30775_32495 = state_30750__$1;
(statearr_30775_32495[(2)] = null);

(statearr_30775_32495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (2))){
var state_30750__$1 = state_30750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30750__$1,(4),from);
} else {
if((state_val_30751 === (11))){
var inst_30739 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
if(cljs.core.truth_(inst_30739)){
var statearr_30780_32496 = state_30750__$1;
(statearr_30780_32496[(1)] = (12));

} else {
var statearr_30781_32497 = state_30750__$1;
(statearr_30781_32497[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (9))){
var state_30750__$1 = state_30750;
var statearr_30782_32498 = state_30750__$1;
(statearr_30782_32498[(2)] = null);

(statearr_30782_32498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (5))){
var state_30750__$1 = state_30750;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30783_32499 = state_30750__$1;
(statearr_30783_32499[(1)] = (8));

} else {
var statearr_30784_32500 = state_30750__$1;
(statearr_30784_32500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (14))){
var inst_30744 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
var statearr_30785_32501 = state_30750__$1;
(statearr_30785_32501[(2)] = inst_30744);

(statearr_30785_32501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (10))){
var inst_30736 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
var statearr_30786_32502 = state_30750__$1;
(statearr_30786_32502[(2)] = inst_30736);

(statearr_30786_32502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (8))){
var inst_30733 = cljs.core.async.close_BANG_(to);
var state_30750__$1 = state_30750;
var statearr_30787_32505 = state_30750__$1;
(statearr_30787_32505[(2)] = inst_30733);

(statearr_30787_32505[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__30340__auto__ = null;
var cljs$core$async$state_machine__30340__auto____0 = (function (){
var statearr_30788 = [null,null,null,null,null,null,null,null];
(statearr_30788[(0)] = cljs$core$async$state_machine__30340__auto__);

(statearr_30788[(1)] = (1));

return statearr_30788;
});
var cljs$core$async$state_machine__30340__auto____1 = (function (state_30750){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_30750);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e30789){var ex__30343__auto__ = e30789;
var statearr_30790_32506 = state_30750;
(statearr_30790_32506[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_30750[(4)]))){
var statearr_30791_32507 = state_30750;
(statearr_30791_32507[(1)] = cljs.core.first((state_30750[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32508 = state_30750;
state_30750 = G__32508;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$state_machine__30340__auto__ = function(state_30750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30340__auto____1.call(this,state_30750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30340__auto____0;
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30340__auto____1;
return cljs$core$async$state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_30792 = f__30417__auto__();
(statearr_30792[(6)] = c__30416__auto___32489);

return statearr_30792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30793){
var vec__30794 = p__30793;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30794,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30794,(1),null);
var job = vec__30794;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30416__auto___32509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_30801){
var state_val_30802 = (state_30801[(1)]);
if((state_val_30802 === (1))){
var state_30801__$1 = state_30801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30801__$1,(2),res,v);
} else {
if((state_val_30802 === (2))){
var inst_30798 = (state_30801[(2)]);
var inst_30799 = cljs.core.async.close_BANG_(res);
var state_30801__$1 = (function (){var statearr_30803 = state_30801;
(statearr_30803[(7)] = inst_30798);

return statearr_30803;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30801__$1,inst_30799);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____0 = (function (){
var statearr_30804 = [null,null,null,null,null,null,null,null];
(statearr_30804[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__);

(statearr_30804[(1)] = (1));

return statearr_30804;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____1 = (function (state_30801){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_30801);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e30805){var ex__30343__auto__ = e30805;
var statearr_30806_32510 = state_30801;
(statearr_30806_32510[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_30801[(4)]))){
var statearr_30807_32511 = state_30801;
(statearr_30807_32511[(1)] = cljs.core.first((state_30801[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32512 = state_30801;
state_30801 = G__32512;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__ = function(state_30801){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____1.call(this,state_30801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_30808 = f__30417__auto__();
(statearr_30808[(6)] = c__30416__auto___32509);

return statearr_30808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30813){
var vec__30814 = p__30813;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30814,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30814,(1),null);
var job = vec__30814;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___32513 = n;
var __32514 = (0);
while(true){
if((__32514 < n__4706__auto___32513)){
var G__30822_32515 = type;
var G__30822_32516__$1 = (((G__30822_32515 instanceof cljs.core.Keyword))?G__30822_32515.fqn:null);
switch (G__30822_32516__$1) {
case "compute":
var c__30416__auto___32518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32514,c__30416__auto___32518,G__30822_32515,G__30822_32516__$1,n__4706__auto___32513,jobs,results,process,async){
return (function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = ((function (__32514,c__30416__auto___32518,G__30822_32515,G__30822_32516__$1,n__4706__auto___32513,jobs,results,process,async){
return (function (state_30839){
var state_val_30840 = (state_30839[(1)]);
if((state_val_30840 === (1))){
var state_30839__$1 = state_30839;
var statearr_30841_32519 = state_30839__$1;
(statearr_30841_32519[(2)] = null);

(statearr_30841_32519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (2))){
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30839__$1,(4),jobs);
} else {
if((state_val_30840 === (3))){
var inst_30837 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30839__$1,inst_30837);
} else {
if((state_val_30840 === (4))){
var inst_30829 = (state_30839[(2)]);
var inst_30830 = process(inst_30829);
var state_30839__$1 = state_30839;
if(cljs.core.truth_(inst_30830)){
var statearr_30842_32520 = state_30839__$1;
(statearr_30842_32520[(1)] = (5));

} else {
var statearr_30843_32521 = state_30839__$1;
(statearr_30843_32521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (5))){
var state_30839__$1 = state_30839;
var statearr_30844_32522 = state_30839__$1;
(statearr_30844_32522[(2)] = null);

(statearr_30844_32522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (6))){
var state_30839__$1 = state_30839;
var statearr_30845_32523 = state_30839__$1;
(statearr_30845_32523[(2)] = null);

(statearr_30845_32523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (7))){
var inst_30835 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30846_32524 = state_30839__$1;
(statearr_30846_32524[(2)] = inst_30835);

(statearr_30846_32524[(1)] = (3));


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
});})(__32514,c__30416__auto___32518,G__30822_32515,G__30822_32516__$1,n__4706__auto___32513,jobs,results,process,async))
;
return ((function (__32514,switch__30339__auto__,c__30416__auto___32518,G__30822_32515,G__30822_32516__$1,n__4706__auto___32513,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____0 = (function (){
var statearr_30847 = [null,null,null,null,null,null,null];
(statearr_30847[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__);

(statearr_30847[(1)] = (1));

return statearr_30847;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____1 = (function (state_30839){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_30839);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e30848){var ex__30343__auto__ = e30848;
var statearr_30849_32526 = state_30839;
(statearr_30849_32526[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_30839[(4)]))){
var statearr_30850_32527 = state_30839;
(statearr_30850_32527[(1)] = cljs.core.first((state_30839[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32528 = state_30839;
state_30839 = G__32528;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__ = function(state_30839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____1.call(this,state_30839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__;
})()
;})(__32514,switch__30339__auto__,c__30416__auto___32518,G__30822_32515,G__30822_32516__$1,n__4706__auto___32513,jobs,results,process,async))
})();
var state__30418__auto__ = (function (){var statearr_30851 = f__30417__auto__();
(statearr_30851[(6)] = c__30416__auto___32518);

return statearr_30851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
});})(__32514,c__30416__auto___32518,G__30822_32515,G__30822_32516__$1,n__4706__auto___32513,jobs,results,process,async))
);


break;
case "async":
var c__30416__auto___32529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32514,c__30416__auto___32529,G__30822_32515,G__30822_32516__$1,n__4706__auto___32513,jobs,results,process,async){
return (function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = ((function (__32514,c__30416__auto___32529,G__30822_32515,G__30822_32516__$1,n__4706__auto___32513,jobs,results,process,async){
return (function (state_30864){
var state_val_30865 = (state_30864[(1)]);
if((state_val_30865 === (1))){
var state_30864__$1 = state_30864;
var statearr_30866_32530 = state_30864__$1;
(statearr_30866_32530[(2)] = null);

(statearr_30866_32530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (2))){
var state_30864__$1 = state_30864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30864__$1,(4),jobs);
} else {
if((state_val_30865 === (3))){
var inst_30862 = (state_30864[(2)]);
var state_30864__$1 = state_30864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30864__$1,inst_30862);
} else {
if((state_val_30865 === (4))){
var inst_30854 = (state_30864[(2)]);
var inst_30855 = async(inst_30854);
var state_30864__$1 = state_30864;
if(cljs.core.truth_(inst_30855)){
var statearr_30867_32531 = state_30864__$1;
(statearr_30867_32531[(1)] = (5));

} else {
var statearr_30868_32532 = state_30864__$1;
(statearr_30868_32532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (5))){
var state_30864__$1 = state_30864;
var statearr_30869_32533 = state_30864__$1;
(statearr_30869_32533[(2)] = null);

(statearr_30869_32533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (6))){
var state_30864__$1 = state_30864;
var statearr_30870_32534 = state_30864__$1;
(statearr_30870_32534[(2)] = null);

(statearr_30870_32534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (7))){
var inst_30860 = (state_30864[(2)]);
var state_30864__$1 = state_30864;
var statearr_30871_32535 = state_30864__$1;
(statearr_30871_32535[(2)] = inst_30860);

(statearr_30871_32535[(1)] = (3));


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
});})(__32514,c__30416__auto___32529,G__30822_32515,G__30822_32516__$1,n__4706__auto___32513,jobs,results,process,async))
;
return ((function (__32514,switch__30339__auto__,c__30416__auto___32529,G__30822_32515,G__30822_32516__$1,n__4706__auto___32513,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____0 = (function (){
var statearr_30872 = [null,null,null,null,null,null,null];
(statearr_30872[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__);

(statearr_30872[(1)] = (1));

return statearr_30872;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____1 = (function (state_30864){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_30864);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e30873){var ex__30343__auto__ = e30873;
var statearr_30874_32536 = state_30864;
(statearr_30874_32536[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_30864[(4)]))){
var statearr_30875_32537 = state_30864;
(statearr_30875_32537[(1)] = cljs.core.first((state_30864[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32538 = state_30864;
state_30864 = G__32538;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__ = function(state_30864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____1.call(this,state_30864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__;
})()
;})(__32514,switch__30339__auto__,c__30416__auto___32529,G__30822_32515,G__30822_32516__$1,n__4706__auto___32513,jobs,results,process,async))
})();
var state__30418__auto__ = (function (){var statearr_30876 = f__30417__auto__();
(statearr_30876[(6)] = c__30416__auto___32529);

return statearr_30876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
});})(__32514,c__30416__auto___32529,G__30822_32515,G__30822_32516__$1,n__4706__auto___32513,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30822_32516__$1)].join('')));

}

var G__32539 = (__32514 + (1));
__32514 = G__32539;
continue;
} else {
}
break;
}

var c__30416__auto___32540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_30898){
var state_val_30899 = (state_30898[(1)]);
if((state_val_30899 === (7))){
var inst_30894 = (state_30898[(2)]);
var state_30898__$1 = state_30898;
var statearr_30900_32541 = state_30898__$1;
(statearr_30900_32541[(2)] = inst_30894);

(statearr_30900_32541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30899 === (1))){
var state_30898__$1 = state_30898;
var statearr_30901_32542 = state_30898__$1;
(statearr_30901_32542[(2)] = null);

(statearr_30901_32542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30899 === (4))){
var inst_30879 = (state_30898[(7)]);
var inst_30879__$1 = (state_30898[(2)]);
var inst_30880 = (inst_30879__$1 == null);
var state_30898__$1 = (function (){var statearr_30902 = state_30898;
(statearr_30902[(7)] = inst_30879__$1);

return statearr_30902;
})();
if(cljs.core.truth_(inst_30880)){
var statearr_30903_32543 = state_30898__$1;
(statearr_30903_32543[(1)] = (5));

} else {
var statearr_30904_32544 = state_30898__$1;
(statearr_30904_32544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30899 === (6))){
var inst_30879 = (state_30898[(7)]);
var inst_30884 = (state_30898[(8)]);
var inst_30884__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30885 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30886 = [inst_30879,inst_30884__$1];
var inst_30887 = (new cljs.core.PersistentVector(null,2,(5),inst_30885,inst_30886,null));
var state_30898__$1 = (function (){var statearr_30912 = state_30898;
(statearr_30912[(8)] = inst_30884__$1);

return statearr_30912;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30898__$1,(8),jobs,inst_30887);
} else {
if((state_val_30899 === (3))){
var inst_30896 = (state_30898[(2)]);
var state_30898__$1 = state_30898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30898__$1,inst_30896);
} else {
if((state_val_30899 === (2))){
var state_30898__$1 = state_30898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30898__$1,(4),from);
} else {
if((state_val_30899 === (9))){
var inst_30891 = (state_30898[(2)]);
var state_30898__$1 = (function (){var statearr_30916 = state_30898;
(statearr_30916[(9)] = inst_30891);

return statearr_30916;
})();
var statearr_30917_32545 = state_30898__$1;
(statearr_30917_32545[(2)] = null);

(statearr_30917_32545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30899 === (5))){
var inst_30882 = cljs.core.async.close_BANG_(jobs);
var state_30898__$1 = state_30898;
var statearr_30918_32546 = state_30898__$1;
(statearr_30918_32546[(2)] = inst_30882);

(statearr_30918_32546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30899 === (8))){
var inst_30884 = (state_30898[(8)]);
var inst_30889 = (state_30898[(2)]);
var state_30898__$1 = (function (){var statearr_30919 = state_30898;
(statearr_30919[(10)] = inst_30889);

return statearr_30919;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30898__$1,(9),results,inst_30884);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____0 = (function (){
var statearr_30920 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30920[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__);

(statearr_30920[(1)] = (1));

return statearr_30920;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____1 = (function (state_30898){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_30898);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e30921){var ex__30343__auto__ = e30921;
var statearr_30922_32547 = state_30898;
(statearr_30922_32547[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_30898[(4)]))){
var statearr_30923_32548 = state_30898;
(statearr_30923_32548[(1)] = cljs.core.first((state_30898[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32549 = state_30898;
state_30898 = G__32549;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__ = function(state_30898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____1.call(this,state_30898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_30924 = f__30417__auto__();
(statearr_30924[(6)] = c__30416__auto___32540);

return statearr_30924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));


var c__30416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_30962){
var state_val_30963 = (state_30962[(1)]);
if((state_val_30963 === (7))){
var inst_30958 = (state_30962[(2)]);
var state_30962__$1 = state_30962;
var statearr_30964_32550 = state_30962__$1;
(statearr_30964_32550[(2)] = inst_30958);

(statearr_30964_32550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (20))){
var state_30962__$1 = state_30962;
var statearr_30965_32551 = state_30962__$1;
(statearr_30965_32551[(2)] = null);

(statearr_30965_32551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (1))){
var state_30962__$1 = state_30962;
var statearr_30966_32552 = state_30962__$1;
(statearr_30966_32552[(2)] = null);

(statearr_30966_32552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (4))){
var inst_30927 = (state_30962[(7)]);
var inst_30927__$1 = (state_30962[(2)]);
var inst_30928 = (inst_30927__$1 == null);
var state_30962__$1 = (function (){var statearr_30967 = state_30962;
(statearr_30967[(7)] = inst_30927__$1);

return statearr_30967;
})();
if(cljs.core.truth_(inst_30928)){
var statearr_30968_32553 = state_30962__$1;
(statearr_30968_32553[(1)] = (5));

} else {
var statearr_30969_32554 = state_30962__$1;
(statearr_30969_32554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (15))){
var inst_30940 = (state_30962[(8)]);
var state_30962__$1 = state_30962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30962__$1,(18),to,inst_30940);
} else {
if((state_val_30963 === (21))){
var inst_30953 = (state_30962[(2)]);
var state_30962__$1 = state_30962;
var statearr_30970_32555 = state_30962__$1;
(statearr_30970_32555[(2)] = inst_30953);

(statearr_30970_32555[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (13))){
var inst_30955 = (state_30962[(2)]);
var state_30962__$1 = (function (){var statearr_30971 = state_30962;
(statearr_30971[(9)] = inst_30955);

return statearr_30971;
})();
var statearr_30972_32557 = state_30962__$1;
(statearr_30972_32557[(2)] = null);

(statearr_30972_32557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (6))){
var inst_30927 = (state_30962[(7)]);
var state_30962__$1 = state_30962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30962__$1,(11),inst_30927);
} else {
if((state_val_30963 === (17))){
var inst_30948 = (state_30962[(2)]);
var state_30962__$1 = state_30962;
if(cljs.core.truth_(inst_30948)){
var statearr_30973_32559 = state_30962__$1;
(statearr_30973_32559[(1)] = (19));

} else {
var statearr_30974_32560 = state_30962__$1;
(statearr_30974_32560[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (3))){
var inst_30960 = (state_30962[(2)]);
var state_30962__$1 = state_30962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30962__$1,inst_30960);
} else {
if((state_val_30963 === (12))){
var inst_30937 = (state_30962[(10)]);
var state_30962__$1 = state_30962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30962__$1,(14),inst_30937);
} else {
if((state_val_30963 === (2))){
var state_30962__$1 = state_30962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30962__$1,(4),results);
} else {
if((state_val_30963 === (19))){
var state_30962__$1 = state_30962;
var statearr_30975_32561 = state_30962__$1;
(statearr_30975_32561[(2)] = null);

(statearr_30975_32561[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (11))){
var inst_30937 = (state_30962[(2)]);
var state_30962__$1 = (function (){var statearr_30976 = state_30962;
(statearr_30976[(10)] = inst_30937);

return statearr_30976;
})();
var statearr_30977_32562 = state_30962__$1;
(statearr_30977_32562[(2)] = null);

(statearr_30977_32562[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (9))){
var state_30962__$1 = state_30962;
var statearr_30978_32563 = state_30962__$1;
(statearr_30978_32563[(2)] = null);

(statearr_30978_32563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (5))){
var state_30962__$1 = state_30962;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30979_32564 = state_30962__$1;
(statearr_30979_32564[(1)] = (8));

} else {
var statearr_30980_32565 = state_30962__$1;
(statearr_30980_32565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (14))){
var inst_30940 = (state_30962[(8)]);
var inst_30942 = (state_30962[(11)]);
var inst_30940__$1 = (state_30962[(2)]);
var inst_30941 = (inst_30940__$1 == null);
var inst_30942__$1 = cljs.core.not(inst_30941);
var state_30962__$1 = (function (){var statearr_30981 = state_30962;
(statearr_30981[(8)] = inst_30940__$1);

(statearr_30981[(11)] = inst_30942__$1);

return statearr_30981;
})();
if(inst_30942__$1){
var statearr_30982_32567 = state_30962__$1;
(statearr_30982_32567[(1)] = (15));

} else {
var statearr_30983_32568 = state_30962__$1;
(statearr_30983_32568[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (16))){
var inst_30942 = (state_30962[(11)]);
var state_30962__$1 = state_30962;
var statearr_30984_32570 = state_30962__$1;
(statearr_30984_32570[(2)] = inst_30942);

(statearr_30984_32570[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (10))){
var inst_30934 = (state_30962[(2)]);
var state_30962__$1 = state_30962;
var statearr_30985_32571 = state_30962__$1;
(statearr_30985_32571[(2)] = inst_30934);

(statearr_30985_32571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (18))){
var inst_30945 = (state_30962[(2)]);
var state_30962__$1 = state_30962;
var statearr_30986_32572 = state_30962__$1;
(statearr_30986_32572[(2)] = inst_30945);

(statearr_30986_32572[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (8))){
var inst_30931 = cljs.core.async.close_BANG_(to);
var state_30962__$1 = state_30962;
var statearr_30987_32573 = state_30962__$1;
(statearr_30987_32573[(2)] = inst_30931);

(statearr_30987_32573[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____0 = (function (){
var statearr_30988 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__);

(statearr_30988[(1)] = (1));

return statearr_30988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____1 = (function (state_30962){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_30962);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e30989){var ex__30343__auto__ = e30989;
var statearr_30990_32574 = state_30962;
(statearr_30990_32574[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_30962[(4)]))){
var statearr_30991_32575 = state_30962;
(statearr_30991_32575[(1)] = cljs.core.first((state_30962[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32576 = state_30962;
state_30962 = G__32576;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__ = function(state_30962){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____1.call(this,state_30962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_30992 = f__30417__auto__();
(statearr_30992[(6)] = c__30416__auto__);

return statearr_30992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));

return c__30416__auto__;
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
var G__30994 = arguments.length;
switch (G__30994) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__30996 = arguments.length;
switch (G__30996) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__30998 = arguments.length;
switch (G__30998) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30416__auto___32582 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_31024){
var state_val_31025 = (state_31024[(1)]);
if((state_val_31025 === (7))){
var inst_31020 = (state_31024[(2)]);
var state_31024__$1 = state_31024;
var statearr_31026_32583 = state_31024__$1;
(statearr_31026_32583[(2)] = inst_31020);

(statearr_31026_32583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (1))){
var state_31024__$1 = state_31024;
var statearr_31027_32584 = state_31024__$1;
(statearr_31027_32584[(2)] = null);

(statearr_31027_32584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (4))){
var inst_31001 = (state_31024[(7)]);
var inst_31001__$1 = (state_31024[(2)]);
var inst_31002 = (inst_31001__$1 == null);
var state_31024__$1 = (function (){var statearr_31028 = state_31024;
(statearr_31028[(7)] = inst_31001__$1);

return statearr_31028;
})();
if(cljs.core.truth_(inst_31002)){
var statearr_31029_32585 = state_31024__$1;
(statearr_31029_32585[(1)] = (5));

} else {
var statearr_31030_32586 = state_31024__$1;
(statearr_31030_32586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (13))){
var state_31024__$1 = state_31024;
var statearr_31031_32587 = state_31024__$1;
(statearr_31031_32587[(2)] = null);

(statearr_31031_32587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (6))){
var inst_31001 = (state_31024[(7)]);
var inst_31007 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31001) : p.call(null,inst_31001));
var state_31024__$1 = state_31024;
if(cljs.core.truth_(inst_31007)){
var statearr_31032_32588 = state_31024__$1;
(statearr_31032_32588[(1)] = (9));

} else {
var statearr_31033_32589 = state_31024__$1;
(statearr_31033_32589[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (3))){
var inst_31022 = (state_31024[(2)]);
var state_31024__$1 = state_31024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31024__$1,inst_31022);
} else {
if((state_val_31025 === (12))){
var state_31024__$1 = state_31024;
var statearr_31035_32590 = state_31024__$1;
(statearr_31035_32590[(2)] = null);

(statearr_31035_32590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (2))){
var state_31024__$1 = state_31024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31024__$1,(4),ch);
} else {
if((state_val_31025 === (11))){
var inst_31001 = (state_31024[(7)]);
var inst_31011 = (state_31024[(2)]);
var state_31024__$1 = state_31024;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31024__$1,(8),inst_31011,inst_31001);
} else {
if((state_val_31025 === (9))){
var state_31024__$1 = state_31024;
var statearr_31036_32591 = state_31024__$1;
(statearr_31036_32591[(2)] = tc);

(statearr_31036_32591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (5))){
var inst_31004 = cljs.core.async.close_BANG_(tc);
var inst_31005 = cljs.core.async.close_BANG_(fc);
var state_31024__$1 = (function (){var statearr_31037 = state_31024;
(statearr_31037[(8)] = inst_31004);

return statearr_31037;
})();
var statearr_31038_32592 = state_31024__$1;
(statearr_31038_32592[(2)] = inst_31005);

(statearr_31038_32592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (14))){
var inst_31018 = (state_31024[(2)]);
var state_31024__$1 = state_31024;
var statearr_31039_32593 = state_31024__$1;
(statearr_31039_32593[(2)] = inst_31018);

(statearr_31039_32593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (10))){
var state_31024__$1 = state_31024;
var statearr_31040_32594 = state_31024__$1;
(statearr_31040_32594[(2)] = fc);

(statearr_31040_32594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31025 === (8))){
var inst_31013 = (state_31024[(2)]);
var state_31024__$1 = state_31024;
if(cljs.core.truth_(inst_31013)){
var statearr_31041_32595 = state_31024__$1;
(statearr_31041_32595[(1)] = (12));

} else {
var statearr_31042_32596 = state_31024__$1;
(statearr_31042_32596[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__30340__auto__ = null;
var cljs$core$async$state_machine__30340__auto____0 = (function (){
var statearr_31043 = [null,null,null,null,null,null,null,null,null];
(statearr_31043[(0)] = cljs$core$async$state_machine__30340__auto__);

(statearr_31043[(1)] = (1));

return statearr_31043;
});
var cljs$core$async$state_machine__30340__auto____1 = (function (state_31024){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_31024);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e31044){var ex__30343__auto__ = e31044;
var statearr_31045_32597 = state_31024;
(statearr_31045_32597[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_31024[(4)]))){
var statearr_31046_32598 = state_31024;
(statearr_31046_32598[(1)] = cljs.core.first((state_31024[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32599 = state_31024;
state_31024 = G__32599;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$state_machine__30340__auto__ = function(state_31024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30340__auto____1.call(this,state_31024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30340__auto____0;
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30340__auto____1;
return cljs$core$async$state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_31047 = f__30417__auto__();
(statearr_31047[(6)] = c__30416__auto___32582);

return statearr_31047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_31069){
var state_val_31070 = (state_31069[(1)]);
if((state_val_31070 === (7))){
var inst_31065 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31071_32600 = state_31069__$1;
(statearr_31071_32600[(2)] = inst_31065);

(statearr_31071_32600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (1))){
var inst_31048 = init;
var inst_31049 = inst_31048;
var state_31069__$1 = (function (){var statearr_31072 = state_31069;
(statearr_31072[(7)] = inst_31049);

return statearr_31072;
})();
var statearr_31073_32601 = state_31069__$1;
(statearr_31073_32601[(2)] = null);

(statearr_31073_32601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (4))){
var inst_31052 = (state_31069[(8)]);
var inst_31052__$1 = (state_31069[(2)]);
var inst_31053 = (inst_31052__$1 == null);
var state_31069__$1 = (function (){var statearr_31074 = state_31069;
(statearr_31074[(8)] = inst_31052__$1);

return statearr_31074;
})();
if(cljs.core.truth_(inst_31053)){
var statearr_31075_32602 = state_31069__$1;
(statearr_31075_32602[(1)] = (5));

} else {
var statearr_31076_32603 = state_31069__$1;
(statearr_31076_32603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (6))){
var inst_31052 = (state_31069[(8)]);
var inst_31056 = (state_31069[(9)]);
var inst_31049 = (state_31069[(7)]);
var inst_31056__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31049,inst_31052) : f.call(null,inst_31049,inst_31052));
var inst_31057 = cljs.core.reduced_QMARK_(inst_31056__$1);
var state_31069__$1 = (function (){var statearr_31077 = state_31069;
(statearr_31077[(9)] = inst_31056__$1);

return statearr_31077;
})();
if(inst_31057){
var statearr_31078_32604 = state_31069__$1;
(statearr_31078_32604[(1)] = (8));

} else {
var statearr_31079_32605 = state_31069__$1;
(statearr_31079_32605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (3))){
var inst_31067 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31069__$1,inst_31067);
} else {
if((state_val_31070 === (2))){
var state_31069__$1 = state_31069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31069__$1,(4),ch);
} else {
if((state_val_31070 === (9))){
var inst_31056 = (state_31069[(9)]);
var inst_31049 = inst_31056;
var state_31069__$1 = (function (){var statearr_31082 = state_31069;
(statearr_31082[(7)] = inst_31049);

return statearr_31082;
})();
var statearr_31083_32606 = state_31069__$1;
(statearr_31083_32606[(2)] = null);

(statearr_31083_32606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (5))){
var inst_31049 = (state_31069[(7)]);
var state_31069__$1 = state_31069;
var statearr_31084_32607 = state_31069__$1;
(statearr_31084_32607[(2)] = inst_31049);

(statearr_31084_32607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (10))){
var inst_31063 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31085_32608 = state_31069__$1;
(statearr_31085_32608[(2)] = inst_31063);

(statearr_31085_32608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (8))){
var inst_31056 = (state_31069[(9)]);
var inst_31059 = cljs.core.deref(inst_31056);
var state_31069__$1 = state_31069;
var statearr_31086_32610 = state_31069__$1;
(statearr_31086_32610[(2)] = inst_31059);

(statearr_31086_32610[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30340__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30340__auto____0 = (function (){
var statearr_31087 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31087[(0)] = cljs$core$async$reduce_$_state_machine__30340__auto__);

(statearr_31087[(1)] = (1));

return statearr_31087;
});
var cljs$core$async$reduce_$_state_machine__30340__auto____1 = (function (state_31069){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_31069);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e31088){var ex__30343__auto__ = e31088;
var statearr_31089_32612 = state_31069;
(statearr_31089_32612[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_31069[(4)]))){
var statearr_31090_32613 = state_31069;
(statearr_31090_32613[(1)] = cljs.core.first((state_31069[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32614 = state_31069;
state_31069 = G__32614;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30340__auto__ = function(state_31069){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30340__auto____1.call(this,state_31069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30340__auto____0;
cljs$core$async$reduce_$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30340__auto____1;
return cljs$core$async$reduce_$_state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_31091 = f__30417__auto__();
(statearr_31091[(6)] = c__30416__auto__);

return statearr_31091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));

return c__30416__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_31097){
var state_val_31098 = (state_31097[(1)]);
if((state_val_31098 === (1))){
var inst_31092 = cljs.core.async.reduce(f__$1,init,ch);
var state_31097__$1 = state_31097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31097__$1,(2),inst_31092);
} else {
if((state_val_31098 === (2))){
var inst_31094 = (state_31097[(2)]);
var inst_31095 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31094) : f__$1.call(null,inst_31094));
var state_31097__$1 = state_31097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31097__$1,inst_31095);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30340__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30340__auto____0 = (function (){
var statearr_31105 = [null,null,null,null,null,null,null];
(statearr_31105[(0)] = cljs$core$async$transduce_$_state_machine__30340__auto__);

(statearr_31105[(1)] = (1));

return statearr_31105;
});
var cljs$core$async$transduce_$_state_machine__30340__auto____1 = (function (state_31097){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_31097);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e31106){var ex__30343__auto__ = e31106;
var statearr_31107_32615 = state_31097;
(statearr_31107_32615[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_31097[(4)]))){
var statearr_31108_32616 = state_31097;
(statearr_31108_32616[(1)] = cljs.core.first((state_31097[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32617 = state_31097;
state_31097 = G__32617;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30340__auto__ = function(state_31097){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30340__auto____1.call(this,state_31097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30340__auto____0;
cljs$core$async$transduce_$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30340__auto____1;
return cljs$core$async$transduce_$_state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_31109 = f__30417__auto__();
(statearr_31109[(6)] = c__30416__auto__);

return statearr_31109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));

return c__30416__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31111 = arguments.length;
switch (G__31111) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_31153){
var state_val_31154 = (state_31153[(1)]);
if((state_val_31154 === (7))){
var inst_31131 = (state_31153[(2)]);
var state_31153__$1 = state_31153;
var statearr_31163_32621 = state_31153__$1;
(statearr_31163_32621[(2)] = inst_31131);

(statearr_31163_32621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31154 === (1))){
var inst_31118 = cljs.core.seq(coll);
var inst_31119 = inst_31118;
var state_31153__$1 = (function (){var statearr_31165 = state_31153;
(statearr_31165[(7)] = inst_31119);

return statearr_31165;
})();
var statearr_31168_32622 = state_31153__$1;
(statearr_31168_32622[(2)] = null);

(statearr_31168_32622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31154 === (4))){
var inst_31119 = (state_31153[(7)]);
var inst_31129 = cljs.core.first(inst_31119);
var state_31153__$1 = state_31153;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31153__$1,(7),ch,inst_31129);
} else {
if((state_val_31154 === (13))){
var inst_31143 = (state_31153[(2)]);
var state_31153__$1 = state_31153;
var statearr_31169_32623 = state_31153__$1;
(statearr_31169_32623[(2)] = inst_31143);

(statearr_31169_32623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31154 === (6))){
var inst_31134 = (state_31153[(2)]);
var state_31153__$1 = state_31153;
if(cljs.core.truth_(inst_31134)){
var statearr_31174_32624 = state_31153__$1;
(statearr_31174_32624[(1)] = (8));

} else {
var statearr_31175_32625 = state_31153__$1;
(statearr_31175_32625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31154 === (3))){
var inst_31147 = (state_31153[(2)]);
var state_31153__$1 = state_31153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31153__$1,inst_31147);
} else {
if((state_val_31154 === (12))){
var state_31153__$1 = state_31153;
var statearr_31177_32626 = state_31153__$1;
(statearr_31177_32626[(2)] = null);

(statearr_31177_32626[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31154 === (2))){
var inst_31119 = (state_31153[(7)]);
var state_31153__$1 = state_31153;
if(cljs.core.truth_(inst_31119)){
var statearr_31178_32627 = state_31153__$1;
(statearr_31178_32627[(1)] = (4));

} else {
var statearr_31179_32628 = state_31153__$1;
(statearr_31179_32628[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31154 === (11))){
var inst_31140 = cljs.core.async.close_BANG_(ch);
var state_31153__$1 = state_31153;
var statearr_31180_32629 = state_31153__$1;
(statearr_31180_32629[(2)] = inst_31140);

(statearr_31180_32629[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31154 === (9))){
var state_31153__$1 = state_31153;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31181_32630 = state_31153__$1;
(statearr_31181_32630[(1)] = (11));

} else {
var statearr_31182_32631 = state_31153__$1;
(statearr_31182_32631[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31154 === (5))){
var inst_31119 = (state_31153[(7)]);
var state_31153__$1 = state_31153;
var statearr_31183_32632 = state_31153__$1;
(statearr_31183_32632[(2)] = inst_31119);

(statearr_31183_32632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31154 === (10))){
var inst_31145 = (state_31153[(2)]);
var state_31153__$1 = state_31153;
var statearr_31184_32633 = state_31153__$1;
(statearr_31184_32633[(2)] = inst_31145);

(statearr_31184_32633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31154 === (8))){
var inst_31119 = (state_31153[(7)]);
var inst_31136 = cljs.core.next(inst_31119);
var inst_31119__$1 = inst_31136;
var state_31153__$1 = (function (){var statearr_31185 = state_31153;
(statearr_31185[(7)] = inst_31119__$1);

return statearr_31185;
})();
var statearr_31186_32634 = state_31153__$1;
(statearr_31186_32634[(2)] = null);

(statearr_31186_32634[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30340__auto__ = null;
var cljs$core$async$state_machine__30340__auto____0 = (function (){
var statearr_31187 = [null,null,null,null,null,null,null,null];
(statearr_31187[(0)] = cljs$core$async$state_machine__30340__auto__);

(statearr_31187[(1)] = (1));

return statearr_31187;
});
var cljs$core$async$state_machine__30340__auto____1 = (function (state_31153){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_31153);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e31188){var ex__30343__auto__ = e31188;
var statearr_31189_32635 = state_31153;
(statearr_31189_32635[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_31153[(4)]))){
var statearr_31190_32636 = state_31153;
(statearr_31190_32636[(1)] = cljs.core.first((state_31153[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32637 = state_31153;
state_31153 = G__32637;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$state_machine__30340__auto__ = function(state_31153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30340__auto____1.call(this,state_31153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30340__auto____0;
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30340__auto____1;
return cljs$core$async$state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_31191 = f__30417__auto__();
(statearr_31191[(6)] = c__30416__auto__);

return statearr_31191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));

return c__30416__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31195 = arguments.length;
switch (G__31195) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32639 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32639(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32640 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32640(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32641 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32641(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32642 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32642(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31228 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31228 = (function (ch,cs,meta31229){
this.ch = ch;
this.cs = cs;
this.meta31229 = meta31229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31230,meta31229__$1){
var self__ = this;
var _31230__$1 = this;
return (new cljs.core.async.t_cljs$core$async31228(self__.ch,self__.cs,meta31229__$1));
}));

(cljs.core.async.t_cljs$core$async31228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31230){
var self__ = this;
var _31230__$1 = this;
return self__.meta31229;
}));

(cljs.core.async.t_cljs$core$async31228.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31228.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31228.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31228.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31228.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31228.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31229","meta31229",630291650,null)], null);
}));

(cljs.core.async.t_cljs$core$async31228.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31228");

(cljs.core.async.t_cljs$core$async31228.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31228");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31228.
 */
cljs.core.async.__GT_t_cljs$core$async31228 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31228(ch__$1,cs__$1,meta31229){
return (new cljs.core.async.t_cljs$core$async31228(ch__$1,cs__$1,meta31229));
});

}

return (new cljs.core.async.t_cljs$core$async31228(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30416__auto___32643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_31410){
var state_val_31413 = (state_31410[(1)]);
if((state_val_31413 === (7))){
var inst_31405 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31423_32644 = state_31410__$1;
(statearr_31423_32644[(2)] = inst_31405);

(statearr_31423_32644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (20))){
var inst_31300 = (state_31410[(7)]);
var inst_31315 = cljs.core.first(inst_31300);
var inst_31316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31315,(0),null);
var inst_31317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31315,(1),null);
var state_31410__$1 = (function (){var statearr_31428 = state_31410;
(statearr_31428[(8)] = inst_31316);

return statearr_31428;
})();
if(cljs.core.truth_(inst_31317)){
var statearr_31431_32645 = state_31410__$1;
(statearr_31431_32645[(1)] = (22));

} else {
var statearr_31432_32646 = state_31410__$1;
(statearr_31432_32646[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (27))){
var inst_31352 = (state_31410[(9)]);
var inst_31345 = (state_31410[(10)]);
var inst_31347 = (state_31410[(11)]);
var inst_31260 = (state_31410[(12)]);
var inst_31352__$1 = cljs.core._nth(inst_31345,inst_31347);
var inst_31353 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31352__$1,inst_31260,done);
var state_31410__$1 = (function (){var statearr_31438 = state_31410;
(statearr_31438[(9)] = inst_31352__$1);

return statearr_31438;
})();
if(cljs.core.truth_(inst_31353)){
var statearr_31441_32647 = state_31410__$1;
(statearr_31441_32647[(1)] = (30));

} else {
var statearr_31443_32648 = state_31410__$1;
(statearr_31443_32648[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (1))){
var state_31410__$1 = state_31410;
var statearr_31446_32649 = state_31410__$1;
(statearr_31446_32649[(2)] = null);

(statearr_31446_32649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (24))){
var inst_31300 = (state_31410[(7)]);
var inst_31322 = (state_31410[(2)]);
var inst_31323 = cljs.core.next(inst_31300);
var inst_31270 = inst_31323;
var inst_31271 = null;
var inst_31272 = (0);
var inst_31273 = (0);
var state_31410__$1 = (function (){var statearr_31454 = state_31410;
(statearr_31454[(13)] = inst_31322);

(statearr_31454[(14)] = inst_31271);

(statearr_31454[(15)] = inst_31270);

(statearr_31454[(16)] = inst_31272);

(statearr_31454[(17)] = inst_31273);

return statearr_31454;
})();
var statearr_31457_32652 = state_31410__$1;
(statearr_31457_32652[(2)] = null);

(statearr_31457_32652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (39))){
var state_31410__$1 = state_31410;
var statearr_31467_32653 = state_31410__$1;
(statearr_31467_32653[(2)] = null);

(statearr_31467_32653[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (4))){
var inst_31260 = (state_31410[(12)]);
var inst_31260__$1 = (state_31410[(2)]);
var inst_31261 = (inst_31260__$1 == null);
var state_31410__$1 = (function (){var statearr_31472 = state_31410;
(statearr_31472[(12)] = inst_31260__$1);

return statearr_31472;
})();
if(cljs.core.truth_(inst_31261)){
var statearr_31473_32654 = state_31410__$1;
(statearr_31473_32654[(1)] = (5));

} else {
var statearr_31474_32655 = state_31410__$1;
(statearr_31474_32655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (15))){
var inst_31271 = (state_31410[(14)]);
var inst_31270 = (state_31410[(15)]);
var inst_31272 = (state_31410[(16)]);
var inst_31273 = (state_31410[(17)]);
var inst_31295 = (state_31410[(2)]);
var inst_31297 = (inst_31273 + (1));
var tmp31462 = inst_31271;
var tmp31463 = inst_31270;
var tmp31464 = inst_31272;
var inst_31270__$1 = tmp31463;
var inst_31271__$1 = tmp31462;
var inst_31272__$1 = tmp31464;
var inst_31273__$1 = inst_31297;
var state_31410__$1 = (function (){var statearr_31475 = state_31410;
(statearr_31475[(14)] = inst_31271__$1);

(statearr_31475[(18)] = inst_31295);

(statearr_31475[(15)] = inst_31270__$1);

(statearr_31475[(16)] = inst_31272__$1);

(statearr_31475[(17)] = inst_31273__$1);

return statearr_31475;
})();
var statearr_31476_32656 = state_31410__$1;
(statearr_31476_32656[(2)] = null);

(statearr_31476_32656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (21))){
var inst_31326 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31480_32657 = state_31410__$1;
(statearr_31480_32657[(2)] = inst_31326);

(statearr_31480_32657[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (31))){
var inst_31352 = (state_31410[(9)]);
var inst_31356 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31352);
var state_31410__$1 = state_31410;
var statearr_31481_32658 = state_31410__$1;
(statearr_31481_32658[(2)] = inst_31356);

(statearr_31481_32658[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (32))){
var inst_31345 = (state_31410[(10)]);
var inst_31347 = (state_31410[(11)]);
var inst_31344 = (state_31410[(19)]);
var inst_31346 = (state_31410[(20)]);
var inst_31358 = (state_31410[(2)]);
var inst_31359 = (inst_31347 + (1));
var tmp31477 = inst_31345;
var tmp31478 = inst_31344;
var tmp31479 = inst_31346;
var inst_31344__$1 = tmp31478;
var inst_31345__$1 = tmp31477;
var inst_31346__$1 = tmp31479;
var inst_31347__$1 = inst_31359;
var state_31410__$1 = (function (){var statearr_31482 = state_31410;
(statearr_31482[(10)] = inst_31345__$1);

(statearr_31482[(11)] = inst_31347__$1);

(statearr_31482[(19)] = inst_31344__$1);

(statearr_31482[(21)] = inst_31358);

(statearr_31482[(20)] = inst_31346__$1);

return statearr_31482;
})();
var statearr_31483_32659 = state_31410__$1;
(statearr_31483_32659[(2)] = null);

(statearr_31483_32659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (40))){
var inst_31371 = (state_31410[(22)]);
var inst_31375 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31371);
var state_31410__$1 = state_31410;
var statearr_31484_32660 = state_31410__$1;
(statearr_31484_32660[(2)] = inst_31375);

(statearr_31484_32660[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (33))){
var inst_31362 = (state_31410[(23)]);
var inst_31364 = cljs.core.chunked_seq_QMARK_(inst_31362);
var state_31410__$1 = state_31410;
if(inst_31364){
var statearr_31485_32661 = state_31410__$1;
(statearr_31485_32661[(1)] = (36));

} else {
var statearr_31486_32662 = state_31410__$1;
(statearr_31486_32662[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (13))){
var inst_31287 = (state_31410[(24)]);
var inst_31291 = cljs.core.async.close_BANG_(inst_31287);
var state_31410__$1 = state_31410;
var statearr_31487_32668 = state_31410__$1;
(statearr_31487_32668[(2)] = inst_31291);

(statearr_31487_32668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (22))){
var inst_31316 = (state_31410[(8)]);
var inst_31319 = cljs.core.async.close_BANG_(inst_31316);
var state_31410__$1 = state_31410;
var statearr_31488_32669 = state_31410__$1;
(statearr_31488_32669[(2)] = inst_31319);

(statearr_31488_32669[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (36))){
var inst_31362 = (state_31410[(23)]);
var inst_31366 = cljs.core.chunk_first(inst_31362);
var inst_31367 = cljs.core.chunk_rest(inst_31362);
var inst_31368 = cljs.core.count(inst_31366);
var inst_31344 = inst_31367;
var inst_31345 = inst_31366;
var inst_31346 = inst_31368;
var inst_31347 = (0);
var state_31410__$1 = (function (){var statearr_31489 = state_31410;
(statearr_31489[(10)] = inst_31345);

(statearr_31489[(11)] = inst_31347);

(statearr_31489[(19)] = inst_31344);

(statearr_31489[(20)] = inst_31346);

return statearr_31489;
})();
var statearr_31490_32670 = state_31410__$1;
(statearr_31490_32670[(2)] = null);

(statearr_31490_32670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (41))){
var inst_31362 = (state_31410[(23)]);
var inst_31377 = (state_31410[(2)]);
var inst_31378 = cljs.core.next(inst_31362);
var inst_31344 = inst_31378;
var inst_31345 = null;
var inst_31346 = (0);
var inst_31347 = (0);
var state_31410__$1 = (function (){var statearr_31491 = state_31410;
(statearr_31491[(10)] = inst_31345);

(statearr_31491[(11)] = inst_31347);

(statearr_31491[(19)] = inst_31344);

(statearr_31491[(25)] = inst_31377);

(statearr_31491[(20)] = inst_31346);

return statearr_31491;
})();
var statearr_31496_32671 = state_31410__$1;
(statearr_31496_32671[(2)] = null);

(statearr_31496_32671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (43))){
var state_31410__$1 = state_31410;
var statearr_31498_32672 = state_31410__$1;
(statearr_31498_32672[(2)] = null);

(statearr_31498_32672[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (29))){
var inst_31393 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31503_32673 = state_31410__$1;
(statearr_31503_32673[(2)] = inst_31393);

(statearr_31503_32673[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (44))){
var inst_31402 = (state_31410[(2)]);
var state_31410__$1 = (function (){var statearr_31504 = state_31410;
(statearr_31504[(26)] = inst_31402);

return statearr_31504;
})();
var statearr_31505_32674 = state_31410__$1;
(statearr_31505_32674[(2)] = null);

(statearr_31505_32674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (6))){
var inst_31336 = (state_31410[(27)]);
var inst_31335 = cljs.core.deref(cs);
var inst_31336__$1 = cljs.core.keys(inst_31335);
var inst_31337 = cljs.core.count(inst_31336__$1);
var inst_31338 = cljs.core.reset_BANG_(dctr,inst_31337);
var inst_31343 = cljs.core.seq(inst_31336__$1);
var inst_31344 = inst_31343;
var inst_31345 = null;
var inst_31346 = (0);
var inst_31347 = (0);
var state_31410__$1 = (function (){var statearr_31508 = state_31410;
(statearr_31508[(28)] = inst_31338);

(statearr_31508[(10)] = inst_31345);

(statearr_31508[(11)] = inst_31347);

(statearr_31508[(19)] = inst_31344);

(statearr_31508[(27)] = inst_31336__$1);

(statearr_31508[(20)] = inst_31346);

return statearr_31508;
})();
var statearr_31510_32675 = state_31410__$1;
(statearr_31510_32675[(2)] = null);

(statearr_31510_32675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (28))){
var inst_31362 = (state_31410[(23)]);
var inst_31344 = (state_31410[(19)]);
var inst_31362__$1 = cljs.core.seq(inst_31344);
var state_31410__$1 = (function (){var statearr_31517 = state_31410;
(statearr_31517[(23)] = inst_31362__$1);

return statearr_31517;
})();
if(inst_31362__$1){
var statearr_31518_32676 = state_31410__$1;
(statearr_31518_32676[(1)] = (33));

} else {
var statearr_31521_32677 = state_31410__$1;
(statearr_31521_32677[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (25))){
var inst_31347 = (state_31410[(11)]);
var inst_31346 = (state_31410[(20)]);
var inst_31349 = (inst_31347 < inst_31346);
var inst_31350 = inst_31349;
var state_31410__$1 = state_31410;
if(cljs.core.truth_(inst_31350)){
var statearr_31525_32678 = state_31410__$1;
(statearr_31525_32678[(1)] = (27));

} else {
var statearr_31526_32679 = state_31410__$1;
(statearr_31526_32679[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (34))){
var state_31410__$1 = state_31410;
var statearr_31527_32680 = state_31410__$1;
(statearr_31527_32680[(2)] = null);

(statearr_31527_32680[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (17))){
var state_31410__$1 = state_31410;
var statearr_31528_32681 = state_31410__$1;
(statearr_31528_32681[(2)] = null);

(statearr_31528_32681[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (3))){
var inst_31407 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31410__$1,inst_31407);
} else {
if((state_val_31413 === (12))){
var inst_31331 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31529_32682 = state_31410__$1;
(statearr_31529_32682[(2)] = inst_31331);

(statearr_31529_32682[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (2))){
var state_31410__$1 = state_31410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31410__$1,(4),ch);
} else {
if((state_val_31413 === (23))){
var state_31410__$1 = state_31410;
var statearr_31530_32683 = state_31410__$1;
(statearr_31530_32683[(2)] = null);

(statearr_31530_32683[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (35))){
var inst_31384 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31531_32684 = state_31410__$1;
(statearr_31531_32684[(2)] = inst_31384);

(statearr_31531_32684[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (19))){
var inst_31300 = (state_31410[(7)]);
var inst_31307 = cljs.core.chunk_first(inst_31300);
var inst_31308 = cljs.core.chunk_rest(inst_31300);
var inst_31309 = cljs.core.count(inst_31307);
var inst_31270 = inst_31308;
var inst_31271 = inst_31307;
var inst_31272 = inst_31309;
var inst_31273 = (0);
var state_31410__$1 = (function (){var statearr_31532 = state_31410;
(statearr_31532[(14)] = inst_31271);

(statearr_31532[(15)] = inst_31270);

(statearr_31532[(16)] = inst_31272);

(statearr_31532[(17)] = inst_31273);

return statearr_31532;
})();
var statearr_31533_32685 = state_31410__$1;
(statearr_31533_32685[(2)] = null);

(statearr_31533_32685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (11))){
var inst_31270 = (state_31410[(15)]);
var inst_31300 = (state_31410[(7)]);
var inst_31300__$1 = cljs.core.seq(inst_31270);
var state_31410__$1 = (function (){var statearr_31534 = state_31410;
(statearr_31534[(7)] = inst_31300__$1);

return statearr_31534;
})();
if(inst_31300__$1){
var statearr_31535_32686 = state_31410__$1;
(statearr_31535_32686[(1)] = (16));

} else {
var statearr_31536_32687 = state_31410__$1;
(statearr_31536_32687[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (9))){
var inst_31333 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31537_32688 = state_31410__$1;
(statearr_31537_32688[(2)] = inst_31333);

(statearr_31537_32688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (5))){
var inst_31267 = cljs.core.deref(cs);
var inst_31268 = cljs.core.seq(inst_31267);
var inst_31270 = inst_31268;
var inst_31271 = null;
var inst_31272 = (0);
var inst_31273 = (0);
var state_31410__$1 = (function (){var statearr_31538 = state_31410;
(statearr_31538[(14)] = inst_31271);

(statearr_31538[(15)] = inst_31270);

(statearr_31538[(16)] = inst_31272);

(statearr_31538[(17)] = inst_31273);

return statearr_31538;
})();
var statearr_31539_32689 = state_31410__$1;
(statearr_31539_32689[(2)] = null);

(statearr_31539_32689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (14))){
var state_31410__$1 = state_31410;
var statearr_31540_32690 = state_31410__$1;
(statearr_31540_32690[(2)] = null);

(statearr_31540_32690[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (45))){
var inst_31399 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31541_32691 = state_31410__$1;
(statearr_31541_32691[(2)] = inst_31399);

(statearr_31541_32691[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (26))){
var inst_31336 = (state_31410[(27)]);
var inst_31395 = (state_31410[(2)]);
var inst_31396 = cljs.core.seq(inst_31336);
var state_31410__$1 = (function (){var statearr_31542 = state_31410;
(statearr_31542[(29)] = inst_31395);

return statearr_31542;
})();
if(inst_31396){
var statearr_31543_32692 = state_31410__$1;
(statearr_31543_32692[(1)] = (42));

} else {
var statearr_31544_32693 = state_31410__$1;
(statearr_31544_32693[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (16))){
var inst_31300 = (state_31410[(7)]);
var inst_31305 = cljs.core.chunked_seq_QMARK_(inst_31300);
var state_31410__$1 = state_31410;
if(inst_31305){
var statearr_31546_32694 = state_31410__$1;
(statearr_31546_32694[(1)] = (19));

} else {
var statearr_31547_32695 = state_31410__$1;
(statearr_31547_32695[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (38))){
var inst_31381 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31548_32698 = state_31410__$1;
(statearr_31548_32698[(2)] = inst_31381);

(statearr_31548_32698[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (30))){
var state_31410__$1 = state_31410;
var statearr_31549_32699 = state_31410__$1;
(statearr_31549_32699[(2)] = null);

(statearr_31549_32699[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (10))){
var inst_31271 = (state_31410[(14)]);
var inst_31273 = (state_31410[(17)]);
var inst_31286 = cljs.core._nth(inst_31271,inst_31273);
var inst_31287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31286,(0),null);
var inst_31288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31286,(1),null);
var state_31410__$1 = (function (){var statearr_31551 = state_31410;
(statearr_31551[(24)] = inst_31287);

return statearr_31551;
})();
if(cljs.core.truth_(inst_31288)){
var statearr_31552_32700 = state_31410__$1;
(statearr_31552_32700[(1)] = (13));

} else {
var statearr_31553_32701 = state_31410__$1;
(statearr_31553_32701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (18))){
var inst_31329 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31558_32702 = state_31410__$1;
(statearr_31558_32702[(2)] = inst_31329);

(statearr_31558_32702[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (42))){
var state_31410__$1 = state_31410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31410__$1,(45),dchan);
} else {
if((state_val_31413 === (37))){
var inst_31371 = (state_31410[(22)]);
var inst_31362 = (state_31410[(23)]);
var inst_31260 = (state_31410[(12)]);
var inst_31371__$1 = cljs.core.first(inst_31362);
var inst_31372 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31371__$1,inst_31260,done);
var state_31410__$1 = (function (){var statearr_31567 = state_31410;
(statearr_31567[(22)] = inst_31371__$1);

return statearr_31567;
})();
if(cljs.core.truth_(inst_31372)){
var statearr_31568_32703 = state_31410__$1;
(statearr_31568_32703[(1)] = (39));

} else {
var statearr_31569_32704 = state_31410__$1;
(statearr_31569_32704[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31413 === (8))){
var inst_31272 = (state_31410[(16)]);
var inst_31273 = (state_31410[(17)]);
var inst_31277 = (inst_31273 < inst_31272);
var inst_31278 = inst_31277;
var state_31410__$1 = state_31410;
if(cljs.core.truth_(inst_31278)){
var statearr_31570_32709 = state_31410__$1;
(statearr_31570_32709[(1)] = (10));

} else {
var statearr_31571_32710 = state_31410__$1;
(statearr_31571_32710[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__30340__auto__ = null;
var cljs$core$async$mult_$_state_machine__30340__auto____0 = (function (){
var statearr_31572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31572[(0)] = cljs$core$async$mult_$_state_machine__30340__auto__);

(statearr_31572[(1)] = (1));

return statearr_31572;
});
var cljs$core$async$mult_$_state_machine__30340__auto____1 = (function (state_31410){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_31410);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e31573){var ex__30343__auto__ = e31573;
var statearr_31574_32714 = state_31410;
(statearr_31574_32714[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_31410[(4)]))){
var statearr_31575_32715 = state_31410;
(statearr_31575_32715[(1)] = cljs.core.first((state_31410[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32716 = state_31410;
state_31410 = G__32716;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30340__auto__ = function(state_31410){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30340__auto____1.call(this,state_31410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30340__auto____0;
cljs$core$async$mult_$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30340__auto____1;
return cljs$core$async$mult_$_state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_31576 = f__30417__auto__();
(statearr_31576[(6)] = c__30416__auto___32643);

return statearr_31576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31578 = arguments.length;
switch (G__31578) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32724 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32724(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32728 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32728(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32729 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32729(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32737 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32737(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32748 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32748(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___32749 = arguments.length;
var i__4830__auto___32750 = (0);
while(true){
if((i__4830__auto___32750 < len__4829__auto___32749)){
args__4835__auto__.push((arguments[i__4830__auto___32750]));

var G__32751 = (i__4830__auto___32750 + (1));
i__4830__auto___32750 = G__32751;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31583){
var map__31584 = p__31583;
var map__31584__$1 = cljs.core.__destructure_map(map__31584);
var opts = map__31584__$1;
var statearr_31585_32752 = state;
(statearr_31585_32752[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31586_32753 = state;
(statearr_31586_32753[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31587_32754 = state;
(statearr_31587_32754[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31579){
var G__31580 = cljs.core.first(seq31579);
var seq31579__$1 = cljs.core.next(seq31579);
var G__31581 = cljs.core.first(seq31579__$1);
var seq31579__$2 = cljs.core.next(seq31579__$1);
var G__31582 = cljs.core.first(seq31579__$2);
var seq31579__$3 = cljs.core.next(seq31579__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31580,G__31581,G__31582,seq31579__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31588 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31589){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31589 = meta31589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31590,meta31589__$1){
var self__ = this;
var _31590__$1 = this;
return (new cljs.core.async.t_cljs$core$async31588(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31589__$1));
}));

(cljs.core.async.t_cljs$core$async31588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31590){
var self__ = this;
var _31590__$1 = this;
return self__.meta31589;
}));

(cljs.core.async.t_cljs$core$async31588.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31588.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31588.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31588.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31588.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31588.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31588.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31588.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31589","meta31589",1041673662,null)], null);
}));

(cljs.core.async.t_cljs$core$async31588.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31588");

(cljs.core.async.t_cljs$core$async31588.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31588");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31588.
 */
cljs.core.async.__GT_t_cljs$core$async31588 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31588(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31589){
return (new cljs.core.async.t_cljs$core$async31588(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31589));
});

}

return (new cljs.core.async.t_cljs$core$async31588(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30416__auto___32755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_31658){
var state_val_31659 = (state_31658[(1)]);
if((state_val_31659 === (7))){
var inst_31618 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
if(cljs.core.truth_(inst_31618)){
var statearr_31660_32756 = state_31658__$1;
(statearr_31660_32756[(1)] = (8));

} else {
var statearr_31661_32757 = state_31658__$1;
(statearr_31661_32757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (20))){
var inst_31611 = (state_31658[(7)]);
var state_31658__$1 = state_31658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31658__$1,(23),out,inst_31611);
} else {
if((state_val_31659 === (1))){
var inst_31594 = calc_state();
var inst_31595 = cljs.core.__destructure_map(inst_31594);
var inst_31596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31595,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31595,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31595,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31599 = inst_31594;
var state_31658__$1 = (function (){var statearr_31662 = state_31658;
(statearr_31662[(8)] = inst_31599);

(statearr_31662[(9)] = inst_31597);

(statearr_31662[(10)] = inst_31598);

(statearr_31662[(11)] = inst_31596);

return statearr_31662;
})();
var statearr_31663_32758 = state_31658__$1;
(statearr_31663_32758[(2)] = null);

(statearr_31663_32758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (24))){
var inst_31602 = (state_31658[(12)]);
var inst_31599 = inst_31602;
var state_31658__$1 = (function (){var statearr_31664 = state_31658;
(statearr_31664[(8)] = inst_31599);

return statearr_31664;
})();
var statearr_31665_32759 = state_31658__$1;
(statearr_31665_32759[(2)] = null);

(statearr_31665_32759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (4))){
var inst_31611 = (state_31658[(7)]);
var inst_31613 = (state_31658[(13)]);
var inst_31610 = (state_31658[(2)]);
var inst_31611__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31610,(0),null);
var inst_31612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31610,(1),null);
var inst_31613__$1 = (inst_31611__$1 == null);
var state_31658__$1 = (function (){var statearr_31666 = state_31658;
(statearr_31666[(7)] = inst_31611__$1);

(statearr_31666[(14)] = inst_31612);

(statearr_31666[(13)] = inst_31613__$1);

return statearr_31666;
})();
if(cljs.core.truth_(inst_31613__$1)){
var statearr_31667_32760 = state_31658__$1;
(statearr_31667_32760[(1)] = (5));

} else {
var statearr_31668_32761 = state_31658__$1;
(statearr_31668_32761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (15))){
var inst_31632 = (state_31658[(15)]);
var inst_31603 = (state_31658[(16)]);
var inst_31632__$1 = cljs.core.empty_QMARK_(inst_31603);
var state_31658__$1 = (function (){var statearr_31669 = state_31658;
(statearr_31669[(15)] = inst_31632__$1);

return statearr_31669;
})();
if(inst_31632__$1){
var statearr_31670_32762 = state_31658__$1;
(statearr_31670_32762[(1)] = (17));

} else {
var statearr_31671_32763 = state_31658__$1;
(statearr_31671_32763[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (21))){
var inst_31602 = (state_31658[(12)]);
var inst_31599 = inst_31602;
var state_31658__$1 = (function (){var statearr_31672 = state_31658;
(statearr_31672[(8)] = inst_31599);

return statearr_31672;
})();
var statearr_31673_32764 = state_31658__$1;
(statearr_31673_32764[(2)] = null);

(statearr_31673_32764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (13))){
var inst_31625 = (state_31658[(2)]);
var inst_31626 = calc_state();
var inst_31599 = inst_31626;
var state_31658__$1 = (function (){var statearr_31674 = state_31658;
(statearr_31674[(8)] = inst_31599);

(statearr_31674[(17)] = inst_31625);

return statearr_31674;
})();
var statearr_31675_32765 = state_31658__$1;
(statearr_31675_32765[(2)] = null);

(statearr_31675_32765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (22))){
var inst_31652 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
var statearr_31676_32766 = state_31658__$1;
(statearr_31676_32766[(2)] = inst_31652);

(statearr_31676_32766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (6))){
var inst_31612 = (state_31658[(14)]);
var inst_31616 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31612,change);
var state_31658__$1 = state_31658;
var statearr_31677_32767 = state_31658__$1;
(statearr_31677_32767[(2)] = inst_31616);

(statearr_31677_32767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (25))){
var state_31658__$1 = state_31658;
var statearr_31678_32768 = state_31658__$1;
(statearr_31678_32768[(2)] = null);

(statearr_31678_32768[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (17))){
var inst_31612 = (state_31658[(14)]);
var inst_31604 = (state_31658[(18)]);
var inst_31634 = (inst_31604.cljs$core$IFn$_invoke$arity$1 ? inst_31604.cljs$core$IFn$_invoke$arity$1(inst_31612) : inst_31604.call(null,inst_31612));
var inst_31635 = cljs.core.not(inst_31634);
var state_31658__$1 = state_31658;
var statearr_31679_32769 = state_31658__$1;
(statearr_31679_32769[(2)] = inst_31635);

(statearr_31679_32769[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (3))){
var inst_31656 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31658__$1,inst_31656);
} else {
if((state_val_31659 === (12))){
var state_31658__$1 = state_31658;
var statearr_31680_32770 = state_31658__$1;
(statearr_31680_32770[(2)] = null);

(statearr_31680_32770[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (2))){
var inst_31599 = (state_31658[(8)]);
var inst_31602 = (state_31658[(12)]);
var inst_31602__$1 = cljs.core.__destructure_map(inst_31599);
var inst_31603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31602__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31602__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31602__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31658__$1 = (function (){var statearr_31681 = state_31658;
(statearr_31681[(12)] = inst_31602__$1);

(statearr_31681[(16)] = inst_31603);

(statearr_31681[(18)] = inst_31604);

return statearr_31681;
})();
return cljs.core.async.ioc_alts_BANG_(state_31658__$1,(4),inst_31605);
} else {
if((state_val_31659 === (23))){
var inst_31643 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
if(cljs.core.truth_(inst_31643)){
var statearr_31682_32773 = state_31658__$1;
(statearr_31682_32773[(1)] = (24));

} else {
var statearr_31683_32774 = state_31658__$1;
(statearr_31683_32774[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (19))){
var inst_31638 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
var statearr_31684_32778 = state_31658__$1;
(statearr_31684_32778[(2)] = inst_31638);

(statearr_31684_32778[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (11))){
var inst_31612 = (state_31658[(14)]);
var inst_31622 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31612);
var state_31658__$1 = state_31658;
var statearr_31685_32779 = state_31658__$1;
(statearr_31685_32779[(2)] = inst_31622);

(statearr_31685_32779[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (9))){
var inst_31612 = (state_31658[(14)]);
var inst_31603 = (state_31658[(16)]);
var inst_31629 = (state_31658[(19)]);
var inst_31629__$1 = (inst_31603.cljs$core$IFn$_invoke$arity$1 ? inst_31603.cljs$core$IFn$_invoke$arity$1(inst_31612) : inst_31603.call(null,inst_31612));
var state_31658__$1 = (function (){var statearr_31686 = state_31658;
(statearr_31686[(19)] = inst_31629__$1);

return statearr_31686;
})();
if(cljs.core.truth_(inst_31629__$1)){
var statearr_31687_32781 = state_31658__$1;
(statearr_31687_32781[(1)] = (14));

} else {
var statearr_31688_32782 = state_31658__$1;
(statearr_31688_32782[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (5))){
var inst_31613 = (state_31658[(13)]);
var state_31658__$1 = state_31658;
var statearr_31689_32783 = state_31658__$1;
(statearr_31689_32783[(2)] = inst_31613);

(statearr_31689_32783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (14))){
var inst_31629 = (state_31658[(19)]);
var state_31658__$1 = state_31658;
var statearr_31690_32784 = state_31658__$1;
(statearr_31690_32784[(2)] = inst_31629);

(statearr_31690_32784[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (26))){
var inst_31648 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
var statearr_31691_32786 = state_31658__$1;
(statearr_31691_32786[(2)] = inst_31648);

(statearr_31691_32786[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (16))){
var inst_31640 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
if(cljs.core.truth_(inst_31640)){
var statearr_31692_32788 = state_31658__$1;
(statearr_31692_32788[(1)] = (20));

} else {
var statearr_31693_32789 = state_31658__$1;
(statearr_31693_32789[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (10))){
var inst_31654 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
var statearr_31694_32790 = state_31658__$1;
(statearr_31694_32790[(2)] = inst_31654);

(statearr_31694_32790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (18))){
var inst_31632 = (state_31658[(15)]);
var state_31658__$1 = state_31658;
var statearr_31695_32791 = state_31658__$1;
(statearr_31695_32791[(2)] = inst_31632);

(statearr_31695_32791[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (8))){
var inst_31611 = (state_31658[(7)]);
var inst_31620 = (inst_31611 == null);
var state_31658__$1 = state_31658;
if(cljs.core.truth_(inst_31620)){
var statearr_31696_32792 = state_31658__$1;
(statearr_31696_32792[(1)] = (11));

} else {
var statearr_31697_32793 = state_31658__$1;
(statearr_31697_32793[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__30340__auto__ = null;
var cljs$core$async$mix_$_state_machine__30340__auto____0 = (function (){
var statearr_31698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31698[(0)] = cljs$core$async$mix_$_state_machine__30340__auto__);

(statearr_31698[(1)] = (1));

return statearr_31698;
});
var cljs$core$async$mix_$_state_machine__30340__auto____1 = (function (state_31658){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_31658);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e31699){var ex__30343__auto__ = e31699;
var statearr_31700_32794 = state_31658;
(statearr_31700_32794[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_31658[(4)]))){
var statearr_31701_32795 = state_31658;
(statearr_31701_32795[(1)] = cljs.core.first((state_31658[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32796 = state_31658;
state_31658 = G__32796;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30340__auto__ = function(state_31658){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30340__auto____1.call(this,state_31658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30340__auto____0;
cljs$core$async$mix_$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30340__auto____1;
return cljs$core$async$mix_$_state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_31702 = f__30417__auto__();
(statearr_31702[(6)] = c__30416__auto___32755);

return statearr_31702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32798 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32798(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32802 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32802(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32807 = (function() {
var G__32808 = null;
var G__32808__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32808__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32808 = function(p,v){
switch(arguments.length){
case 1:
return G__32808__1.call(this,p);
case 2:
return G__32808__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32808.cljs$core$IFn$_invoke$arity$1 = G__32808__1;
G__32808.cljs$core$IFn$_invoke$arity$2 = G__32808__2;
return G__32808;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31704 = arguments.length;
switch (G__31704) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32807(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32807(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__31707 = arguments.length;
switch (G__31707) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31705_SHARP_){
if(cljs.core.truth_((p1__31705_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31705_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31705_SHARP_.call(null,topic)))){
return p1__31705_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31705_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31708 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31708 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31709){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31709 = meta31709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31710,meta31709__$1){
var self__ = this;
var _31710__$1 = this;
return (new cljs.core.async.t_cljs$core$async31708(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31709__$1));
}));

(cljs.core.async.t_cljs$core$async31708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31710){
var self__ = this;
var _31710__$1 = this;
return self__.meta31709;
}));

(cljs.core.async.t_cljs$core$async31708.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31708.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31708.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31708.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31708.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31708.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31708.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31709","meta31709",-23420377,null)], null);
}));

(cljs.core.async.t_cljs$core$async31708.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31708");

(cljs.core.async.t_cljs$core$async31708.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31708");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31708.
 */
cljs.core.async.__GT_t_cljs$core$async31708 = (function cljs$core$async$__GT_t_cljs$core$async31708(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31709){
return (new cljs.core.async.t_cljs$core$async31708(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31709));
});

}

return (new cljs.core.async.t_cljs$core$async31708(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30416__auto___32814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_31782){
var state_val_31783 = (state_31782[(1)]);
if((state_val_31783 === (7))){
var inst_31778 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
var statearr_31784_32815 = state_31782__$1;
(statearr_31784_32815[(2)] = inst_31778);

(statearr_31784_32815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (20))){
var state_31782__$1 = state_31782;
var statearr_31785_32816 = state_31782__$1;
(statearr_31785_32816[(2)] = null);

(statearr_31785_32816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (1))){
var state_31782__$1 = state_31782;
var statearr_31786_32817 = state_31782__$1;
(statearr_31786_32817[(2)] = null);

(statearr_31786_32817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (24))){
var inst_31761 = (state_31782[(7)]);
var inst_31770 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31761);
var state_31782__$1 = state_31782;
var statearr_31787_32818 = state_31782__$1;
(statearr_31787_32818[(2)] = inst_31770);

(statearr_31787_32818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (4))){
var inst_31713 = (state_31782[(8)]);
var inst_31713__$1 = (state_31782[(2)]);
var inst_31714 = (inst_31713__$1 == null);
var state_31782__$1 = (function (){var statearr_31788 = state_31782;
(statearr_31788[(8)] = inst_31713__$1);

return statearr_31788;
})();
if(cljs.core.truth_(inst_31714)){
var statearr_31789_32823 = state_31782__$1;
(statearr_31789_32823[(1)] = (5));

} else {
var statearr_31790_32824 = state_31782__$1;
(statearr_31790_32824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (15))){
var inst_31755 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
var statearr_31791_32825 = state_31782__$1;
(statearr_31791_32825[(2)] = inst_31755);

(statearr_31791_32825[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (21))){
var inst_31775 = (state_31782[(2)]);
var state_31782__$1 = (function (){var statearr_31792 = state_31782;
(statearr_31792[(9)] = inst_31775);

return statearr_31792;
})();
var statearr_31793_32826 = state_31782__$1;
(statearr_31793_32826[(2)] = null);

(statearr_31793_32826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (13))){
var inst_31737 = (state_31782[(10)]);
var inst_31739 = cljs.core.chunked_seq_QMARK_(inst_31737);
var state_31782__$1 = state_31782;
if(inst_31739){
var statearr_31794_32833 = state_31782__$1;
(statearr_31794_32833[(1)] = (16));

} else {
var statearr_31795_32834 = state_31782__$1;
(statearr_31795_32834[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (22))){
var inst_31767 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
if(cljs.core.truth_(inst_31767)){
var statearr_31796_32835 = state_31782__$1;
(statearr_31796_32835[(1)] = (23));

} else {
var statearr_31797_32836 = state_31782__$1;
(statearr_31797_32836[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (6))){
var inst_31761 = (state_31782[(7)]);
var inst_31763 = (state_31782[(11)]);
var inst_31713 = (state_31782[(8)]);
var inst_31761__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31713) : topic_fn.call(null,inst_31713));
var inst_31762 = cljs.core.deref(mults);
var inst_31763__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31762,inst_31761__$1);
var state_31782__$1 = (function (){var statearr_31798 = state_31782;
(statearr_31798[(7)] = inst_31761__$1);

(statearr_31798[(11)] = inst_31763__$1);

return statearr_31798;
})();
if(cljs.core.truth_(inst_31763__$1)){
var statearr_31799_32837 = state_31782__$1;
(statearr_31799_32837[(1)] = (19));

} else {
var statearr_31800_32838 = state_31782__$1;
(statearr_31800_32838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (25))){
var inst_31772 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
var statearr_31801_32839 = state_31782__$1;
(statearr_31801_32839[(2)] = inst_31772);

(statearr_31801_32839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (17))){
var inst_31737 = (state_31782[(10)]);
var inst_31746 = cljs.core.first(inst_31737);
var inst_31747 = cljs.core.async.muxch_STAR_(inst_31746);
var inst_31748 = cljs.core.async.close_BANG_(inst_31747);
var inst_31749 = cljs.core.next(inst_31737);
var inst_31723 = inst_31749;
var inst_31724 = null;
var inst_31725 = (0);
var inst_31726 = (0);
var state_31782__$1 = (function (){var statearr_31802 = state_31782;
(statearr_31802[(12)] = inst_31725);

(statearr_31802[(13)] = inst_31723);

(statearr_31802[(14)] = inst_31748);

(statearr_31802[(15)] = inst_31724);

(statearr_31802[(16)] = inst_31726);

return statearr_31802;
})();
var statearr_31803_32840 = state_31782__$1;
(statearr_31803_32840[(2)] = null);

(statearr_31803_32840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (3))){
var inst_31780 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31782__$1,inst_31780);
} else {
if((state_val_31783 === (12))){
var inst_31757 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
var statearr_31804_32841 = state_31782__$1;
(statearr_31804_32841[(2)] = inst_31757);

(statearr_31804_32841[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (2))){
var state_31782__$1 = state_31782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31782__$1,(4),ch);
} else {
if((state_val_31783 === (23))){
var state_31782__$1 = state_31782;
var statearr_31805_32842 = state_31782__$1;
(statearr_31805_32842[(2)] = null);

(statearr_31805_32842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (19))){
var inst_31763 = (state_31782[(11)]);
var inst_31713 = (state_31782[(8)]);
var inst_31765 = cljs.core.async.muxch_STAR_(inst_31763);
var state_31782__$1 = state_31782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31782__$1,(22),inst_31765,inst_31713);
} else {
if((state_val_31783 === (11))){
var inst_31737 = (state_31782[(10)]);
var inst_31723 = (state_31782[(13)]);
var inst_31737__$1 = cljs.core.seq(inst_31723);
var state_31782__$1 = (function (){var statearr_31806 = state_31782;
(statearr_31806[(10)] = inst_31737__$1);

return statearr_31806;
})();
if(inst_31737__$1){
var statearr_31807_32843 = state_31782__$1;
(statearr_31807_32843[(1)] = (13));

} else {
var statearr_31808_32844 = state_31782__$1;
(statearr_31808_32844[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (9))){
var inst_31759 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
var statearr_31809_32845 = state_31782__$1;
(statearr_31809_32845[(2)] = inst_31759);

(statearr_31809_32845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (5))){
var inst_31720 = cljs.core.deref(mults);
var inst_31721 = cljs.core.vals(inst_31720);
var inst_31722 = cljs.core.seq(inst_31721);
var inst_31723 = inst_31722;
var inst_31724 = null;
var inst_31725 = (0);
var inst_31726 = (0);
var state_31782__$1 = (function (){var statearr_31810 = state_31782;
(statearr_31810[(12)] = inst_31725);

(statearr_31810[(13)] = inst_31723);

(statearr_31810[(15)] = inst_31724);

(statearr_31810[(16)] = inst_31726);

return statearr_31810;
})();
var statearr_31811_32846 = state_31782__$1;
(statearr_31811_32846[(2)] = null);

(statearr_31811_32846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (14))){
var state_31782__$1 = state_31782;
var statearr_31815_32853 = state_31782__$1;
(statearr_31815_32853[(2)] = null);

(statearr_31815_32853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (16))){
var inst_31737 = (state_31782[(10)]);
var inst_31741 = cljs.core.chunk_first(inst_31737);
var inst_31742 = cljs.core.chunk_rest(inst_31737);
var inst_31743 = cljs.core.count(inst_31741);
var inst_31723 = inst_31742;
var inst_31724 = inst_31741;
var inst_31725 = inst_31743;
var inst_31726 = (0);
var state_31782__$1 = (function (){var statearr_31816 = state_31782;
(statearr_31816[(12)] = inst_31725);

(statearr_31816[(13)] = inst_31723);

(statearr_31816[(15)] = inst_31724);

(statearr_31816[(16)] = inst_31726);

return statearr_31816;
})();
var statearr_31817_32854 = state_31782__$1;
(statearr_31817_32854[(2)] = null);

(statearr_31817_32854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (10))){
var inst_31725 = (state_31782[(12)]);
var inst_31723 = (state_31782[(13)]);
var inst_31724 = (state_31782[(15)]);
var inst_31726 = (state_31782[(16)]);
var inst_31731 = cljs.core._nth(inst_31724,inst_31726);
var inst_31732 = cljs.core.async.muxch_STAR_(inst_31731);
var inst_31733 = cljs.core.async.close_BANG_(inst_31732);
var inst_31734 = (inst_31726 + (1));
var tmp31812 = inst_31725;
var tmp31813 = inst_31723;
var tmp31814 = inst_31724;
var inst_31723__$1 = tmp31813;
var inst_31724__$1 = tmp31814;
var inst_31725__$1 = tmp31812;
var inst_31726__$1 = inst_31734;
var state_31782__$1 = (function (){var statearr_31818 = state_31782;
(statearr_31818[(17)] = inst_31733);

(statearr_31818[(12)] = inst_31725__$1);

(statearr_31818[(13)] = inst_31723__$1);

(statearr_31818[(15)] = inst_31724__$1);

(statearr_31818[(16)] = inst_31726__$1);

return statearr_31818;
})();
var statearr_31819_32855 = state_31782__$1;
(statearr_31819_32855[(2)] = null);

(statearr_31819_32855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (18))){
var inst_31752 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
var statearr_31820_32856 = state_31782__$1;
(statearr_31820_32856[(2)] = inst_31752);

(statearr_31820_32856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (8))){
var inst_31725 = (state_31782[(12)]);
var inst_31726 = (state_31782[(16)]);
var inst_31728 = (inst_31726 < inst_31725);
var inst_31729 = inst_31728;
var state_31782__$1 = state_31782;
if(cljs.core.truth_(inst_31729)){
var statearr_31821_32857 = state_31782__$1;
(statearr_31821_32857[(1)] = (10));

} else {
var statearr_31822_32858 = state_31782__$1;
(statearr_31822_32858[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__30340__auto__ = null;
var cljs$core$async$state_machine__30340__auto____0 = (function (){
var statearr_31823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31823[(0)] = cljs$core$async$state_machine__30340__auto__);

(statearr_31823[(1)] = (1));

return statearr_31823;
});
var cljs$core$async$state_machine__30340__auto____1 = (function (state_31782){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_31782);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e31824){var ex__30343__auto__ = e31824;
var statearr_31825_32859 = state_31782;
(statearr_31825_32859[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_31782[(4)]))){
var statearr_31826_32860 = state_31782;
(statearr_31826_32860[(1)] = cljs.core.first((state_31782[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32861 = state_31782;
state_31782 = G__32861;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$state_machine__30340__auto__ = function(state_31782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30340__auto____1.call(this,state_31782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30340__auto____0;
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30340__auto____1;
return cljs$core$async$state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_31827 = f__30417__auto__();
(statearr_31827[(6)] = c__30416__auto___32814);

return statearr_31827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31829 = arguments.length;
switch (G__31829) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31831 = arguments.length;
switch (G__31831) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__31833 = arguments.length;
switch (G__31833) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30416__auto___32865 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_31876){
var state_val_31877 = (state_31876[(1)]);
if((state_val_31877 === (7))){
var state_31876__$1 = state_31876;
var statearr_31878_32866 = state_31876__$1;
(statearr_31878_32866[(2)] = null);

(statearr_31878_32866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (1))){
var state_31876__$1 = state_31876;
var statearr_31879_32867 = state_31876__$1;
(statearr_31879_32867[(2)] = null);

(statearr_31879_32867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (4))){
var inst_31836 = (state_31876[(7)]);
var inst_31837 = (state_31876[(8)]);
var inst_31839 = (inst_31837 < inst_31836);
var state_31876__$1 = state_31876;
if(cljs.core.truth_(inst_31839)){
var statearr_31880_32868 = state_31876__$1;
(statearr_31880_32868[(1)] = (6));

} else {
var statearr_31881_32869 = state_31876__$1;
(statearr_31881_32869[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (15))){
var inst_31862 = (state_31876[(9)]);
var inst_31867 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31862);
var state_31876__$1 = state_31876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31876__$1,(17),out,inst_31867);
} else {
if((state_val_31877 === (13))){
var inst_31862 = (state_31876[(9)]);
var inst_31862__$1 = (state_31876[(2)]);
var inst_31863 = cljs.core.some(cljs.core.nil_QMARK_,inst_31862__$1);
var state_31876__$1 = (function (){var statearr_31882 = state_31876;
(statearr_31882[(9)] = inst_31862__$1);

return statearr_31882;
})();
if(cljs.core.truth_(inst_31863)){
var statearr_31883_32870 = state_31876__$1;
(statearr_31883_32870[(1)] = (14));

} else {
var statearr_31884_32871 = state_31876__$1;
(statearr_31884_32871[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (6))){
var state_31876__$1 = state_31876;
var statearr_31885_32872 = state_31876__$1;
(statearr_31885_32872[(2)] = null);

(statearr_31885_32872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (17))){
var inst_31869 = (state_31876[(2)]);
var state_31876__$1 = (function (){var statearr_31887 = state_31876;
(statearr_31887[(10)] = inst_31869);

return statearr_31887;
})();
var statearr_31888_32873 = state_31876__$1;
(statearr_31888_32873[(2)] = null);

(statearr_31888_32873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (3))){
var inst_31874 = (state_31876[(2)]);
var state_31876__$1 = state_31876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31876__$1,inst_31874);
} else {
if((state_val_31877 === (12))){
var _ = (function (){var statearr_31889 = state_31876;
(statearr_31889[(4)] = cljs.core.rest((state_31876[(4)])));

return statearr_31889;
})();
var state_31876__$1 = state_31876;
var ex31886 = (state_31876__$1[(2)]);
var statearr_31890_32880 = state_31876__$1;
(statearr_31890_32880[(5)] = ex31886);


if((ex31886 instanceof Object)){
var statearr_31891_32881 = state_31876__$1;
(statearr_31891_32881[(1)] = (11));

(statearr_31891_32881[(5)] = null);

} else {
throw ex31886;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (2))){
var inst_31835 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31836 = cnt;
var inst_31837 = (0);
var state_31876__$1 = (function (){var statearr_31892 = state_31876;
(statearr_31892[(7)] = inst_31836);

(statearr_31892[(8)] = inst_31837);

(statearr_31892[(11)] = inst_31835);

return statearr_31892;
})();
var statearr_31893_32882 = state_31876__$1;
(statearr_31893_32882[(2)] = null);

(statearr_31893_32882[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (11))){
var inst_31841 = (state_31876[(2)]);
var inst_31842 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31876__$1 = (function (){var statearr_31894 = state_31876;
(statearr_31894[(12)] = inst_31841);

return statearr_31894;
})();
var statearr_31895_32883 = state_31876__$1;
(statearr_31895_32883[(2)] = inst_31842);

(statearr_31895_32883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (9))){
var inst_31837 = (state_31876[(8)]);
var _ = (function (){var statearr_31896 = state_31876;
(statearr_31896[(4)] = cljs.core.cons((12),(state_31876[(4)])));

return statearr_31896;
})();
var inst_31848 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31837) : chs__$1.call(null,inst_31837));
var inst_31849 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31837) : done.call(null,inst_31837));
var inst_31850 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31848,inst_31849);
var ___$1 = (function (){var statearr_31897 = state_31876;
(statearr_31897[(4)] = cljs.core.rest((state_31876[(4)])));

return statearr_31897;
})();
var state_31876__$1 = state_31876;
var statearr_31898_32884 = state_31876__$1;
(statearr_31898_32884[(2)] = inst_31850);

(statearr_31898_32884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (5))){
var inst_31860 = (state_31876[(2)]);
var state_31876__$1 = (function (){var statearr_31899 = state_31876;
(statearr_31899[(13)] = inst_31860);

return statearr_31899;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31876__$1,(13),dchan);
} else {
if((state_val_31877 === (14))){
var inst_31865 = cljs.core.async.close_BANG_(out);
var state_31876__$1 = state_31876;
var statearr_31900_32885 = state_31876__$1;
(statearr_31900_32885[(2)] = inst_31865);

(statearr_31900_32885[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (16))){
var inst_31872 = (state_31876[(2)]);
var state_31876__$1 = state_31876;
var statearr_31901_32886 = state_31876__$1;
(statearr_31901_32886[(2)] = inst_31872);

(statearr_31901_32886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (10))){
var inst_31837 = (state_31876[(8)]);
var inst_31853 = (state_31876[(2)]);
var inst_31854 = (inst_31837 + (1));
var inst_31837__$1 = inst_31854;
var state_31876__$1 = (function (){var statearr_31902 = state_31876;
(statearr_31902[(14)] = inst_31853);

(statearr_31902[(8)] = inst_31837__$1);

return statearr_31902;
})();
var statearr_31903_32887 = state_31876__$1;
(statearr_31903_32887[(2)] = null);

(statearr_31903_32887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (8))){
var inst_31858 = (state_31876[(2)]);
var state_31876__$1 = state_31876;
var statearr_31904_32888 = state_31876__$1;
(statearr_31904_32888[(2)] = inst_31858);

(statearr_31904_32888[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__30340__auto__ = null;
var cljs$core$async$state_machine__30340__auto____0 = (function (){
var statearr_31905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31905[(0)] = cljs$core$async$state_machine__30340__auto__);

(statearr_31905[(1)] = (1));

return statearr_31905;
});
var cljs$core$async$state_machine__30340__auto____1 = (function (state_31876){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_31876);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e31906){var ex__30343__auto__ = e31906;
var statearr_31907_32889 = state_31876;
(statearr_31907_32889[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_31876[(4)]))){
var statearr_31908_32890 = state_31876;
(statearr_31908_32890[(1)] = cljs.core.first((state_31876[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32891 = state_31876;
state_31876 = G__32891;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$state_machine__30340__auto__ = function(state_31876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30340__auto____1.call(this,state_31876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30340__auto____0;
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30340__auto____1;
return cljs$core$async$state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_31909 = f__30417__auto__();
(statearr_31909[(6)] = c__30416__auto___32865);

return statearr_31909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31912 = arguments.length;
switch (G__31912) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30416__auto___32893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_31944){
var state_val_31945 = (state_31944[(1)]);
if((state_val_31945 === (7))){
var inst_31923 = (state_31944[(7)]);
var inst_31924 = (state_31944[(8)]);
var inst_31923__$1 = (state_31944[(2)]);
var inst_31924__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31923__$1,(0),null);
var inst_31925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31923__$1,(1),null);
var inst_31926 = (inst_31924__$1 == null);
var state_31944__$1 = (function (){var statearr_31946 = state_31944;
(statearr_31946[(7)] = inst_31923__$1);

(statearr_31946[(8)] = inst_31924__$1);

(statearr_31946[(9)] = inst_31925);

return statearr_31946;
})();
if(cljs.core.truth_(inst_31926)){
var statearr_31947_32900 = state_31944__$1;
(statearr_31947_32900[(1)] = (8));

} else {
var statearr_31948_32901 = state_31944__$1;
(statearr_31948_32901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (1))){
var inst_31913 = cljs.core.vec(chs);
var inst_31914 = inst_31913;
var state_31944__$1 = (function (){var statearr_31949 = state_31944;
(statearr_31949[(10)] = inst_31914);

return statearr_31949;
})();
var statearr_31950_32902 = state_31944__$1;
(statearr_31950_32902[(2)] = null);

(statearr_31950_32902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (4))){
var inst_31914 = (state_31944[(10)]);
var state_31944__$1 = state_31944;
return cljs.core.async.ioc_alts_BANG_(state_31944__$1,(7),inst_31914);
} else {
if((state_val_31945 === (6))){
var inst_31940 = (state_31944[(2)]);
var state_31944__$1 = state_31944;
var statearr_31951_32903 = state_31944__$1;
(statearr_31951_32903[(2)] = inst_31940);

(statearr_31951_32903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (3))){
var inst_31942 = (state_31944[(2)]);
var state_31944__$1 = state_31944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31944__$1,inst_31942);
} else {
if((state_val_31945 === (2))){
var inst_31914 = (state_31944[(10)]);
var inst_31916 = cljs.core.count(inst_31914);
var inst_31917 = (inst_31916 > (0));
var state_31944__$1 = state_31944;
if(cljs.core.truth_(inst_31917)){
var statearr_31953_32904 = state_31944__$1;
(statearr_31953_32904[(1)] = (4));

} else {
var statearr_31954_32905 = state_31944__$1;
(statearr_31954_32905[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (11))){
var inst_31914 = (state_31944[(10)]);
var inst_31933 = (state_31944[(2)]);
var tmp31952 = inst_31914;
var inst_31914__$1 = tmp31952;
var state_31944__$1 = (function (){var statearr_31955 = state_31944;
(statearr_31955[(11)] = inst_31933);

(statearr_31955[(10)] = inst_31914__$1);

return statearr_31955;
})();
var statearr_31956_32906 = state_31944__$1;
(statearr_31956_32906[(2)] = null);

(statearr_31956_32906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (9))){
var inst_31924 = (state_31944[(8)]);
var state_31944__$1 = state_31944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31944__$1,(11),out,inst_31924);
} else {
if((state_val_31945 === (5))){
var inst_31938 = cljs.core.async.close_BANG_(out);
var state_31944__$1 = state_31944;
var statearr_31957_32907 = state_31944__$1;
(statearr_31957_32907[(2)] = inst_31938);

(statearr_31957_32907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (10))){
var inst_31936 = (state_31944[(2)]);
var state_31944__$1 = state_31944;
var statearr_31958_32908 = state_31944__$1;
(statearr_31958_32908[(2)] = inst_31936);

(statearr_31958_32908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31945 === (8))){
var inst_31923 = (state_31944[(7)]);
var inst_31924 = (state_31944[(8)]);
var inst_31925 = (state_31944[(9)]);
var inst_31914 = (state_31944[(10)]);
var inst_31928 = (function (){var cs = inst_31914;
var vec__31919 = inst_31923;
var v = inst_31924;
var c = inst_31925;
return (function (p1__31910_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31910_SHARP_);
});
})();
var inst_31929 = cljs.core.filterv(inst_31928,inst_31914);
var inst_31914__$1 = inst_31929;
var state_31944__$1 = (function (){var statearr_31959 = state_31944;
(statearr_31959[(10)] = inst_31914__$1);

return statearr_31959;
})();
var statearr_31960_32909 = state_31944__$1;
(statearr_31960_32909[(2)] = null);

(statearr_31960_32909[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30340__auto__ = null;
var cljs$core$async$state_machine__30340__auto____0 = (function (){
var statearr_31961 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31961[(0)] = cljs$core$async$state_machine__30340__auto__);

(statearr_31961[(1)] = (1));

return statearr_31961;
});
var cljs$core$async$state_machine__30340__auto____1 = (function (state_31944){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_31944);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e31962){var ex__30343__auto__ = e31962;
var statearr_31963_32910 = state_31944;
(statearr_31963_32910[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_31944[(4)]))){
var statearr_31964_32911 = state_31944;
(statearr_31964_32911[(1)] = cljs.core.first((state_31944[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32912 = state_31944;
state_31944 = G__32912;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$state_machine__30340__auto__ = function(state_31944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30340__auto____1.call(this,state_31944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30340__auto____0;
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30340__auto____1;
return cljs$core$async$state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_31965 = f__30417__auto__();
(statearr_31965[(6)] = c__30416__auto___32893);

return statearr_31965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31967 = arguments.length;
switch (G__31967) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30416__auto___32914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_31991){
var state_val_31992 = (state_31991[(1)]);
if((state_val_31992 === (7))){
var inst_31973 = (state_31991[(7)]);
var inst_31973__$1 = (state_31991[(2)]);
var inst_31974 = (inst_31973__$1 == null);
var inst_31975 = cljs.core.not(inst_31974);
var state_31991__$1 = (function (){var statearr_31993 = state_31991;
(statearr_31993[(7)] = inst_31973__$1);

return statearr_31993;
})();
if(inst_31975){
var statearr_31994_32915 = state_31991__$1;
(statearr_31994_32915[(1)] = (8));

} else {
var statearr_31995_32916 = state_31991__$1;
(statearr_31995_32916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (1))){
var inst_31968 = (0);
var state_31991__$1 = (function (){var statearr_31996 = state_31991;
(statearr_31996[(8)] = inst_31968);

return statearr_31996;
})();
var statearr_31997_32917 = state_31991__$1;
(statearr_31997_32917[(2)] = null);

(statearr_31997_32917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (4))){
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31991__$1,(7),ch);
} else {
if((state_val_31992 === (6))){
var inst_31986 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_31998_32918 = state_31991__$1;
(statearr_31998_32918[(2)] = inst_31986);

(statearr_31998_32918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (3))){
var inst_31988 = (state_31991[(2)]);
var inst_31989 = cljs.core.async.close_BANG_(out);
var state_31991__$1 = (function (){var statearr_31999 = state_31991;
(statearr_31999[(9)] = inst_31988);

return statearr_31999;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31991__$1,inst_31989);
} else {
if((state_val_31992 === (2))){
var inst_31968 = (state_31991[(8)]);
var inst_31970 = (inst_31968 < n);
var state_31991__$1 = state_31991;
if(cljs.core.truth_(inst_31970)){
var statearr_32000_32919 = state_31991__$1;
(statearr_32000_32919[(1)] = (4));

} else {
var statearr_32001_32920 = state_31991__$1;
(statearr_32001_32920[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (11))){
var inst_31968 = (state_31991[(8)]);
var inst_31978 = (state_31991[(2)]);
var inst_31979 = (inst_31968 + (1));
var inst_31968__$1 = inst_31979;
var state_31991__$1 = (function (){var statearr_32002 = state_31991;
(statearr_32002[(8)] = inst_31968__$1);

(statearr_32002[(10)] = inst_31978);

return statearr_32002;
})();
var statearr_32003_32921 = state_31991__$1;
(statearr_32003_32921[(2)] = null);

(statearr_32003_32921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (9))){
var state_31991__$1 = state_31991;
var statearr_32004_32922 = state_31991__$1;
(statearr_32004_32922[(2)] = null);

(statearr_32004_32922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (5))){
var state_31991__$1 = state_31991;
var statearr_32005_32923 = state_31991__$1;
(statearr_32005_32923[(2)] = null);

(statearr_32005_32923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (10))){
var inst_31983 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32006_32924 = state_31991__$1;
(statearr_32006_32924[(2)] = inst_31983);

(statearr_32006_32924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (8))){
var inst_31973 = (state_31991[(7)]);
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31991__$1,(11),out,inst_31973);
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
});
return (function() {
var cljs$core$async$state_machine__30340__auto__ = null;
var cljs$core$async$state_machine__30340__auto____0 = (function (){
var statearr_32007 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32007[(0)] = cljs$core$async$state_machine__30340__auto__);

(statearr_32007[(1)] = (1));

return statearr_32007;
});
var cljs$core$async$state_machine__30340__auto____1 = (function (state_31991){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_31991);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e32008){var ex__30343__auto__ = e32008;
var statearr_32009_32925 = state_31991;
(statearr_32009_32925[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_31991[(4)]))){
var statearr_32010_32926 = state_31991;
(statearr_32010_32926[(1)] = cljs.core.first((state_31991[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32927 = state_31991;
state_31991 = G__32927;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$state_machine__30340__auto__ = function(state_31991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30340__auto____1.call(this,state_31991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30340__auto____0;
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30340__auto____1;
return cljs$core$async$state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_32011 = f__30417__auto__();
(statearr_32011[(6)] = c__30416__auto___32914);

return statearr_32011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32013 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32013 = (function (f,ch,meta32014){
this.f = f;
this.ch = ch;
this.meta32014 = meta32014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32015,meta32014__$1){
var self__ = this;
var _32015__$1 = this;
return (new cljs.core.async.t_cljs$core$async32013(self__.f,self__.ch,meta32014__$1));
}));

(cljs.core.async.t_cljs$core$async32013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32015){
var self__ = this;
var _32015__$1 = this;
return self__.meta32014;
}));

(cljs.core.async.t_cljs$core$async32013.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32013.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32013.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32013.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32013.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32016 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32016 = (function (f,ch,meta32014,_,fn1,meta32017){
this.f = f;
this.ch = ch;
this.meta32014 = meta32014;
this._ = _;
this.fn1 = fn1;
this.meta32017 = meta32017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32018,meta32017__$1){
var self__ = this;
var _32018__$1 = this;
return (new cljs.core.async.t_cljs$core$async32016(self__.f,self__.ch,self__.meta32014,self__._,self__.fn1,meta32017__$1));
}));

(cljs.core.async.t_cljs$core$async32016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32018){
var self__ = this;
var _32018__$1 = this;
return self__.meta32017;
}));

(cljs.core.async.t_cljs$core$async32016.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32016.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32012_SHARP_){
var G__32019 = (((p1__32012_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32012_SHARP_) : self__.f.call(null,p1__32012_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32019) : f1.call(null,G__32019));
});
}));

(cljs.core.async.t_cljs$core$async32016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32014","meta32014",1244719551,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32013","cljs.core.async/t_cljs$core$async32013",-447723144,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32017","meta32017",-1381481008,null)], null);
}));

(cljs.core.async.t_cljs$core$async32016.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32016");

(cljs.core.async.t_cljs$core$async32016.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32016");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32016.
 */
cljs.core.async.__GT_t_cljs$core$async32016 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32016(f__$1,ch__$1,meta32014__$1,___$2,fn1__$1,meta32017){
return (new cljs.core.async.t_cljs$core$async32016(f__$1,ch__$1,meta32014__$1,___$2,fn1__$1,meta32017));
});

}

return (new cljs.core.async.t_cljs$core$async32016(self__.f,self__.ch,self__.meta32014,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32020 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32020) : self__.f.call(null,G__32020));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32013.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32013.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32014","meta32014",1244719551,null)], null);
}));

(cljs.core.async.t_cljs$core$async32013.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32013");

(cljs.core.async.t_cljs$core$async32013.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32013");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32013.
 */
cljs.core.async.__GT_t_cljs$core$async32013 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32013(f__$1,ch__$1,meta32014){
return (new cljs.core.async.t_cljs$core$async32013(f__$1,ch__$1,meta32014));
});

}

return (new cljs.core.async.t_cljs$core$async32013(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32021 = (function (f,ch,meta32022){
this.f = f;
this.ch = ch;
this.meta32022 = meta32022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32023,meta32022__$1){
var self__ = this;
var _32023__$1 = this;
return (new cljs.core.async.t_cljs$core$async32021(self__.f,self__.ch,meta32022__$1));
}));

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32023){
var self__ = this;
var _32023__$1 = this;
return self__.meta32022;
}));

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32022","meta32022",630855494,null)], null);
}));

(cljs.core.async.t_cljs$core$async32021.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32021");

(cljs.core.async.t_cljs$core$async32021.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32021");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32021.
 */
cljs.core.async.__GT_t_cljs$core$async32021 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32021(f__$1,ch__$1,meta32022){
return (new cljs.core.async.t_cljs$core$async32021(f__$1,ch__$1,meta32022));
});

}

return (new cljs.core.async.t_cljs$core$async32021(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32024 = (function (p,ch,meta32025){
this.p = p;
this.ch = ch;
this.meta32025 = meta32025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32026,meta32025__$1){
var self__ = this;
var _32026__$1 = this;
return (new cljs.core.async.t_cljs$core$async32024(self__.p,self__.ch,meta32025__$1));
}));

(cljs.core.async.t_cljs$core$async32024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32026){
var self__ = this;
var _32026__$1 = this;
return self__.meta32025;
}));

(cljs.core.async.t_cljs$core$async32024.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32024.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32024.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32024.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32024.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32024.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32024.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32025","meta32025",-1937873304,null)], null);
}));

(cljs.core.async.t_cljs$core$async32024.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32024");

(cljs.core.async.t_cljs$core$async32024.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32024");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32024.
 */
cljs.core.async.__GT_t_cljs$core$async32024 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32024(p__$1,ch__$1,meta32025){
return (new cljs.core.async.t_cljs$core$async32024(p__$1,ch__$1,meta32025));
});

}

return (new cljs.core.async.t_cljs$core$async32024(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32028 = arguments.length;
switch (G__32028) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30416__auto___32936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_32049){
var state_val_32050 = (state_32049[(1)]);
if((state_val_32050 === (7))){
var inst_32045 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
var statearr_32051_32937 = state_32049__$1;
(statearr_32051_32937[(2)] = inst_32045);

(statearr_32051_32937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (1))){
var state_32049__$1 = state_32049;
var statearr_32052_32938 = state_32049__$1;
(statearr_32052_32938[(2)] = null);

(statearr_32052_32938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (4))){
var inst_32031 = (state_32049[(7)]);
var inst_32031__$1 = (state_32049[(2)]);
var inst_32032 = (inst_32031__$1 == null);
var state_32049__$1 = (function (){var statearr_32053 = state_32049;
(statearr_32053[(7)] = inst_32031__$1);

return statearr_32053;
})();
if(cljs.core.truth_(inst_32032)){
var statearr_32054_32939 = state_32049__$1;
(statearr_32054_32939[(1)] = (5));

} else {
var statearr_32055_32940 = state_32049__$1;
(statearr_32055_32940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (6))){
var inst_32031 = (state_32049[(7)]);
var inst_32036 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32031) : p.call(null,inst_32031));
var state_32049__$1 = state_32049;
if(cljs.core.truth_(inst_32036)){
var statearr_32056_32941 = state_32049__$1;
(statearr_32056_32941[(1)] = (8));

} else {
var statearr_32057_32942 = state_32049__$1;
(statearr_32057_32942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (3))){
var inst_32047 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32049__$1,inst_32047);
} else {
if((state_val_32050 === (2))){
var state_32049__$1 = state_32049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32049__$1,(4),ch);
} else {
if((state_val_32050 === (11))){
var inst_32039 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
var statearr_32058_32943 = state_32049__$1;
(statearr_32058_32943[(2)] = inst_32039);

(statearr_32058_32943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (9))){
var state_32049__$1 = state_32049;
var statearr_32059_32944 = state_32049__$1;
(statearr_32059_32944[(2)] = null);

(statearr_32059_32944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (5))){
var inst_32034 = cljs.core.async.close_BANG_(out);
var state_32049__$1 = state_32049;
var statearr_32060_32945 = state_32049__$1;
(statearr_32060_32945[(2)] = inst_32034);

(statearr_32060_32945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (10))){
var inst_32042 = (state_32049[(2)]);
var state_32049__$1 = (function (){var statearr_32061 = state_32049;
(statearr_32061[(8)] = inst_32042);

return statearr_32061;
})();
var statearr_32062_32946 = state_32049__$1;
(statearr_32062_32946[(2)] = null);

(statearr_32062_32946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (8))){
var inst_32031 = (state_32049[(7)]);
var state_32049__$1 = state_32049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32049__$1,(11),out,inst_32031);
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
});
return (function() {
var cljs$core$async$state_machine__30340__auto__ = null;
var cljs$core$async$state_machine__30340__auto____0 = (function (){
var statearr_32063 = [null,null,null,null,null,null,null,null,null];
(statearr_32063[(0)] = cljs$core$async$state_machine__30340__auto__);

(statearr_32063[(1)] = (1));

return statearr_32063;
});
var cljs$core$async$state_machine__30340__auto____1 = (function (state_32049){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_32049);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e32064){var ex__30343__auto__ = e32064;
var statearr_32065_32947 = state_32049;
(statearr_32065_32947[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_32049[(4)]))){
var statearr_32067_32948 = state_32049;
(statearr_32067_32948[(1)] = cljs.core.first((state_32049[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32950 = state_32049;
state_32049 = G__32950;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$state_machine__30340__auto__ = function(state_32049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30340__auto____1.call(this,state_32049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30340__auto____0;
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30340__auto____1;
return cljs$core$async$state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_32071 = f__30417__auto__();
(statearr_32071[(6)] = c__30416__auto___32936);

return statearr_32071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32073 = arguments.length;
switch (G__32073) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_32143){
var state_val_32144 = (state_32143[(1)]);
if((state_val_32144 === (7))){
var inst_32139 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
var statearr_32148_32953 = state_32143__$1;
(statearr_32148_32953[(2)] = inst_32139);

(statearr_32148_32953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (20))){
var inst_32106 = (state_32143[(7)]);
var inst_32120 = (state_32143[(2)]);
var inst_32121 = cljs.core.next(inst_32106);
var inst_32092 = inst_32121;
var inst_32093 = null;
var inst_32094 = (0);
var inst_32095 = (0);
var state_32143__$1 = (function (){var statearr_32149 = state_32143;
(statearr_32149[(8)] = inst_32094);

(statearr_32149[(9)] = inst_32093);

(statearr_32149[(10)] = inst_32120);

(statearr_32149[(11)] = inst_32092);

(statearr_32149[(12)] = inst_32095);

return statearr_32149;
})();
var statearr_32150_32954 = state_32143__$1;
(statearr_32150_32954[(2)] = null);

(statearr_32150_32954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (1))){
var state_32143__$1 = state_32143;
var statearr_32151_32955 = state_32143__$1;
(statearr_32151_32955[(2)] = null);

(statearr_32151_32955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (4))){
var inst_32081 = (state_32143[(13)]);
var inst_32081__$1 = (state_32143[(2)]);
var inst_32082 = (inst_32081__$1 == null);
var state_32143__$1 = (function (){var statearr_32152 = state_32143;
(statearr_32152[(13)] = inst_32081__$1);

return statearr_32152;
})();
if(cljs.core.truth_(inst_32082)){
var statearr_32153_32956 = state_32143__$1;
(statearr_32153_32956[(1)] = (5));

} else {
var statearr_32154_32957 = state_32143__$1;
(statearr_32154_32957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (15))){
var state_32143__$1 = state_32143;
var statearr_32158_32958 = state_32143__$1;
(statearr_32158_32958[(2)] = null);

(statearr_32158_32958[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (21))){
var state_32143__$1 = state_32143;
var statearr_32159_32959 = state_32143__$1;
(statearr_32159_32959[(2)] = null);

(statearr_32159_32959[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (13))){
var inst_32094 = (state_32143[(8)]);
var inst_32093 = (state_32143[(9)]);
var inst_32092 = (state_32143[(11)]);
var inst_32095 = (state_32143[(12)]);
var inst_32102 = (state_32143[(2)]);
var inst_32103 = (inst_32095 + (1));
var tmp32155 = inst_32094;
var tmp32156 = inst_32093;
var tmp32157 = inst_32092;
var inst_32092__$1 = tmp32157;
var inst_32093__$1 = tmp32156;
var inst_32094__$1 = tmp32155;
var inst_32095__$1 = inst_32103;
var state_32143__$1 = (function (){var statearr_32160 = state_32143;
(statearr_32160[(8)] = inst_32094__$1);

(statearr_32160[(9)] = inst_32093__$1);

(statearr_32160[(14)] = inst_32102);

(statearr_32160[(11)] = inst_32092__$1);

(statearr_32160[(12)] = inst_32095__$1);

return statearr_32160;
})();
var statearr_32161_32960 = state_32143__$1;
(statearr_32161_32960[(2)] = null);

(statearr_32161_32960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (22))){
var state_32143__$1 = state_32143;
var statearr_32163_32961 = state_32143__$1;
(statearr_32163_32961[(2)] = null);

(statearr_32163_32961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (6))){
var inst_32081 = (state_32143[(13)]);
var inst_32090 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32081) : f.call(null,inst_32081));
var inst_32091 = cljs.core.seq(inst_32090);
var inst_32092 = inst_32091;
var inst_32093 = null;
var inst_32094 = (0);
var inst_32095 = (0);
var state_32143__$1 = (function (){var statearr_32164 = state_32143;
(statearr_32164[(8)] = inst_32094);

(statearr_32164[(9)] = inst_32093);

(statearr_32164[(11)] = inst_32092);

(statearr_32164[(12)] = inst_32095);

return statearr_32164;
})();
var statearr_32165_32962 = state_32143__$1;
(statearr_32165_32962[(2)] = null);

(statearr_32165_32962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (17))){
var inst_32106 = (state_32143[(7)]);
var inst_32110 = cljs.core.chunk_first(inst_32106);
var inst_32114 = cljs.core.chunk_rest(inst_32106);
var inst_32115 = cljs.core.count(inst_32110);
var inst_32092 = inst_32114;
var inst_32093 = inst_32110;
var inst_32094 = inst_32115;
var inst_32095 = (0);
var state_32143__$1 = (function (){var statearr_32167 = state_32143;
(statearr_32167[(8)] = inst_32094);

(statearr_32167[(9)] = inst_32093);

(statearr_32167[(11)] = inst_32092);

(statearr_32167[(12)] = inst_32095);

return statearr_32167;
})();
var statearr_32170_32963 = state_32143__$1;
(statearr_32170_32963[(2)] = null);

(statearr_32170_32963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (3))){
var inst_32141 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32143__$1,inst_32141);
} else {
if((state_val_32144 === (12))){
var inst_32129 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
var statearr_32171_32965 = state_32143__$1;
(statearr_32171_32965[(2)] = inst_32129);

(statearr_32171_32965[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (2))){
var state_32143__$1 = state_32143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32143__$1,(4),in$);
} else {
if((state_val_32144 === (23))){
var inst_32137 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
var statearr_32172_32967 = state_32143__$1;
(statearr_32172_32967[(2)] = inst_32137);

(statearr_32172_32967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (19))){
var inst_32124 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
var statearr_32173_32968 = state_32143__$1;
(statearr_32173_32968[(2)] = inst_32124);

(statearr_32173_32968[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (11))){
var inst_32106 = (state_32143[(7)]);
var inst_32092 = (state_32143[(11)]);
var inst_32106__$1 = cljs.core.seq(inst_32092);
var state_32143__$1 = (function (){var statearr_32174 = state_32143;
(statearr_32174[(7)] = inst_32106__$1);

return statearr_32174;
})();
if(inst_32106__$1){
var statearr_32175_32969 = state_32143__$1;
(statearr_32175_32969[(1)] = (14));

} else {
var statearr_32176_32970 = state_32143__$1;
(statearr_32176_32970[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (9))){
var inst_32131 = (state_32143[(2)]);
var inst_32132 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32143__$1 = (function (){var statearr_32177 = state_32143;
(statearr_32177[(15)] = inst_32131);

return statearr_32177;
})();
if(cljs.core.truth_(inst_32132)){
var statearr_32178_32971 = state_32143__$1;
(statearr_32178_32971[(1)] = (21));

} else {
var statearr_32179_32972 = state_32143__$1;
(statearr_32179_32972[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (5))){
var inst_32084 = cljs.core.async.close_BANG_(out);
var state_32143__$1 = state_32143;
var statearr_32180_32973 = state_32143__$1;
(statearr_32180_32973[(2)] = inst_32084);

(statearr_32180_32973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (14))){
var inst_32106 = (state_32143[(7)]);
var inst_32108 = cljs.core.chunked_seq_QMARK_(inst_32106);
var state_32143__$1 = state_32143;
if(inst_32108){
var statearr_32181_32974 = state_32143__$1;
(statearr_32181_32974[(1)] = (17));

} else {
var statearr_32182_32975 = state_32143__$1;
(statearr_32182_32975[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (16))){
var inst_32127 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
var statearr_32183_32976 = state_32143__$1;
(statearr_32183_32976[(2)] = inst_32127);

(statearr_32183_32976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (10))){
var inst_32093 = (state_32143[(9)]);
var inst_32095 = (state_32143[(12)]);
var inst_32100 = cljs.core._nth(inst_32093,inst_32095);
var state_32143__$1 = state_32143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32143__$1,(13),out,inst_32100);
} else {
if((state_val_32144 === (18))){
var inst_32106 = (state_32143[(7)]);
var inst_32118 = cljs.core.first(inst_32106);
var state_32143__$1 = state_32143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32143__$1,(20),out,inst_32118);
} else {
if((state_val_32144 === (8))){
var inst_32094 = (state_32143[(8)]);
var inst_32095 = (state_32143[(12)]);
var inst_32097 = (inst_32095 < inst_32094);
var inst_32098 = inst_32097;
var state_32143__$1 = state_32143;
if(cljs.core.truth_(inst_32098)){
var statearr_32184_32977 = state_32143__$1;
(statearr_32184_32977[(1)] = (10));

} else {
var statearr_32185_32978 = state_32143__$1;
(statearr_32185_32978[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30340__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30340__auto____0 = (function (){
var statearr_32186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32186[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30340__auto__);

(statearr_32186[(1)] = (1));

return statearr_32186;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30340__auto____1 = (function (state_32143){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_32143);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e32187){var ex__30343__auto__ = e32187;
var statearr_32188_32979 = state_32143;
(statearr_32188_32979[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_32143[(4)]))){
var statearr_32189_32980 = state_32143;
(statearr_32189_32980[(1)] = cljs.core.first((state_32143[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32981 = state_32143;
state_32143 = G__32981;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30340__auto__ = function(state_32143){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30340__auto____1.call(this,state_32143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30340__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30340__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_32190 = f__30417__auto__();
(statearr_32190[(6)] = c__30416__auto__);

return statearr_32190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));

return c__30416__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32192 = arguments.length;
switch (G__32192) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32194 = arguments.length;
switch (G__32194) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32229 = arguments.length;
switch (G__32229) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30416__auto___32985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_32268){
var state_val_32269 = (state_32268[(1)]);
if((state_val_32269 === (7))){
var inst_32263 = (state_32268[(2)]);
var state_32268__$1 = state_32268;
var statearr_32270_32986 = state_32268__$1;
(statearr_32270_32986[(2)] = inst_32263);

(statearr_32270_32986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32269 === (1))){
var inst_32232 = null;
var state_32268__$1 = (function (){var statearr_32271 = state_32268;
(statearr_32271[(7)] = inst_32232);

return statearr_32271;
})();
var statearr_32272_32987 = state_32268__$1;
(statearr_32272_32987[(2)] = null);

(statearr_32272_32987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32269 === (4))){
var inst_32248 = (state_32268[(8)]);
var inst_32248__$1 = (state_32268[(2)]);
var inst_32249 = (inst_32248__$1 == null);
var inst_32250 = cljs.core.not(inst_32249);
var state_32268__$1 = (function (){var statearr_32273 = state_32268;
(statearr_32273[(8)] = inst_32248__$1);

return statearr_32273;
})();
if(inst_32250){
var statearr_32274_32988 = state_32268__$1;
(statearr_32274_32988[(1)] = (5));

} else {
var statearr_32275_32989 = state_32268__$1;
(statearr_32275_32989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32269 === (6))){
var state_32268__$1 = state_32268;
var statearr_32276_32990 = state_32268__$1;
(statearr_32276_32990[(2)] = null);

(statearr_32276_32990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32269 === (3))){
var inst_32265 = (state_32268[(2)]);
var inst_32266 = cljs.core.async.close_BANG_(out);
var state_32268__$1 = (function (){var statearr_32277 = state_32268;
(statearr_32277[(9)] = inst_32265);

return statearr_32277;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32268__$1,inst_32266);
} else {
if((state_val_32269 === (2))){
var state_32268__$1 = state_32268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32268__$1,(4),ch);
} else {
if((state_val_32269 === (11))){
var inst_32248 = (state_32268[(8)]);
var inst_32257 = (state_32268[(2)]);
var inst_32232 = inst_32248;
var state_32268__$1 = (function (){var statearr_32278 = state_32268;
(statearr_32278[(7)] = inst_32232);

(statearr_32278[(10)] = inst_32257);

return statearr_32278;
})();
var statearr_32279_32992 = state_32268__$1;
(statearr_32279_32992[(2)] = null);

(statearr_32279_32992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32269 === (9))){
var inst_32248 = (state_32268[(8)]);
var state_32268__$1 = state_32268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32268__$1,(11),out,inst_32248);
} else {
if((state_val_32269 === (5))){
var inst_32248 = (state_32268[(8)]);
var inst_32232 = (state_32268[(7)]);
var inst_32252 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32248,inst_32232);
var state_32268__$1 = state_32268;
if(inst_32252){
var statearr_32281_32993 = state_32268__$1;
(statearr_32281_32993[(1)] = (8));

} else {
var statearr_32282_32994 = state_32268__$1;
(statearr_32282_32994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32269 === (10))){
var inst_32260 = (state_32268[(2)]);
var state_32268__$1 = state_32268;
var statearr_32283_32995 = state_32268__$1;
(statearr_32283_32995[(2)] = inst_32260);

(statearr_32283_32995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32269 === (8))){
var inst_32232 = (state_32268[(7)]);
var tmp32280 = inst_32232;
var inst_32232__$1 = tmp32280;
var state_32268__$1 = (function (){var statearr_32284 = state_32268;
(statearr_32284[(7)] = inst_32232__$1);

return statearr_32284;
})();
var statearr_32294_32996 = state_32268__$1;
(statearr_32294_32996[(2)] = null);

(statearr_32294_32996[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30340__auto__ = null;
var cljs$core$async$state_machine__30340__auto____0 = (function (){
var statearr_32295 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32295[(0)] = cljs$core$async$state_machine__30340__auto__);

(statearr_32295[(1)] = (1));

return statearr_32295;
});
var cljs$core$async$state_machine__30340__auto____1 = (function (state_32268){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_32268);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e32296){var ex__30343__auto__ = e32296;
var statearr_32297_33001 = state_32268;
(statearr_32297_33001[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_32268[(4)]))){
var statearr_32298_33002 = state_32268;
(statearr_32298_33002[(1)] = cljs.core.first((state_32268[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33003 = state_32268;
state_32268 = G__33003;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$state_machine__30340__auto__ = function(state_32268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30340__auto____1.call(this,state_32268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30340__auto____0;
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30340__auto____1;
return cljs$core$async$state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_32299 = f__30417__auto__();
(statearr_32299[(6)] = c__30416__auto___32985);

return statearr_32299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32301 = arguments.length;
switch (G__32301) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30416__auto___33005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_32339){
var state_val_32340 = (state_32339[(1)]);
if((state_val_32340 === (7))){
var inst_32335 = (state_32339[(2)]);
var state_32339__$1 = state_32339;
var statearr_32341_33006 = state_32339__$1;
(statearr_32341_33006[(2)] = inst_32335);

(statearr_32341_33006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32340 === (1))){
var inst_32302 = (new Array(n));
var inst_32303 = inst_32302;
var inst_32304 = (0);
var state_32339__$1 = (function (){var statearr_32342 = state_32339;
(statearr_32342[(7)] = inst_32303);

(statearr_32342[(8)] = inst_32304);

return statearr_32342;
})();
var statearr_32343_33007 = state_32339__$1;
(statearr_32343_33007[(2)] = null);

(statearr_32343_33007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32340 === (4))){
var inst_32307 = (state_32339[(9)]);
var inst_32307__$1 = (state_32339[(2)]);
var inst_32308 = (inst_32307__$1 == null);
var inst_32309 = cljs.core.not(inst_32308);
var state_32339__$1 = (function (){var statearr_32344 = state_32339;
(statearr_32344[(9)] = inst_32307__$1);

return statearr_32344;
})();
if(inst_32309){
var statearr_32345_33008 = state_32339__$1;
(statearr_32345_33008[(1)] = (5));

} else {
var statearr_32346_33009 = state_32339__$1;
(statearr_32346_33009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32340 === (15))){
var inst_32329 = (state_32339[(2)]);
var state_32339__$1 = state_32339;
var statearr_32347_33010 = state_32339__$1;
(statearr_32347_33010[(2)] = inst_32329);

(statearr_32347_33010[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32340 === (13))){
var state_32339__$1 = state_32339;
var statearr_32348_33011 = state_32339__$1;
(statearr_32348_33011[(2)] = null);

(statearr_32348_33011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32340 === (6))){
var inst_32304 = (state_32339[(8)]);
var inst_32325 = (inst_32304 > (0));
var state_32339__$1 = state_32339;
if(cljs.core.truth_(inst_32325)){
var statearr_32356_33012 = state_32339__$1;
(statearr_32356_33012[(1)] = (12));

} else {
var statearr_32357_33013 = state_32339__$1;
(statearr_32357_33013[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32340 === (3))){
var inst_32337 = (state_32339[(2)]);
var state_32339__$1 = state_32339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32339__$1,inst_32337);
} else {
if((state_val_32340 === (12))){
var inst_32303 = (state_32339[(7)]);
var inst_32327 = cljs.core.vec(inst_32303);
var state_32339__$1 = state_32339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32339__$1,(15),out,inst_32327);
} else {
if((state_val_32340 === (2))){
var state_32339__$1 = state_32339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32339__$1,(4),ch);
} else {
if((state_val_32340 === (11))){
var inst_32319 = (state_32339[(2)]);
var inst_32320 = (new Array(n));
var inst_32303 = inst_32320;
var inst_32304 = (0);
var state_32339__$1 = (function (){var statearr_32358 = state_32339;
(statearr_32358[(10)] = inst_32319);

(statearr_32358[(7)] = inst_32303);

(statearr_32358[(8)] = inst_32304);

return statearr_32358;
})();
var statearr_32359_33014 = state_32339__$1;
(statearr_32359_33014[(2)] = null);

(statearr_32359_33014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32340 === (9))){
var inst_32303 = (state_32339[(7)]);
var inst_32317 = cljs.core.vec(inst_32303);
var state_32339__$1 = state_32339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32339__$1,(11),out,inst_32317);
} else {
if((state_val_32340 === (5))){
var inst_32303 = (state_32339[(7)]);
var inst_32307 = (state_32339[(9)]);
var inst_32304 = (state_32339[(8)]);
var inst_32312 = (state_32339[(11)]);
var inst_32311 = (inst_32303[inst_32304] = inst_32307);
var inst_32312__$1 = (inst_32304 + (1));
var inst_32313 = (inst_32312__$1 < n);
var state_32339__$1 = (function (){var statearr_32360 = state_32339;
(statearr_32360[(12)] = inst_32311);

(statearr_32360[(11)] = inst_32312__$1);

return statearr_32360;
})();
if(cljs.core.truth_(inst_32313)){
var statearr_32361_33015 = state_32339__$1;
(statearr_32361_33015[(1)] = (8));

} else {
var statearr_32362_33016 = state_32339__$1;
(statearr_32362_33016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32340 === (14))){
var inst_32332 = (state_32339[(2)]);
var inst_32333 = cljs.core.async.close_BANG_(out);
var state_32339__$1 = (function (){var statearr_32364 = state_32339;
(statearr_32364[(13)] = inst_32332);

return statearr_32364;
})();
var statearr_32365_33021 = state_32339__$1;
(statearr_32365_33021[(2)] = inst_32333);

(statearr_32365_33021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32340 === (10))){
var inst_32323 = (state_32339[(2)]);
var state_32339__$1 = state_32339;
var statearr_32366_33025 = state_32339__$1;
(statearr_32366_33025[(2)] = inst_32323);

(statearr_32366_33025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32340 === (8))){
var inst_32303 = (state_32339[(7)]);
var inst_32312 = (state_32339[(11)]);
var tmp32363 = inst_32303;
var inst_32303__$1 = tmp32363;
var inst_32304 = inst_32312;
var state_32339__$1 = (function (){var statearr_32367 = state_32339;
(statearr_32367[(7)] = inst_32303__$1);

(statearr_32367[(8)] = inst_32304);

return statearr_32367;
})();
var statearr_32368_33026 = state_32339__$1;
(statearr_32368_33026[(2)] = null);

(statearr_32368_33026[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30340__auto__ = null;
var cljs$core$async$state_machine__30340__auto____0 = (function (){
var statearr_32369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32369[(0)] = cljs$core$async$state_machine__30340__auto__);

(statearr_32369[(1)] = (1));

return statearr_32369;
});
var cljs$core$async$state_machine__30340__auto____1 = (function (state_32339){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_32339);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e32370){var ex__30343__auto__ = e32370;
var statearr_32371_33030 = state_32339;
(statearr_32371_33030[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_32339[(4)]))){
var statearr_32372_33031 = state_32339;
(statearr_32372_33031[(1)] = cljs.core.first((state_32339[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33035 = state_32339;
state_32339 = G__33035;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$state_machine__30340__auto__ = function(state_32339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30340__auto____1.call(this,state_32339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30340__auto____0;
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30340__auto____1;
return cljs$core$async$state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_32377 = f__30417__auto__();
(statearr_32377[(6)] = c__30416__auto___33005);

return statearr_32377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32379 = arguments.length;
switch (G__32379) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30416__auto___33040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30417__auto__ = (function (){var switch__30339__auto__ = (function (state_32424){
var state_val_32425 = (state_32424[(1)]);
if((state_val_32425 === (7))){
var inst_32420 = (state_32424[(2)]);
var state_32424__$1 = state_32424;
var statearr_32426_33041 = state_32424__$1;
(statearr_32426_33041[(2)] = inst_32420);

(statearr_32426_33041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (1))){
var inst_32380 = [];
var inst_32381 = inst_32380;
var inst_32382 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32424__$1 = (function (){var statearr_32427 = state_32424;
(statearr_32427[(7)] = inst_32382);

(statearr_32427[(8)] = inst_32381);

return statearr_32427;
})();
var statearr_32428_33043 = state_32424__$1;
(statearr_32428_33043[(2)] = null);

(statearr_32428_33043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (4))){
var inst_32385 = (state_32424[(9)]);
var inst_32385__$1 = (state_32424[(2)]);
var inst_32386 = (inst_32385__$1 == null);
var inst_32387 = cljs.core.not(inst_32386);
var state_32424__$1 = (function (){var statearr_32429 = state_32424;
(statearr_32429[(9)] = inst_32385__$1);

return statearr_32429;
})();
if(inst_32387){
var statearr_32430_33047 = state_32424__$1;
(statearr_32430_33047[(1)] = (5));

} else {
var statearr_32431_33048 = state_32424__$1;
(statearr_32431_33048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (15))){
var inst_32381 = (state_32424[(8)]);
var inst_32412 = cljs.core.vec(inst_32381);
var state_32424__$1 = state_32424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32424__$1,(18),out,inst_32412);
} else {
if((state_val_32425 === (13))){
var inst_32407 = (state_32424[(2)]);
var state_32424__$1 = state_32424;
var statearr_32432_33049 = state_32424__$1;
(statearr_32432_33049[(2)] = inst_32407);

(statearr_32432_33049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (6))){
var inst_32381 = (state_32424[(8)]);
var inst_32409 = inst_32381.length;
var inst_32410 = (inst_32409 > (0));
var state_32424__$1 = state_32424;
if(cljs.core.truth_(inst_32410)){
var statearr_32433_33050 = state_32424__$1;
(statearr_32433_33050[(1)] = (15));

} else {
var statearr_32434_33051 = state_32424__$1;
(statearr_32434_33051[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (17))){
var inst_32417 = (state_32424[(2)]);
var inst_32418 = cljs.core.async.close_BANG_(out);
var state_32424__$1 = (function (){var statearr_32435 = state_32424;
(statearr_32435[(10)] = inst_32417);

return statearr_32435;
})();
var statearr_32436_33052 = state_32424__$1;
(statearr_32436_33052[(2)] = inst_32418);

(statearr_32436_33052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (3))){
var inst_32422 = (state_32424[(2)]);
var state_32424__$1 = state_32424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32424__$1,inst_32422);
} else {
if((state_val_32425 === (12))){
var inst_32381 = (state_32424[(8)]);
var inst_32400 = cljs.core.vec(inst_32381);
var state_32424__$1 = state_32424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32424__$1,(14),out,inst_32400);
} else {
if((state_val_32425 === (2))){
var state_32424__$1 = state_32424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32424__$1,(4),ch);
} else {
if((state_val_32425 === (11))){
var inst_32385 = (state_32424[(9)]);
var inst_32381 = (state_32424[(8)]);
var inst_32389 = (state_32424[(11)]);
var inst_32397 = inst_32381.push(inst_32385);
var tmp32437 = inst_32381;
var inst_32381__$1 = tmp32437;
var inst_32382 = inst_32389;
var state_32424__$1 = (function (){var statearr_32438 = state_32424;
(statearr_32438[(12)] = inst_32397);

(statearr_32438[(7)] = inst_32382);

(statearr_32438[(8)] = inst_32381__$1);

return statearr_32438;
})();
var statearr_32439_33053 = state_32424__$1;
(statearr_32439_33053[(2)] = null);

(statearr_32439_33053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (9))){
var inst_32382 = (state_32424[(7)]);
var inst_32393 = cljs.core.keyword_identical_QMARK_(inst_32382,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32424__$1 = state_32424;
var statearr_32440_33054 = state_32424__$1;
(statearr_32440_33054[(2)] = inst_32393);

(statearr_32440_33054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (5))){
var inst_32382 = (state_32424[(7)]);
var inst_32385 = (state_32424[(9)]);
var inst_32390 = (state_32424[(13)]);
var inst_32389 = (state_32424[(11)]);
var inst_32389__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32385) : f.call(null,inst_32385));
var inst_32390__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32389__$1,inst_32382);
var state_32424__$1 = (function (){var statearr_32441 = state_32424;
(statearr_32441[(13)] = inst_32390__$1);

(statearr_32441[(11)] = inst_32389__$1);

return statearr_32441;
})();
if(inst_32390__$1){
var statearr_32442_33055 = state_32424__$1;
(statearr_32442_33055[(1)] = (8));

} else {
var statearr_32443_33056 = state_32424__$1;
(statearr_32443_33056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (14))){
var inst_32385 = (state_32424[(9)]);
var inst_32389 = (state_32424[(11)]);
var inst_32402 = (state_32424[(2)]);
var inst_32403 = [];
var inst_32404 = inst_32403.push(inst_32385);
var inst_32381 = inst_32403;
var inst_32382 = inst_32389;
var state_32424__$1 = (function (){var statearr_32444 = state_32424;
(statearr_32444[(7)] = inst_32382);

(statearr_32444[(14)] = inst_32404);

(statearr_32444[(15)] = inst_32402);

(statearr_32444[(8)] = inst_32381);

return statearr_32444;
})();
var statearr_32445_33058 = state_32424__$1;
(statearr_32445_33058[(2)] = null);

(statearr_32445_33058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (16))){
var state_32424__$1 = state_32424;
var statearr_32446_33060 = state_32424__$1;
(statearr_32446_33060[(2)] = null);

(statearr_32446_33060[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (10))){
var inst_32395 = (state_32424[(2)]);
var state_32424__$1 = state_32424;
if(cljs.core.truth_(inst_32395)){
var statearr_32447_33061 = state_32424__$1;
(statearr_32447_33061[(1)] = (11));

} else {
var statearr_32448_33062 = state_32424__$1;
(statearr_32448_33062[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (18))){
var inst_32414 = (state_32424[(2)]);
var state_32424__$1 = state_32424;
var statearr_32449_33063 = state_32424__$1;
(statearr_32449_33063[(2)] = inst_32414);

(statearr_32449_33063[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (8))){
var inst_32390 = (state_32424[(13)]);
var state_32424__$1 = state_32424;
var statearr_32450_33064 = state_32424__$1;
(statearr_32450_33064[(2)] = inst_32390);

(statearr_32450_33064[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__30340__auto__ = null;
var cljs$core$async$state_machine__30340__auto____0 = (function (){
var statearr_32451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32451[(0)] = cljs$core$async$state_machine__30340__auto__);

(statearr_32451[(1)] = (1));

return statearr_32451;
});
var cljs$core$async$state_machine__30340__auto____1 = (function (state_32424){
while(true){
var ret_value__30341__auto__ = (function (){try{while(true){
var result__30342__auto__ = switch__30339__auto__(state_32424);
if(cljs.core.keyword_identical_QMARK_(result__30342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30342__auto__;
}
break;
}
}catch (e32452){var ex__30343__auto__ = e32452;
var statearr_32453_33065 = state_32424;
(statearr_32453_33065[(2)] = ex__30343__auto__);


if(cljs.core.seq((state_32424[(4)]))){
var statearr_32454_33066 = state_32424;
(statearr_32454_33066[(1)] = cljs.core.first((state_32424[(4)])));

} else {
throw ex__30343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33067 = state_32424;
state_32424 = G__33067;
continue;
} else {
return ret_value__30341__auto__;
}
break;
}
});
cljs$core$async$state_machine__30340__auto__ = function(state_32424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30340__auto____1.call(this,state_32424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30340__auto____0;
cljs$core$async$state_machine__30340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30340__auto____1;
return cljs$core$async$state_machine__30340__auto__;
})()
})();
var state__30418__auto__ = (function (){var statearr_32455 = f__30417__auto__();
(statearr_32455[(6)] = c__30416__auto___33040);

return statearr_32455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30418__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
