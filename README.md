# Running it

## Full application

### docker

```
auto/start
```

## Local dev

### npm

1. run `npm install`
2. open two terminals
3. in one terminal run `npm run local:client`
4. in another terminal run `npm run local:server`


Any dev in client will auto-update, any dev on server you'll need to stop/start **local:server** process


## Publish to prod or staging

Open file `~/.aws/credentials`
Add the following section

```
[cnb]
aws_access_key_id = GET_ME_FROM_SOMEONE_WHO_KNOWS
aws_secret_access_key = GET_ME_FROM_SOMEONE_WHO_KNOWS
```

Then login to AWS by running the following to create login command in your clipboard:

```bash
(aws ecr get-login --no-include-email --region ap-southeast-2 --profile cnb) | pbcopy
```
Then paste the login command and execute.

You can then run the `auto/deploy-staging` or `auto/deploy-prod` command to deploy the latest version
