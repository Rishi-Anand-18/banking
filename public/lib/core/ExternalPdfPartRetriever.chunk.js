/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[7],{378:function(ia,ca,f){f.r(ca);var ba=f(1);ia=f(45);var y=f(147),ha=f(338),ea=f(201),da=window;f=function(){function f(f,w){this.KR=function(f){f=f.split(".");return f[f.length-1].match(/(jpg|jpeg|png|gif)$/i)};w=w||{};this.url=f;this.filename=w.filename||f;this.Re=w.customHeaders;this.oga=!!w.useDownloader;this.withCredentials=!!w.withCredentials}f.prototype.pC=function(f){this.Re=f};f.prototype.getCustomHeaders=function(){return this.Re};
f.prototype.getFileData=function(x){var w=this,h=this,r=new XMLHttpRequest,e=0===this.url.indexOf("blob:")?"blob":"arraybuffer";r.open("GET",this.url,!0);r.withCredentials=this.withCredentials;r.responseType=e;this.Re&&Object.keys(this.Re).forEach(function(e){r.setRequestHeader(e,w.Re[e])});var n=/^https?:/i.test(this.url);r.addEventListener("load",function(e){return Object(ba.b)(this,void 0,void 0,function(){var r,w,z,aa,ca,da;return Object(ba.d)(this,function(ba){switch(ba.label){case 0:if(200!==
this.status&&(n||0!==this.status))return[3,10];h.trigger(f.Events.DOCUMENT_LOADING_PROGRESS,[e.loaded,e.loaded]);if("blob"!==this.responseType)return[3,4];r=this.response;return h.KR(h.filename)?[4,Object(ea.b)(r)]:[3,2];case 1:return w=ba.ga(),h.fileSize=w.byteLength,x(new Uint8Array(w)),[3,3];case 2:z=new FileReader,z.onload=function(e){e=new Uint8Array(e.target.result);h.fileSize=e.length;x(e)},z.readAsArrayBuffer(r),ba.label=3;case 3:return[3,9];case 4:ba.Uj.push([4,8,,9]);aa=new Uint8Array(this.response);
if(!h.KR(h.filename))return[3,6];r=new Blob([aa.buffer]);return[4,Object(ea.b)(r)];case 5:return w=ba.ga(),h.fileSize=w.byteLength,x(new Uint8Array(w)),[3,7];case 6:h.fileSize=aa.length,x(aa),ba.label=7;case 7:return[3,9];case 8:return ba.ga(),h.trigger(f.Events.ERROR,["pdfLoad","Out of memory"]),[3,9];case 9:return[3,11];case 10:ca=e.currentTarget,da=Object(y.b)(ca),h.trigger(f.Events.ERROR,["pdfLoad",this.status+" "+ca.statusText,da]),ba.label=11;case 11:return h.Yw=null,[2]}})})},!1);r.onprogress=
function(e){h.trigger(f.Events.DOCUMENT_LOADING_PROGRESS,[e.loaded,0<e.total?e.total:0])};r.addEventListener("error",function(){h.trigger(f.Events.ERROR,["pdfLoad","Network failure"]);h.Yw=null},!1);r.send();this.Yw=r};f.prototype.getFile=function(){var f=this;return new Promise(function(w){da.utils.isJSWorker&&w(f.url);if(f.oga){var h=Object(ba.a)({url:f.url},f.Re?{customHeaders:f.Re}:{});w(h)}w(null)})};f.prototype.abort=function(){this.Yw&&(this.Yw.abort(),this.Yw=null)};f.Events={DOCUMENT_LOADING_PROGRESS:"documentLoadingProgress",
ERROR:"error"};return f}();Object(ia.a)(f);Object(ha.a)(f);Object(ha.b)(f);ca["default"]=f}}]);}).call(this || window)
