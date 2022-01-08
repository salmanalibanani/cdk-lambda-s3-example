# Welcome to your CDK TypeScript project!

While working with CDK projects you might find it useful to do things a bit differently form the default project structure you get from **CDK init**. Here I have kept the app and infrastructure in separate directories.  Your application code is unaware of any infrastructure artifacts, which is a good thing. And by keeping your CDK constructs in multiple files, you will not end up with a infrastructure monolith.

## Useful CDK commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
