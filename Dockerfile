FROM ubuntu:14.04
MAINTAINER Milo van der Linden <milo@dogodigi.net>

ENV CARTO_ENV development
ENV DB_HOST db
ENV DB_PORT 5432
ENV DB_USER postgres

ENV REDIS_HOST redis
ENV REDIS_PORT 6379

RUN apt-get update && DEBIAN_FRONTEND=noninteractive \
    apt-get install -y --no-install-recommends apt-utils make g++ git-core \
      ca-certificates \
      nodejs nodejs-legacy npm && \
    rm -rf /var/lib/apt/lists/*

RUN git clone --depth 1 --branch master https://github.com/cartodb/cartodb-sql-api.git /cartodb-sql-api
RUN mkdir -p /cartodb-sql-api/logs
RUN mkdir -p /cartodb-sql-api/config/environments
RUN mkdir -p /tmp
WORKDIR /cartodb-sql-api
RUN npm install

# Add config
COPY docker.js /cartodb-sql-api/config/environments/docker.js
# Add image configuration and scripts
ADD run.sh /run.sh
RUN chmod 755 /*.sh

EXPOSE 8080
CMD ["/run.sh"]
