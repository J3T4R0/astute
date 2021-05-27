goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33811,res){
var map__33812 = p__33811;
var map__33812__$1 = cljs.core.__destructure_map(map__33812);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33812__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33812__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33813 = res;
var G__33813__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33813,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33813);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33813__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33813__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33819 = arguments.length;
switch (G__33819) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33825,msg,handlers,timeout_after_ms){
var map__33826 = p__33825;
var map__33826__$1 = cljs.core.__destructure_map(map__33826);
var runtime = map__33826__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33826__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___34087 = arguments.length;
var i__4830__auto___34091 = (0);
while(true){
if((i__4830__auto___34091 < len__4829__auto___34087)){
args__4835__auto__.push((arguments[i__4830__auto___34091]));

var G__34092 = (i__4830__auto___34091 + (1));
i__4830__auto___34091 = G__34092;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33831,ev,args){
var map__33832 = p__33831;
var map__33832__$1 = cljs.core.__destructure_map(map__33832);
var runtime = map__33832__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33832__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33833 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33836 = null;
var count__33837 = (0);
var i__33838 = (0);
while(true){
if((i__33838 < count__33837)){
var ext = chunk__33836.cljs$core$IIndexed$_nth$arity$2(null,i__33838);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34097 = seq__33833;
var G__34098 = chunk__33836;
var G__34099 = count__33837;
var G__34100 = (i__33838 + (1));
seq__33833 = G__34097;
chunk__33836 = G__34098;
count__33837 = G__34099;
i__33838 = G__34100;
continue;
} else {
var G__34101 = seq__33833;
var G__34102 = chunk__33836;
var G__34103 = count__33837;
var G__34104 = (i__33838 + (1));
seq__33833 = G__34101;
chunk__33836 = G__34102;
count__33837 = G__34103;
i__33838 = G__34104;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33833);
if(temp__5753__auto__){
var seq__33833__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33833__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__33833__$1);
var G__34106 = cljs.core.chunk_rest(seq__33833__$1);
var G__34107 = c__4649__auto__;
var G__34108 = cljs.core.count(c__4649__auto__);
var G__34109 = (0);
seq__33833 = G__34106;
chunk__33836 = G__34107;
count__33837 = G__34108;
i__33838 = G__34109;
continue;
} else {
var ext = cljs.core.first(seq__33833__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34110 = cljs.core.next(seq__33833__$1);
var G__34111 = null;
var G__34112 = (0);
var G__34113 = (0);
seq__33833 = G__34110;
chunk__33836 = G__34111;
count__33837 = G__34112;
i__33838 = G__34113;
continue;
} else {
var G__34114 = cljs.core.next(seq__33833__$1);
var G__34115 = null;
var G__34116 = (0);
var G__34117 = (0);
seq__33833 = G__34114;
chunk__33836 = G__34115;
count__33837 = G__34116;
i__33838 = G__34117;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33827){
var G__33829 = cljs.core.first(seq33827);
var seq33827__$1 = cljs.core.next(seq33827);
var G__33830 = cljs.core.first(seq33827__$1);
var seq33827__$2 = cljs.core.next(seq33827__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33829,G__33830,seq33827__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33852,p__33853){
var map__33855 = p__33852;
var map__33855__$1 = cljs.core.__destructure_map(map__33855);
var runtime = map__33855__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33855__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33859 = p__33853;
var map__33859__$1 = cljs.core.__destructure_map(map__33859);
var msg = map__33859__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33859__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33863 = cljs.core.deref(state_ref);
var map__33863__$1 = cljs.core.__destructure_map(map__33863);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33863__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33863__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33889){
var map__33890 = p__33889;
var map__33890__$1 = cljs.core.__destructure_map(map__33890);
var runtime = map__33890__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33890__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33893,msg){
var map__33895 = p__33893;
var map__33895__$1 = cljs.core.__destructure_map(map__33895);
var runtime = map__33895__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33895__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33923,key,p__33924){
var map__33930 = p__33923;
var map__33930__$1 = cljs.core.__destructure_map(map__33930);
var state = map__33930__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33930__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33931 = p__33924;
var map__33931__$1 = cljs.core.__destructure_map(map__33931);
var spec = map__33931__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33931__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33950,key,spec){
var map__33952 = p__33950;
var map__33952__$1 = cljs.core.__destructure_map(map__33952);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33952__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33955_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33955_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33956_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33956_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33957_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33957_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33959_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33959_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33960_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33960_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33963,key){
var map__33967 = p__33963;
var map__33967__$1 = cljs.core.__destructure_map(map__33967);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33967__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33969,msg){
var map__33987 = p__33969;
var map__33987__$1 = cljs.core.__destructure_map(map__33987);
var runtime = map__33987__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33987__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33989,p__33990){
var map__33991 = p__33989;
var map__33991__$1 = cljs.core.__destructure_map(map__33991);
var runtime = map__33991__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33991__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33992 = p__33990;
var map__33992__$1 = cljs.core.__destructure_map(map__33992);
var msg = map__33992__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33992__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33992__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33994 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33996 = null;
var count__33997 = (0);
var i__33998 = (0);
while(true){
if((i__33998 < count__33997)){
var map__34002 = chunk__33996.cljs$core$IIndexed$_nth$arity$2(null,i__33998);
var map__34002__$1 = cljs.core.__destructure_map(map__34002);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34002__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34239 = seq__33994;
var G__34240 = chunk__33996;
var G__34241 = count__33997;
var G__34242 = (i__33998 + (1));
seq__33994 = G__34239;
chunk__33996 = G__34240;
count__33997 = G__34241;
i__33998 = G__34242;
continue;
} else {
var G__34243 = seq__33994;
var G__34244 = chunk__33996;
var G__34245 = count__33997;
var G__34246 = (i__33998 + (1));
seq__33994 = G__34243;
chunk__33996 = G__34244;
count__33997 = G__34245;
i__33998 = G__34246;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33994);
if(temp__5753__auto__){
var seq__33994__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33994__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__33994__$1);
var G__34247 = cljs.core.chunk_rest(seq__33994__$1);
var G__34248 = c__4649__auto__;
var G__34249 = cljs.core.count(c__4649__auto__);
var G__34250 = (0);
seq__33994 = G__34247;
chunk__33996 = G__34248;
count__33997 = G__34249;
i__33998 = G__34250;
continue;
} else {
var map__34037 = cljs.core.first(seq__33994__$1);
var map__34037__$1 = cljs.core.__destructure_map(map__34037);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34037__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34251 = cljs.core.next(seq__33994__$1);
var G__34252 = null;
var G__34253 = (0);
var G__34254 = (0);
seq__33994 = G__34251;
chunk__33996 = G__34252;
count__33997 = G__34253;
i__33998 = G__34254;
continue;
} else {
var G__34255 = cljs.core.next(seq__33994__$1);
var G__34256 = null;
var G__34257 = (0);
var G__34258 = (0);
seq__33994 = G__34255;
chunk__33996 = G__34256;
count__33997 = G__34257;
i__33998 = G__34258;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
