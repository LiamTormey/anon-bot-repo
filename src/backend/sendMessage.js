import fetch from 'node-fetch'
export default (msg) => {
    const endpoint = 'https://cors-anywhere.herokuapp.com/http://potatotesting.site.nfoservers.com/skepsshit/post_to_webhook.php'
    console.log('sending to ', 'https://cors-anywhere.herokuapp.com/http://potatotesting.site.nfoservers.com/skepsshit/post_to_webhook.php')
    fetch(endpoint, {
        "method":"POST", 
        "headers":{"Content-Type": "application/json"}, 
        "body": JSON.stringify({
            "msg":`${msg}`   
        })
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
}