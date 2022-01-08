import { NodejsFunction } from "@aws-cdk/aws-lambda-nodejs";

export interface ILambda {
  Function: NodejsFunction;
}
