+function(d){var b=function(f,e){Util.assert(d.fn.extImageCaptchaCode,"依赖组件 $.fn.extImageCaptchaCode 未引入");this.$element=d(f);this.options=d.extend({},b.DEFAULTS,e);this.init()};b.VERSION="1.0.0";b.DEFAULTS={};b.prototype.init=function(){var f=this.$element;var g=this.options;Util.assert(g.callbackVal,"请提供验证码回调处理函数");if(!this.$dialog){var h=[];h.push('<div class="modal fade" tabindex="-1" role="basic" aria-hidden="true" >');h.push('    <div class="modal-content">');h.push('      <div class="modal-header">');h.push('        <button type="button" class="close"  data-dismiss="modal" aria-hidden="true"></button>');h.push('        <h4 class="modal-title">输入验证码以进行安全验证</h4>');h.push("      </div>");h.push('      <div class="modal-body" style="padding:30px">');h.push('        <form class="form form-horizontal form-bordered form-label-stripped">');h.push('          <div class="form-body" style="min-height: 30px">');h.push('            <div class="row">');h.push('              <div class="col-md-12">');h.push('                <div class="form-group">');h.push('                  <div class="controls" style="margin-left: 0px">');h.push('                    <input class="form-control" data-toggle="captcha-code" type="text" name="captcha" required="true"/>');h.push("                  </div>");h.push("                </div>");h.push("              </div>");h.push("            </div>");h.push("          </div>");h.push('          <div class="form-actions">');h.push('            <button type="button" class="btn btn-primary">确认</button>');h.push('            <button class="btn default" type="button" data-dismiss="modal">取消</button>');h.push("          </div>");h.push("        </form>");h.push("      </div>");h.push("    </div>");h.push("</div>");var j=d(h.join("")).appendTo(d("body"));j.find("form").extFormValidator({validation:true});var e=j.find('input[name="captcha"]');e.extImageCaptchaCode();var i=j.find("button.btn-primary");i.on("click",function(){if(e.valid()){var l=e.val();var k=g.callbackVal(l);if(k==undefined||k==true){j.modal("hide")}}});this.$dialog=j}};b.prototype.show=function(){this.$dialog.modal("show")};function c(e){return this.each(function(){var h=d(this);var g=h.data("ExtPopupCaptchaCode");var f=typeof e=="object"&&e;if(!g){h.data("ExtPopupCaptchaCode",(g=new b(this,f)))}if(typeof e=="string"){g[e]()}})}var a=d.fn.extPopupCaptchaCode;d.fn.extPopupCaptchaCode=c;d.fn.extPopupCaptchaCode.noConflict=function(){d.fn.extPopupCaptchaCode=a;return this}}(jQuery);