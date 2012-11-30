/**
 * almond 0.2.0 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

(function(){var e,t,n;(function(r){function p(e,t){var n,r,i,s,o,u,a,f,c,h,p=t&&t.split("/"),d=l.map,v=d&&d["*"]||{};if(e&&e.charAt(0)==="."&&t){p=p.slice(0,p.length-1),e=p.concat(e.split("/"));for(f=0;f<e.length;f+=1){h=e[f];if(h===".")e.splice(f,1),f-=1;else if(h===".."){if(f===1&&(e[2]===".."||e[0]===".."))break;f>0&&(e.splice(f-1,2),f-=2)}}e=e.join("/")}if((p||v)&&d){n=e.split("/");for(f=n.length;f>0;f-=1){r=n.slice(0,f).join("/");if(p)for(c=p.length;c>0;c-=1){i=d[p.slice(0,c).join("/")];if(i){i=i[r];if(i){s=i,o=f;break}}}if(s)break;!u&&v&&v[r]&&(u=v[r],a=f)}!s&&u&&(s=u,o=a),s&&(n.splice(0,o,s),e=n.join("/"))}return e}function d(e,t){return function(){return s.apply(r,h.call(arguments,0).concat([e,t]))}}function v(e){return function(t){return p(t,e)}}function m(e){return function(t){a[e]=t}}function g(e){if(f.hasOwnProperty(e)){var t=f[e];delete f[e],c[e]=!0,i.apply(r,t)}if(!a.hasOwnProperty(e)&&!c.hasOwnProperty(e))throw new Error("No "+e);return a[e]}function y(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function b(e){return function(){return l&&l.config&&l.config[e]||{}}}var i,s,o,u,a={},f={},l={},c={},h=[].slice;o=function(e,t){var n,r=y(e),i=r[0];return e=r[1],i&&(i=p(i,t),n=g(i)),i?n&&n.normalize?e=n.normalize(e,v(t)):e=p(e,t):(e=p(e,t),r=y(e),i=r[0],e=r[1],i&&(n=g(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},u={require:function(e){return d(e)},exports:function(e){var t=a[e];return typeof t!="undefined"?t:a[e]={}},module:function(e){return{id:e,uri:"",exports:a[e],config:b(e)}}},i=function(e,t,n,i){var s,l,h,p,v,y=[],b;i=i||e;if(typeof n=="function"){t=!t.length&&n.length?["require","exports","module"]:t;for(v=0;v<t.length;v+=1){p=o(t[v],i),l=p.f;if(l==="require")y[v]=u.require(e);else if(l==="exports")y[v]=u.exports(e),b=!0;else if(l==="module")s=y[v]=u.module(e);else if(a.hasOwnProperty(l)||f.hasOwnProperty(l)||c.hasOwnProperty(l))y[v]=g(l);else{if(!p.p)throw new Error(e+" missing "+l);p.p.load(p.n,d(i,!0),m(l),{}),y[v]=a[l]}}h=n.apply(a[e],y);if(e)if(s&&s.exports!==r&&s.exports!==a[e])a[e]=s.exports;else if(h!==r||!b)a[e]=h}else e&&(a[e]=n)},e=t=s=function(e,t,n,a,f){return typeof e=="string"?u[e]?u[e](t):g(o(e,t).f):(e.splice||(l=e,t.splice?(e=t,t=n,n=null):e=r),t=t||function(){},typeof n=="function"&&(n=a,a=f),a?i(r,e,t,n):setTimeout(function(){i(r,e,t,n)},15),s)},s.config=function(e){return l=e,s},n=function(e,t,n){t.splice||(n=t,t=[]),f[e]=[e,t,n]},n.amd={jQuery:!0}})(),n("almond",function(){}),n("conf",{ALLOW_KEYBOARD_INPUT:1,BACKSPACE:8,RETURN:13,FRAG_SIZE:6,FRAG_TTL:30,GAME_SCALE:20,PRINTABLE:"abcdefghijklmnopqrstuvwxyz0123456789 -",BUFFER_SIZE:40,SCORE_SIZE:9,TODO_SIZE:9,MOB_FLAVORS:3,COMMANDS:["add","commit","filter-branch","ls-files","pack-objects","remote-testgit","status","add--interactive","commit-tree","fmt-merge-msg","ls-remote","pack-redundant","repack","stripspace","am","config","for-each-ref","ls-tree","pack-refs","replace","submodule","annotate","count-objects","format-patch","mailinfo","patch-id","repo-config","svn","apply","credential-cache","fsck","mailsplit","peek-remote","request-pull","symbolic-ref","archimport","fsck-objects","merge","prune","rerere","tag","archive","credential-store","gc","merge-base","prune-packed","reset","tar-tree","bisect","cvsexportcommit","get-tar-commit-id","merge-file","pull","rev-list","unpack-file","bisect--helper","cvsimport","grep","merge-index","push","rev-parse","unpack-objects","blame","cvsserver","gui--askpass","merge-octopus","quiltimport","revert","update-index","branch","daemon","hash-object","merge-one-file","read-tree","rm","update-ref","bundle","describe","help","merge-ours","rebase","send-email","update-server-info","cat-file","diff","http-backend","merge-recursive","receive-pack","send-pack","upload-archive","check-attr","diff-files","http-fetch","merge-resolve","reflog","sh-i18n--envsubst","upload-pack","check-ref-format","diff-index","http-push","merge-subtree","relink","shell","var","checkout","diff-tree","imap-send","merge-tree","remote","shortlog","verify-pack","checkout-index","difftool","index-pack","mergetool","remote-ext","show","verify-tag","cherry","difftool--helper","init","mktag","remote-fd","show-branch","web--browse","cherry-pick","fast-export","init-db","mktree","remote-ftp","show-index","whatchanged","citool","fast-import","instaweb","mv","remote-ftps","show-ref","write-tree","clean","fetch","log","name-rev","remote-http","stage","clone","fetch-pack","lost-found","notes","remote-https","stash"]}),n("fullscreen",["conf"],function(e){function n(){if(!document.webkitFullscreenEnabled)return;t.show().click(function(){return document.webkitFullscreenElement?document.webkitExitFullscreen():document.documentElement.webkitRequestFullscreen(e.ALLOW_KEYBOARD_INPUT),!1})}var t=$("#fullscreen");return{init:n}}),n("box2d",[],function(){var e={b2_dynamicBody:Box2D.Dynamics.b2Body.b2_dynamicBody,b2_kinematicBody:Box2D.Dynamics.b2Body.b2_kinematicBody,b2_staticBody:Box2D.Dynamics.b2Body.b2_staticBody,b2BodyDef:Box2D.Dynamics.b2BodyDef,b2FixtureDef:Box2D.Dynamics.b2FixtureDef,b2Math:Box2D.Common.Math.b2Math,b2PolygonShape:Box2D.Collision.Shapes.b2PolygonShape,b2Vec2:Box2D.Common.Math.b2Vec2,b2World:Box2D.Dynamics.b2World};return e.b2BodyDef.prototype.set_angle=function(e){this.angle=e},e.b2BodyDef.prototype.set_fixedRotation=function(e){this.fixedRotation=e},e.b2BodyDef.prototype.set_position=function(e){this.position=e},e.b2BodyDef.prototype.set_type=function(e){this.type=e},e.b2FixtureDef.prototype.set_density=function(e){this.density=e},e.b2FixtureDef.prototype.set_friction=function(e){this.friction=e},e.b2FixtureDef.prototype.set_restitution=function(e){this.restitution=e},e.b2FixtureDef.prototype.set_shape=function(e){this.shape=e},e.b2Vec2.prototype.get_x=function(){return this.x},e.b2Vec2.prototype.get_y=function(){return this.y},e}),typeof requestAnimationFrame=="undefined"&&(["moz","webkit","ms"].some(function(e){var t=this[e+"RequestAnimationFrame"];if(typeof t=="function")return requestAnimationFrame=t})||(requestAnimationFrame=function(e){return setTimeout(e,0)})),n("requestAnimationFrame",[],function(){return requestAnimationFrame}),n("utils",["requestAnimationFrame"],function(e){function t(t,n){var r=Array.prototype.slice.call(arguments,2);return e(function(){n[0].clientHeight,t.apply(n,r)},1)}function n(e){return $.trim(e).replace(/  +/," ").replace(/^g /,"git ")}function o(e,t){if(!s)return;s.addRule?s.addRule(e,t):s.insertRule&&s.insertRule(e+"{"+t+"}",s.cssRules.length)}var r=function(e){for(var t in{MozTransform:1,WebkitTransform:1,OTransform:1,msTransform:1})if(typeof e.style[t]!="undefined")return t;return"transform"}(document.createElement("p")),i=["transitionend","webkitTransitionEnd","otransitionend"].join(" "),s=function(e){for(var t=0;t<e.length;++t)if(e[t].title=="main")return e[t];return null}(document.styleSheets);return{defer:t,normalize:n,transform:r,transitionend:i,updateCSS:o}}),n("Mob",["box2d","conf","utils"],function(e,n,r){function f(t,r,s,o){var f=new e.b2BodyDef;f.set_type(e.b2_dynamicBody),f.set_position(new e.b2Vec2(r,s)),f.set_angle(0);var l=new e.b2PolygonShape;l.SetAsBox(u/2,a/2);var c=new e.b2FixtureDef;c.set_density(1),c.set_friction(.3),c.set_restitution(.5),c.set_shape(l),this.body=t.CreateBody(f),this.body.CreateFixture(c),this.body.SetLinearVelocity(new e.b2Vec2(Math.random()-.5,0)),this.world=t,this.text=o,this.flavor=Math.floor(Math.random()*n.MOB_FLAVORS),this.im=$("<img class=mob src=media/mob"+this.flavor+".png width=66 height=48>")[0],this.im.ondragstart=function(){return!1},this.render(),i.append(this.im)}var i=$("#game"),s,o,u=66/n.GAME_SCALE,a=48/n.GAME_SCALE;return f.prototype.render=function(){var e=this.body.GetPosition();this.im.style.left=(e.get_x()-u/2)*n.GAME_SCALE+"px",this.im.style.top=(e.get_y()-a/2)*n.GAME_SCALE+"px",this.im.style[r.transform]="rotate("+this.body.GetAngle()+"rad)"},f.prototype.blast=function(){typeof s=="undefined"&&(s=t("game").addFrags,o=t("music").blast),s(this.body.GetPosition(),this.body.GetAngle(),this.body.GetLinearVelocity(),this.flavor),o()},f.prototype.remove=function(){$(this.im).remove(),this.blast(),this.world.DestroyBody(this.body)},f}),n("RectProp",["box2d","conf"],function(e,t){function r(t,n,r,i,s){var o=new e.b2BodyDef;o.set_position(new e.b2Vec2(n,r)),o.set_angle(0),o.set_fixedRotation(!0);var u=new e.b2PolygonShape;u.SetAsBox(i/2,s/2);var a=new e.b2FixtureDef;a.set_restitution(.5),a.set_shape(u),this.body=t.CreateBody(o),this.body.CreateFixture(a),this.width=i,this.height=s}var n=$("#game");return r.prototype.render=function(){typeof this.im=="undefined"&&(this.im=$("<div class=rect-prop>").width(this.width*t.GAME_SCALE).height(this.height*t.GAME_SCALE).appendTo(n));var e=this.body.GetPosition();this.im.css({left:(e.get_x()-this.width/2)*t.GAME_SCALE,top:(e.get_y()-this.height/2)*t.GAME_SCALE})},r}),n("Frag",["box2d","conf","utils"],function(e,t,n){function o(t,n,o,u,a,f,l){var c=new e.b2BodyDef;c.set_type(e.b2_dynamicBody),c.set_position(n),c.set_angle(o);var h=new e.b2PolygonShape;h.SetAsBox(i/2,s/2);var p=new e.b2FixtureDef;p.set_density(2.5),p.set_friction(.3),p.set_restitution(.5),p.set_shape(h),this.body=t.CreateBody(c),this.body.CreateFixture(p),this.body.SetLinearVelocity(u),this.body.ApplyImpulse(a,n),this.world=t,this.ttl=f,this.im=$("<div class=frag>")[0],this.im.className+=" mob"+l,this.render(),r.append(this.im)}var r=$("#game"),i=t.FRAG_SIZE/t.GAME_SCALE,s=t.FRAG_SIZE/t.GAME_SCALE;return o.prototype.render=function(){var e=this.body.GetPosition();this.im.style.left=(e.get_x()-i/2)*t.GAME_SCALE+"px",this.im.style.top=(e.get_y()-s/2)*t.GAME_SCALE+"px",this.im.style[n.transform]="rotate("+this.body.GetAngle()+"rad)"},o.prototype.remove=function(){$(this.im).remove(),this.world.DestroyBody(this.body)},o}),n("invader",["conf"],function(e){var t=e.FRAG_SIZE/e.GAME_SCALE,n=0,r=0,i=[],s=[],o=["  #     #  ","   #   #   ","  #######  "," ## ### ## ","###########","# ####### #","# #     # #","   ## ##   "].join("\n");for(var u=0;u<o.length;++u){var a=o[u];a==="\n"?(n^=n,++r):(a==="#"&&(i.push((n-5)*t),s.push((r-3.5)*t)),++n)}return{n:i.length,xs:i,ys:s}}),n("game",["Mob","RectProp","Frag","requestAnimationFrame","box2d","conf","invader"],function(e,t,n,r,i,s,o){function d(){r(d);var e=(new Date).getTime(),t=.01*(e-p);p=e,a.Step(t,c,h);for(var n=0;n<f.length;++n)f[n].render();for(var i=0;i<l.length;++i)l[i].ttl>0?(l[i].ttl-=t,l[i].render()):(l[i].remove(),l.splice(i,1))}function v(){var e=635/s.GAME_SCALE,n=453/s.GAME_SCALE,o=new i.b2Vec2(0,.05),u=[];a=new i.b2World(o),a.real_width=e,a.real_height=n,u.push(new t(a,e/2,0,e,1)),u.push(new t(a,e/2,n,e,1)),u.push(new t(a,0,n/2,1,n-1)),u.push(new t(a,e,n/2,1,n-1)),r(d)}function m(t){var n=40/s.GAME_SCALE,r=31/s.GAME_SCALE;n+=Math.random()*(a.real_width-n-n);var i=new e(a,n,r,t);return f.push(i),i.flavor}function g(e){for(var t=0;t<f.length;++t)if(f[t].text==e){f[t].remove(),f.splice(t,1);return}}function y(e,t,r,u){function d(e,t){return new i.b2Vec2(f+h*e-p*t,c+h*t+p*e)}var f=e.get_x(),c=e.get_y(),h=Math.cos(t),p=Math.sin(t);for(var v=0;v<o.n;++v){var m=d(o.xs[v],o.ys[v]),g=i.b2Math.SubtractVV(e,m);l.push(new n(a,m,t,r,g,s.FRAG_TTL+v*.25,u))}}var u=$("#game"),a,f=[],l=[],c=8,h=3,p=(new Date).getTime();return{init:v,addMob:m,removeMob:g,addFrags:y}}),n("keyboard",["conf","utils"],function(e,n){function s(t){return e.PRINTABLE.indexOf(t)!==-1}function o(){function l(e){return function(){r[e===f?"addClass":"removeClass"]("text-caret-animated")}}var o=t("ui").readline,u=t("todo").done,a=t("music").blip,f=0;$(document.documentElement).keydown(function(t){t.which===e.BACKSPACE&&(i.length!==0?(i=i.substr(0,i.length-1),o(i)):a(),t.preventDefault&&t.preventDefault())}),$(document.documentElement).keypress(function(t){if(t.metaKey||t.altKey||t.ctrlKey)return;setTimeout(l(++f),250);var r=String.fromCharCode(t.which).toLowerCase();t.which===e.RETURN?(o("",i),u(n.normalize(i)),i="",t.preventDefault&&t.preventDefault()):r.length===1&&s(r)?(i.length<e.BUFFER_SIZE?(i+=r,o(i)):a(),t.preventDefault&&t.preventDefault()):t.which!==e.BACKSPACE&&a()})}var r=$(".text-caret"),i="";return{init:o}}),n("music",["utils"],function(e){function a(){t=soundManager.createSound({autoLoad:!0,id:"bgm",loops:9e3,multiShot:!1,url:"media/sound/bgm.mp3",volume:90}),n=soundManager.createSound({autoLoad:!0,id:"blast",url:"media/sound/blast.wav"}),r=soundManager.createSound({autoLoad:!0,id:"blip",url:"media/sound/blip.wav"}),i=soundManager.createSound({autoLoad:!0,id:"game_over",multiShot:!1,url:"media/sound/game_over.wav"}),s=soundManager.createSound({autoLoad:!0,id:"warp",url:"media/sound/warp.wav",volume:90}),o.remove(),$("#music-on").change(function(){t[["stop","play"][this.checked|0]]()}),$("#sound-on").change(function(){u=this.checked})}function f(){soundManager.setup({debugMode:!1,flashLoadTimeout:9e3,flashVersion:9,onready:a,preferFlash:!1,url:"media/sound/"})}function l(){u&&n&&n.play()}function c(){u&&r&&r.play()}function h(){u&&i&&i.play()}function p(){u&&s&&s.play()}var t,n,r,i,s,o=$("#console-disable"),u=$("#sound-on").is(":checked");return{init:f,blast:l,blip:c,game_over:h,warp:p}}),n("todo",["conf","utils"],function(e,n){function d(e){r.push(e);var t=_addMob(e);i(e,t),o(r.length),f()}function v(){var e=location.search.substr(1,4);e=="norm"?c=1:e=="hard"&&(c=2),y(),$("#level-select ."+l[c]).addClass("btn-primary active"),$("#level-restart a, #game-over a").attr("href","?"+l[c])}function m(){var e=t("game"),n=t("ui"),l=t("music");r=[],_addMob=e.addMob,i=n.addTask,s=n.removeTask,o=n.updateCount,u=n.updateScore,a=n.endGame,f=l.warp,v(),d("git init")}function g(){r.length===e.TODO_SIZE?p||a():d("git "+e.COMMANDS[Math.floor(Math.random()*e.COMMANDS.length)])}function y(){h-=.1*(c+1),console.log("new speed",h),n.updateCSS("#next.done","-moz-transition: width "+h+"s linear;"+"-webkit-transition: width "+h+"s linear;"+"-o-transition: width "+h+"s linear;")}function b(e){var t=r.indexOf(e);t!==-1&&(r.splice(t,1),s(e,r.length),o(r.length),u(100+c*100)),e==="iddqd"&&(p=!0,$("#game").css({backgroundImage:"url(media/baka.png)",backgroundPosition:"2px 200px",backgroundRepeat:"no-repeat"}))}var r,i,s,o,u,a,f,l=["easy","norm","hard"],c=0,h=3,p=!1;return{push:d,init:m,advance:g,changeSpeed:y,done:b}}),n("ui",["conf","utils"],function(e,n){function v(){n.defer(o.addClass,o,"done"),o.removeClass("done"),c()}function m(){var r=t("game"),i=t("todo");l=r.removeMob,c=i.advance,h=i.changeSpeed,o.bind(n.transitionend,v);for(var s=0;s<e.MOB_FLAVORS;++s){var u=new Image;u.src="media/mob"+s+".png"}var a=$("body");n.defer(a.removeClass,a,"loading")}function g(e,t){(p||n.normalize(t)==="git init")&&typeof t=="string"&&(s.children(":first").remove(),s.children(":first").after("<li>history> "+t+"</li>")),i.text(e)}function y(e,t){var r=$("<div class=task>").attr("data-text",e).text(e),i=$("<img src=media/mob"+t+".png width=33 height=24>").appendTo(r);a.append(r),n.defer(r.addClass,r,"active")}function b(){function e(){$(this).remove()}$("#instructions").remove(),$("#github").slideUp(e),$("#fullscreen").hide(e)}function w(e,t){p||(setTimeout(b,0),p=!0),t||v();var r=a.children('.task[data-text="'+e+'"]').first();l(e),r.removeClass("active").bind(n.transitionend,function(){var e=$("<div class=replacement>");$(this).replaceWith(e),n.defer(e.addClass,e,"foo"),e.bind(n.transitionend,function(){$(this).remove()})})}function E(t){r.css("width",f/e.TODO_SIZE*t+"px"),t===e.TODO_SIZE&&r.addClass("danger")}function S(t){var n="00000000"+t;return n.substr(n.length-e.SCORE_SIZE)}function x(e){var t=d;u.text(S(d+=e)),(.001*d|0)!=(.001*t|0)&&h()}function T(){o.remove(),$(document.documentElement).unbind("keypress"),$("#high-score").text(S(d)),$("#game-over").modal({backdrop:"static",keyboard:!1}),t("music").game_over()}var r=$("#count"),i=$("#input"),s=$("#lines"),o=$("#next"),u=$("#score"),a=$("#todo"),f=a.width(),l,c,h,p=!1,d=0;return{init:m,readline:g,addTask:y,removeTask:w,updateCount:E,updateScore:x,endGame:T}});if(!Array.prototype.indexOf){var r="This MSIE is not supported.";throw alert(r),new Error(r)}window.console||(console={log:function(){}}),t(["fullscreen","game","keyboard","music","todo","ui"],function(){for(var e=0;e<arguments.length;++e)arguments[e].init()}),n("main",function(){})})();