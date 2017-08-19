# jquery-year-select
Simple Jquery plugin for year select

# Install
```
npm i jquery-year-select
```

# How to use
Once installed it is very easy to use.
### Create the element in HTML
```html
<select class="yearselect"></select>
```
### Integrate the plugin
####Include the Jquery libray
```javascript
<scipt src="https://code.jquery.com/jquery-2.2.3.min.js"
                integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo="
                crossorigin="anonymous"></script>
```
####Include the plugin
```javascript
<script src="path/to/plugin/jquery-year-select/lib/year-select.js></script">
```
####And ready to go
```javascript
<script type="text/javascript">
    $('.yearselect').yearselect();
</script>
```

### Options

* **start**:
    * Set the year where to start
    * type: integer
    * **Default**: 1970
---
* **end**:
    * Set the year where to end
    * type: integer
    * **Default**: new Date().getFullYear(),
---
* **step**:
    * Number of interval between years
    * type: integer
    * **Default**: 1,
---
* **order**:
    * Defines the order of years rendered
    * type: "string"
    * 'asc|ASC': Ascending|From lowest to highest
    * 'desc|DESC': Descending|From highest to lowest
    * **Default**: 'asc',
---
* **selected**:
    * Set the selected year option
    * type: integer | "current"
    * **Default**: "current"
---
* **formatDisplay**:
    * Format the display of the year.
    * You can format the dislay of the year in the dropdown. 
    * For example you wanted to format the year with -1 year like so (2016-2017), you should use this callback
    * type: function
    * Accept year as paramater
    * **Default**: function(yr) { return yr } 
---
* **displayAsValue**
    * Determines the option value
    * If you used formatDisplay callback, you can make the formatted string as value
    * type: boolean
    *  **Default**: true

### Integrate with other plugin

#### [Like Select2 Plugin](https://github.com/select2/select2)
YearSelect plugin returns the element so that it can be chained with other plugins.
    
```javascript
$('element').yearselect().select2();
```

If you want to style the select element, you can use other plugin just like the above code with select2 plugin