+function(c){var d=function(f,e){this.$element=c(f);this.options=c.extend({},d.DEFAULTS,e);this.init()};d.VERSION="1.0.0";d.DEFAULTS={convertImage:true,qrcodeWrap:true,render:"canvas",height:210,width:210,background:"#ffffff",foreground:"gray"};d.prototype.init=function(){var f=this.$element;var g=this.options;f.css({height:g.height,width:g.width});g.text=g.qrcode;if(g.qrcodeWrap){f.wrap("<div class='qrcode-wrap' style='width:"+(g.width+16+30+30)+"px;'></div>")}if(g.qrcodeHeader){f.before("<div class='qrcode-header' style='width:"+g.width+"px;'>"+g.qrcodeHeader+"</div>")}if(g.qrcodeFooter){f.after("<div class='qrcode-footer' style='width:"+g.width+"px;'>"+g.qrcodeFooter+"</div>")}if(g.qrcodeWrap){f.wrap("<div class='qrcode-wrap-inner' style='width:"+(g.width+16)+"px;color:"+g.foreground+"'></div>")}if(g.qrcodeIcon){var h=new Image();h.src=g.qrcodeIcon;h.onload=function(){if(h.width>5){g.imgWidth=h.width;g.imgHeight=h.height;g.src=g.qrcodeIcon}f.qrcode(g)}}else{f.qrcode(g)}if(g.convertImage){var e=f.parent().parent();e.attr("title","点击当前二维码可转换为下载图片");e.click(function(){var i=c(this);html2canvas(i,{onrendered:function(j){i.after(j);i.hide();Canvas2Image.saveAsPNG(j)}})})}};function b(e){return this.each(function(){var h=c(this);var g=h.data("ExtQrcode");var f=typeof e=="object"&&e;if(!g){h.data("ExtQrcode",(g=new d(this,f)))}if(typeof e=="string"){g[e]()}})}var a=c.fn.extQrcode;c.fn.extQrcode=b;c.fn.extQrcode.Constructor=d;c.fn.extQrcode.noConflict=function(){c.fn.extQrcode=a;return this};Global.addComponent({name:"ExtQrcode",plugin:b,runPoint:Global.Component_Run_Point.BeforeAjaxPageShow,expr:"div[data-qrcode]"})}(jQuery);