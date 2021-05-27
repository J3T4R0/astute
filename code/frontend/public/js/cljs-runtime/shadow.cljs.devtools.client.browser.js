goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36058 = arguments.length;
var i__4830__auto___36059 = (0);
while(true){
if((i__4830__auto___36059 < len__4829__auto___36058)){
args__4835__auto__.push((arguments[i__4830__auto___36059]));

var G__36060 = (i__4830__auto___36059 + (1));
i__4830__auto___36059 = G__36060;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35888){
var G__35889 = cljs.core.first(seq35888);
var seq35888__$1 = cljs.core.next(seq35888);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35889,seq35888__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35890 = cljs.core.seq(sources);
var chunk__35891 = null;
var count__35892 = (0);
var i__35893 = (0);
while(true){
if((i__35893 < count__35892)){
var map__35904 = chunk__35891.cljs$core$IIndexed$_nth$arity$2(null,i__35893);
var map__35904__$1 = cljs.core.__destructure_map(map__35904);
var src = map__35904__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35904__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35904__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35904__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35904__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35905){var e_36061 = e35905;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36061);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36061.message)].join('')));
}

var G__36062 = seq__35890;
var G__36063 = chunk__35891;
var G__36064 = count__35892;
var G__36065 = (i__35893 + (1));
seq__35890 = G__36062;
chunk__35891 = G__36063;
count__35892 = G__36064;
i__35893 = G__36065;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35890);
if(temp__5753__auto__){
var seq__35890__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35890__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35890__$1);
var G__36066 = cljs.core.chunk_rest(seq__35890__$1);
var G__36067 = c__4649__auto__;
var G__36068 = cljs.core.count(c__4649__auto__);
var G__36069 = (0);
seq__35890 = G__36066;
chunk__35891 = G__36067;
count__35892 = G__36068;
i__35893 = G__36069;
continue;
} else {
var map__35906 = cljs.core.first(seq__35890__$1);
var map__35906__$1 = cljs.core.__destructure_map(map__35906);
var src = map__35906__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35906__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35906__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35906__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35906__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35907){var e_36070 = e35907;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36070);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36070.message)].join('')));
}

var G__36071 = cljs.core.next(seq__35890__$1);
var G__36072 = null;
var G__36073 = (0);
var G__36074 = (0);
seq__35890 = G__36071;
chunk__35891 = G__36072;
count__35892 = G__36073;
i__35893 = G__36074;
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
var seq__35908 = cljs.core.seq(js_requires);
var chunk__35909 = null;
var count__35910 = (0);
var i__35911 = (0);
while(true){
if((i__35911 < count__35910)){
var js_ns = chunk__35909.cljs$core$IIndexed$_nth$arity$2(null,i__35911);
var require_str_36075 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36075);


var G__36076 = seq__35908;
var G__36077 = chunk__35909;
var G__36078 = count__35910;
var G__36079 = (i__35911 + (1));
seq__35908 = G__36076;
chunk__35909 = G__36077;
count__35910 = G__36078;
i__35911 = G__36079;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35908);
if(temp__5753__auto__){
var seq__35908__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35908__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35908__$1);
var G__36080 = cljs.core.chunk_rest(seq__35908__$1);
var G__36081 = c__4649__auto__;
var G__36082 = cljs.core.count(c__4649__auto__);
var G__36083 = (0);
seq__35908 = G__36080;
chunk__35909 = G__36081;
count__35910 = G__36082;
i__35911 = G__36083;
continue;
} else {
var js_ns = cljs.core.first(seq__35908__$1);
var require_str_36084 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36084);


var G__36085 = cljs.core.next(seq__35908__$1);
var G__36086 = null;
var G__36087 = (0);
var G__36088 = (0);
seq__35908 = G__36085;
chunk__35909 = G__36086;
count__35910 = G__36087;
i__35911 = G__36088;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35920){
var map__35921 = p__35920;
var map__35921__$1 = cljs.core.__destructure_map(map__35921);
var msg = map__35921__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35922(s__35923){
return (new cljs.core.LazySeq(null,(function (){
var s__35923__$1 = s__35923;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35923__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35928 = cljs.core.first(xs__6308__auto__);
var map__35928__$1 = cljs.core.__destructure_map(map__35928);
var src = map__35928__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__35923__$1,map__35928,map__35928__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35921,map__35921__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35922_$_iter__35924(s__35925){
return (new cljs.core.LazySeq(null,((function (s__35923__$1,map__35928,map__35928__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35921,map__35921__$1,msg,info,reload_info){
return (function (){
var s__35925__$1 = s__35925;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35925__$1);
if(temp__5753__auto____$1){
var s__35925__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35925__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__35925__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__35927 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__35926 = (0);
while(true){
if((i__35926 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__35926);
cljs.core.chunk_append(b__35927,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36090 = (i__35926 + (1));
i__35926 = G__36090;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35927),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35922_$_iter__35924(cljs.core.chunk_rest(s__35925__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35927),null);
}
} else {
var warning = cljs.core.first(s__35925__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35922_$_iter__35924(cljs.core.rest(s__35925__$2)));
}
} else {
return null;
}
break;
}
});})(s__35923__$1,map__35928,map__35928__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35921,map__35921__$1,msg,info,reload_info))
,null,null));
});})(s__35923__$1,map__35928,map__35928__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35921,map__35921__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35922(cljs.core.rest(s__35923__$1)));
} else {
var G__36093 = cljs.core.rest(s__35923__$1);
s__35923__$1 = G__36093;
continue;
}
} else {
var G__36094 = cljs.core.rest(s__35923__$1);
s__35923__$1 = G__36094;
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
var seq__35932_36096 = cljs.core.seq(warnings);
var chunk__35933_36097 = null;
var count__35934_36098 = (0);
var i__35935_36099 = (0);
while(true){
if((i__35935_36099 < count__35934_36098)){
var map__35938_36100 = chunk__35933_36097.cljs$core$IIndexed$_nth$arity$2(null,i__35935_36099);
var map__35938_36101__$1 = cljs.core.__destructure_map(map__35938_36100);
var w_36102 = map__35938_36101__$1;
var msg_36103__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35938_36101__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35938_36101__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35938_36101__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35938_36101__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36106)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36104),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36105),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36103__$1)].join(''));


var G__36108 = seq__35932_36096;
var G__36109 = chunk__35933_36097;
var G__36110 = count__35934_36098;
var G__36111 = (i__35935_36099 + (1));
seq__35932_36096 = G__36108;
chunk__35933_36097 = G__36109;
count__35934_36098 = G__36110;
i__35935_36099 = G__36111;
continue;
} else {
var temp__5753__auto___36113 = cljs.core.seq(seq__35932_36096);
if(temp__5753__auto___36113){
var seq__35932_36114__$1 = temp__5753__auto___36113;
if(cljs.core.chunked_seq_QMARK_(seq__35932_36114__$1)){
var c__4649__auto___36115 = cljs.core.chunk_first(seq__35932_36114__$1);
var G__36116 = cljs.core.chunk_rest(seq__35932_36114__$1);
var G__36117 = c__4649__auto___36115;
var G__36118 = cljs.core.count(c__4649__auto___36115);
var G__36119 = (0);
seq__35932_36096 = G__36116;
chunk__35933_36097 = G__36117;
count__35934_36098 = G__36118;
i__35935_36099 = G__36119;
continue;
} else {
var map__35939_36120 = cljs.core.first(seq__35932_36114__$1);
var map__35939_36121__$1 = cljs.core.__destructure_map(map__35939_36120);
var w_36122 = map__35939_36121__$1;
var msg_36123__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35939_36121__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35939_36121__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35939_36121__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35939_36121__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36126)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36124),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36125),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36123__$1)].join(''));


var G__36127 = cljs.core.next(seq__35932_36114__$1);
var G__36128 = null;
var G__36129 = (0);
var G__36130 = (0);
seq__35932_36096 = G__36127;
chunk__35933_36097 = G__36128;
count__35934_36098 = G__36129;
i__35935_36099 = G__36130;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35919_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35919_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35957){
var map__35960 = p__35957;
var map__35960__$1 = cljs.core.__destructure_map(map__35960);
var msg = map__35960__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35960__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35961 = cljs.core.seq(updates);
var chunk__35963 = null;
var count__35964 = (0);
var i__35965 = (0);
while(true){
if((i__35965 < count__35964)){
var path = chunk__35963.cljs$core$IIndexed$_nth$arity$2(null,i__35965);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36003_36148 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36007_36149 = null;
var count__36008_36150 = (0);
var i__36009_36151 = (0);
while(true){
if((i__36009_36151 < count__36008_36150)){
var node_36152 = chunk__36007_36149.cljs$core$IIndexed$_nth$arity$2(null,i__36009_36151);
if(cljs.core.not(node_36152.shadow$old)){
var path_match_36153 = shadow.cljs.devtools.client.browser.match_paths(node_36152.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36153)){
var new_link_36154 = (function (){var G__36015 = node_36152.cloneNode(true);
G__36015.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36153),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36015;
})();
(node_36152.shadow$old = true);

(new_link_36154.onload = ((function (seq__36003_36148,chunk__36007_36149,count__36008_36150,i__36009_36151,seq__35961,chunk__35963,count__35964,i__35965,new_link_36154,path_match_36153,node_36152,path,map__35960,map__35960__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36152);
});})(seq__36003_36148,chunk__36007_36149,count__36008_36150,i__36009_36151,seq__35961,chunk__35963,count__35964,i__35965,new_link_36154,path_match_36153,node_36152,path,map__35960,map__35960__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36153], 0));

goog.dom.insertSiblingAfter(new_link_36154,node_36152);


var G__36155 = seq__36003_36148;
var G__36156 = chunk__36007_36149;
var G__36157 = count__36008_36150;
var G__36158 = (i__36009_36151 + (1));
seq__36003_36148 = G__36155;
chunk__36007_36149 = G__36156;
count__36008_36150 = G__36157;
i__36009_36151 = G__36158;
continue;
} else {
var G__36159 = seq__36003_36148;
var G__36160 = chunk__36007_36149;
var G__36161 = count__36008_36150;
var G__36162 = (i__36009_36151 + (1));
seq__36003_36148 = G__36159;
chunk__36007_36149 = G__36160;
count__36008_36150 = G__36161;
i__36009_36151 = G__36162;
continue;
}
} else {
var G__36163 = seq__36003_36148;
var G__36164 = chunk__36007_36149;
var G__36165 = count__36008_36150;
var G__36166 = (i__36009_36151 + (1));
seq__36003_36148 = G__36163;
chunk__36007_36149 = G__36164;
count__36008_36150 = G__36165;
i__36009_36151 = G__36166;
continue;
}
} else {
var temp__5753__auto___36167 = cljs.core.seq(seq__36003_36148);
if(temp__5753__auto___36167){
var seq__36003_36168__$1 = temp__5753__auto___36167;
if(cljs.core.chunked_seq_QMARK_(seq__36003_36168__$1)){
var c__4649__auto___36169 = cljs.core.chunk_first(seq__36003_36168__$1);
var G__36170 = cljs.core.chunk_rest(seq__36003_36168__$1);
var G__36171 = c__4649__auto___36169;
var G__36172 = cljs.core.count(c__4649__auto___36169);
var G__36173 = (0);
seq__36003_36148 = G__36170;
chunk__36007_36149 = G__36171;
count__36008_36150 = G__36172;
i__36009_36151 = G__36173;
continue;
} else {
var node_36174 = cljs.core.first(seq__36003_36168__$1);
if(cljs.core.not(node_36174.shadow$old)){
var path_match_36175 = shadow.cljs.devtools.client.browser.match_paths(node_36174.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36175)){
var new_link_36176 = (function (){var G__36016 = node_36174.cloneNode(true);
G__36016.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36175),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36016;
})();
(node_36174.shadow$old = true);

(new_link_36176.onload = ((function (seq__36003_36148,chunk__36007_36149,count__36008_36150,i__36009_36151,seq__35961,chunk__35963,count__35964,i__35965,new_link_36176,path_match_36175,node_36174,seq__36003_36168__$1,temp__5753__auto___36167,path,map__35960,map__35960__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36174);
});})(seq__36003_36148,chunk__36007_36149,count__36008_36150,i__36009_36151,seq__35961,chunk__35963,count__35964,i__35965,new_link_36176,path_match_36175,node_36174,seq__36003_36168__$1,temp__5753__auto___36167,path,map__35960,map__35960__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36175], 0));

goog.dom.insertSiblingAfter(new_link_36176,node_36174);


var G__36179 = cljs.core.next(seq__36003_36168__$1);
var G__36180 = null;
var G__36181 = (0);
var G__36182 = (0);
seq__36003_36148 = G__36179;
chunk__36007_36149 = G__36180;
count__36008_36150 = G__36181;
i__36009_36151 = G__36182;
continue;
} else {
var G__36184 = cljs.core.next(seq__36003_36168__$1);
var G__36185 = null;
var G__36186 = (0);
var G__36187 = (0);
seq__36003_36148 = G__36184;
chunk__36007_36149 = G__36185;
count__36008_36150 = G__36186;
i__36009_36151 = G__36187;
continue;
}
} else {
var G__36189 = cljs.core.next(seq__36003_36168__$1);
var G__36190 = null;
var G__36191 = (0);
var G__36192 = (0);
seq__36003_36148 = G__36189;
chunk__36007_36149 = G__36190;
count__36008_36150 = G__36191;
i__36009_36151 = G__36192;
continue;
}
}
} else {
}
}
break;
}


var G__36193 = seq__35961;
var G__36194 = chunk__35963;
var G__36195 = count__35964;
var G__36196 = (i__35965 + (1));
seq__35961 = G__36193;
chunk__35963 = G__36194;
count__35964 = G__36195;
i__35965 = G__36196;
continue;
} else {
var G__36197 = seq__35961;
var G__36198 = chunk__35963;
var G__36199 = count__35964;
var G__36200 = (i__35965 + (1));
seq__35961 = G__36197;
chunk__35963 = G__36198;
count__35964 = G__36199;
i__35965 = G__36200;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35961);
if(temp__5753__auto__){
var seq__35961__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35961__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35961__$1);
var G__36201 = cljs.core.chunk_rest(seq__35961__$1);
var G__36202 = c__4649__auto__;
var G__36203 = cljs.core.count(c__4649__auto__);
var G__36204 = (0);
seq__35961 = G__36201;
chunk__35963 = G__36202;
count__35964 = G__36203;
i__35965 = G__36204;
continue;
} else {
var path = cljs.core.first(seq__35961__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36017_36208 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36021_36209 = null;
var count__36022_36210 = (0);
var i__36023_36211 = (0);
while(true){
if((i__36023_36211 < count__36022_36210)){
var node_36212 = chunk__36021_36209.cljs$core$IIndexed$_nth$arity$2(null,i__36023_36211);
if(cljs.core.not(node_36212.shadow$old)){
var path_match_36213 = shadow.cljs.devtools.client.browser.match_paths(node_36212.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36213)){
var new_link_36214 = (function (){var G__36029 = node_36212.cloneNode(true);
G__36029.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36213),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36029;
})();
(node_36212.shadow$old = true);

(new_link_36214.onload = ((function (seq__36017_36208,chunk__36021_36209,count__36022_36210,i__36023_36211,seq__35961,chunk__35963,count__35964,i__35965,new_link_36214,path_match_36213,node_36212,path,seq__35961__$1,temp__5753__auto__,map__35960,map__35960__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36212);
});})(seq__36017_36208,chunk__36021_36209,count__36022_36210,i__36023_36211,seq__35961,chunk__35963,count__35964,i__35965,new_link_36214,path_match_36213,node_36212,path,seq__35961__$1,temp__5753__auto__,map__35960,map__35960__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36213], 0));

goog.dom.insertSiblingAfter(new_link_36214,node_36212);


var G__36218 = seq__36017_36208;
var G__36219 = chunk__36021_36209;
var G__36220 = count__36022_36210;
var G__36221 = (i__36023_36211 + (1));
seq__36017_36208 = G__36218;
chunk__36021_36209 = G__36219;
count__36022_36210 = G__36220;
i__36023_36211 = G__36221;
continue;
} else {
var G__36222 = seq__36017_36208;
var G__36223 = chunk__36021_36209;
var G__36224 = count__36022_36210;
var G__36225 = (i__36023_36211 + (1));
seq__36017_36208 = G__36222;
chunk__36021_36209 = G__36223;
count__36022_36210 = G__36224;
i__36023_36211 = G__36225;
continue;
}
} else {
var G__36227 = seq__36017_36208;
var G__36228 = chunk__36021_36209;
var G__36229 = count__36022_36210;
var G__36230 = (i__36023_36211 + (1));
seq__36017_36208 = G__36227;
chunk__36021_36209 = G__36228;
count__36022_36210 = G__36229;
i__36023_36211 = G__36230;
continue;
}
} else {
var temp__5753__auto___36231__$1 = cljs.core.seq(seq__36017_36208);
if(temp__5753__auto___36231__$1){
var seq__36017_36232__$1 = temp__5753__auto___36231__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36017_36232__$1)){
var c__4649__auto___36233 = cljs.core.chunk_first(seq__36017_36232__$1);
var G__36235 = cljs.core.chunk_rest(seq__36017_36232__$1);
var G__36236 = c__4649__auto___36233;
var G__36237 = cljs.core.count(c__4649__auto___36233);
var G__36238 = (0);
seq__36017_36208 = G__36235;
chunk__36021_36209 = G__36236;
count__36022_36210 = G__36237;
i__36023_36211 = G__36238;
continue;
} else {
var node_36239 = cljs.core.first(seq__36017_36232__$1);
if(cljs.core.not(node_36239.shadow$old)){
var path_match_36240 = shadow.cljs.devtools.client.browser.match_paths(node_36239.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36240)){
var new_link_36241 = (function (){var G__36030 = node_36239.cloneNode(true);
G__36030.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36240),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36030;
})();
(node_36239.shadow$old = true);

(new_link_36241.onload = ((function (seq__36017_36208,chunk__36021_36209,count__36022_36210,i__36023_36211,seq__35961,chunk__35963,count__35964,i__35965,new_link_36241,path_match_36240,node_36239,seq__36017_36232__$1,temp__5753__auto___36231__$1,path,seq__35961__$1,temp__5753__auto__,map__35960,map__35960__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36239);
});})(seq__36017_36208,chunk__36021_36209,count__36022_36210,i__36023_36211,seq__35961,chunk__35963,count__35964,i__35965,new_link_36241,path_match_36240,node_36239,seq__36017_36232__$1,temp__5753__auto___36231__$1,path,seq__35961__$1,temp__5753__auto__,map__35960,map__35960__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36240], 0));

goog.dom.insertSiblingAfter(new_link_36241,node_36239);


var G__36242 = cljs.core.next(seq__36017_36232__$1);
var G__36243 = null;
var G__36244 = (0);
var G__36245 = (0);
seq__36017_36208 = G__36242;
chunk__36021_36209 = G__36243;
count__36022_36210 = G__36244;
i__36023_36211 = G__36245;
continue;
} else {
var G__36246 = cljs.core.next(seq__36017_36232__$1);
var G__36247 = null;
var G__36248 = (0);
var G__36249 = (0);
seq__36017_36208 = G__36246;
chunk__36021_36209 = G__36247;
count__36022_36210 = G__36248;
i__36023_36211 = G__36249;
continue;
}
} else {
var G__36250 = cljs.core.next(seq__36017_36232__$1);
var G__36251 = null;
var G__36252 = (0);
var G__36253 = (0);
seq__36017_36208 = G__36250;
chunk__36021_36209 = G__36251;
count__36022_36210 = G__36252;
i__36023_36211 = G__36253;
continue;
}
}
} else {
}
}
break;
}


var G__36254 = cljs.core.next(seq__35961__$1);
var G__36255 = null;
var G__36256 = (0);
var G__36257 = (0);
seq__35961 = G__36254;
chunk__35963 = G__36255;
count__35964 = G__36256;
i__35965 = G__36257;
continue;
} else {
var G__36258 = cljs.core.next(seq__35961__$1);
var G__36259 = null;
var G__36260 = (0);
var G__36261 = (0);
seq__35961 = G__36258;
chunk__35963 = G__36259;
count__35964 = G__36260;
i__35965 = G__36261;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36033){
var map__36034 = p__36033;
var map__36034__$1 = cljs.core.__destructure_map(map__36034);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36034__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36036){
var map__36037 = p__36036;
var map__36037__$1 = cljs.core.__destructure_map(map__36037);
var _ = map__36037__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36037__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36038,done,error){
var map__36039 = p__36038;
var map__36039__$1 = cljs.core.__destructure_map(map__36039);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36039__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36040,done,error){
var map__36041 = p__36040;
var map__36041__$1 = cljs.core.__destructure_map(map__36041);
var msg = map__36041__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36041__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36041__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36041__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36043){
var map__36044 = p__36043;
var map__36044__$1 = cljs.core.__destructure_map(map__36044);
var src = map__36044__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36044__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36045 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36045) : done.call(null,G__36045));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36046){
var map__36047 = p__36046;
var map__36047__$1 = cljs.core.__destructure_map(map__36047);
var msg__$1 = map__36047__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36047__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36049){var ex = e36049;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36050){
var map__36051 = p__36050;
var map__36051__$1 = cljs.core.__destructure_map(map__36051);
var env = map__36051__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36051__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36052){
var map__36053 = p__36052;
var map__36053__$1 = cljs.core.__destructure_map(map__36053);
var msg = map__36053__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36053__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36054){
var map__36055 = p__36054;
var map__36055__$1 = cljs.core.__destructure_map(map__36055);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36055__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36055__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__36056){
var map__36057 = p__36056;
var map__36057__$1 = cljs.core.__destructure_map(map__36057);
var svc = map__36057__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36057__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
