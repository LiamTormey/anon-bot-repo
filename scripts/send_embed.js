let fetch = require('node-fetch')

const endpoint = 'https://discordapp.com/api/webhooks/644693130096148481/Fu8oH4XjfYGhXFev5QIhN_qWJ6JGpicGnE-U5HzwVrTop3sPKofuct6rk52Lu_QuVuVT'
const msg = 'testt'

fetch(endpoint, {
    "method":"POST", 
    "headers":{"Content-Type": "application/json"}, 
    "body": JSON.stringify({
        "embeds":[
            {
                title: "Embeds?", 
                description: "Why would anyone want this?",
                fields: [
                    {name:"**#1**", value: "Noone wants this"},
                    {name:"**#2**", value: "Teh is just bored"}
                ],
                author: {
                    name: "Visit the AnonBot Page", 
                    icon_url: "https://cdn.discordapp.com/attachments/559898190376206336/671047757426982914/received_10155433526322808.jpg",
                    url: "https://liamtormey.github.io/anon-bot/"
                }, 
                thumbnail: { 
                    url: "https://cdn.discordapp.com/attachments/559898190376206336/671047757426982914/received_10155433526322808.jpg",
                    width: 100, 
                    height: 100, 

                }
            }
        ]   
    })
})
.then(res => console.log(res))
.catch(err => console.error(err));