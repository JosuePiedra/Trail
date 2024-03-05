import { Module } from '@nestjs/common';
import { StationController } from './station.controller';
import { StationService } from './station.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Station, StationSchema } from 'src/schemas/station.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Station.name,
        schema: StationSchema,
      },
    ]),
  ],
  controllers: [StationController],
  providers: [StationService],
})
export class StationModule {}
