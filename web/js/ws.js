var ws = new WebSocket("ws://codr.cloudapp.net/websocket");

ws.onopen = function() {
   ws.send("Hello, world");
};

ws.onmessage = function (evt) {
   alert(evt.data);
};

