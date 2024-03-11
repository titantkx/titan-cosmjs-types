/* eslint-disable */
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { SystemInfo } from "./system_info";
import { MintingInfo } from "./minting_info";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet, Rpc } from "../../helpers";
export const protobufPackage = "titan.nftmint";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/**
 * QuerySystemInfoRequest is request type for the Query/QuerySystemInfo RPC
 * method.
 */
export interface QuerySystemInfoRequest {}
/**
 * QuerySystemInfoResponse is response type for the Query/QuerySystemInfo
 * RPC method.
 */
export interface QuerySystemInfoResponse {
  systemInfo: SystemInfo;
}
/**
 * QueryMintingInfoRequest is request type for the Query/QueryMintingInfo RPC
 * method.
 */
export interface QueryMintingInfoRequest {
  classId: string;
}
/**
 * QueryMintingInfoResponse is response type for the Query/QueryMintingInfo RPC
 * method.
 */
export interface QueryMintingInfoResponse {
  mintingInfo: MintingInfo;
}
/**
 * QueryMintingInfosRequest is request type for the Query/QueryMintingInfos RPC
 * method.
 */
export interface QueryMintingInfosRequest {
  pagination?: PageRequest;
}
/**
 * QueryMintingInfosResponse is response type for the Query/QueryMintingInfos
 * RPC method.
 */
export interface QueryMintingInfosResponse {
  mintingInfo: MintingInfo[];
  pagination?: PageResponse;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/titan.nftmint.QueryParamsRequest",
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
  typeUrl: "/titan.nftmint.QueryParamsResponse",
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
function createBaseQuerySystemInfoRequest(): QuerySystemInfoRequest {
  return {};
}
export const QuerySystemInfoRequest = {
  typeUrl: "/titan.nftmint.QuerySystemInfoRequest",
  encode(_: QuerySystemInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySystemInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySystemInfoRequest();
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
  fromJSON(_: any): QuerySystemInfoRequest {
    const obj = createBaseQuerySystemInfoRequest();
    return obj;
  },
  toJSON(_: QuerySystemInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySystemInfoRequest>, I>>(_: I): QuerySystemInfoRequest {
    const message = createBaseQuerySystemInfoRequest();
    return message;
  },
};
function createBaseQuerySystemInfoResponse(): QuerySystemInfoResponse {
  return {
    systemInfo: SystemInfo.fromPartial({}),
  };
}
export const QuerySystemInfoResponse = {
  typeUrl: "/titan.nftmint.QuerySystemInfoResponse",
  encode(message: QuerySystemInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.systemInfo !== undefined) {
      SystemInfo.encode(message.systemInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySystemInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySystemInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.systemInfo = SystemInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySystemInfoResponse {
    const obj = createBaseQuerySystemInfoResponse();
    if (isSet(object.systemInfo)) obj.systemInfo = SystemInfo.fromJSON(object.systemInfo);
    return obj;
  },
  toJSON(message: QuerySystemInfoResponse): unknown {
    const obj: any = {};
    message.systemInfo !== undefined &&
      (obj.systemInfo = message.systemInfo ? SystemInfo.toJSON(message.systemInfo) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySystemInfoResponse>, I>>(object: I): QuerySystemInfoResponse {
    const message = createBaseQuerySystemInfoResponse();
    if (object.systemInfo !== undefined && object.systemInfo !== null) {
      message.systemInfo = SystemInfo.fromPartial(object.systemInfo);
    }
    return message;
  },
};
function createBaseQueryMintingInfoRequest(): QueryMintingInfoRequest {
  return {
    classId: "",
  };
}
export const QueryMintingInfoRequest = {
  typeUrl: "/titan.nftmint.QueryMintingInfoRequest",
  encode(message: QueryMintingInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMintingInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintingInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMintingInfoRequest {
    const obj = createBaseQueryMintingInfoRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    return obj;
  },
  toJSON(message: QueryMintingInfoRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryMintingInfoRequest>, I>>(object: I): QueryMintingInfoRequest {
    const message = createBaseQueryMintingInfoRequest();
    message.classId = object.classId ?? "";
    return message;
  },
};
function createBaseQueryMintingInfoResponse(): QueryMintingInfoResponse {
  return {
    mintingInfo: MintingInfo.fromPartial({}),
  };
}
export const QueryMintingInfoResponse = {
  typeUrl: "/titan.nftmint.QueryMintingInfoResponse",
  encode(message: QueryMintingInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintingInfo !== undefined) {
      MintingInfo.encode(message.mintingInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMintingInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintingInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintingInfo = MintingInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMintingInfoResponse {
    const obj = createBaseQueryMintingInfoResponse();
    if (isSet(object.mintingInfo)) obj.mintingInfo = MintingInfo.fromJSON(object.mintingInfo);
    return obj;
  },
  toJSON(message: QueryMintingInfoResponse): unknown {
    const obj: any = {};
    message.mintingInfo !== undefined &&
      (obj.mintingInfo = message.mintingInfo ? MintingInfo.toJSON(message.mintingInfo) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryMintingInfoResponse>, I>>(
    object: I,
  ): QueryMintingInfoResponse {
    const message = createBaseQueryMintingInfoResponse();
    if (object.mintingInfo !== undefined && object.mintingInfo !== null) {
      message.mintingInfo = MintingInfo.fromPartial(object.mintingInfo);
    }
    return message;
  },
};
function createBaseQueryMintingInfosRequest(): QueryMintingInfosRequest {
  return {
    pagination: undefined,
  };
}
export const QueryMintingInfosRequest = {
  typeUrl: "/titan.nftmint.QueryMintingInfosRequest",
  encode(message: QueryMintingInfosRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMintingInfosRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintingInfosRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMintingInfosRequest {
    const obj = createBaseQueryMintingInfosRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryMintingInfosRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryMintingInfosRequest>, I>>(
    object: I,
  ): QueryMintingInfosRequest {
    const message = createBaseQueryMintingInfosRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryMintingInfosResponse(): QueryMintingInfosResponse {
  return {
    mintingInfo: [],
    pagination: undefined,
  };
}
export const QueryMintingInfosResponse = {
  typeUrl: "/titan.nftmint.QueryMintingInfosResponse",
  encode(message: QueryMintingInfosResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.mintingInfo) {
      MintingInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMintingInfosResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintingInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintingInfo.push(MintingInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMintingInfosResponse {
    const obj = createBaseQueryMintingInfosResponse();
    if (Array.isArray(object?.mintingInfo))
      obj.mintingInfo = object.mintingInfo.map((e: any) => MintingInfo.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryMintingInfosResponse): unknown {
    const obj: any = {};
    if (message.mintingInfo) {
      obj.mintingInfo = message.mintingInfo.map((e) => (e ? MintingInfo.toJSON(e) : undefined));
    } else {
      obj.mintingInfo = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryMintingInfosResponse>, I>>(
    object: I,
  ): QueryMintingInfosResponse {
    const message = createBaseQueryMintingInfosResponse();
    message.mintingInfo = object.mintingInfo?.map((e) => MintingInfo.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** SystemInfo queries the system info of the module. */
  SystemInfo(request?: QuerySystemInfoRequest): Promise<QuerySystemInfoResponse>;
  /** MintingInfo queries the minting info of a given class. */
  MintingInfo(request: QueryMintingInfoRequest): Promise<QueryMintingInfoResponse>;
  /** MintingInfos queries a list of minting info. */
  MintingInfos(request?: QueryMintingInfosRequest): Promise<QueryMintingInfosResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.SystemInfo = this.SystemInfo.bind(this);
    this.MintingInfo = this.MintingInfo.bind(this);
    this.MintingInfos = this.MintingInfos.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("titan.nftmint.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  SystemInfo(request: QuerySystemInfoRequest = {}): Promise<QuerySystemInfoResponse> {
    const data = QuerySystemInfoRequest.encode(request).finish();
    const promise = this.rpc.request("titan.nftmint.Query", "SystemInfo", data);
    return promise.then((data) => QuerySystemInfoResponse.decode(new BinaryReader(data)));
  }
  MintingInfo(request: QueryMintingInfoRequest): Promise<QueryMintingInfoResponse> {
    const data = QueryMintingInfoRequest.encode(request).finish();
    const promise = this.rpc.request("titan.nftmint.Query", "MintingInfo", data);
    return promise.then((data) => QueryMintingInfoResponse.decode(new BinaryReader(data)));
  }
  MintingInfos(
    request: QueryMintingInfosRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryMintingInfosResponse> {
    const data = QueryMintingInfosRequest.encode(request).finish();
    const promise = this.rpc.request("titan.nftmint.Query", "MintingInfos", data);
    return promise.then((data) => QueryMintingInfosResponse.decode(new BinaryReader(data)));
  }
}
