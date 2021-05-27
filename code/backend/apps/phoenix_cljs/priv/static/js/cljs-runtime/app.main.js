goog.provide('app.main');
app.main.value_a = (1);
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.value_b !== 'undefined')){
} else {
app.main.value_b = (2);
}
app.main.main_BANG_ = (function app$main$main_BANG_(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["App loaded!"], 0));
});
app.main.reload_BANG_ = (function app$main$reload_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Code updated."], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Trying values:",app.main.value_a,app.main.value_b], 0));
});

//# sourceMappingURL=app.main.js.map
