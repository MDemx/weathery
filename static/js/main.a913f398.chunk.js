(this.webpackJsonpweathery=this.webpackJsonpweathery||[]).push([[0],{10:function(e,t,r){e.exports={forecastItemsWrapper:"WeekForecastItems_forecastItemsWrapper__2g9K-",forecastItemInfo:"WeekForecastItems_forecastItemInfo__1n1h_"}},17:function(e,t,r){e.exports={wrapper:"MainContainer_wrapper__2-Gu5",leftContentWrapper:"MainContainer_leftContentWrapper__1z1Dr",banner:"MainContainer_banner__5XlXT",rightContentWrapper:"MainContainer_rightContentWrapper__3HRCV"}},19:function(e,t,r){e.exports={wrapper:"CurrentDayTime_wrapper__3Bw4f",day:"CurrentDayTime_day__a9Aox"}},20:function(e,t,r){e.exports={errorTextWrapper:"ErrorPopUp_errorTextWrapper__2xSbe",errorIcon:"ErrorPopUp_errorIcon__1EhYf",errorText:"ErrorPopUp_errorText__3m5WQ"}},21:function(e,t,r){e.exports={temperature:"WeatherData_temperature__1KKqB",weatherDescription:"WeatherData_weatherDescription__1EWfw"}},22:function(e,t,r){e.exports={wrapper:"Banner_wrapper__2NzRf"}},25:function(e,t,r){e.exports={wrapper:"App_wrapper__EMWHP"}},26:function(e,t,r){e.exports={date:"CurrentDate_date__2TlWi"}},28:function(e,t,r){e.exports={preloaderWrapper:"Preloader_preloaderWrapper__1LzlK",water:"Preloader_water__3VFjW",wave:"Preloader_wave__2Z1pz"}},29:function(e,t,r){e.exports={myVideo:"CurrentWeatherVideo_myVideo__1xC6O"}},43:function(e,t,r){},44:function(e,t,r){e.exports={dayDataWrapper:"DayData_dayDataWrapper__3UHsC"}},45:function(e,t,r){e.exports={forecastWrapper:"WeekForecastItem_forecastWrapper__2cPK9"}},52:function(e,t,r){},82:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(18),i=r.n(c),s=(r(52),r(25)),o=r.n(s),u=r(15),p=r.n(u),l=r(26),d=r.n(l),j=r(1),f=function(e){return Object(j.jsx)("div",{className:d.a.wrapper,children:Object(j.jsx)("p",{className:d.a.date,children:e.date})})},h=r(19),b=r.n(h),m=r(2),O=(r.p,r(28)),_=r.n(O),x=function(e){return Object(j.jsx)("div",{className:_.a.preloaderWrapper,children:Object(j.jsx)("div",{className:_.a.water})})},y=function(e){return e.currentDayTime.day},v=function(e){return e.currentDayTime.date},w=function(e){return e.currentDayTime.time},g=function(e){return Object(j.jsxs)("div",{className:b.a.wrapper,children:[Object(j.jsx)("p",{className:b.a.day,children:e.day}),Object(j.jsx)("p",{className:b.a.time,children:e.time})]})},T=r(43),W=r.n(T),C=r(4),D="currentDayTime/SET_CURRENT_DAY_AND_TIME",I="currentDayTime/TOGGLE_FETCHING",N={day:null,date:null,time:null,startIndex:0,isFetching:!1},E=function(e){return{type:I,isFetching:e}},F=function(e){return function(t){t(E(!0));var r=e.toLocaleDateString().split("/").join("."),n=e.getHours(),a=e.getMinutes();a<10&&(a="0"+a);var c=[n,a].join(":");t(function(e,t,r){return{type:D,day:e,date:t,time:r}}(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],r,c)),t(E(!1))}},S=function(e){var t=Object(m.c)(y),r=Object(m.c)(v),a=Object(m.c)(w),c=Object(m.b)();return Object(n.useEffect)((function(){setInterval((function(){!function(e){c(F(e))}(new Date)}),1e3)}),[t,r,a]),Object(j.jsxs)("div",{className:W.a.wrapper,children:[Object(j.jsx)(g,{day:t,time:a}),Object(j.jsx)(f,{date:r})]})},P=r(9),L=r.n(P),R=function(e){return e.userCurrentWeather.currentTemperature},k=function(e){return e.userCurrentWeather.currentWeatherDescription},G=r(8),U=r.n(G),M=r(13),H=r(14),A=r.n(H),V=A.a.create({baseURL:"https://community-open-weather-map.p.rapidapi.com/",headers:{"x-rapidapi-key":"5b1ebfdfdemshc9756a039c9c124p158fe2jsn8c2dcf327056","x-rapidapi-host":"community-open-weather-map.p.rapidapi.com"}}),z=function(e){return V.get("weather?q=".concat(e))},B="userCurrentWeather/GET_USER_CURRENT_WEATHER",K="userCurrentWeather/TOGGLE_FETCHING",X={currentTemperature:null,currentWeatherDescription:null,isFetching:!1},q=function(e){return{type:K,isFetching:e}},Y=function(e,t){return{type:B,currentTemperature:e,weatherDescription:t}},J=function(e){return e.userLocation.userCity},Q=function(e){return e.userLocation.userCountry},Z=function(e){return e.userLocation.lat},$=function(e){return e.userLocation.lon},ee=function(e){return e.userLocation.error},te=function(e){var t=Object(m.c)(R),r=Object(m.c)(J),a=Object(m.c)(k),c=Object(m.b)(),i=function(e){c(function(e){return function(){var t=Object(M.a)(U.a.mark((function t(r){var n,a,c,i,s;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=17;break}return t.prev=1,r(q(!0)),n=e.includes(" ")?e.split(" ")[0]:e,t.next=6,z(n);case 6:a=t.sent,c=a.data,i=Math.ceil(c.main.temp-273.15),s=c.weather[0].main,r(Y(i,s)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log("Some error occured");case 16:r(q(!1));case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(n.useEffect)((function(){i(r),setInterval((function(){i(r)}),6e5)}),[t,r]),Object(j.jsxs)("div",{className:L.a.currentWeatherInfoWrapper,children:[Object(j.jsxs)("p",{className:L.a.temperature,children:[t,"\xb0C"]}),Object(j.jsx)("p",{className:L.a.currentWeatherDescription,children:a})]})},re=A.a.create({baseURL:"https://api.opencagedata.com/"}),ne=function(e,t){return re.get("geocode/v1/json?q=".concat(e,"+").concat(t,"&key=744294860dd0478b89d80a08c094bda1"))},ae="userLocation/SET_USER_CITY",ce="userLocation/GET_USER_COORDS",ie="userCurrentWeather/TOGGLE_FETCHING",se="userCurrentWeather/SET_ERROR",oe={userCity:null,userCountry:null,lat:null,lon:null,isFetching:!1,error:null},ue=function(e){return{type:se,error:e}},pe=function(e,t){return{type:ae,userCity:e,userCountry:t}},le=function(){return function(e){navigator.geolocation.getCurrentPosition((function(t){var r,n;e(de(t.coords.latitude,t.coords.longitude)),e((r=t.coords.latitude,n=t.coords.longitude,{type:ce,lat:r,lon:n}))}))}},de=function(e,t){return function(){var r=Object(M.a)(U.a.mark((function r(n){var a,c,i,s;return U.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n(ue(!0)),r.next=4,ne(e,t);case 4:a=r.sent,c=a.data.results[0].components,i=c.country,s=c.town||c.village||c.municipality,n(pe(s,i)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),console.log("Some error occured");case 14:n(ue(!1));case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}()},je=r(20),fe=r.n(je),he=function(e){var t=e.errorText;return Object(j.jsxs)("div",{className:fe.a.errorTextWrapper,children:[Object(j.jsx)("div",{className:fe.a.errorIcon,children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22",children:Object(j.jsx)("path",{d:"m117.18 31.592c-5.595-9.586-13.185-17.18-22.771-22.771-9.588-5.595-20.06-8.392-31.408-8.392-11.352 0-21.822 2.797-31.408 8.392-9.587 5.594-17.18 13.184-22.772 22.771-5.596 9.587-8.393 20.06-8.393 31.408 0 11.352 2.798 21.82 8.392 31.408 5.595 9.585 13.185 17.18 22.772 22.771 9.587 5.595 20.06 8.392 31.408 8.392 11.352 0 21.822-2.797 31.408-8.392 9.586-5.594 17.18-13.185 22.771-22.771 5.594-9.587 8.391-20.06 8.391-31.408 0-11.352-2.797-21.822-8.39-31.408m-24.687 46.15c1.032 1.031 1.549 2.255 1.549 3.667 0 1.466-.517 2.716-1.549 3.747l-7.332 7.333c-1.032 1.032-2.281 1.548-3.748 1.548-1.412 0-2.636-.516-3.666-1.548l-14.747-14.747-14.747 14.747c-1.032 1.032-2.254 1.548-3.666 1.548-1.467 0-2.716-.516-3.748-1.548l-7.333-7.333c-1.032-1.031-1.548-2.281-1.548-3.747 0-1.412.516-2.636 1.548-3.667l14.747-14.746-14.747-14.747c-1.032-1.031-1.548-2.254-1.548-3.666 0-1.467.516-2.716 1.548-3.748l7.333-7.332c1.032-1.032 2.281-1.548 3.748-1.548 1.412 0 2.634.516 3.666 1.548l14.747 14.746 14.747-14.746c1.03-1.032 2.254-1.548 3.666-1.548 1.467 0 2.716.516 3.748 1.548l7.332 7.332c1.032 1.032 1.549 2.281 1.549 3.748 0 1.412-.517 2.635-1.549 3.666l-14.746 14.747 14.746 14.746",transform:"matrix(.12785 0 0 .12785 2.95 2.948)",fill:"#da4453"})})}),Object(j.jsx)("div",{className:fe.a.errorText,children:t})]})},be=function(e){var t=Object(m.c)(J),r=Object(m.c)(Q),a=Object(m.c)(ee),c=Object(m.b)();return t||function(e){c(function(e){return{type:se,error:e}}(e))}("Unable to load data from github pages"),Object(n.useEffect)((function(){c(le())}),[t,r]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{className:L.a.place,children:[t,", ",r]}),a&&Object(j.jsx)(he,{errorText:a})]})},me=function(e){return Object(j.jsxs)("div",{className:L.a.wrapper,children:[Object(j.jsx)(te,{}),Object(j.jsx)(be,{})]})},Oe=r(21),_e=r.n(Oe),xe=r(10),ye=r.n(xe),ve=function(e){var t=e.temperature,r=e.weatherDescription;return Object(j.jsxs)("div",{className:_e.a.weatherDataWrapper,children:[Object(j.jsx)("div",{className:p()(ye.a.forecastItemInfo,_e.a.temperature),children:Object(j.jsxs)("p",{children:[t,"\xb0C"]})}),Object(j.jsx)("div",{className:p()(ye.a.forecastItemInfo,_e.a.weatherDescription),children:Object(j.jsx)("p",{children:r})})]})},we=r(44),ge=r.n(we),Te=a.a.memo((function(e){var t=e.day;return Object(j.jsx)("div",{className:ge.a.dayDataWrapper,children:Object(j.jsx)("div",{className:ye.a.forecastItemInfo,children:Object(j.jsx)("p",{children:t})})})})),We=r(45),Ce=r.n(We),De=function(e){var t=e.temperature,r=e.weatherDescription,n=e.day;return t=Math.ceil(t-273.15),"Clear"===r&&(r="Sunny"),Object(j.jsxs)("div",{className:Ce.a.forecastWrapper,children:[Object(j.jsx)(ve,{temperature:t,weatherDescription:r}),Object(j.jsx)(Te,{day:n})]})},Ie=function(e){return e.forecast.forecastData},Ne=A.a.create({baseURL:"https://weatherbit-v1-mashape.p.rapidapi.com/",headers:{"x-rapidapi-key":"7fd42db77bmsh129da9804f01968p1018fcjsn872884f7434f","x-rapidapi-host":"community-open-weather-map.p.rapidapi.com"}}),Ee=function(e,t){return Ne.get("forecast/daily?lat=".concat(e,"&lon=").concat(t))},Fe="forecast/GET_FORECAST",Se="forecast/TOGGLE_FETCHING",Pe={forecastData:[],isFetching:!1},Le=function(e,t){return{type:Fe,forecastData:e,currentDay:t}},Re=function(e){return{type:Se,isFetching:e}},ke=function(e,t,r){return function(){var n=Object(M.a)(U.a.mark((function n(a){var c,i;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,a(Re(!0)),!e||!t){n.next=8;break}return n.next=5,Ee(e,t);case 5:c=n.sent,i=c.data.list,a(Le(i,r));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log("Some error");case 13:a(Re(!1));case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},Ge=function(e){var t=Object(m.c)(Z),r=Object(m.c)($),a=Object(m.c)(y),c=Object(m.c)(Ie),i=Object(m.b)();Object(n.useEffect)((function(){!function(e,t,r){i(ke(e,t,r))}(t,r,a)}),[t,r,a]);var s=(new Date).getDay(),o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return Object(j.jsxs)("div",{className:ye.a.forecastItemsWrapper,children:[Object(j.jsx)("h2",{children:"Weekly forecast"}),Object(j.jsx)("div",{children:Object.keys(c).map((function(e){return Object(j.jsx)(De,{temperature:c[e].temp.day,weatherDescription:c[e].weather[0].main,day:s+parseInt(e)>o.length-1?o[parseInt(e)%o.length-(o.length-s)]:o[s+parseInt(e)%o.length]},e)}))})]})},Ue=r(17),Me=r.n(Ue),He=r(22),Ae=r.n(He),Ve=r.p+"static/media/logo.59a0a5e4.png",ze=function(e){return Object(j.jsxs)("div",{className:Ae.a.wrapper,children:[Object(j.jsx)("div",{className:Ae.a.logo,children:Object(j.jsx)("img",{src:Ve,alt:"logo"})}),Object(j.jsx)("div",{className:Ae.a.name,children:Object(j.jsx)("h1",{children:"Weathery"})})]})},Be=function(e){return Object(j.jsxs)("div",{className:Me.a.wrapper,children:[Object(j.jsxs)("div",{className:Me.a.leftContentWrapper,children:[Object(j.jsx)(S,{}),Object(j.jsx)(me,{})]}),Object(j.jsx)("div",{className:Me.a.banner,children:Object(j.jsx)(ze,{})}),Object(j.jsx)("div",{className:Me.a.rightContentWrapper,children:Object(j.jsx)(Ge,{})})]})},Ke=function(e){return e.app.isInitialized},Xe="app/INITIALIZE",qe={isInitialized:!1},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Xe:return Object(C.a)(Object(C.a)({},e),{},{isInitialized:!0});default:return e}},Je=function(e,t,r){return function(n){var a=[n(le()),n(ke(e,t,r))];Promise.all([a]).then((function(){n({type:Xe})}))}},Qe=r(29),Ze=r.n(Qe),$e=(r.p,r.p+"static/media/Starry night.4bb8814b.mp4"),et=r.p+"static/media/sunny.4522a3f2.mp4",tt=(r.p,function(e){e.weather;var t,r=Object(m.c)(w);return r?(t=r.split(":")[0])>=19&&t<=23||t>=0&&t<=5?Object(j.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,id:Ze.a.myVideo,children:Object(j.jsx)("source",{src:$e,type:"video/mp4"})}):Object(j.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,id:Ze.a.myVideo,children:Object(j.jsx)("source",{src:et,type:"video/mp4"})}):Object(j.jsx)(x,{})}),rt=function(){var e=Object(m.c)(Ke),t=Object(m.c)(k),r=Object(m.b)();return Object(n.useEffect)((function(){r(Je())}),[e]),e?Object(j.jsxs)("div",{className:p()(o.a.wrapper,o.a.wrapperDay),children:[Object(j.jsx)(Be,{}),Object(j.jsx)(tt,{weather:t})]}):Object(j.jsx)(x,{})},nt=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,83)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))},at=r(11),ct=r(46),it=Object(at.c)({userLocation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return Object(C.a)(Object(C.a)({},e),{},{userCity:t.userCity,userCountry:t.userCountry});case ce:return Object(C.a)(Object(C.a)({},e),{},{lat:t.lat,lon:t.lon});case ie:return Object(C.a)(Object(C.a)({},e),{},{isFetching:t.isFetching});case se:return Object(C.a)(Object(C.a)({},e),{},{error:t.error});default:return e}},userCurrentWeather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(C.a)(Object(C.a)({},e),{},{currentTemperature:t.currentTemperature,currentWeatherDescription:t.weatherDescription});case K:return Object(C.a)(Object(C.a)({},e),{},{isFetching:t.isFetching});default:return e}},app:Ye,currentDayTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(C.a)(Object(C.a)({},e),{},{day:t.day,date:t.date,time:t.time});case I:return Object(C.a)(Object(C.a)({},e),{},{isFetching:t.isFetching});default:return e}},forecast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe:return Object(C.a)(Object(C.a)({},e),{},{forecastData:t.forecastData});case Se:return Object(C.a)(Object(C.a)({},e),{},{isFetching:t.isFetching});default:return e}}}),st=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||at.d,ot=Object(at.e)(it,st(Object(at.a)(ct.a)));window.__store__=ot;var ut=ot,pt=r(47);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(pt.a,{children:Object(j.jsx)(m.a,{store:ut,children:Object(j.jsx)(rt,{})})})}),document.getElementById("root")),nt()},9:function(e,t,r){e.exports={wrapper:"CurrentTemperatureInPlace_wrapper__3TvQr",temperature:"CurrentTemperatureInPlace_temperature__2oNgs",place:"CurrentTemperatureInPlace_place__1BhPr",currentWeatherInfoWrapper:"CurrentTemperatureInPlace_currentWeatherInfoWrapper__KmyiP",currentWeatherDescription:"CurrentTemperatureInPlace_currentWeatherDescription__Auyne"}}},[[82,1,2]]]);
//# sourceMappingURL=main.a913f398.chunk.js.map