goog.provide('demo.components.product_listing');
demo.components.product_listing.root = (function demo$components$product_listing$root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Product Listing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4622__auto__ = (function demo$components$product_listing$root_$_iter__36659(s__36660){
return (new cljs.core.LazySeq(null,(function (){
var s__36660__$1 = s__36660;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__36660__$1);
if(temp__5753__auto__){
var s__36660__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36660__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__36660__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__36662 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__36661 = (0);
while(true){
if((i__36661 < size__4621__auto__)){
var map__36663 = cljs.core._nth(c__4620__auto__,i__36661);
var map__36663__$1 = cljs.core.__destructure_map(map__36663);
var product = map__36663__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36663__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36663__$1,new cljs.core.Keyword(null,"title","title",636505583));
cljs.core.chunk_append(b__36662,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__36661,map__36663,map__36663__$1,product,id,title,c__4620__auto__,size__4621__auto__,b__36662,s__36660__$2,temp__5753__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(demo.env.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"product-detail","product-detail",-1140703171),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"product","product",1363474257),product], 0));
});})(i__36661,map__36663,map__36663__$1,product,id,title,c__4620__auto__,size__4621__auto__,b__36662,s__36660__$2,temp__5753__auto__))
], null),title], null)], null));

var G__36665 = (i__36661 + (1));
i__36661 = G__36665;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36662),demo$components$product_listing$root_$_iter__36659(cljs.core.chunk_rest(s__36660__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36662),null);
}
} else {
var map__36664 = cljs.core.first(s__36660__$2);
var map__36664__$1 = cljs.core.__destructure_map(map__36664);
var product = map__36664__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36664__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36664__$1,new cljs.core.Keyword(null,"title","title",636505583));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__36664,map__36664__$1,product,id,title,s__36660__$2,temp__5753__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(demo.env.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"product-detail","product-detail",-1140703171),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"product","product",1363474257),product], 0));
});})(map__36664,map__36664__$1,product,id,title,s__36660__$2,temp__5753__auto__))
], null),title], null)], null),demo$components$product_listing$root_$_iter__36659(cljs.core.rest(s__36660__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"title","title",636505583),"Foo"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"title","title",636505583),"Bar"], null)], null));
})()], null)], null);
});

//# sourceMappingURL=demo.components.product_listing.js.map
