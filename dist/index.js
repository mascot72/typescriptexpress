"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crawl_1 = require("./crawl");
const extract_1 = require("./extract");
// crawl();
const app = express_1.default();
app.get('/', (req, res) => res.send('hello'));
app.get('/crawl', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const result = yield crawl_1.crawl();
    // res.send(result);
    // crawl().then(result => res.send(result));
    res.send(extract_1.extract(result).join(',<br/>\n'));
}));
app.listen(8080, () => {
    console.log('server started!');
});
//# sourceMappingURL=index.js.map