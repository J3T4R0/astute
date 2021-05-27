goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__35895__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35896__i = 0, G__35896__a = new Array(arguments.length -  0);
while (G__35896__i < G__35896__a.length) {G__35896__a[G__35896__i] = arguments[G__35896__i + 0]; ++G__35896__i;}
  args = new cljs.core.IndexedSeq(G__35896__a,0,null);
} 
return G__35895__delegate.call(this,args);};
G__35895.cljs$lang$maxFixedArity = 0;
G__35895.cljs$lang$applyTo = (function (arglist__35897){
var args = cljs.core.seq(arglist__35897);
return G__35895__delegate(args);
});
G__35895.cljs$core$IFn$_invoke$arity$variadic = G__35895__delegate;
return G__35895;
})()
);

(o.error = (function() { 
var G__35898__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35898 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35899__i = 0, G__35899__a = new Array(arguments.length -  0);
while (G__35899__i < G__35899__a.length) {G__35899__a[G__35899__i] = arguments[G__35899__i + 0]; ++G__35899__i;}
  args = new cljs.core.IndexedSeq(G__35899__a,0,null);
} 
return G__35898__delegate.call(this,args);};
G__35898.cljs$lang$maxFixedArity = 0;
G__35898.cljs$lang$applyTo = (function (arglist__35900){
var args = cljs.core.seq(arglist__35900);
return G__35898__delegate(args);
});
G__35898.cljs$core$IFn$_invoke$arity$variadic = G__35898__delegate;
return G__35898;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
