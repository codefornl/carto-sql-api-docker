#!/bin/bash
cd /cartodb-sql-api

cp config/environments/docker.js config/environments/$CARTO_ENV.js

sed -i "s/__DB_PORT__/$DB_PORT/g" config/environments/$CARTO_ENV.js
sed -i "s/__DB_HOST__/$DB_HOST/g" config/environments/$CARTO_ENV.js
sed -i "s/__DB_USER__/$DB_USER/g" config/environments/$CARTO_ENV.js
sed -i "s/__REDIS_HOST__/$REDIS_HOST/g" config/environments/$CARTO_ENV.js
sed -i "s/__REDIS_PORT__/$REDIS_PORT/g" config/environments/$CARTO_ENV.js
sed -i "s/__CARTO_ENV__/$CARTO_ENV/g" config/environments/$CARTO_ENV.js
sed -i "s^__CARTO_DB_PREFIX__^$CARTO_DB_PREFIX^g" config/environments/$CARTO_ENV.js
sed -i "s^__CARTO_DB_USER_PREFIX__^$CARTO_DB_USER_PREFIX^g" config/environments/$CARTO_ENV.js

node app.js $CARTO_ENV
