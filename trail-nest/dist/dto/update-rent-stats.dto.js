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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRentStatsDto = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
class UpdateRentStatsDto {
}
exports.UpdateRentStatsDto = UpdateRentStatsDto;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateRentStatsDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", mongoose_1.default.Schema.Types.ObjectId)
], UpdateRentStatsDto.prototype, "rentalId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateRentStatsDto.prototype, "distance", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateRentStatsDto.prototype, "bateryStart", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateRentStatsDto.prototype, "bateryEnd", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateRentStatsDto.prototype, "velocity", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateRentStatsDto.prototype, "needsMaintance", void 0);
//# sourceMappingURL=update-rent-stats.dto.js.map