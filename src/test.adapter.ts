import { IoAdapter } from '@nestjs/platform-socket.io';

export class TestAdapter extends IoAdapter {
  constructor() {
    super();
  }
  createIOServer(port: number, options?: any): any {
    const server = super.createIOServer(port, options);

    server.origins('*:*');

    return server;
  }
}
