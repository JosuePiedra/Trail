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
import { Station } from '../schemas/station.schema';
import { Model } from 'mongoose';
import { CreateStationDto } from '../dto/create-station.dto';
import { UpdateStationDto } from '../dto/update-station.dto';
export declare class StationService {
    private stationModel;
    constructor(stationModel: Model<Station>);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Station> & Station & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, Station> & Station & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Station, "find">;
    create(createStation: CreateStationDto): Promise<import("mongoose").Document<unknown, {}, Station> & Station & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Station> & Station & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, Station> & Station & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, station: UpdateStationDto): Promise<import("mongoose").Document<unknown, {}, Station> & Station & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addVehicleToStation(stationId: string, vehicleId: string): Promise<Station>;
}
