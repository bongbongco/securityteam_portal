export const typeDefs = ["type AddServerInfoResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  AddServerInfo(host: String, ip: String!, explanation: String, vendor: String, model: String, version: String, manager: String, managingTeam: String): AddServerInfoResponse!\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  EmailSignUp(firstName: String!, lastName: String!, email: String!, password: String!, phoneNumber: String!): EmailSignUpResponse!\n  UpdateMyProfile(firstName: String, lastName: String, email: String, password: String): UpdateMyProfileResponse!\n}\n\ntype Server {\n  id: Int!\n  host: String\n  ip: String!\n  explanation: String\n  vendor: String\n  model: String\n  version: String\n  manager: String\n  managingTeam: String\n  createdAt: String!\n  updatedAt: String\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype GetMyProfileReponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype Query {\n  GetMyProfile: GetMyProfileReponse!\n}\n\ntype User {\n  id: Int!\n  email: String!\n  firstName: String!\n  lastName: String!\n  password: String\n  phoneNumber: String!\n  verified: Boolean!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype UpdateMyProfileResponse {\n  ok: Boolean!\n  error: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetMyProfile: GetMyProfileReponse;
}

export interface GetMyProfileReponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string | null;
  phoneNumber: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string | null;
}

export interface Mutation {
  AddServerInfo: AddServerInfoResponse;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  UpdateMyProfile: UpdateMyProfileResponse;
}

export interface AddServerInfoMutationArgs {
  host: string | null;
  ip: string;
  explanation: string | null;
  vendor: string | null;
  model: string | null;
  version: string | null;
  manager: string | null;
  managingTeam: string | null;
}

export interface EmailSignInMutationArgs {
  email: string;
  password: string;
}

export interface EmailSignUpMutationArgs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface UpdateMyProfileMutationArgs {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
}

export interface AddServerInfoResponse {
  ok: boolean;
  error: string | null;
}

export interface EmailSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailSignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface UpdateMyProfileResponse {
  ok: boolean;
  error: string | null;
}

export interface Server {
  id: number;
  host: string | null;
  ip: string;
  explanation: string | null;
  vendor: string | null;
  model: string | null;
  version: string | null;
  manager: string | null;
  managingTeam: string | null;
  createdAt: string;
  updatedAt: string | null;
}
