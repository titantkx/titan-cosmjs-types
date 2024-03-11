/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "titan.validatorreward";
/** Params defines the parameters for the module. */
export interface Params {
  rate: string;
  authority: string;
}
function createBaseParams(): Params {
  return {
    rate: "",
    authority: "",
  };
}
export const Params = {
  typeUrl: "/titan.validatorreward.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rate !== "") {
      writer.uint32(10).string(message.rate);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = reader.string();
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.rate)) obj.rate = String(object.rate);
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.rate = object.rate ?? "";
    message.authority = object.authority ?? "";
    return message;
  },
};
