FROM node:20-alpine
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/health || exit 1

WORKDIR /app

RUN addgroup -S app && adduser -S app -G app

COPY server.js .

USER app

EXPOSE 8080

CMD ["node", "server.js"]
