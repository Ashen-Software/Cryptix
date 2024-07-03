"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyHash = void 0;
const abis_js_1 = require("../../constants/abis.js");
const contracts_js_1 = require("../../constants/contracts.js");
const contract_js_1 = require("../../errors/contract.js");
const encodeDeployData_js_1 = require("../../utils/abi/encodeDeployData.js");
const isBytesEqual_js_1 = require("../../utils/data/isBytesEqual.js");
const isHex_js_1 = require("../../utils/data/isHex.js");
const toHex_js_1 = require("../../utils/encoding/toHex.js");
const getAction_js_1 = require("../../utils/getAction.js");
const serializeSignature_js_1 = require("../../utils/signature/serializeSignature.js");
const call_js_1 = require("./call.js");
async function verifyHash(client, { address, hash, signature, ...callRequest }) {
    const signatureHex = (() => {
        if ((0, isHex_js_1.isHex)(signature))
            return signature;
        if (typeof signature === 'object' && 'r' in signature && 's' in signature)
            return (0, serializeSignature_js_1.serializeSignature)(signature);
        return (0, toHex_js_1.bytesToHex)(signature);
    })();
    try {
        const { data } = await (0, getAction_js_1.getAction)(client, call_js_1.call, 'call')({
            data: (0, encodeDeployData_js_1.encodeDeployData)({
                abi: abis_js_1.universalSignatureValidatorAbi,
                args: [address, hash, signatureHex],
                bytecode: contracts_js_1.universalSignatureValidatorByteCode,
            }),
            ...callRequest,
        });
        return (0, isBytesEqual_js_1.isBytesEqual)(data ?? '0x0', '0x1');
    }
    catch (error) {
        if (error instanceof contract_js_1.CallExecutionError) {
            return false;
        }
        throw error;
    }
}
exports.verifyHash = verifyHash;
//# sourceMappingURL=verifyHash.js.map