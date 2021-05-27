goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35547,p__35548){
var map__35549 = p__35547;
var map__35549__$1 = cljs.core.__destructure_map(map__35549);
var svc = map__35549__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35549__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35549__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35549__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35550 = p__35548;
var map__35550__$1 = cljs.core.__destructure_map(map__35550);
var msg = map__35550__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35550__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35550__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35550__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35550__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35552,p__35553){
var map__35554 = p__35552;
var map__35554__$1 = cljs.core.__destructure_map(map__35554);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35554__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35555 = p__35553;
var map__35555__$1 = cljs.core.__destructure_map(map__35555);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35555__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35556,p__35557){
var map__35575 = p__35556;
var map__35575__$1 = cljs.core.__destructure_map(map__35575);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35575__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35575__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35576 = p__35557;
var map__35576__$1 = cljs.core.__destructure_map(map__35576);
var msg = map__35576__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35576__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35577,tid){
var map__35578 = p__35577;
var map__35578__$1 = cljs.core.__destructure_map(map__35578);
var svc = map__35578__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35578__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35583 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35584 = null;
var count__35585 = (0);
var i__35586 = (0);
while(true){
if((i__35586 < count__35585)){
var vec__35599 = chunk__35584.cljs$core$IIndexed$_nth$arity$2(null,i__35586);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35599,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35599,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35617 = seq__35583;
var G__35618 = chunk__35584;
var G__35619 = count__35585;
var G__35620 = (i__35586 + (1));
seq__35583 = G__35617;
chunk__35584 = G__35618;
count__35585 = G__35619;
i__35586 = G__35620;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35583);
if(temp__5753__auto__){
var seq__35583__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35583__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35583__$1);
var G__35621 = cljs.core.chunk_rest(seq__35583__$1);
var G__35622 = c__4649__auto__;
var G__35623 = cljs.core.count(c__4649__auto__);
var G__35624 = (0);
seq__35583 = G__35621;
chunk__35584 = G__35622;
count__35585 = G__35623;
i__35586 = G__35624;
continue;
} else {
var vec__35605 = cljs.core.first(seq__35583__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35605,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35605,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35625 = cljs.core.next(seq__35583__$1);
var G__35626 = null;
var G__35627 = (0);
var G__35628 = (0);
seq__35583 = G__35625;
chunk__35584 = G__35626;
count__35585 = G__35627;
i__35586 = G__35628;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35579_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35579_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35580_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35580_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35581_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35581_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35582_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35582_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35612){
var map__35613 = p__35612;
var map__35613__$1 = cljs.core.__destructure_map(map__35613);
var svc = map__35613__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35613__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35613__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
