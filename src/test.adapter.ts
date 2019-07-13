import { IoAdapter } from '@nestjs/platform-socket.io';

export class TestAdapter extends IoAdapter {
  constructor() {
    super();
  }
  createIOServer(port: number, options?: any): any {
    return super.createIOServer(port, options);
  }
}
