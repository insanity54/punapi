FROM node:15-alpine

# set the timezone
RUN apk add tzdata
ENV TZ="America/New_York"
RUN ls /usr/share/zoneinfo && \
  cp /usr/share/zoneinfo/America/Los_Angeles /etc/localtime && \
  echo "America/New_York" > /etc/timezone

# this hack invalidates the cache (see https://github.com/caprover/caprover/issues/381)
ADD https://www.google.com /time.now

WORKDIR /punapi
COPY . .
RUN yarn install

CMD [ "yarn", "run", "start" ]
