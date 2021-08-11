//Change these fields as necessary with updates to API or Sales Platform
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
		"name": "OSD: New to Old",
		"path": "&sort=frontlistiest_onsale&dir=desc"
		},
		{
		"name": "OSD: Old to New",
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
		"path": "&onSaleTo="
		},
		{
		"name":"onSaleFrom",
		"path": "&onSaleFrom="
		},
		{
		"name":"Age",
		"path": "&ageRange="
		},
		{
		"name":"Publisher",
		"path": "&divisionCode="
		},
		{
		"name":"Format",
		"path": "&formatCode="
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
		"name":"coverVariantDesc"
		},
		{
		"name":"familyCoverVariantFlag"
		},
	]
	
}

//Change these to your desired defaults for APIKey, Domain and Rows form fields.
const defaultAPIKey = "ey4aqtkvg6t53p56uwakmrba"
const defaultDomain = "SALESPLATFORM" 
const defaultRows = "0"

//Below here is the actual code that powers the requester/scraper.

//Class for API Request with fields/methods needed to generate URI for API call that module uses
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
	//Method that takes form input and generates URI based on it.
	createURI() { 
		let URI = "";
		URI = URI + this.getURIEnvironment(); //add environment to URI
		URI = URI + this.getURIDomain(); // add domain to URI
		switch(this.getURIModule()) { //Determine which endpoint and view to use based on module
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
				this.setURIService("listTitles")
				break;
		}
		URI = URI + this.getURIParameters(); 
		URI = URI + "&api_key=" + this.getURIAPIKey(); 
		URI = URI + this.getURISortParameters();
		URI = URI + "&siteFilter=" + this.getURISiteParameters();
		//add multiple filters to uri
		let filters = this.getURIFilter();
		let filterParamString = this.getURIFilterParameters();
		const filterParams = filterParamString.split(" "); 
		let filterLength = Math.min(filters.length, filterParams.length);
		for (let i = 0; i < filterLength; i++){
			URI = URI + filters[i] + filterParams[i];
		}
		URI = URI + "&rows=" + this.getURIRows();
		this.setURI(URI);
		return URI; 
	}
}
//Function to request and scrape the information off the API
async function scrapeAPI(URI, service,returnFields, APIRequest){
	let url = URI;
	//try{
	let response = await fetch(url);
	if (response.status == 404){
		console.log('error');
		alert('Could not find page. Check inputs for correctness.')
	}
	let result = await response.json();
	//} catch (err) {
		//console.log('error');
		//alert(err);
	//}
	let parsed = JSON.parse(JSON.stringify(result));
	//.catch(err => throw rr);
	//for (let title of titles) {
	displayResults(parsed, service,returnFields,APIRequest);
	window.open(url)
}
//Function to build and populate the table that will display the requested information of API
function displayResults(apiResponse, service,returnFields, APIRequest) {
	let data = apiResponse.data;
	let serv = service;
	let fields = returnFields;
	let params = APIRequest.getURIParameters();
	let body = $('body'); 
	let bottom = $('#how_to_use');
	let tbl = document.createElement("table");
	let tableRows = APIRequest.getURIRows();
	let headerRow = document.createElement('tr'); 

	//Create header row with metadata field names
	for (let i = 0; i < fields.length; i++) {
		let cell = document.createElement('td');
		cell.innerHTML = fields[i];
		headerRow.appendChild(cell);
	}
	tbl.appendChild(headerRow);
	//Use relevant scraping method for the chosen end-point to populate table rows.
	switch(serv){
		case "sales-display":
		case "listTitles":
		let titles = data.titles;
			for (let title of titles) {
				let row = document.createElement('tr');
				for (let k = 0; k  < fields.length; k++) { 
					let cell = document.createElement('td');
					cell.innerHTML = JSON.stringify(title[fields[k]]);
					row.appendChild(cell);
				}
				tbl.appendChild(row); 
			}
			break;
		case "product-display":
		let formats = data.formats;
			for (let format in formats) { 
				for (let title in formats[format]) {
					let title = formats[format]
					console.log(title)
					for (let titleIsbn in title) {
						let titleObj = title[titleIsbn]
						let row = document.createElement('tr');
						for (let k = 0; k  < fields.length; k++) { 
							let cell = document.createElement('td');
							cell.innerHTML = JSON.stringify(titleObj[fields[k]]);
							row.appendChild(cell);
						}
						tbl.appendChild(row); 
					}
				}
			}
			break;

	}
	//Add table to end of page.
	body.append(tbl); 
}

//Function to display the generated URI at the bottom of page.
function displayURI(URI){
	uri = URI
	let body = $('body');
	//let bottom = $('#how_to_use');
	let URIDisplay = document.createElement('p')
		URIDisplay.classList.add('title')
		URIDisplay.innerHTML = String(uri);
	body.append(URIDisplay);
}
/**Function that initializes the API request process. 
 * Creates an APIRequest object from form input. 
 * Calls sequential functions to: 
 * display URI (displayURI()) 
 * send request to API and scrape response (scrapeAPI())
 * and finally: display the results on the bottom of page
 */
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
	let URIfilter = $('#URIFilter').val();  
	let URIfilter_parameters = elem.URIFilterParameters.value;
	let URIrows = elem.URIRows.value;
	let returnFields = $('#returnFields').val(); 
	let APIRequest = new APIRequestTemplate(URIAPIkey, URIenvironment, URIdomain, URIsite_parameters, URImodule, URIparameters, URIsort_parameters, URIfilter, URIfilter_parameters, URIrows);
	APIRequest.createURI();
	let URI = APIRequest.getURI();
	let APIService = APIRequest.getURIService(); 
	displayURI(URI);
	scrapeAPI(URI, APIService,returnFields, APIRequest);

}





