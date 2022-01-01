import * as $protobuf from "protobufjs";
/** Namespace CoolCar. */
export namespace CoolCar {

    /** Properties of a Location. */
    interface ILocation {

        /** Location Latitude */
        Latitude?: (number|null);

        /** Location longitude */
        longitude?: (number|null);
    }

    /** Represents a Location. */
    class Location implements ILocation {

        /**
         * Constructs a new Location.
         * @param [properties] Properties to set
         */
        constructor(properties?: CoolCar.ILocation);

        /** Location Latitude. */
        public Latitude: number;

        /** Location longitude. */
        public longitude: number;

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CoolCar.Location;

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Location
         */
        public static fromObject(object: { [k: string]: any }): CoolCar.Location;

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @param message Location
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CoolCar.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Location to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** TripStatus enum. */
    enum TripStatus {
        TS_NOT_SPECIFIED = 0,
        NOT_STATED = 1,
        IN_PROCESS = 2,
        FINISHED = 3,
        PAID = 4
    }

    /** Properties of a Trip. */
    interface ITrip {

        /** Trip start */
        start?: (string|null);

        /** Trip end */
        end?: (string|null);

        /** Trip durationSec */
        durationSec?: (number|null);

        /** Trip feeCent */
        feeCent?: (number|null);

        /** Trip startPos */
        startPos?: (CoolCar.ILocation|null);

        /** Trip endPos */
        endPos?: (CoolCar.ILocation|null);

        /** Trip pathLocations */
        pathLocations?: (CoolCar.ILocation[]|null);

        /** Trip status */
        status?: (CoolCar.TripStatus|null);
    }

    /** Represents a Trip. */
    class Trip implements ITrip {

        /**
         * Constructs a new Trip.
         * @param [properties] Properties to set
         */
        constructor(properties?: CoolCar.ITrip);

        /** Trip start. */
        public start: string;

        /** Trip end. */
        public end: string;

        /** Trip durationSec. */
        public durationSec: number;

        /** Trip feeCent. */
        public feeCent: number;

        /** Trip startPos. */
        public startPos?: (CoolCar.ILocation|null);

        /** Trip endPos. */
        public endPos?: (CoolCar.ILocation|null);

        /** Trip pathLocations. */
        public pathLocations: CoolCar.ILocation[];

        /** Trip status. */
        public status: CoolCar.TripStatus;

        /**
         * Decodes a Trip message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Trip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CoolCar.Trip;

        /**
         * Creates a Trip message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Trip
         */
        public static fromObject(object: { [k: string]: any }): CoolCar.Trip;

        /**
         * Creates a plain object from a Trip message. Also converts values to other types if specified.
         * @param message Trip
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CoolCar.Trip, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Trip to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTripRequest. */
    interface IGetTripRequest {

        /** GetTripRequest id */
        id?: (string|null);
    }

    /** Represents a GetTripRequest. */
    class GetTripRequest implements IGetTripRequest {

        /**
         * Constructs a new GetTripRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: CoolCar.IGetTripRequest);

        /** GetTripRequest id. */
        public id: string;

        /**
         * Decodes a GetTripRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTripRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CoolCar.GetTripRequest;

        /**
         * Creates a GetTripRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTripRequest
         */
        public static fromObject(object: { [k: string]: any }): CoolCar.GetTripRequest;

        /**
         * Creates a plain object from a GetTripRequest message. Also converts values to other types if specified.
         * @param message GetTripRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CoolCar.GetTripRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTripRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTripResponse. */
    interface IGetTripResponse {

        /** GetTripResponse id */
        id?: (string|null);

        /** GetTripResponse trip */
        trip?: (CoolCar.ITrip|null);
    }

    /** Represents a GetTripResponse. */
    class GetTripResponse implements IGetTripResponse {

        /**
         * Constructs a new GetTripResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: CoolCar.IGetTripResponse);

        /** GetTripResponse id. */
        public id: string;

        /** GetTripResponse trip. */
        public trip?: (CoolCar.ITrip|null);

        /**
         * Decodes a GetTripResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTripResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CoolCar.GetTripResponse;

        /**
         * Creates a GetTripResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTripResponse
         */
        public static fromObject(object: { [k: string]: any }): CoolCar.GetTripResponse;

        /**
         * Creates a plain object from a GetTripResponse message. Also converts values to other types if specified.
         * @param message GetTripResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CoolCar.GetTripResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTripResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a TripService */
    class TripService extends $protobuf.rpc.Service {

        /**
         * Constructs a new TripService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls GetTrip.
         * @param request GetTripRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetTripResponse
         */
        public getTrip(request: CoolCar.IGetTripRequest, callback: CoolCar.TripService.GetTripCallback): void;

        /**
         * Calls GetTrip.
         * @param request GetTripRequest message or plain object
         * @returns Promise
         */
        public getTrip(request: CoolCar.IGetTripRequest): Promise<CoolCar.GetTripResponse>;
    }

    namespace TripService {

        /**
         * Callback as used by {@link CoolCar.TripService#getTrip}.
         * @param error Error, if any
         * @param [response] GetTripResponse
         */
        type GetTripCallback = (error: (Error|null), response?: CoolCar.GetTripResponse) => void;
    }
}
