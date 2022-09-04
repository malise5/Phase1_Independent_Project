# Phase1_Independent_Project
```
Tittle : COUNTRY GUIDE APP that fetches data from www.restcountries.com a Public API 

The Application Helps to display the features of a specific button from a click of a button (Search)
it can be more useful to students and Diplomants from Non Governmental Institutions to know a specific country Geographical Position and Their political and Economic Activities
 ```
``` TOOLS:
    VISUAL CODE STUDIO
    GIT (version Control)
```

 ````
 HTML/CSS were Used to design and Edit the User Interface
 Javascript Helped to fetch and add Eventlisteners to grab and out any error through thr catch function

 there challanges along the way, I tried Obtaining a value of an object with the object which had closure object with it self, but through  w3school and some research I was able to make use of Object.value() and Object.Key() to capture the respective data in an Object

 CSS was challanging so I followed some online steps and designed my own css visual file in index.css that helped me bring out UI

 I tried to find a way to insert a video at the background of my page, it was quite challanging but I figured out how to add <video></video> into my index.html document and that was pretty impressed
 ```



Below are the logs I Used to Inspect My Code in the Developer tools in Chrome that Enable me pin point the exact Data I want it to be display on My App UI
``` console.log(data[0]); //we Acces object name data
        console.log(data[0].capital[0]); //helps to acces the Capital City
        console.log(data[0].flags.svg); //The flag is captured here
        console.log(data[0].name.common); // The country name is captured here
        console.log(data[0].continents[0]); //acccess the specific Continent the country belongs to
        console.log(Object.keys(data[0].currencies)[0]); //currency money for each country
        console.log(Object.values(data[0].languages).toString().split(",").join(", ")); //Display languages spoken by the specific country
        console.log(data[0].maps.googleMaps); // google maps for each country
 ````