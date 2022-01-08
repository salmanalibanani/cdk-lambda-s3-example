import { Construct, StackProps } from "@aws-cdk/core";
import { NodejsFunction } from "@aws-cdk/aws-lambda-nodejs";
import { Runtime, Tracing } from "@aws-cdk/aws-lambda";
import { Duration } from "@aws-cdk/core";
import { ILambda } from "../types";

export class HelloWorldLambda extends Construct implements ILambda {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id);

    this.Function = new NodejsFunction(this, "HelloWorld", {
      functionName: "HelloWorld",
      runtime: Runtime.NODEJS_14_X,
      handler: "handler",
      tracing: Tracing.ACTIVE,
      entry: "app/lambda/hello-world.ts",
      memorySize: 512,
      timeout: Duration.seconds(900),
    });
  }
  Function: NodejsFunction;
}
