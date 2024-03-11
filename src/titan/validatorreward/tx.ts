/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../helpers";
export const protobufPackage = "titan.validatorreward";
/** MsgSetRate allow authority config `rate` */
export interface MsgSetRate {
  authority: string;
  rate: string;
}
/** MsgSetRateResponse defines the Msg/SetRate response type. */
export interface MsgSetRateResponse {}
/** MsgSetAuthority allow authority config `authority` */
export interface MsgSetAuthority {
  authority: string;
  newAuthority: string;
}
/** MsgSetAuthorityResponse defines the Msg/SetAuthority response type. */
export interface MsgSetAuthorityResponse {}
/** MsgFundRewardPool allow anyone to fund the reward pool */
export interface MsgFundRewardPool {
  depositor: string;
  /** repeated cosmos.base.v1beta1.Coin amount = 2 [(gogoproto.nullable) = false] */
  amount: Coin[];
}
/** MsgFundRewardPoolResponse defines the Msg/FundRewardPool response type. */
export interface MsgFundRewardPoolResponse {}
function createBaseMsgSetRate(): MsgSetRate {
  return {
    authority: "",
    rate: "",
  };
}
export const MsgSetRate = {
  typeUrl: "/titan.validatorreward.MsgSetRate",
  encode(message: MsgSetRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.rate !== "") {
      writer.uint32(18).string(message.rate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.rate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetRate {
    const obj = createBaseMsgSetRate();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.rate)) obj.rate = String(object.rate);
    return obj;
  },
  toJSON(message: MsgSetRate): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetRate>, I>>(object: I): MsgSetRate {
    const message = createBaseMsgSetRate();
    message.authority = object.authority ?? "";
    message.rate = object.rate ?? "";
    return message;
  },
};
function createBaseMsgSetRateResponse(): MsgSetRateResponse {
  return {};
}
export const MsgSetRateResponse = {
  typeUrl: "/titan.validatorreward.MsgSetRateResponse",
  encode(_: MsgSetRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRateResponse();
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
  fromJSON(_: any): MsgSetRateResponse {
    const obj = createBaseMsgSetRateResponse();
    return obj;
  },
  toJSON(_: MsgSetRateResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetRateResponse>, I>>(_: I): MsgSetRateResponse {
    const message = createBaseMsgSetRateResponse();
    return message;
  },
};
function createBaseMsgSetAuthority(): MsgSetAuthority {
  return {
    authority: "",
    newAuthority: "",
  };
}
export const MsgSetAuthority = {
  typeUrl: "/titan.validatorreward.MsgSetAuthority",
  encode(message: MsgSetAuthority, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.newAuthority !== "") {
      writer.uint32(18).string(message.newAuthority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetAuthority {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAuthority();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.newAuthority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetAuthority {
    const obj = createBaseMsgSetAuthority();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.newAuthority)) obj.newAuthority = String(object.newAuthority);
    return obj;
  },
  toJSON(message: MsgSetAuthority): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.newAuthority !== undefined && (obj.newAuthority = message.newAuthority);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetAuthority>, I>>(object: I): MsgSetAuthority {
    const message = createBaseMsgSetAuthority();
    message.authority = object.authority ?? "";
    message.newAuthority = object.newAuthority ?? "";
    return message;
  },
};
function createBaseMsgSetAuthorityResponse(): MsgSetAuthorityResponse {
  return {};
}
export const MsgSetAuthorityResponse = {
  typeUrl: "/titan.validatorreward.MsgSetAuthorityResponse",
  encode(_: MsgSetAuthorityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetAuthorityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAuthorityResponse();
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
  fromJSON(_: any): MsgSetAuthorityResponse {
    const obj = createBaseMsgSetAuthorityResponse();
    return obj;
  },
  toJSON(_: MsgSetAuthorityResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetAuthorityResponse>, I>>(_: I): MsgSetAuthorityResponse {
    const message = createBaseMsgSetAuthorityResponse();
    return message;
  },
};
function createBaseMsgFundRewardPool(): MsgFundRewardPool {
  return {
    depositor: "",
    amount: [],
  };
}
export const MsgFundRewardPool = {
  typeUrl: "/titan.validatorreward.MsgFundRewardPool",
  encode(message: MsgFundRewardPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundRewardPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundRewardPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgFundRewardPool {
    const obj = createBaseMsgFundRewardPool();
    if (isSet(object.depositor)) obj.depositor = String(object.depositor);
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgFundRewardPool): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgFundRewardPool>, I>>(object: I): MsgFundRewardPool {
    const message = createBaseMsgFundRewardPool();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgFundRewardPoolResponse(): MsgFundRewardPoolResponse {
  return {};
}
export const MsgFundRewardPoolResponse = {
  typeUrl: "/titan.validatorreward.MsgFundRewardPoolResponse",
  encode(_: MsgFundRewardPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundRewardPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundRewardPoolResponse();
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
  fromJSON(_: any): MsgFundRewardPoolResponse {
    const obj = createBaseMsgFundRewardPoolResponse();
    return obj;
  },
  toJSON(_: MsgFundRewardPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgFundRewardPoolResponse>, I>>(_: I): MsgFundRewardPoolResponse {
    const message = createBaseMsgFundRewardPoolResponse();
    return message;
  },
};
/** Msg defines the Msg service. */
export interface Msg {
  /** SetRate defines a method for setting the rate */
  SetRate(request: MsgSetRate): Promise<MsgSetRateResponse>;
  /** SetAuthority defines a method for setting the authority */
  SetAuthority(request: MsgSetAuthority): Promise<MsgSetAuthorityResponse>;
  /** FundRewardPool defines a method for funding the reward pool */
  FundRewardPool(request: MsgFundRewardPool): Promise<MsgFundRewardPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetRate = this.SetRate.bind(this);
    this.SetAuthority = this.SetAuthority.bind(this);
    this.FundRewardPool = this.FundRewardPool.bind(this);
  }
  SetRate(request: MsgSetRate): Promise<MsgSetRateResponse> {
    const data = MsgSetRate.encode(request).finish();
    const promise = this.rpc.request("titan.validatorreward.Msg", "SetRate", data);
    return promise.then((data) => MsgSetRateResponse.decode(new BinaryReader(data)));
  }
  SetAuthority(request: MsgSetAuthority): Promise<MsgSetAuthorityResponse> {
    const data = MsgSetAuthority.encode(request).finish();
    const promise = this.rpc.request("titan.validatorreward.Msg", "SetAuthority", data);
    return promise.then((data) => MsgSetAuthorityResponse.decode(new BinaryReader(data)));
  }
  FundRewardPool(request: MsgFundRewardPool): Promise<MsgFundRewardPoolResponse> {
    const data = MsgFundRewardPool.encode(request).finish();
    const promise = this.rpc.request("titan.validatorreward.Msg", "FundRewardPool", data);
    return promise.then((data) => MsgFundRewardPoolResponse.decode(new BinaryReader(data)));
  }
}
