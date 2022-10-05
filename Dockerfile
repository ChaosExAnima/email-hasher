FROM --platform=amd64 joseluisq/static-web-server:2-alpine

COPY build/* /public
COPY build/static /public/emails/static