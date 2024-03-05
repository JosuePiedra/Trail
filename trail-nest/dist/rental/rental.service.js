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
exports.RentalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const rental_schema_1 = require("../schemas/rental.schema");
let RentalService = class RentalService {
    constructor(rentalModel) {
        this.rentalModel = rentalModel;
    }
    async create(createRentalDto) {
        const newRental = new this.rentalModel(createRentalDto);
        return newRental.save();
    }
    findAll() {
        return this.rentalModel.find();
    }
    async findOne(id) {
        return this.rentalModel.findById(id).exec();
    }
    async update(id, updateRentalDto) {
        return this.rentalModel
            .findByIdAndUpdate(id, updateRentalDto, { new: true })
            .exec();
    }
    async remove(id) {
        return this.rentalModel.findByIdAndDelete(id).exec();
    }
    async findAllById(id) {
        return this.rentalModel.find({ userId: id });
    }
    async findRentalWithDetails(id) {
        return this.rentalModel.findById(id)
            .populate('vehicleId')
            .populate('pickupStation')
            .exec();
    }
};
exports.RentalService = RentalService;
exports.RentalService = RentalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(rental_schema_1.Rental.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RentalService);
//# sourceMappingURL=rental.service.js.map