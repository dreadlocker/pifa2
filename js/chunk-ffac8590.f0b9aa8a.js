(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ffac8590"],{"161f":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.showCommentsBtnVisible?a("button",{on:{click:t.showComments}},[t._v(" Покажи коментари ")]):t._e(),a("div",{ref:"FBcoments",staticClass:"fb-comments",attrs:{"data-href":t.href,"data-width":"","data-numposts":"5"}})])},r=[],n={name:"FBcomments",props:{href:{type:String,required:!0}},data:function(){return{showCommentsBtnVisible:!0}},methods:{showComments:function(){window.location.reload()},hideShowCommentsBtn:function(){this.showCommentsBtnVisible=!1}},mounted:function(){this.$refs.FBcoments.addEventListener("DOMNodeInserted",this.hideShowCommentsBtn)},beforeDestroy:function(){this.$refs.FBcoments.removeEventListener("DOMNodeInserted",this.hideShowCommentsBtn)}},i=n,o=a("2877"),c=Object(o["a"])(i,s,r,!1,null,"43c59692",null);e["a"]=c.exports},4103:function(t,e,a){"use strict";a("a9c5")},8281:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.data,(function(e,s){return["h1"===e.tag?a("h1",{key:e.text,staticClass:"base-article-h1",domProps:{innerHTML:t._s(e.text)}}):"h3"===e.tag?a("h3",{key:e.text,staticClass:"base-article-h3",domProps:{innerHTML:t._s(e.text)}}):"p"===e.tag?a("p",{key:e.text,staticClass:"base-article-p",domProps:{innerHTML:t._s(e.text)}}):"ul"===e.tag?a("ul",{key:s,staticClass:"base-article-ul"},t._l(e.text,(function(e,s){return a("li",{key:s,domProps:{innerHTML:t._s(e)}})})),0):"ol"===e.tag?a("ol",{key:s,staticClass:"base-article-ul"},t._l(e.text,(function(e,s){return a("li",{key:s,domProps:{innerHTML:t._s(e)}})})),0):"img"===e.tag?a("div",{key:e.src,staticClass:"base-article-img-holder"},[a("img",{staticClass:"base-article-img",attrs:{src:e.src,alt:e.alt}})]):"video"===e.tag?a("iframe",{key:s,staticClass:"iframe",attrs:{title:t.iframeTitle,src:t.iframeSrc,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}}):t._e()]}))],2)},r=[],n={name:"BaseArticle",props:{data:{type:Array,required:!0}}},i=n,o=a("2877"),c=Object(o["a"])(i,s,r,!1,null,"210869cc",null);e["a"]=c.exports},a9c5:function(t,e,a){},b7c0:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("BaseArticle",{attrs:{data:this.data}}),a("FBcomments",{attrs:{href:this.href}})],1)},r=[],n=a("8281"),i=a("161f"),o=a("2d53"),c={name:"SuvetaZaLiybitelqGradinar",components:{BaseArticle:n["a"],FBcomments:i["a"]},data:function(){return{href:"",data:[{tag:"h1",text:o["b"].znanie.biblioteka[3].text},{tag:"p",text:'<a href="https://mega.nz/#!g9lyWYgQ!B2OUAULzuYiESdISewv2TrWteXAXvGvYugY31JA-Rg8">666 съвета за любителя градинар</a>&nbsp;линк от мега-ъплоуд<br />второ издание<br />автори: Минка Алипиева, Веселина Василиева<br />издадена: 1979г.<br />страници: 298'},{tag:"p",text:"Предговор:"},{tag:"p",text:"Любителят-градинар освен плодовете на упорития си труд получава голяма радост от своята малка зеленчукова градина. Настоящата книга му предлага съвети, които биха му помогнали да опознае по-добре изискванията на зеленчуковите растения към външните условия, начините на отглеждането им през различните сезони на годината, голямото им сортово разнообразие, борбата с болестите и неприятелите по тях и пр. В нея са разгледани редица начини на отглеждане на зеленчуковите растения, практикувани още от някогашните прочути със своето майсторство и трудолюбие български градинари, но са посочени и много нови начини, създадени през годините на социалистическото развитие на българското зеленчукопроизводство. Постарахме се да ги свържем така, че да дадем на любителя-градинар само онова, което може да го ползува в неговата практическа дейност.<br /> Ние ще бъдем доволни, ако сме могли действително да помогнем на любителя-градинар и ще сме благодарни за всички направени бележки по предлаганите съвети.<br /> Изказваме благодарност на проф. Г. Генков, който ни помогна да напишем „Съветите“ по-добре."},{tag:"p",text:"<em>Авторите</em>"}]}},mounted:function(){this.href=window.location.href}},l=c,m=(a("4103"),a("2877")),u=Object(m["a"])(l,s,r,!1,null,"d452d722",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-ffac8590.f0b9aa8a.js.map