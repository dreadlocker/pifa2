(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6526bcae"],{1121:function(t,e,s){},"161f":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.showCommentsBtnVisible?s("button",{on:{click:t.showComments}},[t._v(" Покажи коментари ")]):t._e(),s("div",{ref:"FBcoments",staticClass:"fb-comments",attrs:{"data-href":t.href,"data-width":"","data-numposts":"5"}})])},r=[],o={name:"FBcomments",props:{href:{type:String,required:!0}},data:function(){return{showCommentsBtnVisible:!0}},methods:{showComments:function(){window.location.reload()},hideShowCommentsBtn:function(){this.showCommentsBtnVisible=!1}},mounted:function(){this.$refs.FBcoments.addEventListener("DOMNodeInserted",this.hideShowCommentsBtn)},beforeDestroy:function(){this.$refs.FBcoments.removeEventListener("DOMNodeInserted",this.hideShowCommentsBtn)}},a=o,i=s("2877"),c=Object(i["a"])(a,n,r,!1,null,"43c59692",null);e["a"]=c.exports},8281:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._l(t.data,(function(e,n){return["h1"===e.tag?s("h1",{key:e.text,staticClass:"base-article-h1",domProps:{innerHTML:t._s(e.text)}}):"h3"===e.tag?s("h3",{key:e.text,staticClass:"base-article-h3",domProps:{innerHTML:t._s(e.text)}}):"p"===e.tag?s("p",{key:e.text,staticClass:"base-article-p",domProps:{innerHTML:t._s(e.text)}}):"ul"===e.tag?s("ul",{key:n,staticClass:"base-article-ul"},t._l(e.text,(function(e,n){return s("li",{key:n,domProps:{innerHTML:t._s(e)}})})),0):"ol"===e.tag?s("ol",{key:n,staticClass:"base-article-ul"},t._l(e.text,(function(e,n){return s("li",{key:n,domProps:{innerHTML:t._s(e)}})})),0):"img"===e.tag?s("div",{key:e.src,staticClass:"base-article-img-holder"},[s("img",{staticClass:"base-article-img",attrs:{src:e.src,alt:e.alt}})]):"video"===e.tag?s("iframe",{key:n,staticClass:"iframe",attrs:{title:t.iframeTitle,src:t.iframeSrc,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}}):t._e()]}))],2)},r=[],o={name:"BaseArticle",props:{data:{type:Array,required:!0}}},a=o,i=s("2877"),c=Object(i["a"])(a,n,r,!1,null,"210869cc",null);e["a"]=c.exports},"893a":function(t,e,s){"use strict";s("1121")},a575:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("BaseArticle",{attrs:{data:this.data}}),s("FBcomments",{attrs:{href:this.href}})],1)},r=[],o=s("8281"),a=s("161f"),i=s("2d53"),c={name:"DomashenShokoladBezZahar",components:{BaseArticle:o["a"],FBcomments:a["a"]},data:function(){return{href:"",data:[{tag:"h1",text:i["b"].izhrana.recepti[3].text},{tag:"p",text:"Хей, хей, хей : ) Здравейте отново прекрасни същества! Днешното предложение е съвсем просто и след като опитате, можете да спрете да купувате всички шоколади от магазините! Нека първо разгледаме състава на “млечния шоколад” – няма да споменаваме марки, просто ще обобщим какво съдържат повечето.<br /> В най – добрия случай имат до 10% какао – което се равнява на 10 грама, а всичко останало е повече от “прекрасно” –&nbsp;соев лецитин, палмово масло… но вие сами може да проверите на опаковката на шоколада и да прецените.<br /> А рецептата, която ще ви представя няма да включва нищо от това, което е написано на опаковката, която четете, с изключение на какаото."},{tag:"p",text:"<strong>Съставки:</strong>"},{tag:"ul",text:["<strong>500гр. фурми</strong>","<strong>100гр. бадеми</strong>","<strong>50гр. какао</strong>","<strong>сок от 1 лимон</strong>","<strong>сок от 1 портокал</strong>"]},{tag:"p",text:"Накисваме <strong>фурмите в гореща вода</strong> за <strong>10 мин.</strong> Може да <strong>смелите бадемите</strong> на по <strong>едри парчета</strong>, може да ги използвате и <strong>цели</strong> – както предпочитате. <strong>Белите фурмите</strong> и изваждате костилките, <strong>добавяте целите/смлените бадеми</strong>, сега <strong>какаото</strong> и <strong>сокът</strong> от изстисканите <strong>цитрусови плодове</strong>. Разбърквате всичко до постигане на хомогенна смес. <strong>Слагате във фризер</strong>, за да се стегне сместа, за <strong>1 час</strong>."},{tag:"img",src:"http://www.mashterka.com/wp-content/uploads/2018/10/IMG_0012-225x300.jpg",alt:"spoon with chocolate"},{tag:"p",text:"<strong>Това е!Наздраве!</strong>"}]}},mounted:function(){this.href=window.location.href}},l=c,g=(s("893a"),s("2877")),m=Object(g["a"])(l,n,r,!1,null,"3292ca45",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-6526bcae.ef5f62c7.js.map