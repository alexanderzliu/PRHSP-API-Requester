# README


This tool is to generate the API requests that are used to populate the assets and metadata of various display modules on the PRH sites built on the Sales Platform.

## How to use

Input the relevant information in the associated field.

Click "Generate API Request" button at bottom of form. 

This will open the response for that API request in a new tab, display the generated URI at the bottom of the page, and build a table of the 
selected return fields under that.

### Form Fields

**API Key**: Input valid API Key. Can request one at developer.penguinrandomhouse.com. Empty by default.

**Environment**: Select database environment that salesplatform is getting data from. 

**Domain**: Input name of domain for API request. Default is SALESPLATFORM.

**Site**: Select which Sales Platform websites' display modules we want to generate API request for. Default is Comics.

**Module**: Select display module we want to generate API request for. Default is Catalog

**Module Parameters**: Input the value for the module specific parameters for the module you have selected. 

For example, if "Division Landing Page" is selected, enter the divisionCode of the desired division to return i.e "H6" for Marvel. Do not specify the key of the paarameter, only the value, for sales-display based modules (Input only "all-categories-graphic-novels" for the category landing page NOT "catUri=all-categories-graphic-novels"
Similarly, enter the isbn for the desired book detail page. Do not specify the parameter key.
Enter the conditions for the dynamic titile list. This will be a **key-value pair** specification of the API field(s).

**Sort**: Select the sort and order parameters applied to the module. 

**Filter**: Select the filter(s) applied to the module.

**Filter Parameters** Input the value(s) for the filter specific parameters for the filter you have selected.

For example, if "Publisher" is selected, enter the divisionCode of the desired publisher to filter by i.e "H6" to see only Marvel titles. 
Similarly, if "onSaleTo/From" is selected, enter the date to filter on sale dates by in MM/DD/YYYY format. 
Do not specify the key of the parameter, only the value.

You can enter multiple filter values if you have selected multiple filters. **Delimit the values with a space**, and order the filter parameters entered in the order that the filters you have selected appear in the form. 

**Rows** Input the number of rows (titles) to return from the request and display on the table. Value of 0 returns all rows. Default is 0. 

**Fields Returned** Select the metadata fields from the API to view in table format. 


###How to Edit Form Fields

Open "tester.js" (might have to right click and "Open with" a proper text editor)

**File has comments throughout to try and label what form field you are editing.**


JSON object has 6 categories at the highest level: Environment, Site, Module, Sort, Filter and Fields

These objects have 1 or more attributes.

**Name**: Common to every attribute. This is what will be displayed on the button or select option.

**Prefix/Path**: URI component unique to the module, sort, or filter or environment. Used in construction of URI. If changing make sure to obey formatting of existing configuration. 

**Service** : The API service used to make the request. Either product-display, sales-display, author-display or listTitles. Can find service for module in Sales Platform_Metadata_Specs spreadsheet. 

**siteFilter**: value for siteFilter parameter in API that is used to filter universe of titles for site.

**catSetId**: Value for catSetId parameter in API for site that is used to get categories from category set. 

**Value**: Used in the internal construction of URI based on Module. 

Below the config JSON object are three "consts": defaultAPIKey, defaultDomain, defaultRows

These will change the value pre-filled into the form upon load to the value input. 
