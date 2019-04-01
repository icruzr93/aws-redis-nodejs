var async = require('async');

var redis = require('redis');
var PORT = 6379;
var HOST = "backspace-lab-redis.5es0is.0001.use1.cache.amazonaws.com";
var client = redis.createClient(PORT, HOST);

client.on('connect', function() {
    console.log('connected');
    writeRedisKey("myHighScore", '1000')
});

function writeRedisKey(keyRedis, value) {
    client.set(keyRedis, value, function(err, response) {
        console.log(response);
        client.expire(keyRedis, 30);
        readRedisKey(keyRedis)
    })
}

function readRedisKey(keyRedis) {
    client.get(keyRedis, function(err, res) {
        console.log(res)
        var objInfo = {
            prop1: "1",
            prop2: "2",
            prop3: "3"
        }
        writeRedisObject("myInfo", objInfo)
    })
}

function writeRedisObject(objRedis, value) {
    client.hmset(objRedis, value, function(err, response) {
        console.log(response);
        readRedisObject(objRedis)
    })
}

function readRedisObject(objRedis) {
    client.hgetall(objRedis, function(err, response) {
        console.log(response);
    })
}