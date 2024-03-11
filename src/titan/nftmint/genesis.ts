/* eslint-disable */
import { Params } from "./params";
import { SystemInfo } from "./system_info";
import { MintingInfo } from "./minting_info";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "titan.nftmint";
/** GenesisState defines the nftmint module's genesis state. */
export interface GenesisState {
  params: Params;
  systemInfo: SystemInfo;
  mintingInfoList: MintingInfo[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    systemInfo: SystemInfo.fromPartial({}),
    mintingInfoList: [],
  };
}
export const GenesisState = {
  typeUrl: "/titan.nftmint.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.systemInfo !== undefined) {
      SystemInfo.encode(message.systemInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.mintingInfoList) {
      MintingInfo.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.systemInfo = SystemInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.mintingInfoList.push(MintingInfo.decode(reader, reader.uint32()));
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
    if (isSet(object.systemInfo)) obj.systemInfo = SystemInfo.fromJSON(object.systemInfo);
    if (Array.isArray(object?.mintingInfoList))
      obj.mintingInfoList = object.mintingInfoList.map((e: any) => MintingInfo.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.systemInfo !== undefined &&
      (obj.systemInfo = message.systemInfo ? SystemInfo.toJSON(message.systemInfo) : undefined);
    if (message.mintingInfoList) {
      obj.mintingInfoList = message.mintingInfoList.map((e) => (e ? MintingInfo.toJSON(e) : undefined));
    } else {
      obj.mintingInfoList = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    if (object.systemInfo !== undefined && object.systemInfo !== null) {
      message.systemInfo = SystemInfo.fromPartial(object.systemInfo);
    }
    message.mintingInfoList = object.mintingInfoList?.map((e) => MintingInfo.fromPartial(e)) || [];
    return message;
  },
};
