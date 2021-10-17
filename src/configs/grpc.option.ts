import { join } from "path";

export const grpcOption = {
  package: 'user',
  protoPath: join(__dirname, '../modules/users/protos/user.proto'),
  url: '0.0.0.0:5000',
}