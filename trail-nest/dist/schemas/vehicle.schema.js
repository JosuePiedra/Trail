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
exports.VehicleSchema = exports.Vehicle = exports.StateType = exports.VehicleType = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var VehicleType;
(function (VehicleType) {
    VehicleType["bicycle"] = "bicycle";
    VehicleType["scooter"] = "scooter";
})(VehicleType || (exports.VehicleType = VehicleType = {}));
var StateType;
(function (StateType) {
    StateType["available"] = "available";
    StateType["inUse"] = "inUse";
    StateType["maintenance"] = "maintenance";
})(StateType || (exports.StateType = StateType = {}));
let Vehicle = class Vehicle {
};
exports.Vehicle = Vehicle;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: VehicleType,
    }),
    __metadata("design:type", String)
], Vehicle.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: StateType,
    }),
    __metadata("design:type", String)
], Vehicle.prototype, "state", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Vehicle.prototype, "model", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Vehicle.prototype, "manufacturer", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Vehicle.prototype, "manufacturingAge", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Number)
], Vehicle.prototype, "maxVelocity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Vehicle.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Number)
], Vehicle.prototype, "battery", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Vehicle.prototype, "lastMaintenance", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], Vehicle.prototype, "img", void 0);
exports.Vehicle = Vehicle = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], Vehicle);
exports.VehicleSchema = mongoose_1.SchemaFactory.createForClass(Vehicle);
//# sourceMappingURL=vehicle.schema.js.map