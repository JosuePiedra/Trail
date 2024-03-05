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
exports.RentalController = void 0;
const common_1 = require("@nestjs/common");
const rental_service_1 = require("./rental.service");
const create_rental_dto_1 = require("../dto/create-rental.dto");
const update_rental_dto_1 = require("../dto/update-rental.dto");
let RentalController = class RentalController {
    constructor(rentalService) {
        this.rentalService = rentalService;
    }
    create(createRentalDto) {
        return this.rentalService.create(createRentalDto);
    }
    getAll() {
        return this.rentalService.findAll();
    }
    getAllByUser(id) {
        return this.rentalService.findAllById(id);
    }
    async getRentalWithDetails(id) {
        return this.rentalService.findRentalWithDetails(id);
    }
    async getLast(id) {
        const rentals = await this.rentalService.findAllById(id);
        return rentals.length > 0 ? rentals[rentals.length - 1] : null;
    }
    findOne(id) {
        return this.rentalService.findOne(id);
    }
    update(id, updateRentalDto) {
        return this.rentalService.update(id, updateRentalDto);
    }
    remove(id) {
        return this.rentalService.remove(id);
    }
};
exports.RentalController = RentalController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rental_dto_1.CreateRentalDto]),
    __metadata("design:returntype", void 0)
], RentalController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RentalController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/all/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RentalController.prototype, "getAllByUser", null);
__decorate([
    (0, common_1.Get)('/completeInfo/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RentalController.prototype, "getRentalWithDetails", null);
__decorate([
    (0, common_1.Get)('/last/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RentalController.prototype, "getLast", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RentalController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_rental_dto_1.UpdateRentalDto]),
    __metadata("design:returntype", void 0)
], RentalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RentalController.prototype, "remove", null);
exports.RentalController = RentalController = __decorate([
    (0, common_1.Controller)('rental'),
    __metadata("design:paramtypes", [rental_service_1.RentalService])
], RentalController);
//# sourceMappingURL=rental.controller.js.map