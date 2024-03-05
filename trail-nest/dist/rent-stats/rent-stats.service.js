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
exports.RentStatsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_decorators_1 = require("@nestjs/mongoose/dist/common/mongoose.decorators");
const mongoose_1 = require("mongoose");
const rent_stats_schema_1 = require("../schemas/rent-stats.schema");
let RentStatsService = class RentStatsService {
    constructor(vehicleModel) {
        this.vehicleModel = vehicleModel;
    }
    findAll() {
        return this.vehicleModel.find();
    }
    async create(createStation) {
        const newVehicle = new this.vehicleModel(createStation);
        return await newVehicle.save();
    }
    async findOne(id) {
        return await this.vehicleModel.findById(id);
    }
    async delete(id) {
        return await this.vehicleModel.findByIdAndDelete(id);
    }
    async update(id, station) {
        return await this.vehicleModel.findByIdAndUpdate(id, station);
    }
};
exports.RentStatsService = RentStatsService;
exports.RentStatsService = RentStatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_decorators_1.InjectModel)(rent_stats_schema_1.RentStats.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], RentStatsService);
//# sourceMappingURL=rent-stats.service.js.map