"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeCompactSignature = void 0;
const secp256k1_1 = require("@noble/curves/secp256k1");
const fromHex_js_1 = require("../encoding/fromHex.js");
function serializeCompactSignature({ r, yParityAndS, }) {
    return `0x${new secp256k1_1.secp256k1.Signature((0, fromHex_js_1.hexToBigInt)(r), (0, fromHex_js_1.hexToBigInt)(yParityAndS)).toCompactHex()}`;
}
exports.serializeCompactSignature = serializeCompactSignature;
//# sourceMappingURL=serializeCompactSignature.js.map