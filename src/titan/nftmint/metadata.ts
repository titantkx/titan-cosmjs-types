/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "titan.nftmint";
/** Metadata represents class's and token's metadata. */
export interface Metadata {
  data: string;
}
function createBaseMetadata(): Metadata {
  return {
    data: "",
  };
}
export const Metadata = {
  typeUrl: "/titan.nftmint.Metadata",
  encode(message: Metadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Metadata {
    const obj = createBaseMetadata();
    if (isSet(object.data)) obj.data = String(object.data);
    return obj;
  },
  toJSON(message: Metadata): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Metadata>, I>>(object: I): Metadata {
    const message = createBaseMetadata();
    message.data = object.data ?? "";
    return message;
  },
};
