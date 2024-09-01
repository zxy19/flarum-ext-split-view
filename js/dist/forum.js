(()=>{var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var s in o)t.o(o,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:o[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};(()=>{"use strict";const e=flarum.core.compat["forum/app"];var o=t.n(e);const s=flarum.core.compat["common/extend"],r=flarum.core.compat["forum/states/ComposerState"];var i=t.n(r);const n=flarum.core.compat["forum/components/ComposerBody"];var a=t.n(n);const c=flarum.core.compat["forum/components/DiscussionComposer"];var p=t.n(c);const l=flarum.core.compat["common/components/TextEditor"];var d=t.n(l);const f=flarum.core.compat["common/components/Button"];var v=t.n(f);const h=flarum.core.compat["common/components/Tooltip"];var u=t.n(h);o().initializers.add("nodeloc-split-view",(function(){(0,s.extend)(i().prototype,"load",(function(t,e){this.isSplitView=!1})),(0,s.extend)(d().prototype,"controlItems",(function(t){t.add("preview",m(u(),{text:o().translator.trans("core.forum.composer.preview_tooltip")},m(v(),{icon:"fas fa-columns",className:"Button Button--icon",onclick:this.attrs.preview})))})),(0,s.extend)(a().prototype,"headerItems",(function(t){var e;null!=(e=o().current.get("stream"))&&e.discussion||t.add("preview-discussion",m("div",{className:"Split-view Post-body "+(o().composer.isSplitView?"":"hidden")}),50)})),p().prototype.jumpToPreview=function(t){var e=this;if(t instanceof MouseEvent)if(this.composer.isSplitView=!this.composer.isSplitView,this.composer.isSplitView){var o=this.composer.fields.content();s9e.TextFormatter.preview(this.composer.fields.content(),this.$(".Split-view")[0]),this.composerPreviewInterval=setInterval((function(){var t=e.composer.fields.content();t!==o&&(o=t,s9e.TextFormatter.preview(t,e.$(".Split-view")[0]))}),100)}else clearInterval(this.composerPreviewInterval),this.composerPreviewInterval=null},(0,s.extend)(a().prototype,"oncreate",(function(){this.composerPositionInterval=setInterval((function(){var t,e=$(".TextEditor-editorContainer"),s=this.$(".ComposerPage");if("minimized"===o().composer.position&&"composer"!==(null==(t=o().current)||null==(t=t.data)?void 0:t.routeName))return s.css("padding-bottom",""),void e.css("padding-bottom","");if(s.length||(s=this.$(".Composer")),o().composer.isSplitView){var r=this.$(".TextEditor textarea"),i=this.$(".Split-view");if(e.offset()){var n="normal",a=e.height(),c=window.innerHeight;if("phone"===o().screen()){var p=$(".ComposerBody").height(),m=e.css("padding-bottom")||"0px";c-a-p+(parseInt(m.substring(0,m.length-2))||0)>0&&(n="vertical")}if("normal"===n){var l=parseInt(e.width()/2),d=parseInt(e.height());r.css({width:l}),s.css("padding-bottom",""),e.css("padding-bottom",""),i.removeClass("vertical"),i.css({width:l,height:d,top:r.offset().top-s.offset().top,left:r.offset().left-s.offset().left+r.width()})}else{var f=parseInt(e.width()),v=parseInt(e.height());r.css({width:f}),s.css({paddingBottom:v}),e.css({paddingBottom:v}),i.addClass("vertical"),i.css({width:r.width(),height:r.height()+10,top:r.offset().top-s.offset().top+v,left:r.offset().left-s.offset().left})}}}else s.css("padding-bottom",""),e.css("padding-bottom","")}),100)})),(0,s.extend)(a().prototype,"onremove",(function(){this.composerPreviewInterval&&clearInterval(this.composerPreviewInterval),clearInterval(this.composerPositionInterval)}))}))})(),module.exports={}})();
//# sourceMappingURL=forum.js.map