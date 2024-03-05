"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentStatsModule = void 0;
const common_1 = require("@nestjs/common");
const rent_stats_controller_1 = require("./rent-stats.controller");
const rent_stats_service_1 = require("./rent-stats.service");
const mongoose_module_1 = require("@nestjs/mongoose/dist/mongoose.module");
const rent_stats_schema_1 = require("../schemas/rent-stats.schema");
let RentStatsModule = class RentStatsModule {
};
exports.RentStatsModule = RentStatsModule;
exports.RentStatsModule = RentStatsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_module_1.MongooseModule.forFeature([
                {
                    name: rent_stats_schema_1.RentStats.name,
                    schema: rent_stats_schema_1.RentStatsSchema,
                },
            ]),
        ],
        controllers: [rent_stats_controller_1.RentStatsController],
        providers: [rent_stats_service_1.RentStatsService]
    })
], RentStatsModule);
//# sourceMappingURL=rent-stats.module.js.map