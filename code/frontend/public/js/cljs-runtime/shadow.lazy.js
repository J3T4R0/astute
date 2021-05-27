goog.provide('shadow.lazy');

/**
 * @interface
 */
shadow.lazy.ILoadable = function(){};

var shadow$lazy$ILoadable$ready_QMARK_$dyn_36574 = (function (x){
var x__4521__auto__ = (((x == null))?null:x);
var m__4522__auto__ = (shadow.lazy.ready_QMARK_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4522__auto__.call(null,x));
} else {
var m__4519__auto__ = (shadow.lazy.ready_QMARK_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4519__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("ILoadable.ready?",x);
}
}
});
shadow.lazy.ready_QMARK_ = (function shadow$lazy$ready_QMARK_(x){
if((((!((x == null)))) && ((!((x.shadow$lazy$ILoadable$ready_QMARK_$arity$1 == null)))))){
return x.shadow$lazy$ILoadable$ready_QMARK_$arity$1(x);
} else {
return shadow$lazy$ILoadable$ready_QMARK_$dyn_36574(x);
}
});


/**
* @constructor
 * @implements {shadow.lazy.ILoadable}
 * @implements {cljs.core.IDeref}
*/
shadow.lazy.Loadable = (function (modules,deref_fn){
this.modules = modules;
this.deref_fn = deref_fn;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.lazy.Loadable.prototype.shadow$lazy$ILoadable$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.lazy.Loadable.prototype.shadow$lazy$ILoadable$ready_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.every_QMARK_(shadow.loader.loaded_QMARK_,self__.modules);
}));

(shadow.lazy.Loadable.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.shadow$lazy$ILoadable$ready_QMARK_$arity$1(null))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loadable not ready yet",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modules","modules",-248193976),self__.modules], null));
}

return (self__.deref_fn.cljs$core$IFn$_invoke$arity$0 ? self__.deref_fn.cljs$core$IFn$_invoke$arity$0() : self__.deref_fn.call(null));
}));

(shadow.lazy.Loadable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"modules","modules",1392337551,null),new cljs.core.Symbol(null,"deref-fn","deref-fn",-1070945319,null)], null);
}));

(shadow.lazy.Loadable.cljs$lang$type = true);

(shadow.lazy.Loadable.cljs$lang$ctorStr = "shadow.lazy/Loadable");

(shadow.lazy.Loadable.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.lazy/Loadable");
}));

/**
 * Positional factory function for shadow.lazy/Loadable.
 */
shadow.lazy.__GT_Loadable = (function shadow$lazy$__GT_Loadable(modules,deref_fn){
return (new shadow.lazy.Loadable(modules,deref_fn));
});

shadow.lazy.loadable = (function shadow$lazy$loadable(thing){
return null;
});
shadow.lazy.load = (function shadow$lazy$load(var_args){
var G__36565 = arguments.length;
switch (G__36565) {
case 1:
return shadow.lazy.load.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.lazy.load.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.lazy.load.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.lazy.load.cljs$core$IFn$_invoke$arity$1 = (function (the_loadable){
if((the_loadable instanceof shadow.lazy.Loadable)){
} else {
throw (new Error("Assert failed: (instance? Loadable the-loadable)"));
}

var all_mods = the_loadable.modules;
var loading_map = shadow.loader.load_multiple(cljs.core.into_array.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.name),all_mods));
var combined = (new goog.async.Deferred());
var callback_fn = the_loadable.deref_fn;
var err_fn = (function (err){
return combined.errback(err);
});
var success_fn = (function (){
if(cljs.core.truth_(the_loadable.shadow$lazy$ILoadable$ready_QMARK_$arity$1(null))){
return combined.callback((callback_fn.cljs$core$IFn$_invoke$arity$0 ? callback_fn.cljs$core$IFn$_invoke$arity$0() : callback_fn.call(null)));
} else {
return null;
}
});
var seq__36566_36578 = cljs.core.seq(all_mods);
var chunk__36567_36579 = null;
var count__36568_36580 = (0);
var i__36569_36581 = (0);
while(true){
if((i__36569_36581 < count__36568_36580)){
var mod_36582 = chunk__36567_36579.cljs$core$IIndexed$_nth$arity$2(null,i__36569_36581);
var mod_deferred_36583 = goog.object.get(loading_map,cljs.core.name(mod_36582));
mod_deferred_36583.addCallbacks(success_fn,err_fn);


var G__36584 = seq__36566_36578;
var G__36585 = chunk__36567_36579;
var G__36586 = count__36568_36580;
var G__36587 = (i__36569_36581 + (1));
seq__36566_36578 = G__36584;
chunk__36567_36579 = G__36585;
count__36568_36580 = G__36586;
i__36569_36581 = G__36587;
continue;
} else {
var temp__5753__auto___36588 = cljs.core.seq(seq__36566_36578);
if(temp__5753__auto___36588){
var seq__36566_36589__$1 = temp__5753__auto___36588;
if(cljs.core.chunked_seq_QMARK_(seq__36566_36589__$1)){
var c__4649__auto___36590 = cljs.core.chunk_first(seq__36566_36589__$1);
var G__36593 = cljs.core.chunk_rest(seq__36566_36589__$1);
var G__36594 = c__4649__auto___36590;
var G__36595 = cljs.core.count(c__4649__auto___36590);
var G__36596 = (0);
seq__36566_36578 = G__36593;
chunk__36567_36579 = G__36594;
count__36568_36580 = G__36595;
i__36569_36581 = G__36596;
continue;
} else {
var mod_36597 = cljs.core.first(seq__36566_36589__$1);
var mod_deferred_36598 = goog.object.get(loading_map,cljs.core.name(mod_36597));
mod_deferred_36598.addCallbacks(success_fn,err_fn);


var G__36599 = cljs.core.next(seq__36566_36589__$1);
var G__36600 = null;
var G__36601 = (0);
var G__36602 = (0);
seq__36566_36578 = G__36599;
chunk__36567_36579 = G__36600;
count__36568_36580 = G__36601;
i__36569_36581 = G__36602;
continue;
}
} else {
}
}
break;
}

return combined;
}));

(shadow.lazy.load.cljs$core$IFn$_invoke$arity$2 = (function (the_loadable,call_fn){
return shadow.lazy.load.cljs$core$IFn$_invoke$arity$1(the_loadable).then(call_fn);
}));

(shadow.lazy.load.cljs$core$IFn$_invoke$arity$3 = (function (the_loadable,call_fn,err_fn){
return shadow.lazy.load.cljs$core$IFn$_invoke$arity$1(the_loadable).then(call_fn,err_fn);
}));

(shadow.lazy.load.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=shadow.lazy.js.map
