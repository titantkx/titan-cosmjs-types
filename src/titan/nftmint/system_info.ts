/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "titan.nftmint";
/** SystemInfo defines the system info of this module. */
export interface SystemInfo {
  /**
   * next_class_id is the unique identifier of the next class that will be
   * created.
   */
  nextClassId: bigint;
}
function createBaseSystemInfo(): SystemInfo {
  return {
    nextClassId: BigInt(0),
  };
}
export const SystemInfo = {
  typeUrl: "/titan.nftmint.SystemInfo",
  encode(message: SystemInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextClassId !== BigInt(0)) {
      writer.uint32(8).uint64(message.nextClassId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SystemInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextClassId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SystemInfo {
    const obj = createBaseSystemInfo();
    if (isSet(object.nextClassId)) obj.nextClassId = BigInt(object.nextClassId.toString());
    return obj;
  },
  toJSON(message: SystemInfo): unknown {
    const obj: any = {};
    message.nextClassId !== undefined && (obj.nextClassId = (message.nextClassId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SystemInfo>, I>>(object: I): SystemInfo {
    const message = createBaseSystemInfo();
    if (object.nextClassId !== undefined && object.nextClassId !== null) {
      message.nextClassId = BigInt(object.nextClassId.toString());
    }
    return message;
  },
};
