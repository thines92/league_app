function dependOn(){"use strict";return[require("util"),require("proxy"),require("analytics")]}var def;require=function(t){"use strict";return t},def=window.define?window.define:function(t,e){"use strict";return e.apply(null,[{ajax:$.ajax.bind($)}])};var exports=acom_analytics={};def(dependOn(),function(n,i,o){"use strict";var t,r,a=null,e="/static/js/aicuc/cpdf-template/sign_in_complete.html",c={"local-dev":{cloud_host:"http://local-test.acrobat.com:8002/",ims_client_id:"acom_extension_test1",ims_client_secret:"2a9d3f64-2381-4f68-ba1a-0dcdd4525a28",redirect_uri:"http://createpdf.dev.dexilab.acrobat.com"+e,cpdf_host:"http://local-test.acrobat.com:8000/",env:"local-dev"},dev:{cloud_host:"http://cloud.dev.dexilab.acrobat.com/",ims_client_id:"acom_extension",ims_client_secret:"7f5cc40b-441c-4a4a-85ac-5b8037a67a7c",redirect_uri:"https://createpdf.stage.acrobat.com"+e,cpdf_host:"http://createpdf.dev.dexilab.acrobat.com/",env:"dev"},test:{cloud_host:"https://cloud.test.dexilab.acrobat.com/",ims_client_id:"acom_extension",ims_client_secret:"7f5cc40b-441c-4a4a-85ac-5b8037a67a7c",redirect_uri:"https://createpdf.stage.acrobat.com"+e,cpdf_host:"https://createpdf.test.dexilab.acrobat.com/",env:"test"},stage:{cloud_host:"https://cloud.stage.acrobat.com/",ims_client_id:"acom_extension",ims_client_secret:"7f5cc40b-441c-4a4a-85ac-5b8037a67a7c",redirect_uri:"https://createpdf.stage.acrobat.com"+e,cpdf_host:"https://createpdf.stage.acrobat.com/",env:"stage"},prod:{cloud_host:"https://cloud.acrobat.com/",ims_client_id:"acom_extension",ims_client_secret:"f8f770cb-748d-441c-97dc-d9d684ab6698",redirect_uri:"https://createpdf.acrobat.com"+e,cpdf_host:"https://createpdf.acrobat.com/",env:"prod"}};for(t in a||(a=new function(){function t(){return"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/x/g,function(){return"0123456789abcdef"[Math.floor(16*Math.random())]})}var e={Accept:"application/vnd.adobe.dex+json;version=1",Authorization:null,"x-api-client-id":"api_browser_ext"},s={Accept:"application/vnd.adobe.dex+json;version=1","Content-Type":"application/vnd.adobe.dex+json;version=1;charset=utf-8",Authorization:null,"x-api-client-id":"api_browser_ext"};this.proxy=i.proxy.bind(this),this.util=n,this.reset=function(e){this.settings={cpdf_api:null,files_host:null,files_api:null,files_upload:null,files_root:null,fillsign_api:null,auth_token:null,ims_host:null},n.isDevEnv().then(this.proxy(function(t){void 0===e&&(e=t?"test":"prod"),r=c[e],n.extend(this.settings,r)}))},this.reset(r),this.connected=function(){return!!this.settings.auth_token},this.setGlobals=function(t){this.globals=t},this.GET_headers=function(){return e["x-request-id"]=t(),e.Authorization=this.settings.auth_token,e},this.POST_headers=function(){return s["x-request-id"]=t(),s.Authorization=this.settings.auth_token,s},this.noToken=function(t){t&&t.reject()},this.filesBaseUris=function(){var e=n.Deferred();return this.settings.files_api?e.resolve():n.ajax({url:this.settings.files_host+"api/base_uris",headers:{Accept:this.GET_headers().Accept,"x-api-client-id":this.GET_headers()["x-api-client-id"]}}).then(this.proxy(function(t){this.settings.files_api=t.api,this.settings.files_upload=t.upload,e.resolve()}),function(){e.reject()}),e.promise()},this.cloudBaseUris=function(){var e=n.Deferred();return this.settings.cloud_api?e.resolve():n.ajax({url:this.settings.cloud_host+"api/base_uris",headers:{Accept:this.GET_headers().Accept,"x-api-client-id":this.GET_headers()["x-api-client-id"]}}).then(this.proxy(function(t){this.settings.cloud_api=t.api,this.settings.files_host=t.files,this.settings.fillsign_api=t.fss,this.settings.ims_host=t.ims,this.settings.cpdf_api=t.cpdf,e.resolve()}),function(){e.reject()}),e.promise()},this.baseUris=function(){var t=n.Deferred();return this.cloudBaseUris().done(this.proxy(function(){this.filesBaseUris().done(this.proxy(function(){t.resolve()}))})),t.promise()},this.connect=function(){var i=n.Deferred();return this.settings.auth_code?this.baseUris().then(this.proxy(function(){if(this.settings.auth_code){var t={grant_type:"authorization_code",code:this.settings.auth_code,client_id:this.settings.ims_client_id,client_secret:this.settings.ims_client_secret};n.ajax({url:this.settings.ims_host+"ims/token/v1",type:"POST",data:t,contentType:"application/x-www-form-urlencoded;charset=UTF-8"}).then(this.proxy(function(t){var e=(new Date).getTime(),s=/@adobe(test)?\.com$/i.test(t.email);this.settings.auth_code=null,s?(this.settings.auth_token="Bearer "+t.access_token,this.settings.refresh_token=t.refresh_token,this.settings.token_expiry=e+t.expires_in,this.settings.refresh_time=e+t.expires_in/2,this.settings.displayName=t.displayName,i.resolve(),n.consoleLog("got auth token")):(function(t){if(n.isFF()){var e=require("chrome"),s=e.Cc,i=e.Ci;s["@mozilla.org/embedcomp/prompt-service;1"].getService(i.nsIPromptService).alert(null,"",t)}else alert(t)}("PDF Helper Extension is available to Adobe Employees only"),function(){if(o.event(o.e.EXTENSION_FORCE_UNINSTALL),n.isFF()){var t=require("chrome").Cu.import("resource://gre/modules/AddonManager.jsm").AddonManager,e=require("sdk/self").id;t.getAddonByID(e,function(t){t.uninstall()})}else chrome.management.uninstallSelf()}())}),this.proxy(function(){this.noToken(i)}))}else this.noToken(i)}),this.proxy(function(){this.noToken(i)})):i.reject(),i.promise()},this.refreshToken=function(t){var e,s=(new Date).getTime(),i=n.Deferred();return this.settings.refresh_token?!t&&s<this.settings.refresh_time?i.resolve():s>this.settings.token_expiry?i.reject():(e={grant_type:"refresh_token",refresh_token:this.settings.refresh_token,client_id:this.settings.ims_client_id,client_secret:this.settings.ims_client_secret},n.ajax({url:this.settings.ims_host+"ims/token/v1",type:"POST",data:e,contentType:"application/x-www-form-urlencoded; charset=UTF-8"}).then(this.proxy(function(t){var e=(new Date).getTime();this.settings.auth_token="Bearer "+t.access_token,this.settings.refresh_token=t.refresh_token,this.settings.token_expiry=e+t.expires_in,this.settings.refresh_time=e+t.expires_in/2,i.resolve(),n.consoleLog("refresh token result"),n.consoleLogDir(t)}),this.proxy(function(){this.noToken(i)}))):i.reject(),i.promise()},this.ajaxReady=function(t){var e=n.Deferred();return this.settings.auth_token?this.refreshToken(t).then(this.proxy(function(){e.resolve()}),this.proxy(function(){this.noToken(e)})):this.connect().then(this.proxy(function(){this.settings.files_root?e.resolve():n.ajax({url:this.settings.files_api+"root",type:"GET",headers:this.GET_headers()}).then(this.proxy(function(t){e.resolve(),this.settings.files_root=t.id}),this.proxy(function(){this.noToken(e)}))}),this.proxy(function(){this.noToken(e)})),e.promise()},this.sso_url=function(t){return n.ajax({url:this.settings.cloud_api+"session/sso_uri?path="+t,type:"GET",headers:this.GET_headers()})},this.authorize=function(t){return this.settings.auth_code=t,this.settings.auth_token=null,delete this.settings.refresh_token,delete this.settings.token_expiry,delete this.settings.refresh_time,this.ajaxReady()},this.clearAuth=function(){this.settings.auth_token&&(n.ajax({url:this.settings.cloud_api+"session",type:"DELETE",headers:s}),delete this.settings.auth_token,delete this.settings.refresh_token,delete this.settings.token_expiry,delete this.settings.refresh_time,delete this.settings.displayName)},this.LOG=function(t,e){var s=n.Deferred();if(SETTINGS.USE_ACROBAT)return s.resolve();function i(t){console.log("Failed to log to splunk"),console.dir(t),s.reject()}return e=e||20,console.log("LOG: "+JSON.stringify(t)),this.ajaxReady().then(function(){this.util.ajax({url:this.settings.files_api+"send_log_event",type:"POST",data:JSON.stringify({level:e,message:JSON.stringify(t)}),headers:this.POST_headers(),processData:!1}).then(function(){s.resolve(t)},i)}.bind(this),i),s.promise()}.bind(this)},n.ajaxError(function(t,e,s,i){401===e.status&&a.clearAuth()})),a)a.hasOwnProperty(t)&&("function"==typeof a[t]?exports[t]=a[t].bind(a):exports[t]=a[t]);return a});