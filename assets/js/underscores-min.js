!function(){var n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this,t=n._,r=Array.prototype,e=Object.prototype,u="undefined"!=typeof Symbol?Symbol.prototype:null,i=r.push,o=r.slice,a=e.toString,c=e.hasOwnProperty,f=Array.isArray,l=Object.keys,s=Object.create,p=function(){},h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"==typeof exports||exports.nodeType?n._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=h),exports._=h),h.VERSION="1.8.3";var v=function(n,t,r){if(void 0===t)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},y,d=function(n,t,r){return h.iteratee!==y?h.iteratee(n,t):null==n?h.identity:h.isFunction(n)?v(n,t,r):h.isObject(n)?h.matcher(n):h.property(n)};h.iteratee=y=function(n,t){return d(n,t,1/0)};var g=function(n,t){return t=null==t?n.length-1:+t,function(){for(var r=Math.max(arguments.length-t,0),e=Array(r),u=0;u<r;u++)e[u]=arguments[u+t];switch(t){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(t+1);for(u=0;u<t;u++)i[u]=arguments[u];return i[t]=e,n.apply(this,i)}},m=function(n){if(!h.isObject(n))return{};if(s)return s(n);p.prototype=n;var t=new p;return p.prototype=null,t},b=function(n){return function(t){return null==t?void 0:t[n]}},j=Math.pow(2,53)-1,x=b("length"),_=function(n){var t=x(n);return"number"==typeof t&&t>=0&&t<=j};h.each=h.forEach=function(n,t,r){t=v(t,r);var e,u;if(_(n))for(e=0,u=n.length;e<u;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;e<u;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){t=d(t,r);for(var e=!_(n)&&h.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i};var w=function(n){var t=function(t,r,e,u){var i=!_(t)&&h.keys(t),o=(i||t).length,a=n>0?0:o-1;for(u||(e=t[i?i[a]:a],a+=n);a>=0&&a<o;a+=n){var c=i?i[a]:a;e=r(e,t[c],c,t)}return e};return function(n,r,e,u){var i=arguments.length>=3;return t(n,v(r,u,4),e,i)}};h.reduce=h.foldl=h.inject=w(1),h.reduceRight=h.foldr=w(-1),h.find=h.detect=function(n,t,r){var e=_(n)?h.findIndex:h.findKey,u=e(n,t,r);if(void 0!==u&&u!==-1)return n[u]},h.filter=h.select=function(n,t,r){var e=[];return t=d(t,r),h.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},h.reject=function(n,t,r){return h.filter(n,h.negate(d(t)),r)},h.every=h.all=function(n,t,r){t=d(t,r);for(var e=!_(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},h.some=h.any=function(n,t,r){t=d(t,r);for(var e=!_(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},h.contains=h.includes=h.include=function(n,t,r,e){return _(n)||(n=h.values(n)),("number"!=typeof r||e)&&(r=0),h.indexOf(n,t,r)>=0},h.invoke=g(function(n,t,r){var e=h.isFunction(t);return h.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})}),h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matcher(t))},h.findWhere=function(n,t){return h.find(n,h.matcher(t))},h.max=function(n,t,r){var e=-(1/0),u=-(1/0),i,o;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n){n=_(n)?n:h.values(n);for(var a=0,c=n.length;a<c;a++)i=n[a],null!=i&&i>e&&(e=i)}else t=d(t,r),h.each(n,function(n,r,i){o=t(n,r,i),(o>u||o===-(1/0)&&e===-(1/0))&&(e=n,u=o)});return e},h.min=function(n,t,r){var e=1/0,u=1/0,i,o;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n){n=_(n)?n:h.values(n);for(var a=0,c=n.length;a<c;a++)i=n[a],null!=i&&i<e&&(e=i)}else t=d(t,r),h.each(n,function(n,r,i){o=t(n,r,i),(o<u||o===1/0&&e===1/0)&&(e=n,u=o)});return e},h.shuffle=function(n){return h.sample(n,1/0)},h.sample=function(n,t,r){if(null==t||r)return _(n)||(n=h.values(n)),n[h.random(n.length-1)];var e=_(n)?h.clone(n):h.values(n),u=x(e);t=Math.max(Math.min(t,u),0);for(var i=u-1,o=0;o<t;o++){var a=h.random(o,i),c=e[o];e[o]=e[a],e[a]=c}return e.slice(0,t)},h.sortBy=function(n,t,r){var e=0;return t=d(t,r),h.pluck(h.map(n,function(n,r,u){return{value:n,index:e++,criteria:t(n,r,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index}),"value")};var A=function(n,t){return function(r,e,u){var i=t?[[],[]]:{};return e=d(e,u),h.each(r,function(t,u){var o=e(t,u,r);n(i,t,o)}),i}};h.groupBy=A(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=A(function(n,t,r){n[r]=t}),h.countBy=A(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1});var O=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray=function(n){return n?h.isArray(n)?o.call(n):h.isString(n)?n.match(O):_(n)?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:_(n)?n.length:h.keys(n).length},h.partition=A(function(n,t,r){n[r?0:1].push(t)},!0),h.first=h.head=h.take=function(n,t,r){if(!(null==n||n.length<1))return null==t||r?n[0]:h.initial(n,n.length-t)},h.initial=function(n,t,r){return o.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){if(!(null==n||n.length<1))return null==t||r?n[n.length-1]:h.rest(n,Math.max(0,n.length-t))},h.rest=h.tail=h.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,Boolean)};var k=function(n,t,r,e){e=e||[];for(var u=e.length,i=0,o=x(n);i<o;i++){var a=n[i];if(_(a)&&(h.isArray(a)||h.isArguments(a)))if(t)for(var c=0,f=a.length;c<f;)e[u++]=a[c++];else k(a,t,r,e),u=e.length;else r||(e[u++]=a)}return e};h.flatten=function(n,t){return k(n,t,!1)},h.without=g(function(n,t){return h.difference(n,t)}),h.uniq=h.unique=function(n,t,r,e){h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=d(r,e));for(var u=[],i=[],o=0,a=x(n);o<a;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?h.contains(i,f)||(i.push(f),u.push(c)):h.contains(u,c)||u.push(c)}return u},h.union=g(function(n){return h.uniq(k(n,!0,!0))}),h.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=x(n);e<u;e++){var i=n[e];if(!h.contains(t,i)){var o;for(o=1;o<r&&h.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},h.difference=g(function(n,t){return t=k(t,!0,!0),h.filter(n,function(n){return!h.contains(t,n)})}),h.unzip=function(n){for(var t=n&&h.max(n,x).length||0,r=Array(t),e=0;e<t;e++)r[e]=h.pluck(n,e);return r},h.zip=g(h.unzip),h.object=function(n,t){for(var r={},e=0,u=x(n);e<u;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r};var S=function(n){return function(t,r,e){r=d(r,e);for(var u=x(t),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(r(t[i],i,t))return i;return-1}};h.findIndex=S(1),h.findLastIndex=S(-1),h.sortedIndex=function(n,t,r,e){r=d(r,e,1);for(var u=r(t),i=0,o=x(n);i<o;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i};var M=function(n,t,r){return function(e,u,i){var a=0,c=x(e);if("number"==typeof i)n>0?a=i>=0?i:Math.max(i+c,a):c=i>=0?Math.min(i+1,c):i+c+1;else if(r&&i&&c)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(o.call(e,a,c),h.isNaN),i>=0?i+a:-1;for(i=n>0?a:c-1;i>=0&&i<c;i+=n)if(e[i]===u)return i;return-1}};h.indexOf=M(1,h.findIndex,h.sortedIndex),h.lastIndexOf=M(-1,h.findLastIndex),h.range=function(n,t,r){null==t&&(t=n||0,n=0),r||(r=t<n?-1:1);for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;i<e;i++,n+=r)u[i]=n;return u},h.chunk=function(n,t){if(null==t||t<1)return[];for(var r=[],e=0,u=n.length;e<u;)r.push(o.call(n,e,e+=t));return r};var F=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=m(n.prototype),o=n.apply(i,u);return h.isObject(o)?o:i};h.bind=g(function(n,t,r){if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");var e=g(function(u){return F(n,e,t,this,r.concat(u))});return e}),h.partial=g(function(n,t){var r=h.partial.placeholder,e=function(){for(var u=0,i=t.length,o=Array(i),a=0;a<i;a++)o[a]=t[a]===r?arguments[u++]:t[a];for(;u<arguments.length;)o.push(arguments[u++]);return F(n,e,this,this,o)};return e}),h.partial.placeholder=h,h.bindAll=g(function(n,t){t=k(t,!1,!1);var r=t.length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var e=t[r];n[e]=h.bind(n[e],n)}}),h.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},h.delay=g(function(n,t,r){return setTimeout(function(){return n.apply(null,r)},t)}),h.defer=h.partial(h.delay,h,1),h.throttle=function(n,t,r){var e,u,i,o,a=0;r||(r={});var c=function(){a=r.leading===!1?0:h.now(),e=null,o=n.apply(u,i),e||(u=i=null)},f=function(){var f=h.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return u=this,i=arguments,l<=0||l>t?(e&&(clearTimeout(e),e=null),a=f,o=n.apply(u,i),e||(u=i=null)):e||r.trailing===!1||(e=setTimeout(c,l)),o};return f.cancel=function(){clearTimeout(e),a=0,e=u=i=null},f},h.debounce=function(n,t,r){var e,u,i=function(t,r){e=null,r&&(u=n.apply(t,r))},o=g(function(o){if(e&&clearTimeout(e),r){var a=!e;e=setTimeout(i,t),a&&(u=n.apply(this,o))}else e=h.delay(i,t,this,o);return u});return o.cancel=function(){clearTimeout(e),e=null},o},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},h.after=function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},h.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}},h.once=h.partial(h.before,2),h.restArgs=g;var E=!{toString:null}.propertyIsEnumerable("toString"),N=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],I=function(n,t){var r=N.length,u=n.constructor,i=h.isFunction(u)&&u.prototype||e,o="constructor";for(h.has(n,o)&&!h.contains(t,o)&&t.push(o);r--;)o=N[r],o in n&&n[o]!==i[o]&&!h.contains(t,o)&&t.push(o)};h.keys=function(n){if(!h.isObject(n))return[];if(l)return l(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return E&&I(n,t),t},h.allKeys=function(n){if(!h.isObject(n))return[];var t=[];for(var r in n)t.push(r);return E&&I(n,t),t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=n[t[u]];return e},h.mapObject=function(n,t,r){t=d(t,r);for(var e=h.keys(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=t(n[a],a,n)}return i},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;e<u;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()};var T=function(n,t){return function(r){var e=arguments.length;if(t&&(r=Object(r)),e<2||null==r)return r;for(var u=1;u<e;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;c<a;c++){var f=o[c];t&&void 0!==r[f]||(r[f]=i[f])}return r}};h.extend=T(h.allKeys),h.extendOwn=h.assign=T(h.keys),h.findKey=function(n,t,r){t=d(t,r);for(var e=h.keys(n),u,i=0,o=e.length;i<o;i++)if(u=e[i],t(n[u],u,n))return u};var B=function(n,t,r){return t in r};h.pick=g(function(n,t){var r={},e=t[0];if(null==n)return r;h.isFunction(e)?(t.length>1&&(e=v(e,t[1])),t=h.allKeys(n)):(e=B,t=k(t,!1,!1),n=Object(n));for(var u=0,i=t.length;u<i;u++){var o=t[u],a=n[o];e(a,o,n)&&(r[o]=a)}return r}),h.omit=g(function(n,t){var r=t[0],e;return h.isFunction(r)?(r=h.negate(r),t.length>1&&(e=t[1])):(t=h.map(k(t,!1,!1),String),r=function(n,r){return!h.contains(t,r)}),h.pick(n,r,e)}),h.defaults=T(h.allKeys,!0),h.create=function(n,t){var r=m(n);return t&&h.extendOwn(r,t),r},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n},h.isMatch=function(n,t){var r=h.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var R,q;R=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;if(n!==n)return t!==t;var u=typeof n;return("function"===u||"object"===u||"object"==typeof t)&&q(n,t,r,e)},q=function(n,t,r,e){n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var i=a.call(n);if(i!==a.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t;case"[object Symbol]":return u.valueOf.call(n)===u.valueOf.call(t)}var o="[object Array]"===i;if(!o){if("object"!=typeof n||"object"!=typeof t)return!1;var c=n.constructor,f=t.constructor;if(c!==f&&!(h.isFunction(c)&&c instanceof c&&h.isFunction(f)&&f instanceof f)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var l=r.length;l--;)if(r[l]===n)return e[l]===t;if(r.push(n),e.push(t),o){if(l=n.length,l!==t.length)return!1;for(;l--;)if(!R(n[l],t[l],r,e))return!1}else{var s=h.keys(n),p;if(l=s.length,h.keys(t).length!==l)return!1;for(;l--;)if(p=s[l],!h.has(t,p)||!R(n[p],t[p],r,e))return!1}return r.pop(),e.pop(),!0},h.isEqual=function(n,t){return R(n,t)},h.isEmpty=function(n){return null==n||(_(n)&&(h.isArray(n)||h.isString(n)||h.isArguments(n))?0===n.length:0===h.keys(n).length)},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=f||function(n){return"[object Array]"===a.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(n){h["is"+n]=function(t){return a.call(t)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")});var K=n.document&&n.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof K&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return!h.isSymbol(n)&&isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&isNaN(n)},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===a.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return void 0===n},h.has=function(n,t){return null!=n&&c.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=b,h.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},h.matcher=h.matches=function(n){return n=h.extendOwn({},n),function(t){return h.isMatch(t,n)}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=v(t,r,1);for(var u=0;u<n;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var z={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},D=h.invert(z),L=function(n){var t=function(t){return n[t]},r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=L(z),h.unescape=L(D),h.result=function(n,t,r){var e=null==n?void 0:n[t];return void 0===e&&(e=r),h.isFunction(e)?e.call(n):e};var P=0;h.uniqueId=function(n){var t=++P+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var W=/(.)^/,C={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},J=/\\|'|\r|\n|\u2028|\u2029/g,U=function(n){return"\\"+C[n]};h.template=function(n,t,r){!t&&r&&(t=r),t=h.defaults({},t,h.templateSettings);var e=RegExp([(t.escape||W).source,(t.interpolate||W).source,(t.evaluate||W).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(J,U),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";var o;try{o=new Function(t.variable||"obj","_",i)}catch(n){throw n.source=i,n}var a=function(n){return o.call(this,n,h)},c=t.variable||"obj";return a.source="function("+c+"){\n"+i+"}",a},h.chain=function(n){var t=h(n);return t._chain=!0,t};var V=function(n,t){return n._chain?h(t).chain():t};h.mixin=function(n){return h.each(h.functions(n),function(t){var r=h[t]=n[t];h.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),V(this,r.apply(h,n))}}),h},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];h.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],V(this,r)}}),h.each(["concat","join","slice"],function(n){var t=r[n];h.prototype[n]=function(){return V(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){return String(this._wrapped)},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}();