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
import { RentalService } from './rental.service';
import { CreateRentalDto } from 'src/dto/create-rental.dto';
import { UpdateRentalDto } from 'src/dto/update-rental.dto';
export declare class RentalController {
    private readonly rentalService;
    constructor(rentalService: RentalService);
    create(createRentalDto: CreateRentalDto): Promise<import("../schemas/rental.schema").Rental>;
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../schemas/rental.schema").Rental> & import("../schemas/rental.schema").Rental & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("../schemas/rental.schema").Rental> & import("../schemas/rental.schema").Rental & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../schemas/rental.schema").Rental, "find">;
    getAllByUser(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/rental.schema").Rental> & import("../schemas/rental.schema").Rental & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getRentalWithDetails(id: string): Promise<import("../schemas/rental.schema").Rental>;
    getLast(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/rental.schema").Rental> & import("../schemas/rental.schema").Rental & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOne(id: string): Promise<import("../schemas/rental.schema").Rental>;
    update(id: string, updateRentalDto: UpdateRentalDto): Promise<import("../schemas/rental.schema").Rental>;
    remove(id: string): Promise<import("../schemas/rental.schema").Rental>;
}
