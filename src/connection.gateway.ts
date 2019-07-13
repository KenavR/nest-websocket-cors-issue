import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';

@WebSocketGateway()
export class ConnectionGateway
  implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server;
  users: number = 0;

  async handleConnection() {
    // A client has connected
    this.users++;

    console.log('USER CONNECTED: ', this.users);
  }

  async handleDisconnect() {
    // A client has disconnected
    this.users--;

    console.log('USER Disconnected: ', this.users);
  }
}
