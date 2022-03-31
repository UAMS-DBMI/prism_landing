FROM node:14-alpine AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY app/package.json .
COPY app/yarn.lock .
RUN yarn install --production
# Copy app files
COPY app/ .
RUN rm -r build/
# Build the app
RUN yarn build

# Bundle static assets with nginx
FROM bitnami/nginx:1.21 as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /app
# Add your nginx.conf
# COPY nginx.conf /opt/bitnami/nginx/conf/server_blocks/my_server_block.conf

EXPOSE 8080 8443
ENTRYPOINT [ "/opt/bitnami/scripts/nginx/entrypoint.sh" ]
CMD [ "/opt/bitnami/scripts/nginx/run.sh" ]