/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "titan.nftmint";
/** MintingInfo defines the minting info for a class. */
export interface MintingInfo {
  /** class_id is a unique identifier of the class. */
  classId: string;
  /** owner is the owner address of the class. */
  owner: string;
  /**
   * next_token_id is the unique identifier of the next token that will be
   * minted under this class.
   */
  nextTokenId: bigint;
}
function createBaseMintingInfo(): MintingInfo {
  return {
    classId: "",
    owner: "",
    nextTokenId: BigInt(0),
  };
}
export const MintingInfo = {
  typeUrl: "/titan.nftmint.MintingInfo",
  encode(message: MintingInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.nextTokenId !== BigInt(0)) {
      writer.uint32(24).uint64(message.nextTokenId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MintingInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.nextTokenId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MintingInfo {
    const obj = createBaseMintingInfo();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.nextTokenId)) obj.nextTokenId = BigInt(object.nextTokenId.toString());
    return obj;
  },
  toJSON(message: MintingInfo): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.nextTokenId !== undefined && (obj.nextTokenId = (message.nextTokenId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MintingInfo>, I>>(object: I): MintingInfo {
    const message = createBaseMintingInfo();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    if (object.nextTokenId !== undefined && object.nextTokenId !== null) {
      message.nextTokenId = BigInt(object.nextTokenId.toString());
    }
    return message;
  },
};
