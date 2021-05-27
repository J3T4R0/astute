goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30604 = arguments.length;
switch (G__30604) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30605 = (function (f,blockable,meta30606){
this.f = f;
this.blockable = blockable;
this.meta30606 = meta30606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30607,meta30606__$1){
var self__ = this;
var _30607__$1 = this;
return (new cljs.core.async.t_cljs$core$async30605(self__.f,self__.blockable,meta30606__$1));
}));

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30607){
var self__ = this;
var _30607__$1 = this;
return self__.meta30606;
}));

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30606","meta30606",1860908526,null)], null);
}));

(cljs.core.async.t_cljs$core$async30605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30605");

(cljs.core.async.t_cljs$core$async30605.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30605.
 */
cljs.core.async.__GT_t_cljs$core$async30605 = (function cljs$core$async$__GT_t_cljs$core$async30605(f__$1,blockable__$1,meta30606){
return (new cljs.core.async.t_cljs$core$async30605(f__$1,blockable__$1,meta30606));
});

}

return (new cljs.core.async.t_cljs$core$async30605(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30628 = arguments.length;
switch (G__30628) {
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
var G__30630 = arguments.length;
switch (G__30630) {
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
var G__30668 = arguments.length;
switch (G__30668) {
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
var val_32473 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32473) : fn1.call(null,val_32473));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32473) : fn1.call(null,val_32473));
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
var G__30671 = arguments.length;
switch (G__30671) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30677 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30677 = (function (flag,meta30678){
this.flag = flag;
this.meta30678 = meta30678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30679,meta30678__$1){
var self__ = this;
var _30679__$1 = this;
return (new cljs.core.async.t_cljs$core$async30677(self__.flag,meta30678__$1));
}));

(cljs.core.async.t_cljs$core$async30677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30679){
var self__ = this;
var _30679__$1 = this;
return self__.meta30678;
}));

(cljs.core.async.t_cljs$core$async30677.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30677.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30678","meta30678",619678124,null)], null);
}));

(cljs.core.async.t_cljs$core$async30677.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30677");

(cljs.core.async.t_cljs$core$async30677.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30677");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30677.
 */
cljs.core.async.__GT_t_cljs$core$async30677 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30677(flag__$1,meta30678){
return (new cljs.core.async.t_cljs$core$async30677(flag__$1,meta30678));
});

}

return (new cljs.core.async.t_cljs$core$async30677(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30714 = (function (flag,cb,meta30715){
this.flag = flag;
this.cb = cb;
this.meta30715 = meta30715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30716,meta30715__$1){
var self__ = this;
var _30716__$1 = this;
return (new cljs.core.async.t_cljs$core$async30714(self__.flag,self__.cb,meta30715__$1));
}));

(cljs.core.async.t_cljs$core$async30714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30716){
var self__ = this;
var _30716__$1 = this;
return self__.meta30715;
}));

(cljs.core.async.t_cljs$core$async30714.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30714.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30714.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30714.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30715","meta30715",375698311,null)], null);
}));

(cljs.core.async.t_cljs$core$async30714.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30714");

(cljs.core.async.t_cljs$core$async30714.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30714");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30714.
 */
cljs.core.async.__GT_t_cljs$core$async30714 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30714(flag__$1,cb__$1,meta30715){
return (new cljs.core.async.t_cljs$core$async30714(flag__$1,cb__$1,meta30715));
});

}

return (new cljs.core.async.t_cljs$core$async30714(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30717_SHARP_){
var G__30729 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30717_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30729) : fret.call(null,G__30729));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30718_SHARP_){
var G__30733 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30718_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30733) : fret.call(null,G__30733));
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
var G__32486 = (i + (1));
i = G__32486;
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
var len__4829__auto___32487 = arguments.length;
var i__4830__auto___32488 = (0);
while(true){
if((i__4830__auto___32488 < len__4829__auto___32487)){
args__4835__auto__.push((arguments[i__4830__auto___32488]));

var G__32489 = (i__4830__auto___32488 + (1));
i__4830__auto___32488 = G__32489;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30744){
var map__30745 = p__30744;
var map__30745__$1 = cljs.core.__destructure_map(map__30745);
var opts = map__30745__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30734){
var G__30735 = cljs.core.first(seq30734);
var seq30734__$1 = cljs.core.next(seq30734);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30735,seq30734__$1);
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
var G__30747 = arguments.length;
switch (G__30747) {
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
var c__30529__auto___32491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_30780){
var state_val_30781 = (state_30780[(1)]);
if((state_val_30781 === (7))){
var inst_30776 = (state_30780[(2)]);
var state_30780__$1 = state_30780;
var statearr_30786_32492 = state_30780__$1;
(statearr_30786_32492[(2)] = inst_30776);

(statearr_30786_32492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (1))){
var state_30780__$1 = state_30780;
var statearr_30787_32493 = state_30780__$1;
(statearr_30787_32493[(2)] = null);

(statearr_30787_32493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (4))){
var inst_30750 = (state_30780[(7)]);
var inst_30750__$1 = (state_30780[(2)]);
var inst_30760 = (inst_30750__$1 == null);
var state_30780__$1 = (function (){var statearr_30788 = state_30780;
(statearr_30788[(7)] = inst_30750__$1);

return statearr_30788;
})();
if(cljs.core.truth_(inst_30760)){
var statearr_30789_32494 = state_30780__$1;
(statearr_30789_32494[(1)] = (5));

} else {
var statearr_30790_32495 = state_30780__$1;
(statearr_30790_32495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (13))){
var state_30780__$1 = state_30780;
var statearr_30791_32496 = state_30780__$1;
(statearr_30791_32496[(2)] = null);

(statearr_30791_32496[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (6))){
var inst_30750 = (state_30780[(7)]);
var state_30780__$1 = state_30780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30780__$1,(11),to,inst_30750);
} else {
if((state_val_30781 === (3))){
var inst_30778 = (state_30780[(2)]);
var state_30780__$1 = state_30780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30780__$1,inst_30778);
} else {
if((state_val_30781 === (12))){
var state_30780__$1 = state_30780;
var statearr_30792_32497 = state_30780__$1;
(statearr_30792_32497[(2)] = null);

(statearr_30792_32497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (2))){
var state_30780__$1 = state_30780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30780__$1,(4),from);
} else {
if((state_val_30781 === (11))){
var inst_30769 = (state_30780[(2)]);
var state_30780__$1 = state_30780;
if(cljs.core.truth_(inst_30769)){
var statearr_30793_32498 = state_30780__$1;
(statearr_30793_32498[(1)] = (12));

} else {
var statearr_30794_32499 = state_30780__$1;
(statearr_30794_32499[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (9))){
var state_30780__$1 = state_30780;
var statearr_30795_32500 = state_30780__$1;
(statearr_30795_32500[(2)] = null);

(statearr_30795_32500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (5))){
var state_30780__$1 = state_30780;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30796_32502 = state_30780__$1;
(statearr_30796_32502[(1)] = (8));

} else {
var statearr_30797_32503 = state_30780__$1;
(statearr_30797_32503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (14))){
var inst_30774 = (state_30780[(2)]);
var state_30780__$1 = state_30780;
var statearr_30798_32504 = state_30780__$1;
(statearr_30798_32504[(2)] = inst_30774);

(statearr_30798_32504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (10))){
var inst_30766 = (state_30780[(2)]);
var state_30780__$1 = state_30780;
var statearr_30799_32505 = state_30780__$1;
(statearr_30799_32505[(2)] = inst_30766);

(statearr_30799_32505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30781 === (8))){
var inst_30763 = cljs.core.async.close_BANG_(to);
var state_30780__$1 = state_30780;
var statearr_30800_32506 = state_30780__$1;
(statearr_30800_32506[(2)] = inst_30763);

(statearr_30800_32506[(1)] = (10));


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
var cljs$core$async$state_machine__30371__auto__ = null;
var cljs$core$async$state_machine__30371__auto____0 = (function (){
var statearr_30801 = [null,null,null,null,null,null,null,null];
(statearr_30801[(0)] = cljs$core$async$state_machine__30371__auto__);

(statearr_30801[(1)] = (1));

return statearr_30801;
});
var cljs$core$async$state_machine__30371__auto____1 = (function (state_30780){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_30780);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e30802){var ex__30374__auto__ = e30802;
var statearr_30803_32507 = state_30780;
(statearr_30803_32507[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_30780[(4)]))){
var statearr_30804_32508 = state_30780;
(statearr_30804_32508[(1)] = cljs.core.first((state_30780[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32509 = state_30780;
state_30780 = G__32509;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$state_machine__30371__auto__ = function(state_30780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30371__auto____1.call(this,state_30780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30371__auto____0;
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30371__auto____1;
return cljs$core$async$state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_30805 = f__30530__auto__();
(statearr_30805[(6)] = c__30529__auto___32491);

return statearr_30805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
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
var process = (function (p__30807){
var vec__30810 = p__30807;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30810,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30810,(1),null);
var job = vec__30810;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30529__auto___32510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_30821){
var state_val_30822 = (state_30821[(1)]);
if((state_val_30822 === (1))){
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30821__$1,(2),res,v);
} else {
if((state_val_30822 === (2))){
var inst_30818 = (state_30821[(2)]);
var inst_30819 = cljs.core.async.close_BANG_(res);
var state_30821__$1 = (function (){var statearr_30826 = state_30821;
(statearr_30826[(7)] = inst_30818);

return statearr_30826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30821__$1,inst_30819);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____0 = (function (){
var statearr_30827 = [null,null,null,null,null,null,null,null];
(statearr_30827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__);

(statearr_30827[(1)] = (1));

return statearr_30827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____1 = (function (state_30821){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_30821);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e30828){var ex__30374__auto__ = e30828;
var statearr_30829_32513 = state_30821;
(statearr_30829_32513[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_30821[(4)]))){
var statearr_30830_32514 = state_30821;
(statearr_30830_32514[(1)] = cljs.core.first((state_30821[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32515 = state_30821;
state_30821 = G__32515;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__ = function(state_30821){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____1.call(this,state_30821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_30831 = f__30530__auto__();
(statearr_30831[(6)] = c__30529__auto___32510);

return statearr_30831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30832){
var vec__30833 = p__30832;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30833,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30833,(1),null);
var job = vec__30833;
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
var n__4706__auto___32516 = n;
var __32517 = (0);
while(true){
if((__32517 < n__4706__auto___32516)){
var G__30836_32518 = type;
var G__30836_32519__$1 = (((G__30836_32518 instanceof cljs.core.Keyword))?G__30836_32518.fqn:null);
switch (G__30836_32519__$1) {
case "compute":
var c__30529__auto___32521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32517,c__30529__auto___32521,G__30836_32518,G__30836_32519__$1,n__4706__auto___32516,jobs,results,process,async){
return (function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = ((function (__32517,c__30529__auto___32521,G__30836_32518,G__30836_32519__$1,n__4706__auto___32516,jobs,results,process,async){
return (function (state_30849){
var state_val_30850 = (state_30849[(1)]);
if((state_val_30850 === (1))){
var state_30849__$1 = state_30849;
var statearr_30851_32523 = state_30849__$1;
(statearr_30851_32523[(2)] = null);

(statearr_30851_32523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (2))){
var state_30849__$1 = state_30849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30849__$1,(4),jobs);
} else {
if((state_val_30850 === (3))){
var inst_30847 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30849__$1,inst_30847);
} else {
if((state_val_30850 === (4))){
var inst_30839 = (state_30849[(2)]);
var inst_30840 = process(inst_30839);
var state_30849__$1 = state_30849;
if(cljs.core.truth_(inst_30840)){
var statearr_30853_32525 = state_30849__$1;
(statearr_30853_32525[(1)] = (5));

} else {
var statearr_30854_32526 = state_30849__$1;
(statearr_30854_32526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (5))){
var state_30849__$1 = state_30849;
var statearr_30855_32527 = state_30849__$1;
(statearr_30855_32527[(2)] = null);

(statearr_30855_32527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (6))){
var state_30849__$1 = state_30849;
var statearr_30856_32528 = state_30849__$1;
(statearr_30856_32528[(2)] = null);

(statearr_30856_32528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (7))){
var inst_30845 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
var statearr_30857_32529 = state_30849__$1;
(statearr_30857_32529[(2)] = inst_30845);

(statearr_30857_32529[(1)] = (3));


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
});})(__32517,c__30529__auto___32521,G__30836_32518,G__30836_32519__$1,n__4706__auto___32516,jobs,results,process,async))
;
return ((function (__32517,switch__30370__auto__,c__30529__auto___32521,G__30836_32518,G__30836_32519__$1,n__4706__auto___32516,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____0 = (function (){
var statearr_30858 = [null,null,null,null,null,null,null];
(statearr_30858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__);

(statearr_30858[(1)] = (1));

return statearr_30858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____1 = (function (state_30849){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_30849);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e30859){var ex__30374__auto__ = e30859;
var statearr_30860_32530 = state_30849;
(statearr_30860_32530[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_30849[(4)]))){
var statearr_30861_32531 = state_30849;
(statearr_30861_32531[(1)] = cljs.core.first((state_30849[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32533 = state_30849;
state_30849 = G__32533;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__ = function(state_30849){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____1.call(this,state_30849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__;
})()
;})(__32517,switch__30370__auto__,c__30529__auto___32521,G__30836_32518,G__30836_32519__$1,n__4706__auto___32516,jobs,results,process,async))
})();
var state__30531__auto__ = (function (){var statearr_30862 = f__30530__auto__();
(statearr_30862[(6)] = c__30529__auto___32521);

return statearr_30862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
});})(__32517,c__30529__auto___32521,G__30836_32518,G__30836_32519__$1,n__4706__auto___32516,jobs,results,process,async))
);


break;
case "async":
var c__30529__auto___32534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32517,c__30529__auto___32534,G__30836_32518,G__30836_32519__$1,n__4706__auto___32516,jobs,results,process,async){
return (function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = ((function (__32517,c__30529__auto___32534,G__30836_32518,G__30836_32519__$1,n__4706__auto___32516,jobs,results,process,async){
return (function (state_30875){
var state_val_30876 = (state_30875[(1)]);
if((state_val_30876 === (1))){
var state_30875__$1 = state_30875;
var statearr_30883_32536 = state_30875__$1;
(statearr_30883_32536[(2)] = null);

(statearr_30883_32536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (2))){
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30875__$1,(4),jobs);
} else {
if((state_val_30876 === (3))){
var inst_30873 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30875__$1,inst_30873);
} else {
if((state_val_30876 === (4))){
var inst_30865 = (state_30875[(2)]);
var inst_30866 = async(inst_30865);
var state_30875__$1 = state_30875;
if(cljs.core.truth_(inst_30866)){
var statearr_30892_32537 = state_30875__$1;
(statearr_30892_32537[(1)] = (5));

} else {
var statearr_30895_32538 = state_30875__$1;
(statearr_30895_32538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (5))){
var state_30875__$1 = state_30875;
var statearr_30898_32539 = state_30875__$1;
(statearr_30898_32539[(2)] = null);

(statearr_30898_32539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (6))){
var state_30875__$1 = state_30875;
var statearr_30900_32540 = state_30875__$1;
(statearr_30900_32540[(2)] = null);

(statearr_30900_32540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (7))){
var inst_30871 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30903_32541 = state_30875__$1;
(statearr_30903_32541[(2)] = inst_30871);

(statearr_30903_32541[(1)] = (3));


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
});})(__32517,c__30529__auto___32534,G__30836_32518,G__30836_32519__$1,n__4706__auto___32516,jobs,results,process,async))
;
return ((function (__32517,switch__30370__auto__,c__30529__auto___32534,G__30836_32518,G__30836_32519__$1,n__4706__auto___32516,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____0 = (function (){
var statearr_30923 = [null,null,null,null,null,null,null];
(statearr_30923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__);

(statearr_30923[(1)] = (1));

return statearr_30923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____1 = (function (state_30875){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_30875);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e30924){var ex__30374__auto__ = e30924;
var statearr_30925_32542 = state_30875;
(statearr_30925_32542[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_30875[(4)]))){
var statearr_30926_32543 = state_30875;
(statearr_30926_32543[(1)] = cljs.core.first((state_30875[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32544 = state_30875;
state_30875 = G__32544;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__ = function(state_30875){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____1.call(this,state_30875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__;
})()
;})(__32517,switch__30370__auto__,c__30529__auto___32534,G__30836_32518,G__30836_32519__$1,n__4706__auto___32516,jobs,results,process,async))
})();
var state__30531__auto__ = (function (){var statearr_30930 = f__30530__auto__();
(statearr_30930[(6)] = c__30529__auto___32534);

return statearr_30930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
});})(__32517,c__30529__auto___32534,G__30836_32518,G__30836_32519__$1,n__4706__auto___32516,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30836_32519__$1)].join('')));

}

var G__32545 = (__32517 + (1));
__32517 = G__32545;
continue;
} else {
}
break;
}

var c__30529__auto___32546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_30979){
var state_val_30980 = (state_30979[(1)]);
if((state_val_30980 === (7))){
var inst_30974 = (state_30979[(2)]);
var state_30979__$1 = state_30979;
var statearr_31003_32547 = state_30979__$1;
(statearr_31003_32547[(2)] = inst_30974);

(statearr_31003_32547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30980 === (1))){
var state_30979__$1 = state_30979;
var statearr_31006_32548 = state_30979__$1;
(statearr_31006_32548[(2)] = null);

(statearr_31006_32548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30980 === (4))){
var inst_30933 = (state_30979[(7)]);
var inst_30933__$1 = (state_30979[(2)]);
var inst_30934 = (inst_30933__$1 == null);
var state_30979__$1 = (function (){var statearr_31012 = state_30979;
(statearr_31012[(7)] = inst_30933__$1);

return statearr_31012;
})();
if(cljs.core.truth_(inst_30934)){
var statearr_31014_32549 = state_30979__$1;
(statearr_31014_32549[(1)] = (5));

} else {
var statearr_31017_32550 = state_30979__$1;
(statearr_31017_32550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30980 === (6))){
var inst_30933 = (state_30979[(7)]);
var inst_30961 = (state_30979[(8)]);
var inst_30961__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30965 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30966 = [inst_30933,inst_30961__$1];
var inst_30967 = (new cljs.core.PersistentVector(null,2,(5),inst_30965,inst_30966,null));
var state_30979__$1 = (function (){var statearr_31022 = state_30979;
(statearr_31022[(8)] = inst_30961__$1);

return statearr_31022;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30979__$1,(8),jobs,inst_30967);
} else {
if((state_val_30980 === (3))){
var inst_30976 = (state_30979[(2)]);
var state_30979__$1 = state_30979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30979__$1,inst_30976);
} else {
if((state_val_30980 === (2))){
var state_30979__$1 = state_30979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30979__$1,(4),from);
} else {
if((state_val_30980 === (9))){
var inst_30971 = (state_30979[(2)]);
var state_30979__$1 = (function (){var statearr_31050 = state_30979;
(statearr_31050[(9)] = inst_30971);

return statearr_31050;
})();
var statearr_31052_32551 = state_30979__$1;
(statearr_31052_32551[(2)] = null);

(statearr_31052_32551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30980 === (5))){
var inst_30936 = cljs.core.async.close_BANG_(jobs);
var state_30979__$1 = state_30979;
var statearr_31056_32552 = state_30979__$1;
(statearr_31056_32552[(2)] = inst_30936);

(statearr_31056_32552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30980 === (8))){
var inst_30961 = (state_30979[(8)]);
var inst_30969 = (state_30979[(2)]);
var state_30979__$1 = (function (){var statearr_31059 = state_30979;
(statearr_31059[(10)] = inst_30969);

return statearr_31059;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30979__$1,(9),results,inst_30961);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____0 = (function (){
var statearr_31064 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__);

(statearr_31064[(1)] = (1));

return statearr_31064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____1 = (function (state_30979){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_30979);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e31069){var ex__30374__auto__ = e31069;
var statearr_31070_32553 = state_30979;
(statearr_31070_32553[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_30979[(4)]))){
var statearr_31073_32554 = state_30979;
(statearr_31073_32554[(1)] = cljs.core.first((state_30979[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32555 = state_30979;
state_30979 = G__32555;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__ = function(state_30979){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____1.call(this,state_30979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31081 = f__30530__auto__();
(statearr_31081[(6)] = c__30529__auto___32546);

return statearr_31081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


var c__30529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_31131){
var state_val_31132 = (state_31131[(1)]);
if((state_val_31132 === (7))){
var inst_31123 = (state_31131[(2)]);
var state_31131__$1 = state_31131;
var statearr_31142_32556 = state_31131__$1;
(statearr_31142_32556[(2)] = inst_31123);

(statearr_31142_32556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (20))){
var state_31131__$1 = state_31131;
var statearr_31145_32557 = state_31131__$1;
(statearr_31145_32557[(2)] = null);

(statearr_31145_32557[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (1))){
var state_31131__$1 = state_31131;
var statearr_31146_32558 = state_31131__$1;
(statearr_31146_32558[(2)] = null);

(statearr_31146_32558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (4))){
var inst_31090 = (state_31131[(7)]);
var inst_31090__$1 = (state_31131[(2)]);
var inst_31091 = (inst_31090__$1 == null);
var state_31131__$1 = (function (){var statearr_31147 = state_31131;
(statearr_31147[(7)] = inst_31090__$1);

return statearr_31147;
})();
if(cljs.core.truth_(inst_31091)){
var statearr_31149_32559 = state_31131__$1;
(statearr_31149_32559[(1)] = (5));

} else {
var statearr_31151_32560 = state_31131__$1;
(statearr_31151_32560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (15))){
var inst_31103 = (state_31131[(8)]);
var state_31131__$1 = state_31131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31131__$1,(18),to,inst_31103);
} else {
if((state_val_31132 === (21))){
var inst_31118 = (state_31131[(2)]);
var state_31131__$1 = state_31131;
var statearr_31159_32561 = state_31131__$1;
(statearr_31159_32561[(2)] = inst_31118);

(statearr_31159_32561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (13))){
var inst_31120 = (state_31131[(2)]);
var state_31131__$1 = (function (){var statearr_31162 = state_31131;
(statearr_31162[(9)] = inst_31120);

return statearr_31162;
})();
var statearr_31163_32562 = state_31131__$1;
(statearr_31163_32562[(2)] = null);

(statearr_31163_32562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (6))){
var inst_31090 = (state_31131[(7)]);
var state_31131__$1 = state_31131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31131__$1,(11),inst_31090);
} else {
if((state_val_31132 === (17))){
var inst_31113 = (state_31131[(2)]);
var state_31131__$1 = state_31131;
if(cljs.core.truth_(inst_31113)){
var statearr_31165_32563 = state_31131__$1;
(statearr_31165_32563[(1)] = (19));

} else {
var statearr_31166_32564 = state_31131__$1;
(statearr_31166_32564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (3))){
var inst_31125 = (state_31131[(2)]);
var state_31131__$1 = state_31131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31131__$1,inst_31125);
} else {
if((state_val_31132 === (12))){
var inst_31100 = (state_31131[(10)]);
var state_31131__$1 = state_31131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31131__$1,(14),inst_31100);
} else {
if((state_val_31132 === (2))){
var state_31131__$1 = state_31131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31131__$1,(4),results);
} else {
if((state_val_31132 === (19))){
var state_31131__$1 = state_31131;
var statearr_31167_32565 = state_31131__$1;
(statearr_31167_32565[(2)] = null);

(statearr_31167_32565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (11))){
var inst_31100 = (state_31131[(2)]);
var state_31131__$1 = (function (){var statearr_31168 = state_31131;
(statearr_31168[(10)] = inst_31100);

return statearr_31168;
})();
var statearr_31169_32566 = state_31131__$1;
(statearr_31169_32566[(2)] = null);

(statearr_31169_32566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (9))){
var state_31131__$1 = state_31131;
var statearr_31170_32567 = state_31131__$1;
(statearr_31170_32567[(2)] = null);

(statearr_31170_32567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (5))){
var state_31131__$1 = state_31131;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31171_32568 = state_31131__$1;
(statearr_31171_32568[(1)] = (8));

} else {
var statearr_31172_32569 = state_31131__$1;
(statearr_31172_32569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (14))){
var inst_31107 = (state_31131[(11)]);
var inst_31103 = (state_31131[(8)]);
var inst_31103__$1 = (state_31131[(2)]);
var inst_31106 = (inst_31103__$1 == null);
var inst_31107__$1 = cljs.core.not(inst_31106);
var state_31131__$1 = (function (){var statearr_31173 = state_31131;
(statearr_31173[(11)] = inst_31107__$1);

(statearr_31173[(8)] = inst_31103__$1);

return statearr_31173;
})();
if(inst_31107__$1){
var statearr_31174_32570 = state_31131__$1;
(statearr_31174_32570[(1)] = (15));

} else {
var statearr_31175_32572 = state_31131__$1;
(statearr_31175_32572[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (16))){
var inst_31107 = (state_31131[(11)]);
var state_31131__$1 = state_31131;
var statearr_31177_32573 = state_31131__$1;
(statearr_31177_32573[(2)] = inst_31107);

(statearr_31177_32573[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (10))){
var inst_31097 = (state_31131[(2)]);
var state_31131__$1 = state_31131;
var statearr_31178_32574 = state_31131__$1;
(statearr_31178_32574[(2)] = inst_31097);

(statearr_31178_32574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (18))){
var inst_31110 = (state_31131[(2)]);
var state_31131__$1 = state_31131;
var statearr_31179_32576 = state_31131__$1;
(statearr_31179_32576[(2)] = inst_31110);

(statearr_31179_32576[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (8))){
var inst_31094 = cljs.core.async.close_BANG_(to);
var state_31131__$1 = state_31131;
var statearr_31181_32577 = state_31131__$1;
(statearr_31181_32577[(2)] = inst_31094);

(statearr_31181_32577[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____0 = (function (){
var statearr_31182 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31182[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__);

(statearr_31182[(1)] = (1));

return statearr_31182;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____1 = (function (state_31131){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_31131);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e31187){var ex__30374__auto__ = e31187;
var statearr_31192_32578 = state_31131;
(statearr_31192_32578[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_31131[(4)]))){
var statearr_31197_32579 = state_31131;
(statearr_31197_32579[(1)] = cljs.core.first((state_31131[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32580 = state_31131;
state_31131 = G__32580;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__ = function(state_31131){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____1.call(this,state_31131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30371__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31198 = f__30530__auto__();
(statearr_31198[(6)] = c__30529__auto__);

return statearr_31198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));

return c__30529__auto__;
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
var G__31200 = arguments.length;
switch (G__31200) {
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
var G__31202 = arguments.length;
switch (G__31202) {
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
var G__31204 = arguments.length;
switch (G__31204) {
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
var c__30529__auto___32586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_31230){
var state_val_31231 = (state_31230[(1)]);
if((state_val_31231 === (7))){
var inst_31226 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31232_32587 = state_31230__$1;
(statearr_31232_32587[(2)] = inst_31226);

(statearr_31232_32587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (1))){
var state_31230__$1 = state_31230;
var statearr_31233_32588 = state_31230__$1;
(statearr_31233_32588[(2)] = null);

(statearr_31233_32588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (4))){
var inst_31207 = (state_31230[(7)]);
var inst_31207__$1 = (state_31230[(2)]);
var inst_31208 = (inst_31207__$1 == null);
var state_31230__$1 = (function (){var statearr_31234 = state_31230;
(statearr_31234[(7)] = inst_31207__$1);

return statearr_31234;
})();
if(cljs.core.truth_(inst_31208)){
var statearr_31235_32589 = state_31230__$1;
(statearr_31235_32589[(1)] = (5));

} else {
var statearr_31236_32590 = state_31230__$1;
(statearr_31236_32590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (13))){
var state_31230__$1 = state_31230;
var statearr_31237_32591 = state_31230__$1;
(statearr_31237_32591[(2)] = null);

(statearr_31237_32591[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (6))){
var inst_31207 = (state_31230[(7)]);
var inst_31213 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31207) : p.call(null,inst_31207));
var state_31230__$1 = state_31230;
if(cljs.core.truth_(inst_31213)){
var statearr_31238_32592 = state_31230__$1;
(statearr_31238_32592[(1)] = (9));

} else {
var statearr_31239_32593 = state_31230__$1;
(statearr_31239_32593[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (3))){
var inst_31228 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31230__$1,inst_31228);
} else {
if((state_val_31231 === (12))){
var state_31230__$1 = state_31230;
var statearr_31240_32594 = state_31230__$1;
(statearr_31240_32594[(2)] = null);

(statearr_31240_32594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (2))){
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31230__$1,(4),ch);
} else {
if((state_val_31231 === (11))){
var inst_31207 = (state_31230[(7)]);
var inst_31217 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31230__$1,(8),inst_31217,inst_31207);
} else {
if((state_val_31231 === (9))){
var state_31230__$1 = state_31230;
var statearr_31241_32595 = state_31230__$1;
(statearr_31241_32595[(2)] = tc);

(statearr_31241_32595[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (5))){
var inst_31210 = cljs.core.async.close_BANG_(tc);
var inst_31211 = cljs.core.async.close_BANG_(fc);
var state_31230__$1 = (function (){var statearr_31242 = state_31230;
(statearr_31242[(8)] = inst_31210);

return statearr_31242;
})();
var statearr_31243_32596 = state_31230__$1;
(statearr_31243_32596[(2)] = inst_31211);

(statearr_31243_32596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (14))){
var inst_31224 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31244_32597 = state_31230__$1;
(statearr_31244_32597[(2)] = inst_31224);

(statearr_31244_32597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (10))){
var state_31230__$1 = state_31230;
var statearr_31245_32598 = state_31230__$1;
(statearr_31245_32598[(2)] = fc);

(statearr_31245_32598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (8))){
var inst_31219 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
if(cljs.core.truth_(inst_31219)){
var statearr_31246_32599 = state_31230__$1;
(statearr_31246_32599[(1)] = (12));

} else {
var statearr_31247_32600 = state_31230__$1;
(statearr_31247_32600[(1)] = (13));

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
var cljs$core$async$state_machine__30371__auto__ = null;
var cljs$core$async$state_machine__30371__auto____0 = (function (){
var statearr_31248 = [null,null,null,null,null,null,null,null,null];
(statearr_31248[(0)] = cljs$core$async$state_machine__30371__auto__);

(statearr_31248[(1)] = (1));

return statearr_31248;
});
var cljs$core$async$state_machine__30371__auto____1 = (function (state_31230){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_31230);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e31249){var ex__30374__auto__ = e31249;
var statearr_31250_32601 = state_31230;
(statearr_31250_32601[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_31230[(4)]))){
var statearr_31251_32602 = state_31230;
(statearr_31251_32602[(1)] = cljs.core.first((state_31230[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32603 = state_31230;
state_31230 = G__32603;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$state_machine__30371__auto__ = function(state_31230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30371__auto____1.call(this,state_31230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30371__auto____0;
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30371__auto____1;
return cljs$core$async$state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31252 = f__30530__auto__();
(statearr_31252[(6)] = c__30529__auto___32586);

return statearr_31252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
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
var c__30529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_31274){
var state_val_31275 = (state_31274[(1)]);
if((state_val_31275 === (7))){
var inst_31270 = (state_31274[(2)]);
var state_31274__$1 = state_31274;
var statearr_31276_32604 = state_31274__$1;
(statearr_31276_32604[(2)] = inst_31270);

(statearr_31276_32604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31275 === (1))){
var inst_31253 = init;
var inst_31254 = inst_31253;
var state_31274__$1 = (function (){var statearr_31277 = state_31274;
(statearr_31277[(7)] = inst_31254);

return statearr_31277;
})();
var statearr_31278_32605 = state_31274__$1;
(statearr_31278_32605[(2)] = null);

(statearr_31278_32605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31275 === (4))){
var inst_31257 = (state_31274[(8)]);
var inst_31257__$1 = (state_31274[(2)]);
var inst_31258 = (inst_31257__$1 == null);
var state_31274__$1 = (function (){var statearr_31279 = state_31274;
(statearr_31279[(8)] = inst_31257__$1);

return statearr_31279;
})();
if(cljs.core.truth_(inst_31258)){
var statearr_31280_32606 = state_31274__$1;
(statearr_31280_32606[(1)] = (5));

} else {
var statearr_31281_32607 = state_31274__$1;
(statearr_31281_32607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31275 === (6))){
var inst_31254 = (state_31274[(7)]);
var inst_31257 = (state_31274[(8)]);
var inst_31261 = (state_31274[(9)]);
var inst_31261__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31254,inst_31257) : f.call(null,inst_31254,inst_31257));
var inst_31262 = cljs.core.reduced_QMARK_(inst_31261__$1);
var state_31274__$1 = (function (){var statearr_31282 = state_31274;
(statearr_31282[(9)] = inst_31261__$1);

return statearr_31282;
})();
if(inst_31262){
var statearr_31283_32608 = state_31274__$1;
(statearr_31283_32608[(1)] = (8));

} else {
var statearr_31284_32609 = state_31274__$1;
(statearr_31284_32609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31275 === (3))){
var inst_31272 = (state_31274[(2)]);
var state_31274__$1 = state_31274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31274__$1,inst_31272);
} else {
if((state_val_31275 === (2))){
var state_31274__$1 = state_31274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31274__$1,(4),ch);
} else {
if((state_val_31275 === (9))){
var inst_31261 = (state_31274[(9)]);
var inst_31254 = inst_31261;
var state_31274__$1 = (function (){var statearr_31285 = state_31274;
(statearr_31285[(7)] = inst_31254);

return statearr_31285;
})();
var statearr_31286_32610 = state_31274__$1;
(statearr_31286_32610[(2)] = null);

(statearr_31286_32610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31275 === (5))){
var inst_31254 = (state_31274[(7)]);
var state_31274__$1 = state_31274;
var statearr_31287_32611 = state_31274__$1;
(statearr_31287_32611[(2)] = inst_31254);

(statearr_31287_32611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31275 === (10))){
var inst_31268 = (state_31274[(2)]);
var state_31274__$1 = state_31274;
var statearr_31288_32612 = state_31274__$1;
(statearr_31288_32612[(2)] = inst_31268);

(statearr_31288_32612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31275 === (8))){
var inst_31261 = (state_31274[(9)]);
var inst_31264 = cljs.core.deref(inst_31261);
var state_31274__$1 = state_31274;
var statearr_31289_32613 = state_31274__$1;
(statearr_31289_32613[(2)] = inst_31264);

(statearr_31289_32613[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30371__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30371__auto____0 = (function (){
var statearr_31290 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31290[(0)] = cljs$core$async$reduce_$_state_machine__30371__auto__);

(statearr_31290[(1)] = (1));

return statearr_31290;
});
var cljs$core$async$reduce_$_state_machine__30371__auto____1 = (function (state_31274){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_31274);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e31291){var ex__30374__auto__ = e31291;
var statearr_31292_32614 = state_31274;
(statearr_31292_32614[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_31274[(4)]))){
var statearr_31293_32615 = state_31274;
(statearr_31293_32615[(1)] = cljs.core.first((state_31274[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32616 = state_31274;
state_31274 = G__32616;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30371__auto__ = function(state_31274){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30371__auto____1.call(this,state_31274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30371__auto____0;
cljs$core$async$reduce_$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30371__auto____1;
return cljs$core$async$reduce_$_state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31294 = f__30530__auto__();
(statearr_31294[(6)] = c__30529__auto__);

return statearr_31294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));

return c__30529__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_31300){
var state_val_31301 = (state_31300[(1)]);
if((state_val_31301 === (1))){
var inst_31295 = cljs.core.async.reduce(f__$1,init,ch);
var state_31300__$1 = state_31300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31300__$1,(2),inst_31295);
} else {
if((state_val_31301 === (2))){
var inst_31297 = (state_31300[(2)]);
var inst_31298 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31297) : f__$1.call(null,inst_31297));
var state_31300__$1 = state_31300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31300__$1,inst_31298);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30371__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30371__auto____0 = (function (){
var statearr_31302 = [null,null,null,null,null,null,null];
(statearr_31302[(0)] = cljs$core$async$transduce_$_state_machine__30371__auto__);

(statearr_31302[(1)] = (1));

return statearr_31302;
});
var cljs$core$async$transduce_$_state_machine__30371__auto____1 = (function (state_31300){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_31300);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e31303){var ex__30374__auto__ = e31303;
var statearr_31304_32617 = state_31300;
(statearr_31304_32617[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_31300[(4)]))){
var statearr_31305_32618 = state_31300;
(statearr_31305_32618[(1)] = cljs.core.first((state_31300[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32619 = state_31300;
state_31300 = G__32619;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30371__auto__ = function(state_31300){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30371__auto____1.call(this,state_31300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30371__auto____0;
cljs$core$async$transduce_$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30371__auto____1;
return cljs$core$async$transduce_$_state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31306 = f__30530__auto__();
(statearr_31306[(6)] = c__30529__auto__);

return statearr_31306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));

return c__30529__auto__;
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
var G__31308 = arguments.length;
switch (G__31308) {
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
var c__30529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_31333){
var state_val_31334 = (state_31333[(1)]);
if((state_val_31334 === (7))){
var inst_31315 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31335_32623 = state_31333__$1;
(statearr_31335_32623[(2)] = inst_31315);

(statearr_31335_32623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (1))){
var inst_31309 = cljs.core.seq(coll);
var inst_31310 = inst_31309;
var state_31333__$1 = (function (){var statearr_31336 = state_31333;
(statearr_31336[(7)] = inst_31310);

return statearr_31336;
})();
var statearr_31337_32624 = state_31333__$1;
(statearr_31337_32624[(2)] = null);

(statearr_31337_32624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (4))){
var inst_31310 = (state_31333[(7)]);
var inst_31313 = cljs.core.first(inst_31310);
var state_31333__$1 = state_31333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31333__$1,(7),ch,inst_31313);
} else {
if((state_val_31334 === (13))){
var inst_31327 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31338_32625 = state_31333__$1;
(statearr_31338_32625[(2)] = inst_31327);

(statearr_31338_32625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (6))){
var inst_31318 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
if(cljs.core.truth_(inst_31318)){
var statearr_31339_32626 = state_31333__$1;
(statearr_31339_32626[(1)] = (8));

} else {
var statearr_31340_32627 = state_31333__$1;
(statearr_31340_32627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (3))){
var inst_31331 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31333__$1,inst_31331);
} else {
if((state_val_31334 === (12))){
var state_31333__$1 = state_31333;
var statearr_31341_32628 = state_31333__$1;
(statearr_31341_32628[(2)] = null);

(statearr_31341_32628[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (2))){
var inst_31310 = (state_31333[(7)]);
var state_31333__$1 = state_31333;
if(cljs.core.truth_(inst_31310)){
var statearr_31342_32629 = state_31333__$1;
(statearr_31342_32629[(1)] = (4));

} else {
var statearr_31343_32630 = state_31333__$1;
(statearr_31343_32630[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (11))){
var inst_31324 = cljs.core.async.close_BANG_(ch);
var state_31333__$1 = state_31333;
var statearr_31344_32631 = state_31333__$1;
(statearr_31344_32631[(2)] = inst_31324);

(statearr_31344_32631[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (9))){
var state_31333__$1 = state_31333;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31345_32632 = state_31333__$1;
(statearr_31345_32632[(1)] = (11));

} else {
var statearr_31346_32633 = state_31333__$1;
(statearr_31346_32633[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (5))){
var inst_31310 = (state_31333[(7)]);
var state_31333__$1 = state_31333;
var statearr_31347_32634 = state_31333__$1;
(statearr_31347_32634[(2)] = inst_31310);

(statearr_31347_32634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (10))){
var inst_31329 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31348_32636 = state_31333__$1;
(statearr_31348_32636[(2)] = inst_31329);

(statearr_31348_32636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (8))){
var inst_31310 = (state_31333[(7)]);
var inst_31320 = cljs.core.next(inst_31310);
var inst_31310__$1 = inst_31320;
var state_31333__$1 = (function (){var statearr_31349 = state_31333;
(statearr_31349[(7)] = inst_31310__$1);

return statearr_31349;
})();
var statearr_31350_32637 = state_31333__$1;
(statearr_31350_32637[(2)] = null);

(statearr_31350_32637[(1)] = (2));


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
var cljs$core$async$state_machine__30371__auto__ = null;
var cljs$core$async$state_machine__30371__auto____0 = (function (){
var statearr_31351 = [null,null,null,null,null,null,null,null];
(statearr_31351[(0)] = cljs$core$async$state_machine__30371__auto__);

(statearr_31351[(1)] = (1));

return statearr_31351;
});
var cljs$core$async$state_machine__30371__auto____1 = (function (state_31333){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_31333);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e31352){var ex__30374__auto__ = e31352;
var statearr_31353_32638 = state_31333;
(statearr_31353_32638[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_31333[(4)]))){
var statearr_31354_32639 = state_31333;
(statearr_31354_32639[(1)] = cljs.core.first((state_31333[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32640 = state_31333;
state_31333 = G__32640;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$state_machine__30371__auto__ = function(state_31333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30371__auto____1.call(this,state_31333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30371__auto____0;
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30371__auto____1;
return cljs$core$async$state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31355 = f__30530__auto__();
(statearr_31355[(6)] = c__30529__auto__);

return statearr_31355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));

return c__30529__auto__;
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
var G__31357 = arguments.length;
switch (G__31357) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_32646 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_32646(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32647 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_32647(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32648 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_32648(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32649 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_32649(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31358 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31358 = (function (ch,cs,meta31359){
this.ch = ch;
this.cs = cs;
this.meta31359 = meta31359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31360,meta31359__$1){
var self__ = this;
var _31360__$1 = this;
return (new cljs.core.async.t_cljs$core$async31358(self__.ch,self__.cs,meta31359__$1));
}));

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31360){
var self__ = this;
var _31360__$1 = this;
return self__.meta31359;
}));

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31359","meta31359",1291521572,null)], null);
}));

(cljs.core.async.t_cljs$core$async31358.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31358");

(cljs.core.async.t_cljs$core$async31358.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31358");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31358.
 */
cljs.core.async.__GT_t_cljs$core$async31358 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31358(ch__$1,cs__$1,meta31359){
return (new cljs.core.async.t_cljs$core$async31358(ch__$1,cs__$1,meta31359));
});

}

return (new cljs.core.async.t_cljs$core$async31358(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30529__auto___32650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_31493){
var state_val_31494 = (state_31493[(1)]);
if((state_val_31494 === (7))){
var inst_31489 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31495_32651 = state_31493__$1;
(statearr_31495_32651[(2)] = inst_31489);

(statearr_31495_32651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (20))){
var inst_31394 = (state_31493[(7)]);
var inst_31406 = cljs.core.first(inst_31394);
var inst_31407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31406,(0),null);
var inst_31408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31406,(1),null);
var state_31493__$1 = (function (){var statearr_31496 = state_31493;
(statearr_31496[(8)] = inst_31407);

return statearr_31496;
})();
if(cljs.core.truth_(inst_31408)){
var statearr_31497_32652 = state_31493__$1;
(statearr_31497_32652[(1)] = (22));

} else {
var statearr_31498_32653 = state_31493__$1;
(statearr_31498_32653[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (27))){
var inst_31438 = (state_31493[(9)]);
var inst_31363 = (state_31493[(10)]);
var inst_31443 = (state_31493[(11)]);
var inst_31436 = (state_31493[(12)]);
var inst_31443__$1 = cljs.core._nth(inst_31436,inst_31438);
var inst_31444 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31443__$1,inst_31363,done);
var state_31493__$1 = (function (){var statearr_31499 = state_31493;
(statearr_31499[(11)] = inst_31443__$1);

return statearr_31499;
})();
if(cljs.core.truth_(inst_31444)){
var statearr_31500_32656 = state_31493__$1;
(statearr_31500_32656[(1)] = (30));

} else {
var statearr_31501_32657 = state_31493__$1;
(statearr_31501_32657[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (1))){
var state_31493__$1 = state_31493;
var statearr_31502_32658 = state_31493__$1;
(statearr_31502_32658[(2)] = null);

(statearr_31502_32658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (24))){
var inst_31394 = (state_31493[(7)]);
var inst_31413 = (state_31493[(2)]);
var inst_31414 = cljs.core.next(inst_31394);
var inst_31372 = inst_31414;
var inst_31373 = null;
var inst_31374 = (0);
var inst_31375 = (0);
var state_31493__$1 = (function (){var statearr_31503 = state_31493;
(statearr_31503[(13)] = inst_31373);

(statearr_31503[(14)] = inst_31375);

(statearr_31503[(15)] = inst_31372);

(statearr_31503[(16)] = inst_31413);

(statearr_31503[(17)] = inst_31374);

return statearr_31503;
})();
var statearr_31504_32659 = state_31493__$1;
(statearr_31504_32659[(2)] = null);

(statearr_31504_32659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (39))){
var state_31493__$1 = state_31493;
var statearr_31508_32660 = state_31493__$1;
(statearr_31508_32660[(2)] = null);

(statearr_31508_32660[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (4))){
var inst_31363 = (state_31493[(10)]);
var inst_31363__$1 = (state_31493[(2)]);
var inst_31364 = (inst_31363__$1 == null);
var state_31493__$1 = (function (){var statearr_31509 = state_31493;
(statearr_31509[(10)] = inst_31363__$1);

return statearr_31509;
})();
if(cljs.core.truth_(inst_31364)){
var statearr_31510_32661 = state_31493__$1;
(statearr_31510_32661[(1)] = (5));

} else {
var statearr_31511_32662 = state_31493__$1;
(statearr_31511_32662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (15))){
var inst_31373 = (state_31493[(13)]);
var inst_31375 = (state_31493[(14)]);
var inst_31372 = (state_31493[(15)]);
var inst_31374 = (state_31493[(17)]);
var inst_31390 = (state_31493[(2)]);
var inst_31391 = (inst_31375 + (1));
var tmp31505 = inst_31373;
var tmp31506 = inst_31372;
var tmp31507 = inst_31374;
var inst_31372__$1 = tmp31506;
var inst_31373__$1 = tmp31505;
var inst_31374__$1 = tmp31507;
var inst_31375__$1 = inst_31391;
var state_31493__$1 = (function (){var statearr_31512 = state_31493;
(statearr_31512[(13)] = inst_31373__$1);

(statearr_31512[(14)] = inst_31375__$1);

(statearr_31512[(18)] = inst_31390);

(statearr_31512[(15)] = inst_31372__$1);

(statearr_31512[(17)] = inst_31374__$1);

return statearr_31512;
})();
var statearr_31513_32663 = state_31493__$1;
(statearr_31513_32663[(2)] = null);

(statearr_31513_32663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (21))){
var inst_31417 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31517_32664 = state_31493__$1;
(statearr_31517_32664[(2)] = inst_31417);

(statearr_31517_32664[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (31))){
var inst_31443 = (state_31493[(11)]);
var inst_31447 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31443);
var state_31493__$1 = state_31493;
var statearr_31518_32665 = state_31493__$1;
(statearr_31518_32665[(2)] = inst_31447);

(statearr_31518_32665[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (32))){
var inst_31435 = (state_31493[(19)]);
var inst_31437 = (state_31493[(20)]);
var inst_31438 = (state_31493[(9)]);
var inst_31436 = (state_31493[(12)]);
var inst_31449 = (state_31493[(2)]);
var inst_31450 = (inst_31438 + (1));
var tmp31514 = inst_31435;
var tmp31515 = inst_31437;
var tmp31516 = inst_31436;
var inst_31435__$1 = tmp31514;
var inst_31436__$1 = tmp31516;
var inst_31437__$1 = tmp31515;
var inst_31438__$1 = inst_31450;
var state_31493__$1 = (function (){var statearr_31519 = state_31493;
(statearr_31519[(19)] = inst_31435__$1);

(statearr_31519[(20)] = inst_31437__$1);

(statearr_31519[(9)] = inst_31438__$1);

(statearr_31519[(21)] = inst_31449);

(statearr_31519[(12)] = inst_31436__$1);

return statearr_31519;
})();
var statearr_31520_32666 = state_31493__$1;
(statearr_31520_32666[(2)] = null);

(statearr_31520_32666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (40))){
var inst_31462 = (state_31493[(22)]);
var inst_31466 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31462);
var state_31493__$1 = state_31493;
var statearr_31521_32667 = state_31493__$1;
(statearr_31521_32667[(2)] = inst_31466);

(statearr_31521_32667[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (33))){
var inst_31453 = (state_31493[(23)]);
var inst_31455 = cljs.core.chunked_seq_QMARK_(inst_31453);
var state_31493__$1 = state_31493;
if(inst_31455){
var statearr_31522_32672 = state_31493__$1;
(statearr_31522_32672[(1)] = (36));

} else {
var statearr_31523_32673 = state_31493__$1;
(statearr_31523_32673[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (13))){
var inst_31384 = (state_31493[(24)]);
var inst_31387 = cljs.core.async.close_BANG_(inst_31384);
var state_31493__$1 = state_31493;
var statearr_31524_32677 = state_31493__$1;
(statearr_31524_32677[(2)] = inst_31387);

(statearr_31524_32677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (22))){
var inst_31407 = (state_31493[(8)]);
var inst_31410 = cljs.core.async.close_BANG_(inst_31407);
var state_31493__$1 = state_31493;
var statearr_31525_32678 = state_31493__$1;
(statearr_31525_32678[(2)] = inst_31410);

(statearr_31525_32678[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (36))){
var inst_31453 = (state_31493[(23)]);
var inst_31457 = cljs.core.chunk_first(inst_31453);
var inst_31458 = cljs.core.chunk_rest(inst_31453);
var inst_31459 = cljs.core.count(inst_31457);
var inst_31435 = inst_31458;
var inst_31436 = inst_31457;
var inst_31437 = inst_31459;
var inst_31438 = (0);
var state_31493__$1 = (function (){var statearr_31526 = state_31493;
(statearr_31526[(19)] = inst_31435);

(statearr_31526[(20)] = inst_31437);

(statearr_31526[(9)] = inst_31438);

(statearr_31526[(12)] = inst_31436);

return statearr_31526;
})();
var statearr_31527_32679 = state_31493__$1;
(statearr_31527_32679[(2)] = null);

(statearr_31527_32679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (41))){
var inst_31453 = (state_31493[(23)]);
var inst_31468 = (state_31493[(2)]);
var inst_31469 = cljs.core.next(inst_31453);
var inst_31435 = inst_31469;
var inst_31436 = null;
var inst_31437 = (0);
var inst_31438 = (0);
var state_31493__$1 = (function (){var statearr_31528 = state_31493;
(statearr_31528[(19)] = inst_31435);

(statearr_31528[(20)] = inst_31437);

(statearr_31528[(25)] = inst_31468);

(statearr_31528[(9)] = inst_31438);

(statearr_31528[(12)] = inst_31436);

return statearr_31528;
})();
var statearr_31529_32683 = state_31493__$1;
(statearr_31529_32683[(2)] = null);

(statearr_31529_32683[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (43))){
var state_31493__$1 = state_31493;
var statearr_31530_32684 = state_31493__$1;
(statearr_31530_32684[(2)] = null);

(statearr_31530_32684[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (29))){
var inst_31477 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31531_32685 = state_31493__$1;
(statearr_31531_32685[(2)] = inst_31477);

(statearr_31531_32685[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (44))){
var inst_31486 = (state_31493[(2)]);
var state_31493__$1 = (function (){var statearr_31532 = state_31493;
(statearr_31532[(26)] = inst_31486);

return statearr_31532;
})();
var statearr_31533_32686 = state_31493__$1;
(statearr_31533_32686[(2)] = null);

(statearr_31533_32686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (6))){
var inst_31427 = (state_31493[(27)]);
var inst_31426 = cljs.core.deref(cs);
var inst_31427__$1 = cljs.core.keys(inst_31426);
var inst_31428 = cljs.core.count(inst_31427__$1);
var inst_31429 = cljs.core.reset_BANG_(dctr,inst_31428);
var inst_31434 = cljs.core.seq(inst_31427__$1);
var inst_31435 = inst_31434;
var inst_31436 = null;
var inst_31437 = (0);
var inst_31438 = (0);
var state_31493__$1 = (function (){var statearr_31534 = state_31493;
(statearr_31534[(19)] = inst_31435);

(statearr_31534[(20)] = inst_31437);

(statearr_31534[(28)] = inst_31429);

(statearr_31534[(9)] = inst_31438);

(statearr_31534[(27)] = inst_31427__$1);

(statearr_31534[(12)] = inst_31436);

return statearr_31534;
})();
var statearr_31535_32690 = state_31493__$1;
(statearr_31535_32690[(2)] = null);

(statearr_31535_32690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (28))){
var inst_31435 = (state_31493[(19)]);
var inst_31453 = (state_31493[(23)]);
var inst_31453__$1 = cljs.core.seq(inst_31435);
var state_31493__$1 = (function (){var statearr_31536 = state_31493;
(statearr_31536[(23)] = inst_31453__$1);

return statearr_31536;
})();
if(inst_31453__$1){
var statearr_31537_32691 = state_31493__$1;
(statearr_31537_32691[(1)] = (33));

} else {
var statearr_31538_32692 = state_31493__$1;
(statearr_31538_32692[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (25))){
var inst_31437 = (state_31493[(20)]);
var inst_31438 = (state_31493[(9)]);
var inst_31440 = (inst_31438 < inst_31437);
var inst_31441 = inst_31440;
var state_31493__$1 = state_31493;
if(cljs.core.truth_(inst_31441)){
var statearr_31539_32696 = state_31493__$1;
(statearr_31539_32696[(1)] = (27));

} else {
var statearr_31540_32697 = state_31493__$1;
(statearr_31540_32697[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (34))){
var state_31493__$1 = state_31493;
var statearr_31541_32698 = state_31493__$1;
(statearr_31541_32698[(2)] = null);

(statearr_31541_32698[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (17))){
var state_31493__$1 = state_31493;
var statearr_31542_32699 = state_31493__$1;
(statearr_31542_32699[(2)] = null);

(statearr_31542_32699[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (3))){
var inst_31491 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31493__$1,inst_31491);
} else {
if((state_val_31494 === (12))){
var inst_31422 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31543_32700 = state_31493__$1;
(statearr_31543_32700[(2)] = inst_31422);

(statearr_31543_32700[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (2))){
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31493__$1,(4),ch);
} else {
if((state_val_31494 === (23))){
var state_31493__$1 = state_31493;
var statearr_31544_32701 = state_31493__$1;
(statearr_31544_32701[(2)] = null);

(statearr_31544_32701[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (35))){
var inst_31475 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31545_32706 = state_31493__$1;
(statearr_31545_32706[(2)] = inst_31475);

(statearr_31545_32706[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (19))){
var inst_31394 = (state_31493[(7)]);
var inst_31398 = cljs.core.chunk_first(inst_31394);
var inst_31399 = cljs.core.chunk_rest(inst_31394);
var inst_31400 = cljs.core.count(inst_31398);
var inst_31372 = inst_31399;
var inst_31373 = inst_31398;
var inst_31374 = inst_31400;
var inst_31375 = (0);
var state_31493__$1 = (function (){var statearr_31546 = state_31493;
(statearr_31546[(13)] = inst_31373);

(statearr_31546[(14)] = inst_31375);

(statearr_31546[(15)] = inst_31372);

(statearr_31546[(17)] = inst_31374);

return statearr_31546;
})();
var statearr_31547_32710 = state_31493__$1;
(statearr_31547_32710[(2)] = null);

(statearr_31547_32710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (11))){
var inst_31394 = (state_31493[(7)]);
var inst_31372 = (state_31493[(15)]);
var inst_31394__$1 = cljs.core.seq(inst_31372);
var state_31493__$1 = (function (){var statearr_31548 = state_31493;
(statearr_31548[(7)] = inst_31394__$1);

return statearr_31548;
})();
if(inst_31394__$1){
var statearr_31549_32711 = state_31493__$1;
(statearr_31549_32711[(1)] = (16));

} else {
var statearr_31550_32712 = state_31493__$1;
(statearr_31550_32712[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (9))){
var inst_31424 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31551_32713 = state_31493__$1;
(statearr_31551_32713[(2)] = inst_31424);

(statearr_31551_32713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (5))){
var inst_31370 = cljs.core.deref(cs);
var inst_31371 = cljs.core.seq(inst_31370);
var inst_31372 = inst_31371;
var inst_31373 = null;
var inst_31374 = (0);
var inst_31375 = (0);
var state_31493__$1 = (function (){var statearr_31552 = state_31493;
(statearr_31552[(13)] = inst_31373);

(statearr_31552[(14)] = inst_31375);

(statearr_31552[(15)] = inst_31372);

(statearr_31552[(17)] = inst_31374);

return statearr_31552;
})();
var statearr_31553_32717 = state_31493__$1;
(statearr_31553_32717[(2)] = null);

(statearr_31553_32717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (14))){
var state_31493__$1 = state_31493;
var statearr_31554_32718 = state_31493__$1;
(statearr_31554_32718[(2)] = null);

(statearr_31554_32718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (45))){
var inst_31483 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31555_32719 = state_31493__$1;
(statearr_31555_32719[(2)] = inst_31483);

(statearr_31555_32719[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (26))){
var inst_31427 = (state_31493[(27)]);
var inst_31479 = (state_31493[(2)]);
var inst_31480 = cljs.core.seq(inst_31427);
var state_31493__$1 = (function (){var statearr_31556 = state_31493;
(statearr_31556[(29)] = inst_31479);

return statearr_31556;
})();
if(inst_31480){
var statearr_31557_32723 = state_31493__$1;
(statearr_31557_32723[(1)] = (42));

} else {
var statearr_31558_32724 = state_31493__$1;
(statearr_31558_32724[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (16))){
var inst_31394 = (state_31493[(7)]);
var inst_31396 = cljs.core.chunked_seq_QMARK_(inst_31394);
var state_31493__$1 = state_31493;
if(inst_31396){
var statearr_31559_32725 = state_31493__$1;
(statearr_31559_32725[(1)] = (19));

} else {
var statearr_31560_32726 = state_31493__$1;
(statearr_31560_32726[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (38))){
var inst_31472 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31561_32727 = state_31493__$1;
(statearr_31561_32727[(2)] = inst_31472);

(statearr_31561_32727[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (30))){
var state_31493__$1 = state_31493;
var statearr_31562_32728 = state_31493__$1;
(statearr_31562_32728[(2)] = null);

(statearr_31562_32728[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (10))){
var inst_31373 = (state_31493[(13)]);
var inst_31375 = (state_31493[(14)]);
var inst_31383 = cljs.core._nth(inst_31373,inst_31375);
var inst_31384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31383,(0),null);
var inst_31385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31383,(1),null);
var state_31493__$1 = (function (){var statearr_31563 = state_31493;
(statearr_31563[(24)] = inst_31384);

return statearr_31563;
})();
if(cljs.core.truth_(inst_31385)){
var statearr_31564_32732 = state_31493__$1;
(statearr_31564_32732[(1)] = (13));

} else {
var statearr_31565_32733 = state_31493__$1;
(statearr_31565_32733[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (18))){
var inst_31420 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31566_32734 = state_31493__$1;
(statearr_31566_32734[(2)] = inst_31420);

(statearr_31566_32734[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (42))){
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31493__$1,(45),dchan);
} else {
if((state_val_31494 === (37))){
var inst_31453 = (state_31493[(23)]);
var inst_31462 = (state_31493[(22)]);
var inst_31363 = (state_31493[(10)]);
var inst_31462__$1 = cljs.core.first(inst_31453);
var inst_31463 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31462__$1,inst_31363,done);
var state_31493__$1 = (function (){var statearr_31567 = state_31493;
(statearr_31567[(22)] = inst_31462__$1);

return statearr_31567;
})();
if(cljs.core.truth_(inst_31463)){
var statearr_31568_32736 = state_31493__$1;
(statearr_31568_32736[(1)] = (39));

} else {
var statearr_31569_32737 = state_31493__$1;
(statearr_31569_32737[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (8))){
var inst_31375 = (state_31493[(14)]);
var inst_31374 = (state_31493[(17)]);
var inst_31377 = (inst_31375 < inst_31374);
var inst_31378 = inst_31377;
var state_31493__$1 = state_31493;
if(cljs.core.truth_(inst_31378)){
var statearr_31570_32738 = state_31493__$1;
(statearr_31570_32738[(1)] = (10));

} else {
var statearr_31571_32739 = state_31493__$1;
(statearr_31571_32739[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30371__auto__ = null;
var cljs$core$async$mult_$_state_machine__30371__auto____0 = (function (){
var statearr_31572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31572[(0)] = cljs$core$async$mult_$_state_machine__30371__auto__);

(statearr_31572[(1)] = (1));

return statearr_31572;
});
var cljs$core$async$mult_$_state_machine__30371__auto____1 = (function (state_31493){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_31493);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e31573){var ex__30374__auto__ = e31573;
var statearr_31574_32740 = state_31493;
(statearr_31574_32740[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_31493[(4)]))){
var statearr_31575_32741 = state_31493;
(statearr_31575_32741[(1)] = cljs.core.first((state_31493[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32742 = state_31493;
state_31493 = G__32742;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30371__auto__ = function(state_31493){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30371__auto____1.call(this,state_31493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30371__auto____0;
cljs$core$async$mult_$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30371__auto____1;
return cljs$core$async$mult_$_state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31576 = f__30530__auto__();
(statearr_31576[(6)] = c__30529__auto___32650);

return statearr_31576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
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

var cljs$core$async$Mix$admix_STAR_$dyn_32744 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_32744(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32745 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_32745(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32746 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32746(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32747 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_32747(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32754 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32754(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___32756 = arguments.length;
var i__4830__auto___32757 = (0);
while(true){
if((i__4830__auto___32757 < len__4829__auto___32756)){
args__4835__auto__.push((arguments[i__4830__auto___32757]));

var G__32758 = (i__4830__auto___32757 + (1));
i__4830__auto___32757 = G__32758;
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
var statearr_31585_32760 = state;
(statearr_31585_32760[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31586_32761 = state;
(statearr_31586_32761[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31587_32762 = state;
(statearr_31587_32762[(2)] = cljs.core.deref(cb));


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
var c__30529__auto___32774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_31658){
var state_val_31659 = (state_31658[(1)]);
if((state_val_31659 === (7))){
var inst_31618 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
if(cljs.core.truth_(inst_31618)){
var statearr_31660_32779 = state_31658__$1;
(statearr_31660_32779[(1)] = (8));

} else {
var statearr_31661_32780 = state_31658__$1;
(statearr_31661_32780[(1)] = (9));

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
var statearr_31663_32787 = state_31658__$1;
(statearr_31663_32787[(2)] = null);

(statearr_31663_32787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (24))){
var inst_31602 = (state_31658[(12)]);
var inst_31599 = inst_31602;
var state_31658__$1 = (function (){var statearr_31664 = state_31658;
(statearr_31664[(8)] = inst_31599);

return statearr_31664;
})();
var statearr_31665_32788 = state_31658__$1;
(statearr_31665_32788[(2)] = null);

(statearr_31665_32788[(1)] = (2));


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
var statearr_31667_32789 = state_31658__$1;
(statearr_31667_32789[(1)] = (5));

} else {
var statearr_31668_32790 = state_31658__$1;
(statearr_31668_32790[(1)] = (6));

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
var statearr_31670_32791 = state_31658__$1;
(statearr_31670_32791[(1)] = (17));

} else {
var statearr_31671_32792 = state_31658__$1;
(statearr_31671_32792[(1)] = (18));

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
var statearr_31673_32793 = state_31658__$1;
(statearr_31673_32793[(2)] = null);

(statearr_31673_32793[(1)] = (2));


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
var statearr_31675_32794 = state_31658__$1;
(statearr_31675_32794[(2)] = null);

(statearr_31675_32794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (22))){
var inst_31652 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
var statearr_31676_32795 = state_31658__$1;
(statearr_31676_32795[(2)] = inst_31652);

(statearr_31676_32795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (6))){
var inst_31612 = (state_31658[(14)]);
var inst_31616 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31612,change);
var state_31658__$1 = state_31658;
var statearr_31677_32796 = state_31658__$1;
(statearr_31677_32796[(2)] = inst_31616);

(statearr_31677_32796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (25))){
var state_31658__$1 = state_31658;
var statearr_31678_32797 = state_31658__$1;
(statearr_31678_32797[(2)] = null);

(statearr_31678_32797[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (17))){
var inst_31612 = (state_31658[(14)]);
var inst_31604 = (state_31658[(18)]);
var inst_31634 = (inst_31604.cljs$core$IFn$_invoke$arity$1 ? inst_31604.cljs$core$IFn$_invoke$arity$1(inst_31612) : inst_31604.call(null,inst_31612));
var inst_31635 = cljs.core.not(inst_31634);
var state_31658__$1 = state_31658;
var statearr_31679_32798 = state_31658__$1;
(statearr_31679_32798[(2)] = inst_31635);

(statearr_31679_32798[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (3))){
var inst_31656 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31658__$1,inst_31656);
} else {
if((state_val_31659 === (12))){
var state_31658__$1 = state_31658;
var statearr_31680_32799 = state_31658__$1;
(statearr_31680_32799[(2)] = null);

(statearr_31680_32799[(1)] = (13));


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
var statearr_31682_32806 = state_31658__$1;
(statearr_31682_32806[(1)] = (24));

} else {
var statearr_31683_32807 = state_31658__$1;
(statearr_31683_32807[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (19))){
var inst_31638 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
var statearr_31684_32808 = state_31658__$1;
(statearr_31684_32808[(2)] = inst_31638);

(statearr_31684_32808[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (11))){
var inst_31612 = (state_31658[(14)]);
var inst_31622 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31612);
var state_31658__$1 = state_31658;
var statearr_31685_32815 = state_31658__$1;
(statearr_31685_32815[(2)] = inst_31622);

(statearr_31685_32815[(1)] = (13));


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
var statearr_31687_32822 = state_31658__$1;
(statearr_31687_32822[(1)] = (14));

} else {
var statearr_31688_32823 = state_31658__$1;
(statearr_31688_32823[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (5))){
var inst_31613 = (state_31658[(13)]);
var state_31658__$1 = state_31658;
var statearr_31689_32824 = state_31658__$1;
(statearr_31689_32824[(2)] = inst_31613);

(statearr_31689_32824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (14))){
var inst_31629 = (state_31658[(19)]);
var state_31658__$1 = state_31658;
var statearr_31690_32825 = state_31658__$1;
(statearr_31690_32825[(2)] = inst_31629);

(statearr_31690_32825[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (26))){
var inst_31648 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
var statearr_31691_32826 = state_31658__$1;
(statearr_31691_32826[(2)] = inst_31648);

(statearr_31691_32826[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (16))){
var inst_31640 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
if(cljs.core.truth_(inst_31640)){
var statearr_31692_32827 = state_31658__$1;
(statearr_31692_32827[(1)] = (20));

} else {
var statearr_31693_32828 = state_31658__$1;
(statearr_31693_32828[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (10))){
var inst_31654 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
var statearr_31694_32829 = state_31658__$1;
(statearr_31694_32829[(2)] = inst_31654);

(statearr_31694_32829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (18))){
var inst_31632 = (state_31658[(15)]);
var state_31658__$1 = state_31658;
var statearr_31695_32830 = state_31658__$1;
(statearr_31695_32830[(2)] = inst_31632);

(statearr_31695_32830[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (8))){
var inst_31611 = (state_31658[(7)]);
var inst_31620 = (inst_31611 == null);
var state_31658__$1 = state_31658;
if(cljs.core.truth_(inst_31620)){
var statearr_31696_32831 = state_31658__$1;
(statearr_31696_32831[(1)] = (11));

} else {
var statearr_31697_32832 = state_31658__$1;
(statearr_31697_32832[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__30371__auto__ = null;
var cljs$core$async$mix_$_state_machine__30371__auto____0 = (function (){
var statearr_31698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31698[(0)] = cljs$core$async$mix_$_state_machine__30371__auto__);

(statearr_31698[(1)] = (1));

return statearr_31698;
});
var cljs$core$async$mix_$_state_machine__30371__auto____1 = (function (state_31658){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_31658);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e31699){var ex__30374__auto__ = e31699;
var statearr_31700_32833 = state_31658;
(statearr_31700_32833[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_31658[(4)]))){
var statearr_31701_32834 = state_31658;
(statearr_31701_32834[(1)] = cljs.core.first((state_31658[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32835 = state_31658;
state_31658 = G__32835;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30371__auto__ = function(state_31658){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30371__auto____1.call(this,state_31658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30371__auto____0;
cljs$core$async$mix_$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30371__auto____1;
return cljs$core$async$mix_$_state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31702 = f__30530__auto__();
(statearr_31702[(6)] = c__30529__auto___32774);

return statearr_31702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_32836 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_32836(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32837 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_32837(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32838 = (function() {
var G__32839 = null;
var G__32839__1 = (function (p){
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
var G__32839__2 = (function (p,v){
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
G__32839 = function(p,v){
switch(arguments.length){
case 1:
return G__32839__1.call(this,p);
case 2:
return G__32839__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32839.cljs$core$IFn$_invoke$arity$1 = G__32839__1;
G__32839.cljs$core$IFn$_invoke$arity$2 = G__32839__2;
return G__32839;
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32838(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32838(p,v);
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
var c__30529__auto___32847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_31782){
var state_val_31783 = (state_31782[(1)]);
if((state_val_31783 === (7))){
var inst_31778 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
var statearr_31784_32849 = state_31782__$1;
(statearr_31784_32849[(2)] = inst_31778);

(statearr_31784_32849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (20))){
var state_31782__$1 = state_31782;
var statearr_31785_32851 = state_31782__$1;
(statearr_31785_32851[(2)] = null);

(statearr_31785_32851[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (1))){
var state_31782__$1 = state_31782;
var statearr_31786_32852 = state_31782__$1;
(statearr_31786_32852[(2)] = null);

(statearr_31786_32852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (24))){
var inst_31761 = (state_31782[(7)]);
var inst_31770 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31761);
var state_31782__$1 = state_31782;
var statearr_31787_32853 = state_31782__$1;
(statearr_31787_32853[(2)] = inst_31770);

(statearr_31787_32853[(1)] = (25));


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
var statearr_31789_32854 = state_31782__$1;
(statearr_31789_32854[(1)] = (5));

} else {
var statearr_31790_32855 = state_31782__$1;
(statearr_31790_32855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (15))){
var inst_31755 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
var statearr_31791_32856 = state_31782__$1;
(statearr_31791_32856[(2)] = inst_31755);

(statearr_31791_32856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (21))){
var inst_31775 = (state_31782[(2)]);
var state_31782__$1 = (function (){var statearr_31792 = state_31782;
(statearr_31792[(9)] = inst_31775);

return statearr_31792;
})();
var statearr_31793_32857 = state_31782__$1;
(statearr_31793_32857[(2)] = null);

(statearr_31793_32857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (13))){
var inst_31737 = (state_31782[(10)]);
var inst_31739 = cljs.core.chunked_seq_QMARK_(inst_31737);
var state_31782__$1 = state_31782;
if(inst_31739){
var statearr_31794_32858 = state_31782__$1;
(statearr_31794_32858[(1)] = (16));

} else {
var statearr_31795_32859 = state_31782__$1;
(statearr_31795_32859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (22))){
var inst_31767 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
if(cljs.core.truth_(inst_31767)){
var statearr_31796_32861 = state_31782__$1;
(statearr_31796_32861[(1)] = (23));

} else {
var statearr_31797_32862 = state_31782__$1;
(statearr_31797_32862[(1)] = (24));

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
var statearr_31799_32864 = state_31782__$1;
(statearr_31799_32864[(1)] = (19));

} else {
var statearr_31800_32865 = state_31782__$1;
(statearr_31800_32865[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (25))){
var inst_31772 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
var statearr_31801_32866 = state_31782__$1;
(statearr_31801_32866[(2)] = inst_31772);

(statearr_31801_32866[(1)] = (21));


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
var statearr_31803_32867 = state_31782__$1;
(statearr_31803_32867[(2)] = null);

(statearr_31803_32867[(1)] = (8));


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
var statearr_31804_32868 = state_31782__$1;
(statearr_31804_32868[(2)] = inst_31757);

(statearr_31804_32868[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (2))){
var state_31782__$1 = state_31782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31782__$1,(4),ch);
} else {
if((state_val_31783 === (23))){
var state_31782__$1 = state_31782;
var statearr_31805_32869 = state_31782__$1;
(statearr_31805_32869[(2)] = null);

(statearr_31805_32869[(1)] = (25));


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
var statearr_31814_32870 = state_31782__$1;
(statearr_31814_32870[(1)] = (13));

} else {
var statearr_31815_32871 = state_31782__$1;
(statearr_31815_32871[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (9))){
var inst_31759 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
var statearr_31816_32872 = state_31782__$1;
(statearr_31816_32872[(2)] = inst_31759);

(statearr_31816_32872[(1)] = (7));


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
var state_31782__$1 = (function (){var statearr_31817 = state_31782;
(statearr_31817[(12)] = inst_31725);

(statearr_31817[(13)] = inst_31723);

(statearr_31817[(15)] = inst_31724);

(statearr_31817[(16)] = inst_31726);

return statearr_31817;
})();
var statearr_31818_32873 = state_31782__$1;
(statearr_31818_32873[(2)] = null);

(statearr_31818_32873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (14))){
var state_31782__$1 = state_31782;
var statearr_31822_32874 = state_31782__$1;
(statearr_31822_32874[(2)] = null);

(statearr_31822_32874[(1)] = (15));


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
var state_31782__$1 = (function (){var statearr_31823 = state_31782;
(statearr_31823[(12)] = inst_31725);

(statearr_31823[(13)] = inst_31723);

(statearr_31823[(15)] = inst_31724);

(statearr_31823[(16)] = inst_31726);

return statearr_31823;
})();
var statearr_31824_32875 = state_31782__$1;
(statearr_31824_32875[(2)] = null);

(statearr_31824_32875[(1)] = (8));


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
var tmp31819 = inst_31725;
var tmp31820 = inst_31723;
var tmp31821 = inst_31724;
var inst_31723__$1 = tmp31820;
var inst_31724__$1 = tmp31821;
var inst_31725__$1 = tmp31819;
var inst_31726__$1 = inst_31734;
var state_31782__$1 = (function (){var statearr_31825 = state_31782;
(statearr_31825[(17)] = inst_31733);

(statearr_31825[(12)] = inst_31725__$1);

(statearr_31825[(13)] = inst_31723__$1);

(statearr_31825[(15)] = inst_31724__$1);

(statearr_31825[(16)] = inst_31726__$1);

return statearr_31825;
})();
var statearr_31826_32876 = state_31782__$1;
(statearr_31826_32876[(2)] = null);

(statearr_31826_32876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (18))){
var inst_31752 = (state_31782[(2)]);
var state_31782__$1 = state_31782;
var statearr_31827_32878 = state_31782__$1;
(statearr_31827_32878[(2)] = inst_31752);

(statearr_31827_32878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31783 === (8))){
var inst_31725 = (state_31782[(12)]);
var inst_31726 = (state_31782[(16)]);
var inst_31728 = (inst_31726 < inst_31725);
var inst_31729 = inst_31728;
var state_31782__$1 = state_31782;
if(cljs.core.truth_(inst_31729)){
var statearr_31828_32880 = state_31782__$1;
(statearr_31828_32880[(1)] = (10));

} else {
var statearr_31829_32881 = state_31782__$1;
(statearr_31829_32881[(1)] = (11));

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
var cljs$core$async$state_machine__30371__auto__ = null;
var cljs$core$async$state_machine__30371__auto____0 = (function (){
var statearr_31830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31830[(0)] = cljs$core$async$state_machine__30371__auto__);

(statearr_31830[(1)] = (1));

return statearr_31830;
});
var cljs$core$async$state_machine__30371__auto____1 = (function (state_31782){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_31782);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e31832){var ex__30374__auto__ = e31832;
var statearr_31833_32882 = state_31782;
(statearr_31833_32882[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_31782[(4)]))){
var statearr_31835_32883 = state_31782;
(statearr_31835_32883[(1)] = cljs.core.first((state_31782[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32884 = state_31782;
state_31782 = G__32884;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$state_machine__30371__auto__ = function(state_31782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30371__auto____1.call(this,state_31782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30371__auto____0;
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30371__auto____1;
return cljs$core$async$state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31836 = f__30530__auto__();
(statearr_31836[(6)] = c__30529__auto___32847);

return statearr_31836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
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
var G__31838 = arguments.length;
switch (G__31838) {
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
var G__31840 = arguments.length;
switch (G__31840) {
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
var G__31842 = arguments.length;
switch (G__31842) {
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
var c__30529__auto___32888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_31885){
var state_val_31886 = (state_31885[(1)]);
if((state_val_31886 === (7))){
var state_31885__$1 = state_31885;
var statearr_31887_32889 = state_31885__$1;
(statearr_31887_32889[(2)] = null);

(statearr_31887_32889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (1))){
var state_31885__$1 = state_31885;
var statearr_31888_32890 = state_31885__$1;
(statearr_31888_32890[(2)] = null);

(statearr_31888_32890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (4))){
var inst_31846 = (state_31885[(7)]);
var inst_31845 = (state_31885[(8)]);
var inst_31848 = (inst_31846 < inst_31845);
var state_31885__$1 = state_31885;
if(cljs.core.truth_(inst_31848)){
var statearr_31889_32891 = state_31885__$1;
(statearr_31889_32891[(1)] = (6));

} else {
var statearr_31890_32892 = state_31885__$1;
(statearr_31890_32892[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (15))){
var inst_31871 = (state_31885[(9)]);
var inst_31876 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31871);
var state_31885__$1 = state_31885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31885__$1,(17),out,inst_31876);
} else {
if((state_val_31886 === (13))){
var inst_31871 = (state_31885[(9)]);
var inst_31871__$1 = (state_31885[(2)]);
var inst_31872 = cljs.core.some(cljs.core.nil_QMARK_,inst_31871__$1);
var state_31885__$1 = (function (){var statearr_31891 = state_31885;
(statearr_31891[(9)] = inst_31871__$1);

return statearr_31891;
})();
if(cljs.core.truth_(inst_31872)){
var statearr_31892_32893 = state_31885__$1;
(statearr_31892_32893[(1)] = (14));

} else {
var statearr_31893_32894 = state_31885__$1;
(statearr_31893_32894[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (6))){
var state_31885__$1 = state_31885;
var statearr_31894_32895 = state_31885__$1;
(statearr_31894_32895[(2)] = null);

(statearr_31894_32895[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (17))){
var inst_31878 = (state_31885[(2)]);
var state_31885__$1 = (function (){var statearr_31899 = state_31885;
(statearr_31899[(10)] = inst_31878);

return statearr_31899;
})();
var statearr_31900_32896 = state_31885__$1;
(statearr_31900_32896[(2)] = null);

(statearr_31900_32896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (3))){
var inst_31883 = (state_31885[(2)]);
var state_31885__$1 = state_31885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31885__$1,inst_31883);
} else {
if((state_val_31886 === (12))){
var _ = (function (){var statearr_31901 = state_31885;
(statearr_31901[(4)] = cljs.core.rest((state_31885[(4)])));

return statearr_31901;
})();
var state_31885__$1 = state_31885;
var ex31898 = (state_31885__$1[(2)]);
var statearr_31902_32898 = state_31885__$1;
(statearr_31902_32898[(5)] = ex31898);


if((ex31898 instanceof Object)){
var statearr_31903_32899 = state_31885__$1;
(statearr_31903_32899[(1)] = (11));

(statearr_31903_32899[(5)] = null);

} else {
throw ex31898;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (2))){
var inst_31844 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31845 = cnt;
var inst_31846 = (0);
var state_31885__$1 = (function (){var statearr_31904 = state_31885;
(statearr_31904[(7)] = inst_31846);

(statearr_31904[(11)] = inst_31844);

(statearr_31904[(8)] = inst_31845);

return statearr_31904;
})();
var statearr_31905_32900 = state_31885__$1;
(statearr_31905_32900[(2)] = null);

(statearr_31905_32900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (11))){
var inst_31850 = (state_31885[(2)]);
var inst_31851 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31885__$1 = (function (){var statearr_31906 = state_31885;
(statearr_31906[(12)] = inst_31850);

return statearr_31906;
})();
var statearr_31907_32901 = state_31885__$1;
(statearr_31907_32901[(2)] = inst_31851);

(statearr_31907_32901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (9))){
var inst_31846 = (state_31885[(7)]);
var _ = (function (){var statearr_31908 = state_31885;
(statearr_31908[(4)] = cljs.core.cons((12),(state_31885[(4)])));

return statearr_31908;
})();
var inst_31857 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31846) : chs__$1.call(null,inst_31846));
var inst_31858 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31846) : done.call(null,inst_31846));
var inst_31859 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31857,inst_31858);
var ___$1 = (function (){var statearr_31909 = state_31885;
(statearr_31909[(4)] = cljs.core.rest((state_31885[(4)])));

return statearr_31909;
})();
var state_31885__$1 = state_31885;
var statearr_31910_32906 = state_31885__$1;
(statearr_31910_32906[(2)] = inst_31859);

(statearr_31910_32906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (5))){
var inst_31869 = (state_31885[(2)]);
var state_31885__$1 = (function (){var statearr_31911 = state_31885;
(statearr_31911[(13)] = inst_31869);

return statearr_31911;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31885__$1,(13),dchan);
} else {
if((state_val_31886 === (14))){
var inst_31874 = cljs.core.async.close_BANG_(out);
var state_31885__$1 = state_31885;
var statearr_31912_32907 = state_31885__$1;
(statearr_31912_32907[(2)] = inst_31874);

(statearr_31912_32907[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (16))){
var inst_31881 = (state_31885[(2)]);
var state_31885__$1 = state_31885;
var statearr_31913_32908 = state_31885__$1;
(statearr_31913_32908[(2)] = inst_31881);

(statearr_31913_32908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (10))){
var inst_31846 = (state_31885[(7)]);
var inst_31862 = (state_31885[(2)]);
var inst_31863 = (inst_31846 + (1));
var inst_31846__$1 = inst_31863;
var state_31885__$1 = (function (){var statearr_31914 = state_31885;
(statearr_31914[(14)] = inst_31862);

(statearr_31914[(7)] = inst_31846__$1);

return statearr_31914;
})();
var statearr_31915_32909 = state_31885__$1;
(statearr_31915_32909[(2)] = null);

(statearr_31915_32909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (8))){
var inst_31867 = (state_31885[(2)]);
var state_31885__$1 = state_31885;
var statearr_31916_32910 = state_31885__$1;
(statearr_31916_32910[(2)] = inst_31867);

(statearr_31916_32910[(1)] = (5));


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
var cljs$core$async$state_machine__30371__auto__ = null;
var cljs$core$async$state_machine__30371__auto____0 = (function (){
var statearr_31918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31918[(0)] = cljs$core$async$state_machine__30371__auto__);

(statearr_31918[(1)] = (1));

return statearr_31918;
});
var cljs$core$async$state_machine__30371__auto____1 = (function (state_31885){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_31885);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e31921){var ex__30374__auto__ = e31921;
var statearr_31922_32911 = state_31885;
(statearr_31922_32911[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_31885[(4)]))){
var statearr_31923_32912 = state_31885;
(statearr_31923_32912[(1)] = cljs.core.first((state_31885[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32913 = state_31885;
state_31885 = G__32913;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$state_machine__30371__auto__ = function(state_31885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30371__auto____1.call(this,state_31885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30371__auto____0;
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30371__auto____1;
return cljs$core$async$state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31924 = f__30530__auto__();
(statearr_31924[(6)] = c__30529__auto___32888);

return statearr_31924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
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
var G__31927 = arguments.length;
switch (G__31927) {
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
var c__30529__auto___32915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_31959){
var state_val_31960 = (state_31959[(1)]);
if((state_val_31960 === (7))){
var inst_31939 = (state_31959[(7)]);
var inst_31938 = (state_31959[(8)]);
var inst_31938__$1 = (state_31959[(2)]);
var inst_31939__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31938__$1,(0),null);
var inst_31940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31938__$1,(1),null);
var inst_31941 = (inst_31939__$1 == null);
var state_31959__$1 = (function (){var statearr_31962 = state_31959;
(statearr_31962[(9)] = inst_31940);

(statearr_31962[(7)] = inst_31939__$1);

(statearr_31962[(8)] = inst_31938__$1);

return statearr_31962;
})();
if(cljs.core.truth_(inst_31941)){
var statearr_31963_32916 = state_31959__$1;
(statearr_31963_32916[(1)] = (8));

} else {
var statearr_31964_32917 = state_31959__$1;
(statearr_31964_32917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (1))){
var inst_31928 = cljs.core.vec(chs);
var inst_31929 = inst_31928;
var state_31959__$1 = (function (){var statearr_31966 = state_31959;
(statearr_31966[(10)] = inst_31929);

return statearr_31966;
})();
var statearr_31967_32918 = state_31959__$1;
(statearr_31967_32918[(2)] = null);

(statearr_31967_32918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (4))){
var inst_31929 = (state_31959[(10)]);
var state_31959__$1 = state_31959;
return cljs.core.async.ioc_alts_BANG_(state_31959__$1,(7),inst_31929);
} else {
if((state_val_31960 === (6))){
var inst_31955 = (state_31959[(2)]);
var state_31959__$1 = state_31959;
var statearr_31969_32919 = state_31959__$1;
(statearr_31969_32919[(2)] = inst_31955);

(statearr_31969_32919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (3))){
var inst_31957 = (state_31959[(2)]);
var state_31959__$1 = state_31959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31959__$1,inst_31957);
} else {
if((state_val_31960 === (2))){
var inst_31929 = (state_31959[(10)]);
var inst_31931 = cljs.core.count(inst_31929);
var inst_31932 = (inst_31931 > (0));
var state_31959__$1 = state_31959;
if(cljs.core.truth_(inst_31932)){
var statearr_31971_32927 = state_31959__$1;
(statearr_31971_32927[(1)] = (4));

} else {
var statearr_31972_32928 = state_31959__$1;
(statearr_31972_32928[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (11))){
var inst_31929 = (state_31959[(10)]);
var inst_31948 = (state_31959[(2)]);
var tmp31970 = inst_31929;
var inst_31929__$1 = tmp31970;
var state_31959__$1 = (function (){var statearr_31973 = state_31959;
(statearr_31973[(10)] = inst_31929__$1);

(statearr_31973[(11)] = inst_31948);

return statearr_31973;
})();
var statearr_31974_32929 = state_31959__$1;
(statearr_31974_32929[(2)] = null);

(statearr_31974_32929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (9))){
var inst_31939 = (state_31959[(7)]);
var state_31959__$1 = state_31959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31959__$1,(11),out,inst_31939);
} else {
if((state_val_31960 === (5))){
var inst_31953 = cljs.core.async.close_BANG_(out);
var state_31959__$1 = state_31959;
var statearr_31975_32930 = state_31959__$1;
(statearr_31975_32930[(2)] = inst_31953);

(statearr_31975_32930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (10))){
var inst_31951 = (state_31959[(2)]);
var state_31959__$1 = state_31959;
var statearr_31976_32931 = state_31959__$1;
(statearr_31976_32931[(2)] = inst_31951);

(statearr_31976_32931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (8))){
var inst_31929 = (state_31959[(10)]);
var inst_31940 = (state_31959[(9)]);
var inst_31939 = (state_31959[(7)]);
var inst_31938 = (state_31959[(8)]);
var inst_31943 = (function (){var cs = inst_31929;
var vec__31934 = inst_31938;
var v = inst_31939;
var c = inst_31940;
return (function (p1__31925_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31925_SHARP_);
});
})();
var inst_31944 = cljs.core.filterv(inst_31943,inst_31929);
var inst_31929__$1 = inst_31944;
var state_31959__$1 = (function (){var statearr_31977 = state_31959;
(statearr_31977[(10)] = inst_31929__$1);

return statearr_31977;
})();
var statearr_31978_32935 = state_31959__$1;
(statearr_31978_32935[(2)] = null);

(statearr_31978_32935[(1)] = (2));


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
var cljs$core$async$state_machine__30371__auto__ = null;
var cljs$core$async$state_machine__30371__auto____0 = (function (){
var statearr_31979 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31979[(0)] = cljs$core$async$state_machine__30371__auto__);

(statearr_31979[(1)] = (1));

return statearr_31979;
});
var cljs$core$async$state_machine__30371__auto____1 = (function (state_31959){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_31959);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e31980){var ex__30374__auto__ = e31980;
var statearr_31981_32939 = state_31959;
(statearr_31981_32939[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_31959[(4)]))){
var statearr_31982_32940 = state_31959;
(statearr_31982_32940[(1)] = cljs.core.first((state_31959[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32941 = state_31959;
state_31959 = G__32941;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$state_machine__30371__auto__ = function(state_31959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30371__auto____1.call(this,state_31959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30371__auto____0;
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30371__auto____1;
return cljs$core$async$state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31983 = f__30530__auto__();
(statearr_31983[(6)] = c__30529__auto___32915);

return statearr_31983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
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
var G__31986 = arguments.length;
switch (G__31986) {
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
var c__30529__auto___32946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_32010){
var state_val_32011 = (state_32010[(1)]);
if((state_val_32011 === (7))){
var inst_31992 = (state_32010[(7)]);
var inst_31992__$1 = (state_32010[(2)]);
var inst_31993 = (inst_31992__$1 == null);
var inst_31994 = cljs.core.not(inst_31993);
var state_32010__$1 = (function (){var statearr_32012 = state_32010;
(statearr_32012[(7)] = inst_31992__$1);

return statearr_32012;
})();
if(inst_31994){
var statearr_32013_32951 = state_32010__$1;
(statearr_32013_32951[(1)] = (8));

} else {
var statearr_32014_32952 = state_32010__$1;
(statearr_32014_32952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (1))){
var inst_31987 = (0);
var state_32010__$1 = (function (){var statearr_32015 = state_32010;
(statearr_32015[(8)] = inst_31987);

return statearr_32015;
})();
var statearr_32016_32953 = state_32010__$1;
(statearr_32016_32953[(2)] = null);

(statearr_32016_32953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (4))){
var state_32010__$1 = state_32010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32010__$1,(7),ch);
} else {
if((state_val_32011 === (6))){
var inst_32005 = (state_32010[(2)]);
var state_32010__$1 = state_32010;
var statearr_32017_32954 = state_32010__$1;
(statearr_32017_32954[(2)] = inst_32005);

(statearr_32017_32954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (3))){
var inst_32007 = (state_32010[(2)]);
var inst_32008 = cljs.core.async.close_BANG_(out);
var state_32010__$1 = (function (){var statearr_32018 = state_32010;
(statearr_32018[(9)] = inst_32007);

return statearr_32018;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32010__$1,inst_32008);
} else {
if((state_val_32011 === (2))){
var inst_31987 = (state_32010[(8)]);
var inst_31989 = (inst_31987 < n);
var state_32010__$1 = state_32010;
if(cljs.core.truth_(inst_31989)){
var statearr_32019_32955 = state_32010__$1;
(statearr_32019_32955[(1)] = (4));

} else {
var statearr_32020_32956 = state_32010__$1;
(statearr_32020_32956[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (11))){
var inst_31987 = (state_32010[(8)]);
var inst_31997 = (state_32010[(2)]);
var inst_31998 = (inst_31987 + (1));
var inst_31987__$1 = inst_31998;
var state_32010__$1 = (function (){var statearr_32021 = state_32010;
(statearr_32021[(10)] = inst_31997);

(statearr_32021[(8)] = inst_31987__$1);

return statearr_32021;
})();
var statearr_32022_32957 = state_32010__$1;
(statearr_32022_32957[(2)] = null);

(statearr_32022_32957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (9))){
var state_32010__$1 = state_32010;
var statearr_32023_32958 = state_32010__$1;
(statearr_32023_32958[(2)] = null);

(statearr_32023_32958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (5))){
var state_32010__$1 = state_32010;
var statearr_32024_32959 = state_32010__$1;
(statearr_32024_32959[(2)] = null);

(statearr_32024_32959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (10))){
var inst_32002 = (state_32010[(2)]);
var state_32010__$1 = state_32010;
var statearr_32025_32960 = state_32010__$1;
(statearr_32025_32960[(2)] = inst_32002);

(statearr_32025_32960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (8))){
var inst_31992 = (state_32010[(7)]);
var state_32010__$1 = state_32010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32010__$1,(11),out,inst_31992);
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
var cljs$core$async$state_machine__30371__auto__ = null;
var cljs$core$async$state_machine__30371__auto____0 = (function (){
var statearr_32026 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32026[(0)] = cljs$core$async$state_machine__30371__auto__);

(statearr_32026[(1)] = (1));

return statearr_32026;
});
var cljs$core$async$state_machine__30371__auto____1 = (function (state_32010){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_32010);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e32027){var ex__30374__auto__ = e32027;
var statearr_32028_32961 = state_32010;
(statearr_32028_32961[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_32010[(4)]))){
var statearr_32029_32962 = state_32010;
(statearr_32029_32962[(1)] = cljs.core.first((state_32010[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32963 = state_32010;
state_32010 = G__32963;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$state_machine__30371__auto__ = function(state_32010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30371__auto____1.call(this,state_32010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30371__auto____0;
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30371__auto____1;
return cljs$core$async$state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_32030 = f__30530__auto__();
(statearr_32030[(6)] = c__30529__auto___32946);

return statearr_32030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32032 = (function (f,ch,meta32033){
this.f = f;
this.ch = ch;
this.meta32033 = meta32033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32034,meta32033__$1){
var self__ = this;
var _32034__$1 = this;
return (new cljs.core.async.t_cljs$core$async32032(self__.f,self__.ch,meta32033__$1));
}));

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32034){
var self__ = this;
var _32034__$1 = this;
return self__.meta32033;
}));

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32041 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32041 = (function (f,ch,meta32033,_,fn1,meta32042){
this.f = f;
this.ch = ch;
this.meta32033 = meta32033;
this._ = _;
this.fn1 = fn1;
this.meta32042 = meta32042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32043,meta32042__$1){
var self__ = this;
var _32043__$1 = this;
return (new cljs.core.async.t_cljs$core$async32041(self__.f,self__.ch,self__.meta32033,self__._,self__.fn1,meta32042__$1));
}));

(cljs.core.async.t_cljs$core$async32041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32043){
var self__ = this;
var _32043__$1 = this;
return self__.meta32042;
}));

(cljs.core.async.t_cljs$core$async32041.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32041.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32031_SHARP_){
var G__32056 = (((p1__32031_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32031_SHARP_) : self__.f.call(null,p1__32031_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32056) : f1.call(null,G__32056));
});
}));

(cljs.core.async.t_cljs$core$async32041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32033","meta32033",-921452274,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32032","cljs.core.async/t_cljs$core$async32032",-1887889995,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32042","meta32042",1204337582,null)], null);
}));

(cljs.core.async.t_cljs$core$async32041.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32041");

(cljs.core.async.t_cljs$core$async32041.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32041");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32041.
 */
cljs.core.async.__GT_t_cljs$core$async32041 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32041(f__$1,ch__$1,meta32033__$1,___$2,fn1__$1,meta32042){
return (new cljs.core.async.t_cljs$core$async32041(f__$1,ch__$1,meta32033__$1,___$2,fn1__$1,meta32042));
});

}

return (new cljs.core.async.t_cljs$core$async32041(self__.f,self__.ch,self__.meta32033,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32071 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32071) : self__.f.call(null,G__32071));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32033","meta32033",-921452274,null)], null);
}));

(cljs.core.async.t_cljs$core$async32032.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32032");

(cljs.core.async.t_cljs$core$async32032.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32032");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32032.
 */
cljs.core.async.__GT_t_cljs$core$async32032 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32032(f__$1,ch__$1,meta32033){
return (new cljs.core.async.t_cljs$core$async32032(f__$1,ch__$1,meta32033));
});

}

return (new cljs.core.async.t_cljs$core$async32032(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32082 = (function (f,ch,meta32083){
this.f = f;
this.ch = ch;
this.meta32083 = meta32083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32084,meta32083__$1){
var self__ = this;
var _32084__$1 = this;
return (new cljs.core.async.t_cljs$core$async32082(self__.f,self__.ch,meta32083__$1));
}));

(cljs.core.async.t_cljs$core$async32082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32084){
var self__ = this;
var _32084__$1 = this;
return self__.meta32083;
}));

(cljs.core.async.t_cljs$core$async32082.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32082.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32082.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32082.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32082.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32082.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32083","meta32083",-1684081562,null)], null);
}));

(cljs.core.async.t_cljs$core$async32082.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32082");

(cljs.core.async.t_cljs$core$async32082.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32082");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32082.
 */
cljs.core.async.__GT_t_cljs$core$async32082 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32082(f__$1,ch__$1,meta32083){
return (new cljs.core.async.t_cljs$core$async32082(f__$1,ch__$1,meta32083));
});

}

return (new cljs.core.async.t_cljs$core$async32082(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32091 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32091 = (function (p,ch,meta32092){
this.p = p;
this.ch = ch;
this.meta32092 = meta32092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32093,meta32092__$1){
var self__ = this;
var _32093__$1 = this;
return (new cljs.core.async.t_cljs$core$async32091(self__.p,self__.ch,meta32092__$1));
}));

(cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32093){
var self__ = this;
var _32093__$1 = this;
return self__.meta32092;
}));

(cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32092","meta32092",362115543,null)], null);
}));

(cljs.core.async.t_cljs$core$async32091.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32091");

(cljs.core.async.t_cljs$core$async32091.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32091");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32091.
 */
cljs.core.async.__GT_t_cljs$core$async32091 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32091(p__$1,ch__$1,meta32092){
return (new cljs.core.async.t_cljs$core$async32091(p__$1,ch__$1,meta32092));
});

}

return (new cljs.core.async.t_cljs$core$async32091(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32104 = arguments.length;
switch (G__32104) {
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
var c__30529__auto___32971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_32125){
var state_val_32126 = (state_32125[(1)]);
if((state_val_32126 === (7))){
var inst_32121 = (state_32125[(2)]);
var state_32125__$1 = state_32125;
var statearr_32131_32972 = state_32125__$1;
(statearr_32131_32972[(2)] = inst_32121);

(statearr_32131_32972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (1))){
var state_32125__$1 = state_32125;
var statearr_32132_32973 = state_32125__$1;
(statearr_32132_32973[(2)] = null);

(statearr_32132_32973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (4))){
var inst_32107 = (state_32125[(7)]);
var inst_32107__$1 = (state_32125[(2)]);
var inst_32108 = (inst_32107__$1 == null);
var state_32125__$1 = (function (){var statearr_32133 = state_32125;
(statearr_32133[(7)] = inst_32107__$1);

return statearr_32133;
})();
if(cljs.core.truth_(inst_32108)){
var statearr_32135_32974 = state_32125__$1;
(statearr_32135_32974[(1)] = (5));

} else {
var statearr_32136_32975 = state_32125__$1;
(statearr_32136_32975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (6))){
var inst_32107 = (state_32125[(7)]);
var inst_32112 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32107) : p.call(null,inst_32107));
var state_32125__$1 = state_32125;
if(cljs.core.truth_(inst_32112)){
var statearr_32137_32976 = state_32125__$1;
(statearr_32137_32976[(1)] = (8));

} else {
var statearr_32139_32977 = state_32125__$1;
(statearr_32139_32977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (3))){
var inst_32123 = (state_32125[(2)]);
var state_32125__$1 = state_32125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32125__$1,inst_32123);
} else {
if((state_val_32126 === (2))){
var state_32125__$1 = state_32125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32125__$1,(4),ch);
} else {
if((state_val_32126 === (11))){
var inst_32115 = (state_32125[(2)]);
var state_32125__$1 = state_32125;
var statearr_32141_32978 = state_32125__$1;
(statearr_32141_32978[(2)] = inst_32115);

(statearr_32141_32978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (9))){
var state_32125__$1 = state_32125;
var statearr_32142_32979 = state_32125__$1;
(statearr_32142_32979[(2)] = null);

(statearr_32142_32979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (5))){
var inst_32110 = cljs.core.async.close_BANG_(out);
var state_32125__$1 = state_32125;
var statearr_32143_32980 = state_32125__$1;
(statearr_32143_32980[(2)] = inst_32110);

(statearr_32143_32980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (10))){
var inst_32118 = (state_32125[(2)]);
var state_32125__$1 = (function (){var statearr_32144 = state_32125;
(statearr_32144[(8)] = inst_32118);

return statearr_32144;
})();
var statearr_32145_32981 = state_32125__$1;
(statearr_32145_32981[(2)] = null);

(statearr_32145_32981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (8))){
var inst_32107 = (state_32125[(7)]);
var state_32125__$1 = state_32125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32125__$1,(11),out,inst_32107);
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
var cljs$core$async$state_machine__30371__auto__ = null;
var cljs$core$async$state_machine__30371__auto____0 = (function (){
var statearr_32147 = [null,null,null,null,null,null,null,null,null];
(statearr_32147[(0)] = cljs$core$async$state_machine__30371__auto__);

(statearr_32147[(1)] = (1));

return statearr_32147;
});
var cljs$core$async$state_machine__30371__auto____1 = (function (state_32125){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_32125);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e32151){var ex__30374__auto__ = e32151;
var statearr_32152_32982 = state_32125;
(statearr_32152_32982[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_32125[(4)]))){
var statearr_32153_32983 = state_32125;
(statearr_32153_32983[(1)] = cljs.core.first((state_32125[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32988 = state_32125;
state_32125 = G__32988;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$state_machine__30371__auto__ = function(state_32125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30371__auto____1.call(this,state_32125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30371__auto____0;
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30371__auto____1;
return cljs$core$async$state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_32154 = f__30530__auto__();
(statearr_32154[(6)] = c__30529__auto___32971);

return statearr_32154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32156 = arguments.length;
switch (G__32156) {
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
var c__30529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_32218){
var state_val_32219 = (state_32218[(1)]);
if((state_val_32219 === (7))){
var inst_32214 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
var statearr_32220_32991 = state_32218__$1;
(statearr_32220_32991[(2)] = inst_32214);

(statearr_32220_32991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (20))){
var inst_32184 = (state_32218[(7)]);
var inst_32195 = (state_32218[(2)]);
var inst_32196 = cljs.core.next(inst_32184);
var inst_32170 = inst_32196;
var inst_32171 = null;
var inst_32172 = (0);
var inst_32173 = (0);
var state_32218__$1 = (function (){var statearr_32221 = state_32218;
(statearr_32221[(8)] = inst_32195);

(statearr_32221[(9)] = inst_32173);

(statearr_32221[(10)] = inst_32170);

(statearr_32221[(11)] = inst_32171);

(statearr_32221[(12)] = inst_32172);

return statearr_32221;
})();
var statearr_32222_32992 = state_32218__$1;
(statearr_32222_32992[(2)] = null);

(statearr_32222_32992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (1))){
var state_32218__$1 = state_32218;
var statearr_32223_32993 = state_32218__$1;
(statearr_32223_32993[(2)] = null);

(statearr_32223_32993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (4))){
var inst_32159 = (state_32218[(13)]);
var inst_32159__$1 = (state_32218[(2)]);
var inst_32160 = (inst_32159__$1 == null);
var state_32218__$1 = (function (){var statearr_32224 = state_32218;
(statearr_32224[(13)] = inst_32159__$1);

return statearr_32224;
})();
if(cljs.core.truth_(inst_32160)){
var statearr_32225_32995 = state_32218__$1;
(statearr_32225_32995[(1)] = (5));

} else {
var statearr_32226_32996 = state_32218__$1;
(statearr_32226_32996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (15))){
var state_32218__$1 = state_32218;
var statearr_32230_32997 = state_32218__$1;
(statearr_32230_32997[(2)] = null);

(statearr_32230_32997[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (21))){
var state_32218__$1 = state_32218;
var statearr_32231_32998 = state_32218__$1;
(statearr_32231_32998[(2)] = null);

(statearr_32231_32998[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (13))){
var inst_32173 = (state_32218[(9)]);
var inst_32170 = (state_32218[(10)]);
var inst_32171 = (state_32218[(11)]);
var inst_32172 = (state_32218[(12)]);
var inst_32180 = (state_32218[(2)]);
var inst_32181 = (inst_32173 + (1));
var tmp32227 = inst_32170;
var tmp32228 = inst_32171;
var tmp32229 = inst_32172;
var inst_32170__$1 = tmp32227;
var inst_32171__$1 = tmp32228;
var inst_32172__$1 = tmp32229;
var inst_32173__$1 = inst_32181;
var state_32218__$1 = (function (){var statearr_32232 = state_32218;
(statearr_32232[(9)] = inst_32173__$1);

(statearr_32232[(10)] = inst_32170__$1);

(statearr_32232[(14)] = inst_32180);

(statearr_32232[(11)] = inst_32171__$1);

(statearr_32232[(12)] = inst_32172__$1);

return statearr_32232;
})();
var statearr_32233_33003 = state_32218__$1;
(statearr_32233_33003[(2)] = null);

(statearr_32233_33003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (22))){
var state_32218__$1 = state_32218;
var statearr_32234_33004 = state_32218__$1;
(statearr_32234_33004[(2)] = null);

(statearr_32234_33004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (6))){
var inst_32159 = (state_32218[(13)]);
var inst_32168 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32159) : f.call(null,inst_32159));
var inst_32169 = cljs.core.seq(inst_32168);
var inst_32170 = inst_32169;
var inst_32171 = null;
var inst_32172 = (0);
var inst_32173 = (0);
var state_32218__$1 = (function (){var statearr_32235 = state_32218;
(statearr_32235[(9)] = inst_32173);

(statearr_32235[(10)] = inst_32170);

(statearr_32235[(11)] = inst_32171);

(statearr_32235[(12)] = inst_32172);

return statearr_32235;
})();
var statearr_32236_33005 = state_32218__$1;
(statearr_32236_33005[(2)] = null);

(statearr_32236_33005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (17))){
var inst_32184 = (state_32218[(7)]);
var inst_32188 = cljs.core.chunk_first(inst_32184);
var inst_32189 = cljs.core.chunk_rest(inst_32184);
var inst_32190 = cljs.core.count(inst_32188);
var inst_32170 = inst_32189;
var inst_32171 = inst_32188;
var inst_32172 = inst_32190;
var inst_32173 = (0);
var state_32218__$1 = (function (){var statearr_32237 = state_32218;
(statearr_32237[(9)] = inst_32173);

(statearr_32237[(10)] = inst_32170);

(statearr_32237[(11)] = inst_32171);

(statearr_32237[(12)] = inst_32172);

return statearr_32237;
})();
var statearr_32238_33006 = state_32218__$1;
(statearr_32238_33006[(2)] = null);

(statearr_32238_33006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (3))){
var inst_32216 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32218__$1,inst_32216);
} else {
if((state_val_32219 === (12))){
var inst_32204 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
var statearr_32239_33007 = state_32218__$1;
(statearr_32239_33007[(2)] = inst_32204);

(statearr_32239_33007[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (2))){
var state_32218__$1 = state_32218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32218__$1,(4),in$);
} else {
if((state_val_32219 === (23))){
var inst_32212 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
var statearr_32240_33008 = state_32218__$1;
(statearr_32240_33008[(2)] = inst_32212);

(statearr_32240_33008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (19))){
var inst_32199 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
var statearr_32241_33009 = state_32218__$1;
(statearr_32241_33009[(2)] = inst_32199);

(statearr_32241_33009[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (11))){
var inst_32184 = (state_32218[(7)]);
var inst_32170 = (state_32218[(10)]);
var inst_32184__$1 = cljs.core.seq(inst_32170);
var state_32218__$1 = (function (){var statearr_32242 = state_32218;
(statearr_32242[(7)] = inst_32184__$1);

return statearr_32242;
})();
if(inst_32184__$1){
var statearr_32243_33010 = state_32218__$1;
(statearr_32243_33010[(1)] = (14));

} else {
var statearr_32244_33011 = state_32218__$1;
(statearr_32244_33011[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (9))){
var inst_32206 = (state_32218[(2)]);
var inst_32207 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32218__$1 = (function (){var statearr_32245 = state_32218;
(statearr_32245[(15)] = inst_32206);

return statearr_32245;
})();
if(cljs.core.truth_(inst_32207)){
var statearr_32246_33012 = state_32218__$1;
(statearr_32246_33012[(1)] = (21));

} else {
var statearr_32247_33013 = state_32218__$1;
(statearr_32247_33013[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (5))){
var inst_32162 = cljs.core.async.close_BANG_(out);
var state_32218__$1 = state_32218;
var statearr_32248_33014 = state_32218__$1;
(statearr_32248_33014[(2)] = inst_32162);

(statearr_32248_33014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (14))){
var inst_32184 = (state_32218[(7)]);
var inst_32186 = cljs.core.chunked_seq_QMARK_(inst_32184);
var state_32218__$1 = state_32218;
if(inst_32186){
var statearr_32249_33015 = state_32218__$1;
(statearr_32249_33015[(1)] = (17));

} else {
var statearr_32250_33016 = state_32218__$1;
(statearr_32250_33016[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (16))){
var inst_32202 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
var statearr_32251_33017 = state_32218__$1;
(statearr_32251_33017[(2)] = inst_32202);

(statearr_32251_33017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (10))){
var inst_32173 = (state_32218[(9)]);
var inst_32171 = (state_32218[(11)]);
var inst_32178 = cljs.core._nth(inst_32171,inst_32173);
var state_32218__$1 = state_32218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32218__$1,(13),out,inst_32178);
} else {
if((state_val_32219 === (18))){
var inst_32184 = (state_32218[(7)]);
var inst_32193 = cljs.core.first(inst_32184);
var state_32218__$1 = state_32218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32218__$1,(20),out,inst_32193);
} else {
if((state_val_32219 === (8))){
var inst_32173 = (state_32218[(9)]);
var inst_32172 = (state_32218[(12)]);
var inst_32175 = (inst_32173 < inst_32172);
var inst_32176 = inst_32175;
var state_32218__$1 = state_32218;
if(cljs.core.truth_(inst_32176)){
var statearr_32252_33018 = state_32218__$1;
(statearr_32252_33018[(1)] = (10));

} else {
var statearr_32253_33019 = state_32218__$1;
(statearr_32253_33019[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30371__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30371__auto____0 = (function (){
var statearr_32254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32254[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30371__auto__);

(statearr_32254[(1)] = (1));

return statearr_32254;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30371__auto____1 = (function (state_32218){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_32218);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e32255){var ex__30374__auto__ = e32255;
var statearr_32256_33020 = state_32218;
(statearr_32256_33020[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_32218[(4)]))){
var statearr_32257_33021 = state_32218;
(statearr_32257_33021[(1)] = cljs.core.first((state_32218[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33022 = state_32218;
state_32218 = G__33022;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30371__auto__ = function(state_32218){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30371__auto____1.call(this,state_32218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30371__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30371__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_32258 = f__30530__auto__();
(statearr_32258[(6)] = c__30529__auto__);

return statearr_32258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));

return c__30529__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32260 = arguments.length;
switch (G__32260) {
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
var G__32262 = arguments.length;
switch (G__32262) {
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
var G__32264 = arguments.length;
switch (G__32264) {
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
var c__30529__auto___33027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_32288){
var state_val_32289 = (state_32288[(1)]);
if((state_val_32289 === (7))){
var inst_32283 = (state_32288[(2)]);
var state_32288__$1 = state_32288;
var statearr_32290_33031 = state_32288__$1;
(statearr_32290_33031[(2)] = inst_32283);

(statearr_32290_33031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (1))){
var inst_32265 = null;
var state_32288__$1 = (function (){var statearr_32291 = state_32288;
(statearr_32291[(7)] = inst_32265);

return statearr_32291;
})();
var statearr_32292_33032 = state_32288__$1;
(statearr_32292_33032[(2)] = null);

(statearr_32292_33032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (4))){
var inst_32268 = (state_32288[(8)]);
var inst_32268__$1 = (state_32288[(2)]);
var inst_32269 = (inst_32268__$1 == null);
var inst_32270 = cljs.core.not(inst_32269);
var state_32288__$1 = (function (){var statearr_32293 = state_32288;
(statearr_32293[(8)] = inst_32268__$1);

return statearr_32293;
})();
if(inst_32270){
var statearr_32294_33033 = state_32288__$1;
(statearr_32294_33033[(1)] = (5));

} else {
var statearr_32295_33034 = state_32288__$1;
(statearr_32295_33034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (6))){
var state_32288__$1 = state_32288;
var statearr_32296_33035 = state_32288__$1;
(statearr_32296_33035[(2)] = null);

(statearr_32296_33035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (3))){
var inst_32285 = (state_32288[(2)]);
var inst_32286 = cljs.core.async.close_BANG_(out);
var state_32288__$1 = (function (){var statearr_32297 = state_32288;
(statearr_32297[(9)] = inst_32285);

return statearr_32297;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32288__$1,inst_32286);
} else {
if((state_val_32289 === (2))){
var state_32288__$1 = state_32288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32288__$1,(4),ch);
} else {
if((state_val_32289 === (11))){
var inst_32268 = (state_32288[(8)]);
var inst_32277 = (state_32288[(2)]);
var inst_32265 = inst_32268;
var state_32288__$1 = (function (){var statearr_32298 = state_32288;
(statearr_32298[(10)] = inst_32277);

(statearr_32298[(7)] = inst_32265);

return statearr_32298;
})();
var statearr_32299_33036 = state_32288__$1;
(statearr_32299_33036[(2)] = null);

(statearr_32299_33036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (9))){
var inst_32268 = (state_32288[(8)]);
var state_32288__$1 = state_32288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32288__$1,(11),out,inst_32268);
} else {
if((state_val_32289 === (5))){
var inst_32265 = (state_32288[(7)]);
var inst_32268 = (state_32288[(8)]);
var inst_32272 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32268,inst_32265);
var state_32288__$1 = state_32288;
if(inst_32272){
var statearr_32301_33037 = state_32288__$1;
(statearr_32301_33037[(1)] = (8));

} else {
var statearr_32302_33038 = state_32288__$1;
(statearr_32302_33038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (10))){
var inst_32280 = (state_32288[(2)]);
var state_32288__$1 = state_32288;
var statearr_32303_33039 = state_32288__$1;
(statearr_32303_33039[(2)] = inst_32280);

(statearr_32303_33039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (8))){
var inst_32265 = (state_32288[(7)]);
var tmp32300 = inst_32265;
var inst_32265__$1 = tmp32300;
var state_32288__$1 = (function (){var statearr_32304 = state_32288;
(statearr_32304[(7)] = inst_32265__$1);

return statearr_32304;
})();
var statearr_32305_33040 = state_32288__$1;
(statearr_32305_33040[(2)] = null);

(statearr_32305_33040[(1)] = (2));


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
var cljs$core$async$state_machine__30371__auto__ = null;
var cljs$core$async$state_machine__30371__auto____0 = (function (){
var statearr_32306 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32306[(0)] = cljs$core$async$state_machine__30371__auto__);

(statearr_32306[(1)] = (1));

return statearr_32306;
});
var cljs$core$async$state_machine__30371__auto____1 = (function (state_32288){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_32288);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e32307){var ex__30374__auto__ = e32307;
var statearr_32308_33041 = state_32288;
(statearr_32308_33041[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_32288[(4)]))){
var statearr_32309_33042 = state_32288;
(statearr_32309_33042[(1)] = cljs.core.first((state_32288[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33043 = state_32288;
state_32288 = G__33043;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$state_machine__30371__auto__ = function(state_32288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30371__auto____1.call(this,state_32288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30371__auto____0;
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30371__auto____1;
return cljs$core$async$state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_32310 = f__30530__auto__();
(statearr_32310[(6)] = c__30529__auto___33027);

return statearr_32310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32312 = arguments.length;
switch (G__32312) {
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
var c__30529__auto___33046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_32350){
var state_val_32351 = (state_32350[(1)]);
if((state_val_32351 === (7))){
var inst_32346 = (state_32350[(2)]);
var state_32350__$1 = state_32350;
var statearr_32352_33047 = state_32350__$1;
(statearr_32352_33047[(2)] = inst_32346);

(statearr_32352_33047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (1))){
var inst_32313 = (new Array(n));
var inst_32314 = inst_32313;
var inst_32315 = (0);
var state_32350__$1 = (function (){var statearr_32353 = state_32350;
(statearr_32353[(7)] = inst_32315);

(statearr_32353[(8)] = inst_32314);

return statearr_32353;
})();
var statearr_32354_33048 = state_32350__$1;
(statearr_32354_33048[(2)] = null);

(statearr_32354_33048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (4))){
var inst_32318 = (state_32350[(9)]);
var inst_32318__$1 = (state_32350[(2)]);
var inst_32319 = (inst_32318__$1 == null);
var inst_32320 = cljs.core.not(inst_32319);
var state_32350__$1 = (function (){var statearr_32355 = state_32350;
(statearr_32355[(9)] = inst_32318__$1);

return statearr_32355;
})();
if(inst_32320){
var statearr_32356_33049 = state_32350__$1;
(statearr_32356_33049[(1)] = (5));

} else {
var statearr_32357_33050 = state_32350__$1;
(statearr_32357_33050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (15))){
var inst_32340 = (state_32350[(2)]);
var state_32350__$1 = state_32350;
var statearr_32358_33051 = state_32350__$1;
(statearr_32358_33051[(2)] = inst_32340);

(statearr_32358_33051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (13))){
var state_32350__$1 = state_32350;
var statearr_32359_33052 = state_32350__$1;
(statearr_32359_33052[(2)] = null);

(statearr_32359_33052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (6))){
var inst_32315 = (state_32350[(7)]);
var inst_32336 = (inst_32315 > (0));
var state_32350__$1 = state_32350;
if(cljs.core.truth_(inst_32336)){
var statearr_32360_33053 = state_32350__$1;
(statearr_32360_33053[(1)] = (12));

} else {
var statearr_32361_33054 = state_32350__$1;
(statearr_32361_33054[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (3))){
var inst_32348 = (state_32350[(2)]);
var state_32350__$1 = state_32350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32350__$1,inst_32348);
} else {
if((state_val_32351 === (12))){
var inst_32314 = (state_32350[(8)]);
var inst_32338 = cljs.core.vec(inst_32314);
var state_32350__$1 = state_32350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32350__$1,(15),out,inst_32338);
} else {
if((state_val_32351 === (2))){
var state_32350__$1 = state_32350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32350__$1,(4),ch);
} else {
if((state_val_32351 === (11))){
var inst_32330 = (state_32350[(2)]);
var inst_32331 = (new Array(n));
var inst_32314 = inst_32331;
var inst_32315 = (0);
var state_32350__$1 = (function (){var statearr_32362 = state_32350;
(statearr_32362[(7)] = inst_32315);

(statearr_32362[(10)] = inst_32330);

(statearr_32362[(8)] = inst_32314);

return statearr_32362;
})();
var statearr_32363_33055 = state_32350__$1;
(statearr_32363_33055[(2)] = null);

(statearr_32363_33055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (9))){
var inst_32314 = (state_32350[(8)]);
var inst_32328 = cljs.core.vec(inst_32314);
var state_32350__$1 = state_32350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32350__$1,(11),out,inst_32328);
} else {
if((state_val_32351 === (5))){
var inst_32318 = (state_32350[(9)]);
var inst_32315 = (state_32350[(7)]);
var inst_32314 = (state_32350[(8)]);
var inst_32323 = (state_32350[(11)]);
var inst_32322 = (inst_32314[inst_32315] = inst_32318);
var inst_32323__$1 = (inst_32315 + (1));
var inst_32324 = (inst_32323__$1 < n);
var state_32350__$1 = (function (){var statearr_32364 = state_32350;
(statearr_32364[(12)] = inst_32322);

(statearr_32364[(11)] = inst_32323__$1);

return statearr_32364;
})();
if(cljs.core.truth_(inst_32324)){
var statearr_32365_33058 = state_32350__$1;
(statearr_32365_33058[(1)] = (8));

} else {
var statearr_32366_33061 = state_32350__$1;
(statearr_32366_33061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (14))){
var inst_32343 = (state_32350[(2)]);
var inst_32344 = cljs.core.async.close_BANG_(out);
var state_32350__$1 = (function (){var statearr_32368 = state_32350;
(statearr_32368[(13)] = inst_32343);

return statearr_32368;
})();
var statearr_32369_33062 = state_32350__$1;
(statearr_32369_33062[(2)] = inst_32344);

(statearr_32369_33062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (10))){
var inst_32334 = (state_32350[(2)]);
var state_32350__$1 = state_32350;
var statearr_32370_33064 = state_32350__$1;
(statearr_32370_33064[(2)] = inst_32334);

(statearr_32370_33064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (8))){
var inst_32314 = (state_32350[(8)]);
var inst_32323 = (state_32350[(11)]);
var tmp32367 = inst_32314;
var inst_32314__$1 = tmp32367;
var inst_32315 = inst_32323;
var state_32350__$1 = (function (){var statearr_32371 = state_32350;
(statearr_32371[(7)] = inst_32315);

(statearr_32371[(8)] = inst_32314__$1);

return statearr_32371;
})();
var statearr_32372_33065 = state_32350__$1;
(statearr_32372_33065[(2)] = null);

(statearr_32372_33065[(1)] = (2));


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
var cljs$core$async$state_machine__30371__auto__ = null;
var cljs$core$async$state_machine__30371__auto____0 = (function (){
var statearr_32373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32373[(0)] = cljs$core$async$state_machine__30371__auto__);

(statearr_32373[(1)] = (1));

return statearr_32373;
});
var cljs$core$async$state_machine__30371__auto____1 = (function (state_32350){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_32350);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e32374){var ex__30374__auto__ = e32374;
var statearr_32375_33066 = state_32350;
(statearr_32375_33066[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_32350[(4)]))){
var statearr_32376_33067 = state_32350;
(statearr_32376_33067[(1)] = cljs.core.first((state_32350[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33068 = state_32350;
state_32350 = G__33068;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$state_machine__30371__auto__ = function(state_32350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30371__auto____1.call(this,state_32350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30371__auto____0;
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30371__auto____1;
return cljs$core$async$state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_32377 = f__30530__auto__();
(statearr_32377[(6)] = c__30529__auto___33046);

return statearr_32377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
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
var c__30529__auto___33071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_32424){
var state_val_32425 = (state_32424[(1)]);
if((state_val_32425 === (7))){
var inst_32420 = (state_32424[(2)]);
var state_32424__$1 = state_32424;
var statearr_32426_33072 = state_32424__$1;
(statearr_32426_33072[(2)] = inst_32420);

(statearr_32426_33072[(1)] = (3));


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
var statearr_32428_33073 = state_32424__$1;
(statearr_32428_33073[(2)] = null);

(statearr_32428_33073[(1)] = (2));


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
var statearr_32430_33078 = state_32424__$1;
(statearr_32430_33078[(1)] = (5));

} else {
var statearr_32431_33079 = state_32424__$1;
(statearr_32431_33079[(1)] = (6));

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
var statearr_32432_33080 = state_32424__$1;
(statearr_32432_33080[(2)] = inst_32407);

(statearr_32432_33080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (6))){
var inst_32381 = (state_32424[(8)]);
var inst_32409 = inst_32381.length;
var inst_32410 = (inst_32409 > (0));
var state_32424__$1 = state_32424;
if(cljs.core.truth_(inst_32410)){
var statearr_32433_33081 = state_32424__$1;
(statearr_32433_33081[(1)] = (15));

} else {
var statearr_32434_33082 = state_32424__$1;
(statearr_32434_33082[(1)] = (16));

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
var statearr_32436_33083 = state_32424__$1;
(statearr_32436_33083[(2)] = inst_32418);

(statearr_32436_33083[(1)] = (7));


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
var statearr_32439_33084 = state_32424__$1;
(statearr_32439_33084[(2)] = null);

(statearr_32439_33084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (9))){
var inst_32382 = (state_32424[(7)]);
var inst_32393 = cljs.core.keyword_identical_QMARK_(inst_32382,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32424__$1 = state_32424;
var statearr_32440_33085 = state_32424__$1;
(statearr_32440_33085[(2)] = inst_32393);

(statearr_32440_33085[(1)] = (10));


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
var statearr_32442_33086 = state_32424__$1;
(statearr_32442_33086[(1)] = (8));

} else {
var statearr_32443_33087 = state_32424__$1;
(statearr_32443_33087[(1)] = (9));

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
var statearr_32445_33088 = state_32424__$1;
(statearr_32445_33088[(2)] = null);

(statearr_32445_33088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (16))){
var state_32424__$1 = state_32424;
var statearr_32446_33089 = state_32424__$1;
(statearr_32446_33089[(2)] = null);

(statearr_32446_33089[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (10))){
var inst_32395 = (state_32424[(2)]);
var state_32424__$1 = state_32424;
if(cljs.core.truth_(inst_32395)){
var statearr_32447_33090 = state_32424__$1;
(statearr_32447_33090[(1)] = (11));

} else {
var statearr_32448_33091 = state_32424__$1;
(statearr_32448_33091[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (18))){
var inst_32414 = (state_32424[(2)]);
var state_32424__$1 = state_32424;
var statearr_32449_33092 = state_32424__$1;
(statearr_32449_33092[(2)] = inst_32414);

(statearr_32449_33092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (8))){
var inst_32390 = (state_32424[(13)]);
var state_32424__$1 = state_32424;
var statearr_32450_33093 = state_32424__$1;
(statearr_32450_33093[(2)] = inst_32390);

(statearr_32450_33093[(1)] = (10));


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
var cljs$core$async$state_machine__30371__auto__ = null;
var cljs$core$async$state_machine__30371__auto____0 = (function (){
var statearr_32451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32451[(0)] = cljs$core$async$state_machine__30371__auto__);

(statearr_32451[(1)] = (1));

return statearr_32451;
});
var cljs$core$async$state_machine__30371__auto____1 = (function (state_32424){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_32424);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e32452){var ex__30374__auto__ = e32452;
var statearr_32453_33094 = state_32424;
(statearr_32453_33094[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_32424[(4)]))){
var statearr_32454_33095 = state_32424;
(statearr_32454_33095[(1)] = cljs.core.first((state_32424[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33096 = state_32424;
state_32424 = G__33096;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
cljs$core$async$state_machine__30371__auto__ = function(state_32424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30371__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30371__auto____1.call(this,state_32424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30371__auto____0;
cljs$core$async$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30371__auto____1;
return cljs$core$async$state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_32455 = f__30530__auto__();
(statearr_32455[(6)] = c__30529__auto___33071);

return statearr_32455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
