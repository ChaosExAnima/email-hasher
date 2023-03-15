FROM --platform=amd64 nginx:alpine

COPY build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/emails.conf
