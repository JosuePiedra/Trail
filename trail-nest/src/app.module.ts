import { Module } from '@nestjs/common';
import { StationModule } from './station/station.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleModule } from './vehicle/vehicle.module';
import { RentalModule } from './rental/rental.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RentStatsModule } from './rent-stats/rent-stats.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Trail'),
    StationModule,
    VehicleModule,
    RentalModule,
    AuthModule,
    UsersModule,
    RentStatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
