"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_1 = require("../hello");
describe("helloWorld", () => {
    it("returns hello world", () => {
        var actual = (0, hello_1.helloWorld)();
        expect(actual).toBe("hello world");
    });
});
