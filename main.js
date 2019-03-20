(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <link href=\"https://fonts.googleapis.com/css?family=Pacifico|Roboto:300\" rel=\"stylesheet\">\n</head>\n<section>\n<div class=\"row\">\n  <h1>ABOUT</h1>\n  <div class=\"col-md-5 blocks col-sm-4\">\n    <img src=\"/portfolio/assets/img/mypic.jpg\" alt=\"mypic\">\n    <p class=\"text\">\n      Skilled in Front-end Designing and Databases.\n      Strong knowledge on Web Designing tools and frameworks with IT industry experience and a Masters degree in Computer Science from University of Dayton.</p>\n  </div>\n  <div class=\"col-md-4 blocks col-sm-5\">\n    <div class=\"bar\">\n      <div class=\"fill f1\">\n        <p>HTML</p><p class=\"percent\">90%</p>\n\n      </div>\n    </div>\n    <div class=\"bar\">\n      <div class=\"fill f2\">\n        <p>CSS3</p>\n        <p class=\"percent\">80%</p>\n      </div>\n    </div>\n    <div class=\"bar\">\n      <div class=\"fill f3\">\n        <p>Sass</p>\n        <p class=\"percent\">60%</p>\n      </div>\n    </div>\n    <div class=\"bar\">\n      <div class=\"fill f2\">\n        <p>JavaScript</p>\n        <p class=\"percent\">80%</p>\n      </div>\n    </div>\n    <div class=\"bar\">\n      <div class=\"fill f1\">\n        <p>Bootstrap</p>\n        <p class=\"percent\">90%</p>\n      </div>\n    </div>\n    <div class=\"bar\">\n      <div class=\"fill f2\">\n        <p>Angular</p>\n        <p class=\"percent\">80%</p>\n      </div>\n    </div>\n    <div class=\"bar\">\n      <div class=\"fill f4\">\n        <p>jQuery</p>\n        <p class=\"percent\">50%</p>\n      </div>\n    </div>\n    <div class=\"bar\">\n      <div class=\"fill f4\">\n        <p>Illustrator</p>\n        <p class=\"percent\">50%</p>\n      </div>\n    </div>\n    <div class=\"bar\">\n      <div class=\"fill f4\">\n        <p>Photoshop</p>\n        <p class=\"percent\">50%</p>\n      </div>\n    </div>\n  </div>\n\n</div>\n</section>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  padding: 0% 5% 5%;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('block-bg.jpg');\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed; }\n\nh1 {\n  text-align: center;\n  margin-bottom: 5%;\n  margin-top: 5%;\n  font-size: 48px;\n  font-family: 'Roboto', sans-serif;\n  color: white; }\n\n.blocks {\n  margin: 0% 5%; }\n\nimg {\n  width: 50%;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  border-radius: 10%; }\n\n.text {\n  text-align: center;\n  padding: 10px;\n  padding-top: 20px;\n  font-size: 15px;\n  font-family: 'Roboto', sans-serif;\n  color: #ebebeb; }\n\n.bar {\n  width: 80%;\n  height: 30px;\n  background-color: #f0f0f0;\n  margin: 20px;\n  margin-left: 10%; }\n\n.fill {\n  height: 30px;\n  background-color: #06b2d2;\n  font-size: 20px;\n  padding-left: 10px;\n  font-family: 'Roboto', san-serif;\n  color: white; }\n\n.f1 {\n  width: 90%;\n  -webkit-animation: Fill1 5s ease;\n          animation: Fill1 5s ease; }\n\n@-webkit-keyframes Fill1 {\n  0% {\n    width: 0%; }\n  100% {\n    width: 90%; } }\n\n@keyframes Fill1 {\n  0% {\n    width: 0%; }\n  100% {\n    width: 90%; } }\n\n.f2 {\n  width: 80%;\n  -webkit-animation: Fill2 5s ease;\n          animation: Fill2 5s ease; }\n\n@-webkit-keyframes Fill2 {\n  0% {\n    width: 0%; }\n  100% {\n    width: 80%; } }\n\n@keyframes Fill2 {\n  0% {\n    width: 0%; }\n  100% {\n    width: 80%; } }\n\n.f3 {\n  width: 60%;\n  -webkit-animation: Fill3 5s ease;\n          animation: Fill3 5s ease; }\n\n@-webkit-keyframes Fill3 {\n  0% {\n    width: 0%; }\n  100% {\n    width: 60%; } }\n\n@keyframes Fill3 {\n  0% {\n    width: 0%; }\n  100% {\n    width: 60%; } }\n\n.f4 {\n  width: 50%;\n  -webkit-animation: Fill4 5s ease;\n          animation: Fill4 5s ease; }\n\n@-webkit-keyframes Fill4 {\n  0% {\n    width: 0%; }\n  100% {\n    width: 50%; } }\n\n@keyframes Fill4 {\n  0% {\n    width: 0%; }\n  100% {\n    width: 50%; } }\n\n.percent {\n  font-size: 10px;\n  text-align: right;\n  margin-top: -5px;\n  padding-right: 10px;\n  font-family: 'Dancing Script', cursive;\n  color: white; }\n\n@media (max-width: 768px) {\n  h1 {\n    font-size: 16px; }\n  img {\n    width: 30%;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    border-radius: 10%; }\n  .text {\n    font-size: 10px; }\n  .bar {\n    height: 15px; }\n  .fill {\n    height: 15px;\n    font-size: 12px; }\n  .percent {\n    font-size: 10px; } }\n\n@media (min-width: 769px) and (max-width: 992px) {\n  .section {\n    height: 80vh; }\n  h1 {\n    font-size: 28px; }\n  .text {\n    font-size: 14px;\n    text-align: center;\n    padding-left: 10%; }\n  img {\n    width: 80%;\n    height: auto;\n    margin-left: 10%;\n    display: block;\n    border-radius: 10%; }\n  .bar {\n    height: 20px; }\n  .fill {\n    height: 20px;\n    font-size: 15px; }\n  .percent {\n    font-size: 12px; } }\n\n@media (min-width: 993px) and (max-width: 1200px) {\n  h1 {\n    font-size: 40px; }\n  .text {\n    font-size: 15px; } }\n\n@media (min-width: 1201px) {\n  h1 {\n    font-size: 48px; }\n  .text {\n    font-size: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxTaW5kaHVzaGEgS290YXBhdGlcXERvY3VtZW50c1xcYW5ndWxhciBwcm9qZWN0c1xccG9ydGZvbGlvL3NyY1xcYXBwXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFFakIsOEZBQWtHO0VBQ2xHLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxhQUFZLEVBQUE7O0FBR2Q7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFVBQVU7RUFDVixZQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZSxFQUFBOztBQUVqQjtFQUNFLFlBQVc7RUFDWCx5QkFBeUI7RUFDekIsZUFBYztFQUNkLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsWUFBVyxFQUFBOztBQUdiO0VBQ0UsVUFBVTtFQUNWLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRTtJQUFLLFNBQVMsRUFBQTtFQUNkO0lBQU8sVUFBVSxFQUFBLEVBQUE7O0FBRm5CO0VBQ0U7SUFBSyxTQUFTLEVBQUE7RUFDZDtJQUFPLFVBQVUsRUFBQSxFQUFBOztBQUVuQjtFQUNFLFVBQVU7RUFDVixnQ0FBd0I7VUFBeEIsd0JBQXdCLEVBQUE7O0FBRTFCO0VBQ0U7SUFBSyxTQUFTLEVBQUE7RUFDZDtJQUFPLFVBQVUsRUFBQSxFQUFBOztBQUZuQjtFQUNFO0lBQUssU0FBUyxFQUFBO0VBQ2Q7SUFBTyxVQUFVLEVBQUEsRUFBQTs7QUFFbkI7RUFDRSxVQUFVO0VBQ1YsZ0NBQXdCO1VBQXhCLHdCQUF3QixFQUFBOztBQUUxQjtFQUNFO0lBQUssU0FBUyxFQUFBO0VBQ2Q7SUFBTyxVQUFVLEVBQUEsRUFBQTs7QUFGbkI7RUFDRTtJQUFLLFNBQVMsRUFBQTtFQUNkO0lBQU8sVUFBVSxFQUFBLEVBQUE7O0FBRW5CO0VBQ0UsVUFBVTtFQUNWLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRTtJQUFLLFNBQVMsRUFBQTtFQUNkO0lBQU8sVUFBVSxFQUFBLEVBQUE7O0FBRm5CO0VBQ0U7SUFBSyxTQUFTLEVBQUE7RUFDZDtJQUFPLFVBQVUsRUFBQSxFQUFBOztBQUVuQjtFQUNFLGVBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsWUFBWSxFQUFBOztBQUdkO0VBQ0U7SUFDRSxlQUFjLEVBQUE7RUFFaEI7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQixFQUFBO0VBRXBCO0lBQ0UsZUFBYyxFQUFBO0VBRWhCO0lBQ0UsWUFBWSxFQUFBO0VBRWQ7SUFDRSxZQUFZO0lBQ1osZUFBYyxFQUFBO0VBRWhCO0lBQ0UsZUFBZSxFQUFBLEVBQ2hCOztBQUVIO0VBQ0U7SUFDQSxZQUFZLEVBQUE7RUFFWjtJQUNFLGVBQWMsRUFBQTtFQUVoQjtJQUNFLGVBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUE7RUFHbkI7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCLEVBQUE7RUFHcEI7SUFDRSxZQUFZLEVBQUE7RUFFZDtJQUNFLFlBQVk7SUFDWixlQUFjLEVBQUE7RUFFaEI7SUFDRSxlQUFlLEVBQUEsRUFDaEI7O0FBRUg7RUFDRTtJQUNFLGVBQWMsRUFBQTtFQUVoQjtJQUNFLGVBQWMsRUFBQSxFQUVmOztBQUVIO0VBQ0U7SUFDRSxlQUFjLEVBQUE7RUFFaEI7SUFDRSxlQUFjLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMCUgNSUgNSU7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWZhO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuOCksIHJnYmEoMCwgMCwgMCwgMC44KSksIHVybChcImltZy9ibG9jay1iZy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG5oMXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmJsb2NrcyB7XHJcbiAgbWFyZ2luOjAlIDUlO1xyXG4gIC8vYmFja2dyb3VuZDogdXJsKFwiaW1nL2Jsb2NrLWJnLmpwZ1wiKTtcclxufVxyXG5pbWcge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuLnRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICNlYmViZWI7XHJcbn1cclxuXHJcbi5iYXJ7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6MzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBtYXJnaW4tbGVmdDoxMCU7XHJcbn1cclxuLmZpbGx7XHJcbiAgaGVpZ2h0OjMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2YjJkMjtcclxuICBmb250LXNpemU6MjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW4tc2VyaWY7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5mMSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBhbmltYXRpb246IEZpbGwxIDVzIGVhc2U7XHJcbn1cclxuQGtleWZyYW1lcyBGaWxsMXtcclxuICAwJSB7IHdpZHRoOiAwJTt9XHJcbiAgMTAwJSB7IHdpZHRoOiA5MCU7fVxyXG59XHJcbi5mMntcclxuICB3aWR0aDogODAlO1xyXG4gIGFuaW1hdGlvbjogRmlsbDIgNXMgZWFzZTtcclxufVxyXG5Aa2V5ZnJhbWVzIEZpbGwye1xyXG4gIDAlIHsgd2lkdGg6IDAlO31cclxuICAxMDAlIHsgd2lkdGg6IDgwJTt9XHJcbn1cclxuLmYze1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgYW5pbWF0aW9uOiBGaWxsMyA1cyBlYXNlO1xyXG59XHJcbkBrZXlmcmFtZXMgRmlsbDN7XHJcbiAgMCUgeyB3aWR0aDogMCU7fVxyXG4gIDEwMCUgeyB3aWR0aDogNjAlO31cclxufVxyXG4uZjR7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBhbmltYXRpb246IEZpbGw0IDVzIGVhc2U7XHJcbn1cclxuQGtleWZyYW1lcyBGaWxsNHtcclxuICAwJSB7IHdpZHRoOiAwJTt9XHJcbiAgMTAwJSB7IHdpZHRoOiA1MCU7fVxyXG59XHJcbi5wZXJjZW50IHtcclxuICBmb250LXNpemU6MTBweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICB9XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgfVxyXG4gIC50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gIH1cclxuICAuYmFyIHtcclxuICAgIGhlaWdodDogMTVweDtcclxuICB9XHJcbiAgLmZpbGwge1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgfVxyXG4gIC5wZXJjZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuc2VjdGlvbiB7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIH1cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6MjhweDtcclxuICB9XHJcbiAgLnRleHQge1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgIC8vbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICB9XHJcblxyXG4gIC5iYXIge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAuZmlsbCB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICB9XHJcbiAgLnBlcmNlbnQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkzcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6NDBweDtcclxuICB9XHJcbiAgLnRleHQge1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcblxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMXB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOjQ4cHg7XHJcbiAgfVxyXG4gIC50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n*{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.sections {\r\n  overflow-x: hidden;\r\n  display: block;\r\n  /*overflow-y: scroll;*/\r\n  scroll-behavior: smooth;\r\n}\r\n.sec {\r\n  display: flex;\r\n}\r\n.sidenav{\r\n  height: 40%;\r\n  width: 50px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 30%;\r\n  bottom: 30%;\r\n  overflow-x: hidden;\r\n  padding-top: 20px;\r\n  scroll-behavior: smooth;\r\n}\r\n.sidenav a {\r\n  height:25%;\r\n  padding-top: 7px;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  font-size: 25px;\r\n  color: #f4f4f4;\r\n  display: block;\r\n}\r\n.sidenav a:hover {\r\n  background-color: #d4d4d4;\r\n}\r\n.sidenav div{\r\n  opacity:0;\r\n}\r\n.n1 {\r\n  background-color: #d2235c;\r\n}\r\n.n2 {\r\n  background-color: #d2cb05;\r\n}\r\n.n3 {\r\n  background-color: #05d228;\r\n}\r\n@media (max-width: 768px) {\r\n  .sidenav img{\r\n    height: 20px;\r\n    width: auto;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLFVBQVU7RUFDVixRQUFRO0VBQ1IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5zZWN0aW9ucyB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC8qb3ZlcmZsb3cteTogc2Nyb2xsOyovXHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuLnNlYyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uc2lkZW5hdntcclxuICBoZWlnaHQ6IDQwJTtcclxuICB3aWR0aDogNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDMwJTtcclxuICBib3R0b206IDMwJTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IGEge1xyXG4gIGhlaWdodDoyNSU7XHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogI2Y0ZjRmNDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNpZGVuYXYgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcclxufVxyXG4uc2lkZW5hdiBkaXZ7XHJcbiAgb3BhY2l0eTowO1xyXG59XHJcbi5uMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyMjM1YztcclxufVxyXG4ubjIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmNiMDU7XHJcbn1cclxuLm4zIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVkMjI4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuc2lkZW5hdiBpbWd7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidenav\">\n  <a class=\"n1\" href=\"#home\"><img src=\"https://img.icons8.com/ios/50/000000/home-page.png\"></a>\n  <a class=\"n2\" href=\"#about\"><img src=\"https://img.icons8.com/ios/50/000000/person-female.png\"></a>\n  <a class=\"n3\" href=\"#projects\"><img src=\"https://img.icons8.com/ios/50/000000/view-quilt.png\"></a>\n</div>\n<div class=\"sections\">\n<div class=\"header-component\" id=\"home\">\n  <app-header></app-header>\n</div>\n<!--<div class=\"sec\" id=\"aboutme\">-->\n  <!--<app-aboutme></app-aboutme>-->\n<!--</div>-->\n<!--<div class=\"sec\" id=\"skills\">-->\n  <!--<app-skills></app-skills>-->\n<!--</div>-->\n  <div class=\"sec\" id=\"about\" >\n    <app-about></app-about>\n  </div>\n<div class=\"sec\" id=\"projects\">\n  <app-projects></app-projects>\n</div>\n\n  <div class=\"footer\">\n    <app-footer></app-footer>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular_particle__WEBPACK_IMPORTED_MODULE_6__["ParticlesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".end {\r\n  background-color: #04073d;\r\n}\r\n.icons {\r\n  align-items: center;\r\n  display: block;\r\n  padding: 5% 44%;\r\n  padding-bottom: 20px;\r\n}\r\nimg {\r\n  margin:10px;\r\n  padding: 5px;\r\n  background-color: #f0f0f0;\r\n}\r\np{\r\n  color: #8f8f8f;\r\n  text-align: center;\r\n}\r\n.topscroll {\r\n  position: absolute;\r\n  left: 49%;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n  background-color: rgb(253, 24, 111);\r\n  border: 4px solid rgba(253, 24, 111, 0.9);\r\n  color: rgba(255, 255, 249, 0.9);\r\n  padding: 10px 5px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  margin: -20px 2px;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULHVFQUF1RTtFQUN2RSxtQ0FBbUM7RUFDbkMseUNBQXlDO0VBQ3pDLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDA3M2Q7XHJcbn1cclxuLmljb25zIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDUlIDQ0JTtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5pbWcge1xyXG4gIG1hcmdpbjoxMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcbnB7XHJcbiAgY29sb3I6ICM4ZjhmOGY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50b3BzY3JvbGwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA0OSU7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjQsIDExMSk7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTMsIDI0LCAxMTEsIDAuOSk7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI0OSwgMC45KTtcclxuICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAtMjBweCAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row end\">\n  <div class=\"col-xs-12\">\n    <button class=\"topscroll\" (click)=\"onEdit()\">^</button>\n    <div class=\"icons\">\n      <a href=\"https://www.linkedin.com/in/sindhusha-kotapati-9a7a73ba/\"><img src=\"https://img.icons8.com/color/30/000000/linkedin.png\"></a>\n      <a href=\"https://codepen.io/sindhushakotapati/\"><img src=\"https://img.icons8.com/color/30/000000/codepen.png\"></a>\n      <a href=\"https://github.com/sindhushakotapati\"><img src=\"https://img.icons8.com/ios-glyphs/30/000000/github.png\"></a>\n      <p>Sindhusha Kotapati 2019</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.onEdit = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link href=\"https://fonts.googleapis.com/css?family=Pacifico|Roboto:300\" rel=\"stylesheet\">\n  <link href=\"https://fonts.googleapis.com/css?family=EB+Garamond|Nova+Flat\" rel=\"stylesheet\">\n</head>\n<body>\n  <header>\n    <particles [params]=\"myParams\" [style]=\"myStyle\" [width]=\"width\" [height]=\"height\"></particles>\n    <div class=\"row intro\">\n      <div class=\"col-xs-12\">\n        <p> Hello..I'm</p>\n        <h1> SINDHUSHA KOTAPATI</h1>\n        <svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1327.31 69.29\"><defs><style>.cls-1{fill:#f7086a;}.cls-2{fill:#f40bf4;}.cls-3{fill:#7c0cf2;}.cls-4{fill:#0fc5ef;}.cls-5{fill:#11ed79;}.cls-6{fill:#eaea13;}.cls-7{fill:#e85b15;}</style></defs><path class=\"cls-1\" d=\"M92.41,260a26,26,0,0,0,34.06-9.95c2.88-4.52,5.72-11.41,11.95-11.48l-1.44-1.1a13,13,0,0,0,9,9.27,1.51,1.51,0,0,0,1.9-1.44c.43-5.38,8.07-2.59,10.38-1s4.55,3.83,7.27,5.07a10,10,0,0,0,10.45-.91c6.25-4.61,7.78-18,16.43-18.81l-1.5-1.5,3.64,31.36,1.82,15.68c.45,3.88.54,8.06,1.66,11.83,1.27,4.26,4.68,8.06,9.44,6.11,6.13-2.51,10.1-11.86,12.44-17.48a60.31,60.31,0,0,0,3.52-11.54c.82-4.21.33-12.25,5-14.28,5-2.17,5.66,3.78,8.61,5.43,2.12,1.18,4,.39,5.92-.75,3.71-2.26,5.87-4.29,10.48-4.54,3.86-.21,7.73.52,11.53,1.05,6.18.86,12.16,1.37,18-1.21,1.76-.78.23-3.37-1.52-2.59-11.49,5.08-24.62-4.3-35.88,1.69-.87.46-1.59,1.15-2.43,1.61a6,6,0,0,1-5.13,1.72,27.77,27.77,0,0,1-1.83-2.61c-1.28-1.62-2.46-3-4.63-3.3-4.29-.7-7.75,2.8-9.11,6.48-1.23,3.34-1.26,7-1.94,10.51a58.33,58.33,0,0,1-3.87,12.36,56.43,56.43,0,0,1-5.77,10.14c-1.79,2.5-5.43,6.77-8.73,3.08-1.17-1.32-1.47-3.41-1.77-5.09-3.19-18.3-4.33-37.2-6.48-55.66-.08-.74-.61-1.58-1.5-1.5-11.29,1-10.63,15.47-19.14,20-7,3.75-12.58-6.56-19.36-7.32-4.31-.48-8.65,1.3-9,6l1.9-1.45a9.92,9.92,0,0,1-6.95-7.18,1.53,1.53,0,0,0-1.45-1.1c-8.12.09-11.28,8.25-15.22,14a23.35,23.35,0,0,1-29.28,7.83c-1.73-.84-3.25,1.75-1.51,2.59Z\" transform=\"translate(-91.64 -226.63)\"/><path class=\"cls-2\" d=\"M280.16,249.15a13.52,13.52,0,0,1,3.92-9.73l-2.36-.3c4.3,8.22,15.11,6,22.74,6.95,2.72.35,5.62,1,7.63,3s2.63,5,5.21,6.51c4.08,2.37,8.46-.72,11-3.9,2.74-3.43,7.43-18.29,13.79-11.92,4.1,4.09,2.65,12.37,4.07,17.69,2.62,9.75,11.07,21.85,21.83,23.45,4.94.73,8.22-1.82,9.6-6.47,1.87-6.25,3.26-14,1.37-20.4-1.34-4.56-4.67-8.91-9.25-10.56-3.2-1.15-7.18-1-7.66,3.12a7.31,7.31,0,0,0,5.13,7.35c4.94,1.26,9.14-3.11,12.41-6,1.81-1.63,3.51-3.18,5.95-3.73,3.33-.74,5.14.93,7.4,3.13a13.8,13.8,0,0,0,6.41,3.68c5.83,1.44,11.61-.7,17.31-1.68,3.18-.55,6.9-.88,9.89.64a9.46,9.46,0,0,1,2.83,2.31c2,2.31,1.2,3,1.48,6.09a4.5,4.5,0,0,0,1.92,3.74c3.43,2.35,8.3.09,10.74-2.61,2.93-3.25,5.28-8.55,10.65-6.17,2.92,1.3,4.76,4.32,7.81,5.48,3.65,1.38,8.26.78,9.41-3.42a1.5,1.5,0,0,0-2.89-.79c-1.75,6.32-11.47-3.42-14.05-4.44a8.08,8.08,0,0,0-8.63,1.87c-1.93,1.76-9.27,13-11.7,5.83-.47-1.39.08-3.06-.56-4.64a11.28,11.28,0,0,0-3.41-4.42c-8.21-6.68-18.55.26-27.66-.35-5.91-.4-7.16-5-11.83-7.09-4-1.83-8.34.33-11.47,2.9-2.13,1.74-3.91,4.1-6.32,5.46-1.11.64-3.59,1.71-4.89,1.37-2-.52-5.08-4.64-.33-5.07,2.87-.27,6.13,4,7.25,6,1.85,3.35,2.09,7.25,1.79,11a52.35,52.35,0,0,1-1.66,9.28c-.81,3-1.12,5.6-5.47,5.8a11.27,11.27,0,0,1-4.66-1.26c-5.34-2.51-9.81-7.41-12.69-12.48-2.74-4.83-3.77-9.89-4.3-15.35-.35-3.62-.69-7.79-3-10.76-4.22-5.34-10.54-2.33-13.73,2.33-3.67,5.35-7,18.3-14.92,9.1C314,247,312.45,245,309,243.94c-7.27-2.28-20.46,1.64-24.64-6.34a1.52,1.52,0,0,0-2.36-.3,16.57,16.57,0,0,0-4.79,11.85,1.5,1.5,0,0,0,3,0Z\" transform=\"translate(-91.64 -226.63)\"/><path class=\"cls-3\" d=\"M471.1,256.73a21.59,21.59,0,0,1,2.38-6.21c2-3.29,5.84-4.71,8.42-1.07,2.29,3.22,2.16,7.19,5.32,10,1.9,1.66,4.42,2.57,6.79,1.27,3.16-1.74,3.08-7.74,7.29-7.29,5.58.6,9.12,7.51,15,8.15,7.65.82,7.73-12,7.76-17.32a1.5,1.5,0,0,0-1.5-1.5,6.88,6.88,0,0,0-6.48,6.54c-.26,6.12,5.69,4.68,10,4.79,3.79.1,7.61.08,11.4.3,6.44.39,3.83,5,5.17,9,1,3.11,4,5.32,7,3.57a1.5,1.5,0,0,0,.75-1.29c0-4.21,4.67-6,8.29-5.26,4.42.87,6.54,5.34,7.41,9.36,1.21,5.6-.67,12.48,3.51,17.2,1.92,2.16,5.06,3,6.91.28,1.1-1.59,1.09-5.77,1.45-7.7l1.08-5.78,2.7-14.43c.77-4.13,1.12-9.13,4.24-12.23,2.84-2.83,6.15-2.74,8.79.9.81,1.12,1.19,2.51,2,3.62,2.71,3.57,6.33,3.9,10.24,2.13,2.73-1.23,5.1-3.18,7.91-4.24,5.31-2,8.21,1.72,11.62,5.07s8.39,6,12.66,2.75l-2.2-.9c1.38,8.13,5.39,17.67,15.17,17,5.94-.43,11.78-3.23,17.7-4.16a78.13,78.13,0,0,1,24.23.15c1.89.3,2.71-2.59.8-2.9a81.68,81.68,0,0,0-31.12.88c-5.4,1.24-12.33,5-17.56,1.66-4.22-2.71-5.55-8.81-6.33-13.39a1.5,1.5,0,0,0-2.2-.89c-6.33,4.8-12.35-8.36-18.83-9-6-.55-9.82,5.74-15.36,6-6.43.27-6.07-10.35-13.48-9.94-5.88.32-8.83,5.81-10.06,10.87-2.15,8.87-3.43,18-5.11,27-.31,1.69-.26,6.54-3.36,4.87-1.3-.71-1.59-3.9-1.73-5.31-.35-3.45,0-6.87-.8-10.3-1.12-5.05-4.08-10.3-9.51-11.46-3.77-.8-8.48.37-10.8,3.61-.3.43-1.06,3-1.24,3.13-1.61,1.2-2.07-4-2.19-5.15-.22-2.29-.25-4.57-2.18-6.16-2.5-2.05-6.45-1.57-9.45-1.65l-8.55-.22a18,18,0,0,1-2.85-.08c-1.42.52-2.25.12-2.49-1.22-1.39-1.8-.47-3.14,2.74-4l-1.5-1.5a33.18,33.18,0,0,1-1.34,10.15c-1,3.08-1.78,4.84-5.06,3.61-2.92-1.09-5.34-3.41-7.91-5.13-4.15-2.79-8.71-3.88-11.65,1.07A14.16,14.16,0,0,1,494,256.2c-2.38,2.6-5.31,1-6.65-1.34-.92-1.65-1.31-3.58-2.09-5.29-1.21-2.66-3-5.14-6.09-5.63-6.47-1.05-9.78,7.05-11,12-.45,1.88,2.44,2.68,2.89.8Z\" transform=\"translate(-91.64 -226.63)\"/><path class=\"cls-4\" d=\"M692.8,269.27a27.58,27.58,0,0,0,9.6-19l-2.25,1.29c6.38,3.7,4,14.6,13.15,15.53,8.56.88,12.86-7.61,15.6-14.22l-2.89-.8a36.78,36.78,0,0,0,15.82,40.09,1.5,1.5,0,0,0,1.52,0c6.87-4.8,4.19-12.83,3.46-19.8-.31-2.94.07-9.49,4.39-9.59,3.95-.1,4.14,3.35,6.15,5.48a5.55,5.55,0,0,0,6.6,1c8.08-3.65,4-12.22,4.52-18.76.16-2.24,1-4.63,3.16-5.61,2.47-1.11,4.41.93,4.77,3.5.42,2.94.64,5.93,1,8.89l2,18.76a1.57,1.57,0,0,0,1.5,1.5c3,.27,5-1.27,6.64-3.66,1.14-1.65,1.72-3.55,2.73-5.25.8-1.32,2.25-3.7,4-3.08,1.53.54.73.59,1.14,2,1.17,4,1.75,7.56,4.06,11.16a28,28,0,0,0,8.76,8.54,1.51,1.51,0,0,0,1.82-.23c5.18-5.91,2.77-13,3.2-20.11.33-5.48,3.34-11.57,9.87-8.82,3.38,1.42,6.12,4,9.51,5.47,5.35,2.25,11.71.11,13.27-5.91,1.63-6.3-4.21-11.48-10.22-10.86a1.51,1.51,0,0,0-1.29,2.25c2.48,4.33,7.58,4.59,11.93,3.12,3.79-1.29,6.87-4.45,10.83-5.24,5-1,7.42,2.65,10.41,5.79,3.6,3.79,7.51,5.25,12.67,3.81s11.89-7.23,17.08-3.48c1.56,1.14,3.06-1.46,1.51-2.59-9.76-7.06-19.68,10.08-29.14.14-3.39-3.57-6.35-7.48-11.84-6.84S841.24,255,837,247.56l-1.3,2.26c9.73-1,9.06,13.27.15,11.67-2.65-.47-5-2.27-7.18-3.68-3.63-2.32-7.76-4.66-12.12-2.76-11.79,5.13-1.8,22.12-8.61,29.88l1.82-.24a24.55,24.55,0,0,1-10.33-13c-.95-2.84.16-7.88-2.93-9.32-8.4-3.93-9.1,12.77-15.6,12.17l1.5,1.5c-1-9.53-1.36-19.49-3.12-28.91-.7-3.74-3-7-7.25-5.86-5.69,1.47-6.86,7.55-6.32,12.52.39,3.59,2.26,12.23-3.58,13-3.63.49-3.92-4.76-6.32-6.32-3.4-2.21-8-.2-10.22,2.77-4.4,5.9,0,13.47-.48,19.9-.13,1.54-.73,5.37-2.9,5.67-1.21.16-4.07-3.25-5-4.19a33.8,33.8,0,0,1-6-8.73,33.42,33.42,0,0,1-2.26-23c.5-1.92-2.18-2.53-2.89-.8-1.54,3.71-3.28,8.09-6.74,10.44-4.55,3.08-9.16,1.29-11.24-3.5-1.67-3.84-2.5-7.8-6.37-10a1.52,1.52,0,0,0-2.26,1.3,24.55,24.55,0,0,1-8.72,16.87c-1.46,1.26.67,3.37,2.12,2.12Z\" transform=\"translate(-91.64 -226.63)\"/><path class=\"cls-5\" d=\"M896.53,250.46c-1.63,4.93-2.83,13.61,4.38,14.8,3.18.52,7.61-4.27,9.73-1.68,1.87,2.29,1.35,6.07,3.41,8.48,3.39,4,9.78,3.93,13.94,1.26,5.89-3.77,6.9-11.6,6.55-18l-1.5,1.5c3.92-.06,3.94,7,4.51,9.63a12.6,12.6,0,0,0,2.79,5.87c3,3.42,8.1,5.26,12.53,3.73,8.37-2.88,7.88-15.85-.4-18.42a1.52,1.52,0,0,0-1.69.69c-2.84,4.49,0,11.26,5.48,12,3.14.42,5.54-1.61,7.84-3.43,2-1.6,5.36-3.87,7-.68.67,1.26.37,3.35.31,4.73-.2,4.44-1.7,10.84,2.52,14,6.44,4.78,11.65-5.27,17.9-4.06a1.51,1.51,0,0,0,1.46-2.5c-2.72-2.7-6.27-5.2-10.29-3.95-2.67.82-4.85,3.15-4.62,6.07.73,9.65,15.44,3.91,20.26,5.8l-1.1-1.45c-.38,7,6.79,12.44,13.56,10.77,9-2.22,10.63-11.94,9.88-19.7-.33-3.43,0-11.12,5.35-9.11,2.18.83,3.17,3.1,4.44,4.92,1.8,2.57,3.79,4.81,7,5.32,5.21.8,11.19-2.11,16.33-2.88a81.79,81.79,0,0,1,23.07,0c1.89.26,2.7-2.63.8-2.89a84.67,84.67,0,0,0-30.11,1c-3.46.77-6.91,2.35-10.38,1.2-2.71-.9-3.51-2.36-5.08-4.66-1.33-2-2.73-4.13-5-5.07-6.49-2.66-9.84,5.13-9.61,10.27.26,5.83,1.57,11.38-3.09,16.07-4.88,4.9-14.61,2.6-14.18-5.25a1.52,1.52,0,0,0-1.1-1.44c-3.16-1.24-6-.76-9.22-.28-2,.29-4.14.72-6.11-.09q-6.21-2.61,2.45-5.75a11.72,11.72,0,0,1,4.61,3.21l1.46-2.51a9.5,9.5,0,0,0-6.19.87c-2.69,1.27-6.31,5-9.53,4.24-5.08-1.23-2.24-11.4-2.47-14.88-.2-3.18-1.51-6.13-4.94-6.68-2.38-.38-4.3.76-6.14,2.11-1.55,1.14-3.32,3.39-5.31,3.64a4.88,4.88,0,0,1-4.72-7.42l-1.7.68c4.87,1.52,5.92,9.18,1.62,12-5.12,3.4-11.43-1.34-12.73-6.38-1.18-4.58-1-12.47-7.52-12.37a1.51,1.51,0,0,0-1.5,1.5c.32,5.74-.37,13.4-6.4,16.07-2.48,1.1-5.72,1.18-7.94-.55s-2.42-4.74-3.32-7.26c-.76-2.16-1.86-4.37-4.34-4.77-1.82-.29-2.58.81-4.1,1.31-1.92.63-4.63,9.1-7.23-1.12-.61-2.41.46-5.5,1.21-7.77.61-1.83-2.29-2.62-2.89-.79Z\" transform=\"translate(-91.64 -226.63)\"/><path class=\"cls-6\" d=\"M1073.19,272.05a12.51,12.51,0,0,0,9.68-14.73,1.51,1.51,0,0,0-2.21-.89c-4.93,3.15-12.86,10.94-7.18,17,2.39,2.52,5.92,2.62,9.11,2,3.92-.77,14.06-5.92,15.68.78a1.51,1.51,0,0,0,2.89,0,24.82,24.82,0,0,1,9.32-15.14l-2.51-1.46a29.75,29.75,0,0,0,9.28,29.18,1.52,1.52,0,0,0,2.56-1.06c.35-3.86.68-8.94,3.72-11.77,2.61-2.42,7.42-2.72,9,1a1.51,1.51,0,0,0,2.74-.36,78,78,0,0,1,8.56-23.85l-2.74-.36c1.62,5.33,2.87,11,5,16.2.92,2.27,2.28,4.64,4.94,5,2.43.33,4.17-1.38,5.52-3.15,1.65-2.18,2.89-4.62,5.47-5.92,4.71-2.37,10.67.36,10.06,6a1.5,1.5,0,0,0,1.1,1.45,29.51,29.51,0,0,0,17.59-1.48c4.1-1.73,7.79-4.13,11.46-.31a8.13,8.13,0,0,0,4.47,2.83c2,.37,3.92-.38,5.84-.87,4.13-1.07,6.36-.08,9,3.23,2.31,2.91,4.24,5.81,8.27,6a1.53,1.53,0,0,0,1.5-1.5c.79-8.42,11.09-13.21,18.14-8.83,1.65,1,3.16-1.58,1.52-2.59-9.13-5.68-21.67.86-22.66,11.42l1.5-1.5c-4.55-.18-6.29-6.68-9.92-8.84-4.88-2.91-10.22,2.64-14.74-.61-3.56-2.55-4.37-5.92-9.5-4.26-2.88.93-5.28,3-8.24,3.9a26.26,26.26,0,0,1-13.43.55l1.11,1.44c.78-7.18-6.58-11.7-13-9.32a12.87,12.87,0,0,0-4.32,2.69c-1.3,1.22-2.88,5.08-4.24,5.58l-4.17-.94a24.78,24.78,0,0,1-1-2.89c-.51-1.56-1-3.14-1.43-4.7l-2.85-9.4a1.52,1.52,0,0,0-2.74-.36,80.68,80.68,0,0,0-8.86,24.57l2.74-.36c-1.81-4.16-6.76-5.15-10.74-3.53-6.16,2.51-7.07,10.06-7.59,15.84l2.56-1.06a26.76,26.76,0,0,1-8.51-26.26,1.51,1.51,0,0,0-2.5-1.46,27.2,27.2,0,0,0-10.09,16.47h2.89c-1.14-4.73-6-5.86-10.31-5.35-3.83.44-7.58,3.07-11.5,2.72-10.78-1-.81-11.41,2.83-13.73l-2.21-.9a9.47,9.47,0,0,1-7.58,11c-1.89.41-1.09,3.3.8,2.89Z\" transform=\"translate(-91.64 -226.63)\"/><path class=\"cls-7\" d=\"M1248.39,269a8.88,8.88,0,0,0,8.31,7,1.5,1.5,0,0,0,1.44-1.1c1-4.67,2-9.35,3.09-14,.21-1,.45-2.07.72-3.1q4.59-4.11,6.34,1.38c.77,2.21.25,4.89.19,7.17a44.7,44.7,0,0,0,6.11,23.59,1.54,1.54,0,0,0,2.06.54c2.65-1.38,3.67-3.72,4-6.6.66-5-.74-13.85,7.28-8.95,7.4,4.52,12-5.25,11.53-11.22-.2-2.67-1-5.34-.87-8,.07-1.86.67-7.38,5.42-2.37.62.65.57,3.7.72,4.68.73,4.73.61,11.28,3.21,15.48,5,8.12,11.14-2.13,16.12-3.61,7.2-2.13,14.6,4.69,21.76,1.83a8.81,8.81,0,0,0,4.81-5.31c1.39-3.43,3.11-7.9,7.75-6.54,2.91.85,5.19,2.86,7.93,4,4.13,1.76,13,1.91,12.75-4.6-.17-5.46-7.91-6.69-11.1-3.08-6.3,7.12,3.25,16.26,10.29,16.88,5.55.49,10.17-2.9,15.3-4.38a32.51,32.51,0,0,1,23.07,2.21c1.73.83,3.25-1.75,1.51-2.59a35.9,35.9,0,0,0-23-3.08c-4,.82-7.44,2.82-11.32,4.06a12.35,12.35,0,0,1-8.16.17,11.46,11.46,0,0,1-4.36-2.88c-2.52-2.9-2.65-4.89-.44-7.49,1.88-2.19,3.46-3.36,3.17.43-.2,2.62.05,2.47-2.41,2.48a11.62,11.62,0,0,1-5.81-1.76c-3-1.62-6.29-3.92-9.87-3.84-8.43.17-5.3,10.21-11.38,12.58-5.46,2.12-12.63-2.58-18.34-2.41a11.34,11.34,0,0,0-6.29,2c-1.15.79-2.07,1.85-3.15,2.72-.73.59-2.2,2.06-3.18,2.15-2.27.2-3.6-2.43-4-4.09-1.24-4.5-1.54-9.44-2.26-14.05-.4-2.6-.44-6-3.16-7.28-5.16-2.5-8.51,3.32-8.58,7.64-.08,4.72,3.65,14.35-2.47,16.76-3.82,1.51-6.52-3.94-10.42-2.72-8.26,2.58-1.48,15-7.62,18.16l2,.53a41.58,41.58,0,0,1-5.7-22.07c.1-4.39.74-9.56-3.37-12.42-2.64-1.84-6-1.81-8,.89-1.57,2.15-1.79,5.4-2.34,7.91l-2.51,11.38,1.45-1.1c-3-.32-4.86-1.93-5.42-4.81-.47-1.87-3.36-1.08-2.89.79Z\" transform=\"translate(-91.64 -226.63)\"/></svg>\n\n        <!--<hr style=\"width:50%\">-->\n        <p><img src=\"https://img.icons8.com/color/24/000000/gmail.png\"> kotapatisindhusha@gmail.com</p>\n      </div>\n    </div>\n\n\n  </header>\n</body>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  width: 100vw;\n  height: 100vh;\n  padding: 20%;\n  background: linear-gradient(90deg, #04073d, #04073d, #ff557c, #ffa520);\n  background-size: 400% 400%;\n  -webkit-animation: Gradient 10s ease infinite; }\n\n.intro {\n  margin: auto;\n  text-align: center; }\n\n#Layer_1 {\n  align-content: center;\n  margin-right: 10%;\n  margin-left: 10%;\n  width: 80%;\n  height: 50px; }\n\n@-webkit-keyframes Gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 50% 100%; }\n  100% {\n    background-position: 0% 50%; } }\n\n@keyframes Gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 50% 100%; }\n  100% {\n    background-position: 0% 50%; } }\n\nh1 {\n  text-align: center;\n  color: #fdffff;\n  position: relative;\n  font-family: 'Roboto', sans-serif; }\n\np {\n  text-align: center;\n  color: #9ea29e;\n  font-weight: 300;\n  font-family: 'Roboto', sans-serif; }\n\n/*.....media queries......*/\n\n@media (max-width: 768px) {\n  h1 {\n    font-size: 22px; }\n  p {\n    font-size: 14px; } }\n\n@media (min-width: 769px) and (max-width: 992px) {\n  h1 {\n    font-size: 30px; }\n  p {\n    font-size: 20px; } }\n\n@media (min-width: 993px) and (max-width: 1200px) {\n  h1 {\n    font-size: 50px; }\n  p {\n    font-size: 25px; } }\n\n@media (min-width: 1201px) {\n  h1 {\n    font-size: 72px; }\n  p {\n    font-size: 30px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcU2luZGh1c2hhIEtvdGFwYXRpXFxEb2N1bWVudHNcXGFuZ3VsYXIgcHJvamVjdHNcXHBvcnRmb2xpby9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixzRUFBcUc7RUFDckcsMEJBQTBCO0VBQzFCLDZDQUE2QyxFQUFBOztBQUUvQztFQUNFLFlBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFLcEI7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1IsWUFBWSxFQUFBOztBQUVoQjtFQUNFO0lBQ0UsMkJBQTJCLEVBQUE7RUFFN0I7SUFDRSw2QkFBNkIsRUFBQTtFQUUvQjtJQUNFLDJCQUEyQixFQUFBLEVBQUE7O0FBUi9CO0VBQ0U7SUFDRSwyQkFBMkIsRUFBQTtFQUU3QjtJQUNFLDZCQUE2QixFQUFBO0VBRS9CO0lBQ0UsMkJBQTJCLEVBQUEsRUFBQTs7QUFHL0I7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQ0FBaUMsRUFBQTs7QUFFbkM7RUFDRSxrQkFBaUI7RUFDakIsY0FBYztFQUVkLGdCQUFnQjtFQUNoQixpQ0FBaUMsRUFBQTs7QUFFbkMsMkJBQUE7O0FBQ0E7RUFDRTtJQUNFLGVBQWMsRUFBQTtFQUVoQjtJQUNFLGVBQWMsRUFBQSxFQUNmOztBQUVIO0VBQ0U7SUFDRSxlQUFjLEVBQUE7RUFFaEI7SUFDRSxlQUFjLEVBQUEsRUFDZjs7QUFFSDtFQUNFO0lBQ0UsZUFBYyxFQUFBO0VBRWhCO0lBQ0UsZUFBYyxFQUFBLEVBQ2Y7O0FBRUg7RUFDRTtJQUNFLGVBQWMsRUFBQTtFQUVoQjtJQUNFLGVBQWMsRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZzogMjAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoNCwgNywgNjEpLHJnYig0LCA3LCA2MSksIHJnYigyNTUsIDg1LCAxMjQpLCByZ2IoMjU1LCAxNjUsIDMyKSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBHcmFkaWVudCAxMHMgZWFzZSBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmludHJve1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvL2Rpc3BsYXk6IGZsZXg7XHJcbiAgICAvL2ZsZXgtd3JhcDogd3JhcDtcclxuICAgIC8vYWxpZ24tY29udGVudDpjZW50ZXI7XHJcbiAgfVxyXG4gICNMYXllcl8xe1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIEdyYWRpZW50e1xyXG4gICAgMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMTAwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmRmZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBwIHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgY29sb3I6ICM5ZWEyOWU7XHJcbiAgICAvL2ZvbnQtc3R5bGU6aXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLyouLi4uLm1lZGlhIHF1ZXJpZXMuLi4uLi4qL1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6MjJweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTNweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6NTBweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6MjVweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDFweCkge1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6NzJweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6MzBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.myStyle = {
            width: '100%',
            height: '100%',
            index: -1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: 'absolute',
        };
        this.myParams = {
            particles: {
                number: {
                    value: 400,
                },
                color: {
                    value: '#fff'
                },
                shape: {
                    type: 'circle',
                    polygon: {
                        sides: 3,
                    },
                },
                line_linked: {
                    enable: false,
                },
                move: {
                    direction: 'bottom-left',
                    speed: 2,
                    out_mode: 'out',
                }
            }
        };
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n margin:0;\r\n  padding: 0;\r\n}\r\n.container img {\r\n  width: 100%;\r\n  height: 350px;\r\n  float:left;\r\n  /*border: 7px solid #06b2d2;*/\r\n\r\n}\r\n.section2 {\r\n  padding: 0% 10% 5%;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 12px;\r\n  color: #000000;\r\n  background-color: rgb(252, 250, 242);\r\n}\r\nh1{\r\n  text-align: center;\r\n  margin-bottom: 5%;\r\n  margin-top: 5%;\r\n  font-size: 48px;\r\n}\r\n.container {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  width:50%;\r\n}\r\n.container:hover .overlay {\r\n  opacity: 1;\r\n   width: 100%;\r\n}\r\n.overlay{\r\n  position: absolute;\r\n  opacity: 0;\r\n  top:0;\r\n  bottom:0;\r\n  right:0;\r\n  left:0;\r\n  width: 0;\r\n  height:100%;\r\n  transition: .75s ease;\r\n  background-color:rgb(252, 250, 242);\r\n}\r\n.text {\r\n  color: rgba(5, 127, 145, 0.9);\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n.button {\r\n  background-color: rgb(252, 250, 242);\r\n  border: 4px solid rgba(5, 127, 145, 0.9);\r\n  color:rgba(5, 127, 145, 0.9);\r\n  padding: 10px 20px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n}\r\n.button:hover {\r\n  background-color: rgba(5, 127, 145, 0.9);\r\n  color:rgb(252, 250, 242);\r\n}\r\n/*.....media queries......*/\r\n@media (max-width: 768px) {\r\n  h1 {\r\n    font-size:16px;\r\n  }\r\n  .text {\r\n    font-size:10px;\r\n  }\r\n  .container {\r\n    width: 100%;\r\n  }\r\n}\r\n@media (min-width: 769px) and (max-width: 992px) {\r\n  h1 {\r\n    font-size:28px;\r\n  }\r\n  .text {\r\n    font-size:12px;\r\n  }\r\n  .container {\r\n    width: 100%;\r\n  }\r\n}\r\n@media (min-width: 993px) and (max-width: 1200px) {\r\n  h1 {\r\n    font-size:40px;\r\n  }\r\n  .text {\r\n    font-size:18px;\r\n\r\n  }\r\n}\r\n@media (min-width: 1201px) {\r\n  h1 {\r\n    font-size:48px;\r\n  }\r\n  .text {\r\n    font-size:20px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFFBQVE7RUFDUCxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsVUFBVTtFQUNWLDZCQUE2Qjs7QUFFL0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGNBQWM7RUFDZCxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDtBQUNDO0VBQ0MsVUFBVTtHQUNULFdBQVc7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixLQUFLO0VBQ0wsUUFBUTtFQUNSLE9BQU87RUFDUCxNQUFNO0VBQ04sUUFBUTtFQUNSLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBd0M7RUFFeEMsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdDQUF3QztFQUN4Qyw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usd0NBQXdDO0VBQ3hDLHdCQUF3QjtBQUMxQjtBQUVBLDJCQUEyQjtBQUMzQjtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYzs7RUFFaEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiBtYXJnaW46MDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5jb250YWluZXIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgLypib3JkZXI6IDdweCBzb2xpZCAjMDZiMmQyOyovXHJcblxyXG59XHJcbi5zZWN0aW9uMiB7XHJcbiAgcGFkZGluZzogMCUgMTAlIDUlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUwLCAyNDIpO1xyXG59XHJcbmgxe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIHdpZHRoOjUwJTtcclxufVxyXG4gLmNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm92ZXJsYXl7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdG9wOjA7XHJcbiAgYm90dG9tOjA7XHJcbiAgcmlnaHQ6MDtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgdHJhbnNpdGlvbjogLjc1cyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDI1MiwgMjUwLCAyNDIpO1xyXG59XHJcbi50ZXh0IHtcclxuICBjb2xvcjogcmdiYSg1LCAxMjcsIDE0NSwgMC45KTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUwLCAyNDIpO1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoNSwgMTI3LCAxNDUsIDAuOSk7XHJcbiAgY29sb3I6cmdiYSg1LCAxMjcsIDE0NSwgMC45KTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogNHB4IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1LCAxMjcsIDE0NSwgMC45KTtcclxuICBjb2xvcjpyZ2IoMjUyLCAyNTAsIDI0Mik7XHJcbn1cclxuXHJcbi8qLi4uLi5tZWRpYSBxdWVyaWVzLi4uLi4uKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgfVxyXG4gIC50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZToyOHB4O1xyXG4gIH1cclxuICAudGV4dCB7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5M3B4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOjQwcHg7XHJcbiAgfVxyXG4gIC50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG5cclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDFweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTo0OHB4O1xyXG4gIH1cclxuICAudGV4dCB7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <link href=\"https://fonts.googleapis.com/css?family=Pacifico|Roboto:300\" rel=\"stylesheet\">\n</head>\n\n<div class=\"section2\">\n  <div class=\"row\">\n    <h1>PROJECTS</h1>\n  </div>\n  <div class=\"row\">\n      <div class=\"block\">\n        <div class=\"row\">\n        <div class=\"col-md-6 container\">\n          <img src=\"/portfolio/assets/img/1.JPG\" alt=\"1\">\n          <div class=\"overlay\">\n            <div class=\"text\">A responsive website designed with simple and well defined animations and transitions using HTML5, CSS3, JavaScript and jQuery.<br>\n            <a href=\"https://sindhushakotapati.github.io/uddiningsite.github.io/\" class=\"button\">View Project</a></div>\n          </div>\n        </div>\n          <div class=\"col-md-6 container\">\n            <img src=\"/portfolio/assets/img/5.JPG\" alt=\"1\">\n            <div class=\"overlay\">\n              <div class=\"text\">A responsive e-commerce fashion store using ReactJS.<br>\n                <a href=\"https://sindhushakotapati.github.io/fashionstore/\" class=\"button\">View Project</a></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 container\">\n            <img src=\"/portfolio/assets/img/3.JPG\" alt=\"1\">\n            <div class=\"overlay\">\n              <div class=\"text\">A angular project based on recipe book and shopping list with Bootstrap3 styling. <br>\n                <a href=\"https://sindhushakotapati.github.io/angularproject1/\" class=\"button\">View Project</a></div>\n            </div>\n          </div>\n            <div class=\"col-md-6 container\">\n              <img src=\"/portfolio/assets/img/2.JPG\" alt=\"1\">\n              <div class=\"overlay\">\n                <div class=\"text\">A news website using custom grid and well designed tabbed subscription form.<br>\n                  <a href=\"https://sindhushakotapati.github.io/newssite.github.io/\" class=\"button\">View Project</a></div>\n              </div>\n            </div>\n\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 container\">\n            <img src=\"/portfolio/assets/img/4.JPG\" alt=\"1\">\n            <div class=\"overlay\">\n              <div class=\"text\">A simple to-do list app using angular.<br>\n                <a href=\"https://sindhushakotapati.github.io/todolist/\" class=\"button\">View Project</a></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sindhusha Kotapati\Documents\angular projects\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map