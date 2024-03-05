import { Module } from '@nestjs/common';
import { RentStatsController } from './rent-stats.controller';
import { RentStatsService } from './rent-stats.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { RentStats, RentStatsSchema } from 'src/schemas/rent-stats.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: RentStats.name,
        schema: RentStatsSchema,
      },
    ]),
  ],
  controllers: [RentStatsController],
  providers: [RentStatsService]
})
export class RentStatsModule {}
