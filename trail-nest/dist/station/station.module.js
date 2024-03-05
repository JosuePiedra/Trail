"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationModule = void 0;
const common_1 = require("@nestjs/common");
const station_controller_1 = require("./station.controller");
const station_service_1 = require("./station.service");
const mongoose_1 = require("@nestjs/mongoose");
const station_schema_1 = require("../schemas/station.schema");
let StationModule = class StationModule {
};
exports.StationModule = StationModule;
exports.StationModule = StationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: station_schema_1.Station.name,
                    schema: station_schema_1.StationSchema,
                },
            ]),
        ],
        controllers: [station_controller_1.StationController],
        providers: [station_service_1.StationService],
    })
], StationModule);
//# sourceMappingURL=station.module.js.map