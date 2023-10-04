const { MongoClient } = require("mongodb");

class MongoDB {
    static connect = async (uri) => {
        if(this.client) return this.client;
        this.client = await (new MongoClient(uri)).connect();
        return this.client;
    };
}

module.exports = MongoDB;