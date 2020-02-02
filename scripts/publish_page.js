var ghpages = require('gh-pages');
 
ghpages.publish('build', {
    branch: "master", 
    repo: "https://github.com/LiamTormey/anon-bot.git"
}, function(err) {
    console.log("[gh-pages] finished pushing.")
    if(err) { 
        console.error("[gh-pages] error pushing to github page: ", err)
    }
});