import { createThirdwebClient, defineChain, getContract } from 'thirdweb';

export const chain = defineChain(2522);

const contractAddress = "0x31cedb868cfe1b7a921697D3750346EC3e71B9Ca";
const contractABI = [
    {
      "type": "constructor",
      "name": "",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "spender",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "value",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "DelegateChanged",
      "inputs": [
        {
          "type": "address",
          "name": "delegator",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "fromDelegate",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "toDelegate",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "DelegateVotesChanged",
      "inputs": [
        {
          "type": "address",
          "name": "delegate",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "previousBalance",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "newBalance",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "EIP712DomainChanged",
      "inputs": [],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "FlatPlatformFeeUpdated",
      "inputs": [
        {
          "type": "address",
          "name": "platformFeeRecipient",
          "indexed": false,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "flatFee",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Initialized",
      "inputs": [
        {
          "type": "uint8",
          "name": "version",
          "indexed": false,
          "internalType": "uint8"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "PlatformFeeInfoUpdated",
      "inputs": [
        {
          "type": "address",
          "name": "platformFeeRecipient",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "platformFeeBps",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "PlatformFeeTypeUpdated",
      "inputs": [
        {
          "type": "uint8",
          "name": "feeType",
          "indexed": false,
          "internalType": "enum IPlatformFee.PlatformFeeType"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "PrimarySaleRecipientUpdated",
      "inputs": [
        {
          "type": "address",
          "name": "recipient",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleAdminChanged",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "bytes32",
          "name": "previousAdminRole",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "bytes32",
          "name": "newAdminRole",
          "indexed": true,
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleGranted",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "sender",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleRevoked",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "sender",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TokensMinted",
      "inputs": [
        {
          "type": "address",
          "name": "mintedTo",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "quantityMinted",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TokensMintedWithSignature",
      "inputs": [
        {
          "type": "address",
          "name": "signer",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "mintedTo",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "tuple",
          "name": "mintRequest",
          "components": [
            {
              "type": "address",
              "name": "to",
              "internalType": "address"
            },
            {
              "type": "address",
              "name": "primarySaleRecipient",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "quantity",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "price",
              "internalType": "uint256"
            },
            {
              "type": "address",
              "name": "currency",
              "internalType": "address"
            },
            {
              "type": "uint128",
              "name": "validityStartTimestamp",
              "internalType": "uint128"
            },
            {
              "type": "uint128",
              "name": "validityEndTimestamp",
              "internalType": "uint128"
            },
            {
              "type": "bytes32",
              "name": "uid",
              "internalType": "bytes32"
            }
          ],
          "indexed": false,
          "internalType": "struct ITokenERC20.MintRequest"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "type": "address",
          "name": "from",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "value",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "CLOCK_MODE",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "DEFAULT_ADMIN_ROLE",
      "inputs": [],
      "outputs": [
        {
          "type": "bytes32",
          "name": "",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "DOMAIN_SEPARATOR",
      "inputs": [],
      "outputs": [
        {
          "type": "bytes32",
          "name": "",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "allowance",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "spender",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        {
          "type": "address",
          "name": "spender",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "burn",
      "inputs": [
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "burnFrom",
      "inputs": [
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "checkpoints",
      "inputs": [
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        },
        {
          "type": "uint32",
          "name": "pos",
          "internalType": "uint32"
        }
      ],
      "outputs": [
        {
          "type": "tuple",
          "name": "",
          "components": [
            {
              "type": "uint32",
              "name": "fromBlock",
              "internalType": "uint32"
            },
            {
              "type": "uint224",
              "name": "votes",
              "internalType": "uint224"
            }
          ],
          "internalType": "struct ERC20VotesUpgradeable.Checkpoint"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "clock",
      "inputs": [],
      "outputs": [
        {
          "type": "uint48",
          "name": "",
          "internalType": "uint48"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "contractType",
      "inputs": [],
      "outputs": [
        {
          "type": "bytes32",
          "name": "",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "contractURI",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "contractVersion",
      "inputs": [],
      "outputs": [
        {
          "type": "uint8",
          "name": "",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "decimals",
      "inputs": [],
      "outputs": [
        {
          "type": "uint8",
          "name": "",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "decreaseAllowance",
      "inputs": [
        {
          "type": "address",
          "name": "spender",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "subtractedValue",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "delegate",
      "inputs": [
        {
          "type": "address",
          "name": "delegatee",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "delegateBySig",
      "inputs": [
        {
          "type": "address",
          "name": "delegatee",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "nonce",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "expiry",
          "internalType": "uint256"
        },
        {
          "type": "uint8",
          "name": "v",
          "internalType": "uint8"
        },
        {
          "type": "bytes32",
          "name": "r",
          "internalType": "bytes32"
        },
        {
          "type": "bytes32",
          "name": "s",
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "delegates",
      "inputs": [
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "eip712Domain",
      "inputs": [],
      "outputs": [
        {
          "type": "bytes1",
          "name": "fields",
          "internalType": "bytes1"
        },
        {
          "type": "string",
          "name": "name",
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "version",
          "internalType": "string"
        },
        {
          "type": "uint256",
          "name": "chainId",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "verifyingContract",
          "internalType": "address"
        },
        {
          "type": "bytes32",
          "name": "salt",
          "internalType": "bytes32"
        },
        {
          "type": "uint256[]",
          "name": "extensions",
          "internalType": "uint256[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getPastTotalSupply",
      "inputs": [
        {
          "type": "uint256",
          "name": "timepoint",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getPastVotes",
      "inputs": [
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "timepoint",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getPlatformFeeInfo",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        },
        {
          "type": "uint16",
          "name": "",
          "internalType": "uint16"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoleAdmin",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "type": "bytes32",
          "name": "",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoleMember",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "uint256",
          "name": "index",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoleMemberCount",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getVotes",
      "inputs": [
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "grantRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "hasRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "increaseAllowance",
      "inputs": [
        {
          "type": "address",
          "name": "spender",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "addedValue",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "initialize",
      "inputs": [
        {
          "type": "address",
          "name": "_defaultAdmin",
          "internalType": "address"
        },
        {
          "type": "string",
          "name": "_name",
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "_symbol",
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "_contractURI",
          "internalType": "string"
        },
        {
          "type": "address[]",
          "name": "_trustedForwarders",
          "internalType": "address[]"
        },
        {
          "type": "address",
          "name": "_primarySaleRecipient",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "_platformFeeRecipient",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "_platformFeeBps",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "isTrustedForwarder",
      "inputs": [
        {
          "type": "address",
          "name": "forwarder",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "mintTo",
      "inputs": [
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "mintWithSignature",
      "inputs": [
        {
          "type": "tuple",
          "name": "_req",
          "components": [
            {
              "type": "address",
              "name": "to",
              "internalType": "address"
            },
            {
              "type": "address",
              "name": "primarySaleRecipient",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "quantity",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "price",
              "internalType": "uint256"
            },
            {
              "type": "address",
              "name": "currency",
              "internalType": "address"
            },
            {
              "type": "uint128",
              "name": "validityStartTimestamp",
              "internalType": "uint128"
            },
            {
              "type": "uint128",
              "name": "validityEndTimestamp",
              "internalType": "uint128"
            },
            {
              "type": "bytes32",
              "name": "uid",
              "internalType": "bytes32"
            }
          ],
          "internalType": "struct ITokenERC20.MintRequest"
        },
        {
          "type": "bytes",
          "name": "_signature",
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "multicall",
      "inputs": [
        {
          "type": "bytes[]",
          "name": "data",
          "internalType": "bytes[]"
        }
      ],
      "outputs": [
        {
          "type": "bytes[]",
          "name": "results",
          "internalType": "bytes[]"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "nonces",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "numCheckpoints",
      "inputs": [
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint32",
          "name": "",
          "internalType": "uint32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "permit",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "spender",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "value",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "deadline",
          "internalType": "uint256"
        },
        {
          "type": "uint8",
          "name": "v",
          "internalType": "uint8"
        },
        {
          "type": "bytes32",
          "name": "r",
          "internalType": "bytes32"
        },
        {
          "type": "bytes32",
          "name": "s",
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "primarySaleRecipient",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renounceRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "revokeRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setContractURI",
      "inputs": [
        {
          "type": "string",
          "name": "_uri",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setPlatformFeeInfo",
      "inputs": [
        {
          "type": "address",
          "name": "_platformFeeRecipient",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "_platformFeeBps",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setPrimarySaleRecipient",
      "inputs": [
        {
          "type": "address",
          "name": "_saleRecipient",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        {
          "type": "bytes4",
          "name": "interfaceId",
          "internalType": "bytes4"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalSupply",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transfer",
      "inputs": [
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        {
          "type": "address",
          "name": "from",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "verify",
      "inputs": [
        {
          "type": "tuple",
          "name": "_req",
          "components": [
            {
              "type": "address",
              "name": "to",
              "internalType": "address"
            },
            {
              "type": "address",
              "name": "primarySaleRecipient",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "quantity",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "price",
              "internalType": "uint256"
            },
            {
              "type": "address",
              "name": "currency",
              "internalType": "address"
            },
            {
              "type": "uint128",
              "name": "validityStartTimestamp",
              "internalType": "uint128"
            },
            {
              "type": "uint128",
              "name": "validityEndTimestamp",
              "internalType": "uint128"
            },
            {
              "type": "bytes32",
              "name": "uid",
              "internalType": "bytes32"
            }
          ],
          "internalType": "struct ITokenERC20.MintRequest"
        },
        {
          "type": "bytes",
          "name": "_signature",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        },
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    }
  ] as const;

export const CONTRACT = getContract({
    client: {
        clientId: "ba76184dfc70100e3fb2d23dbb057170",
        secretKey: "er6KlYI4tQlh5WPNn_Fuy00guFk43yP24F9lCPtnKdOphDl0hSjSsfutjaN_4C44k2aPcywO2xyU6eMlS2aGqw",
    },
    chain: chain,
    address: contractAddress,
    abi: contractABI,
});