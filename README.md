#README
This tool is to generate the API requests that are used to populate the assets and metadata of various display modules on the PRH sites built on the Sales Platform.
**How to use:**
Input the relevant information in the associated field. Click "Generate API Request" button at bottom of form. This will open the response for that API request in a new tab.

**Form Fields**

**API Key**: Input valid API Key. Can request one at developer.penguinrandomhouse.com.
**Environment**: Select database environment that salesplatform is getting data from. Default is PROD (production).
**Domain**: Input name of domain for API request. Default is SALESPLATFORM.
**Site**: Select which Sales Platform websites' display modules we want to generate API request for. Default is Comics.
**Module**: Select display module we want to generate API request for. Default is Catalog
**Module Parameters**: Input the value for the module specific parameters for the module have selected. 
For example, if "Division Landing Page" is selected, enter the divisionCode of the desired division to return i.e "H6" for Marvel. Do not specify the key of the paarameter, only the value, for sales-display based modules (Input only "all-categories-graphic-novels" for the category landing page NOT "catUri=all-categories-graphic-novels"
Similarly, enter the isbn for the desired book detail page. Do not specify the parameter key.
Enter the conditions for the dynamic titile list. This will be a **key-value pair** specification of the API field(s).
**Sort Parameters**: Select the sort and order parameters applied to the module. 
**Filter Parameters**: Select the filters applied to the module.
