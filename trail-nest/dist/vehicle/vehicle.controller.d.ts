/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from 'src/dto/create-vehicle.dto';
import { UpdateVehicleDto } from 'src/dto/update-vehicle.dto';
export declare class VehicleController {
    private vehicleService;
    constructor(vehicleService: VehicleService);
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../schemas/vehicle.schema").Vehicle> & import("../schemas/vehicle.schema").Vehicle & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("../schemas/vehicle.schema").Vehicle> & import("../schemas/vehicle.schema").Vehicle & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../schemas/vehicle.schema").Vehicle, "find">;
    getOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/vehicle.schema").Vehicle> & import("../schemas/vehicle.schema").Vehicle & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createStation(body: CreateVehicleDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/vehicle.schema").Vehicle> & import("../schemas/vehicle.schema").Vehicle & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteStation(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/vehicle.schema").Vehicle> & import("../schemas/vehicle.schema").Vehicle & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateStation(id: string, body: UpdateVehicleDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/vehicle.schema").Vehicle> & import("../schemas/vehicle.schema").Vehicle & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
