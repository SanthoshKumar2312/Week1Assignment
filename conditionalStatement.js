const { stripTypeScriptTypes } = require("module");

// IF condition
function launchBrowser(browserName){
    if(browserName=="chrome"){
        console.log("You have launched to Chrome web browser")
    }
    else{
        console.log("Sorry you have launched Other browser")
    }
}
launchBrowser("dert")


// Switch

function getbrowserVersion() {
 
    switch (testtypes) {
        case "smoke":
            console.log("You have selected smoke test");
            break;
 
        case "sanity":
            console.log("You have selected Sanity test");
            break;
 
        case "Regression":
            console.log("You have selected Regression test");
            break;
 
        default:
            console.log("Sorry No test found");
            break;
    }
}
 
let testtypes='Regression'
getbrowserVersion()