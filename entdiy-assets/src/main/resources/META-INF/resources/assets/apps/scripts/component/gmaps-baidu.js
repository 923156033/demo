+function(c){var d=function(f,e){this.$element=c(f);this.options=c.extend({},d.DEFAULTS,e);this.init()};d.NAME="ExtGmapsBaidu";d.VERSION="1.0.0";d.DEFAULTS={city:"北京市",initAddress:"北京市天安门"};d.prototype.init=function(){var m=this.$element;var n=this.options;var g=m.val();var l="__gmaps_baidu_id_"+new Date().getTime();var k=c('<div id="'+l+'" class="gmaps gmaps-baidu"/>');m.after(k);var f=new BMap.Map(l);var i=new BMap.Geocoder();if(g==undefined||g==""){f.centerAndZoom(n.initAddress,12)}f.enableScrollWheelZoom();f.enableContinuousZoom();f.addControl(new BMap.NavigationControl());var h=function(o){if(o){f.clearOverlays();f.panTo(o);var p=new BMap.Marker(o);f.addOverlay(p);return o}};var e=function(o){i.getPoint(o,function(p){h(p)},n.city)};var j=function(p){var r=p.split(",");var q=r[0];var s=r[1];var o=new BMap.Point(q,s);return o};if(n.gmaps=="address"){if(g&&g!=""){f.centerAndZoom(g,12)}m.on("change",function(){var o=c.trim(c(this).val());if(o!=""){e(o)}});f.addEventListener("click",function(p){var o=p.point;h(o);i.getLocation(o,function(r){var q=r.addressComponents;n.city=q.city;var s=q.province+q.city+q.district+q.street+q.streetNumber;m.val(s)})})}else{if(n.gmaps=="point"){if(m.attr("title")==undefined){m.attr("title","输入逗号分隔经纬度数字可直接移动地图点；输入其他文本则表示地址搜索功能")}if(g&&g!=""){f.centerAndZoom(j(g),12)}m.on("change",function(){var o=c.trim(c(this).val());if(o!=""){var p=o.split(",");if(p.length==2&&!isNaN(p[0])&&!isNaN(p[1])){h(j(o))}else{e(o)}}});f.addEventListener("click",function(p){var o=p.point;h(o);m.val(o.lng+","+o.lat);i.getLocation(o,function(r){var q=r.addressComponents;n.city=q.city})})}}};function b(f){var e=arguments;return this.each(function(){var i=c(this);var h=i.data("ExtGmapsBaidu");var g=c.extend({},i.data(),typeof f=="object"&&f);if(!h){i.data("ExtGmapsBaidu",(h=new d(this,g)))}if(typeof f=="string"){h[f].apply(h,c.makeArray(e).slice(1))}})}var a=c.fn.extGmapsBaidu;c.fn.extGmapsBaidu=b;c.fn.extGmapsBaidu.Constructor=d;c.fn.extGmapsBaidu.noConflict=function(){c.fn.extGmapsBaidu=a;return this};Global.addComponent({name:"ExtGmapsBaidu",plugin:b,runPoint:Global.Component_Run_Point.AfterAjaxPageShow,expr:"input[data-gmaps]"})}(jQuery);