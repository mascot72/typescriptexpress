"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
exports.crawl = () => new Promise((resolve, reject) => {
    request_1.default.get('https://naver.com', (err, res) => {
        if (err)
            reject(err);
        resolve(res.body);
    });
});
//# sourceMappingURL=crawl.js.map