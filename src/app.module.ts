import { Module } from '@nestjs/common';
import { ConnectionGateway } from './connection.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [ConnectionGateway],
})
export class AppModule {}
