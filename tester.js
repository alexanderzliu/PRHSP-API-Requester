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
		URIsort_parameters, URIfilter_parameters){
	this._URIAPIKey = URIAPIkey; 
	this._URIEnvironment = URIenvironment;
	this._URIDomain = URIdomain;
	this._URISiteParameters = URIsite_parameters;
	this._URIModule = URImodule;
	this._URIParameters = URIparameters;
	this._URISortParameters = URIsort_parameters;
	this._URIFilterParameters = URIfilter_parameters;
	}

	getURIFilterParameters() {
		return this._URIFilterParameters;
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
			case "catalog_landing_page":
				return "cataData="
			case "category_landing_page":
				return "catUri="
			case "series_landing_page":
				return "seriesCode="
			case "division_landing_page":
				return "divisionCode="
			case "imprint_landing_page":
				return "imprintCode="
		} 
	}
	createURI() { 
		let URI = "";
		switch(this.getURIEnvironment()) {
			case "PROD":
				URI = "https://api.penguinrandomhouse.com/resources/v2/title/domains";
				break;
			case "TEST":
				URI = "http://interapp-tst/PrhApi/domains/SALESPLATFORM/";
				break;
			case "DEV":
				URI = "http://interapp-dev/PrhApi/domains/SALESPLATFORM/";
				break;
			default:
				URI = "https://api.penguinrandomhouse.com/resources/v2/title";
		}
		URI = URI + URIDelim + this.getURIDomain(); // add domain to URI
		switch(this.getURIModule()) {
			case "catalog_landing_page":
			case "category_landing_page":
			case "series_landing_page":
			case "division_landing_page":
			case "imprint_landing_page":
				URI = URI + "/works/views/sales-display?" + this.getURIModuleParameters();
				break; 
			case "book_detail_page":
				URI = URI + /titles/ + this.getURIParameters() + "/views/product-display?";
				break;
			case "dynamic_carousel":
				URI = URI + "/titles?";
				break;
		}
		URI = URI + this.getURIParameters();
		URI = URI + "&api_key=" + this.getURIAPIKey(); 
		switch(this.getURISortParameters()) {
			case "osd_desc":
				URI = URI + "&sort=frontlistiest_onsale&dir=desc";
				break;
			case "osd_asc":
				URI = URI + "&sort=frontlistiest_onsale&dir=asc";
				break;
			case "price_desc":
				URI = URI + "&sort=price&sortPriceTypeCode=USD&dir=desc";
				break;
			case "price_asc":
				URI = URI + "&sort=price&sortPriceTypeCode=USD&dir=asc";
				break;
			case "A_Z":
				URI = URI + "&sort=name&dir=asc";
				break;
			case "Z_A":
				URI = URI + "&sort=name&dir=desc";
				break;
		}
		URI = URI + "&siteFilter=" + this.getURISiteParameters();
		switch(this.getURIFilterParameters()){
			case "on_sale":
				URI = URI + "&onSaleTo=" + today;
				break;
			case "coming_soon":
				URI = URI + "&onSaleFrom=" + tomorrow;
				break;
			default:
				break;
		}
		return URI; 
	}
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
	let URIfilter_parameters = elem.URIFilterParameters.value; 
	let APIRequest = new APIRequestTemplate(URIAPIkey, URIenvironment, URIdomain, URIsite_parameters, URImodule, URIparameters, URIsort_parameters, URIfilter_parameters);
	window.open(APIRequest.createURI());
}
