"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const station_module_1 = require("./station/station.module");
const mongoose_1 = require("@nestjs/mongoose");
const vehicle_module_1 = require("./vehicle/vehicle.module");
const rental_module_1 = require("./rental/rental.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const rent_stats_module_1 = require("./rent-stats/rent-stats.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/Trail'),
            station_module_1.StationModule,
            vehicle_module_1.VehicleModule,
            rental_module_1.RentalModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            rent_stats_module_1.RentStatsModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map