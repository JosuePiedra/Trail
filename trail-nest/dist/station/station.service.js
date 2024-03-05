"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const station_schema_1 = require("../schemas/station.schema");
const mongoose_2 = require("mongoose");
let StationService = class StationService {
    constructor(stationModel) {
        this.stationModel = stationModel;
    }
    findAll() {
        return this.stationModel.find();
    }
    async create(createStation) {
        const newStation = new this.stationModel(createStation);
        return await newStation.save();
    }
    async findOne(id) {
        return await this.stationModel.findById(id);
    }
    async delete(id) {
        return await this.stationModel.findByIdAndDelete(id);
    }
    async update(id, station) {
        return await this.stationModel.findByIdAndUpdate(id, station);
    }
    async addVehicleToStation(stationId, vehicleId) {
        return this.stationModel.findByIdAndUpdate(stationId, { $addToSet: { vehicles: vehicleId } }, { new: true }).exec();
    }
};
exports.StationService = StationService;
exports.StationService = StationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(station_schema_1.Station.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StationService);
//# sourceMappingURL=station.service.js.map