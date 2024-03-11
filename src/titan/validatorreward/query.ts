/* eslint-disable */
import { Params } from "./params";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet, Rpc } from "../../helpers";
export const protobufPackage = "titan.validatorreward";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/** QueryRewardPoolRequest is request type for the Query/RewardPool RPC method. */
export interface QueryRewardPoolRequest {}
/** QueryRewardPoolResponse is response type for the Query/RewardPool RPC method. */
export interface QueryRewardPoolResponse {
  pool: Coin[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/titan.validatorreward.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/titan.validatorreward.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryRewardPoolRequest(): QueryRewardPoolRequest {
  return {};
}
export const QueryRewardPoolRequest = {
  typeUrl: "/titan.validatorreward.QueryRewardPoolRequest",
  encode(_: QueryRewardPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardPoolRequest();
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
  fromJSON(_: any): QueryRewardPoolRequest {
    const obj = createBaseQueryRewardPoolRequest();
    return obj;
  },
  toJSON(_: QueryRewardPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRewardPoolRequest>, I>>(_: I): QueryRewardPoolRequest {
    const message = createBaseQueryRewardPoolRequest();
    return message;
  },
};
function createBaseQueryRewardPoolResponse(): QueryRewardPoolResponse {
  return {
    pool: [],
  };
}
export const QueryRewardPoolResponse = {
  typeUrl: "/titan.validatorreward.QueryRewardPoolResponse",
  encode(message: QueryRewardPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRewardPoolResponse {
    const obj = createBaseQueryRewardPoolResponse();
    if (Array.isArray(object?.pool)) obj.pool = object.pool.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryRewardPoolResponse): unknown {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.pool = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRewardPoolResponse>, I>>(object: I): QueryRewardPoolResponse {
    const message = createBaseQueryRewardPoolResponse();
    message.pool = object.pool?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of RewardPool items. */
  RewardPool(request?: QueryRewardPoolRequest): Promise<QueryRewardPoolResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.RewardPool = this.RewardPool.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("titan.validatorreward.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  RewardPool(request: QueryRewardPoolRequest = {}): Promise<QueryRewardPoolResponse> {
    const data = QueryRewardPoolRequest.encode(request).finish();
    const promise = this.rpc.request("titan.validatorreward.Query", "RewardPool", data);
    return promise.then((data) => QueryRewardPoolResponse.decode(new BinaryReader(data)));
  }
}
