goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35927 = arguments.length;
var i__4830__auto___35928 = (0);
while(true){
if((i__4830__auto___35928 < len__4829__auto___35927)){
args__4835__auto__.push((arguments[i__4830__auto___35928]));

var G__35929 = (i__4830__auto___35928 + (1));
i__4830__auto___35928 = G__35929;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35798){
var G__35799 = cljs.core.first(seq35798);
var seq35798__$1 = cljs.core.next(seq35798);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35799,seq35798__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35803 = cljs.core.seq(sources);
var chunk__35804 = null;
var count__35805 = (0);
var i__35806 = (0);
while(true){
if((i__35806 < count__35805)){
var map__35813 = chunk__35804.cljs$core$IIndexed$_nth$arity$2(null,i__35806);
var map__35813__$1 = cljs.core.__destructure_map(map__35813);
var src = map__35813__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35813__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35813__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35813__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35813__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35814){var e_35930 = e35814;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35930);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35930.message)].join('')));
}

var G__35931 = seq__35803;
var G__35932 = chunk__35804;
var G__35933 = count__35805;
var G__35934 = (i__35806 + (1));
seq__35803 = G__35931;
chunk__35804 = G__35932;
count__35805 = G__35933;
i__35806 = G__35934;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35803);
if(temp__5753__auto__){
var seq__35803__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35803__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35803__$1);
var G__35935 = cljs.core.chunk_rest(seq__35803__$1);
var G__35936 = c__4649__auto__;
var G__35937 = cljs.core.count(c__4649__auto__);
var G__35938 = (0);
seq__35803 = G__35935;
chunk__35804 = G__35936;
count__35805 = G__35937;
i__35806 = G__35938;
continue;
} else {
var map__35815 = cljs.core.first(seq__35803__$1);
var map__35815__$1 = cljs.core.__destructure_map(map__35815);
var src = map__35815__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35815__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35815__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35815__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35815__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35816){var e_35939 = e35816;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35939);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35939.message)].join('')));
}

var G__35940 = cljs.core.next(seq__35803__$1);
var G__35941 = null;
var G__35942 = (0);
var G__35943 = (0);
seq__35803 = G__35940;
chunk__35804 = G__35941;
count__35805 = G__35942;
i__35806 = G__35943;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35817 = cljs.core.seq(js_requires);
var chunk__35818 = null;
var count__35819 = (0);
var i__35820 = (0);
while(true){
if((i__35820 < count__35819)){
var js_ns = chunk__35818.cljs$core$IIndexed$_nth$arity$2(null,i__35820);
var require_str_35944 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35944);


var G__35945 = seq__35817;
var G__35946 = chunk__35818;
var G__35947 = count__35819;
var G__35948 = (i__35820 + (1));
seq__35817 = G__35945;
chunk__35818 = G__35946;
count__35819 = G__35947;
i__35820 = G__35948;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35817);
if(temp__5753__auto__){
var seq__35817__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35817__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35817__$1);
var G__35949 = cljs.core.chunk_rest(seq__35817__$1);
var G__35950 = c__4649__auto__;
var G__35951 = cljs.core.count(c__4649__auto__);
var G__35952 = (0);
seq__35817 = G__35949;
chunk__35818 = G__35950;
count__35819 = G__35951;
i__35820 = G__35952;
continue;
} else {
var js_ns = cljs.core.first(seq__35817__$1);
var require_str_35953 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35953);


var G__35954 = cljs.core.next(seq__35817__$1);
var G__35955 = null;
var G__35956 = (0);
var G__35957 = (0);
seq__35817 = G__35954;
chunk__35818 = G__35955;
count__35819 = G__35956;
i__35820 = G__35957;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35822){
var map__35823 = p__35822;
var map__35823__$1 = cljs.core.__destructure_map(map__35823);
var msg = map__35823__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35823__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35823__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35824(s__35825){
return (new cljs.core.LazySeq(null,(function (){
var s__35825__$1 = s__35825;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35825__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35830 = cljs.core.first(xs__6308__auto__);
var map__35830__$1 = cljs.core.__destructure_map(map__35830);
var src = map__35830__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35830__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35830__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__35825__$1,map__35830,map__35830__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35823,map__35823__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35824_$_iter__35826(s__35827){
return (new cljs.core.LazySeq(null,((function (s__35825__$1,map__35830,map__35830__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35823,map__35823__$1,msg,info,reload_info){
return (function (){
var s__35827__$1 = s__35827;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35827__$1);
if(temp__5753__auto____$1){
var s__35827__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35827__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__35827__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__35829 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__35828 = (0);
while(true){
if((i__35828 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__35828);
cljs.core.chunk_append(b__35829,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35958 = (i__35828 + (1));
i__35828 = G__35958;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35829),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35824_$_iter__35826(cljs.core.chunk_rest(s__35827__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35829),null);
}
} else {
var warning = cljs.core.first(s__35827__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35824_$_iter__35826(cljs.core.rest(s__35827__$2)));
}
} else {
return null;
}
break;
}
});})(s__35825__$1,map__35830,map__35830__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35823,map__35823__$1,msg,info,reload_info))
,null,null));
});})(s__35825__$1,map__35830,map__35830__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35823,map__35823__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35824(cljs.core.rest(s__35825__$1)));
} else {
var G__35959 = cljs.core.rest(s__35825__$1);
s__35825__$1 = G__35959;
continue;
}
} else {
var G__35960 = cljs.core.rest(s__35825__$1);
s__35825__$1 = G__35960;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35833_35961 = cljs.core.seq(warnings);
var chunk__35834_35962 = null;
var count__35835_35963 = (0);
var i__35836_35964 = (0);
while(true){
if((i__35836_35964 < count__35835_35963)){
var map__35839_35965 = chunk__35834_35962.cljs$core$IIndexed$_nth$arity$2(null,i__35836_35964);
var map__35839_35966__$1 = cljs.core.__destructure_map(map__35839_35965);
var w_35967 = map__35839_35966__$1;
var msg_35968__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35839_35966__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35839_35966__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35839_35966__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35839_35966__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35971)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35969),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35970),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35968__$1)].join(''));


var G__35972 = seq__35833_35961;
var G__35973 = chunk__35834_35962;
var G__35974 = count__35835_35963;
var G__35975 = (i__35836_35964 + (1));
seq__35833_35961 = G__35972;
chunk__35834_35962 = G__35973;
count__35835_35963 = G__35974;
i__35836_35964 = G__35975;
continue;
} else {
var temp__5753__auto___35976 = cljs.core.seq(seq__35833_35961);
if(temp__5753__auto___35976){
var seq__35833_35977__$1 = temp__5753__auto___35976;
if(cljs.core.chunked_seq_QMARK_(seq__35833_35977__$1)){
var c__4649__auto___35978 = cljs.core.chunk_first(seq__35833_35977__$1);
var G__35979 = cljs.core.chunk_rest(seq__35833_35977__$1);
var G__35980 = c__4649__auto___35978;
var G__35981 = cljs.core.count(c__4649__auto___35978);
var G__35982 = (0);
seq__35833_35961 = G__35979;
chunk__35834_35962 = G__35980;
count__35835_35963 = G__35981;
i__35836_35964 = G__35982;
continue;
} else {
var map__35840_35983 = cljs.core.first(seq__35833_35977__$1);
var map__35840_35984__$1 = cljs.core.__destructure_map(map__35840_35983);
var w_35985 = map__35840_35984__$1;
var msg_35986__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35840_35984__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35840_35984__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35840_35984__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35840_35984__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35989)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35987),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35988),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35986__$1)].join(''));


var G__35990 = cljs.core.next(seq__35833_35977__$1);
var G__35991 = null;
var G__35992 = (0);
var G__35993 = (0);
seq__35833_35961 = G__35990;
chunk__35834_35962 = G__35991;
count__35835_35963 = G__35992;
i__35836_35964 = G__35993;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35821_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35821_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35841){
var map__35842 = p__35841;
var map__35842__$1 = cljs.core.__destructure_map(map__35842);
var msg = map__35842__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35842__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35843 = cljs.core.seq(updates);
var chunk__35845 = null;
var count__35846 = (0);
var i__35847 = (0);
while(true){
if((i__35847 < count__35846)){
var path = chunk__35845.cljs$core$IIndexed$_nth$arity$2(null,i__35847);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35877_35994 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35881_35995 = null;
var count__35882_35996 = (0);
var i__35883_35997 = (0);
while(true){
if((i__35883_35997 < count__35882_35996)){
var node_35998 = chunk__35881_35995.cljs$core$IIndexed$_nth$arity$2(null,i__35883_35997);
if(cljs.core.not(node_35998.shadow$old)){
var path_match_35999 = shadow.cljs.devtools.client.browser.match_paths(node_35998.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35999)){
var new_link_36000 = (function (){var G__35889 = node_35998.cloneNode(true);
G__35889.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35999),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35889;
})();
(node_35998.shadow$old = true);

(new_link_36000.onload = ((function (seq__35877_35994,chunk__35881_35995,count__35882_35996,i__35883_35997,seq__35843,chunk__35845,count__35846,i__35847,new_link_36000,path_match_35999,node_35998,path,map__35842,map__35842__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35998);
});})(seq__35877_35994,chunk__35881_35995,count__35882_35996,i__35883_35997,seq__35843,chunk__35845,count__35846,i__35847,new_link_36000,path_match_35999,node_35998,path,map__35842,map__35842__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35999], 0));

goog.dom.insertSiblingAfter(new_link_36000,node_35998);


var G__36001 = seq__35877_35994;
var G__36002 = chunk__35881_35995;
var G__36003 = count__35882_35996;
var G__36004 = (i__35883_35997 + (1));
seq__35877_35994 = G__36001;
chunk__35881_35995 = G__36002;
count__35882_35996 = G__36003;
i__35883_35997 = G__36004;
continue;
} else {
var G__36005 = seq__35877_35994;
var G__36006 = chunk__35881_35995;
var G__36007 = count__35882_35996;
var G__36008 = (i__35883_35997 + (1));
seq__35877_35994 = G__36005;
chunk__35881_35995 = G__36006;
count__35882_35996 = G__36007;
i__35883_35997 = G__36008;
continue;
}
} else {
var G__36009 = seq__35877_35994;
var G__36010 = chunk__35881_35995;
var G__36011 = count__35882_35996;
var G__36012 = (i__35883_35997 + (1));
seq__35877_35994 = G__36009;
chunk__35881_35995 = G__36010;
count__35882_35996 = G__36011;
i__35883_35997 = G__36012;
continue;
}
} else {
var temp__5753__auto___36013 = cljs.core.seq(seq__35877_35994);
if(temp__5753__auto___36013){
var seq__35877_36014__$1 = temp__5753__auto___36013;
if(cljs.core.chunked_seq_QMARK_(seq__35877_36014__$1)){
var c__4649__auto___36015 = cljs.core.chunk_first(seq__35877_36014__$1);
var G__36016 = cljs.core.chunk_rest(seq__35877_36014__$1);
var G__36017 = c__4649__auto___36015;
var G__36018 = cljs.core.count(c__4649__auto___36015);
var G__36019 = (0);
seq__35877_35994 = G__36016;
chunk__35881_35995 = G__36017;
count__35882_35996 = G__36018;
i__35883_35997 = G__36019;
continue;
} else {
var node_36020 = cljs.core.first(seq__35877_36014__$1);
if(cljs.core.not(node_36020.shadow$old)){
var path_match_36021 = shadow.cljs.devtools.client.browser.match_paths(node_36020.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36021)){
var new_link_36022 = (function (){var G__35890 = node_36020.cloneNode(true);
G__35890.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36021),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35890;
})();
(node_36020.shadow$old = true);

(new_link_36022.onload = ((function (seq__35877_35994,chunk__35881_35995,count__35882_35996,i__35883_35997,seq__35843,chunk__35845,count__35846,i__35847,new_link_36022,path_match_36021,node_36020,seq__35877_36014__$1,temp__5753__auto___36013,path,map__35842,map__35842__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36020);
});})(seq__35877_35994,chunk__35881_35995,count__35882_35996,i__35883_35997,seq__35843,chunk__35845,count__35846,i__35847,new_link_36022,path_match_36021,node_36020,seq__35877_36014__$1,temp__5753__auto___36013,path,map__35842,map__35842__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36021], 0));

goog.dom.insertSiblingAfter(new_link_36022,node_36020);


var G__36023 = cljs.core.next(seq__35877_36014__$1);
var G__36024 = null;
var G__36025 = (0);
var G__36026 = (0);
seq__35877_35994 = G__36023;
chunk__35881_35995 = G__36024;
count__35882_35996 = G__36025;
i__35883_35997 = G__36026;
continue;
} else {
var G__36027 = cljs.core.next(seq__35877_36014__$1);
var G__36028 = null;
var G__36029 = (0);
var G__36030 = (0);
seq__35877_35994 = G__36027;
chunk__35881_35995 = G__36028;
count__35882_35996 = G__36029;
i__35883_35997 = G__36030;
continue;
}
} else {
var G__36031 = cljs.core.next(seq__35877_36014__$1);
var G__36032 = null;
var G__36033 = (0);
var G__36034 = (0);
seq__35877_35994 = G__36031;
chunk__35881_35995 = G__36032;
count__35882_35996 = G__36033;
i__35883_35997 = G__36034;
continue;
}
}
} else {
}
}
break;
}


var G__36035 = seq__35843;
var G__36036 = chunk__35845;
var G__36037 = count__35846;
var G__36038 = (i__35847 + (1));
seq__35843 = G__36035;
chunk__35845 = G__36036;
count__35846 = G__36037;
i__35847 = G__36038;
continue;
} else {
var G__36039 = seq__35843;
var G__36040 = chunk__35845;
var G__36041 = count__35846;
var G__36042 = (i__35847 + (1));
seq__35843 = G__36039;
chunk__35845 = G__36040;
count__35846 = G__36041;
i__35847 = G__36042;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35843);
if(temp__5753__auto__){
var seq__35843__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35843__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35843__$1);
var G__36043 = cljs.core.chunk_rest(seq__35843__$1);
var G__36044 = c__4649__auto__;
var G__36045 = cljs.core.count(c__4649__auto__);
var G__36046 = (0);
seq__35843 = G__36043;
chunk__35845 = G__36044;
count__35846 = G__36045;
i__35847 = G__36046;
continue;
} else {
var path = cljs.core.first(seq__35843__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35891_36047 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35895_36048 = null;
var count__35896_36049 = (0);
var i__35897_36050 = (0);
while(true){
if((i__35897_36050 < count__35896_36049)){
var node_36051 = chunk__35895_36048.cljs$core$IIndexed$_nth$arity$2(null,i__35897_36050);
if(cljs.core.not(node_36051.shadow$old)){
var path_match_36052 = shadow.cljs.devtools.client.browser.match_paths(node_36051.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36052)){
var new_link_36053 = (function (){var G__35903 = node_36051.cloneNode(true);
G__35903.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36052),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35903;
})();
(node_36051.shadow$old = true);

(new_link_36053.onload = ((function (seq__35891_36047,chunk__35895_36048,count__35896_36049,i__35897_36050,seq__35843,chunk__35845,count__35846,i__35847,new_link_36053,path_match_36052,node_36051,path,seq__35843__$1,temp__5753__auto__,map__35842,map__35842__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36051);
});})(seq__35891_36047,chunk__35895_36048,count__35896_36049,i__35897_36050,seq__35843,chunk__35845,count__35846,i__35847,new_link_36053,path_match_36052,node_36051,path,seq__35843__$1,temp__5753__auto__,map__35842,map__35842__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36052], 0));

goog.dom.insertSiblingAfter(new_link_36053,node_36051);


var G__36054 = seq__35891_36047;
var G__36055 = chunk__35895_36048;
var G__36056 = count__35896_36049;
var G__36057 = (i__35897_36050 + (1));
seq__35891_36047 = G__36054;
chunk__35895_36048 = G__36055;
count__35896_36049 = G__36056;
i__35897_36050 = G__36057;
continue;
} else {
var G__36058 = seq__35891_36047;
var G__36059 = chunk__35895_36048;
var G__36060 = count__35896_36049;
var G__36061 = (i__35897_36050 + (1));
seq__35891_36047 = G__36058;
chunk__35895_36048 = G__36059;
count__35896_36049 = G__36060;
i__35897_36050 = G__36061;
continue;
}
} else {
var G__36062 = seq__35891_36047;
var G__36063 = chunk__35895_36048;
var G__36064 = count__35896_36049;
var G__36065 = (i__35897_36050 + (1));
seq__35891_36047 = G__36062;
chunk__35895_36048 = G__36063;
count__35896_36049 = G__36064;
i__35897_36050 = G__36065;
continue;
}
} else {
var temp__5753__auto___36066__$1 = cljs.core.seq(seq__35891_36047);
if(temp__5753__auto___36066__$1){
var seq__35891_36067__$1 = temp__5753__auto___36066__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35891_36067__$1)){
var c__4649__auto___36068 = cljs.core.chunk_first(seq__35891_36067__$1);
var G__36069 = cljs.core.chunk_rest(seq__35891_36067__$1);
var G__36070 = c__4649__auto___36068;
var G__36071 = cljs.core.count(c__4649__auto___36068);
var G__36072 = (0);
seq__35891_36047 = G__36069;
chunk__35895_36048 = G__36070;
count__35896_36049 = G__36071;
i__35897_36050 = G__36072;
continue;
} else {
var node_36073 = cljs.core.first(seq__35891_36067__$1);
if(cljs.core.not(node_36073.shadow$old)){
var path_match_36074 = shadow.cljs.devtools.client.browser.match_paths(node_36073.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36074)){
var new_link_36075 = (function (){var G__35904 = node_36073.cloneNode(true);
G__35904.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36074),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35904;
})();
(node_36073.shadow$old = true);

(new_link_36075.onload = ((function (seq__35891_36047,chunk__35895_36048,count__35896_36049,i__35897_36050,seq__35843,chunk__35845,count__35846,i__35847,new_link_36075,path_match_36074,node_36073,seq__35891_36067__$1,temp__5753__auto___36066__$1,path,seq__35843__$1,temp__5753__auto__,map__35842,map__35842__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36073);
});})(seq__35891_36047,chunk__35895_36048,count__35896_36049,i__35897_36050,seq__35843,chunk__35845,count__35846,i__35847,new_link_36075,path_match_36074,node_36073,seq__35891_36067__$1,temp__5753__auto___36066__$1,path,seq__35843__$1,temp__5753__auto__,map__35842,map__35842__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36074], 0));

goog.dom.insertSiblingAfter(new_link_36075,node_36073);


var G__36076 = cljs.core.next(seq__35891_36067__$1);
var G__36077 = null;
var G__36078 = (0);
var G__36079 = (0);
seq__35891_36047 = G__36076;
chunk__35895_36048 = G__36077;
count__35896_36049 = G__36078;
i__35897_36050 = G__36079;
continue;
} else {
var G__36080 = cljs.core.next(seq__35891_36067__$1);
var G__36081 = null;
var G__36082 = (0);
var G__36083 = (0);
seq__35891_36047 = G__36080;
chunk__35895_36048 = G__36081;
count__35896_36049 = G__36082;
i__35897_36050 = G__36083;
continue;
}
} else {
var G__36084 = cljs.core.next(seq__35891_36067__$1);
var G__36085 = null;
var G__36086 = (0);
var G__36087 = (0);
seq__35891_36047 = G__36084;
chunk__35895_36048 = G__36085;
count__35896_36049 = G__36086;
i__35897_36050 = G__36087;
continue;
}
}
} else {
}
}
break;
}


var G__36088 = cljs.core.next(seq__35843__$1);
var G__36089 = null;
var G__36090 = (0);
var G__36091 = (0);
seq__35843 = G__36088;
chunk__35845 = G__36089;
count__35846 = G__36090;
i__35847 = G__36091;
continue;
} else {
var G__36092 = cljs.core.next(seq__35843__$1);
var G__36093 = null;
var G__36094 = (0);
var G__36095 = (0);
seq__35843 = G__36092;
chunk__35845 = G__36093;
count__35846 = G__36094;
i__35847 = G__36095;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35905){
var map__35906 = p__35905;
var map__35906__$1 = cljs.core.__destructure_map(map__35906);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35906__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35907){
var map__35908 = p__35907;
var map__35908__$1 = cljs.core.__destructure_map(map__35908);
var _ = map__35908__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35908__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35909,done,error){
var map__35910 = p__35909;
var map__35910__$1 = cljs.core.__destructure_map(map__35910);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35910__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35911,done,error){
var map__35912 = p__35911;
var map__35912__$1 = cljs.core.__destructure_map(map__35912);
var msg = map__35912__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35912__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35912__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35912__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35913){
var map__35914 = p__35913;
var map__35914__$1 = cljs.core.__destructure_map(map__35914);
var src = map__35914__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35914__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35915 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35915) : done.call(null,G__35915));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35916){
var map__35917 = p__35916;
var map__35917__$1 = cljs.core.__destructure_map(map__35917);
var msg__$1 = map__35917__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35917__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35918){var ex = e35918;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35919){
var map__35920 = p__35919;
var map__35920__$1 = cljs.core.__destructure_map(map__35920);
var env = map__35920__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35920__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35921){
var map__35922 = p__35921;
var map__35922__$1 = cljs.core.__destructure_map(map__35922);
var msg = map__35922__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35922__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35923){
var map__35924 = p__35923;
var map__35924__$1 = cljs.core.__destructure_map(map__35924);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35924__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35924__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35925){
var map__35926 = p__35925;
var map__35926__$1 = cljs.core.__destructure_map(map__35926);
var svc = map__35926__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35926__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
