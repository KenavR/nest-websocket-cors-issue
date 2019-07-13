# Nest Websocket CORS issue
The goal is to create a public websocket api which is accessible from everywhere (origins: `*`). Custom authentication will be done in the custom adapter. 

## Test
First install the dependencies with `npm install` and then start the server with `npm start`. ~~Open the client (`client.html`) in the browser of your choice and you should see the following error message in the console.~~ Chrome and maybe FF seem to block CORS requests, which means the file needs to be served with a webserver. The `index.html` file can be served using [Node local web server](https://github.com/lwsjs/local-web-server). After installing it run 

`ws`

Now the client should be accessible under `http://localhost:8000/`

##  Error Message

![Console](https://raw.githubusercontent.com/KenavR/nest-websocket-cors-issue/master/error.png)

## Websocket only scenario
Since I only need communication over websockets setting the `transports` on the client to websocket

```javascript
const socket = io(path, { transports: ['websocket'] });
```

produces the following error

![Console](https://raw.githubusercontent.com/KenavR/nest-websocket-cors-issue/master/wserror.png)



