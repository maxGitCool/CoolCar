import * as $protobuf from "protobufjs";
// Common aliases
var $Reader = $protobuf.Reader, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const CoolCar = $root.CoolCar = (function() {

    /**
     * Namespace CoolCar.
     * @$root CoolCar
     * @namespace
     */
    var CoolCar = {};

    CoolCar.Location = (function() {

        /**
         * Properties of a Location.
         * @memberof CoolCar
         * @interface ILocation
         * @property {number|null} [latitude] Location latitude
         * @property {number|null} [longitude] Location longitude
         */

        /**
         * Constructs a new Location.
         * @memberof CoolCar
         * @classdesc Represents a Location.
         * @implements ILocation
         * @constructor
         * @param {CoolCar.ILocation=} [properties] Properties to set
         */
        function Location(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Location latitude.
         * @member {number} latitude
         * @memberof CoolCar.Location
         * @instance
         */
        Location.prototype.latitude = 0;

        /**
         * Location longitude.
         * @member {number} longitude
         * @memberof CoolCar.Location
         * @instance
         */
        Location.prototype.longitude = 0;

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @function decode
         * @memberof CoolCar.Location
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CoolCar.Location} Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Location.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CoolCar.Location();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.latitude = reader.double();
                    break;
                case 2:
                    message.longitude = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CoolCar.Location
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CoolCar.Location} Location
         */
        Location.fromObject = function fromObject(object) {
            if (object instanceof $root.CoolCar.Location)
                return object;
            var message = new $root.CoolCar.Location();
            if (object.latitude != null)
                message.latitude = Number(object.latitude);
            if (object.longitude != null)
                message.longitude = Number(object.longitude);
            return message;
        };

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CoolCar.Location
         * @static
         * @param {CoolCar.Location} message Location
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Location.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.latitude = 0;
                object.longitude = 0;
            }
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
            return object;
        };

        /**
         * Converts this Location to JSON.
         * @function toJSON
         * @memberof CoolCar.Location
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Location.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Location;
    })();

    /**
     * TripStatus enum.
     * @name CoolCar.TripStatus
     * @enum {number}
     * @property {number} TS_NOT_SPECIFIED=0 TS_NOT_SPECIFIED value
     * @property {number} NOT_STATED=1 NOT_STATED value
     * @property {number} IN_PROCESS=2 IN_PROCESS value
     * @property {number} FINISHED=3 FINISHED value
     * @property {number} PAID=4 PAID value
     */
    CoolCar.TripStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TS_NOT_SPECIFIED"] = 0;
        values[valuesById[1] = "NOT_STATED"] = 1;
        values[valuesById[2] = "IN_PROCESS"] = 2;
        values[valuesById[3] = "FINISHED"] = 3;
        values[valuesById[4] = "PAID"] = 4;
        return values;
    })();

    CoolCar.Trip = (function() {

        /**
         * Properties of a Trip.
         * @memberof CoolCar
         * @interface ITrip
         * @property {string|null} [start] Trip start
         * @property {string|null} [end] Trip end
         * @property {number|null} [durationSec] Trip durationSec
         * @property {number|null} [feeCent] Trip feeCent
         * @property {CoolCar.ILocation|null} [startPos] Trip startPos
         * @property {CoolCar.ILocation|null} [endPos] Trip endPos
         * @property {Array.<CoolCar.ILocation>|null} [pathLocations] Trip pathLocations
         * @property {CoolCar.TripStatus|null} [status] Trip status
         */

        /**
         * Constructs a new Trip.
         * @memberof CoolCar
         * @classdesc Represents a Trip.
         * @implements ITrip
         * @constructor
         * @param {CoolCar.ITrip=} [properties] Properties to set
         */
        function Trip(properties) {
            this.pathLocations = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Trip start.
         * @member {string} start
         * @memberof CoolCar.Trip
         * @instance
         */
        Trip.prototype.start = "";

        /**
         * Trip end.
         * @member {string} end
         * @memberof CoolCar.Trip
         * @instance
         */
        Trip.prototype.end = "";

        /**
         * Trip durationSec.
         * @member {number} durationSec
         * @memberof CoolCar.Trip
         * @instance
         */
        Trip.prototype.durationSec = 0;

        /**
         * Trip feeCent.
         * @member {number} feeCent
         * @memberof CoolCar.Trip
         * @instance
         */
        Trip.prototype.feeCent = 0;

        /**
         * Trip startPos.
         * @member {CoolCar.ILocation|null|undefined} startPos
         * @memberof CoolCar.Trip
         * @instance
         */
        Trip.prototype.startPos = null;

        /**
         * Trip endPos.
         * @member {CoolCar.ILocation|null|undefined} endPos
         * @memberof CoolCar.Trip
         * @instance
         */
        Trip.prototype.endPos = null;

        /**
         * Trip pathLocations.
         * @member {Array.<CoolCar.ILocation>} pathLocations
         * @memberof CoolCar.Trip
         * @instance
         */
        Trip.prototype.pathLocations = $util.emptyArray;

        /**
         * Trip status.
         * @member {CoolCar.TripStatus} status
         * @memberof CoolCar.Trip
         * @instance
         */
        Trip.prototype.status = 0;

        /**
         * Decodes a Trip message from the specified reader or buffer.
         * @function decode
         * @memberof CoolCar.Trip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CoolCar.Trip} Trip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Trip.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CoolCar.Trip();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.start = reader.string();
                    break;
                case 2:
                    message.end = reader.string();
                    break;
                case 3:
                    message.durationSec = reader.int32();
                    break;
                case 4:
                    message.feeCent = reader.int32();
                    break;
                case 5:
                    message.startPos = $root.CoolCar.Location.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.endPos = $root.CoolCar.Location.decode(reader, reader.uint32());
                    break;
                case 7:
                    if (!(message.pathLocations && message.pathLocations.length))
                        message.pathLocations = [];
                    message.pathLocations.push($root.CoolCar.Location.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a Trip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CoolCar.Trip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CoolCar.Trip} Trip
         */
        Trip.fromObject = function fromObject(object) {
            if (object instanceof $root.CoolCar.Trip)
                return object;
            var message = new $root.CoolCar.Trip();
            if (object.start != null)
                message.start = String(object.start);
            if (object.end != null)
                message.end = String(object.end);
            if (object.durationSec != null)
                message.durationSec = object.durationSec | 0;
            if (object.feeCent != null)
                message.feeCent = object.feeCent | 0;
            if (object.startPos != null) {
                if (typeof object.startPos !== "object")
                    throw TypeError(".CoolCar.Trip.startPos: object expected");
                message.startPos = $root.CoolCar.Location.fromObject(object.startPos);
            }
            if (object.endPos != null) {
                if (typeof object.endPos !== "object")
                    throw TypeError(".CoolCar.Trip.endPos: object expected");
                message.endPos = $root.CoolCar.Location.fromObject(object.endPos);
            }
            if (object.pathLocations) {
                if (!Array.isArray(object.pathLocations))
                    throw TypeError(".CoolCar.Trip.pathLocations: array expected");
                message.pathLocations = [];
                for (var i = 0; i < object.pathLocations.length; ++i) {
                    if (typeof object.pathLocations[i] !== "object")
                        throw TypeError(".CoolCar.Trip.pathLocations: object expected");
                    message.pathLocations[i] = $root.CoolCar.Location.fromObject(object.pathLocations[i]);
                }
            }
            switch (object.status) {
            case "TS_NOT_SPECIFIED":
            case 0:
                message.status = 0;
                break;
            case "NOT_STATED":
            case 1:
                message.status = 1;
                break;
            case "IN_PROCESS":
            case 2:
                message.status = 2;
                break;
            case "FINISHED":
            case 3:
                message.status = 3;
                break;
            case "PAID":
            case 4:
                message.status = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Trip message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CoolCar.Trip
         * @static
         * @param {CoolCar.Trip} message Trip
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Trip.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.pathLocations = [];
            if (options.defaults) {
                object.start = "";
                object.end = "";
                object.durationSec = 0;
                object.feeCent = 0;
                object.startPos = null;
                object.endPos = null;
                object.status = options.enums === String ? "TS_NOT_SPECIFIED" : 0;
            }
            if (message.start != null && message.hasOwnProperty("start"))
                object.start = message.start;
            if (message.end != null && message.hasOwnProperty("end"))
                object.end = message.end;
            if (message.durationSec != null && message.hasOwnProperty("durationSec"))
                object.durationSec = message.durationSec;
            if (message.feeCent != null && message.hasOwnProperty("feeCent"))
                object.feeCent = message.feeCent;
            if (message.startPos != null && message.hasOwnProperty("startPos"))
                object.startPos = $root.CoolCar.Location.toObject(message.startPos, options);
            if (message.endPos != null && message.hasOwnProperty("endPos"))
                object.endPos = $root.CoolCar.Location.toObject(message.endPos, options);
            if (message.pathLocations && message.pathLocations.length) {
                object.pathLocations = [];
                for (var j = 0; j < message.pathLocations.length; ++j)
                    object.pathLocations[j] = $root.CoolCar.Location.toObject(message.pathLocations[j], options);
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.CoolCar.TripStatus[message.status] : message.status;
            return object;
        };

        /**
         * Converts this Trip to JSON.
         * @function toJSON
         * @memberof CoolCar.Trip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Trip.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Trip;
    })();

    CoolCar.GetTripRequest = (function() {

        /**
         * Properties of a GetTripRequest.
         * @memberof CoolCar
         * @interface IGetTripRequest
         * @property {string|null} [id] GetTripRequest id
         */

        /**
         * Constructs a new GetTripRequest.
         * @memberof CoolCar
         * @classdesc Represents a GetTripRequest.
         * @implements IGetTripRequest
         * @constructor
         * @param {CoolCar.IGetTripRequest=} [properties] Properties to set
         */
        function GetTripRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTripRequest id.
         * @member {string} id
         * @memberof CoolCar.GetTripRequest
         * @instance
         */
        GetTripRequest.prototype.id = "";

        /**
         * Decodes a GetTripRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CoolCar.GetTripRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CoolCar.GetTripRequest} GetTripRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTripRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CoolCar.GetTripRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a GetTripRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CoolCar.GetTripRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CoolCar.GetTripRequest} GetTripRequest
         */
        GetTripRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CoolCar.GetTripRequest)
                return object;
            var message = new $root.CoolCar.GetTripRequest();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a GetTripRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CoolCar.GetTripRequest
         * @static
         * @param {CoolCar.GetTripRequest} message GetTripRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTripRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this GetTripRequest to JSON.
         * @function toJSON
         * @memberof CoolCar.GetTripRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTripRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTripRequest;
    })();

    CoolCar.GetTripResponse = (function() {

        /**
         * Properties of a GetTripResponse.
         * @memberof CoolCar
         * @interface IGetTripResponse
         * @property {string|null} [id] GetTripResponse id
         * @property {CoolCar.ITrip|null} [trip] GetTripResponse trip
         */

        /**
         * Constructs a new GetTripResponse.
         * @memberof CoolCar
         * @classdesc Represents a GetTripResponse.
         * @implements IGetTripResponse
         * @constructor
         * @param {CoolCar.IGetTripResponse=} [properties] Properties to set
         */
        function GetTripResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTripResponse id.
         * @member {string} id
         * @memberof CoolCar.GetTripResponse
         * @instance
         */
        GetTripResponse.prototype.id = "";

        /**
         * GetTripResponse trip.
         * @member {CoolCar.ITrip|null|undefined} trip
         * @memberof CoolCar.GetTripResponse
         * @instance
         */
        GetTripResponse.prototype.trip = null;

        /**
         * Decodes a GetTripResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CoolCar.GetTripResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CoolCar.GetTripResponse} GetTripResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTripResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CoolCar.GetTripResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.trip = $root.CoolCar.Trip.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Creates a GetTripResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CoolCar.GetTripResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CoolCar.GetTripResponse} GetTripResponse
         */
        GetTripResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CoolCar.GetTripResponse)
                return object;
            var message = new $root.CoolCar.GetTripResponse();
            if (object.id != null)
                message.id = String(object.id);
            if (object.trip != null) {
                if (typeof object.trip !== "object")
                    throw TypeError(".CoolCar.GetTripResponse.trip: object expected");
                message.trip = $root.CoolCar.Trip.fromObject(object.trip);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetTripResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CoolCar.GetTripResponse
         * @static
         * @param {CoolCar.GetTripResponse} message GetTripResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTripResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.trip = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.trip != null && message.hasOwnProperty("trip"))
                object.trip = $root.CoolCar.Trip.toObject(message.trip, options);
            return object;
        };

        /**
         * Converts this GetTripResponse to JSON.
         * @function toJSON
         * @memberof CoolCar.GetTripResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTripResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTripResponse;
    })();

    CoolCar.TripService = (function() {

        /**
         * Constructs a new TripService service.
         * @memberof CoolCar
         * @classdesc Represents a TripService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function TripService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (TripService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TripService;

        /**
         * Callback as used by {@link CoolCar.TripService#getTrip}.
         * @memberof CoolCar.TripService
         * @typedef GetTripCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CoolCar.GetTripResponse} [response] GetTripResponse
         */

        /**
         * Calls GetTrip.
         * @function getTrip
         * @memberof CoolCar.TripService
         * @instance
         * @param {CoolCar.IGetTripRequest} request GetTripRequest message or plain object
         * @param {CoolCar.TripService.GetTripCallback} callback Node-style callback called with the error, if any, and GetTripResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TripService.prototype.getTrip = function getTrip(request, callback) {
            return this.rpcCall(getTrip, $root.CoolCar.GetTripRequest, $root.CoolCar.GetTripResponse, request, callback);
        }, "name", { value: "GetTrip" });

        /**
         * Calls GetTrip.
         * @function getTrip
         * @memberof CoolCar.TripService
         * @instance
         * @param {CoolCar.IGetTripRequest} request GetTripRequest message or plain object
         * @returns {Promise<CoolCar.GetTripResponse>} Promise
         * @variation 2
         */

        return TripService;
    })();

    return CoolCar;
})();