const { v4 } = require('uuid');

const Websocket = require('ws');

const wss = new Websocket.Server({ port: 8989 });

const users = [];

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === Websocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data))
    }
  })
};

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const data = JSON.parse(message);

    switch (data.type) {
        case 'ADD_USER': {
          users.push({ name: data.name, id: data.id });
          const action = {
            type: 'POPULATE_USERS_LIST',
            users,
          };
          ws.send(JSON.stringify(action));
          broadcast(action, ws);
          break;
        }

      case 'ADD_MESSAGE': {
        broadcast({
          type: 'ADD_MESSAGE',
          id: v4(),
          message,
          author: data.name,
        }, ws);
        break;
      }

        default:
            break;
    }
  });

  ws.on('close', (message ) => {
    const data = JSON.parse(message);
    const { authorID } = data;
    const usersIndex = users.reduce((prev, user, index) => {
      if (prev === undefined) {
        if (user.id === authorID) {
          return index;
        }
      }
    });
    users.slice(usersIndex, 1);
  })
});
