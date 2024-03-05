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
import { StationService } from './station.service';
import { CreateStationDto } from 'src/dto/create-station.dto';
import { UpdateStationDto } from 'src/dto/update-station.dto';
export declare class StationController {
    private stationService;
    constructor(stationService: StationService);
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../schemas/station.schema").Station> & import("../schemas/station.schema").Station & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("../schemas/station.schema").Station> & import("../schemas/station.schema").Station & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../schemas/station.schema").Station, "find">;
    getOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/station.schema").Station> & import("../schemas/station.schema").Station & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createStation(body: CreateStationDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/station.schema").Station> & import("../schemas/station.schema").Station & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addVehicle(stationId: string, vehicleId: string): Promise<import("../schemas/station.schema").Station>;
    deleteStation(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/station.schema").Station> & import("../schemas/station.schema").Station & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateStation(id: string, body: UpdateStationDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/station.schema").Station> & import("../schemas/station.schema").Station & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
