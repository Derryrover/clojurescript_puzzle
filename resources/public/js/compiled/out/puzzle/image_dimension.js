// Compiled by ClojureScript 1.9.229 {}
goog.provide('puzzle.image_dimension');
goog.require('cljs.core');
goog.require('puzzle.model');
goog.require('dommy.core');
puzzle.image_dimension.get_image_ratio = (function puzzle$image_dimension$get_image_ratio(){
return (document.getElementById("js_img_id").naturalHeight / document.getElementById("js_img_id").naturalWidth);
});
puzzle.image_dimension.get_window_ratio = (function puzzle$image_dimension$get_window_ratio(){
return ((window["innerHeight"]) / (window["innerWidth"]));
});
puzzle.image_dimension.risize_image = (function puzzle$image_dimension$risize_image(){
var window_ratio = puzzle.image_dimension.get_window_ratio.call(null);
var image_ratio = puzzle.image_dimension.get_image_ratio.call(null);
var innerWidth = (window["innerWidth"]);
var innerHeight = (window["innerHeight"]);
var style1 = clojure.string.join.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position:absolute;display:block;margin:auto;","width:",innerWidth,"px;","height:",(innerWidth * image_ratio),"px;"], null));
var style2 = clojure.string.join.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["position:absolute;display:block;margin:auto;","width:",(innerHeight / image_ratio),"px;","height:",innerHeight,"px;"], null));
var node = document.getElementById("js_img_id");
var node_puzzle = document.getElementById("puzzle_screen");
var imgs = dommy.utils.__GT_Array.call(null,document.getElementsByClassName("js_img_class"));
if((window_ratio > image_ratio)){
return ((function (window_ratio,image_ratio,innerWidth,innerHeight,style1,style2,node,node_puzzle,imgs){
return (function (){
dommy.core.set_attr_BANG_.call(null,node,new cljs.core.Keyword(null,"width","width",-384071477),innerWidth);

dommy.core.set_attr_BANG_.call(null,node,new cljs.core.Keyword(null,"height","height",1025178622),(innerWidth * image_ratio));

var seq__29801_29817 = cljs.core.seq.call(null,imgs);
var chunk__29802_29818 = null;
var count__29803_29819 = (0);
var i__29804_29820 = (0);
while(true){
if((i__29804_29820 < count__29803_29819)){
var img_29821 = cljs.core._nth.call(null,chunk__29802_29818,i__29804_29820);
dommy.core.set_attr_BANG_.call(null,img_29821,new cljs.core.Keyword(null,"width","width",-384071477),innerWidth);

var G__29822 = seq__29801_29817;
var G__29823 = chunk__29802_29818;
var G__29824 = count__29803_29819;
var G__29825 = (i__29804_29820 + (1));
seq__29801_29817 = G__29822;
chunk__29802_29818 = G__29823;
count__29803_29819 = G__29824;
i__29804_29820 = G__29825;
continue;
} else {
var temp__4657__auto___29826 = cljs.core.seq.call(null,seq__29801_29817);
if(temp__4657__auto___29826){
var seq__29801_29827__$1 = temp__4657__auto___29826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29801_29827__$1)){
var c__26750__auto___29828 = cljs.core.chunk_first.call(null,seq__29801_29827__$1);
var G__29829 = cljs.core.chunk_rest.call(null,seq__29801_29827__$1);
var G__29830 = c__26750__auto___29828;
var G__29831 = cljs.core.count.call(null,c__26750__auto___29828);
var G__29832 = (0);
seq__29801_29817 = G__29829;
chunk__29802_29818 = G__29830;
count__29803_29819 = G__29831;
i__29804_29820 = G__29832;
continue;
} else {
var img_29833 = cljs.core.first.call(null,seq__29801_29827__$1);
dommy.core.set_attr_BANG_.call(null,img_29833,new cljs.core.Keyword(null,"width","width",-384071477),innerWidth);

var G__29834 = cljs.core.next.call(null,seq__29801_29827__$1);
var G__29835 = null;
var G__29836 = (0);
var G__29837 = (0);
seq__29801_29817 = G__29834;
chunk__29802_29818 = G__29835;
count__29803_29819 = G__29836;
i__29804_29820 = G__29837;
continue;
}
} else {
}
}
break;
}

var seq__29805_29838 = cljs.core.seq.call(null,imgs);
var chunk__29806_29839 = null;
var count__29807_29840 = (0);
var i__29808_29841 = (0);
while(true){
if((i__29808_29841 < count__29807_29840)){
var img_29842 = cljs.core._nth.call(null,chunk__29806_29839,i__29808_29841);
dommy.core.set_attr_BANG_.call(null,img_29842,new cljs.core.Keyword(null,"height","height",1025178622),(innerWidth * image_ratio));

var G__29843 = seq__29805_29838;
var G__29844 = chunk__29806_29839;
var G__29845 = count__29807_29840;
var G__29846 = (i__29808_29841 + (1));
seq__29805_29838 = G__29843;
chunk__29806_29839 = G__29844;
count__29807_29840 = G__29845;
i__29808_29841 = G__29846;
continue;
} else {
var temp__4657__auto___29847 = cljs.core.seq.call(null,seq__29805_29838);
if(temp__4657__auto___29847){
var seq__29805_29848__$1 = temp__4657__auto___29847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29805_29848__$1)){
var c__26750__auto___29849 = cljs.core.chunk_first.call(null,seq__29805_29848__$1);
var G__29850 = cljs.core.chunk_rest.call(null,seq__29805_29848__$1);
var G__29851 = c__26750__auto___29849;
var G__29852 = cljs.core.count.call(null,c__26750__auto___29849);
var G__29853 = (0);
seq__29805_29838 = G__29850;
chunk__29806_29839 = G__29851;
count__29807_29840 = G__29852;
i__29808_29841 = G__29853;
continue;
} else {
var img_29854 = cljs.core.first.call(null,seq__29805_29848__$1);
dommy.core.set_attr_BANG_.call(null,img_29854,new cljs.core.Keyword(null,"height","height",1025178622),(innerWidth * image_ratio));

var G__29855 = cljs.core.next.call(null,seq__29805_29848__$1);
var G__29856 = null;
var G__29857 = (0);
var G__29858 = (0);
seq__29805_29838 = G__29855;
chunk__29806_29839 = G__29856;
count__29807_29840 = G__29857;
i__29808_29841 = G__29858;
continue;
}
} else {
}
}
break;
}

return dommy.core.set_attr_BANG_.call(null,node_puzzle,new cljs.core.Keyword(null,"style","style",-496642736),style1);
});})(window_ratio,image_ratio,innerWidth,innerHeight,style1,style2,node,node_puzzle,imgs))
.call(null);
} else {
return ((function (window_ratio,image_ratio,innerWidth,innerHeight,style1,style2,node,node_puzzle,imgs){
return (function (){
dommy.core.set_attr_BANG_.call(null,node,new cljs.core.Keyword(null,"height","height",1025178622),innerHeight);

dommy.core.set_attr_BANG_.call(null,node,new cljs.core.Keyword(null,"width","width",-384071477),(innerHeight / image_ratio));

var seq__29809_29859 = cljs.core.seq.call(null,imgs);
var chunk__29810_29860 = null;
var count__29811_29861 = (0);
var i__29812_29862 = (0);
while(true){
if((i__29812_29862 < count__29811_29861)){
var img_29863 = cljs.core._nth.call(null,chunk__29810_29860,i__29812_29862);
dommy.core.set_attr_BANG_.call(null,img_29863,new cljs.core.Keyword(null,"height","height",1025178622),innerHeight);

var G__29864 = seq__29809_29859;
var G__29865 = chunk__29810_29860;
var G__29866 = count__29811_29861;
var G__29867 = (i__29812_29862 + (1));
seq__29809_29859 = G__29864;
chunk__29810_29860 = G__29865;
count__29811_29861 = G__29866;
i__29812_29862 = G__29867;
continue;
} else {
var temp__4657__auto___29868 = cljs.core.seq.call(null,seq__29809_29859);
if(temp__4657__auto___29868){
var seq__29809_29869__$1 = temp__4657__auto___29868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29809_29869__$1)){
var c__26750__auto___29870 = cljs.core.chunk_first.call(null,seq__29809_29869__$1);
var G__29871 = cljs.core.chunk_rest.call(null,seq__29809_29869__$1);
var G__29872 = c__26750__auto___29870;
var G__29873 = cljs.core.count.call(null,c__26750__auto___29870);
var G__29874 = (0);
seq__29809_29859 = G__29871;
chunk__29810_29860 = G__29872;
count__29811_29861 = G__29873;
i__29812_29862 = G__29874;
continue;
} else {
var img_29875 = cljs.core.first.call(null,seq__29809_29869__$1);
dommy.core.set_attr_BANG_.call(null,img_29875,new cljs.core.Keyword(null,"height","height",1025178622),innerHeight);

var G__29876 = cljs.core.next.call(null,seq__29809_29869__$1);
var G__29877 = null;
var G__29878 = (0);
var G__29879 = (0);
seq__29809_29859 = G__29876;
chunk__29810_29860 = G__29877;
count__29811_29861 = G__29878;
i__29812_29862 = G__29879;
continue;
}
} else {
}
}
break;
}

var seq__29813_29880 = cljs.core.seq.call(null,imgs);
var chunk__29814_29881 = null;
var count__29815_29882 = (0);
var i__29816_29883 = (0);
while(true){
if((i__29816_29883 < count__29815_29882)){
var img_29884 = cljs.core._nth.call(null,chunk__29814_29881,i__29816_29883);
dommy.core.set_attr_BANG_.call(null,img_29884,new cljs.core.Keyword(null,"width","width",-384071477),(innerHeight / image_ratio));

var G__29885 = seq__29813_29880;
var G__29886 = chunk__29814_29881;
var G__29887 = count__29815_29882;
var G__29888 = (i__29816_29883 + (1));
seq__29813_29880 = G__29885;
chunk__29814_29881 = G__29886;
count__29815_29882 = G__29887;
i__29816_29883 = G__29888;
continue;
} else {
var temp__4657__auto___29889 = cljs.core.seq.call(null,seq__29813_29880);
if(temp__4657__auto___29889){
var seq__29813_29890__$1 = temp__4657__auto___29889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29813_29890__$1)){
var c__26750__auto___29891 = cljs.core.chunk_first.call(null,seq__29813_29890__$1);
var G__29892 = cljs.core.chunk_rest.call(null,seq__29813_29890__$1);
var G__29893 = c__26750__auto___29891;
var G__29894 = cljs.core.count.call(null,c__26750__auto___29891);
var G__29895 = (0);
seq__29813_29880 = G__29892;
chunk__29814_29881 = G__29893;
count__29815_29882 = G__29894;
i__29816_29883 = G__29895;
continue;
} else {
var img_29896 = cljs.core.first.call(null,seq__29813_29890__$1);
dommy.core.set_attr_BANG_.call(null,img_29896,new cljs.core.Keyword(null,"width","width",-384071477),(innerHeight / image_ratio));

var G__29897 = cljs.core.next.call(null,seq__29813_29890__$1);
var G__29898 = null;
var G__29899 = (0);
var G__29900 = (0);
seq__29813_29880 = G__29897;
chunk__29814_29881 = G__29898;
count__29815_29882 = G__29899;
i__29816_29883 = G__29900;
continue;
}
} else {
}
}
break;
}

return dommy.core.set_attr_BANG_.call(null,node_puzzle,new cljs.core.Keyword(null,"style","style",-496642736),style2);
});})(window_ratio,image_ratio,innerWidth,innerHeight,style1,style2,node,node_puzzle,imgs))
.call(null);
}
});

//# sourceMappingURL=image_dimension.js.map?rel=1510423695403