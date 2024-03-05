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
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CreateRenStatslDto } from 'src/dto/create-rent-stats.dto';
import { UpdateRentStatsDto } from 'src/dto/update-rent-stats.dto';
import { RentStats } from 'src/schemas/rent-stats.schema';
export declare class RentStatsService {
    private vehicleModel;
    constructor(vehicleModel: Model<RentStats>);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, RentStats> & RentStats & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, RentStats> & RentStats & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, RentStats, "find">;
    create(createStation: CreateRenStatslDto): Promise<import("mongoose").Document<unknown, {}, RentStats> & RentStats & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, RentStats> & RentStats & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, RentStats> & RentStats & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, station: UpdateRentStatsDto): Promise<import("mongoose").Document<unknown, {}, RentStats> & RentStats & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
