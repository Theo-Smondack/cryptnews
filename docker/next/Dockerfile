FROM node:23-alpine

RUN apk add --no-cache bash openssl

WORKDIR /home/node/app

USER node

ENTRYPOINT [ "./scripts/next/next-entrypoint.sh" ]
