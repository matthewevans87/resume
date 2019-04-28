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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
        this.title = 'resume';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_academic_resume_academic_resume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/academic-resume/academic-resume.component */ "./src/app/components/academic-resume/academic-resume.component.ts");
/* harmony import */ var _components_accomplishment_accomplishment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/accomplishment/accomplishment.component */ "./src/app/components/accomplishment/accomplishment.component.ts");
/* harmony import */ var _components_certificate_certificate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/certificate/certificate.component */ "./src/app/components/certificate/certificate.component.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
/* harmony import */ var _components_institution_institution_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/institution/institution.component */ "./src/app/components/institution/institution.component.ts");
/* harmony import */ var _components_position_position_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/position/position.component */ "./src/app/components/position/position.component.ts");
/* harmony import */ var _components_professional_resume_professional_resume_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/professional-resume/professional-resume.component */ "./src/app/components/professional-resume/professional-resume.component.ts");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/project/project.component */ "./src/app/components/project/project.component.ts");
/* harmony import */ var _components_responsibility_responsibility_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/responsibility/responsibility.component */ "./src/app/components/responsibility/responsibility.component.ts");
/* harmony import */ var _components_technology_technology_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/technology/technology.component */ "./src/app/components/technology/technology.component.ts");
/* harmony import */ var _components_term_term_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/term/term.component */ "./src/app/components/term/term.component.ts");
/* harmony import */ var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/testimonial/testimonial.component */ "./src/app/components/testimonial/testimonial.component.ts");
/* harmony import */ var _components_additional_experience_additional_experience_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/additional-experience/additional-experience.component */ "./src/app/components/additional-experience/additional-experience.component.ts");
/* harmony import */ var _components_stack_exchange_accomplishment_stack_exchange_accomplishment_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/stack-exchange-accomplishment/stack-exchange-accomplishment.component */ "./src/app/components/stack-exchange-accomplishment/stack-exchange-accomplishment.component.ts");




















var appRoutes = [
    { path: 'professional', component: _components_professional_resume_professional_resume_component__WEBPACK_IMPORTED_MODULE_12__["ProfessionalResumeComponent"] },
    {
        path: '',
        redirectTo: '/professional',
        pathMatch: 'full'
    },
    { path: '**', component: _components_professional_resume_professional_resume_component__WEBPACK_IMPORTED_MODULE_12__["ProfessionalResumeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_professional_resume_professional_resume_component__WEBPACK_IMPORTED_MODULE_12__["ProfessionalResumeComponent"],
                _components_academic_resume_academic_resume_component__WEBPACK_IMPORTED_MODULE_6__["AcademicResumeComponent"],
                _components_term_term_component__WEBPACK_IMPORTED_MODULE_16__["TermComponent"],
                _components_technology_technology_component__WEBPACK_IMPORTED_MODULE_15__["TechnologyComponent"],
                _components_accomplishment_accomplishment_component__WEBPACK_IMPORTED_MODULE_7__["AccomplishmentComponent"],
                _components_project_project_component__WEBPACK_IMPORTED_MODULE_13__["ProjectComponent"],
                _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_17__["TestimonialComponent"],
                _components_position_position_component__WEBPACK_IMPORTED_MODULE_11__["PositionComponent"],
                _components_company_company_component__WEBPACK_IMPORTED_MODULE_9__["CompanyComponent"],
                _components_institution_institution_component__WEBPACK_IMPORTED_MODULE_10__["InstitutionComponent"],
                _components_certificate_certificate_component__WEBPACK_IMPORTED_MODULE_8__["CertificateComponent"],
                _components_responsibility_responsibility_component__WEBPACK_IMPORTED_MODULE_14__["ResponsibilityComponent"],
                _components_additional_experience_additional_experience_component__WEBPACK_IMPORTED_MODULE_18__["AdditionalExperienceComponent"],
                _components_stack_exchange_accomplishment_stack_exchange_accomplishment_component__WEBPACK_IMPORTED_MODULE_19__["StackExchangeAccomplishmentComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, 
                // { enableTracing: true } // <-- debugging purposes only
                { useHash: true }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/academic-resume/academic-resume.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/academic-resume/academic-resume.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\r\n    <div class=\"name\">\r\n        Matthew Evans\r\n    </div>\r\n    <span class=\"contact\">\r\n        <span class=\"contact-entry\">(214) 674 - 0842</span>\r\n        <span class=\"contact-entry\"><a href=\"mailto:matthewevans87@gmail.com\">matthewevans87@gmail.com</a></span></span>\r\n</div>\r\n<div class=\"content-body\">\r\n    <div class=\"objective\">\r\n        <div class=\"title\">\r\n            Objective\r\n        </div>\r\n        <div class=\"statement\">\r\n            I am seeking admission to the University of Texas at Dallas Master of Computer Science degree program with a concentration in Intelligent Systems.\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"personal-profile\">\r\n        <div class=\"title\">\r\n            Personal Profile\r\n        </div>\r\n        <div class=\"personal-statement statement\">\r\n            \"A talented, self-motivated software engineer with 10 years of industry experience crafting elegant and performant solutions to complex, real world problems.\"\r\n        </div>\r\n        <div class=\"statement\">\r\n            <p>Utilizing my in-depth knowledge of algorithms and database systems, I have designed and implemented complex data-driven applications relied on by thousands of users to govern hundreds of branches in a multi-billion dollar company. My intelligence, self-discipline and calculating focus allows me to efficiently research new topics and quickly digest abstract technical material. </p>\r\n            <p>As a passionate life-long learner, I am a voracious reader and frequently take college and professional courses for continued intellectual enrichment. In pursuance of my long term career goal of transitioning from industry to academia, I am seeking to extend my credentials with a master’s degree in Computer Science.</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"credentials\">\r\n\r\n        <div class=\"credential education\">\r\n            <div class=\"title\">\r\n                Education\r\n            </div>\r\n            <div class=\"organization first\">\r\n                <div class=\"name\">\r\n                    <span><a href=\"https://www.utdallas.edu/\" target=\"_blank\">University of Texas at Dallas</a>, Richardson, Texas</span>\r\n                </div>\r\n                <div class=\"certificates\">\r\n                    <div class=\"title\">\r\n                        Degrees\r\n                    </div>\r\n                    <div class=\"certificate\">\r\n                        <div class=\"details\">\r\n                            <span class=\"title\"><a href=\"https://cs.utdallas.edu/education/undergraduate/\" target=\"_blank\">Bachelor of Science in Computer Science</a></span>, <span class=\"institution\"><a href=\"https://engineering.utdallas.edu/\"\r\n                            target=\"_blank\">The Erik Johnson School of Engineering and Computer Science</a></span>, <span class=\"timeframe\">May 2012</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"organization\">\r\n                <div class=\"name\">\r\n                    <span><a href=\"https://www.coursera.org/\" target=\"_blank\">Coursera</a></span>\r\n                </div>\r\n                <div class=\"certificates\">\r\n                    <div class=\"title\">\r\n                        Certificates\r\n                    </div>\r\n                    <div class=\"certificate\">\r\n                        <div class=\"details\">\r\n                            <span class=\"title\"><a href=\"https://www.coursera.org/account/accomplishments/certificate/PEPQTSHX8UYP\" target=\"_blank\">Machine Learning</a></span>, <span class=\"institution\"><a href=\"https://online.stanford.edu/\" target=\r\n                            \"_blank\">Stanford University Online</a></span>, <span class=\"timeframe\">February 2018</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"organization\">\r\n                <div class=\"name\">\r\n                    <span><a href=\"http://www.collin.edu/\" target=\"_blank\">Collin College</a></span>\r\n                </div>\r\n                <div class=\"certificates\">\r\n                    <div class=\"title\">\r\n                        Additional Coursework for Personal Enrichment\r\n                    </div>\r\n                    <div class=\"certificate\">\r\n                        <div class=\"details\">\r\n                            <span class=\"title\"><a href=\"https://en.wikipedia.org/wiki/Differential_equation\" target=\"_blank\">Differential Equations</a></span>, <span class=\"timeframe\">Spring 2015</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"certificate\">\r\n                        <div class=\"details\">\r\n                            <span class=\"title\">General Chemistry 1</span>, <span class=\"timeframe\">Spring 2013</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"credential\">\r\n            <div class=\"title\">\r\n                Professional Experience\r\n            </div>\r\n            <div class=\"organization first\">\r\n                <div class=\"name\">\r\n                    <span><a href=\"https://www.cleanharbors.com/\" target=\"_blank\">Clean Harbors, Inc.</a>, Richardson, Texas</span>\r\n                </div>\r\n                <div class=\"position\">\r\n                    <div class=\"details\">\r\n                        <span class=\"title\">Sr. Software Engineer | Business Analytics and Insights</span> <span class=\"timeframe\">2013 - 2018</span>\r\n                    </div>\r\n                    <div class=\"projects position-section\">\r\n                        <span class=\"title\">Projects</span>\r\n                        <div class=\"project\">\r\n                            <div class=\"overview\">\r\n                                <span class=\"title\"><a id=\"epicenter-rewrite\"></a>Epicenter</span><span class=\"description\">Data Aggregation Process with Web Dashboard Application</span> \r\n                                <span class=\"project-position\">Lead Developer</span>\r\n                            </div>\r\n                            <div class=\"details\">\r\n                                <div class=\"technologies\">\r\n                                    <ul class=\"\">\r\n                                        <li>\r\n                                            <a href=\"https://www.typescriptlang.org/\" target=\"_blank\">TypeScript</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)\" target=\"_blank\">C#</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/Transact-SQL\" target=\"_blank\">T-SQL</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://github.com/aspnet/Mvc\" target=\"_blank\">ASP.NET Core Web API</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://d3js.org/\" target=\"_blank\">D3JS</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://www.chartjs.org/\" target=\"_blank\">ChartJS</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"highlights\">\r\n                                    <ul>\r\n                                        <li>Designed and implemented primary sales performance reporting tool for company with $50M+ in monthly revenue</li>\r\n                                        <li>Made heavy use of SQL Server table indexes, indexed views and other strategies to maximize query read performance</li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"project\">\r\n                            <div class=\"overview\">\r\n                                <span class=\"title\">Margin Reporting Tool</span> <span class=\"description\">Profitability Analysis Data Process with Web Dashboard Application</span> <span class=\"project-position\">Lead Developer</span>\r\n                            </div>\r\n                            <div class=\"details\">\r\n                                <div class=\"technologies\">\r\n                                    <ul class=\"\">\r\n                                        <li>\r\n                                            <a href=\"https://www.typescriptlang.org/\" target=\"_blank\">TypeScript</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)\" target=\"_blank\">C#</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/Transact-SQL\" target=\"_blank\">T-SQL</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://github.com/aspnet/Mvc\" target=\"_blank\">ASP.NET Core Web API</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://www.chartjs.org/\" target=\"_blank\">ChartJS</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://gulpjs.com/\" target=\"_blank\">Gulp</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"highlights\">\r\n                                    <ul>\r\n                                        <li>Optimized data processing procedure; acheived 5x reduction in size of codebase with 60x improvement in processing time</li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"project\">\r\n                            <div class=\"overview\">\r\n                                <span class=\"title\">Exploratory Market Segment Research</span> <span class=\"description\">Analysis and Presentation of Geospatial Market Data</span> <span class=\"project-position\">Lead Developer</span>\r\n                            </div>\r\n                            <div class=\"details\">\r\n                                <div class=\"technologies\">\r\n                                    <ul class=\"\">\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/Transact-SQL\" target=\"_blank\">T-SQL</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://www.postgresql.org/\" target=\"_blank\">PostgreSQL</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://qgis.org/en/site/\" target=\"_blank\">qGIS</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://postgis.net/\" target=\"_blank\">PostGIS</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"highlights\">\r\n                                    <ul>\r\n                                        <li>Performed research and analysis of market data using <a href=\"https://docs.microsoft.com/en-us/sql/relational-databases/spatial/spatial-indexes-overview?view=sql-server-2017\" target=\"_blank\">geospatial databases</a> to determine feasibility of using existing branch network to support new medical waste market segment</li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"project\">\r\n                            <div class=\"overview\">\r\n                                <span class=\"title\">Sales Forecasting Tool</span> <span class=\"description\">Model Calculation Data Process with Web Dashboard Application</span> <span class=\"project-position\">Lead Developer</span>\r\n                            </div>\r\n                            <div class=\"details\">\r\n                                <div class=\"technologies\">\r\n                                    <ul class=\"\">\r\n                                        <li>\r\n                                            <a href=\"https://www.r-project.org/\" target=\"_blank\">R</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)\" target=\"_blank\">C#</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/Transact-SQL\" target=\"_blank\">T-SQL</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://www.asp.net/downloads/vs2008\" target=\"_blank\">ASP.NET</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://www.virtualbox.org/\" target=\"_blank\">VirtualBox</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://www.ubuntu.com/server\" target=\"_blank\">Ubuntu Server</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"highlights\">\r\n                                    <ul>\r\n                                        <li>Reduced forecast model processing time from 48+ hours to 30 minutes through database optimization, code optimization, parallelism and distributed computing</li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"project\">\r\n                            <div class=\"overview\">\r\n                                <span class=\"title\">Customer Record Matching and De-duplication</span> <span class=\"description\">Data Processing Service Application</span> <span class=\"project-position\">Lead Developer</span>\r\n                            </div>\r\n                            <div class=\"details\">\r\n                                <div class=\"technologies\">\r\n                                    <ul class=\"\">\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)\" target=\"_blank\">C#</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/Transact-SQL\" target=\"_blank\">T-SQL</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/.NET_Framework_version_history#Service_Pack_1\" target=\"_blank\">.NET 3.5</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"highlights\">\r\n                                    <ul>\r\n                                        <li>Automated the identification of thousands of duplicate customer records using word <a href=\"https://en.wikipedia.org/wiki/Adjacency_list\" target=\"_blank\">adjacency graph</a> algorithm and <a href=\"https://en.wikipedia.org/wiki/Approximate_string_matching\" target=\"_blank\">fuzzy matching algorithms</a> (e.g. <a href=\"https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance\"\r\n                                        target=\"_blank\"><i>Jaro–Winkler</i></a>)\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"project\">\r\n                            <div class=\"overview\">\r\n                                <span class=\"title\">BizPoint</span> <span class=\"description\">Market Research and Sales Lead Generation Web Application</span>\r\n                            </div>\r\n                            <div class=\"details\">\r\n                                <div class=\"technologies\">\r\n                                    <ul class=\"\">\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)\">C#</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/Transact-SQL\" target=\"_blank\">T-SQL</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://www.asp.net/downloads/vs2008\" target=\"_blank\">ASP.NET</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"highlights\">\r\n                                    <ul>\r\n                                        <li>Developed process to identify and score potential customer leads based on their <a href=\"https://www.epa.gov/hw/learn-basics-hazardous-waste\" target=\"_blank\">EPA waste generation profile</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                    <div class=\"references position-section\">\r\n                        <span class=\"title\">Testimonials</span>\r\n                        <div class=\"reference\">\r\n                            <div class=\"quote\">\r\n                                \"Matt has worked with our organization on several projects and has always provided clear and precise communication. His depth of knowledge on various subjects and his ability to research new solutions has been a great\r\n                                asset. Matt has a diverse skill set which can always be relied upon to provide multiple solutions to the range of technical and analytical problems we’ve faced. He has been a highly valued asset and we would gladly\r\n                                work with him again.\"\r\n                            </div>\r\n                            <div class=\"quoted\">\r\n                                — <a href=\"https://www.reuters.com/finance/stocks/officer-profile/CLH/190188\" target=\"_blank\">George Curtis</a> | Executive Vice President, Product Pricing and Proposals, Clean Harbors, Inc.\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"reference\">\r\n                            <div class=\"quote\">\r\n                                \"Matt is always timely and accurate with his projects and always puts in extra effort to ensure customer needs are met. His depth of knowledge on various subjects and his ability to research new software or techniques\r\n                                has been very beneficial to our small team. Matt has a very diverse tool set and can always be relied on to provide multiple solutions to problems that we face. I wish I had a team of people like Matt working in my\r\n                                group.\"\r\n                            </div>\r\n                            <div class=\"quoted\">\r\n                                — <a href=\"https://www.linkedin.com/in/jeremy-rabbe-9b710a11/\" target=\"_blank\">Jeremy Rabbe</a> | Manager, Analytics and Insights, Clean Harbors, Inc.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"organization\">\r\n                <div class=\"name\">\r\n                    <span><a href=\"https://www.cisco.com/\" target=\"_blank\">Cisco Systems, Inc.</a>, Richardson, Texas</span>\r\n                </div>\r\n                <div class=\"position\">\r\n                    <div class=\"details\">\r\n                        <span class=\"title\">Software Developer | Data Center Management</span> <span class=\"timeframe\">2012 - 2013</span>\r\n                    </div>\r\n                    <div class=\"projects position-section\">\r\n                        <span class=\"title\">Projects</span>\r\n                        <div class=\"project\">\r\n                            <div class=\"overview\">\r\n                                <span class=\"title\">Hardware Cabinet Buildout Tool</span> <span class=\"description\">Drag and Drop Hardware Cabinet Configurator Web Application</span>\r\n                                <span class=\"project-position\">Lead Developer</span>\r\n                            </div>\r\n                            <div class=\"details\">\r\n                                <div class=\"technologies\">\r\n                                    <ul class=\"\">\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)\">C#</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/Transact-SQL\" target=\"_blank\">T-SQL</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"highlights\">\r\n                                    <ul>\r\n                                        <li>Implemented automatic hardware compatibility and power requirement checking system</li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"project\">\r\n                            <div class=\"overview\">\r\n                                <span class=\"title\">Hardware Polling Service</span> <span class=\"description\">Data Collection and Aggregation Service Application</span>\r\n                            </div>\r\n                            <div class=\"details\">\r\n                                <div class=\"technologies\">\r\n                                    <ul class=\"\">\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)\">C#</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/Transact-SQL\" target=\"_blank\">T-SQL</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"highlights\">\r\n                                    <ul>\r\n                                        <li>Implemented multi-threaded polling service for collecting the status and metrics of networked data center hardware (servers, routers, etc.) and equipment (power supplies, thermal sensors, etc.)</li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"organization\">\r\n                <div class=\"name\">\r\n                    <span><a href=\"http://clickmotive.com/\" target=\"_blank\">Clickmotive, Inc.</a>, Plano, Texas</span>\r\n                </div>\r\n                <div class=\"position\">\r\n                    <div class=\"details\">\r\n                        <span class=\"title\">Jr. Software Engineer | Projects Team</span> <span class=\"timeframe\">2011 - 2012</span>\r\n                    </div>\r\n                    <div class=\"projects position-section\">\r\n                        <span class=\"title\">Projects</span>\r\n                        <div class=\"project\">\r\n                            <div class=\"overview\">\r\n                                <span class=\"title\">Inventory Processing System</span> <span class=\"description\">Automobile Dealership Inventory Data Aggregation Service</span>\r\n                            </div>\r\n                            <div class=\"details\">\r\n                                <div class=\"technologies\">\r\n                                    <ul class=\"\">\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)\" target=\"_blank\">C#</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/Transact-SQL\" target=\"_blank\">T-SQL</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://redis.io/\" target=\"_blank\">Redis</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"highlights\">\r\n                                    <ul>\r\n                                        <li>Worked with team on multi-month project to develop new inventory processing system; reduced processing time from 4 hours to 15 minutes</li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"project\">\r\n                            <div class=\"overview\">\r\n                                <span class=\"title\">Fusion</span> <span class=\"description\">Turn-key Solution for Deploying Automobile Dealership Websites</span>\r\n                            </div>\r\n                            <div class=\"details\">\r\n                                <div class=\"technologies\">\r\n                                    <ul class=\"\">\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)\">C#</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/Transact-SQL\" target=\"_blank\">T-SQL</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/XSLT\" target=\"_blank\">XSLT</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/HTML\" target=\"_blank\">HTML</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/Cascading_Style_Sheets\" target=\"_blank\">CSS</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"highlights\">\r\n                                    <ul>\r\n                                        <li>Developed many customer-facing web UI components for Clickmotive’s core product</li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"organization\">\r\n                <div class=\"name\">\r\n                    <span><a href=\"https://www.ericsson.com/en\" target=\"_blank\">Ericsson, Inc.</a>, Plano, Texas</span>\r\n                </div>\r\n                <div class=\"position\">\r\n                    <div class=\"details\">\r\n                        <span class=\"title\">Software Engineer Intern | North America Wireless Radio Access Network division</span> <span class=\"timeframe\">2010 - 2011</span>\r\n                    </div>\r\n                    <div class=\"projects position-section\">\r\n                        <span class=\"title\">Projects</span>\r\n                        <div class=\"project\">\r\n                            <div class=\"overview\">\r\n                                <span class=\"title\">Automated Neighbor Selection Tool</span> <span class=\"description\">Windows Forms Application</span>\r\n                                <span class=\"project-position\">Lead Developer</span>\r\n                            </div>\r\n                            <div class=\"details\">\r\n                                <div class=\"technologies\">\r\n                                    <ul class=\"\">\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)\" target=\"_blank\">C#</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/Transact-SQL\" target=\"_blank\">T-SQL</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://msdn.microsoft.com/en-us/library/ms533797(v=vs.85).aspx\" target=\"_blank\">GDI+</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"highlights\">\r\n                                    <ul>\r\n                                        <li>\r\n                                            <span>Implemented patent <a href=\"https://patents.google.com/patent/US7050803B2/\" target=\"_blank\">US7050803B2</a>; Application visualized <a href=\"https://en.wikipedia.org/wiki/Cellular_network\">cell network</a> <span>&nbsp;</span> <a href=\"https://en.wikipedia.org/wiki/Sector_antenna\">sectors</a> and automatically calculated sector neighbors in a given geographic region</span>\r\n                                        </li>\r\n                                        <li>Awarded Ericsson “Intern of the Month” for excellence during this project</li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"project\">\r\n                            <div class=\"overview\">\r\n                                <span class=\"title\">Resource Management Tool</span> <span class=\"description\">Web Application</span>\r\n                                <span class=\"project-position\">Lead Developer</span>\r\n                            </div>\r\n                            <div class=\"details\">\r\n                                <div class=\"technologies\">\r\n                                    <ul class=\"\">\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)\" target=\"_blank\">C#</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/Transact-SQL\" target=\"_blank\">T-SQL</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://www.asp.net/downloads/vs2008\" target=\"_blank\">ASP.NET</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"http://lucene.apache.org/solr/\" target=\"_blank\">SOLR Search</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"highlights\">\r\n                                    <ul>\r\n                                        <li>Developed web-based staffing and resource management tool enabling managers to identify department resources, SMEs, and underutilized personnel</li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"project\">\r\n                            <div class=\"overview\">\r\n                                <span class=\"title\">Network Presentation Tool</span> <span class=\"description\">Web Dashboard Application</span>\r\n                            </div>\r\n                            <div class=\"details\">\r\n                                <div class=\"technologies\">\r\n                                    <ul class=\"\">\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)\">C#</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/Transact-SQL\" target=\"_blank\">T-SQL</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://www.asp.net/downloads/vs2008\" target=\"_blank\">ASP.NET</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"highlights\">\r\n                                    <ul>\r\n                                        <li>Developed interactive web map visualizing cellular network sites with diagnostic data</li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"organization\">\r\n                <div class=\"name\">\r\n                    <span><a href=\"https://www.dmagazine.com/\" target=\"_blank\">D Magazine Partners, Inc.</a>, Dallas, Texas</span>\r\n                </div>\r\n                <div class=\"position\">\r\n                    <div class=\"details\">\r\n                        <span class=\"title\">Jr. Online Developer | Website and Digital Marketing Team</span> <span class=\"timeframe\">2009 – 2010</span>\r\n                    </div>\r\n\r\n                    <div class=\"projects position-section\">\r\n                        <span class=\"title\">Projects</span>\r\n                        <div class=\"project\">\r\n                            <div class=\"overview\">\r\n                                <span class=\"title\">Online Surveys System</span> <span class=\"description\">Web Application</span>\r\n                            </div>\r\n                            <div class=\"details\">\r\n                                <div class=\"technologies\">\r\n                                    <ul class=\"\">\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)\" target=\"_blank\">C#</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/Transact-SQL\" target=\"_blank\">T-SQL</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://www.asp.net/downloads/vs2008\" target=\"_blank\">ASP.NET</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"highlights\">\r\n                                    <ul>\r\n                                        <li>Developed and launched customer facing online survey system to support <a href=\"https://www.dmagazine.com/publications/d-magazine/2018/august/dallas-best-of-big-d-2018/?ref=nav\" target=\"_blank\">\"D&nbsp;Best\" and \"Top&nbsp;Ten\"</a> publications</li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"organization\">\r\n                <div class=\"name\">\r\n                    <span><a href=\"https://www.dmagazine.com/\" target=\"_blank\">Telligent Systems, Inc.</a>, Plano, Texas</span>\r\n                </div>\r\n                <div class=\"position\">\r\n                    <div class=\"details\">\r\n                        <span class=\"title\">Software Engineer Intern | Projects Team</span> <span class=\"timeframe\">2008</span>\r\n                    </div>\r\n                    <div class=\"projects position-section\">\r\n                            <span class=\"title\">Projects</span>\r\n                            <div class=\"project\">\r\n                                <div class=\"overview\">\r\n                                    <span class=\"title\">Print-to-Media</span> <span class=\"description\">Virtual Printer Driver</span>\r\n                                </div>\r\n                                <div class=\"details\">\r\n                                    <div class=\"technologies\">\r\n                                        <ul class=\"\">\r\n                                            <li>\r\n                                                <a href=\"https://en.wikipedia.org/wiki/C_Sharp_(programming_language)\" target=\"_blank\">C#</a>\r\n                                            </li>\r\n                                            <li>\r\n                                                <a href=\"https://www.asp.net/downloads/vs2008\" target=\"_blank\">ASP.NET</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                    <div class=\"highlights\">\r\n                                        <ul>\r\n                                            <li>Developed <a href=\"https://en.wikipedia.org/wiki/Virtual_printer\" target=\"_blank\">virtual printer</a> driver for printing content to <a href=\"https://www.telligent.com/platform/\" target=\"_blank\">Telligent Community CMS platform</a></li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"credential\">\r\n            <div class=\"title\">\r\n                Additional Experience\r\n            </div>\r\n            <div class=\"organization first\">\r\n                <div class=\"position\">\r\n                    <div class=\"projects position-section\">\r\n                        <span class=\"title\">Personal Projects</span>\r\n                        <div class=\"project\">\r\n                            <div class=\"overview\">\r\n                                <span class=\"title\">Crypto Currency Trading Bot <small>(March 2018)</small></span> <span class=\"description\">System for Automated Trading on Crypto Currency Exchange</span>\r\n                            </div>\r\n                            <div class=\"details\">\r\n                                <div class=\"technologies\">\r\n                                    <ul class=\"\">\r\n                                        <li>\r\n                                            <a href=\"https://www.typescriptlang.org/\" target=\"_blank\">TypeScript</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/Transact-SQL\" target=\"_blank\">T-SQL</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://www.python.org/\" target=\"_blank\">Python</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://julialang.org/\" target=\"_blank\">Julia</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://www.mongodb.com/\" target=\"_blank\">MongoDB</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://www.docker.com/\" target=\"_blank\">Docker</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://redis.io/\" target=\"_blank\">Redis</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://en.wikipedia.org/wiki/Microsoft_SQL_Server\" target=\"_blank\">SQL Server 2017</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://nodejs.org/en/\" target=\"_blank\">Node.js</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://expressjs.com/\" target=\"_blank\">Express</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://angular.io/\" target=\"_blank\">Angular</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://rxjs-dev.firebaseapp.com/\" target=\"_blank\">RxJS</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://www.tensorflow.org/\" target=\"_blank\">TensorFlow</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"https://plot.ly/\" target=\"_blank\">Plotly</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"http://mathjs.org/\" target=\"_blank\">mathjs</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"http://www.numpy.org/\" target=\"_blank\">NumPy</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"highlights\">\r\n                                    <ul>\r\n                                        <li>A personal exploration of crypto currencies, automated real-time market trading, machine learning, data analysis and the various technology options available for these purposes</li>\r\n                                        <li>Project included the creation of many evolving prototypes, including\r\n                                            <ul>\r\n                                                <li>Services for collecting market data in real-time and computing <a href=\"https://en.wikipedia.org/wiki/Technical_analysis\" target=\"_blank\">market signals</a>, <a href=\r\n                                                \"https://en.wikipedia.org/wiki/Bollinger_Bands\">indicators</a> and <a href=\"https://en.wikipedia.org/wiki/Predictive_modelling\" target=\"_blank\">predictive features</a> using <a href=\r\n                                                \"https://en.wikipedia.org/wiki/Online_algorithm\" target=\"_blank\">online algorithms</a>\r\n                                                </li>\r\n                                                <li>Web applications for telemetry visualization and manual bot control</li>\r\n                                                <li>Machine learning systems for predicting profitable trade prices</li>\r\n                                                <li>Autonomous trading bots operating in a live market</li>\r\n                                                <li>\r\n                                                    <a href=\"https://en.wikipedia.org/wiki/Data_warehouse\">Data warehousing</a> and <a href=\"https://en.wikipedia.org/wiki/Extract,_transform,_load\">ETL processes</a>\r\n                                                </li>\r\n                                                <li>WebSocket client and server apps for receiving and broadcasting live <a href=\"https://en.wikipedia.org/wiki/Market_data\">market data</a>\r\n                                                </li>\r\n                                                <li>Implementation and testing of various programmatic trading strategies</li>\r\n                                                <li>Implementation and testing of various methods of <a href=\"https://en.wikipedia.org/wiki/Inter-process_communication\" target=\"_blank\">IPC</a> (e.g.: <a href=\r\n                                                \"https://en.wikipedia.org/wiki/Representational_state_transfer\">REST</a>, <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket\" target=\"_blank\">WebSocket</a>, <a href=\r\n                                                \"https://redis.io/commands/blpop\">Redis Blocking Queue</a>)\r\n                                                </li>\r\n                                            </ul>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"credential\">\r\n            <div class=\"title\">\r\n                References\r\n            </div>\r\n            <div class=\"organization first\">\r\n                <div class=\"position\">\r\n\r\n                    <div class=\"references position-section\">\r\n                        <span class=\"title\">Clean Harbors, Inc.</span>\r\n                        <div class=\"reference simple\">\r\n                            <a href=\"https://www.linkedin.com/in/tomvarney/\" target=\"_blank\">Tom Varney</a> | Director, Analytics and Insights\r\n                            <div class=\"contacts\">\r\n                                <span class=\"contact\"><span class=\"type\">e:</span> <span class=\"value\"><a href=\"mailto:varney.thomas@cleanharbors.com\">varney.thomas@cleanharbors.com</a></span></span>\r\n                                <span class=\"contact\"><span class=\"type\">m:</span> <span class=\"value\">(781) 264 - 7322</span></span>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"reference simple\">\r\n                            <a href=\"https://www.linkedin.com/in/timothylforrest/\" target=\"_blank\">Tim Forrest</a> | Director (Former), Analytics and Insights\r\n                            <div class=\"contacts\">\r\n                                <span class=\"contact\"><span class=\"type\">e:</span> <span class=\"value\"><a href=\"mailto:timothy.l.forrest@gmail.com\">timothy.l.forrest@gmail.com</a></span></span>\r\n                                <span class=\"contact\"><span class=\"type\">m:</span> <span class=\"value\">(979) 492 - 5555</span></span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"reference simple\">\r\n                            <a href=\"https://www.linkedin.com/in/jeremy-rabbe-9b710a11/\" target=\"_blank\">Jeremy Rabbe</a> | Manager (Former), Analytics and Insights\r\n                            <div class=\"contacts\">\r\n                                <span class=\"contact\"><span class=\"type\">e:</span> <span class=\"value\"><a href=\"mailto:jrabbe@att.net\">jrabbe@att.net</a></span></span>\r\n                                <span class=\"contact\"><span class=\"type\">m:</span> <span class=\"value\">(254) 981 - 6961</span></span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"reference simple\">\r\n                            <a href=\"https://www.linkedin.com/in/ramesh-kadiyala-887048b/\" target=\"_blank\">Ramesh Kadiyala</a> | Senior Software Engineer, Analytics and Insights\r\n                            <div class=\"contacts\">\r\n                                <span class=\"contact\"><span class=\"type\">m:</span> <span class=\"value\">(302) 983 - 4426 </span></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    \r\n                    <div class=\"references position-section\">\r\n                        <span class=\"title\">Cisco Systems, Inc.</span>\r\n                        <div class=\"reference simple\">\r\n                            <a href=\"https://www.linkedin.com/in/krismcginnes/\" target=\"_blank\">Kris McGinnes</a> | Lead Software Developer, Data Center Operations\r\n                            <div class=\"contacts\">\r\n                                <span class=\"contact\"><span class=\"type\">e:</span> <span class=\"value\"><a href=\"mailto:kmcginnes@me.com\">kmcginnes@me.com</a></span></span>\r\n                                <span class=\"contact\"><span class=\"type\">m:</span> <span class=\"value\">(972) 835 - 0981</span></span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"reference simple\">\r\n                            <a href=\"https://www.linkedin.com/in/gustavo-ansorena-574069b/\" target=\"_blank\">Gustavo Ansorena</a> | Software Developer, Data Center Operations\r\n                            <div class=\"contacts\">\r\n                                <span class=\"contact\"><span class=\"type\">e:</span> <span class=\"value\"><a href=\"mailto:ansorena@gmail.com\">ansorena@gmail.com</a></span></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"references position-section\">\r\n                        <span class=\"title\">ClickMotive, Inc.</span>\r\n                        <div class=\"reference simple\">\r\n                            <a href=\"https://www.linkedin.com/in/mark-gilcrease-871375a/\" target=\"_blank\">Mark Gilcrease</a> | Senior Software Engineer, Projects Team\r\n                            <div class=\"contacts\">\r\n                                <span class=\"contact\"><span class=\"type\">e:</span> <span class=\"value\"><a href=\"mailto:mgilcrease@gmail.com\">mgilcrease@gmail.com</a></span></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"references position-section\">\r\n                        <span class=\"title\">D Magazine Partners, Inc.</span>\r\n                        <div class=\"reference simple\">\r\n                            <a href=\"https://www.linkedin.com/in/randy-mccluer-b1945b4/\" target=\"_blank\">Randy Mccluer</a> | Lead Online Developer\r\n                            <div class=\"contacts\">\r\n                                <span class=\"contact\"><span class=\"type\">e:</span> <span class=\"value\"><a href=\"mailto:randylsu@gmail.com\">randylsu@gmail.com</a></span></span>\r\n                                <span class=\"contact\"><span class=\"type\">m:</span> <span class=\"value\">(214) 394 - 7047</span></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- <div class=\"references position-section\">\r\n                        <span class=\"title\">Telligent Systems, Inc.</span>\r\n                        <div class=\"reference simple\">\r\n                            <a href=\"https://www.linkedin.com/in/jasonlalexander/\" target=\"_blank\">Jason Alexander</a> | Chief Technology Officer\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"references position-section\">\r\n                        <span class=\"title\">Ericsson, Inc.</span>\r\n                        <div class=\"reference simple\">\r\n                            <a href=\"https://www.linkedin.com/in/juliovelo/\" target=\"_blank\">Julio Velo</a> | Senior Project Manager, North America Wireless Radio Access Network division\r\n                        </div>\r\n                    </div> -->\r\n\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/academic-resume/academic-resume.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/academic-resume/academic-resume.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-body .objective, .content-body .personal-profile {\n  padding-left: 1em;\n  padding-top: .5em;\n  margin-bottom: 3rem; }\n  .content-body .objective .title, .content-body .personal-profile .title {\n    font-size: 1.1rem;\n    font-variant: small-caps; }\n  .content-body .objective .personal-statement, .content-body .personal-profile .personal-statement {\n    text-align: center; }\n  .content-body .objective .statement, .content-body .personal-profile .statement {\n    padding-left: 1em;\n    padding-top: .5em; }\n  .content-body .credentials .credential {\n  page-break-inside: avoid; }\n  .content-body .credentials .credential.education {\n    page-break-inside: avoid;\n    page-break-before: avoid; }\n  .content-body .credentials .credential .title {\n    page-break-inside: avoid;\n    page-break-after: avoid; }\n  .content-body .credentials .credential .references .contacts .contact {\n    display: block; }\n  .content-body .credentials .credential .references .contacts .contact .type {\n      font-weight: bold;\n      padding-right: 1em; }\n  .content-header .name {\n  letter-spacing: .05em; }\n  .content-header .contact {\n  padding: 0 5em 0 5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2FkZW1pYy1yZXN1bWUvQzpcXFVzZXJzXFxtYXR0aFxcc291cmNlXFxyZXBvc1xccmVzdW1lL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhY2FkZW1pYy1yZXN1bWVcXGFjYWRlbWljLXJlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUVRLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7RUFKM0I7SUFNWSxpQkFBaUI7SUFDakIsd0JBQXdCLEVBQUE7RUFQcEM7SUFXWSxrQkFBa0IsRUFBQTtFQVg5QjtJQWVZLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTtFQWhCN0I7RUFzQlksd0JBQXdCLEVBQUE7RUF0QnBDO0lBeUJnQix3QkFBd0I7SUFDeEIsd0JBQXdCLEVBQUE7RUExQnhDO0lBK0JnQix3QkFBd0I7SUFDeEIsdUJBQXVCLEVBQUE7RUFoQ3ZDO0lBc0N3QixjQUFjLEVBQUE7RUF0Q3RDO01Bd0M0QixpQkFBaUI7TUFDakIsa0JBQWtCLEVBQUE7RUFROUM7RUFFUSxxQkFBcUIsRUFBQTtFQUY3QjtFQUtRLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY2FkZW1pYy1yZXN1bWUvYWNhZGVtaWMtcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5jb250ZW50LWJvZHkge1xyXG4gICAgICAgIC5vYmplY3RpdmUsIC5wZXJzb25hbC1wcm9maWxlIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuNWVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wZXJzb25hbC1zdGF0ZW1lbnQge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3RhdGVtZW50IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IC41ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jcmVkZW50aWFscyB7XHJcbiAgICAgICAgICAgIC5jcmVkZW50aWFsIHtcclxuICAgICAgICAgICAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAmLmVkdWNhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UtYnJlYWstYmVmb3JlOiBhdm9pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudGl0bGVcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnJlZmVyZW5jZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWN0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnR5cGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250ZW50LWhlYWRlciB7XHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjA1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCA1ZW0gMCA1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/academic-resume/academic-resume.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/academic-resume/academic-resume.component.ts ***!
  \*************************************************************************/
/*! exports provided: AcademicResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicResumeComponent", function() { return AcademicResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AcademicResumeComponent = /** @class */ (function () {
    function AcademicResumeComponent() {
    }
    AcademicResumeComponent.prototype.ngOnInit = function () {
    };
    AcademicResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-academic-resume',
            template: __webpack_require__(/*! ./academic-resume.component.html */ "./src/app/components/academic-resume/academic-resume.component.html"),
            styles: [__webpack_require__(/*! ./academic-resume.component.scss */ "./src/app/components/academic-resume/academic-resume.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AcademicResumeComponent);
    return AcademicResumeComponent;
}());



/***/ }),

/***/ "./src/app/components/accomplishment/accomplishment.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/accomplishment/accomplishment.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li>\n  <span [innerHtml]=\"accomplishmentDescription$ | async\"></span>\n  <ul *ngIf=\"accomplishment.children\">\n    <app-accomplishment *ngFor=\"let childAccomplishment of accomplishment.children\"\n                        [accomplishment]=\"childAccomplishment\"></app-accomplishment>\n  </ul>\n</li>\n"

/***/ }),

/***/ "./src/app/components/accomplishment/accomplishment.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/accomplishment/accomplishment.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  margin: 0;\n  padding: 0;\n  padding-left: 1em;\n  list-style: none; }\n  ul li {\n    padding-left: .5em;\n    padding-bottom: .25em; }\n  ul li.callout {\n      padding-left: .25em;\n      border-left: .25em solid black;\n      font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvbXBsaXNobWVudC9DOlxcVXNlcnNcXG1hdHRoXFxzb3VyY2VcXHJlcG9zXFxyZXN1bWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFjY29tcGxpc2htZW50XFxhY2NvbXBsaXNobWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBO0VBSmxCO0lBT0ksa0JBQWtCO0lBUWxCLHFCQUFxQixFQUFBO0VBZnpCO01BVU0sbUJBQW1CO01BQ25CLDhCQUE4QjtNQUM5QixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb21wbGlzaG1lbnQvYWNjb21wbGlzaG1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgbGkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAuNWVtO1xyXG5cclxuICAgICYuY2FsbG91dCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogLjI1ZW07XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAuMjVlbSBzb2xpZCBibGFjaztcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjI1ZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/accomplishment/accomplishment.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/accomplishment/accomplishment.component.ts ***!
  \***********************************************************************/
/*! exports provided: AccomplishmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccomplishmentComponent", function() { return AccomplishmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_term_link_generation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/term-link-generation.service */ "./src/app/services/term-link-generation.service.ts");



var AccomplishmentComponent = /** @class */ (function () {
    function AccomplishmentComponent(termLinkGenerationService) {
        this.termLinkGenerationService = termLinkGenerationService;
    }
    AccomplishmentComponent.prototype.ngOnInit = function () {
        this.accomplishmentDescription$ = this.termLinkGenerationService
            .InjectLinksForTerms(this.accomplishment.description);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccomplishmentComponent.prototype, "accomplishment", void 0);
    AccomplishmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accomplishment',
            template: __webpack_require__(/*! ./accomplishment.component.html */ "./src/app/components/accomplishment/accomplishment.component.html"),
            styles: [__webpack_require__(/*! ./accomplishment.component.scss */ "./src/app/components/accomplishment/accomplishment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_term_link_generation_service__WEBPACK_IMPORTED_MODULE_2__["TermLinkGenerationService"]])
    ], AccomplishmentComponent);
    return AccomplishmentComponent;
}());



/***/ }),

/***/ "./src/app/components/additional-experience/additional-experience.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/additional-experience/additional-experience.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"credential additional-experience\">\n  <div class=\"title\">Additional Accomplishments</div>\n  <app-stack-exchange-accomplishment></app-stack-exchange-accomplishment>\n\n  <div class=\"organization first\">\n    <div class=\"position\">\n      <div class=\"projects position-section\"\n           *ngIf=\"additionalExperience.personalProjects\">\n        <span class=\"title\">Personal Projects</span>\n        <app-project *ngFor=\"let project of additionalExperience.personalProjects\"\n                     [project]=\"project\"></app-project>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/additional-experience/additional-experience.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/additional-experience/additional-experience.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".credential {\n  margin-bottom: 3rem; }\n  .credential > .title {\n    font-size: 1.8em;\n    text-align: center;\n    text-transform: capitalize;\n    font-variant: small-caps;\n    letter-spacing: .1em;\n    page-break-after: avoid; }\n  .credential.additional-experience {\n    page-break-inside: avoid; }\n  .organization {\n  margin-top: 1.6em; }\n  .organization > .name {\n    font-size: 1.4rem;\n    padding-bottom: 0.2em;\n    font-variant: small-caps;\n    text-transform: capitalize;\n    text-align: center; }\n  .organization.first {\n    page-break-before: avoid; }\n  .organization:not(.first) {\n    page-break-inside: avoid; }\n  .organization {\n  margin-top: 1.6em; }\n  .organization.first {\n    page-break-before: avoid; }\n  .organization:not(.first) {\n    page-break-inside: avoid; }\n  .organization > .name {\n    font-size: 1.4rem;\n    padding-bottom: 0.2em;\n    font-variant: small-caps;\n    text-transform: capitalize;\n    text-align: center; }\n  .organization > .position > .details {\n    padding-bottom: 0.2em;\n    text-align: center;\n    font-style: italic; }\n  .organization > .position > .details > .title::after {\n      content: ', '; }\n  .organization > .position > .details > .title,\n    .organization > .position > .details > .timeframe {\n      font-size: 1.1rem; }\n  .organization > .position > .position-section {\n    padding-left: 1em;\n    padding-top: .5em; }\n  .organization > .position > .position-section > .title {\n      font-size: 1.1rem;\n      font-variant: small-caps; }\n  .organization > .position > .position-section.responsibilities ul {\n      margin: 0;\n      padding: 0;\n      margin-left: .5em;\n      margin-top: .5em;\n      list-style: none; }\n  .organization > .position > .position-section.responsibilities ul li {\n        padding-bottom: .25em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGRpdGlvbmFsLWV4cGVyaWVuY2UvQzpcXFVzZXJzXFxtYXR0aFxcc291cmNlXFxyZXBvc1xccmVzdW1lL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhZGRpdGlvbmFsLWV4cGVyaWVuY2VcXGFkZGl0aW9uYWwtZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQixFQUFBO0VBRHJCO0lBSUksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQix1QkFBdUIsRUFBQTtFQVQzQjtJQWFJLHdCQUF3QixFQUFBO0VBSzVCO0VBQ0UsaUJBQWlCLEVBQUE7RUFEbkI7SUFJSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsa0JBQWtCLEVBQUE7RUFSdEI7SUFhSSx3QkFBd0IsRUFBQTtFQWI1QjtJQWlCSSx3QkFBd0IsRUFBQTtFQUk1QjtFQVVFLGlCQUFpQixFQUFBO0VBVm5CO0lBR0ksd0JBQXdCLEVBQUE7RUFINUI7SUFPSSx3QkFBd0IsRUFBQTtFQVA1QjtJQWFJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixrQkFBa0IsRUFBQTtFQWpCdEI7SUF1Qk0scUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTtFQXpCeEI7TUE2QlUsYUFDRixFQUFBO0VBOUJSOztNQW1DUSxpQkFBaUIsRUFBQTtFQW5DekI7SUF3Q00saUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBO0VBekN2QjtNQTRDUSxpQkFBaUI7TUFDakIsd0JBQXdCLEVBQUE7RUE3Q2hDO01BbURVLFNBQVM7TUFDVCxVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixnQkFBZ0IsRUFBQTtFQXZEMUI7UUEwRFkscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZGl0aW9uYWwtZXhwZXJpZW5jZS9hZGRpdGlvbmFsLWV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlZGVudGlhbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuXHJcbiAgPi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjFlbTtcclxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF2b2lkO1xyXG4gIH1cclxuXHJcbiAgJi5hZGRpdGlvbmFsLWV4cGVyaWVuY2Uge1xyXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5vcmdhbml6YXRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDEuNmVtO1xyXG5cclxuICA+Lm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yZW07XHJcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgfVxyXG5cclxuICAmLmZpcnN0IHtcclxuICAgIHBhZ2UtYnJlYWstYmVmb3JlOiBhdm9pZDtcclxuICB9XHJcblxyXG4gICY6bm90KC5maXJzdCkge1xyXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gIH1cclxufVxyXG5cclxuLm9yZ2FuaXphdGlvbiB7XHJcblxyXG4gICYuZmlyc3Qge1xyXG4gICAgcGFnZS1icmVhay1iZWZvcmU6IGF2b2lkO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoLmZpcnN0KSB7XHJcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgfVxyXG5cclxuICBtYXJnaW4tdG9wOiAxLjZlbTtcclxuXHJcbiAgPi5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMmVtO1xyXG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICA+LnBvc2l0aW9uIHtcclxuICAgID4uZGV0YWlscyB7XHJcblxyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC4yZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxuICAgICAgPi50aXRsZSB7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogJywgJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgPi50aXRsZSxcclxuICAgICAgPi50aW1lZnJhbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgPi5wb3NpdGlvbi1zZWN0aW9uIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICAgIHBhZGRpbmctdG9wOiAuNWVtO1xyXG5cclxuICAgICAgPi50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5yZXNwb25zaWJpbGl0aWVzIHtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC41ZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAuNWVtO1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAuMjVlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/additional-experience/additional-experience.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/additional-experience/additional-experience.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AdditionalExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalExperienceComponent", function() { return AdditionalExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdditionalExperienceComponent = /** @class */ (function () {
    function AdditionalExperienceComponent() {
    }
    AdditionalExperienceComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdditionalExperienceComponent.prototype, "additionalExperience", void 0);
    AdditionalExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-additional-experience',
            template: __webpack_require__(/*! ./additional-experience.component.html */ "./src/app/components/additional-experience/additional-experience.component.html"),
            styles: [__webpack_require__(/*! ./additional-experience.component.scss */ "./src/app/components/additional-experience/additional-experience.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdditionalExperienceComponent);
    return AdditionalExperienceComponent;
}());



/***/ }),

/***/ "./src/app/components/certificate/certificate.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/certificate/certificate.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  certificate works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/certificate/certificate.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/certificate/certificate.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2VydGlmaWNhdGUvY2VydGlmaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/certificate/certificate.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/certificate/certificate.component.ts ***!
  \*****************************************************************/
/*! exports provided: CertificateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateComponent", function() { return CertificateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CertificateComponent = /** @class */ (function () {
    function CertificateComponent() {
    }
    CertificateComponent.prototype.ngOnInit = function () {
    };
    CertificateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-certificate',
            template: __webpack_require__(/*! ./certificate.component.html */ "./src/app/components/certificate/certificate.component.html"),
            styles: [__webpack_require__(/*! ./certificate.component.scss */ "./src/app/components/certificate/certificate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CertificateComponent);
    return CertificateComponent;
}());



/***/ }),

/***/ "./src/app/components/company/company.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/company/company.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"organization\"\n     [ngClass]=\"{'first': isFirst}\">\n  <div class=\"name\">\n    <span><a [href]=\"company.url\"\n         target=\"_blank\">{{company.name}}</a></span>\n    <span *ngIf=\"company.city\">, {{company.city}}</span>\n    <span *ngIf=\"company.state\">, {{company.state}}</span>\n  </div>\n  <app-position *ngFor=\"let position of company.positions\"\n                [position]=\"position\"></app-position>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/company/company.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/company/company.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".organization {\n  margin-top: 1.6em; }\n  .organization > .name {\n    font-size: 1.4rem;\n    padding-bottom: 0.2em;\n    font-variant: small-caps;\n    text-transform: capitalize;\n    text-align: center; }\n  .organization.first {\n    page-break-before: avoid; }\n  .organization:not(.first) {\n    page-break-inside: avoid; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L0M6XFxVc2Vyc1xcbWF0dGhcXHNvdXJjZVxccmVwb3NcXHJlc3VtZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29tcGFueVxcY29tcGFueS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBO0VBRG5CO0lBSUksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLGtCQUFrQixFQUFBO0VBUnRCO0lBYUksd0JBQXdCLEVBQUE7RUFiNUI7SUFpQkksd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmdhbml6YXRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDEuNmVtO1xyXG5cclxuICA+Lm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yZW07XHJcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgfVxyXG5cclxuICAmLmZpcnN0IHtcclxuICAgIHBhZ2UtYnJlYWstYmVmb3JlOiBhdm9pZDtcclxuICB9XHJcblxyXG4gICY6bm90KC5maXJzdCkge1xyXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/company/company.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/company/company.component.ts ***!
  \*********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CompanyComponent = /** @class */ (function () {
    function CompanyComponent() {
    }
    CompanyComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('company'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CompanyComponent.prototype, "company", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isFirst'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CompanyComponent.prototype, "isFirst", void 0);
    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/components/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.scss */ "./src/app/components/company/company.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/institution/institution.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/institution/institution.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"organization\">\n  <div class=\"name\">\n    <span><a [href]=\"institution.url\"\n         target=\"_blank\">{{institution.name}}</a><span *ngIf=\"institution.city\">, {{institution.city}}</span><span\n            *ngIf=\"institution.state\">, {{institution.state}}</span></span>\n  </div>\n\n\n  <div class=\"certificates\"\n       *ngFor=\"let certsByType of certificatesByType\">\n    <div class=\"title\">\n      {{certsByType.type}}\n    </div>\n    <div class=\"certificate\"\n         *ngFor=\"let certificate of certsByType.certificates\">\n      <div class=\"details\">\n        <span class=\"title\"\n              *ngIf=\"certificate.certName\">\n          <a [href]=\"certificate.certUrl\"\n             target=\"_blank\">{{certificate.certName}}</a>\n        </span>\n        <span *ngIf=\"certificate.school\">,\n          <span class=\"institution\">\n            <a [href]=\"certificate.schoolUrl\"\n               target=\"_blank\">{{certificate.school}}</a>\n          </span>\n        </span>\n        <span *ngIf=\"certificate.date\">, <span class=\"timeframe\">{{certificate.date}}</span>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/institution/institution.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/institution/institution.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".organization {\n  margin-top: 1.6em; }\n  .organization.first {\n    page-break-before: avoid; }\n  .organization:not(.first) {\n    page-break-inside: avoid; }\n  .organization .certificates {\n    padding-left: 1em;\n    padding-top: .5em; }\n  .organization .certificates > .title {\n      font-size: 1.1rem;\n      font-variant: small-caps; }\n  .organization .certificates .certificate {\n      margin-left: .5em;\n      margin-top: .5em;\n      padding-bottom: 0.2em; }\n  .organization .certificates .certificate > .details > .title {\n        font-style: italic; }\n  .organization > .name {\n    font-size: 1.4rem;\n    padding-bottom: 0.2em;\n    font-variant: small-caps;\n    text-transform: capitalize;\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnN0aXR1dGlvbi9DOlxcVXNlcnNcXG1hdHRoXFxzb3VyY2VcXHJlcG9zXFxyZXN1bWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGluc3RpdHV0aW9uXFxpbnN0aXR1dGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQWdDRSxpQkFBaUIsRUFBQTtFQWhDbkI7SUFHSSx3QkFBd0IsRUFBQTtFQUg1QjtJQU9JLHdCQUF3QixFQUFBO0VBUDVCO0lBZ0JJLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTtFQWpCckI7TUFZTSxpQkFBaUI7TUFDakIsd0JBQXdCLEVBQUE7RUFiOUI7TUFvQk0saUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixxQkFBcUIsRUFBQTtFQXRCM0I7UUEwQlUsa0JBQWtCLEVBQUE7RUExQjVCO0lBbUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdGl0dXRpb24vaW5zdGl0dXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JnYW5pemF0aW9uIHtcclxuXHJcbiAgJi5maXJzdCB7XHJcbiAgICBwYWdlLWJyZWFrLWJlZm9yZTogYXZvaWQ7XHJcbiAgfVxyXG5cclxuICAmOm5vdCguZmlyc3QpIHtcclxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcclxuICB9XHJcblxyXG4gIC5jZXJ0aWZpY2F0ZXMge1xyXG4gICAgPi50aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICBwYWRkaW5nLXRvcDogLjVlbTtcclxuXHJcbiAgICAuY2VydGlmaWNhdGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLjVlbTtcclxuICAgICAgbWFyZ2luLXRvcDogLjVlbTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDAuMmVtO1xyXG5cclxuICAgICAgPi5kZXRhaWxzIHtcclxuICAgICAgICA+LnRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1hcmdpbi10b3A6IDEuNmVtO1xyXG5cclxuICA+Lm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yZW07XHJcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/institution/institution.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/institution/institution.component.ts ***!
  \*****************************************************************/
/*! exports provided: InstitutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutionComponent", function() { return InstitutionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var InstitutionComponent = /** @class */ (function () {
    function InstitutionComponent() {
    }
    InstitutionComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(InstitutionComponent.prototype, "certificatesByType", {
        get: function () {
            var certsByType = lodash__WEBPACK_IMPORTED_MODULE_2__(this.institution.certificates).groupBy('type').map(function (certsInGroup) {
                return {
                    type: certsInGroup[0].type,
                    certificates: certsInGroup
                };
            }).value();
            return certsByType;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('institution'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InstitutionComponent.prototype, "institution", void 0);
    InstitutionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-institution',
            template: __webpack_require__(/*! ./institution.component.html */ "./src/app/components/institution/institution.component.html"),
            styles: [__webpack_require__(/*! ./institution.component.scss */ "./src/app/components/institution/institution.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InstitutionComponent);
    return InstitutionComponent;
}());



/***/ }),

/***/ "./src/app/components/position/position.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/position/position.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position\">\r\n  <div class=\"details\">\r\n    <span class=\"title\">{{position.name}}\r\n      <span *ngIf=\"position.team\"> | {{position.team}}</span>\r\n    </span>\r\n    <span class=\"timeframe\">\r\n      <span *ngIf=\"position.startYear\">\r\n        {{position.startYear}}\r\n        <span *ngIf=\"position.endYear && position.endYear != position.startYear\"> - {{position.endYear}}</span>\r\n        <span *ngIf=\"position.endYear == null\"> - Present</span>\r\n      </span>\r\n    </span>\r\n  </div>\r\n  <div class=\"responsibilities position-section\"\r\n       *ngIf=\"position.responsibilities\">\r\n    <span class=\"title\">Responsibilities</span>\r\n    <ul>\r\n      <li *ngFor=\"let responsibility of position.responsibilities\">\r\n        <app-responsibility [responsibility]=\"responsibility\"></app-responsibility>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"projects position-section\"\r\n       *ngIf=\"position.projects\">\r\n    <span class=\"title\">Projects</span>\r\n    <app-project *ngFor=\"let project of position.projects\"\r\n                 [project]=\"project\"></app-project>\r\n  </div>\r\n  <div class=\"references position-section\"\r\n       *ngIf=\"position.testimonials\">\r\n    <span class=\"title\">Testimonials</span>\r\n    <app-testimonial *ngFor=\"let testimonial of position.testimonials\"\r\n                     [testimonial]=\"testimonial\"></app-testimonial>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/position/position.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/position/position.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".position > .details {\n  padding-bottom: 0.2em;\n  text-align: center;\n  font-style: italic; }\n  .position > .details > .title::after {\n    content: ', '; }\n  .position > .details > .title,\n  .position > .details > .timeframe {\n    font-size: 1.1rem; }\n  .position > .position-section {\n  padding-left: 1em;\n  padding-top: .5em; }\n  .position > .position-section > .title {\n    font-size: 1.1rem;\n    font-variant: small-caps; }\n  .position > .position-section.responsibilities ul {\n    margin: 0;\n    padding: 0;\n    margin-left: .5em;\n    margin-top: .5em;\n    list-style: none; }\n  .position > .position-section.responsibilities ul li {\n      padding-bottom: .25em; }\n  .position > .position-section.projects .project {\n    page-break-inside: avoid;\n    margin-top: .5em;\n    margin-bottom: .5em;\n    padding-bottom: .5em;\n    margin-left: .5em; }\n  .position > .position-section.projects .project .overview {\n      padding-bottom: .5em; }\n  .position > .position-section.projects .project .overview .title {\n        font-style: italic;\n        font-size: 1em; }\n  .position > .position-section.projects .project .overview .description {\n        padding-left: .5em;\n        margin-left: .5em;\n        border-left: 1px solid black;\n        font-size: .8em;\n        padding-left: .5em; }\n  .position > .position-section.projects .project .overview .project-position {\n        font-style: italic;\n        margin-top: .5em;\n        display: block;\n        font-size: .8em;\n        padding-left: .25em;\n        border-left: .25em solid black; }\n  .position > .position-section.projects .project .overview .date {\n        font-style: italic;\n        margin-top: .5em;\n        display: block;\n        font-size: .8em;\n        padding-left: .25em; }\n  .position > .position-section.projects .project .details {\n      display: flex;\n      flex-direction: row;\n      padding-left: 1em; }\n  .position > .position-section.projects .project .details .technologies {\n        /* Safari 6.1+ */\n        flex-basis: 30%;\n        border-right: 1px solid black;\n        padding-right: 1em; }\n  .position > .position-section.projects .project .details .technologies ul {\n          padding: 0;\n          margin: 0;\n          display: flex;\n          flex-wrap: wrap;\n          justify-content: space-around; }\n  .position > .position-section.projects .project .details .technologies ul li {\n            padding-left: .25em;\n            padding-right: .25em;\n            margin: .05em;\n            list-style: none; }\n  .position > .position-section.projects .project .details .highlights {\n        /* Safari 6.1+ */\n        flex-basis: 70%; }\n  .position > .position-section.projects .project .details .highlights ul {\n          margin: 0;\n          padding: 0;\n          padding-left: 1em;\n          list-style: none; }\n  .position > .position-section.projects .project .details .highlights ul li {\n            padding-left: .5em;\n            padding-bottom: .25em; }\n  .position > .position-section.projects .project .details .highlights ul li.callout {\n              padding-left: .25em;\n              border-left: .25em solid black;\n              font-weight: 600; }\n  .position .references .reference {\n  padding-bottom: 1em; }\n  .position .references .reference:first-of-type {\n    margin-top: .5em; }\n  .position .references .reference .quote {\n    padding-left: 1em;\n    padding-bottom: .5em;\n    display: block; }\n  .position .references .reference .quoted {\n    display: block;\n    text-align: right; }\n  .position .references .reference.simple {\n    margin-left: .5em;\n    margin-top: .5em;\n    padding-bottom: .25em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3NpdGlvbi9DOlxcVXNlcnNcXG1hdHRoXFxzb3VyY2VcXHJlcG9zXFxyZXN1bWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvc2l0aW9uXFxwb3NpdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7RUFMdEI7SUFTUSxhQUNGLEVBQUE7RUFWTjs7SUFlTSxpQkFBaUIsRUFBQTtFQWZ2QjtFQW9CSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7RUFyQnJCO0lBd0JNLGlCQUFpQjtJQUNqQix3QkFBd0IsRUFBQTtFQXpCOUI7SUErQlEsU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBO0VBbkN4QjtNQXNDVSxxQkFBcUIsRUFBQTtFQXRDL0I7SUE2Q1Esd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlCQUFpQixFQUFBO0VBakR6QjtNQW9EVSxvQkFBb0IsRUFBQTtFQXBEOUI7UUF1RFksa0JBQWtCO1FBQ2xCLGNBQWMsRUFBQTtFQXhEMUI7UUE0RFksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQiw0QkFBNEI7UUFDNUIsZUFBZTtRQUNmLGtCQUFrQixFQUFBO0VBaEU5QjtRQW9FWSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLDhCQUE4QixFQUFBO0VBekUxQztRQTZFWSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsbUJBQW1CLEVBQUE7RUFqRi9CO01BdUZVLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsaUJBQWlCLEVBQUE7RUF6RjNCO1FBNkZZLGdCQUFBO1FBQ0EsZUFBZTtRQUNmLDZCQUE2QjtRQUM3QixrQkFBa0IsRUFBQTtFQWhHOUI7VUFtR2MsVUFBVTtVQUNWLFNBQVM7VUFDVCxhQUFhO1VBQ2IsZUFBZTtVQUNmLDZCQUE2QixFQUFBO0VBdkczQztZQTJHZ0IsbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixhQUFhO1lBSWIsZ0JBQWdCLEVBQUE7RUFqSGhDO1FBd0hZLGdCQUFBO1FBQ0EsZUFBZSxFQUFBO0VBekgzQjtVQTRIYyxTQUFTO1VBQ1QsVUFBVTtVQUNWLGlCQUFpQjtVQUNqQixnQkFBZ0IsRUFBQTtFQS9IOUI7WUFrSWdCLGtCQUFrQjtZQVFsQixxQkFBcUIsRUFBQTtFQTFJckM7Y0FxSWtCLG1CQUFtQjtjQUNuQiw4QkFBOEI7Y0FDOUIsZ0JBQWdCLEVBQUE7RUF2SWxDO0VBOEpNLG1CQUFtQixFQUFBO0VBOUp6QjtJQTJKUSxnQkFBZ0IsRUFBQTtFQTNKeEI7SUFpS1EsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixjQUFjLEVBQUE7RUFuS3RCO0lBdUtRLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTtFQXhLekI7SUE2S1EsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zaXRpb24vcG9zaXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zaXRpb24ge1xyXG4gID4uZGV0YWlscyB7XHJcblxyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxuICAgID4udGl0bGUge1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJywgJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgPi50aXRsZSxcclxuICAgID4udGltZWZyYW1lIHtcclxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA+LnBvc2l0aW9uLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICBwYWRkaW5nLXRvcDogLjVlbTtcclxuXHJcbiAgICA+LnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJi5yZXNwb25zaWJpbGl0aWVzIHtcclxuICAgICAgdWwge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAuNWVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IC4yNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYucHJvamVjdHMge1xyXG4gICAgICAucHJvamVjdCB7XHJcbiAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLjVlbTtcclxuXHJcbiAgICAgICAgLm92ZXJ2aWV3IHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xyXG5cclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAuNWVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLjVlbTtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IC41ZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnByb2plY3QtcG9zaXRpb24ge1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogLjI1ZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAuMjVlbSBzb2xpZCBibGFjaztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAuMjVlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXRhaWxzIHtcclxuXHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG5cclxuICAgICAgICAgIC50ZWNobm9sb2dpZXMge1xyXG4gICAgICAgICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDMwJTtcclxuICAgICAgICAgICAgLyogU2FmYXJpIDYuMSsgKi9cclxuICAgICAgICAgICAgZmxleC1iYXNpczogMzAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG5cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgICAgICAgICAgICBsaSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAuMjVlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IC4yNWVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAuMDVlbTtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGlnaGxpZ2h0cyB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZmxleC1iYXNpczogNzAlO1xyXG4gICAgICAgICAgICAvKiBTYWZhcmkgNi4xKyAqL1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiA3MCU7XHJcblxyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAuNWVtO1xyXG5cclxuICAgICAgICAgICAgICAgICYuY2FsbG91dCB7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogLjI1ZW07XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAuMjVlbSBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjI1ZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgLnJlZmVyZW5jZXMge1xyXG5cclxuICAgIC5yZWZlcmVuY2Uge1xyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcblxyXG4gICAgICAucXVvdGUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucXVvdGVkIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgICYuc2ltcGxlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLjVlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAuNWVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuMjVlbTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/position/position.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/position/position.component.ts ***!
  \***********************************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PositionComponent = /** @class */ (function () {
    function PositionComponent() {
    }
    PositionComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('position'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PositionComponent.prototype, "position", void 0);
    PositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-position',
            template: __webpack_require__(/*! ./position.component.html */ "./src/app/components/position/position.component.html"),
            styles: [__webpack_require__(/*! ./position.component.scss */ "./src/app/components/position/position.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PositionComponent);
    return PositionComponent;
}());



/***/ }),

/***/ "./src/app/components/professional-resume/professional-resume.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/professional-resume/professional-resume.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #loading>\r\n  <div class=\"loading\">\r\n    Loading...\r\n  </div>\r\n</ng-template>\r\n<div *ngIf=\"(resume$ | async) as resume else loading\">\r\n\r\n  <div class=\"content-header\">\r\n    <div class=\"name\">\r\n      {{resume.candidate.name}}\r\n    </div>\r\n    <div class=\"contact\">\r\n      <div class=\"contact-entry\"\r\n           *ngIf=\"resume.candidate.location\">\r\n        <a [href]=\"resume.candidate.locationUrl\"\r\n           target=\"_blank\">{{resume.candidate.location}}</a>\r\n      </div>\r\n      <div class=\"contact-entry\"\r\n           *ngIf=\"resume.candidate.phoneNumber\">{{resume.candidate.phoneNumber}}</div>\r\n      <div class=\"contact-entry\"\r\n           *ngIf=\"resume.candidate.emailAddress\">\r\n        <a [href]=\"'mailto:' + resume.candidate.emailAddress\">{{resume.candidate.emailAddress}}</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"content-body\">\r\n    <div class=\"lead\">\r\n      <div class=\"statement\"\r\n           *ngFor=\"let statement of resume.leadStatements\">\r\n        {{statement}}\r\n      </div>\r\n    </div>\r\n    <div class=\"credentials\">\r\n      <div class=\"credential\"\r\n           *ngIf=\"resume.companies\">\r\n        <div class=\"title\">\r\n          Professional Experience\r\n        </div>\r\n\r\n        <app-company *ngFor=\"let company of resume.companies; index as i\"\r\n                     [company]=\"company\"\r\n                     [isFirst]=\"i==0\"></app-company>\r\n      </div>\r\n\r\n      <div class=\"credential education\"\r\n           *ngIf=\"resume.institutions\">\r\n        <div class=\"title\">\r\n          Education\r\n        </div>\r\n        <app-institution *ngFor=\"let institution of resume.institutions\"\r\n                         [institution]=\"institution\"></app-institution>\r\n      </div>\r\n\r\n      <app-additional-experience *ngIf=\"resume.additionalExperience\"\r\n                                 [additionalExperience]=\"resume.additionalExperience\"></app-additional-experience>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/professional-resume/professional-resume.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/professional-resume/professional-resume.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-header {\n  padding-bottom: 1rem;\n  margin-bottom: 2rem;\n  border-bottom: solid 1px black; }\n  .content-header .name {\n    font-size: 4rem;\n    display: block;\n    text-align: center;\n    text-transform: uppercase; }\n  .content-header .contact {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-around; }\n  .content-header .contact .contact-entry {\n      font-size: 1rem; }\n  .content-body .lead {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n  margin-bottom: 2rem;\n  font-size: 1.1rem;\n  page-break-after: avoid; }\n  .content-body .lead .statement {\n    margin-bottom: 0.8em;\n    text-align: center;\n    padding: 0rem; }\n  .content-body .credentials {\n  margin-top: 1em; }\n  .content-body .credentials .credential {\n    margin-bottom: 3rem; }\n  .content-body .credentials .credential > .title {\n      font-size: 1.8em;\n      text-align: center;\n      text-transform: capitalize;\n      font-variant: small-caps;\n      letter-spacing: .1em;\n      page-break-after: avoid; }\n  .content-body .credentials .credential.education {\n      page-break-inside: avoid; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzaW9uYWwtcmVzdW1lL0M6XFxVc2Vyc1xcbWF0dGhcXHNvdXJjZVxccmVwb3NcXHJlc3VtZS9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZmVzc2lvbmFsLXJlc3VtZVxccHJvZmVzc2lvbmFsLXJlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsOEJBQThCLEVBQUE7RUFIaEM7SUFNSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUIsRUFBQTtFQVQ3QjtJQWFJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDZCQUE2QixFQUFBO0VBaEJqQztNQW1CTSxlQUFlLEVBQUE7RUFLckI7RUFFSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix1QkFBdUIsRUFBQTtFQVIzQjtJQVdNLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsYUFBYSxFQUFBO0VBYm5CO0VBbUJJLGVBQWUsRUFBQTtFQW5CbkI7SUFzQk0sbUJBQW1CLEVBQUE7RUF0QnpCO01BeUJRLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsMEJBQTBCO01BQzFCLHdCQUF3QjtNQUN4QixvQkFBb0I7TUFDcEIsdUJBQXVCLEVBQUE7RUE5Qi9CO01BbUNRLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9mZXNzaW9uYWwtcmVzdW1lL3Byb2Zlc3Npb25hbC1yZXN1bWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1oZWFkZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xyXG5cclxuICAubmFtZSB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgLmNvbnRhY3QtZW50cnkge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudC1ib2R5IHtcclxuICAubGVhZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcclxuXHJcbiAgICAuc3RhdGVtZW50IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC44ZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMHJlbTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAuY3JlZGVudGlhbHMge1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG5cclxuICAgIC5jcmVkZW50aWFsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuXHJcbiAgICAgID4udGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjFlbTtcclxuICAgICAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgICYuZWR1Y2F0aW9uIHtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/professional-resume/professional-resume.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/professional-resume/professional-resume.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProfessionalResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalResumeComponent", function() { return ProfessionalResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_static_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/static-store.service */ "./src/app/services/static-store.service.ts");



var ProfessionalResumeComponent = /** @class */ (function () {
    function ProfessionalResumeComponent(staticStoreService) {
        this.staticStoreService = staticStoreService;
    }
    ProfessionalResumeComponent.prototype.ngOnInit = function () {
        this.resume$ = this.staticStoreService.getResume();
    };
    ProfessionalResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-professional-resume',
            template: __webpack_require__(/*! ./professional-resume.component.html */ "./src/app/components/professional-resume/professional-resume.component.html"),
            styles: [__webpack_require__(/*! ./professional-resume.component.scss */ "./src/app/components/professional-resume/professional-resume.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_static_store_service__WEBPACK_IMPORTED_MODULE_2__["StaticStoreService"]])
    ], ProfessionalResumeComponent);
    return ProfessionalResumeComponent;
}());



/***/ }),

/***/ "./src/app/components/project/project.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/project/project.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project\"\n     *ngIf=\"!project.isDisabled\">\n  <div class=\"overview\">\n    <span class=\"title\">{{project.title}}<span *ngIf=\"project.subTitle\"> <small>{{project.subTitle}}</small></span>\n    </span>\n    <span class=\"description\">{{project.description}}</span>\n    <span class=\"project-position\"\n          *ngIf=\"project.distinguishedAttributes\">\n      {{project.distinguishedAttributes.join(', ')}}\n    </span>\n  </div>\n  <div class=\"details\">\n    <div class=\"technologies\"\n         *ngIf=\"technologies$ | async as technologies\">\n      <ul class=\"\">\n        <li *ngFor=\"let technology of technologies\">\n          <a *ngIf=\"technology.url else noUrl\"\n             [href]=\"technology.url\"\n             target=\"_blank\">{{technology.name}}</a>\n          <ng-template #noUrl>{{technology.name}}</ng-template>\n\n        </li>\n      </ul>\n    </div>\n    <div class=\"highlights\"\n         *ngIf=\"project.accomplishments\">\n      <ul>\n        <app-accomplishment *ngFor=\"let accomplishment of project.accomplishments\"\n                            [accomplishment]=\"accomplishment\"></app-accomplishment>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/project/project.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/project/project.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project {\n  page-break-inside: avoid;\n  margin-top: .5em;\n  margin-bottom: .5em;\n  padding-bottom: .5em;\n  margin-left: .5em; }\n  .project .overview {\n    padding-bottom: .5em; }\n  .project .overview .title {\n      font-style: italic;\n      font-size: 1em; }\n  .project .overview .description {\n      padding-left: .5em;\n      margin-left: .5em;\n      border-left: 1px solid black;\n      font-size: .8em;\n      padding-left: .5em; }\n  .project .overview .project-position {\n      font-style: italic;\n      margin-top: .5em;\n      display: block;\n      font-size: .8em;\n      padding-left: .25em;\n      border-left: .25em solid black; }\n  .project .overview .date {\n      font-style: italic;\n      margin-top: .5em;\n      display: block;\n      font-size: .8em;\n      padding-left: .25em; }\n  .project .details {\n    display: flex;\n    flex-direction: row;\n    padding-left: 1em; }\n  .project .details .technologies {\n      /* Safari 6.1+ */\n      flex-basis: 30%;\n      border-right: 1px solid black;\n      padding-right: 1em; }\n  .project .details .technologies ul {\n        padding: 0;\n        margin: 0;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: space-around; }\n  .project .details .technologies ul li {\n          padding-left: .25em;\n          padding-right: .25em;\n          margin: .05em;\n          list-style: none; }\n  .project .details .highlights {\n      /* Safari 6.1+ */\n      flex-basis: 70%; }\n  .project .details .highlights ul {\n        margin: 0;\n        padding: 0;\n        padding-left: 1em;\n        list-style: none; }\n  .project .details .highlights ul li {\n          padding-left: .5em;\n          padding-bottom: .25em; }\n  .project .details .highlights ul li.callout {\n            padding-left: .25em;\n            border-left: .25em solid black;\n            font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L0M6XFxVc2Vyc1xcbWF0dGhcXHNvdXJjZVxccmVwb3NcXHJlc3VtZS9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvamVjdFxccHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQTtFQUxuQjtJQVFJLG9CQUFvQixFQUFBO0VBUnhCO01BV00sa0JBQWtCO01BQ2xCLGNBQWMsRUFBQTtFQVpwQjtNQWdCTSxrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLDRCQUE0QjtNQUM1QixlQUFlO01BQ2Ysa0JBQWtCLEVBQUE7RUFwQnhCO01Bd0JNLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsOEJBQThCLEVBQUE7RUE3QnBDO01BaUNNLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixtQkFBbUIsRUFBQTtFQXJDekI7SUEyQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtFQTdDckI7TUFpRE0sZ0JBQUE7TUFDQSxlQUFlO01BQ2YsNkJBQTZCO01BQzdCLGtCQUFrQixFQUFBO0VBcER4QjtRQXVEUSxVQUFVO1FBQ1YsU0FBUztRQUNULGFBQWE7UUFDYixlQUFlO1FBQ2YsNkJBQTZCLEVBQUE7RUEzRHJDO1VBK0RVLG1CQUFtQjtVQUNuQixvQkFBb0I7VUFDcEIsYUFBYTtVQUliLGdCQUFnQixFQUFBO0VBckUxQjtNQTRFTSxnQkFBQTtNQUNBLGVBQWUsRUFBQTtFQTdFckI7UUFnRlEsU0FBUztRQUNULFVBQVU7UUFDVixpQkFBaUI7UUFDakIsZ0JBQWdCLEVBQUE7RUFuRnhCO1VBc0ZVLGtCQUFrQjtVQVFsQixxQkFBcUIsRUFBQTtFQTlGL0I7WUF5RlksbUJBQW1CO1lBQ25CLDhCQUE4QjtZQUM5QixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Qge1xyXG4gIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcclxuICBtYXJnaW4tdG9wOiAuNWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IC41ZW07XHJcbiAgcGFkZGluZy1ib3R0b206IC41ZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC41ZW07XHJcblxyXG4gIC5vdmVydmlldyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogLjVlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC41ZW07XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0LXBvc2l0aW9uIHtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBtYXJnaW4tdG9wOiAuNWVtO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IC4yNWVtO1xyXG4gICAgICBib3JkZXItbGVmdDogLjI1ZW0gc29saWQgYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGUge1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogLjI1ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGV0YWlscyB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuXHJcbiAgICAudGVjaG5vbG9naWVzIHtcclxuICAgICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAzMCU7XHJcbiAgICAgIC8qIFNhZmFyaSA2LjErICovXHJcbiAgICAgIGZsZXgtYmFzaXM6IDMwJTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAgICAgbGkge1xyXG5cclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogLjI1ZW07XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuMjVlbTtcclxuICAgICAgICAgIG1hcmdpbjogLjA1ZW07XHJcbiAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhpZ2hsaWdodHMge1xyXG4gICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDcwJTtcclxuICAgICAgLyogU2FmYXJpIDYuMSsgKi9cclxuICAgICAgZmxleC1iYXNpczogNzAlO1xyXG5cclxuICAgICAgdWwge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogLjVlbTtcclxuXHJcbiAgICAgICAgICAmLmNhbGxvdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IC4yNWVtO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogLjI1ZW0gc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IC4yNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/project/project.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/project/project.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_static_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/static-store.service */ "./src/app/services/static-store.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(staticStoreService) {
        this.staticStoreService = staticStoreService;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.technologies$ = this.staticStoreService.getTermsDictionary()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (termsDictionary) {
            return _this.project.technologyNames.map(function (term) {
                var tech = termsDictionary[term.toLowerCase()];
                if (!tech) {
                    tech = {
                        name: term
                    };
                }
                return tech;
            });
        }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectComponent.prototype, "project", void 0);
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/components/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/components/project/project.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_static_store_service__WEBPACK_IMPORTED_MODULE_2__["StaticStoreService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/components/responsibility/responsibility.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/responsibility/responsibility.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  {{responsibility.description}}\n  <ul *ngFor=\"let childResponsibility of responsibility.children\">\n    <app-responsibility [responsibility]=\"childResponsibility\"></app-responsibility>\n  </ul>\n"

/***/ }),

/***/ "./src/app/components/responsibility/responsibility.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/responsibility/responsibility.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzcG9uc2liaWxpdHkvcmVzcG9uc2liaWxpdHkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/responsibility/responsibility.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/responsibility/responsibility.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResponsibilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsibilityComponent", function() { return ResponsibilityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResponsibilityComponent = /** @class */ (function () {
    function ResponsibilityComponent() {
    }
    ResponsibilityComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('responsibility'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResponsibilityComponent.prototype, "responsibility", void 0);
    ResponsibilityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-responsibility',
            template: __webpack_require__(/*! ./responsibility.component.html */ "./src/app/components/responsibility/responsibility.component.html"),
            styles: [__webpack_require__(/*! ./responsibility.component.scss */ "./src/app/components/responsibility/responsibility.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResponsibilityComponent);
    return ResponsibilityComponent;
}());



/***/ }),

/***/ "./src/app/components/stack-exchange-accomplishment/stack-exchange-accomplishment.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/stack-exchange-accomplishment/stack-exchange-accomplishment.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"organization\"\n     *ngIf=\"stackExchangeUser$ | async as stackExchangeUser\">\n  <div class=\"name\">\n\n  </div>\n\n  <div class=\"certificates\"\n       *ngFor=\"let item of stackExchangeUser.items\">\n    <div class=\"title\">\n      <span><a href=\"{{item.link}}\"\n           target=\"_blank\">StackOverflow</a></span>\n    </div>\n    <div class=\"certificate\">\n      <div class=\"details\">\n        <span class=\"username\"><a href=\"{{item.link}}\"\n             target=\"_blank\">{{item.display_name}}</a></span>\n        <span class=\"section reputation\">\n          <span class=\"title\">Reputation</span> <span class=\"count\">{{item.reputation}}</span>\n        </span>\n        <span class=\"section badges\">\n          <span class=\"title\">Badges</span>\n          <span class=\"badge gold\"\n                *ngIf=\"item.badge_counts.gold > 0\"><span class=\"medal\">●</span><span class=\"medal-name\">Gold: </span>\n            <span class=\"count\">{{item.badge_counts.gold}}</span></span>\n          <span class=\"badge silver\"\n                *ngIf=\"item.badge_counts.silver > 0\"><span class=\"medal\">●</span><span class=\"medal-name\">Silver:\n            </span>\n            <span class=\"count\">{{item.badge_counts.silver}}</span></span>\n\n          <span class=\"badge bronze\"\n                *ngIf=\"item.badge_counts.bronze > 0\"><span class=\"medal\">●</span><span class=\"medal-name\">Bronze:\n            </span>\n            <span class=\"count\">{{item.badge_counts.bronze}}</span></span>\n        </span>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/stack-exchange-accomplishment/stack-exchange-accomplishment.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/stack-exchange-accomplishment/stack-exchange-accomplishment.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen {\n  .medal-name {\n    display: none; } }\n\n@media print {\n  .medal {\n    display: none; } }\n\n.section {\n  display: block;\n  margin-left: 1em;\n  margin-bottom: 0.2em; }\n\n.section .title {\n    display: inline-block;\n    width: 5em;\n    border-right: 1px solid black;\n    font-style: italic;\n    font-size: 1em;\n    margin-right: .5em;\n    border-right: 1px solid black;\n    padding-right: .5em; }\n\n.section .count {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 0.8em; }\n\n.username {\n  display: none;\n  font-style: italic; }\n\n.badges .badge {\n  margin: 0 0.5em 0 0;\n  font-family: Arial, Helvetica, sans-serif; }\n\n.badges .badge.bronze {\n    border-color: #644125; }\n\n.badges .badge.bronze .medal {\n      color: #c38b5f; }\n\n.badges .badge.silver {\n    border-color: #9da4aa; }\n\n.badges .badge.silver .medal {\n      color: #9da4aa; }\n\n.badges .badge.gold {\n    border-color: #675200; }\n\n.badges .badge.gold .medal {\n      color: #675200; }\n\n.organization {\n  margin-top: 1.6em; }\n\n.organization.first {\n    page-break-before: avoid; }\n\n.organization:not(.first) {\n    page-break-inside: avoid; }\n\n.organization .certificates {\n    padding-left: 1em;\n    padding-top: .5em; }\n\n.organization .certificates > .title {\n      font-size: 1.1rem;\n      font-variant: small-caps; }\n\n.organization .certificates .certificate {\n      margin-left: .5em;\n      margin-top: .5em;\n      padding-bottom: 0.2em; }\n\n.organization .certificates .certificate > .details > .title {\n        font-style: italic; }\n\n.organization > .name {\n    font-size: 1.4rem;\n    padding-bottom: 0.2em;\n    font-variant: small-caps;\n    text-transform: capitalize;\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGFjay1leGNoYW5nZS1hY2NvbXBsaXNobWVudC9DOlxcVXNlcnNcXG1hdHRoXFxzb3VyY2VcXHJlcG9zXFxyZXN1bWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHN0YWNrLWV4Y2hhbmdlLWFjY29tcGxpc2htZW50XFxzdGFjay1leGNoYW5nZS1hY2NvbXBsaXNobWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7O0FBR0g7RUFDRTtJQUNFLGFBQWEsRUFBQSxFQUNkOztBQUdIO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixvQkFBb0IsRUFBQTs7QUFIdEI7SUFNSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsY0FBYztJQUVkLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsbUJBQW1CLEVBQUE7O0FBZHZCO0lBbUJJLHlDQUF5QztJQUN6QyxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBS3BCO0VBS0ksbUJBQW1CO0VBR25CLHlDQUF5QyxFQUFBOztBQVI3QztJQWVNLHFCQUFrQyxFQUFBOztBQWZ4QztNQVlRLGNBM0RRLEVBQUE7O0FBK0NoQjtJQXdCTSxxQkFBa0MsRUFBQTs7QUF4QnhDO01BcUJRLGNBQTJCLEVBQUE7O0FBckJuQztJQWlDTSxxQkFBZ0MsRUFBQTs7QUFqQ3RDO01BOEJRLGNBQXlCLEVBQUE7O0FBU2pDO0VBZ0NFLGlCQUFpQixFQUFBOztBQWhDbkI7SUFHSSx3QkFBd0IsRUFBQTs7QUFINUI7SUFPSSx3QkFBd0IsRUFBQTs7QUFQNUI7SUFnQkksaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBOztBQWpCckI7TUFZTSxpQkFBaUI7TUFDakIsd0JBQXdCLEVBQUE7O0FBYjlCO01Bb0JNLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIscUJBQXFCLEVBQUE7O0FBdEIzQjtRQTBCVSxrQkFBa0IsRUFBQTs7QUExQjVCO0lBbUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhY2stZXhjaGFuZ2UtYWNjb21wbGlzaG1lbnQvc3RhY2stZXhjaGFuZ2UtYWNjb21wbGlzaG1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnJvbnplOiAjYzM4YjVmO1xyXG4kc2lsdmVyOiAjZWZmMGYxO1xyXG4kZ29sZDogI0ZGQ0MwMTtcclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIC5tZWRhbC1uYW1lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5tZWRhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNWVtO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuXHJcbiAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmctcmlnaHQ6IC41ZW07XHJcbiAgfVxyXG5cclxuICAuY291bnQge1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICB9XHJcbn1cclxuXHJcbi51c2VybmFtZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5yZXB1dGF0aW9uIHt9XHJcblxyXG4uYmFkZ2VzIHtcclxuXHJcbiAgLmJhZGdlIHtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG4gICAgLy8gcGFkZGluZzogMCAwLjVlbTtcclxuICAgIG1hcmdpbjogMCAwLjVlbSAwIDA7XHJcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZDtcclxuXHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAmLmJyb256ZSB7XHJcbiAgICAgIC5tZWRhbCB7XHJcbiAgICAgICAgY29sb3I6ICRicm9uemVcclxuICAgICAgfVxyXG5cclxuICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJyb256ZSwgMzAlKTtcclxuICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRicm9uemUsIDIwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zaWx2ZXIge1xyXG4gICAgICAubWVkYWwge1xyXG4gICAgICAgIGNvbG9yOiBkYXJrZW4oJHNpbHZlciwgMzAlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNpbHZlciwgMzAlKTtcclxuICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRzaWx2ZXIsIDIwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5nb2xkIHtcclxuICAgICAgLm1lZGFsIHtcclxuICAgICAgICBjb2xvcjogZGFya2VuKCRnb2xkLCAzMCUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkZ29sZCwgMzAlKTtcclxuICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRnb2xkLCAyMCUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm9yZ2FuaXphdGlvbiB7XHJcblxyXG4gICYuZmlyc3Qge1xyXG4gICAgcGFnZS1icmVhay1iZWZvcmU6IGF2b2lkO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoLmZpcnN0KSB7XHJcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgfVxyXG5cclxuICAuY2VydGlmaWNhdGVzIHtcclxuICAgID4udGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgcGFkZGluZy10b3A6IC41ZW07XHJcblxyXG4gICAgLmNlcnRpZmljYXRlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC41ZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjJlbTtcclxuXHJcbiAgICAgID4uZGV0YWlscyB7XHJcbiAgICAgICAgPi50aXRsZSB7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXJnaW4tdG9wOiAxLjZlbTtcclxuXHJcbiAgPi5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMmVtO1xyXG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/stack-exchange-accomplishment/stack-exchange-accomplishment.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/stack-exchange-accomplishment/stack-exchange-accomplishment.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: StackExchangeAccomplishmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackExchangeAccomplishmentComponent", function() { return StackExchangeAccomplishmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_accomplishments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/accomplishments.service */ "./src/app/services/accomplishments.service.ts");
/* harmony import */ var src_app_models_stack_exchange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/stack-exchange */ "./src/app/models/stack-exchange.ts");




var StackExchangeAccomplishmentComponent = /** @class */ (function () {
    function StackExchangeAccomplishmentComponent(accomplishmentsService) {
        this.accomplishmentsService = accomplishmentsService;
    }
    StackExchangeAccomplishmentComponent.prototype.ngOnInit = function () {
        this.stackExchangeUser$ =
            this.accomplishmentsService.GetStackExchangeUser(src_app_models_stack_exchange__WEBPACK_IMPORTED_MODULE_3__["StackExchange"].USERNAME, src_app_models_stack_exchange__WEBPACK_IMPORTED_MODULE_3__["StackExchange"].SITE);
    };
    StackExchangeAccomplishmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stack-exchange-accomplishment',
            template: __webpack_require__(/*! ./stack-exchange-accomplishment.component.html */ "./src/app/components/stack-exchange-accomplishment/stack-exchange-accomplishment.component.html"),
            styles: [__webpack_require__(/*! ./stack-exchange-accomplishment.component.scss */ "./src/app/components/stack-exchange-accomplishment/stack-exchange-accomplishment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_accomplishments_service__WEBPACK_IMPORTED_MODULE_2__["AccomplishmentsService"]])
    ], StackExchangeAccomplishmentComponent);
    return StackExchangeAccomplishmentComponent;
}());



/***/ }),

/***/ "./src/app/components/technology/technology.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/technology/technology.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  technology works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/technology/technology.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/technology/technology.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVjaG5vbG9neS90ZWNobm9sb2d5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/technology/technology.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/technology/technology.component.ts ***!
  \***************************************************************/
/*! exports provided: TechnologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyComponent", function() { return TechnologyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TechnologyComponent = /** @class */ (function () {
    function TechnologyComponent() {
    }
    TechnologyComponent.prototype.ngOnInit = function () {
    };
    TechnologyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-technology',
            template: __webpack_require__(/*! ./technology.component.html */ "./src/app/components/technology/technology.component.html"),
            styles: [__webpack_require__(/*! ./technology.component.scss */ "./src/app/components/technology/technology.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TechnologyComponent);
    return TechnologyComponent;
}());



/***/ }),

/***/ "./src/app/components/term/term.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/term/term.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  term works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/term/term.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/term/term.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVybS90ZXJtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/term/term.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/term/term.component.ts ***!
  \***************************************************/
/*! exports provided: TermComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermComponent", function() { return TermComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TermComponent = /** @class */ (function () {
    function TermComponent() {
    }
    TermComponent.prototype.ngOnInit = function () {
    };
    TermComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-term',
            template: __webpack_require__(/*! ./term.component.html */ "./src/app/components/term/term.component.html"),
            styles: [__webpack_require__(/*! ./term.component.scss */ "./src/app/components/term/term.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TermComponent);
    return TermComponent;
}());



/***/ }),

/***/ "./src/app/components/testimonial/testimonial.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/testimonial/testimonial.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reference\">\n  <div class=\"quote\">\n    \"{{testimonial.body}}\"\n  </div>\n  <div class=\"quoted\">\n    —\n    <a [href]=\"testimonial.authorUrl\"\n       target=\"_blank\">{{testimonial.author}}</a>\n    <span *ngIf=\"testimonial.position\"> | {{testimonial.position}}</span>\n    <span *ngIf=\"testimonial.team\">, {{testimonial.team}}</span>\n    <span *ngIf=\"testimonial.company\">, {{testimonial.company}}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/testimonial/testimonial.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/testimonial/testimonial.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reference {\n  padding-bottom: 1em; }\n  .reference:first-of-type {\n    margin-top: .5em; }\n  .reference .quote {\n    padding-left: 1em;\n    padding-bottom: .5em;\n    display: block; }\n  .reference .quoted {\n    display: block;\n    text-align: right; }\n  .reference.simple {\n    margin-left: .5em;\n    margin-top: .5em;\n    padding-bottom: .25em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXN0aW1vbmlhbC9DOlxcVXNlcnNcXG1hdHRoXFxzb3VyY2VcXHJlcG9zXFxyZXN1bWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRlc3RpbW9uaWFsXFx0ZXN0aW1vbmlhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtFLG1CQUFtQixFQUFBO0VBTHJCO0lBRUksZ0JBQWdCLEVBQUE7RUFGcEI7SUFRSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGNBQWMsRUFBQTtFQVZsQjtJQWNJLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTtFQWZyQjtJQW9CSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZXN0aW1vbmlhbC90ZXN0aW1vbmlhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWZlcmVuY2Uge1xyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAuNWVtO1xyXG4gIH1cclxuXHJcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuXHJcbiAgLnF1b3RlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC41ZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5xdW90ZWQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcblxyXG5cclxuICAmLnNpbXBsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLjVlbTtcclxuICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjI1ZW07XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/testimonial/testimonial.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/testimonial/testimonial.component.ts ***!
  \*****************************************************************/
/*! exports provided: TestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function() { return TestimonialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestimonialComponent = /** @class */ (function () {
    function TestimonialComponent() {
    }
    TestimonialComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TestimonialComponent.prototype, "testimonial", void 0);
    TestimonialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testimonial',
            template: __webpack_require__(/*! ./testimonial.component.html */ "./src/app/components/testimonial/testimonial.component.html"),
            styles: [__webpack_require__(/*! ./testimonial.component.scss */ "./src/app/components/testimonial/testimonial.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestimonialComponent);
    return TestimonialComponent;
}());



/***/ }),

/***/ "./src/app/models/stack-exchange.ts":
/*!******************************************!*\
  !*** ./src/app/models/stack-exchange.ts ***!
  \******************************************/
/*! exports provided: StackExchange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackExchange", function() { return StackExchange; });
var StackExchange;
(function (StackExchange) {
    StackExchange.USERNAME = 'mattevansdev';
    StackExchange.SITE = 'stackoverflow';
})(StackExchange || (StackExchange = {}));


/***/ }),

/***/ "./src/app/services/accomplishments.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/accomplishments.service.ts ***!
  \*****************************************************/
/*! exports provided: AccomplishmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccomplishmentsService", function() { return AccomplishmentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AccomplishmentsService = /** @class */ (function () {
    function AccomplishmentsService(httpClient) {
        this.httpClient = httpClient;
    }
    AccomplishmentsService.prototype.GetStackExchangeUser = function (name, site) {
        var url = "https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&inname=" + name + "&site=" + site;
        return this.httpClient.get(url)
            .pipe();
    };
    AccomplishmentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AccomplishmentsService);
    return AccomplishmentsService;
}());



/***/ }),

/***/ "./src/app/services/static-store.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/static-store.service.ts ***!
  \**************************************************/
/*! exports provided: StaticStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticStoreService", function() { return StaticStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var StaticStoreService = /** @class */ (function () {
    function StaticStoreService(httpClient) {
        this.httpClient = httpClient;
    }
    StaticStoreService.prototype.getResume = function () {
        if (null == this.resume$) {
            this.resume$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
            this.httpClient.get('assets/resume.json')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (resume) { return console.log(resume); }))
                .subscribe(this.resume$);
        }
        return this.resume$;
    };
    StaticStoreService.prototype.getTermsDictionary = function () {
        if (null == this.termsDictionary$) {
            this.termsDictionary$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
            this.httpClient.get('assets/terms.json')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (terms) {
                var termsDictionary = {};
                terms.forEach(function (term) {
                    termsDictionary[term.name.toLowerCase()] = term;
                });
                return termsDictionary;
            }))
                .subscribe(this.termsDictionary$);
        }
        return this.termsDictionary$;
    };
    StaticStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StaticStoreService);
    return StaticStoreService;
}());



/***/ }),

/***/ "./src/app/services/term-link-generation.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/term-link-generation.service.ts ***!
  \**********************************************************/
/*! exports provided: TermLinkGenerationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermLinkGenerationService", function() { return TermLinkGenerationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _static_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static-store.service */ "./src/app/services/static-store.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TermLinkGenerationService = /** @class */ (function () {
    function TermLinkGenerationService(staticStoreService) {
        this.staticStoreService = staticStoreService;
        this.sortedTerms = this.staticStoreService.getTermsDictionary()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (termDictionary) {
            return Object.getOwnPropertyNames(termDictionary)
                .map(function (name) { return termDictionary[name].name.toLowerCase(); })
                .sort()
                .map(function (termName) { return termDictionary[termName]; });
        }));
    }
    TermLinkGenerationService.prototype.InjectLinksForTerms = function (text, anchorTarget) {
        var _this = this;
        return this.sortedTerms
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (sortedTerms) {
            var words = text.split(' ');
            var matchingTerms = [];
            var _loop_1 = function (wordIdx) {
                var word = words[wordIdx].toLowerCase();
                var termsThatStartWithWord = _this.getTermsStartingWith(word, sortedTerms)
                    .map(function (termStartingWithWord) {
                    return {
                        wordsInTerm: termStartingWithWord.name.toLowerCase().split(' '),
                        term: termStartingWithWord
                    };
                })
                    .sort(function (a, b) { return b.term.name.length - a.term.name.length; });
                var matchingTerm = termsThatStartWithWord
                    .filter(function (termObj) { return termObj.wordsInTerm.length <= words.slice(wordIdx).length; })
                    .find(function (termObj) { return termObj.wordsInTerm.every(function (wordInTerm, idx) { return words[wordIdx + idx].toLowerCase() === wordInTerm; }); });
                if (matchingTerm) {
                    matchingTerms.push({
                        term: matchingTerm.term,
                        startIdx: wordIdx,
                        endIdx: wordIdx + matchingTerm.wordsInTerm.length
                    });
                    wordIdx += matchingTerm.wordsInTerm.length;
                }
                out_wordIdx_1 = wordIdx;
            };
            var out_wordIdx_1;
            for (var wordIdx = 0; wordIdx < words.length; wordIdx++) {
                _loop_1(wordIdx);
                wordIdx = out_wordIdx_1;
            }
            matchingTerms
                .sort(function (a, b) { return b.startIdx - a.startIdx; })
                .forEach(function (matchingTerm) {
                var extracted = words.splice(matchingTerm.startIdx, matchingTerm.endIdx - matchingTerm.startIdx);
                words.splice.apply(words, [matchingTerm.startIdx, 0].concat(["<a href=\"" + matchingTerm.term.url + "\" target=\"" + (anchorTarget || '_blank') + "\">" + extracted.join(' ') + "</a>"]));
            });
            var result = words.join(' ');
            return result;
        }));
    };
    TermLinkGenerationService.prototype.getTermsStartingWith = function (text, termList, idx) {
        if (termList.length === 0
            || (termList.length === 1 && !termList[0].name.toLowerCase().startsWith(text))) {
            return [];
        }
        idx = idx || Math.ceil((termList.length - 1) / 2);
        if (termList[idx].name.toLowerCase().startsWith(text)) {
            // check backwards
            var startingOffset = 0;
            while (idx - (startingOffset + 1) > 0 && termList[idx - (startingOffset + 1)].name.toLowerCase().startsWith(text)) {
                startingOffset++;
            }
            // check forwards
            var endingOffset = 0;
            while ((endingOffset + 1) + idx < termList.length && termList[idx + (endingOffset + 1)].name.toLowerCase().startsWith(text)) {
                endingOffset++;
            }
            return termList.slice(idx - startingOffset, idx + endingOffset + 1);
        }
        else {
            if (text > termList[idx].name.toLowerCase()) {
                return this.getTermsStartingWith(text, termList.slice(idx));
            }
            else {
                return this.getTermsStartingWith(text, termList.slice(0, idx));
            }
        }
    };
    TermLinkGenerationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_static_store_service__WEBPACK_IMPORTED_MODULE_2__["StaticStoreService"]])
    ], TermLinkGenerationService);
    return TermLinkGenerationService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\matth\source\repos\resume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map