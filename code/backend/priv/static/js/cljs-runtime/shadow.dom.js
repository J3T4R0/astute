goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33181 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33181(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33182 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33182(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32484 = coll;
var G__32485 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32484,G__32485) : shadow.dom.lazy_native_coll_seq.call(null,G__32484,G__32485));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32512 = arguments.length;
switch (G__32512) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32524 = arguments.length;
switch (G__32524) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32535 = arguments.length;
switch (G__32535) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32575 = arguments.length;
switch (G__32575) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32584 = arguments.length;
switch (G__32584) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32622 = arguments.length;
switch (G__32622) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32635){if((e32635 instanceof Object)){
var e = e32635;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32635;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32641 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32642 = null;
var count__32643 = (0);
var i__32644 = (0);
while(true){
if((i__32644 < count__32643)){
var el = chunk__32642.cljs$core$IIndexed$_nth$arity$2(null,i__32644);
var handler_33189__$1 = ((function (seq__32641,chunk__32642,count__32643,i__32644,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32641,chunk__32642,count__32643,i__32644,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33189__$1);


var G__33190 = seq__32641;
var G__33191 = chunk__32642;
var G__33192 = count__32643;
var G__33193 = (i__32644 + (1));
seq__32641 = G__33190;
chunk__32642 = G__33191;
count__32643 = G__33192;
i__32644 = G__33193;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32641);
if(temp__5753__auto__){
var seq__32641__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32641__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32641__$1);
var G__33194 = cljs.core.chunk_rest(seq__32641__$1);
var G__33195 = c__4649__auto__;
var G__33196 = cljs.core.count(c__4649__auto__);
var G__33197 = (0);
seq__32641 = G__33194;
chunk__32642 = G__33195;
count__32643 = G__33196;
i__32644 = G__33197;
continue;
} else {
var el = cljs.core.first(seq__32641__$1);
var handler_33198__$1 = ((function (seq__32641,chunk__32642,count__32643,i__32644,el,seq__32641__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32641,chunk__32642,count__32643,i__32644,el,seq__32641__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33198__$1);


var G__33199 = cljs.core.next(seq__32641__$1);
var G__33200 = null;
var G__33201 = (0);
var G__33202 = (0);
seq__32641 = G__33199;
chunk__32642 = G__33200;
count__32643 = G__33201;
i__32644 = G__33202;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32655 = arguments.length;
switch (G__32655) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32668 = cljs.core.seq(events);
var chunk__32669 = null;
var count__32670 = (0);
var i__32671 = (0);
while(true){
if((i__32671 < count__32670)){
var vec__32687 = chunk__32669.cljs$core$IIndexed$_nth$arity$2(null,i__32671);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32687,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32687,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33204 = seq__32668;
var G__33205 = chunk__32669;
var G__33206 = count__32670;
var G__33207 = (i__32671 + (1));
seq__32668 = G__33204;
chunk__32669 = G__33205;
count__32670 = G__33206;
i__32671 = G__33207;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32668);
if(temp__5753__auto__){
var seq__32668__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32668__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32668__$1);
var G__33208 = cljs.core.chunk_rest(seq__32668__$1);
var G__33209 = c__4649__auto__;
var G__33210 = cljs.core.count(c__4649__auto__);
var G__33211 = (0);
seq__32668 = G__33208;
chunk__32669 = G__33209;
count__32670 = G__33210;
i__32671 = G__33211;
continue;
} else {
var vec__32693 = cljs.core.first(seq__32668__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32693,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32693,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33212 = cljs.core.next(seq__32668__$1);
var G__33213 = null;
var G__33214 = (0);
var G__33215 = (0);
seq__32668 = G__33212;
chunk__32669 = G__33213;
count__32670 = G__33214;
i__32671 = G__33215;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32702 = cljs.core.seq(styles);
var chunk__32703 = null;
var count__32704 = (0);
var i__32705 = (0);
while(true){
if((i__32705 < count__32704)){
var vec__32720 = chunk__32703.cljs$core$IIndexed$_nth$arity$2(null,i__32705);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32720,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32720,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33216 = seq__32702;
var G__33217 = chunk__32703;
var G__33218 = count__32704;
var G__33219 = (i__32705 + (1));
seq__32702 = G__33216;
chunk__32703 = G__33217;
count__32704 = G__33218;
i__32705 = G__33219;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32702);
if(temp__5753__auto__){
var seq__32702__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32702__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32702__$1);
var G__33220 = cljs.core.chunk_rest(seq__32702__$1);
var G__33221 = c__4649__auto__;
var G__33222 = cljs.core.count(c__4649__auto__);
var G__33223 = (0);
seq__32702 = G__33220;
chunk__32703 = G__33221;
count__32704 = G__33222;
i__32705 = G__33223;
continue;
} else {
var vec__32729 = cljs.core.first(seq__32702__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32729,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32729,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33224 = cljs.core.next(seq__32702__$1);
var G__33225 = null;
var G__33226 = (0);
var G__33227 = (0);
seq__32702 = G__33224;
chunk__32703 = G__33225;
count__32704 = G__33226;
i__32705 = G__33227;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32735_33228 = key;
var G__32735_33229__$1 = (((G__32735_33228 instanceof cljs.core.Keyword))?G__32735_33228.fqn:null);
switch (G__32735_33229__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33231 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_33231,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_33231,"aria-");
}
})())){
el.setAttribute(ks_33231,value);
} else {
(el[ks_33231] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32748){
var map__32749 = p__32748;
var map__32749__$1 = cljs.core.__destructure_map(map__32749);
var props = map__32749__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32749__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32750 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32750,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32750,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32750,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32753 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32753,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32753;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32759 = arguments.length;
switch (G__32759) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32763){
var vec__32764 = p__32763;
var seq__32765 = cljs.core.seq(vec__32764);
var first__32766 = cljs.core.first(seq__32765);
var seq__32765__$1 = cljs.core.next(seq__32765);
var nn = first__32766;
var first__32766__$1 = cljs.core.first(seq__32765__$1);
var seq__32765__$2 = cljs.core.next(seq__32765__$1);
var np = first__32766__$1;
var nc = seq__32765__$2;
var node = vec__32764;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32767 = nn;
var G__32768 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32767,G__32768) : create_fn.call(null,G__32767,G__32768));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32769 = nn;
var G__32770 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32769,G__32770) : create_fn.call(null,G__32769,G__32770));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32771 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771,(1),null);
var seq__32775_33233 = cljs.core.seq(node_children);
var chunk__32776_33234 = null;
var count__32777_33235 = (0);
var i__32778_33236 = (0);
while(true){
if((i__32778_33236 < count__32777_33235)){
var child_struct_33237 = chunk__32776_33234.cljs$core$IIndexed$_nth$arity$2(null,i__32778_33236);
var children_33238 = shadow.dom.dom_node(child_struct_33237);
if(cljs.core.seq_QMARK_(children_33238)){
var seq__32809_33239 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33238));
var chunk__32811_33240 = null;
var count__32812_33241 = (0);
var i__32813_33242 = (0);
while(true){
if((i__32813_33242 < count__32812_33241)){
var child_33243 = chunk__32811_33240.cljs$core$IIndexed$_nth$arity$2(null,i__32813_33242);
if(cljs.core.truth_(child_33243)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33243);


var G__33244 = seq__32809_33239;
var G__33245 = chunk__32811_33240;
var G__33246 = count__32812_33241;
var G__33247 = (i__32813_33242 + (1));
seq__32809_33239 = G__33244;
chunk__32811_33240 = G__33245;
count__32812_33241 = G__33246;
i__32813_33242 = G__33247;
continue;
} else {
var G__33248 = seq__32809_33239;
var G__33249 = chunk__32811_33240;
var G__33250 = count__32812_33241;
var G__33251 = (i__32813_33242 + (1));
seq__32809_33239 = G__33248;
chunk__32811_33240 = G__33249;
count__32812_33241 = G__33250;
i__32813_33242 = G__33251;
continue;
}
} else {
var temp__5753__auto___33252 = cljs.core.seq(seq__32809_33239);
if(temp__5753__auto___33252){
var seq__32809_33253__$1 = temp__5753__auto___33252;
if(cljs.core.chunked_seq_QMARK_(seq__32809_33253__$1)){
var c__4649__auto___33254 = cljs.core.chunk_first(seq__32809_33253__$1);
var G__33255 = cljs.core.chunk_rest(seq__32809_33253__$1);
var G__33256 = c__4649__auto___33254;
var G__33257 = cljs.core.count(c__4649__auto___33254);
var G__33258 = (0);
seq__32809_33239 = G__33255;
chunk__32811_33240 = G__33256;
count__32812_33241 = G__33257;
i__32813_33242 = G__33258;
continue;
} else {
var child_33259 = cljs.core.first(seq__32809_33253__$1);
if(cljs.core.truth_(child_33259)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33259);


var G__33260 = cljs.core.next(seq__32809_33253__$1);
var G__33261 = null;
var G__33262 = (0);
var G__33263 = (0);
seq__32809_33239 = G__33260;
chunk__32811_33240 = G__33261;
count__32812_33241 = G__33262;
i__32813_33242 = G__33263;
continue;
} else {
var G__33264 = cljs.core.next(seq__32809_33253__$1);
var G__33265 = null;
var G__33266 = (0);
var G__33267 = (0);
seq__32809_33239 = G__33264;
chunk__32811_33240 = G__33265;
count__32812_33241 = G__33266;
i__32813_33242 = G__33267;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33238);
}


var G__33268 = seq__32775_33233;
var G__33269 = chunk__32776_33234;
var G__33270 = count__32777_33235;
var G__33271 = (i__32778_33236 + (1));
seq__32775_33233 = G__33268;
chunk__32776_33234 = G__33269;
count__32777_33235 = G__33270;
i__32778_33236 = G__33271;
continue;
} else {
var temp__5753__auto___33272 = cljs.core.seq(seq__32775_33233);
if(temp__5753__auto___33272){
var seq__32775_33273__$1 = temp__5753__auto___33272;
if(cljs.core.chunked_seq_QMARK_(seq__32775_33273__$1)){
var c__4649__auto___33274 = cljs.core.chunk_first(seq__32775_33273__$1);
var G__33275 = cljs.core.chunk_rest(seq__32775_33273__$1);
var G__33276 = c__4649__auto___33274;
var G__33277 = cljs.core.count(c__4649__auto___33274);
var G__33278 = (0);
seq__32775_33233 = G__33275;
chunk__32776_33234 = G__33276;
count__32777_33235 = G__33277;
i__32778_33236 = G__33278;
continue;
} else {
var child_struct_33279 = cljs.core.first(seq__32775_33273__$1);
var children_33280 = shadow.dom.dom_node(child_struct_33279);
if(cljs.core.seq_QMARK_(children_33280)){
var seq__32816_33281 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33280));
var chunk__32818_33282 = null;
var count__32819_33283 = (0);
var i__32820_33284 = (0);
while(true){
if((i__32820_33284 < count__32819_33283)){
var child_33285 = chunk__32818_33282.cljs$core$IIndexed$_nth$arity$2(null,i__32820_33284);
if(cljs.core.truth_(child_33285)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33285);


var G__33286 = seq__32816_33281;
var G__33287 = chunk__32818_33282;
var G__33288 = count__32819_33283;
var G__33289 = (i__32820_33284 + (1));
seq__32816_33281 = G__33286;
chunk__32818_33282 = G__33287;
count__32819_33283 = G__33288;
i__32820_33284 = G__33289;
continue;
} else {
var G__33290 = seq__32816_33281;
var G__33291 = chunk__32818_33282;
var G__33292 = count__32819_33283;
var G__33293 = (i__32820_33284 + (1));
seq__32816_33281 = G__33290;
chunk__32818_33282 = G__33291;
count__32819_33283 = G__33292;
i__32820_33284 = G__33293;
continue;
}
} else {
var temp__5753__auto___33294__$1 = cljs.core.seq(seq__32816_33281);
if(temp__5753__auto___33294__$1){
var seq__32816_33295__$1 = temp__5753__auto___33294__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32816_33295__$1)){
var c__4649__auto___33296 = cljs.core.chunk_first(seq__32816_33295__$1);
var G__33297 = cljs.core.chunk_rest(seq__32816_33295__$1);
var G__33298 = c__4649__auto___33296;
var G__33299 = cljs.core.count(c__4649__auto___33296);
var G__33300 = (0);
seq__32816_33281 = G__33297;
chunk__32818_33282 = G__33298;
count__32819_33283 = G__33299;
i__32820_33284 = G__33300;
continue;
} else {
var child_33301 = cljs.core.first(seq__32816_33295__$1);
if(cljs.core.truth_(child_33301)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33301);


var G__33302 = cljs.core.next(seq__32816_33295__$1);
var G__33303 = null;
var G__33304 = (0);
var G__33305 = (0);
seq__32816_33281 = G__33302;
chunk__32818_33282 = G__33303;
count__32819_33283 = G__33304;
i__32820_33284 = G__33305;
continue;
} else {
var G__33306 = cljs.core.next(seq__32816_33295__$1);
var G__33307 = null;
var G__33308 = (0);
var G__33309 = (0);
seq__32816_33281 = G__33306;
chunk__32818_33282 = G__33307;
count__32819_33283 = G__33308;
i__32820_33284 = G__33309;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33280);
}


var G__33310 = cljs.core.next(seq__32775_33273__$1);
var G__33311 = null;
var G__33312 = (0);
var G__33313 = (0);
seq__32775_33233 = G__33310;
chunk__32776_33234 = G__33311;
count__32777_33235 = G__33312;
i__32778_33236 = G__33313;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32841 = cljs.core.seq(node);
var chunk__32842 = null;
var count__32843 = (0);
var i__32844 = (0);
while(true){
if((i__32844 < count__32843)){
var n = chunk__32842.cljs$core$IIndexed$_nth$arity$2(null,i__32844);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33314 = seq__32841;
var G__33315 = chunk__32842;
var G__33316 = count__32843;
var G__33317 = (i__32844 + (1));
seq__32841 = G__33314;
chunk__32842 = G__33315;
count__32843 = G__33316;
i__32844 = G__33317;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32841);
if(temp__5753__auto__){
var seq__32841__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32841__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32841__$1);
var G__33319 = cljs.core.chunk_rest(seq__32841__$1);
var G__33320 = c__4649__auto__;
var G__33321 = cljs.core.count(c__4649__auto__);
var G__33322 = (0);
seq__32841 = G__33319;
chunk__32842 = G__33320;
count__32843 = G__33321;
i__32844 = G__33322;
continue;
} else {
var n = cljs.core.first(seq__32841__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33324 = cljs.core.next(seq__32841__$1);
var G__33325 = null;
var G__33326 = (0);
var G__33327 = (0);
seq__32841 = G__33324;
chunk__32842 = G__33325;
count__32843 = G__33326;
i__32844 = G__33327;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32850 = arguments.length;
switch (G__32850) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32863 = arguments.length;
switch (G__32863) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32879 = arguments.length;
switch (G__32879) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33331 = arguments.length;
var i__4830__auto___33332 = (0);
while(true){
if((i__4830__auto___33332 < len__4829__auto___33331)){
args__4835__auto__.push((arguments[i__4830__auto___33332]));

var G__33333 = (i__4830__auto___33332 + (1));
i__4830__auto___33332 = G__33333;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32902_33334 = cljs.core.seq(nodes);
var chunk__32903_33335 = null;
var count__32904_33336 = (0);
var i__32905_33337 = (0);
while(true){
if((i__32905_33337 < count__32904_33336)){
var node_33338 = chunk__32903_33335.cljs$core$IIndexed$_nth$arity$2(null,i__32905_33337);
fragment.appendChild(shadow.dom._to_dom(node_33338));


var G__33339 = seq__32902_33334;
var G__33340 = chunk__32903_33335;
var G__33341 = count__32904_33336;
var G__33342 = (i__32905_33337 + (1));
seq__32902_33334 = G__33339;
chunk__32903_33335 = G__33340;
count__32904_33336 = G__33341;
i__32905_33337 = G__33342;
continue;
} else {
var temp__5753__auto___33343 = cljs.core.seq(seq__32902_33334);
if(temp__5753__auto___33343){
var seq__32902_33344__$1 = temp__5753__auto___33343;
if(cljs.core.chunked_seq_QMARK_(seq__32902_33344__$1)){
var c__4649__auto___33345 = cljs.core.chunk_first(seq__32902_33344__$1);
var G__33346 = cljs.core.chunk_rest(seq__32902_33344__$1);
var G__33347 = c__4649__auto___33345;
var G__33348 = cljs.core.count(c__4649__auto___33345);
var G__33349 = (0);
seq__32902_33334 = G__33346;
chunk__32903_33335 = G__33347;
count__32904_33336 = G__33348;
i__32905_33337 = G__33349;
continue;
} else {
var node_33350 = cljs.core.first(seq__32902_33344__$1);
fragment.appendChild(shadow.dom._to_dom(node_33350));


var G__33351 = cljs.core.next(seq__32902_33344__$1);
var G__33352 = null;
var G__33353 = (0);
var G__33354 = (0);
seq__32902_33334 = G__33351;
chunk__32903_33335 = G__33352;
count__32904_33336 = G__33353;
i__32905_33337 = G__33354;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32897){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32897));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32920_33355 = cljs.core.seq(scripts);
var chunk__32921_33356 = null;
var count__32922_33357 = (0);
var i__32923_33358 = (0);
while(true){
if((i__32923_33358 < count__32922_33357)){
var vec__32936_33359 = chunk__32921_33356.cljs$core$IIndexed$_nth$arity$2(null,i__32923_33358);
var script_tag_33360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32936_33359,(0),null);
var script_body_33361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32936_33359,(1),null);
eval(script_body_33361);


var G__33362 = seq__32920_33355;
var G__33363 = chunk__32921_33356;
var G__33364 = count__32922_33357;
var G__33365 = (i__32923_33358 + (1));
seq__32920_33355 = G__33362;
chunk__32921_33356 = G__33363;
count__32922_33357 = G__33364;
i__32923_33358 = G__33365;
continue;
} else {
var temp__5753__auto___33366 = cljs.core.seq(seq__32920_33355);
if(temp__5753__auto___33366){
var seq__32920_33367__$1 = temp__5753__auto___33366;
if(cljs.core.chunked_seq_QMARK_(seq__32920_33367__$1)){
var c__4649__auto___33368 = cljs.core.chunk_first(seq__32920_33367__$1);
var G__33369 = cljs.core.chunk_rest(seq__32920_33367__$1);
var G__33370 = c__4649__auto___33368;
var G__33371 = cljs.core.count(c__4649__auto___33368);
var G__33372 = (0);
seq__32920_33355 = G__33369;
chunk__32921_33356 = G__33370;
count__32922_33357 = G__33371;
i__32923_33358 = G__33372;
continue;
} else {
var vec__32942_33373 = cljs.core.first(seq__32920_33367__$1);
var script_tag_33374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32942_33373,(0),null);
var script_body_33375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32942_33373,(1),null);
eval(script_body_33375);


var G__33376 = cljs.core.next(seq__32920_33367__$1);
var G__33377 = null;
var G__33378 = (0);
var G__33379 = (0);
seq__32920_33355 = G__33376;
chunk__32921_33356 = G__33377;
count__32922_33357 = G__33378;
i__32923_33358 = G__33379;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32947){
var vec__32948 = p__32947;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32948,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32948,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32965 = arguments.length;
switch (G__32965) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32966 = cljs.core.seq(style_keys);
var chunk__32967 = null;
var count__32968 = (0);
var i__32969 = (0);
while(true){
if((i__32969 < count__32968)){
var it = chunk__32967.cljs$core$IIndexed$_nth$arity$2(null,i__32969);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33381 = seq__32966;
var G__33382 = chunk__32967;
var G__33383 = count__32968;
var G__33384 = (i__32969 + (1));
seq__32966 = G__33381;
chunk__32967 = G__33382;
count__32968 = G__33383;
i__32969 = G__33384;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32966);
if(temp__5753__auto__){
var seq__32966__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32966__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32966__$1);
var G__33385 = cljs.core.chunk_rest(seq__32966__$1);
var G__33386 = c__4649__auto__;
var G__33387 = cljs.core.count(c__4649__auto__);
var G__33388 = (0);
seq__32966 = G__33385;
chunk__32967 = G__33386;
count__32968 = G__33387;
i__32969 = G__33388;
continue;
} else {
var it = cljs.core.first(seq__32966__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33389 = cljs.core.next(seq__32966__$1);
var G__33390 = null;
var G__33391 = (0);
var G__33392 = (0);
seq__32966 = G__33389;
chunk__32967 = G__33390;
count__32968 = G__33391;
i__32969 = G__33392;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k32985,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__32994 = k32985;
var G__32994__$1 = (((G__32994 instanceof cljs.core.Keyword))?G__32994.fqn:null);
switch (G__32994__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32985,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__32999){
var vec__33000 = p__32999;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33000,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33000,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32984){
var self__ = this;
var G__32984__$1 = this;
return (new cljs.core.RecordIter((0),G__32984__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32986,other32987){
var self__ = this;
var this32986__$1 = this;
return (((!((other32987 == null)))) && ((((this32986__$1.constructor === other32987.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32986__$1.x,other32987.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32986__$1.y,other32987.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32986__$1.__extmap,other32987.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k32985){
var self__ = this;
var this__4479__auto____$1 = this;
var G__33025 = k32985;
var G__33025__$1 = (((G__33025 instanceof cljs.core.Keyword))?G__33025.fqn:null);
switch (G__33025__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k32985);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__32984){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__33028 = cljs.core.keyword_identical_QMARK_;
var expr__33029 = k__4481__auto__;
if(cljs.core.truth_((pred__33028.cljs$core$IFn$_invoke$arity$2 ? pred__33028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33029) : pred__33028.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33029)))){
return (new shadow.dom.Coordinate(G__32984,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33028.cljs$core$IFn$_invoke$arity$2 ? pred__33028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33029) : pred__33028.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33029)))){
return (new shadow.dom.Coordinate(self__.x,G__32984,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__32984),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__32984){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32984,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32990){
var extmap__4512__auto__ = (function (){var G__33045 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32990,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32990)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33045);
} else {
return G__33045;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32990),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32990),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k33057,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__33070 = k33057;
var G__33070__$1 = (((G__33070 instanceof cljs.core.Keyword))?G__33070.fqn:null);
switch (G__33070__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33057,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__33074){
var vec__33075 = p__33074;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33056){
var self__ = this;
var G__33056__$1 = this;
return (new cljs.core.RecordIter((0),G__33056__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33059,other33060){
var self__ = this;
var this33059__$1 = this;
return (((!((other33060 == null)))) && ((((this33059__$1.constructor === other33060.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33059__$1.w,other33060.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33059__$1.h,other33060.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33059__$1.__extmap,other33060.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k33057){
var self__ = this;
var this__4479__auto____$1 = this;
var G__33097 = k33057;
var G__33097__$1 = (((G__33097 instanceof cljs.core.Keyword))?G__33097.fqn:null);
switch (G__33097__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33057);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__33056){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__33098 = cljs.core.keyword_identical_QMARK_;
var expr__33099 = k__4481__auto__;
if(cljs.core.truth_((pred__33098.cljs$core$IFn$_invoke$arity$2 ? pred__33098.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33099) : pred__33098.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33099)))){
return (new shadow.dom.Size(G__33056,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33098.cljs$core$IFn$_invoke$arity$2 ? pred__33098.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33099) : pred__33098.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33099)))){
return (new shadow.dom.Size(self__.w,G__33056,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__33056),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__33056){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33056,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33063){
var extmap__4512__auto__ = (function (){var G__33101 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33063,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33063)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33101);
} else {
return G__33101;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33063),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33063),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__33399 = (i + (1));
var G__33400 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33399;
ret = G__33400;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33106){
var vec__33107 = p__33106;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33107,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33107,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33111 = arguments.length;
switch (G__33111) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33402 = ps;
var G__33403 = (i + (1));
el__$1 = G__33402;
i = G__33403;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33112 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33112,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33112,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33112,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33115_33405 = cljs.core.seq(props);
var chunk__33116_33406 = null;
var count__33117_33407 = (0);
var i__33118_33408 = (0);
while(true){
if((i__33118_33408 < count__33117_33407)){
var vec__33125_33409 = chunk__33116_33406.cljs$core$IIndexed$_nth$arity$2(null,i__33118_33408);
var k_33410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33125_33409,(0),null);
var v_33411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33125_33409,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_33410);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33410),v_33411);


var G__33412 = seq__33115_33405;
var G__33413 = chunk__33116_33406;
var G__33414 = count__33117_33407;
var G__33415 = (i__33118_33408 + (1));
seq__33115_33405 = G__33412;
chunk__33116_33406 = G__33413;
count__33117_33407 = G__33414;
i__33118_33408 = G__33415;
continue;
} else {
var temp__5753__auto___33416 = cljs.core.seq(seq__33115_33405);
if(temp__5753__auto___33416){
var seq__33115_33417__$1 = temp__5753__auto___33416;
if(cljs.core.chunked_seq_QMARK_(seq__33115_33417__$1)){
var c__4649__auto___33418 = cljs.core.chunk_first(seq__33115_33417__$1);
var G__33419 = cljs.core.chunk_rest(seq__33115_33417__$1);
var G__33420 = c__4649__auto___33418;
var G__33421 = cljs.core.count(c__4649__auto___33418);
var G__33422 = (0);
seq__33115_33405 = G__33419;
chunk__33116_33406 = G__33420;
count__33117_33407 = G__33421;
i__33118_33408 = G__33422;
continue;
} else {
var vec__33128_33423 = cljs.core.first(seq__33115_33417__$1);
var k_33424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33128_33423,(0),null);
var v_33425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33128_33423,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_33424);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33424),v_33425);


var G__33426 = cljs.core.next(seq__33115_33417__$1);
var G__33427 = null;
var G__33428 = (0);
var G__33429 = (0);
seq__33115_33405 = G__33426;
chunk__33116_33406 = G__33427;
count__33117_33407 = G__33428;
i__33118_33408 = G__33429;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33132 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33132,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33132,(1),null);
var seq__33135_33430 = cljs.core.seq(node_children);
var chunk__33137_33431 = null;
var count__33138_33432 = (0);
var i__33139_33433 = (0);
while(true){
if((i__33139_33433 < count__33138_33432)){
var child_struct_33434 = chunk__33137_33431.cljs$core$IIndexed$_nth$arity$2(null,i__33139_33433);
if((!((child_struct_33434 == null)))){
if(typeof child_struct_33434 === 'string'){
var text_33435 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33435),child_struct_33434].join(''));
} else {
var children_33436 = shadow.dom.svg_node(child_struct_33434);
if(cljs.core.seq_QMARK_(children_33436)){
var seq__33153_33437 = cljs.core.seq(children_33436);
var chunk__33155_33438 = null;
var count__33156_33439 = (0);
var i__33157_33440 = (0);
while(true){
if((i__33157_33440 < count__33156_33439)){
var child_33441 = chunk__33155_33438.cljs$core$IIndexed$_nth$arity$2(null,i__33157_33440);
if(cljs.core.truth_(child_33441)){
node.appendChild(child_33441);


var G__33442 = seq__33153_33437;
var G__33443 = chunk__33155_33438;
var G__33444 = count__33156_33439;
var G__33445 = (i__33157_33440 + (1));
seq__33153_33437 = G__33442;
chunk__33155_33438 = G__33443;
count__33156_33439 = G__33444;
i__33157_33440 = G__33445;
continue;
} else {
var G__33446 = seq__33153_33437;
var G__33447 = chunk__33155_33438;
var G__33448 = count__33156_33439;
var G__33449 = (i__33157_33440 + (1));
seq__33153_33437 = G__33446;
chunk__33155_33438 = G__33447;
count__33156_33439 = G__33448;
i__33157_33440 = G__33449;
continue;
}
} else {
var temp__5753__auto___33450 = cljs.core.seq(seq__33153_33437);
if(temp__5753__auto___33450){
var seq__33153_33451__$1 = temp__5753__auto___33450;
if(cljs.core.chunked_seq_QMARK_(seq__33153_33451__$1)){
var c__4649__auto___33452 = cljs.core.chunk_first(seq__33153_33451__$1);
var G__33453 = cljs.core.chunk_rest(seq__33153_33451__$1);
var G__33454 = c__4649__auto___33452;
var G__33455 = cljs.core.count(c__4649__auto___33452);
var G__33456 = (0);
seq__33153_33437 = G__33453;
chunk__33155_33438 = G__33454;
count__33156_33439 = G__33455;
i__33157_33440 = G__33456;
continue;
} else {
var child_33458 = cljs.core.first(seq__33153_33451__$1);
if(cljs.core.truth_(child_33458)){
node.appendChild(child_33458);


var G__33459 = cljs.core.next(seq__33153_33451__$1);
var G__33460 = null;
var G__33461 = (0);
var G__33462 = (0);
seq__33153_33437 = G__33459;
chunk__33155_33438 = G__33460;
count__33156_33439 = G__33461;
i__33157_33440 = G__33462;
continue;
} else {
var G__33463 = cljs.core.next(seq__33153_33451__$1);
var G__33464 = null;
var G__33465 = (0);
var G__33466 = (0);
seq__33153_33437 = G__33463;
chunk__33155_33438 = G__33464;
count__33156_33439 = G__33465;
i__33157_33440 = G__33466;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33436);
}
}


var G__33467 = seq__33135_33430;
var G__33468 = chunk__33137_33431;
var G__33469 = count__33138_33432;
var G__33470 = (i__33139_33433 + (1));
seq__33135_33430 = G__33467;
chunk__33137_33431 = G__33468;
count__33138_33432 = G__33469;
i__33139_33433 = G__33470;
continue;
} else {
var G__33471 = seq__33135_33430;
var G__33472 = chunk__33137_33431;
var G__33473 = count__33138_33432;
var G__33474 = (i__33139_33433 + (1));
seq__33135_33430 = G__33471;
chunk__33137_33431 = G__33472;
count__33138_33432 = G__33473;
i__33139_33433 = G__33474;
continue;
}
} else {
var temp__5753__auto___33475 = cljs.core.seq(seq__33135_33430);
if(temp__5753__auto___33475){
var seq__33135_33476__$1 = temp__5753__auto___33475;
if(cljs.core.chunked_seq_QMARK_(seq__33135_33476__$1)){
var c__4649__auto___33477 = cljs.core.chunk_first(seq__33135_33476__$1);
var G__33478 = cljs.core.chunk_rest(seq__33135_33476__$1);
var G__33479 = c__4649__auto___33477;
var G__33480 = cljs.core.count(c__4649__auto___33477);
var G__33481 = (0);
seq__33135_33430 = G__33478;
chunk__33137_33431 = G__33479;
count__33138_33432 = G__33480;
i__33139_33433 = G__33481;
continue;
} else {
var child_struct_33482 = cljs.core.first(seq__33135_33476__$1);
if((!((child_struct_33482 == null)))){
if(typeof child_struct_33482 === 'string'){
var text_33483 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33483),child_struct_33482].join(''));
} else {
var children_33484 = shadow.dom.svg_node(child_struct_33482);
if(cljs.core.seq_QMARK_(children_33484)){
var seq__33159_33485 = cljs.core.seq(children_33484);
var chunk__33161_33486 = null;
var count__33162_33487 = (0);
var i__33163_33488 = (0);
while(true){
if((i__33163_33488 < count__33162_33487)){
var child_33489 = chunk__33161_33486.cljs$core$IIndexed$_nth$arity$2(null,i__33163_33488);
if(cljs.core.truth_(child_33489)){
node.appendChild(child_33489);


var G__33490 = seq__33159_33485;
var G__33491 = chunk__33161_33486;
var G__33492 = count__33162_33487;
var G__33493 = (i__33163_33488 + (1));
seq__33159_33485 = G__33490;
chunk__33161_33486 = G__33491;
count__33162_33487 = G__33492;
i__33163_33488 = G__33493;
continue;
} else {
var G__33494 = seq__33159_33485;
var G__33495 = chunk__33161_33486;
var G__33496 = count__33162_33487;
var G__33497 = (i__33163_33488 + (1));
seq__33159_33485 = G__33494;
chunk__33161_33486 = G__33495;
count__33162_33487 = G__33496;
i__33163_33488 = G__33497;
continue;
}
} else {
var temp__5753__auto___33498__$1 = cljs.core.seq(seq__33159_33485);
if(temp__5753__auto___33498__$1){
var seq__33159_33499__$1 = temp__5753__auto___33498__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33159_33499__$1)){
var c__4649__auto___33500 = cljs.core.chunk_first(seq__33159_33499__$1);
var G__33501 = cljs.core.chunk_rest(seq__33159_33499__$1);
var G__33502 = c__4649__auto___33500;
var G__33503 = cljs.core.count(c__4649__auto___33500);
var G__33504 = (0);
seq__33159_33485 = G__33501;
chunk__33161_33486 = G__33502;
count__33162_33487 = G__33503;
i__33163_33488 = G__33504;
continue;
} else {
var child_33505 = cljs.core.first(seq__33159_33499__$1);
if(cljs.core.truth_(child_33505)){
node.appendChild(child_33505);


var G__33506 = cljs.core.next(seq__33159_33499__$1);
var G__33507 = null;
var G__33508 = (0);
var G__33509 = (0);
seq__33159_33485 = G__33506;
chunk__33161_33486 = G__33507;
count__33162_33487 = G__33508;
i__33163_33488 = G__33509;
continue;
} else {
var G__33510 = cljs.core.next(seq__33159_33499__$1);
var G__33511 = null;
var G__33512 = (0);
var G__33513 = (0);
seq__33159_33485 = G__33510;
chunk__33161_33486 = G__33511;
count__33162_33487 = G__33512;
i__33163_33488 = G__33513;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33484);
}
}


var G__33514 = cljs.core.next(seq__33135_33476__$1);
var G__33515 = null;
var G__33516 = (0);
var G__33517 = (0);
seq__33135_33430 = G__33514;
chunk__33137_33431 = G__33515;
count__33138_33432 = G__33516;
i__33139_33433 = G__33517;
continue;
} else {
var G__33518 = cljs.core.next(seq__33135_33476__$1);
var G__33519 = null;
var G__33520 = (0);
var G__33521 = (0);
seq__33135_33430 = G__33518;
chunk__33137_33431 = G__33519;
count__33138_33432 = G__33520;
i__33139_33433 = G__33521;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33522 = arguments.length;
var i__4830__auto___33523 = (0);
while(true){
if((i__4830__auto___33523 < len__4829__auto___33522)){
args__4835__auto__.push((arguments[i__4830__auto___33523]));

var G__33524 = (i__4830__auto___33523 + (1));
i__4830__auto___33523 = G__33524;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33165){
var G__33166 = cljs.core.first(seq33165);
var seq33165__$1 = cljs.core.next(seq33165);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33166,seq33165__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33168 = arguments.length;
switch (G__33168) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__30529__auto___33526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30370__auto__ = (function (state_33173){
var state_val_33174 = (state_33173[(1)]);
if((state_val_33174 === (1))){
var state_33173__$1 = state_33173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33173__$1,(2),once_or_cleanup);
} else {
if((state_val_33174 === (2))){
var inst_33170 = (state_33173[(2)]);
var inst_33171 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33173__$1 = (function (){var statearr_33175 = state_33173;
(statearr_33175[(7)] = inst_33170);

return statearr_33175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33173__$1,inst_33171);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30371__auto__ = null;
var shadow$dom$state_machine__30371__auto____0 = (function (){
var statearr_33176 = [null,null,null,null,null,null,null,null];
(statearr_33176[(0)] = shadow$dom$state_machine__30371__auto__);

(statearr_33176[(1)] = (1));

return statearr_33176;
});
var shadow$dom$state_machine__30371__auto____1 = (function (state_33173){
while(true){
var ret_value__30372__auto__ = (function (){try{while(true){
var result__30373__auto__ = switch__30370__auto__(state_33173);
if(cljs.core.keyword_identical_QMARK_(result__30373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30373__auto__;
}
break;
}
}catch (e33177){var ex__30374__auto__ = e33177;
var statearr_33178_33527 = state_33173;
(statearr_33178_33527[(2)] = ex__30374__auto__);


if(cljs.core.seq((state_33173[(4)]))){
var statearr_33179_33528 = state_33173;
(statearr_33179_33528[(1)] = cljs.core.first((state_33173[(4)])));

} else {
throw ex__30374__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33529 = state_33173;
state_33173 = G__33529;
continue;
} else {
return ret_value__30372__auto__;
}
break;
}
});
shadow$dom$state_machine__30371__auto__ = function(state_33173){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30371__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30371__auto____1.call(this,state_33173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30371__auto____0;
shadow$dom$state_machine__30371__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30371__auto____1;
return shadow$dom$state_machine__30371__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_33180 = f__30530__auto__();
(statearr_33180[(6)] = c__30529__auto___33526);

return statearr_33180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
