FROM node:20-alpine

WORKDIR /app

RUN addgroup -S app && adduser -S app -G app

COPY server.js .

USER app

EXPOSE 8080

CMD ["node", "server.js"]
