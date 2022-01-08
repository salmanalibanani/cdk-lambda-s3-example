# Welcome to your CDK TypeScript project!

I have come up with a layout for CDK projects which is a bit different from the default you get from CDK init. The app and infrastructure are kept in separate directories. Your application code is unaware of any infrastructure related stuff. And by keeping your CDK constructs in multiple files, you will not end up with a infrastructure monolith.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
