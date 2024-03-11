/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "titan.nftmint";
/** EventCreateClass is emitted on CreateClass. */
export interface EventCreateClass {
  /** id is a unique identifier of the class. */
  id: string;
  /** owner is the owner address of the class. */
  owner: string;
}
/** EventUpdateClass is emitted on UpdateClass. */
export interface EventUpdateClass {
  /** id is a unique identifier of the class. */
  id: string;
}
/** EventTransferClass is emitted on TransferClass. */
export interface EventTransferClass {
  /** id is a unique identifier of the class. */
  id: string;
  /** old_owner is the old owner address of the class. */
  oldOwner: string;
  /** new_owner is the new owner address of the class. */
  newOwner: string;
}
function createBaseEventCreateClass(): EventCreateClass {
  return {
    id: "",
    owner: "",
  };
}
export const EventCreateClass = {
  typeUrl: "/titan.nftmint.EventCreateClass",
  encode(message: EventCreateClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCreateClass {
    const obj = createBaseEventCreateClass();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: EventCreateClass): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCreateClass>, I>>(object: I): EventCreateClass {
    const message = createBaseEventCreateClass();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};
function createBaseEventUpdateClass(): EventUpdateClass {
  return {
    id: "",
  };
}
export const EventUpdateClass = {
  typeUrl: "/titan.nftmint.EventUpdateClass",
  encode(message: EventUpdateClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateClass();
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
  fromJSON(object: any): EventUpdateClass {
    const obj = createBaseEventUpdateClass();
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  toJSON(message: EventUpdateClass): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateClass>, I>>(object: I): EventUpdateClass {
    const message = createBaseEventUpdateClass();
    message.id = object.id ?? "";
    return message;
  },
};
function createBaseEventTransferClass(): EventTransferClass {
  return {
    id: "",
    oldOwner: "",
    newOwner: "",
  };
}
export const EventTransferClass = {
  typeUrl: "/titan.nftmint.EventTransferClass",
  encode(message: EventTransferClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.oldOwner !== "") {
      writer.uint32(18).string(message.oldOwner);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTransferClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransferClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.oldOwner = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventTransferClass {
    const obj = createBaseEventTransferClass();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.oldOwner)) obj.oldOwner = String(object.oldOwner);
    if (isSet(object.newOwner)) obj.newOwner = String(object.newOwner);
    return obj;
  },
  toJSON(message: EventTransferClass): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.oldOwner !== undefined && (obj.oldOwner = message.oldOwner);
    message.newOwner !== undefined && (obj.newOwner = message.newOwner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventTransferClass>, I>>(object: I): EventTransferClass {
    const message = createBaseEventTransferClass();
    message.id = object.id ?? "";
    message.oldOwner = object.oldOwner ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
};
