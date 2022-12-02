// import request from "request";
// const url = "https://www.reddit.com/r/worldnews.json";
// request({ url: url, json: true }, (error, response) => {
//     let children = response.body.data.children;
//     for(let i = 0; i < children.length; i++){
//         let title = children[i].data.title;
//         if(title.length > 75){
//             title = title.substring(0, 75) + "...";
//         }
//         console.log("Post " + (i+1) + ": " +title);
//     }
// });

const https = require("https");
const url = "https://www.reddit.com/r/worldnews.json";

const request = https.request(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
        data += chunk.toString();
    });

    response.on("end", () => {
        const body = JSON.parse(data);
        let children = body.data.children;
        for (let i = 0; i < children.length; i++) {
            let title = children[i].data.title;
            if (title.length > 75) {
                title = title.substring(0, 75) + "...";
            }
            console.log("Post " + (i + 1) + ": " + title);
        }
    });
});

request.end();
