"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("./add");
describe("add", () => {
    it("should add two numbers", () => {
        expect((0, add_1.add)(1, 2)).toBe(3);
    });
});
