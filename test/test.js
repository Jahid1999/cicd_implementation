const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with Welcome to String world. Created by Jahid", (done) => {
        request(app).get("/").expect("Welcome to String world. Created by Jahid", done);
    })
});

describe("GET /string/size/Jahid", () => {
    it("The size of string 'Jahid' is 5.", (done) => {
        request(app).get("/string/size/Jahid").expect("The size of string 'Jahid' is 5.", done);
    })
});

describe("GET /string/concat/Distributed/Systems", () => {
    it("String 1 = Distributed, String 2 = Systems | Output: DistributedSystems", (done) => {
        request(app).get("/string/concat/Distributed/Systems").expect("String 1 = Distributed, String 2 = Systems | Output: DistributedSystems", done);
    })
});