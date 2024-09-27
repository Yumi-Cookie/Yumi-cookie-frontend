import server from "./server.js";

server.listen(server.get("port"), ()=>{
    console.log(`FRONTEND: http://localhost:${server.get("port")}`);
})