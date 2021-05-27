goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35122){
var map__35123 = p__35122;
var map__35123__$1 = cljs.core.__destructure_map(map__35123);
var m = map__35123__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35123__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35123__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35124_35322 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35125_35323 = null;
var count__35126_35324 = (0);
var i__35127_35325 = (0);
while(true){
if((i__35127_35325 < count__35126_35324)){
var f_35326 = chunk__35125_35323.cljs$core$IIndexed$_nth$arity$2(null,i__35127_35325);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35326], 0));


var G__35327 = seq__35124_35322;
var G__35328 = chunk__35125_35323;
var G__35329 = count__35126_35324;
var G__35330 = (i__35127_35325 + (1));
seq__35124_35322 = G__35327;
chunk__35125_35323 = G__35328;
count__35126_35324 = G__35329;
i__35127_35325 = G__35330;
continue;
} else {
var temp__5753__auto___35331 = cljs.core.seq(seq__35124_35322);
if(temp__5753__auto___35331){
var seq__35124_35333__$1 = temp__5753__auto___35331;
if(cljs.core.chunked_seq_QMARK_(seq__35124_35333__$1)){
var c__4649__auto___35334 = cljs.core.chunk_first(seq__35124_35333__$1);
var G__35335 = cljs.core.chunk_rest(seq__35124_35333__$1);
var G__35336 = c__4649__auto___35334;
var G__35337 = cljs.core.count(c__4649__auto___35334);
var G__35338 = (0);
seq__35124_35322 = G__35335;
chunk__35125_35323 = G__35336;
count__35126_35324 = G__35337;
i__35127_35325 = G__35338;
continue;
} else {
var f_35339 = cljs.core.first(seq__35124_35333__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35339], 0));


var G__35340 = cljs.core.next(seq__35124_35333__$1);
var G__35341 = null;
var G__35342 = (0);
var G__35343 = (0);
seq__35124_35322 = G__35340;
chunk__35125_35323 = G__35341;
count__35126_35324 = G__35342;
i__35127_35325 = G__35343;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35344 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35344], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35344)))?cljs.core.second(arglists_35344):arglists_35344)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35131_35349 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35132_35350 = null;
var count__35133_35351 = (0);
var i__35134_35352 = (0);
while(true){
if((i__35134_35352 < count__35133_35351)){
var vec__35147_35353 = chunk__35132_35350.cljs$core$IIndexed$_nth$arity$2(null,i__35134_35352);
var name_35354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147_35353,(0),null);
var map__35150_35355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147_35353,(1),null);
var map__35150_35356__$1 = cljs.core.__destructure_map(map__35150_35355);
var doc_35357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35150_35356__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35150_35356__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35354], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35359], 0));

if(cljs.core.truth_(doc_35357)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35357], 0));
} else {
}


var G__35361 = seq__35131_35349;
var G__35362 = chunk__35132_35350;
var G__35363 = count__35133_35351;
var G__35364 = (i__35134_35352 + (1));
seq__35131_35349 = G__35361;
chunk__35132_35350 = G__35362;
count__35133_35351 = G__35363;
i__35134_35352 = G__35364;
continue;
} else {
var temp__5753__auto___35365 = cljs.core.seq(seq__35131_35349);
if(temp__5753__auto___35365){
var seq__35131_35366__$1 = temp__5753__auto___35365;
if(cljs.core.chunked_seq_QMARK_(seq__35131_35366__$1)){
var c__4649__auto___35367 = cljs.core.chunk_first(seq__35131_35366__$1);
var G__35368 = cljs.core.chunk_rest(seq__35131_35366__$1);
var G__35369 = c__4649__auto___35367;
var G__35370 = cljs.core.count(c__4649__auto___35367);
var G__35371 = (0);
seq__35131_35349 = G__35368;
chunk__35132_35350 = G__35369;
count__35133_35351 = G__35370;
i__35134_35352 = G__35371;
continue;
} else {
var vec__35151_35372 = cljs.core.first(seq__35131_35366__$1);
var name_35373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35151_35372,(0),null);
var map__35154_35374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35151_35372,(1),null);
var map__35154_35375__$1 = cljs.core.__destructure_map(map__35154_35374);
var doc_35376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35154_35375__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35154_35375__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35373], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35377], 0));

if(cljs.core.truth_(doc_35376)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35376], 0));
} else {
}


var G__35378 = cljs.core.next(seq__35131_35366__$1);
var G__35379 = null;
var G__35380 = (0);
var G__35381 = (0);
seq__35131_35349 = G__35378;
chunk__35132_35350 = G__35379;
count__35133_35351 = G__35380;
i__35134_35352 = G__35381;
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
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35157 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35158 = null;
var count__35159 = (0);
var i__35160 = (0);
while(true){
if((i__35160 < count__35159)){
var role = chunk__35158.cljs$core$IIndexed$_nth$arity$2(null,i__35160);
var temp__5753__auto___35383__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35383__$1)){
var spec_35390 = temp__5753__auto___35383__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35390)], 0));
} else {
}


var G__35391 = seq__35157;
var G__35392 = chunk__35158;
var G__35393 = count__35159;
var G__35394 = (i__35160 + (1));
seq__35157 = G__35391;
chunk__35158 = G__35392;
count__35159 = G__35393;
i__35160 = G__35394;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35157);
if(temp__5753__auto____$1){
var seq__35157__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35157__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35157__$1);
var G__35395 = cljs.core.chunk_rest(seq__35157__$1);
var G__35396 = c__4649__auto__;
var G__35397 = cljs.core.count(c__4649__auto__);
var G__35398 = (0);
seq__35157 = G__35395;
chunk__35158 = G__35396;
count__35159 = G__35397;
i__35160 = G__35398;
continue;
} else {
var role = cljs.core.first(seq__35157__$1);
var temp__5753__auto___35399__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35399__$2)){
var spec_35400 = temp__5753__auto___35399__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35400)], 0));
} else {
}


var G__35401 = cljs.core.next(seq__35157__$1);
var G__35402 = null;
var G__35403 = (0);
var G__35404 = (0);
seq__35157 = G__35401;
chunk__35158 = G__35402;
count__35159 = G__35403;
i__35160 = G__35404;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35406 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35407 = cljs.core.ex_cause(t);
via = G__35406;
t = G__35407;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35166 = datafied_throwable;
var map__35166__$1 = cljs.core.__destructure_map(map__35166);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35166__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35166__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35166__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35167 = cljs.core.last(via);
var map__35167__$1 = cljs.core.__destructure_map(map__35167);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35167__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35167__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35167__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35168 = data;
var map__35168__$1 = cljs.core.__destructure_map(map__35168);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35168__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35168__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35168__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35169 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35169__$1 = cljs.core.__destructure_map(map__35169);
var top_data = map__35169__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35169__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35170 = phase;
var G__35170__$1 = (((G__35170 instanceof cljs.core.Keyword))?G__35170.fqn:null);
switch (G__35170__$1) {
case "read-source":
var map__35171 = data;
var map__35171__$1 = cljs.core.__destructure_map(map__35171);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35171__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35171__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35176 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35176__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35176,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35176);
var G__35176__$2 = (cljs.core.truth_((function (){var fexpr__35190 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35190.cljs$core$IFn$_invoke$arity$1 ? fexpr__35190.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35190.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35176__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35176__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35176__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35176__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35191 = top_data;
var G__35191__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35191,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35191);
var G__35191__$2 = (cljs.core.truth_((function (){var fexpr__35196 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35196.cljs$core$IFn$_invoke$arity$1 ? fexpr__35196.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35196.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35191__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35191__$1);
var G__35191__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35191__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35191__$2);
var G__35191__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35191__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35191__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35191__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35191__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35200 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35200,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35200,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35200,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35200,(3),null);
var G__35210 = top_data;
var G__35210__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35210,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35210);
var G__35210__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35210__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35210__$1);
var G__35210__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35210__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35210__$2);
var G__35210__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35210__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35210__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35210__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35210__$4;
}

break;
case "execution":
var vec__35242 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35242,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35242,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35242,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35242,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35165_SHARP_){
var or__4223__auto__ = (p1__35165_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__35249 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35249.cljs$core$IFn$_invoke$arity$1 ? fexpr__35249.cljs$core$IFn$_invoke$arity$1(p1__35165_SHARP_) : fexpr__35249.call(null,p1__35165_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__35253 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35253__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35253,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35253);
var G__35253__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35253__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35253__$1);
var G__35253__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35253__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35253__$2);
var G__35253__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35253__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35253__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35253__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35253__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35170__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35256){
var map__35257 = p__35256;
var map__35257__$1 = cljs.core.__destructure_map(map__35257);
var triage_data = map__35257__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35257__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35257__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35257__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35257__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35257__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35257__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35257__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35257__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35258 = phase;
var G__35258__$1 = (((G__35258 instanceof cljs.core.Keyword))?G__35258.fqn:null);
switch (G__35258__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35264 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35265 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35266 = loc;
var G__35267 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35277_35423 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35278_35424 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35279_35425 = true;
var _STAR_print_fn_STAR__temp_val__35280_35426 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35279_35425);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35280_35426);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35254_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35254_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35278_35424);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35277_35423);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35264,G__35265,G__35266,G__35267) : format.call(null,G__35264,G__35265,G__35266,G__35267));

break;
case "macroexpansion":
var G__35290 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35293 = cause_type;
var G__35294 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35295 = loc;
var G__35297 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35290,G__35293,G__35294,G__35295,G__35297) : format.call(null,G__35290,G__35293,G__35294,G__35295,G__35297));

break;
case "compile-syntax-check":
var G__35298 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35299 = cause_type;
var G__35300 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35301 = loc;
var G__35302 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35298,G__35299,G__35300,G__35301,G__35302) : format.call(null,G__35298,G__35299,G__35300,G__35301,G__35302));

break;
case "compilation":
var G__35303 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35304 = cause_type;
var G__35305 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35306 = loc;
var G__35307 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35303,G__35304,G__35305,G__35306,G__35307) : format.call(null,G__35303,G__35304,G__35305,G__35306,G__35307));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35308 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35309 = symbol;
var G__35310 = loc;
var G__35311 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35312_35428 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35313_35429 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35314_35430 = true;
var _STAR_print_fn_STAR__temp_val__35315_35431 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35314_35430);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35315_35431);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35255_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35255_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35313_35429);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35312_35428);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35308,G__35309,G__35310,G__35311) : format.call(null,G__35308,G__35309,G__35310,G__35311));
} else {
var G__35316 = "Execution error%s at %s(%s).\n%s\n";
var G__35317 = cause_type;
var G__35318 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35319 = loc;
var G__35320 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35316,G__35317,G__35318,G__35319,G__35320) : format.call(null,G__35316,G__35317,G__35318,G__35319,G__35320));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35258__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
