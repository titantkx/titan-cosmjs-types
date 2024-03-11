/* eslint-disable */
import { Params } from "./params";
import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "titan.validatorreward";
/** GenesisState defines the validatorreward module's genesis state. */
export interface GenesisState {
  params: Params;
  /**
   * last_distribute_time is the last block time when the validator reward is
   * distributed.
   */
  lastDistributeTime?: Timestamp;
}
/** TimestampProto is a wrapper around google.protobuf.Timestamp. */
export interface TimestampProto {
  timestamp?: Timestamp;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    lastDistributeTime: undefined,
  };
}
export const GenesisState = {
  typeUrl: "/titan.validatorreward.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastDistributeTime !== undefined) {
      Timestamp.encode(message.lastDistributeTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastDistributeTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (isSet(object.lastDistributeTime))
      obj.lastDistributeTime = fromJsonTimestamp(object.lastDistributeTime);
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.lastDistributeTime !== undefined &&
      (obj.lastDistributeTime = fromTimestamp(message.lastDistributeTime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    if (object.lastDistributeTime !== undefined && object.lastDistributeTime !== null) {
      message.lastDistributeTime = Timestamp.fromPartial(object.lastDistributeTime);
    }
    return message;
  },
};
function createBaseTimestampProto(): TimestampProto {
  return {
    timestamp: undefined,
  };
}
export const TimestampProto = {
  typeUrl: "/titan.validatorreward.TimestampProto",
  encode(message: TimestampProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TimestampProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TimestampProto {
    const obj = createBaseTimestampProto();
    if (isSet(object.timestamp)) obj.timestamp = fromJsonTimestamp(object.timestamp);
    return obj;
  },
  toJSON(message: TimestampProto): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TimestampProto>, I>>(object: I): TimestampProto {
    const message = createBaseTimestampProto();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    return message;
  },
};
