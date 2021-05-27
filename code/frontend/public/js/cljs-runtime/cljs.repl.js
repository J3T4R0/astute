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
var seq__35124_35337 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35125_35338 = null;
var count__35126_35339 = (0);
var i__35127_35340 = (0);
while(true){
if((i__35127_35340 < count__35126_35339)){
var f_35341 = chunk__35125_35338.cljs$core$IIndexed$_nth$arity$2(null,i__35127_35340);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35341], 0));


var G__35342 = seq__35124_35337;
var G__35343 = chunk__35125_35338;
var G__35344 = count__35126_35339;
var G__35345 = (i__35127_35340 + (1));
seq__35124_35337 = G__35342;
chunk__35125_35338 = G__35343;
count__35126_35339 = G__35344;
i__35127_35340 = G__35345;
continue;
} else {
var temp__5753__auto___35346 = cljs.core.seq(seq__35124_35337);
if(temp__5753__auto___35346){
var seq__35124_35347__$1 = temp__5753__auto___35346;
if(cljs.core.chunked_seq_QMARK_(seq__35124_35347__$1)){
var c__4649__auto___35348 = cljs.core.chunk_first(seq__35124_35347__$1);
var G__35349 = cljs.core.chunk_rest(seq__35124_35347__$1);
var G__35350 = c__4649__auto___35348;
var G__35351 = cljs.core.count(c__4649__auto___35348);
var G__35352 = (0);
seq__35124_35337 = G__35349;
chunk__35125_35338 = G__35350;
count__35126_35339 = G__35351;
i__35127_35340 = G__35352;
continue;
} else {
var f_35353 = cljs.core.first(seq__35124_35347__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35353], 0));


var G__35354 = cljs.core.next(seq__35124_35347__$1);
var G__35355 = null;
var G__35356 = (0);
var G__35357 = (0);
seq__35124_35337 = G__35354;
chunk__35125_35338 = G__35355;
count__35126_35339 = G__35356;
i__35127_35340 = G__35357;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35358 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35358], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35358)))?cljs.core.second(arglists_35358):arglists_35358)], 0));
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
var seq__35131_35359 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35132_35360 = null;
var count__35133_35361 = (0);
var i__35134_35362 = (0);
while(true){
if((i__35134_35362 < count__35133_35361)){
var vec__35152_35363 = chunk__35132_35360.cljs$core$IIndexed$_nth$arity$2(null,i__35134_35362);
var name_35364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35152_35363,(0),null);
var map__35155_35365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35152_35363,(1),null);
var map__35155_35366__$1 = cljs.core.__destructure_map(map__35155_35365);
var doc_35367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35155_35366__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35155_35366__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35364], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35368], 0));

if(cljs.core.truth_(doc_35367)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35367], 0));
} else {
}


var G__35369 = seq__35131_35359;
var G__35370 = chunk__35132_35360;
var G__35371 = count__35133_35361;
var G__35372 = (i__35134_35362 + (1));
seq__35131_35359 = G__35369;
chunk__35132_35360 = G__35370;
count__35133_35361 = G__35371;
i__35134_35362 = G__35372;
continue;
} else {
var temp__5753__auto___35373 = cljs.core.seq(seq__35131_35359);
if(temp__5753__auto___35373){
var seq__35131_35374__$1 = temp__5753__auto___35373;
if(cljs.core.chunked_seq_QMARK_(seq__35131_35374__$1)){
var c__4649__auto___35375 = cljs.core.chunk_first(seq__35131_35374__$1);
var G__35376 = cljs.core.chunk_rest(seq__35131_35374__$1);
var G__35377 = c__4649__auto___35375;
var G__35378 = cljs.core.count(c__4649__auto___35375);
var G__35379 = (0);
seq__35131_35359 = G__35376;
chunk__35132_35360 = G__35377;
count__35133_35361 = G__35378;
i__35134_35362 = G__35379;
continue;
} else {
var vec__35156_35380 = cljs.core.first(seq__35131_35374__$1);
var name_35381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35156_35380,(0),null);
var map__35159_35382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35156_35380,(1),null);
var map__35159_35383__$1 = cljs.core.__destructure_map(map__35159_35382);
var doc_35384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35159_35383__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35159_35383__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35381], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35385], 0));

if(cljs.core.truth_(doc_35384)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35384], 0));
} else {
}


var G__35391 = cljs.core.next(seq__35131_35374__$1);
var G__35392 = null;
var G__35393 = (0);
var G__35394 = (0);
seq__35131_35359 = G__35391;
chunk__35132_35360 = G__35392;
count__35133_35361 = G__35393;
i__35134_35362 = G__35394;
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

var seq__35177 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35178 = null;
var count__35179 = (0);
var i__35180 = (0);
while(true){
if((i__35180 < count__35179)){
var role = chunk__35178.cljs$core$IIndexed$_nth$arity$2(null,i__35180);
var temp__5753__auto___35396__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35396__$1)){
var spec_35397 = temp__5753__auto___35396__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35397)], 0));
} else {
}


var G__35398 = seq__35177;
var G__35399 = chunk__35178;
var G__35400 = count__35179;
var G__35401 = (i__35180 + (1));
seq__35177 = G__35398;
chunk__35178 = G__35399;
count__35179 = G__35400;
i__35180 = G__35401;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35177);
if(temp__5753__auto____$1){
var seq__35177__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35177__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35177__$1);
var G__35402 = cljs.core.chunk_rest(seq__35177__$1);
var G__35403 = c__4649__auto__;
var G__35404 = cljs.core.count(c__4649__auto__);
var G__35405 = (0);
seq__35177 = G__35402;
chunk__35178 = G__35403;
count__35179 = G__35404;
i__35180 = G__35405;
continue;
} else {
var role = cljs.core.first(seq__35177__$1);
var temp__5753__auto___35406__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35406__$2)){
var spec_35407 = temp__5753__auto___35406__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35407)], 0));
} else {
}


var G__35408 = cljs.core.next(seq__35177__$1);
var G__35409 = null;
var G__35410 = (0);
var G__35411 = (0);
seq__35177 = G__35408;
chunk__35178 = G__35409;
count__35179 = G__35410;
i__35180 = G__35411;
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
var G__35417 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35418 = cljs.core.ex_cause(t);
via = G__35417;
t = G__35418;
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
var map__35267 = datafied_throwable;
var map__35267__$1 = cljs.core.__destructure_map(map__35267);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35267__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35267__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35267__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35268 = cljs.core.last(via);
var map__35268__$1 = cljs.core.__destructure_map(map__35268);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35268__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35268__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35268__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35269 = data;
var map__35269__$1 = cljs.core.__destructure_map(map__35269);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35269__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35269__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35269__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35270 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35270__$1 = cljs.core.__destructure_map(map__35270);
var top_data = map__35270__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35270__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35271 = phase;
var G__35271__$1 = (((G__35271 instanceof cljs.core.Keyword))?G__35271.fqn:null);
switch (G__35271__$1) {
case "read-source":
var map__35272 = data;
var map__35272__$1 = cljs.core.__destructure_map(map__35272);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35272__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35273 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35273__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35273,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35273);
var G__35273__$2 = (cljs.core.truth_((function (){var fexpr__35274 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35274.cljs$core$IFn$_invoke$arity$1 ? fexpr__35274.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35274.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35273__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35273__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35273__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35273__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35275 = top_data;
var G__35275__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35275,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35275);
var G__35275__$2 = (cljs.core.truth_((function (){var fexpr__35276 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35276.cljs$core$IFn$_invoke$arity$1 ? fexpr__35276.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35276.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35275__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35275__$1);
var G__35275__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35275__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35275__$2);
var G__35275__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35275__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35275__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35275__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35275__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35277 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35277,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35277,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35277,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35277,(3),null);
var G__35284 = top_data;
var G__35284__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35284,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35284);
var G__35284__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35284__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35284__$1);
var G__35284__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35284__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35284__$2);
var G__35284__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35284__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35284__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35284__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35284__$4;
}

break;
case "execution":
var vec__35289 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35289,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35289,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35289,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35289,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35265_SHARP_){
var or__4223__auto__ = (p1__35265_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__35292 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35292.cljs$core$IFn$_invoke$arity$1 ? fexpr__35292.cljs$core$IFn$_invoke$arity$1(p1__35265_SHARP_) : fexpr__35292.call(null,p1__35265_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__35293 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35293__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35293,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35293);
var G__35293__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35293__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35293__$1);
var G__35293__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35293__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35293__$2);
var G__35293__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35293__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35293__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35293__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35293__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35271__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35296){
var map__35297 = p__35296;
var map__35297__$1 = cljs.core.__destructure_map(map__35297);
var triage_data = map__35297__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35297__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35297__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35297__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35297__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35297__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35297__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35297__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35297__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35298 = phase;
var G__35298__$1 = (((G__35298 instanceof cljs.core.Keyword))?G__35298.fqn:null);
switch (G__35298__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35300 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35301 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35302 = loc;
var G__35303 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35304_35431 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35305_35432 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35306_35433 = true;
var _STAR_print_fn_STAR__temp_val__35307_35434 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35306_35433);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35307_35434);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35294_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35294_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35305_35432);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35304_35431);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35300,G__35301,G__35302,G__35303) : format.call(null,G__35300,G__35301,G__35302,G__35303));

break;
case "macroexpansion":
var G__35308 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35309 = cause_type;
var G__35310 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35311 = loc;
var G__35312 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35308,G__35309,G__35310,G__35311,G__35312) : format.call(null,G__35308,G__35309,G__35310,G__35311,G__35312));

break;
case "compile-syntax-check":
var G__35313 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35314 = cause_type;
var G__35315 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35316 = loc;
var G__35317 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35313,G__35314,G__35315,G__35316,G__35317) : format.call(null,G__35313,G__35314,G__35315,G__35316,G__35317));

break;
case "compilation":
var G__35318 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35319 = cause_type;
var G__35320 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35321 = loc;
var G__35322 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35318,G__35319,G__35320,G__35321,G__35322) : format.call(null,G__35318,G__35319,G__35320,G__35321,G__35322));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35323 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35324 = symbol;
var G__35325 = loc;
var G__35326 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35327_35438 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35328_35439 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35329_35440 = true;
var _STAR_print_fn_STAR__temp_val__35330_35441 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35329_35440);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35330_35441);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35295_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35295_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35328_35439);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35327_35438);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35323,G__35324,G__35325,G__35326) : format.call(null,G__35323,G__35324,G__35325,G__35326));
} else {
var G__35332 = "Execution error%s at %s(%s).\n%s\n";
var G__35333 = cause_type;
var G__35334 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35335 = loc;
var G__35336 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35332,G__35333,G__35334,G__35335,G__35336) : format.call(null,G__35332,G__35333,G__35334,G__35335,G__35336));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35298__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
