/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../helpers";
export const protobufPackage = "titan.nftmint";
/** MsgCreateClass represents a message to create new class. */
export interface MsgCreateClass {
  creator: string;
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uriHash: string;
  data: string;
}
/** MsgCreateClassResponse defines the Msg/CreateClass response type. */
export interface MsgCreateClassResponse {
  id: string;
}
/** MsgUpdateClass represents a message to update a class. */
export interface MsgUpdateClass {
  creator: string;
  id: string;
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uriHash: string;
  data: string;
}
/** MsgUpdateClassResponse defines the Msg/UpdateClass response type. */
export interface MsgUpdateClassResponse {}
/** MsgTransferClass represents a message to transfer a class to new owner. */
export interface MsgTransferClass {
  creator: string;
  classId: string;
  receiver: string;
}
/** MsgTransferClassResponse defines the Msg/TransferClass response type. */
export interface MsgTransferClassResponse {}
/** MsgMint represents a message to mint new NFT. */
export interface MsgMint {
  creator: string;
  receiver: string;
  classId: string;
  uri: string;
  uriHash: string;
  data: string;
}
/** MsgMintResponse defines the Msg/Mint response type. */
export interface MsgMintResponse {
  id: string;
}
function createBaseMsgCreateClass(): MsgCreateClass {
  return {
    creator: "",
    name: "",
    symbol: "",
    description: "",
    uri: "",
    uriHash: "",
    data: "",
  };
}
export const MsgCreateClass = {
  typeUrl: "/titan.nftmint.MsgCreateClass",
  encode(message: MsgCreateClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(50).string(message.uriHash);
    }
    if (message.data !== "") {
      writer.uint32(58).string(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.uri = reader.string();
          break;
        case 6:
          message.uriHash = reader.string();
          break;
        case 7:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateClass {
    const obj = createBaseMsgCreateClass();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.symbol)) obj.symbol = String(object.symbol);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.uri)) obj.uri = String(object.uri);
    if (isSet(object.uriHash)) obj.uriHash = String(object.uriHash);
    if (isSet(object.data)) obj.data = String(object.data);
    return obj;
  },
  toJSON(message: MsgCreateClass): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.description !== undefined && (obj.description = message.description);
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateClass>, I>>(object: I): MsgCreateClass {
    const message = createBaseMsgCreateClass();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data ?? "";
    return message;
  },
};
function createBaseMsgCreateClassResponse(): MsgCreateClassResponse {
  return {
    id: "",
  };
}
export const MsgCreateClassResponse = {
  typeUrl: "/titan.nftmint.MsgCreateClassResponse",
  encode(message: MsgCreateClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  },
  fromJSON(object: any): MsgCreateClassResponse {
    const obj = createBaseMsgCreateClassResponse();
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  toJSON(message: MsgCreateClassResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateClassResponse>, I>>(object: I): MsgCreateClassResponse {
    const message = createBaseMsgCreateClassResponse();
    message.id = object.id ?? "";
    return message;
  },
};
function createBaseMsgUpdateClass(): MsgUpdateClass {
  return {
    creator: "",
    id: "",
    name: "",
    symbol: "",
    description: "",
    uri: "",
    uriHash: "",
    data: "",
  };
}
export const MsgUpdateClass = {
  typeUrl: "/titan.nftmint.MsgUpdateClass",
  encode(message: MsgUpdateClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(50).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(58).string(message.uriHash);
    }
    if (message.data !== "") {
      writer.uint32(66).string(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.symbol = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.uri = reader.string();
          break;
        case 7:
          message.uriHash = reader.string();
          break;
        case 8:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateClass {
    const obj = createBaseMsgUpdateClass();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.symbol)) obj.symbol = String(object.symbol);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.uri)) obj.uri = String(object.uri);
    if (isSet(object.uriHash)) obj.uriHash = String(object.uriHash);
    if (isSet(object.data)) obj.data = String(object.data);
    return obj;
  },
  toJSON(message: MsgUpdateClass): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.description !== undefined && (obj.description = message.description);
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateClass>, I>>(object: I): MsgUpdateClass {
    const message = createBaseMsgUpdateClass();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data ?? "";
    return message;
  },
};
function createBaseMsgUpdateClassResponse(): MsgUpdateClassResponse {
  return {};
}
export const MsgUpdateClassResponse = {
  typeUrl: "/titan.nftmint.MsgUpdateClassResponse",
  encode(_: MsgUpdateClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateClassResponse {
    const obj = createBaseMsgUpdateClassResponse();
    return obj;
  },
  toJSON(_: MsgUpdateClassResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateClassResponse>, I>>(_: I): MsgUpdateClassResponse {
    const message = createBaseMsgUpdateClassResponse();
    return message;
  },
};
function createBaseMsgTransferClass(): MsgTransferClass {
  return {
    creator: "",
    classId: "",
    receiver: "",
  };
}
export const MsgTransferClass = {
  typeUrl: "/titan.nftmint.MsgTransferClass",
  encode(message: MsgTransferClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTransferClass {
    const obj = createBaseMsgTransferClass();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    return obj;
  },
  toJSON(message: MsgTransferClass): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTransferClass>, I>>(object: I): MsgTransferClass {
    const message = createBaseMsgTransferClass();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
};
function createBaseMsgTransferClassResponse(): MsgTransferClassResponse {
  return {};
}
export const MsgTransferClassResponse = {
  typeUrl: "/titan.nftmint.MsgTransferClassResponse",
  encode(_: MsgTransferClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgTransferClassResponse {
    const obj = createBaseMsgTransferClassResponse();
    return obj;
  },
  toJSON(_: MsgTransferClassResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTransferClassResponse>, I>>(_: I): MsgTransferClassResponse {
    const message = createBaseMsgTransferClassResponse();
    return message;
  },
};
function createBaseMsgMint(): MsgMint {
  return {
    creator: "",
    receiver: "",
    classId: "",
    uri: "",
    uriHash: "",
    data: "",
  };
}
export const MsgMint = {
  typeUrl: "/titan.nftmint.MsgMint",
  encode(message: MsgMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.classId !== "") {
      writer.uint32(26).string(message.classId);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(42).string(message.uriHash);
    }
    if (message.data !== "") {
      writer.uint32(50).string(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.classId = reader.string();
          break;
        case 4:
          message.uri = reader.string();
          break;
        case 5:
          message.uriHash = reader.string();
          break;
        case 6:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMint {
    const obj = createBaseMsgMint();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.uri)) obj.uri = String(object.uri);
    if (isSet(object.uriHash)) obj.uriHash = String(object.uriHash);
    if (isSet(object.data)) obj.data = String(object.data);
    return obj;
  },
  toJSON(message: MsgMint): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.classId !== undefined && (obj.classId = message.classId);
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMint>, I>>(object: I): MsgMint {
    const message = createBaseMsgMint();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.classId = object.classId ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data ?? "";
    return message;
  },
};
function createBaseMsgMintResponse(): MsgMintResponse {
  return {
    id: "",
  };
}
export const MsgMintResponse = {
  typeUrl: "/titan.nftmint.MsgMintResponse",
  encode(message: MsgMintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
  },
  fromJSON(object: any): MsgMintResponse {
    const obj = createBaseMsgMintResponse();
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  toJSON(message: MsgMintResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMintResponse>, I>>(object: I): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    message.id = object.id ?? "";
    return message;
  },
};
/** Msg defines the Msg service. */
export interface Msg {
  /** CreateClass defines a method to create new class. */
  CreateClass(request: MsgCreateClass): Promise<MsgCreateClassResponse>;
  /** UpdateClass defines a method to update a class. */
  UpdateClass(request: MsgUpdateClass): Promise<MsgUpdateClassResponse>;
  /** TransferClass defines a method to transfer a class to new owner. */
  TransferClass(request: MsgTransferClass): Promise<MsgTransferClassResponse>;
  /** Mint defines a method to mint new NFT. */
  Mint(request: MsgMint): Promise<MsgMintResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateClass = this.CreateClass.bind(this);
    this.UpdateClass = this.UpdateClass.bind(this);
    this.TransferClass = this.TransferClass.bind(this);
    this.Mint = this.Mint.bind(this);
  }
  CreateClass(request: MsgCreateClass): Promise<MsgCreateClassResponse> {
    const data = MsgCreateClass.encode(request).finish();
    const promise = this.rpc.request("titan.nftmint.Msg", "CreateClass", data);
    return promise.then((data) => MsgCreateClassResponse.decode(new BinaryReader(data)));
  }
  UpdateClass(request: MsgUpdateClass): Promise<MsgUpdateClassResponse> {
    const data = MsgUpdateClass.encode(request).finish();
    const promise = this.rpc.request("titan.nftmint.Msg", "UpdateClass", data);
    return promise.then((data) => MsgUpdateClassResponse.decode(new BinaryReader(data)));
  }
  TransferClass(request: MsgTransferClass): Promise<MsgTransferClassResponse> {
    const data = MsgTransferClass.encode(request).finish();
    const promise = this.rpc.request("titan.nftmint.Msg", "TransferClass", data);
    return promise.then((data) => MsgTransferClassResponse.decode(new BinaryReader(data)));
  }
  Mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("titan.nftmint.Msg", "Mint", data);
    return promise.then((data) => MsgMintResponse.decode(new BinaryReader(data)));
  }
}
