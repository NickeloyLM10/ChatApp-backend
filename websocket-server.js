const WebSocket = require('ws');

// Use environment variable or default to 8080
const port = Number(process.env.PORT) || 8080;

const wss = new WebSocket.Server({ port });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log('Received:', message);

    // Echo the received message back to the client
    ws.send(message.toString()); // Ensure it is sent as a string
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log(`WebSocket server is listening on ws://localhost:${port}`);
