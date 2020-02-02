const dev = require('../dev.js')
const prod = require('../prod.js')
var fs = require('fs');

//settings 
const compilePath = "./"

//choose right file 
let env = dev  
if(process.env.ENVIRONMENT === "prod") { 
    env = prod
} 

//compile
let stringOutput = "" 
Object.keys(env).forEach( (key, k) => { 
    const value = env[key]
    stringOutput += `REACT_APP_${key}=${value}\n`
}) 


//delete file 
if(fs.existsSync(`${compilePath}/.env`)) { 
    fs.unlinkSync(`${compilePath}/.env`, function(err) { 
        if(err) throw err; 
        console.log("Deleted .env file")
    })
}

//write 
fs.appendFileSync(`${compilePath}/.env`, stringOutput, function (err) {
    if (err) throw err;
    console.log('Saved!');
});
