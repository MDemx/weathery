(this.webpackJsonpweathery=this.webpackJsonpweathery||[]).push([[0],{10:function(e,t,r){e.exports={forecastItemsWrapper:"WeekForecastItems_forecastItemsWrapper__2g9K-",forecastItemInfo:"WeekForecastItems_forecastItemInfo__1n1h_"}},17:function(e,t,r){e.exports={wrapper:"MainContainer_wrapper__2-Gu5",leftContentWrapper:"MainContainer_leftContentWrapper__1z1Dr",banner:"MainContainer_banner__5XlXT",rightContentWrapper:"MainContainer_rightContentWrapper__3HRCV"}},19:function(e,t,r){e.exports={wrapper:"CurrentDayTime_wrapper__3Bw4f",day:"CurrentDayTime_day__a9Aox"}},20:function(e,t,r){e.exports={temperature:"WeatherData_temperature__1KKqB",weatherDescription:"WeatherData_weatherDescription__1EWfw"}},21:function(e,t,r){e.exports={wrapper:"Banner_wrapper__2NzRf"}},24:function(e,t,r){e.exports={wrapper:"App_wrapper__EMWHP"}},25:function(e,t,r){e.exports={date:"CurrentDate_date__2TlWi"}},27:function(e,t,r){e.exports={preloaderWrapper:"Preloader_preloaderWrapper__1LzlK",water:"Preloader_water__3VFjW",wave:"Preloader_wave__2Z1pz"}},28:function(e,t,r){e.exports={myVideo:"CurrentWeatherVideo_myVideo__1xC6O"}},42:function(e,t,r){},43:function(e,t,r){e.exports={dayDataWrapper:"DayData_dayDataWrapper__3UHsC"}},44:function(e,t,r){e.exports={forecastWrapper:"WeekForecastItem_forecastWrapper__2cPK9"}},51:function(e,t,r){},81:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(18),i=r.n(c),s=(r(51),r(24)),o=r.n(s),u=r(15),p=r.n(u),d=r(25),l=r.n(d),j=r(1),f=function(e){return Object(j.jsx)("div",{className:l.a.wrapper,children:Object(j.jsx)("p",{className:l.a.date,children:e.date})})},h=r(19),b=r.n(h),m=r(2),O=(r.p,r(27)),y=r.n(O),_=function(e){return Object(j.jsx)("div",{className:y.a.preloaderWrapper,children:Object(j.jsx)("div",{className:y.a.water})})},x=function(e){return e.currentDayTime.day},v=function(e){return e.currentDayTime.date},g=function(e){return e.currentDayTime.time},w=function(e){return Object(j.jsxs)("div",{className:b.a.wrapper,children:[Object(j.jsx)("p",{className:b.a.day,children:e.day}),Object(j.jsx)("p",{className:b.a.time,children:e.time})]})},C=r(42),W=r.n(C),D=r(4),T="currentDayTime/SET_CURRENT_DAY_AND_TIME",I="currentDayTime/TOGGLE_FETCHING",N={day:null,date:null,time:null,startIndex:0,isFetching:!1},E=function(e){return{type:I,isFetching:e}},F=function(e){return function(t){t(E(!0));var r=e.toLocaleDateString().split("/").join("."),n=e.getHours(),a=e.getMinutes();a<10&&(a="0"+a);var c=[n,a].join(":");t(function(e,t,r){return{type:T,day:e,date:t,time:r}}(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],r,c)),t(E(!1))}},S=function(e){var t=Object(m.c)(x),r=Object(m.c)(v),a=Object(m.c)(g),c=Object(m.b)();return Object(n.useEffect)((function(){setInterval((function(){!function(e){c(F(e))}(new Date)}),1e3)}),[t,r,a]),Object(j.jsxs)("div",{className:W.a.wrapper,children:[Object(j.jsx)(w,{day:t,time:a}),Object(j.jsx)(f,{date:r})]})},L=r(9),P=r.n(L),k=function(e){return e.userCurrentWeather.currentTemperature},G=function(e){return e.userCurrentWeather.currentWeatherDescription},R=r(8),M=r.n(R),U=r(13),H=r(14),A=r.n(H),V=A.a.create({baseURL:"https://community-open-weather-map.p.rapidapi.com/",headers:{"x-rapidapi-key":"5b1ebfdfdemshc9756a039c9c124p158fe2jsn8c2dcf327056","x-rapidapi-host":"community-open-weather-map.p.rapidapi.com"}}),z=function(e){return V.get("weather?q=".concat(e))},B="userCurrentWeather/GET_USER_CURRENT_WEATHER",K="userCurrentWeather/TOGGLE_FETCHING",X={currentTemperature:null,currentWeatherDescription:null,isFetching:!1},q=function(e){return{type:K,isFetching:e}},J=function(e,t){return{type:B,currentTemperature:e,weatherDescription:t}},Y=function(e){return e.userLocation.userCity},Z=function(e){return e.userLocation.userCountry},Q=function(e){return e.userLocation.lat},$=function(e){return e.userLocation.lon},ee=function(e){var t=Object(m.c)(k),r=Object(m.c)(Y),a=Object(m.c)(G),c=Object(m.b)(),i=function(e){c(function(e){return function(){var t=Object(U.a)(M.a.mark((function t(r){var n,a,c,i,s;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=17;break}return t.prev=1,r(q(!0)),n=e.includes(" ")?e.split(" ")[0]:e,t.next=6,z(n);case 6:a=t.sent,c=a.data,i=Math.ceil(c.main.temp-273.15),s=c.weather[0].main,r(J(i,s)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log("Some error occured");case 16:r(q(!1));case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(n.useEffect)((function(){i(r),setInterval((function(){i(r)}),6e5)}),[t,r]),Object(j.jsxs)("div",{className:P.a.currentWeatherInfoWrapper,children:[Object(j.jsxs)("p",{className:P.a.temperature,children:[t,"\xb0C"]}),Object(j.jsx)("p",{className:P.a.currentWeatherDescription,children:a})]})},te=A.a.create({baseURL:"https://api.opencagedata.com/"}),re=function(e,t){return te.get("geocode/v1/json?q=".concat(e,"+").concat(t,"&key=744294860dd0478b89d80a08c094bda1"))},ne="userLocation/SET_USER_CITY",ae="userLocation/GET_USER_COORDS",ce="userCurrentWeather/TOGGLE_FETCHING",ie={userCity:null,userCountry:null,lat:null,lon:null,isFetching:!1},se=function(e){return{type:ce,isFetching:e}},oe=function(e,t){return{type:ne,userCity:e,userCountry:t}},ue=function(){return function(e){navigator.geolocation.getCurrentPosition((function(t){var r,n;e(pe(t.coords.latitude,t.coords.longitude)),e((r=t.coords.latitude,n=t.coords.longitude,{type:ae,lat:r,lon:n}))}))}},pe=function(e,t){return function(){var r=Object(U.a)(M.a.mark((function r(n){var a,c,i,s;return M.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n(se(!0)),r.next=4,re(e,t);case 4:a=r.sent,c=a.data.results[0].components,i=c.country,s=c.town||c.village||c.municipality,n(oe(s,i)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),console.log("Some error occured");case 14:n(se(!1));case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}()},de=function(e){var t=Object(m.c)(Y),r=Object(m.c)(Z),a=Object(m.b)();return Object(n.useEffect)((function(){a(ue())}),[t,r]),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{className:P.a.place,children:[t,", ",r]})})},le=function(e){return Object(j.jsxs)("div",{className:P.a.wrapper,children:[Object(j.jsx)(ee,{}),Object(j.jsx)(de,{})]})},je=r(20),fe=r.n(je),he=r(10),be=r.n(he),me=function(e){var t=e.temperature,r=e.weatherDescription;return Object(j.jsxs)("div",{className:fe.a.weatherDataWrapper,children:[Object(j.jsx)("div",{className:p()(be.a.forecastItemInfo,fe.a.temperature),children:Object(j.jsxs)("p",{children:[t,"\xb0C"]})}),Object(j.jsx)("div",{className:p()(be.a.forecastItemInfo,fe.a.weatherDescription),children:Object(j.jsx)("p",{children:r})})]})},Oe=r(43),ye=r.n(Oe),_e=a.a.memo((function(e){var t=e.day;return Object(j.jsx)("div",{className:ye.a.dayDataWrapper,children:Object(j.jsx)("div",{className:be.a.forecastItemInfo,children:Object(j.jsx)("p",{children:t})})})})),xe=r(44),ve=r.n(xe),ge=function(e){var t=e.temperature,r=e.weatherDescription,n=e.day;return t=Math.ceil(t-273.15),"Clear"===r&&(r="Sunny"),Object(j.jsxs)("div",{className:ve.a.forecastWrapper,children:[Object(j.jsx)(me,{temperature:t,weatherDescription:r}),Object(j.jsx)(_e,{day:n})]})},we=function(e){return e.forecast.forecastData},Ce=A.a.create({baseURL:"https://weatherbit-v1-mashape.p.rapidapi.com/",headers:{"x-rapidapi-key":"7fd42db77bmsh129da9804f01968p1018fcjsn872884f7434f","x-rapidapi-host":"community-open-weather-map.p.rapidapi.com"}}),We=function(e,t){return Ce.get("forecast/daily?lat=".concat(e,"&lon=").concat(t))},De="forecast/GET_FORECAST",Te="forecast/TOGGLE_FETCHING",Ie={forecastData:[],isFetching:!1},Ne=function(e,t){return{type:De,forecastData:e,currentDay:t}},Ee=function(e){return{type:Te,isFetching:e}},Fe=function(e,t,r){return function(){var n=Object(U.a)(M.a.mark((function n(a){var c,i;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,a(Ee(!0)),!e||!t){n.next=8;break}return n.next=5,We(e,t);case 5:c=n.sent,i=c.data.list,a(Ne(i,r));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log("Some error");case 13:a(Ee(!1));case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},Se=function(e){var t=Object(m.c)(Q),r=Object(m.c)($),a=Object(m.c)(x),c=Object(m.c)(we),i=Object(m.b)();Object(n.useEffect)((function(){!function(e,t,r){i(Fe(e,t,r))}(t,r,a)}),[t,r,a]);var s=(new Date).getDay(),o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return Object(j.jsxs)("div",{className:be.a.forecastItemsWrapper,children:[Object(j.jsx)("h2",{children:"Weekly forecast"}),Object(j.jsx)("div",{children:Object.keys(c).map((function(e){return Object(j.jsx)(ge,{temperature:c[e].temp.day,weatherDescription:c[e].weather[0].main,day:s+parseInt(e)>o.length-1?o[parseInt(e)%o.length-(o.length-s)]:o[s+parseInt(e)%o.length]},e)}))})]})},Le=r(17),Pe=r.n(Le),ke=r(21),Ge=r.n(ke),Re=r.p+"static/media/logo.59a0a5e4.png",Me=function(e){return Object(j.jsxs)("div",{className:Ge.a.wrapper,children:[Object(j.jsx)("div",{className:Ge.a.logo,children:Object(j.jsx)("img",{src:Re,alt:"logo"})}),Object(j.jsx)("div",{className:Ge.a.name,children:Object(j.jsx)("h1",{children:"Weathery"})})]})},Ue=function(e){return Object(j.jsxs)("div",{className:Pe.a.wrapper,children:[Object(j.jsxs)("div",{className:Pe.a.leftContentWrapper,children:[Object(j.jsx)(S,{}),Object(j.jsx)(le,{})]}),Object(j.jsx)("div",{className:Pe.a.banner,children:Object(j.jsx)(Me,{})}),Object(j.jsx)("div",{className:Pe.a.rightContentWrapper,children:Object(j.jsx)(Se,{})})]})},He=function(e){return e.app.isInitialized},Ae="app/INITIALIZE",Ve={isInitialized:!1},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ae:return Object(D.a)(Object(D.a)({},e),{},{isInitialized:!0});default:return e}},Be=function(e,t,r){return function(n){var a=[n(ue()),n(Fe(e,t,r))];Promise.all([a]).then((function(){n({type:Ae})}))}},Ke=r(28),Xe=r.n(Ke),qe=(r.p,r.p+"static/media/Starry night.4bb8814b.mp4"),Je=r.p+"static/media/sunny.4522a3f2.mp4",Ye=(r.p,function(e){e.weather;var t,r=Object(m.c)(g);return r?(t=r.split(":")[0])>=19&&t<=23||t>=0&&t<=5?Object(j.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,id:Xe.a.myVideo,children:Object(j.jsx)("source",{src:qe,type:"video/mp4"})}):Object(j.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,id:Xe.a.myVideo,children:Object(j.jsx)("source",{src:Je,type:"video/mp4"})}):Object(j.jsx)(_,{})}),Ze=function(){var e=Object(m.c)(He),t=Object(m.c)(G),r=(Object(m.c)(g),Object(m.b)());return Object(n.useEffect)((function(){r(Be())}),[]),e?Object(j.jsxs)("div",{className:p()(o.a.wrapper,o.a.wrapperDay),children:[Object(j.jsx)(Ue,{}),Object(j.jsx)(Ye,{weather:t})]}):Object(j.jsx)(_,{})},Qe=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,82)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))},$e=r(11),et=r(45),tt=Object($e.c)({userLocation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(D.a)(Object(D.a)({},e),{},{userCity:t.userCity,userCountry:t.userCountry});case ae:return Object(D.a)(Object(D.a)({},e),{},{lat:t.lat,lon:t.lon});case ce:return Object(D.a)(Object(D.a)({},e),{},{isFetching:t.isFetching});default:return e}},userCurrentWeather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(D.a)(Object(D.a)({},e),{},{currentTemperature:t.currentTemperature,currentWeatherDescription:t.weatherDescription});case K:return Object(D.a)(Object(D.a)({},e),{},{isFetching:t.isFetching});default:return e}},app:ze,currentDayTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(D.a)(Object(D.a)({},e),{},{day:t.day,date:t.date,time:t.time});case I:return Object(D.a)(Object(D.a)({},e),{},{isFetching:t.isFetching});default:return e}},forecast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case De:return Object(D.a)(Object(D.a)({},e),{},{forecastData:t.forecastData});case Te:return Object(D.a)(Object(D.a)({},e),{},{isFetching:t.isFetching});default:return e}}}),rt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$e.d,nt=Object($e.e)(tt,rt(Object($e.a)(et.a)));window.__store__=nt;var at=nt,ct=r(46);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(ct.a,{children:Object(j.jsx)(m.a,{store:at,children:Object(j.jsx)(Ze,{})})})}),document.getElementById("root")),Qe()},9:function(e,t,r){e.exports={wrapper:"CurrentTemperatureInPlace_wrapper__3TvQr",temperature:"CurrentTemperatureInPlace_temperature__2oNgs",place:"CurrentTemperatureInPlace_place__1BhPr",currentWeatherInfoWrapper:"CurrentTemperatureInPlace_currentWeatherInfoWrapper__KmyiP",currentWeatherDescription:"CurrentTemperatureInPlace_currentWeatherDescription__Auyne"}}},[[81,1,2]]]);
//# sourceMappingURL=main.092e9767.chunk.js.map