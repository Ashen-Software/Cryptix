"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeErc6492Signature = void 0;
const bytes_js_1 = require("../../constants/bytes.js");
const encodeAbiParameters_js_1 = require("../../utils/abi/encodeAbiParameters.js");
const concat_js_1 = require("../../utils/data/concat.js");
function serializeErc6492Signature(parameters) {
    const { address, data, signature } = parameters;
    return (0, concat_js_1.concatHex)([
        (0, encodeAbiParameters_js_1.encodeAbiParameters)([{ type: 'address' }, { type: 'bytes' }, { type: 'bytes' }], [address, data, signature]),
        bytes_js_1.erc6492MagicBytes,
    ]);
}
exports.serializeErc6492Signature = serializeErc6492Signature;
//# sourceMappingURL=serializeErc6492Signature.js.map