// In case the base_url has a :user param the username will be the one specified in the URL,
// otherwise it will fallback to extract the username from the host header.
module.exports.base_url     = '(?:/api/:version|/user/:user/api/:version)';
// If useProfiler is true every response will be served with an
// X-SQLAPI-Profile header containing elapsed timing for various
// steps taken for producing the response.
module.exports.useProfiler = true;
module.exports.log_format   = '[:date] :remote-addr :method :req[Host]:url :status :response-time ms -> :res[Content-Type] (:res[X-SQLAPI-Profiler])';
// Regular expression pattern to extract username
// from hostname. Must have a single grabbing block.
module.exports.user_from_host = '^(.*)\\.cartodb\\.com$';
module.exports.node_port    = 8080;
module.exports.node_host    = '0.0.0.0';
// idle socket timeout, in miliseconds
module.exports.node_socket_timeout    = 600000;
module.exports.environment  = '__CARTO_ENV__';
// Supported labels: 'user_id' (read from redis)
module.exports.db_base_name = '__CARTO_DB_PREFIX__<%= user_id %>_db';
// Supported labels: 'user_id' (read from redis)
module.exports.db_user = '__CARTO_DB_USER_PREFIX__<%= user_id %>';
// Supported labels: 'user_id', 'user_password' (both read from redis)
module.exports.db_user_pass = '<%= user_password %>';
// Name of the anonymous PostgreSQL user
module.exports.db_pubuser   = 'postgres';
// Password for the anonymous PostgreSQL user
// module.exports.db_pubuser_pass   = '';
module.exports.db_host      = '__DB_HOST__';
module.exports.db_port      = '__DB_PORT__';
module.exports.db_batch_port      = '__DB_PORT__';
module.exports.finished_jobs_ttl_in_seconds = 2 * 3600; // 2 hours
module.exports.batch_query_timeout = 12 * 3600 * 1000; // 12 hours in milliseconds
module.exports.batch_log_filename = 'logs/batch-queries.log';
// Max number of queued jobs a user can have at a given time
module.exports.batch_max_queued_jobs = 64;
// Capacity strategy to use.
// It allows to tune how many queries run at a db host at the same time.
// Options: 'fixed', 'http-simple', 'http-load'
module.exports.batch_capacity_strategy = 'fixed';
// Applies when strategy='fixed'.
// Number of simultaneous users running queries in the same host.
// It will use 1 as min.
// Default 4.
module.exports.batch_capacity_fixed_amount = 4;
// Applies when strategy='http-simple' or strategy='http-load'.
// HTTP endpoint to check db host load.
// Helps to decide the number of simultaneous users running queries in that host.
// 'http-simple' will use 'available_cores' to decide the number.
// 'http-load' will use 'cores' and 'relative_load' to decide the number.
// It will use 1 as min.
// If no template is provided it will default to 'fixed' strategy.
module.exports.batch_capacity_http_url_template = 'http://<%= dbhost %>:9999/load';
// Max database connections in the pool
// Subsequent connections will wait for a free slot.i
// NOTE: not used by OGR-mediated accesses
module.exports.db_pool_size = 500;
// Milliseconds before a connection is removed from pool
module.exports.db_pool_idleTimeout = 30000;
// Milliseconds between idle client checking
module.exports.db_pool_reapInterval = 1000;
// max number of bytes for a row, when exceeded the query will throw an error
//module.exports.db_max_row_size = 10 * 1024 * 1024;
// allows to use an object to connect with node-postgres instead of a connection string
//module.exports.db_use_config_object = true;
// requires enabling db_use_config_object=true
// allows to enable/disable keep alive for database connections
// by default is not enabled
//module.exports.db_keep_alive = {
//    enabled: true,
//    initialDelay: 5000
//};
module.exports.redis_host   = '__REDIS_HOST__';
module.exports.redis_port   = __REDIS_PORT__;
module.exports.redisPool    = 50;
module.exports.redisIdleTimeoutMillis   = 10000;
module.exports.redisReapIntervalMillis  = 1000;
module.exports.redisLog     = false;
// Max number of entries in the query tables cache
module.exports.tableCacheMax = 8192;
// Max age of query table cache items, in milliseconds
module.exports.tableCacheMaxAge = 1000*60*10;
// Temporary directory, make sure it is writable by server user
module.exports.tmpDir = '/tmp';
// change ogr2ogr command or path
module.exports.ogr2ogrCommand = 'ogr2ogr';
// Optional statsd support
module.exports.statsd = {
  host: 'localhost',
  port: 8125,
  prefix: 'dev.:host.',
  cacheDns: true
  // support all allowed node-statsd options
};
module.exports.health = {
    enabled: true,
    username: 'development',
    query: 'select 1'
};
module.exports.oauth = {
    allowedHosts: ['localhost.localdomain', 'carto.com', 'cartodb.com']
};
module.exports.disabled_file = 'pids/disabled';
