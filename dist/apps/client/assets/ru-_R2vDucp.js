import{ev as v,ew as g,ex as x}from"./vendor-curfRiOe.js";function D(u,m){for(var n=0;n<m.length;n++){const _=m[n];if(typeof _!="string"&&!Array.isArray(_)){for(const e in _)if(e!=="default"&&!(e in u)){const o=Object.getOwnPropertyDescriptor(_,e);o&&Object.defineProperty(u,e,o.get?o:{enumerable:!0,get:()=>_[e]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var h={exports:{}};(function(u,m){(function(n,_){u.exports=_(g)})(x,function(n){function _(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var e=_(n),o="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),p="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),d="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),M="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),c=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function s(t,a,Y){var r,i;return Y==="m"?a?"минута":"минуту":t+" "+(r=+t,i={mm:a?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[Y].split("_"),r%10==1&&r%100!=11?i[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?i[1]:i[2])}var f=function(t,a){return c.test(a)?o[t.month()]:p[t.month()]};f.s=p,f.f=o;var l=function(t,a){return c.test(a)?d[t.month()]:M[t.month()]};l.s=M,l.f=d;var y={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:f,monthsShort:l,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:s,mm:s,h:"час",hh:s,d:"день",dd:s,M:"месяц",MM:s,y:"год",yy:s},ordinal:function(t){return t},meridiem:function(t){return t<4?"ночи":t<12?"утра":t<17?"дня":"вечера"}};return e.default.locale(y,null,!0),y})})(h);var L=h.exports;const b=v(L),S=D({__proto__:null,default:b},[L]);export{S as r};
//# sourceMappingURL=ru-_R2vDucp.js.map
