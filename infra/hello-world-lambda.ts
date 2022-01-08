import { Construct, StackProps } from "@aws-cdk/core";
import { NodejsFunction } from "@aws-cdk/aws-lambda-nodejs";
import { Runtime, Tracing } from "@aws-cdk/aws-lambda";
import { Duration } from "@aws-cdk/core";
import { ILambda } from "../types";
import { Effect, PolicyStatement } from "@aws-cdk/aws-iam";
import { HelloWorldBucket } from "./hello-world-bucket";

export class HelloWorldLambda extends Construct implements ILambda {
  constructor(
    scope: Construct,
    id: string,
    bucket: HelloWorldBucket,
    props?: StackProps
  ) {
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

    this.Function.addToRolePolicy(
      new PolicyStatement({
        sid: "FromCode",
        actions: ["s3:GetObject", "s3:PutObject"],
        effect: Effect.ALLOW,
        resources: [bucket.Bucket.bucketArn + "/*"],
      })
    );
  }
  Function: NodejsFunction;
}
