import { Construct, StackProps } from "@aws-cdk/core";
import { RestApi, LambdaIntegration, Cors } from "@aws-cdk/aws-apigateway";
import { HelloWorldLambda } from "./hello-world-lambda";

export class HelloWorldApi extends Construct {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id);

    const restApi = new RestApi(this, "hello-world", {
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
        allowMethods: Cors.ALL_METHODS,
      },
    });

    const helloWorldLambda = new HelloWorldLambda(this, "HelloWorld", props);

    const helloWorldResource = restApi.root.addResource("hello");
    helloWorldResource.addMethod(
      "GET",
      new LambdaIntegration(helloWorldLambda.Function, { proxy: true })
    );
  }
}
