(this.webpackJsonpweathery=this.webpackJsonpweathery||[]).push([[0],{10:function(e,t,r){e.exports={forecastItemsWrapper:"WeekForecastItems_forecastItemsWrapper__2g9K-",forecastItemInfo:"WeekForecastItems_forecastItemInfo__1n1h_"}},17:function(e,t,r){e.exports={wrapper:"MainContainer_wrapper__2-Gu5",leftContentWrapper:"MainContainer_leftContentWrapper__1z1Dr",banner:"MainContainer_banner__5XlXT",rightContentWrapper:"MainContainer_rightContentWrapper__3HRCV"}},19:function(e,t,r){e.exports={wrapper:"CurrentDayTime_wrapper__3Bw4f",day:"CurrentDayTime_day__a9Aox"}},20:function(e,t,r){e.exports={temperature:"WeatherData_temperature__1KKqB",weatherDescription:"WeatherData_weatherDescription__1EWfw"}},21:function(e,t,r){e.exports={wrapper:"Banner_wrapper__2NzRf"}},24:function(e,t,r){e.exports={wrapper:"App_wrapper__EMWHP"}},25:function(e,t,r){e.exports={date:"CurrentDate_date__2TlWi"}},27:function(e,t,r){e.exports={myVideo:"CurrentWeatherVideo_myVideo__1xC6O"}},41:function(e,t,r){e.exports={preloaderWrapper:"Preloader_preloaderWrapper__1LzlK"}},42:function(e,t,r){},43:function(e,t,r){e.exports={dayDataWrapper:"DayData_dayDataWrapper__3UHsC"}},44:function(e,t,r){e.exports={forecastWrapper:"WeekForecastItem_forecastWrapper__2cPK9"}},51:function(e,t,r){},81:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(18),i=r.n(c),s=(r(51),r(24)),o=r.n(s),u=r(15),p=r.n(u),d=r(25),l=r.n(d),j=r(1),f=function(e){return Object(j.jsx)("div",{className:l.a.wrapper,children:Object(j.jsx)("p",{className:l.a.date,children:e.date})})},h=r(19),b=r.n(h),m=r(2),O=r.p+"static/media/preloader.56be47e5.svg",y=r(41),x=r.n(y),_=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:x.a.preloaderWrapper,children:Object(j.jsx)("img",{src:O})})})},v=function(e){return e.currentDayTime.day},g=function(e){return e.currentDayTime.date},w=function(e){return e.currentDayTime.time},D=function(e){return e.currentDayTime.isFetching},C=function(e){return Object(m.c)(D)?Object(j.jsx)(_,{}):Object(j.jsxs)("div",{className:b.a.wrapper,children:[Object(j.jsx)("p",{className:b.a.day,children:e.day}),Object(j.jsx)("p",{className:b.a.time,children:e.time})]})},W=r(42),T=r.n(W),I=r(4),N="currentDayTime/SET_CURRENT_DAY_AND_TIME",E="currentDayTime/TOGGLE_FETCHING",F={day:null,date:null,time:null,startIndex:0,isFetching:!1},S=function(e){return{type:E,isFetching:e}},k=function(e){return function(t){t(S(!0));var r=e.toLocaleDateString().split("/").join("."),n=e.getHours(),a=e.getMinutes();a<10&&(a="0"+a);var c=[n,a].join(":");t(function(e,t,r){return{type:N,day:e,date:t,time:r}}(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],r,c)),t(S(!1))}},L=function(e){var t=Object(m.c)(v),r=Object(m.c)(g),a=Object(m.c)(w),c=Object(m.b)();return Object(n.useEffect)((function(){setInterval((function(){!function(e){c(k(e))}(new Date)}),1e3)}),[t,r,a]),Object(j.jsxs)("div",{className:T.a.wrapper,children:[Object(j.jsx)(C,{day:t,time:a}),Object(j.jsx)(f,{date:r})]})},P=r(9),R=r.n(P),M=function(e){return e.userCurrentWeather.currentTemperature},G=function(e){return e.userCurrentWeather.currentWeatherDescription},U=r(8),A=r.n(U),H=r(13),V=r(14),z=r.n(V),B=z.a.create({baseURL:"https://community-open-weather-map.p.rapidapi.com/",headers:{"x-rapidapi-key":"5b1ebfdfdemshc9756a039c9c124p158fe2jsn8c2dcf327056","x-rapidapi-host":"community-open-weather-map.p.rapidapi.com"}}),K=function(e){return B.get("weather?q=".concat(e))},X="userCurrentWeather/GET_USER_CURRENT_WEATHER",q={currentTemperature:null,currentWeatherDescription:null},J=function(e,t){return{type:X,currentTemperature:e,weatherDescription:t}},Y=function(e){return e.userLocation.userCity},Q=function(e){return e.userLocation.userCountry},Z=function(e){return e.userLocation.lat},$=function(e){return e.userLocation.lon},ee=function(e){var t=Object(m.c)(M),r=Object(m.c)(Y),a=Object(m.c)(G),c=Object(m.b)(),i=function(e){c(function(e){return function(){var t=Object(H.a)(A.a.mark((function t(r){var n,a,c,i,s;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=15;break}return t.prev=1,n=e.includes(" ")?e.split(" ")[0]:e,t.next=5,K(n);case 5:a=t.sent,c=a.data,i=Math.ceil(c.main.temp-273.15),s=c.weather[0].main,r(J(i,s)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log("Some error occured");case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(n.useEffect)((function(){i(r),setInterval((function(){i(r)}),6e5)}),[t,r]),Object(j.jsxs)("div",{className:R.a.currentWeatherInfoWrapper,children:[Object(j.jsxs)("p",{className:R.a.temperature,children:[t,"\xb0C"]}),Object(j.jsx)("p",{className:R.a.currentWeatherDescription,children:a})]})},te=z.a.create({baseURL:"https://api.opencagedata.com/"}),re=function(e,t){return te.get("geocode/v1/json?q=".concat(e,"+").concat(t,"&key=744294860dd0478b89d80a08c094bda1"))},ne="userLocation/SET_USER_CITY",ae="userLocation/GET_USER_COORDS",ce={userCity:null,userCountry:null,lat:null,lon:null},ie=function(e,t){return{type:ne,userCity:e,userCountry:t}},se=function(){return function(e){navigator.geolocation.getCurrentPosition((function(t){var r,n;e(oe(t.coords.latitude,t.coords.longitude)),e((r=t.coords.latitude,n=t.coords.longitude,{type:ae,lat:r,lon:n}))}))}},oe=function(e,t){return function(){var r=Object(H.a)(A.a.mark((function r(n){var a,c,i,s;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,re(e,t);case 3:a=r.sent,c=a.data.results[0].components,i=c.country,s=c.town||c.village||c.municipality,n(ie(s,i)),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),console.log("Some error occured");case 13:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(e){return r.apply(this,arguments)}}()},ue=function(e){var t=Object(m.c)(Y),r=Object(m.c)(Q),a=Object(m.b)();return Object(n.useEffect)((function(){a(se())}),[t,r]),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{className:R.a.place,children:[t,", ",r]})})},pe=function(e){return Object(j.jsxs)("div",{className:R.a.wrapper,children:[Object(j.jsx)(ee,{}),Object(j.jsx)(ue,{})]})},de=r(20),le=r.n(de),je=r(10),fe=r.n(je),he=function(e){var t=e.temperature,r=e.weatherDescription;return Object(j.jsxs)("div",{className:le.a.weatherDataWrapper,children:[Object(j.jsx)("div",{className:p()(fe.a.forecastItemInfo,le.a.temperature),children:Object(j.jsxs)("p",{children:[t,"\xb0C"]})}),Object(j.jsx)("div",{className:p()(fe.a.forecastItemInfo,le.a.weatherDescription),children:Object(j.jsx)("p",{children:r})})]})},be=r(43),me=r.n(be),Oe=a.a.memo((function(e){var t=e.day;return Object(j.jsx)("div",{className:me.a.dayDataWrapper,children:Object(j.jsx)("div",{className:fe.a.forecastItemInfo,children:Object(j.jsx)("p",{children:t})})})})),ye=r(44),xe=r.n(ye),_e=function(e){var t=e.temperature,r=e.weatherDescription,n=e.day;return t=Math.ceil(t-273.15),"Clear"===r&&(r="Sunny"),Object(j.jsxs)("div",{className:xe.a.forecastWrapper,children:[Object(j.jsx)(he,{temperature:t,weatherDescription:r}),Object(j.jsx)(Oe,{day:n})]})},ve=function(e){return e.forecast.forecastData},ge=function(e){return e.forecast.isFetching},we=z.a.create({baseURL:"https://weatherbit-v1-mashape.p.rapidapi.com/",headers:{"x-rapidapi-key":"7fd42db77bmsh129da9804f01968p1018fcjsn872884f7434f","x-rapidapi-host":"community-open-weather-map.p.rapidapi.com"}}),De=function(e,t){return we.get("forecast/daily?lat=".concat(e,"&lon=").concat(t))},Ce="forecast/GET_FORECAST",We="forecast/TOGGLE_FETCHING",Te={forecastData:[],isFetching:!1},Ie=function(e,t){return{type:Ce,forecastData:e,currentDay:t}},Ne=function(e){return{type:We,isFetching:e}},Ee=function(e){var t=Object(m.c)(Z),r=Object(m.c)($),a=Object(m.c)(v),c=Object(m.c)(ve),i=Object(m.b)(),s=function(e,t,r){i(function(e,t,r){return function(){var n=Object(H.a)(A.a.mark((function n(a){var c,i;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,a(Ne(!0)),!e||!t){n.next=8;break}return n.next=5,De(e,t);case 5:c=n.sent,i=c.data.list,a(Ie(i,r));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log("Some error");case 13:a(Ne(!1));case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(e,t,r))};Object(n.useEffect)((function(){s(t,r,a)}),[t,r,a]);var o=(new Date).getDay(),u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return Object(m.c)(ge)?Object(j.jsx)(_,{}):Object(j.jsxs)("div",{className:fe.a.forecastItemsWrapper,children:[Object(j.jsx)("h2",{children:"Weekly forecast"}),Object(j.jsx)("div",{children:Object.keys(c).map((function(e){return Object(j.jsx)(_e,{temperature:c[e].temp.day,weatherDescription:c[e].weather[0].main,day:o+parseInt(e)>u.length-1?u[parseInt(e)%u.length-(u.length-o)]:u[o+parseInt(e)%u.length]},e)}))})]})},Fe=r(17),Se=r.n(Fe),ke=r(21),Le=r.n(ke),Pe=r.p+"static/media/logo.59a0a5e4.png",Re=function(e){return Object(j.jsxs)("div",{className:Le.a.wrapper,children:[Object(j.jsx)("div",{className:Le.a.logo,children:Object(j.jsx)("img",{src:Pe,alt:"logo"})}),Object(j.jsx)("div",{className:Le.a.name,children:Object(j.jsx)("h1",{children:"Weathery"})})]})},Me=function(e){return Object(j.jsxs)("div",{className:Se.a.wrapper,children:[Object(j.jsxs)("div",{className:Se.a.leftContentWrapper,children:[Object(j.jsx)(L,{}),Object(j.jsx)(pe,{})]}),Object(j.jsx)("div",{className:Se.a.banner,children:Object(j.jsx)(Re,{})}),Object(j.jsx)("div",{className:Se.a.rightContentWrapper,children:Object(j.jsx)(Ee,{})})]})},Ge=function(e){return e.app.isInitialized},Ue="app/INITIALIZE",Ae={isInitialized:!1},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ue:return Object(I.a)(Object(I.a)({},e),{},{isInitialized:!0});default:return e}},Ve=function(e,t){return function(e){var t=[e(se())];Promise.all([t]).then((function(){e({type:Ue})}))}},ze=r(27),Be=r.n(ze),Ke=(r.p,r.p+"static/media/Starry night.4bb8814b.mp4"),Xe=r.p+"static/media/sunny.4522a3f2.mp4",qe=(r.p,function(e){e.weather;var t,r=Object(m.c)(w);return r?(t=r.split(":")[0])>=19&&t<=23||t>=0&&t<=5?Object(j.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,id:Be.a.myVideo,children:Object(j.jsx)("source",{src:Ke,type:"video/mp4"})}):Object(j.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,id:Be.a.myVideo,children:Object(j.jsx)("source",{src:Xe,type:"video/mp4"})}):Object(j.jsx)(_,{})}),Je=function(){var e=Object(m.c)(Ge),t=Object(m.c)(G),r=(Object(m.c)(w),Object(m.b)());return Object(n.useEffect)((function(){r(Ve())}),[]),e?Object(j.jsxs)("div",{className:p()(o.a.wrapper,o.a.wrapperDay),children:[Object(j.jsx)(Me,{}),Object(j.jsx)(qe,{weather:t})]}):Object(j.jsx)(_,{})},Ye=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,82)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))},Qe=r(11),Ze=r(45),$e=Object(Qe.c)({userLocation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(I.a)(Object(I.a)({},e),{},{userCity:t.userCity,userCountry:t.userCountry});case ae:return Object(I.a)(Object(I.a)({},e),{},{lat:t.lat,lon:t.lon});default:return e}},userCurrentWeather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(I.a)(Object(I.a)({},e),{},{currentTemperature:t.currentTemperature,currentWeatherDescription:t.weatherDescription});default:return e}},app:He,currentDayTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(I.a)(Object(I.a)({},e),{},{day:t.day,date:t.date,time:t.time});case E:return Object(I.a)(Object(I.a)({},e),{},{isFetching:t.isFetching});default:return e}},forecast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ce:return Object(I.a)(Object(I.a)({},e),{},{forecastData:t.forecastData});case We:return Object(I.a)(Object(I.a)({},e),{},{isFetching:t.isFetching});default:return e}}}),et=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Qe.d,tt=Object(Qe.e)($e,et(Object(Qe.a)(Ze.a)));window.__store__=tt;var rt=tt,nt=r(46);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(nt.a,{children:Object(j.jsx)(m.a,{store:rt,children:Object(j.jsx)(Je,{})})})}),document.getElementById("root")),Ye()},9:function(e,t,r){e.exports={wrapper:"CurrentTemperatureInPlace_wrapper__3TvQr",temperature:"CurrentTemperatureInPlace_temperature__2oNgs",place:"CurrentTemperatureInPlace_place__1BhPr",currentWeatherInfoWrapper:"CurrentTemperatureInPlace_currentWeatherInfoWrapper__KmyiP",currentWeatherDescription:"CurrentTemperatureInPlace_currentWeatherDescription__Auyne"}}},[[81,1,2]]]);
//# sourceMappingURL=main.14395fa7.chunk.js.map