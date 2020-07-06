+function(d){var c=function(f,e){this.$element=d(f);this.options=d.extend({},c.DEFAULTS,e);this.init()};c.VERSION="1.0.0";c.DEFAULTS={multiple:true,height:"120px",width:"120px",maximumSelectionLength:0,readonly:false};c.prototype.loadKindEditor=function(h,f){var e=this.options;var g=this.kindEditor;if(!g){g=KindEditor.editor({uploadJson:Util.smartParseURL(Config.getFileUploadUrl()),allowFileManager:false,formatUploadUrl:false,afterUpload:h});this.kindEditor=g}if(f||!e.multiple||e.maximumSelectionLength==1){g.loadPlugin("image",function(){g.plugin.imageDialog({showRemote:false,clickFn:function(){}})})}else{g.loadPlugin("multiimage",function(){g.plugin.multiImageDialog({showRemote:false,clickFn:h})})}};c.prototype.init=function(){var n=this.$element;var p=this.options;var j=this;Util.assert(n.is("input"),"图片上传组件只支持input元素类型");n.hide();if(p.imageuploader=="single"){p.multiple=false}else{p.multiple=true}var k=function(q){q.on("load",function(){var s=q.width();var r=q.height();if(s>p.width){q.css({width:p.width})}if(r>p.height){q.css({height:p.height})}})};var e=function(r,t,v){var s=[];var u=Config.getUploadPublicResourceUri()+t;s.push('<div class="mt-overlay-1 mt-element-multiimage-item" data-id="'+v+'" data-url="'+t+'" style="width:'+r.width+";height:"+r.height+'; ">');s.push('  <img src="'+u+'" style="width:'+r.width+";height:"+r.height+';"/>');s.push('  <div class="mt-overlay">');s.push('    <ul class="mt-info">');s.push("      <li>");s.push('        <a class="btn default btn-outline btn-remove '+(r.readonly?"hidden":"")+'" href="javascript:;">');s.push('          <i class="fa fa-remove"></i>');s.push("        </a>");s.push("      </li>");s.push("      <li>");s.push('        <a class="btn default btn-outline btn-preview" target="_blank" href="'+u+'">');s.push('          <i class="fa fa-search-plus"></i>');s.push("        </a>");s.push("      </li>");s.push("      <li>");s.push('        <a class="btn default btn-outline btn-edit '+(r.readonly?"hidden":"")+'" href="javascript:;">');s.push('          <i class="fa fa-edit"></i>');s.push("        </a>");s.push("      </li>");s.push("      <li>");s.push('        <a class="btn default btn-outline btn-arrows '+(r.readonly?"hidden":"")+'" href="javascript:;">');s.push('          <i class="fa fa-arrows"></i>');s.push("        </a>");s.push("      </li>");s.push("    </ul>");s.push("  </div>");s.push("</div>");var q=d(s.join(""));k(q.children("img"));return q};var o=d('<div class="mt-element-overlay mt-element-multiimage" style="height:auto;min-height:'+p.height+'"></div>');n.after(o);var g=n.val();if(g){var m=g.split(",");d.each(m,function(q,r){o.append(e(p,r,""))})}var h=[];h.push('<div class="mt-overlay-1 mt-element-multiimage-item mt-element-multiimage-add '+(p.readonly?"hidden":"")+'" style="width:'+p.width+";height:"+p.height+'; ">');h.push('  <i class="fa fa-plus" style="line-height: '+p.height+';"></i>');h.push('  <div class="mt-overlay">');h.push('    <ul class="mt-info">');h.push("      <li>");h.push('        <a class="btn default btn-outline btn-add" href="javascript:;">');h.push('          <i class="fa fa-plus"></i>');h.push("        </a>");h.push("      </li>");h.push("    </ul>");h.push("  </div>");h.push("</div>");var i=d(h.join(""));o.append(i);var l=function(){var r=o.children(".mt-element-multiimage-item:not(.mt-element-multiimage-add)");if(n.is("input")){var q=[];r.each(function(){q.push(d(this).attr("data-url"))});n.val(q.join(","))}else{n.children("option").remove();r.each(function(){n.append(new Option(d(this).attr("data-url"),d(this).attr("data-id"),true,true))})}};var f=function(){if(!p.multiple&&o.children(".mt-element-multiimage-item:not(.mt-element-multiimage-add)").size()>0){i.hide()}else{i.show()}l()};f();o.on("click",".btn-add",function(){j.loadKindEditor(function(q,r){j.kindEditor.hideDialog();if(typeof q=="string"){if(Config.isDebugEnable()){console.log("Single image upload:");console.log(r)}i.before(e(p,r.relativePath,r.id))}else{if(Config.isDebugEnable()){console.log("Multi image upload:");console.log(q)}d.each(q,function(s,t){i.before(e(p,t.relativePath,t.id))})}f()})});o.on("click",".btn-remove",function(r){var q=d(r.target).closest(".mt-element-multiimage-item");q.remove();f()});o.on("click",".btn-edit",function(r){var q=d(r.target).closest(".mt-element-multiimage-item");j.operationItem=q;j.loadKindEditor(function(s,u){j.kindEditor.hideDialog();j.operationItem.attr("data-id",u.id);j.operationItem.attr("data-url",u.relativePath);var v=Config.getUploadPublicResourceUri()+u.relativePath;var t=j.operationItem.children("img");t.attr("src",v);k(t);l()},true)});o.sortable({items:".mt-element-multiimage-item",stop:function(q,r){l()}})};function b(e){return this.each(function(){var h=d(this);var g=h.data("ExtImageUploader");var f=typeof e=="object"&&e;if(!g){h.data("ExtImageUploader",(g=new c(this,f)))}if(typeof e=="string"){g[e]()}})}var a=d.fn.extImageUploader;d.fn.extImageUploader=b;d.fn.extImageUploader.Constructor=c;d.fn.extImageUploader.noConflict=function(){d.fn.extImageUploader=a;return this};Global.addComponent({name:"ExtImageUploader",plugin:b,runPoint:Global.Component_Run_Point.AfterAjaxPageShow,expr:"input[data-imageuploader]",order:900})}(jQuery);