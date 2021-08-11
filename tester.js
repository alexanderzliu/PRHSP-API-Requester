const config = {
	"Environment": [
		{
		"name": "PROD",
		"prefix": "https://api.penguinrandomhouse.com/resources/v2/title/domains/"
		},
		{
		"name": "TEST",
		"prefix": "http://interapp-tst/PrhApi/domains/SALESPLATFORM/"
		},
		{
		"name": "DEV",
		"prefix": "http://interapp-dev/PrhApi/domains/SALESPLATFORM/"
		},
	],
	"Site": [
		{
		"name": "Comics",
		"siteFilter": "Comics",
		"zoomCatSetId": "CM"
		},
		{
		"name": "Retail",
		"siteFilter": "Retail",
		"zoomCatSetId": ""
		},
		{
		"name": "Elementary",
		"siteFilter": "Elementary",
		"zoomCatSetId": "EE"
		},
		{
		"name": "Secondary",
		"siteFilter": "Secondary",
		"zoomCatSetId": "SE"
		},
		{
		"name": "Higher Education",
		"siteFilter": "HigherEducation",
		"zoomCatSetId": "HE"
		},
		{
		"name": "Backlist",
		"siteFilter": "Backlist",
		"zoomCatSetId": ""
		},
		{
		"name": "Common Reads",
		"siteFilter": "CommmonReads",
		"zoomCatSetId": ""
		},
	],
	"Module": [
		{
		"name": "Category Landing Page",
		"service": "sales-display",
		"path": "catUri=",
		"value":"category"
		},
		{
		"name": "Catalog Landing Page",
		"service": "sales-display",
		"path": "cataDate=",
		"value":"catalog"
		},
		{
		"name": "Division Landing Page",
		"service": "sales-display",
		"path": "divisionCode=",
		"value": "division"
		},
		{
		"name": "Series Landing Page",
		"service": "sales-display",
		"path": "seriesCode=",
		"value": "series"
		},
		{
		"name": "Imprint Landing Page",
		"service": "sales-display",
		"path": "imprintCode=",
		"value": "imprint"
		},
		{
		"name": "Book Detail Page",
		"service": "product-display",
		"path": "cataDate=",
		"value": "bookDetail"
		},
		{
		"name": "Dynamic Carousel",
		"service": "title-list",
		"path": "cataDate=",
		"value": "dynamicCarousel"
		},
	],
	"Sort": [
		{
		"name": "OSD: Old to New",
		"path": "&sort=frontlistiest_onsale&dir=desc"
		},
		{
		"name": "OSD: New to Old",
		"path": "&sort=frontlistiest_onsale&dir=asc"
		},
		{
		"name": "Price: High to Low",
		"path": "&sort=price&sortPriceTypeCode=USD&dir=desc"
		},
		{
		"name": "Price: Low to High",
		"path": "&sort=price&sortPriceTypeCode=USD&dir=asc"
		},
		{
		"name": "Title: A - Z",
		"path": "&sort=name&dir=asc"
		},
		{
		"name": "Title: Z - A",
		"path": "&sort=name&dir=desc"
		}
	],
	"Filter": [
		{
		"name":"Category",
		"path": "&catURI="
		},
		{
		"name":"onSaleTo",
		"path": "&catURI="
		},
		{
		"name":"onSaleFrom",
		"path": "&catURI="
		},
		{
		"name":"Age",
		"path": "&catURI="
		},
		{
		"name":"Grade",
		"path": "&catURI="
		}
	],
	"Fields": [ 
		{
		"name":"isbn"
		},
		{
		"name":"workId"
		},
		{
		"name":"title"
		},
		{
		"name":"subtitle"
		},
		{
		"name":"author"
		},
		{
		"name":"imprint"
		},
		{
		"name":"onSaleDate"
		},
		{
		"name":"series"
		},
		{
		"name":"division"
		},
		{
		"name":"catalogs"
		},
		{
		"name":"records"
		},
		{
		"name":"isbn"
		},
		{
		"name":"isbn"
		},
	]
	
}

//MODIFY THESE AS APPROPRIATE TO CHANGE DEFAULT VALUES OF APIKEY AND DOMAIN
const defaultAPIKey = "ey4aqtkvg6t53p56uwakmrba"
const defaultDomain = "SALESPLATFORM"
const defaultRows = "0"


const URIDelim = "/";
const URIParamConcat = "&";


var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var ddT = String(tomorrow.getDate()).padStart(2, '0');
var mmT = String(tomorrow.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyyT = tomorrow.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
tomorrow = mmT + '/' + ddT + '/' + yyyyT;

class Module {
	constructor(){
		_name = "";
		_URI = ""; 
	}
	setName(name) {
		this._name = name;
	}

	getName() {
		return this._name;
	}
}

class APIRequestTemplate {

	constructor(URIAPIkey, URIenvironment, URIdomain, URIsite_parameters, URImodule, URIparameters, 
		URIsort_parameters, URIfilter, URIfilter_parameters,URIrows){
	this._URIAPIKey = URIAPIkey; 
	this._URIEnvironment = URIenvironment;
	this._URIDomain = URIdomain;
	this._URISiteParameters = URIsite_parameters;
	this._URIModule = URImodule;
	this._URIParameters = URIparameters;
	this._URISortParameters = URIsort_parameters;
	this._URIFilter = URIfilter;
	this._URIFilterParameters = URIfilter_parameters;
	this._URIRows = URIrows;
	this._URI = "";
	this._URIService = "";
	}
	setURIService(service){
		this._URIService = service;
	}

	getURIService(){ 
		return this._URIservice
	}
	getURIRows() {
		return this._URIRows;
	}

	getURIFilterParameters() {
		return this._URIFilterParameters;
	}

	getURIFilter() {
		return this._URIFilter;
	}

	getURISiteParameters() {
		return this._URISiteParameters;
	}

	getURISortParameters() {
		return this._URISortParameters;
	}

	getURIAPIKey(){
		return this._URIAPIKey;
	}

	getURI(){
		return this._URI;
	}

	setURI(URI){
		this._URI = URI;
	}

	getURIEnvironment(){
		return this._URIEnvironment;
	}

	setURIEnvironment(environment){
		this._URIenvironment = environment;
	}
	
	getURIDomain(){
		return this._URIDomain;
	}

	setURIDomain(domain){
		this._URIdomain = domain;
	}	

	getURIModule(){
		return this._URIModule;
	}

	setURIModule(urimodule){ //module is restricted word
		this._URIModule = urimodule; 
	}	

	getURIService(){
		return this._URIservice;
	}

	setURIService(service){
		this._URIservice = service;
	}	

	getURIParameters(){
		return this._URIParameters;
	}

	setURIParameters(parameters){
		this._URIParameters = parameters;
	}

	getURIModuleParameters(){
		switch(this.getURIModule()) {
			case "catalog":
				return "cataData="
			case "category":
				return "catUri="
			case "series":
				return "seriesCode="
			case "division":
				return "divisionCode="
			case "imprint":
				return "imprintCode="
		} 
	}

	createURI() { 
		let URI = "";
		URI = URI + this.getURIEnvironment(); //add environment to URI
		URI = URI + this.getURIDomain(); // add domain to URI
		switch(this.getURIModule()) {
			case "catalog":
			case "category":
			case "series":
			case "division":
			case "imprint":
				URI = URI + "/works/views/sales-display?" + this.getURIModuleParameters();
				this.setURIService("sales-display")
				break; 
			case "bookDetail":
				URI = URI + /titles/ + this.getURIParameters() + "/views/product-display?";
				this.setURIService("product-display")
				break;
			case "dynamicCarousel":
				URI = URI + "/titles?";
				this.setURIService("title-display")
				break;
		}
		URI = URI + this.getURIParameters(); 
		URI = URI + "&api_key=" + this.getURIAPIKey(); 
		URI = URI + this.getURISortParameters();
		URI = URI + "&siteFilter=" + this.getURISiteParameters();
		switch(this.getURIFilter()) {
			case "on_sale":
				URI = URI + "&onSaleTo=" + today;
				break;
			case "coming_soon":
				URI = URI + "&onSaleFrom=" + tomorrow;
				break;
			default:
				break;
		}
		URI = URI + this.getURIFilterParameters();
		URI = URI + "&rows=" + this.getURIRows();
		this.setURI(URI);
		return URI; 
	}
}
async function scrapeAPI(URI, service,returnFields, rows){
	let url = URI;
	let response = await fetch(url);
	let result = await response.json();
	let parsed = JSON.parse(JSON.stringify(result));
	//.catch(err => throw rr);
	//for (let title of titles) {
	displayResults(parsed, service,returnFields,rows);
}

function displayResults(apiResponse, service,returnFields,rows) {
	let data = apiResponse.data;
	let titles = data.titles; 
	let serv = service;
	let fields = returnFields;
	let body = $('body'); 
	let bottom = $('#how_to_use');
	let tbl = document.createElement("table");
	let tableRows = rows;
	//let tblBody = document.createElement("tbody");
	//bottom.append(tbl);
	//tbl.append(tblHead); 
	let headerRow = document.createElement('tr'); 
	for (let i = 0; i < fields.length; i++) {
		//alert(fields.length);
		//alert(fields[i]);
		let cell = document.createElement('td');
		cell.innerHTML = fields[i];
		headerRow.appendChild(cell);
		//tblHead.append(headCells);
	}
	//tblBody.append(row);
	tbl.appendChild(headerRow);
	for (let title of titles) {
		//alert(title.isbn)
		let row = document.createElement('tr');
		for (let k = 0; k  < fields.length; k++) { 
			let cell = document.createElement('td');
			//alert(fields[k]) //only iterating once
			//console.log(title[fields[k]]);
			cell.innerHTML = JSON.stringify(title[fields[k]]);
			row.appendChild(cell);
		}
		tbl.appendChild(row); 
	}
	
	body.append(tbl); 
	//if (serv == "sales-display") {
		//let titles = data.titles; 
		//for (let title of titles) { 	
		//tbl.innerHTML = String(fields.length);
		//let tblBody = document.createElement('tbody');
	//}
}


function displayURI(URI){
	uri = URI
	let body = $('body');
	//let bottom = $('#how_to_use');
	let URIDisplay = document.createElement('p')
		URIDisplay.classList.add('title')
		URIDisplay.innerHTML = String(uri);
	body.append(URIDisplay);
}

function alerter(){
	let form = document.forms.APIRequest;
	let elem = form.elements;
	let URImodule = elem.URIModule.value; 
	let URIenvironment = elem.URIEnvironment.value;
	let URIAPIkey = elem.URIAPIKey.value; 
	let URIdomain = elem.URIDomain.value;
	let URIsite_parameters = elem.URISiteParameters.value; 
	let URIparameters = elem.URIParameters.value; 
	let URIsort_parameters = elem.URISortParameters.value;
	let URIfilter = elem.URIFilter.value; 
	let URIfilter_parameters = elem.URIFilterParameters.value;
	let URIrows = elem.URIRows.value;
	let returnFields = $('#returnFields').val(); 
	let APIRequest = new APIRequestTemplate(URIAPIkey, URIenvironment, URIdomain, URIsite_parameters, URImodule, URIparameters, URIsort_parameters, URIfilter, URIfilter_parameters, URIrows);
	APIRequest.createURI();
	let URI = APIRequest.getURI();
	let APIService = APIRequest.getURIService(); 
	displayURI(URI);
	scrapeAPI(URI, APIService,returnFields, URIrows);
	window.open(URI);
	//window.open("output.html");
	//alert(APIRequest.getURI());
}





