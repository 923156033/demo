+function(d){var b=function(f,e){this.$element=d(f);this.options=d.extend({},b.DEFAULTS,e);this.init()};b.VERSION="1.0.0";b.DEFAULTS={modalOverflow:true,width:"90%",forceReload:false};b.prototype.init=function(){var g=this;var f=this.options;var e=this.$element;if(f.url){if(e.is("body")){g.show()}else{e.on("click",function(){g.show()})}}};b.prototype.show=function(g){var e=this.$element;var j=this;g=d.extend({},this.options,g);var f=function(){var n=j.$dialog;var l=n.attr("last-url");var p=n.attr("new-url");if(g.forceReload||!l||l!=p){var m=Util.smartParseURL(p);var o=n.find(".modal-ajaxify-body");o.ajaxGetUrl(m)}else{n.find("textarea[data-htmleditor]").each(function(){d(this).extTextareaHtmleditor()});if(!Util.isWeiXin()){setTimeout(function(){n.find(".form-control-focus:first").focus()},1000)}}n.attr("last-url",p);n.attr("dismiss-confirmed",false)};if(g.fullscreen){g.width="100%"}if(!this.$dialog){if(g.title==undefined){g.title=e.attr("title")}if(g.title==undefined){g.title=e.text()}var h=[];h.push('<div class="modal fade '+(g.fullscreen?"fullscreen":"")+'" tabindex="-1" style="display: none;" >');h.push('    <div class="modal-content">');h.push('      <div class="modal-header">');h.push('        <button type="button" class="close"  data-dismiss="modal" aria-hidden="true" title="关闭对话框"></button>');h.push('        <button type="button" class="close btn-reload" title="刷新对话框"></button>');h.push('        <h4 class="modal-title">'+g.title+"</h4>");h.push("      </div>");h.push('      <div class="modal-body modal-ajaxify-body form"></div>');h.push('      <div class="modal-footer hide">');h.push('        <button type="button" class="btn default" data-dismiss="modal">关闭窗口</button>');h.push("      </div>");h.push("    </div>");h.push("</div>");var k=d(h.join(""));e.after(k);this.$dialog=k;if(g.dataGridId){k.attr("data-grid-id",g.dataGridId)}k.attr("new-url",g.url);k.on("shown.bs.modal",function(){f()});k.modal(g);if(g.fullscreen){var i=k.attr("style")+";height:"+(d(window).height())+"px !important";k.css({cssText:i})}k.draggable({handle:".modal-header",cancel:".modal-header > button",scroll:false});k.find(".modal-header > .btn-reload").click(function(){var l=Util.smartParseURL(k.attr("new-url"));k.find(".modal-ajaxify-body").ajaxGetUrl(l)});k.on("hide",function(m){var l=m.srcElement?m.srcElement:m.target;if(d(l).is("[data-picker]")){return}var n=false;if(k.attr("dismiss-confirmed")==undefined||k.attr("dismiss-confirmed")=="false"){n=k.find("form[method='post']:not(.form-track-disabled)[form-data-modified='true']:first")}if(n.size()){Global.confirm("操作确认","当前表单有修改数据未保存，确认离开当前表单吗？",function(){k.attr("dismiss-confirmed",true);n.attr("form-data-modified",false);k.find("textarea[data-htmleditor]").each(function(){d(this).extTextareaHtmleditor("remove")})},function(){k.attr("dismiss-confirmed",false);m.stopPropagation();m.preventDefault();return false})}else{k.find("textarea[data-htmleditor]").each(function(){d(this).extTextareaHtmleditor("remove")})}})}else{this.$dialog.attr("new-url",g.url);this.$dialog.modal(g);this.$dialog.find(".modal-header > .modal-title").html(g.title);f()}};function c(f){var e=arguments;return this.each(function(){var i=d(this);var h=i.data("ExtAjaxBootstrapModal");var g=typeof f=="object"&&f;if(!h){i.data("ExtAjaxBootstrapModal",(h=new b(this,g)))}if(typeof f=="string"){h[f].apply(h,d.makeArray(e).slice(1))}})}var a=d.fn.extAjaxBootstrapModal;d.fn.extAjaxBootstrapModal=c;d.fn.extAjaxBootstrapModal.Constructor=b;d.fn.extAjaxBootstrapModal.noConflict=function(){d.fn.extAjaxBootstrapModal=a;return this};Global.addComponent({name:"ExtAjaxBootstrapModal",plugin:c,expr:'a[data-toggle="modal-ajaxify"],a[target="modal-ajaxify"]'})}(jQuery);