import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_dzwTIyza2",
  ClientId: "1ugam0p3o81afur9hoktf4db54",
};
const UserPool = new CognitoUserPool(poolData);
export default UserPool;
