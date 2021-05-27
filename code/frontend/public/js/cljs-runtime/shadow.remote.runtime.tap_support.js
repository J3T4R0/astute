goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35569,p__35570){
var map__35571 = p__35569;
var map__35571__$1 = cljs.core.__destructure_map(map__35571);
var svc = map__35571__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35571__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35571__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35571__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35572 = p__35570;
var map__35572__$1 = cljs.core.__destructure_map(map__35572);
var msg = map__35572__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35572__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35572__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35572__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35572__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35575,p__35576){
var map__35577 = p__35575;
var map__35577__$1 = cljs.core.__destructure_map(map__35577);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35577__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35578 = p__35576;
var map__35578__$1 = cljs.core.__destructure_map(map__35578);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35578__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35586,p__35587){
var map__35588 = p__35586;
var map__35588__$1 = cljs.core.__destructure_map(map__35588);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35588__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35588__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35589 = p__35587;
var map__35589__$1 = cljs.core.__destructure_map(map__35589);
var msg = map__35589__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35589__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35590,tid){
var map__35591 = p__35590;
var map__35591__$1 = cljs.core.__destructure_map(map__35591);
var svc = map__35591__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35591__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35599 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35600 = null;
var count__35601 = (0);
var i__35602 = (0);
while(true){
if((i__35602 < count__35601)){
var vec__35609 = chunk__35600.cljs$core$IIndexed$_nth$arity$2(null,i__35602);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35609,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35609,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35634 = seq__35599;
var G__35635 = chunk__35600;
var G__35636 = count__35601;
var G__35637 = (i__35602 + (1));
seq__35599 = G__35634;
chunk__35600 = G__35635;
count__35601 = G__35636;
i__35602 = G__35637;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35599);
if(temp__5753__auto__){
var seq__35599__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35599__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35599__$1);
var G__35638 = cljs.core.chunk_rest(seq__35599__$1);
var G__35639 = c__4649__auto__;
var G__35640 = cljs.core.count(c__4649__auto__);
var G__35641 = (0);
seq__35599 = G__35638;
chunk__35600 = G__35639;
count__35601 = G__35640;
i__35602 = G__35641;
continue;
} else {
var vec__35612 = cljs.core.first(seq__35599__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35612,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35612,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35642 = cljs.core.next(seq__35599__$1);
var G__35643 = null;
var G__35644 = (0);
var G__35645 = (0);
seq__35599 = G__35642;
chunk__35600 = G__35643;
count__35601 = G__35644;
i__35602 = G__35645;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35595_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35595_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35596_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35596_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35597_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35597_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35598_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35598_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35632){
var map__35633 = p__35632;
var map__35633__$1 = cljs.core.__destructure_map(map__35633);
var svc = map__35633__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35633__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35633__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
