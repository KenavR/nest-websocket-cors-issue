# Nest Websocket CORS issue
The goal is to create a public websocket api which is accessible from everywhere (origins: `*`). Custom authentication will be done in the custom adapter. 

## Test
First install the dependencies with `npm install` and then start the server with `npm start`. Open the client (`client.html`) in the browser of your choice and you should see the following error message in the console.

##  Error Message

![Console](https://raw.githubusercontent.com/KenavR/nest-websocket-cors-issue/master/error.png)

## Websocket only scenario
Since I only need communication over websockets setting the `transports` on the client to websocket

```javascript
const socket = io(path, { transports: ['websocket'] });
```

produces the following error

![Console](https://raw.githubusercontent.com/KenavR/nest-websocket-cors-issue/master/wserror.png)



