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
exports.RentStatsSchema = exports.RentStats = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
let RentStats = class RentStats {
};
exports.RentStats = RentStats;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], RentStats.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], RentStats.prototype, "rentalId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], RentStats.prototype, "distance", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], RentStats.prototype, "bateryStart", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], RentStats.prototype, "bateryEnd", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], RentStats.prototype, "velocity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], RentStats.prototype, "needsMaintance", void 0);
exports.RentStats = RentStats = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], RentStats);
exports.RentStatsSchema = mongoose_1.SchemaFactory.createForClass(RentStats);
//# sourceMappingURL=rent-stats.schema.js.map