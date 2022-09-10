# Phase1_Independent_Project
```
Author : Halkano Malise Tadicha
Tittle : COUNTRY GUIDE APP (fetches data from www.restcountries.com a Public API)

    [The live link to the website](http://127.0.0.1:5500/index.html)

TECHNOLOGIES USED 
   -JavaScript
   -HTML
   -CSS

Description:

    The Application Helps to display the features of a specific Country from a click of a button (Search)
    it is more useful to students and Diplomants from Non Governmental Institutions to know a specific country Geographical Position, Their political and Economic Activities
    simply Enter the Country Name you want to research.



Project setup/installation instructions:

    -Clone this repo to your local storage
    -Navigate to the top level of the directory
    -open PHASE1_INDEPENDENT_PROJECT/index.html

For beginners follow the setup below

Global setup:
  Download and install Git
  git config --global user.email EMAIL_ADDRESS
      
Next steps:
  mkdir PROJECT_NAME
  cd PROJECT_NAME
  git init
  touch README
  git add README
  git commit -m 'first commit'
  git remote add origin git@github.com:USER/PROJECT_NAME.git
  git push origin master
      
if there is an Existing Git Repo:
  cd existing_git_repo
  git remote add origin git@github.com:USER/PROJECT_NAME.git
  git push origin master




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