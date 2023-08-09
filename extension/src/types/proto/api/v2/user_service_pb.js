// @generated by protoc-gen-es v1.3.0
// @generated from file api/v2/user_service.proto (package slash.api.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { RowStatus } from "./common_pb.js";

/**
 * @generated from enum slash.api.v2.Role
 */
export const Role = proto3.makeEnum(
  "slash.api.v2.Role",
  [
    {no: 0, name: "ROLE_UNSPECIFIED"},
    {no: 1, name: "ADMIN"},
    {no: 2, name: "USER"},
  ],
);

/**
 * @generated from message slash.api.v2.User
 */
export const User = proto3.makeMessageType(
  "slash.api.v2.User",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "row_status", kind: "enum", T: proto3.getEnumType(RowStatus) },
    { no: 3, name: "created_ts", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "updated_ts", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "role", kind: "enum", T: proto3.getEnumType(Role) },
    { no: 7, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "nickname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message slash.api.v2.GetUserRequest
 */
export const GetUserRequest = proto3.makeMessageType(
  "slash.api.v2.GetUserRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message slash.api.v2.GetUserResponse
 */
export const GetUserResponse = proto3.makeMessageType(
  "slash.api.v2.GetUserResponse",
  () => [
    { no: 1, name: "user", kind: "message", T: User },
  ],
);

/**
 * @generated from message slash.api.v2.CreateUserRequest
 */
export const CreateUserRequest = proto3.makeMessageType(
  "slash.api.v2.CreateUserRequest",
  () => [
    { no: 1, name: "user", kind: "message", T: User },
  ],
);

/**
 * @generated from message slash.api.v2.CreateUserResponse
 */
export const CreateUserResponse = proto3.makeMessageType(
  "slash.api.v2.CreateUserResponse",
  () => [
    { no: 1, name: "user", kind: "message", T: User },
  ],
);

/**
 * @generated from message slash.api.v2.ListUserAccessTokensRequest
 */
export const ListUserAccessTokensRequest = proto3.makeMessageType(
  "slash.api.v2.ListUserAccessTokensRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message slash.api.v2.ListUserAccessTokensResponse
 */
export const ListUserAccessTokensResponse = proto3.makeMessageType(
  "slash.api.v2.ListUserAccessTokensResponse",
  () => [
    { no: 1, name: "access_tokens", kind: "message", T: UserAccessToken, repeated: true },
  ],
);

/**
 * @generated from message slash.api.v2.CreateUserAccessTokenRequest
 */
export const CreateUserAccessTokenRequest = proto3.makeMessageType(
  "slash.api.v2.CreateUserAccessTokenRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "user_access_token", kind: "message", T: UserAccessToken },
  ],
);

/**
 * @generated from message slash.api.v2.CreateUserAccessTokenResponse
 */
export const CreateUserAccessTokenResponse = proto3.makeMessageType(
  "slash.api.v2.CreateUserAccessTokenResponse",
  () => [
    { no: 1, name: "access_token", kind: "message", T: UserAccessToken },
  ],
);

/**
 * @generated from message slash.api.v2.DeleteUserAccessTokenRequest
 */
export const DeleteUserAccessTokenRequest = proto3.makeMessageType(
  "slash.api.v2.DeleteUserAccessTokenRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message slash.api.v2.DeleteUserAccessTokenResponse
 */
export const DeleteUserAccessTokenResponse = proto3.makeMessageType(
  "slash.api.v2.DeleteUserAccessTokenResponse",
  [],
);

/**
 * @generated from message slash.api.v2.UserAccessToken
 */
export const UserAccessToken = proto3.makeMessageType(
  "slash.api.v2.UserAccessToken",
  () => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "issued_at", kind: "message", T: Timestamp },
    { no: 4, name: "expires_at", kind: "message", T: Timestamp },
  ],
);

