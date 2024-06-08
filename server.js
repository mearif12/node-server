/**http routing & nodemon
 * 
 * 
 * rounting means change the url also pages on change or click different element
 * 
 * nodemon is used for updating the webpage easily (without ctrl+c every time)
 * 
 * to install nodemon=> npm install nodemon
 * 
 * [keep on mind to use npm/packages on folder must initialize it=> npm init] 
 * 
 * go to "package.json" and include "start":"nodemon fileName.js" in the "scripts".
 * 
 * Now open Terminal "npm start" to run the server
 */

const Http = require("http");
const File = require("fs");
const Port = process.env.PORT || 4500;
//const hostName = "127.0.0.1";

const server = Http.createServer((req,res)=>{

    const Handle = (statusCode,fileUrl)=>{

        File.readFile(fileUrl,(e,data)=>{

            res.writeHead(statusCode,{"Content-Type":"text/html"});
            res.write(data);
            res.end();

        });

    }

    if(req.url === "/"){
        Handle(200,"./html/home.html");
    }
    else if(req.url === "/edu"){
        Handle(200,"./html/edu.html");
    }
    else if(req.url === "/skill"){
        Handle(200,"./html/skill.html");
    }
    else{
        Handle(404,"./html/error.html");
    }

});

server.listen(Port,hostName,()=>{
    console.log(`Server is running successfully at http://localhost:${Port}`);
});
