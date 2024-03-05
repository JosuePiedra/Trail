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
exports.StationController = void 0;
const common_1 = require("@nestjs/common");
const station_service_1 = require("./station.service");
const create_station_dto_1 = require("../dto/create-station.dto");
const update_station_dto_1 = require("../dto/update-station.dto");
let StationController = class StationController {
    constructor(stationService) {
        this.stationService = stationService;
    }
    getAll() {
        console.log('hola');
        return this.stationService.findAll();
    }
    async getOne(id) {
        const station = await this.stationService.findOne(id);
        if (!station)
            throw new common_1.NotFoundException('Station not founded');
        return station;
    }
    createStation(body) {
        try {
            console.log('hola');
            return this.stationService.create(body);
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.ConflictException('Station already exists');
            }
        }
    }
    async addVehicle(stationId, vehicleId) {
        return this.stationService.addVehicleToStation(stationId, vehicleId);
    }
    async deleteStation(id) {
        const station = await this.stationService.delete(id);
        if (!station)
            throw new common_1.NotFoundException('Station not found');
        return station;
    }
    async updateStation(id, body) {
        const station = await this.stationService.update(id, body);
        if (!station)
            throw new common_1.NotFoundException('Station not founded');
        return station;
    }
};
exports.StationController = StationController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StationController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StationController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_station_dto_1.CreateStationDto]),
    __metadata("design:returntype", void 0)
], StationController.prototype, "createStation", null);
__decorate([
    (0, common_1.Post)(':stationId/vehicles/:vehicleId'),
    __param(0, (0, common_1.Param)('stationId')),
    __param(1, (0, common_1.Param)('vehicleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StationController.prototype, "addVehicle", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StationController.prototype, "deleteStation", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_station_dto_1.UpdateStationDto]),
    __metadata("design:returntype", Promise)
], StationController.prototype, "updateStation", null);
exports.StationController = StationController = __decorate([
    (0, common_1.Controller)('station'),
    __metadata("design:paramtypes", [station_service_1.StationService])
], StationController);
//# sourceMappingURL=station.controller.js.map