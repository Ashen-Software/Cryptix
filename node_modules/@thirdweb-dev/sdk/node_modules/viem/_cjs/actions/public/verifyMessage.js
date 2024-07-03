"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyMessage = void 0;
const hashMessage_js_1 = require("../../utils/signature/hashMessage.js");
const verifyHash_js_1 = require("./verifyHash.js");
async function verifyMessage(client, { address, message, signature, ...callRequest }) {
    const hash = (0, hashMessage_js_1.hashMessage)(message);
    return (0, verifyHash_js_1.verifyHash)(client, {
        address,
        hash,
        signature,
        ...callRequest,
    });
}
exports.verifyMessage = verifyMessage;
//# sourceMappingURL=verifyMessage.js.map