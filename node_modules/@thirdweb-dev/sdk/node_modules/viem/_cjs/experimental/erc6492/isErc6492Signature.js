"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isErc6492Signature = void 0;
const bytes_js_1 = require("../../constants/bytes.js");
const slice_js_1 = require("../../utils/data/slice.js");
function isErc6492Signature(signature) {
    return (0, slice_js_1.sliceHex)(signature, -32) === bytes_js_1.erc6492MagicBytes;
}
exports.isErc6492Signature = isErc6492Signature;
//# sourceMappingURL=isErc6492Signature.js.map