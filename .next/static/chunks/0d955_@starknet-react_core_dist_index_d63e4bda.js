(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@starknet-react+core@3.7.4_get-starknet-core@4.0.0_react@19.1.0_starknet@6.24.1_typescript@5.8.3/node_modules/@starknet-react/core/dist/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CartridgeExplorer": (()=>CartridgeExplorer),
    "Connector": (()=>Connector),
    "ConnectorAlreadyConnectedError": (()=>ConnectorAlreadyConnectedError),
    "ConnectorNotConnectedError": (()=>ConnectorNotConnectedError),
    "ConnectorNotFoundError": (()=>ConnectorNotFoundError),
    "InjectedConnector": (()=>InjectedConnector),
    "LegacyInjectedConnector": (()=>LegacyInjectedConnector),
    "MockConnector": (()=>MockConnector),
    "OverrideAccount": (()=>AccountProvider),
    "StarknetConfig": (()=>StarknetConfig),
    "StarkscanExplorer": (()=>StarkscanExplorer),
    "UnsupportedAccountInterfaceError": (()=>UnsupportedAccountInterfaceError),
    "UserNotConnectedError": (()=>UserNotConnectedError),
    "UserRejectedRequestError": (()=>UserRejectedRequestError),
    "ViewblockExplorer": (()=>ViewblockExplorer),
    "VoyagerExplorer": (()=>VoyagerExplorer),
    "alchemyProvider": (()=>alchemyProvider),
    "argent": (()=>argent),
    "blastProvider": (()=>blastProvider),
    "braavos": (()=>braavos),
    "cartridge": (()=>cartridge),
    "cartridgeProvider": (()=>cartridgeProvider),
    "getAddress": (()=>getAddress),
    "infuraProvider": (()=>infuraProvider),
    "injected": (()=>injected),
    "jsonRpcProvider": (()=>jsonRpcProvider),
    "lavaProvider": (()=>lavaProvider),
    "legacyInjected": (()=>legacyInjected),
    "nethermindProvider": (()=>nethermindProvider),
    "publicProvider": (()=>publicProvider),
    "reddioProvider": (()=>reddioProvider),
    "slotProvider": (()=>slotProvider),
    "starknetChainId": (()=>starknetChainId),
    "starkscan": (()=>starkscan),
    "useAccount": (()=>useAccount),
    "useAddChain": (()=>useAddChain),
    "useBalance": (()=>useBalance),
    "useBlock": (()=>useBlock),
    "useBlockNumber": (()=>useBlockNumber),
    "useCall": (()=>useCall),
    "useConnect": (()=>useConnect),
    "useContract": (()=>useContract),
    "useContractFactory": (()=>useContractFactory),
    "useDeclareContract": (()=>useDeclareContract),
    "useDeployAccount": (()=>useDeployAccount),
    "useDisconnect": (()=>useDisconnect),
    "useEstimateFees": (()=>useEstimateFees),
    "useEvents": (()=>useEvents),
    "useExplorer": (()=>useExplorer),
    "useInjectedConnectors": (()=>useInjectedConnectors),
    "useInvalidateOnBlock": (()=>useInvalidateOnBlock),
    "useNetwork": (()=>useNetwork),
    "useNonceForAddress": (()=>useNonceForAddress),
    "useProvider": (()=>useProvider),
    "useReadContract": (()=>useReadContract),
    "useSendTransaction": (()=>useSendTransaction),
    "useSignTypedData": (()=>useSignTypedData),
    "useStarkAddress": (()=>useStarkAddress),
    "useStarkName": (()=>useStarkName),
    "useStarkProfile": (()=>useStarkProfile),
    "useSwitchChain": (()=>useSwitchChain),
    "useTransactionReceipt": (()=>useTransactionReceipt),
    "useUniversalDeployerContract": (()=>useUniversalDeployerContract),
    "useWalletRequest": (()=>useWalletRequest),
    "useWatchAsset": (()=>useWatchAsset),
    "viewblock": (()=>viewblock),
    "voyager": (()=>voyager)
});
// src/connectors/base.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <locals>");
// src/connectors/injected.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@starknet-io+types-js@0.7.10/node_modules/@starknet-io/types-js/dist/esm/wallet-api/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/starknet@6.24.1/node_modules/starknet/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$chains$40$3$2e$1$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$chains$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@starknet-react+chains@3.1.3/node_modules/@starknet-react/chains/dist/index.js [app-client] (ecmascript)");
// src/connectors/discovery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$76$2e$0$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+query-core@5.76.0/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$76$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.76.1_react@19.1.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
// src/query.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$76$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.76.1_react@19.1.0/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$76$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.76.1_react@19.1.0/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$76$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.76.1_react@19.1.0/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_typescript@5.8.3_zod@3.24.4/node_modules/viem/_esm/utils/unit/formatUnits.js [app-client] (ecmascript)");
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
var Connector = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"] {
};
;
;
// src/errors.ts
var ConnectorAlreadyConnectedError = class extends Error {
    constructor(){
        super(...arguments);
        __publicField(this, "name", "ConnectorAlreadyConnectedError");
        __publicField(this, "message", "Connector already connected");
    }
};
var ConnectorNotConnectedError = class extends Error {
    constructor(){
        super(...arguments);
        __publicField(this, "name", "ConnectorNotConnectedError");
        __publicField(this, "message", "Connector not connected");
    }
};
var ConnectorNotFoundError = class extends Error {
    constructor(){
        super(...arguments);
        __publicField(this, "name", "ConnectorNotFoundError");
        __publicField(this, "message", "Connector not found");
    }
};
var UserRejectedRequestError = class extends Error {
    constructor(){
        super(...arguments);
        __publicField(this, "name", "UserRejectedRequestError");
        __publicField(this, "message", "User rejected request");
    }
};
var UserNotConnectedError = class extends Error {
    constructor(){
        super(...arguments);
        __publicField(this, "name", "UserNotConnectedError");
        __publicField(this, "message", "User not connected");
    }
};
var UnsupportedAccountInterfaceError = class extends Error {
    constructor(){
        super(...arguments);
        __publicField(this, "name", "UnsupportedAccountInterfaceError");
        __publicField(this, "message", "Unsupported account interface. starknet-react v1 only supports the starknet.js v5 account interface");
    }
};
// src/connectors/injected.ts
var WALLET_NOT_FOUND_ICON_LIGHT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iYmxhY2siPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTkuODc5IDcuNTE5YzEuMTcxLTEuMDI1IDMuMDcxLTEuMDI1IDQuMjQyIDAgMS4xNzIgMS4wMjUgMS4xNzIgMi42ODcgMCAzLjcxMi0uMjAzLjE3OS0uNDMuMzI2LS42Ny40NDItLjc0NS4zNjEtMS40NS45OTktMS40NSAxLjgyN3YuNzVNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6bS05IDUuMjVoLjAwOHYuMDA4SDEydi0uMDA4eiIgLz4KPC9zdmc+";
var WALLET_NOT_FOUND_ICON_DARK = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0id2hpdGUiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTkuODc5IDcuNTE5YzEuMTcxLTEuMDI1IDMuMDcxLTEuMDI1IDQuMjQyIDAgMS4xNzIgMS4wMjUgMS4xNzIgMi42ODcgMCAzLjcxMi0uMjAzLjE3OS0uNDMuMzI2LS42Ny40NDItLjc0NS4zNjEtMS40NS45OTktMS40NSAxLjgyN3YuNzVNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6bS05IDUuMjVoLjAwOHYuMDA4SDEydi0uMDA4eiIgLz4KPC9zdmc+Cg==";
var walletIcons = {
    argentX: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA2NS4xOTUwOCA1Ny43MzU2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjUuMTk1MDggNTcuNzM1NjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkY4NzVCO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwLjk4NTkyLDBIMjQuMjA4ODhjLTAuNTYsMC0xLjAxMDAxLDAuNDUxMDItMS4wMjE5NywxLjAxMjAyCgljLTAuMzM4OTksMTUuNzU1LTguNTgyMDMsMzAuNzA4OTgtMjIuNzcwMDIsNDEuMzAwOTljLTAuNDUwMDEsMC4zMzcwMS0wLjU1Mjk4LDAuOTY3OTktMC4yMjQsMS40MjNsOS44MTU5OCwxMy41NzMKCWMwLjMzNDA1LDAuNDYyMDEsMC45ODUwNSwwLjU2NTk4LDEuNDQyOTksMC4yMjY5OWM4Ljg3MTAzLTYuNTc5MDEsMTYuMDA3MDItMTQuNTE3LDIxLjE0NjA2LTIzLjMxNQoJYzUuMTM4LDguNzk4LDEyLjI3Mzk5LDE2LjczNTk5LDIxLjE0NiwyMy4zMTVjMC40NTY5NywwLjMzODk5LDEuMTA3OTcsMC4yMzUwMiwxLjQ0MTk2LTAuMjI2OTlsOS44MTYwNC0xMy41NzMKCWMwLjMyODk4LTAuNDU1MDIsMC4yMjY5OS0xLjA4Ni0wLjIyNC0xLjQyM0M1MC41ODk4NiwzMS43MjEwMSw0Mi4zNDY4OCwxNi43NjcwMyw0Mi4wMDc4OSwxLjAxMjAyCglDNDEuOTk1ODcsMC40NTEwMiw0MS41NDY4OSwwLDQwLjk4NTkyLDAiLz4KPC9zdmc+Cg==",
    braavos: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zMjMuNDQgNDEuMzg4NkMzMjQuMTk4IDQyLjY3MjggMzIzLjE5NSA0NC4yNjAzIDMyMS43MDQgNDQuMjYwM0MyOTEuNTEgNDQuMjYwMyAyNjYuOTY1IDY4LjE2NTYgMjY2LjM4OSA5Ny44NzFDMjU2LjA1IDk1Ljk0MDcgMjQ1LjMzNyA5NS43OTU2IDIzNC43NTQgOTcuNTc4N0MyMzQuMDIzIDY4LjAwOSAyMDkuNTQgNDQuMjYwMyAxNzkuNDQ1IDQ0LjI2MDNDMTc3Ljk1MyA0NC4yNjAzIDE3Ni45NDkgNDIuNjcxNiAxNzcuNzA3IDQxLjM4NjVDMTkyLjMyMyAxNi42MzMgMjE5LjQ4MyAwIDI1MC41NzMgMEMyODEuNjY0IDAgMzA4LjgyNCAxNi42MzM5IDMyMy40NCA0MS4zODg2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzIzMjRfNjE4NjkpIi8+CjxwYXRoIGQ9Ik00MTguNzU2IDIyNi44OTRDNDI2LjM3IDIyOS4yIDQzMy41ODEgMjIyLjUxNyA0MzEuMDM2IDIxNC45NzlDNDA0LjUwNyAxMzYuNDAxIDMxNi41MzUgMTA0LjM1OCAyNTAuMTU5IDEwNC4zNThDMTgzLjY3NCAxMDQuMzU4IDkzLjczOTEgMTM3LjQxOCA2OS4zMDUxIDIxNS4zMzFDNjYuOTU3NCAyMjIuODE4IDc0LjE0NjUgMjI5LjI3NSA4MS42NDc5IDIyNi45NzdMMjQ0LjI1IDE3Ny4xNTFDMjQ3LjU2OSAxNzYuMTM0IDI1MS4xMTYgMTc2LjEyOCAyNTQuNDM5IDE3Ny4xMzVMNDE4Ljc1NiAyMjYuODk0WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzIzMjRfNjE4NjkpIi8+CjxwYXRoIGQ9Ik02OS43MTY1IDIzOS40MjZMMjQ0LjM3IDE4Ni40NTZDMjQ3LjY2OSAxODUuNDU2IDI1MS4xOTEgMTg1LjQ1MyAyNTQuNDkyIDE4Ni40NDhMNDMwLjIzMiAyMzkuNDUyQzQ0NC43NiAyNDMuODMzIDQ1NC43MDEgMjU3LjIxNiA0NTQuNzAxIDI3Mi4zOVY0MzAuNDgxQzQ1NC4wMjggNDY5LjA3IDQxOS4zNjIgNTAwIDM4MC43ODYgNTAwSDMxNi43MTJDMzEwLjM3OSA1MDAgMzA1LjI1IDQ5NC44NzcgMzA1LjI1IDQ4OC41NDNWNDMzLjExNUMzMDUuMjUgNDExLjI4OSAzMTguMTY3IDM5MS41MzUgMzM4LjE1NSAzODIuNzkyQzM2NC45NDkgMzcxLjA3MSAzOTYuNjQ2IDM1NS4yMTggNDAyLjYwOCAzMjMuNDA2QzQwNC41MzIgMzEzLjEzOCAzOTcuODM3IDMwMy4yMzQgMzg3LjU5NSAzMDEuMTk4QzM2MS42OTkgMjk2LjA1MSAzMzIuOTg5IDI5OC4wMzkgMzA4LjcxMSAzMDguODk4QzI4MS4xNSAzMjEuMjI1IDI3My45NCAzNDEuNzMxIDI3MS4yNzEgMzY5LjI3TDI2OC4wMzYgMzk4LjkzOEMyNjcuMDQ3IDQwOC4wMDUgMjU4LjU0NiA0MTQuOTUyIDI0OS40MjkgNDE0Ljk1MkMyMzkuOTk4IDQxNC45NTIgMjMyLjkyNiA0MDcuNzY5IDIzMS45MDMgMzk4LjM4OEwyMjguNzI4IDM2OS4yN0MyMjYuNDQyIDM0NS42ODEgMjIyLjI5OCAzMjIuNzY3IDE5Ny45MTIgMzExLjg2QzE3MC4wOTUgMjk5LjQxOSAxNDIuMTQxIDI5NS4yODcgMTEyLjQwNCAzMDEuMTk4QzEwMi4xNjIgMzAzLjIzNCA5NS40NjcgMzEzLjEzOCA5Ny4zOTEzIDMyMy40MDZDMTAzLjQwNSAzNTUuNDk1IDEzNC44NTQgMzcwLjk4NSAxNjEuODQ0IDM4Mi43OTJDMTgxLjgzMyAzOTEuNTM1IDE5NC43NSA0MTEuMjg5IDE5NC43NSA0MzMuMTE1VjQ4OC41MzNDMTk0Ljc1IDQ5NC44NjcgMTg5LjYyMiA1MDAgMTgzLjI4OSA1MDBIMTE5LjIxNEM4MC42Mzc0IDUwMCA0NS45NzE2IDQ2OS4wNyA0NS4yOTc5IDQzMC40ODFWMjcyLjM0OUM0NS4yOTc5IDI1Ny4xOTQgNTUuMjE0MiAyNDMuODI0IDY5LjcxNjUgMjM5LjQyNloiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8yMzI0XzYxODY5KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzIzMjRfNjE4NjkiIHgxPSIyNDUuOTg2IiB5MT0iLTI3IiB4Mj0iNDI1LjQ5NiIgeTI9IjUwMi4zNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RDQ1RSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk2MDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzIzMjRfNjE4NjkiIHgxPSIyNDUuOTg2IiB5MT0iLTI3IiB4Mj0iNDI1LjQ5NiIgeTI9IjUwMi4zNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RDQ1RSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk2MDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzIzMjRfNjE4NjkiIHgxPSIyNDUuOTg2IiB5MT0iLTI3IiB4Mj0iNDI1LjQ5NiIgeTI9IjUwMi4zNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RDQ1RSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk2MDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4="
};
var InjectedConnector = class extends Connector {
    constructor({ options }){
        super();
        __publicField(this, "_wallet");
        __publicField(this, "_options");
        this._options = options;
    }
    get id() {
        return this._options.id;
    }
    get name() {
        this.ensureWallet();
        return this._options.name ?? this._wallet?.name ?? this._options.id;
    }
    get icon() {
        this.ensureWallet();
        const deafultIcon = {
            dark: walletIcons[this.id] || WALLET_NOT_FOUND_ICON_DARK,
            light: walletIcons[this.id] || WALLET_NOT_FOUND_ICON_LIGHT
        };
        return this._options.icon || this._wallet?.icon || deafultIcon;
    }
    available() {
        this.ensureWallet();
        return this._wallet !== void 0;
    }
    async chainId() {
        this.ensureWallet();
        const locked = await this.isLocked();
        if (!this._wallet || locked) {
            throw new ConnectorNotConnectedError();
        }
        try {
            return this.requestChainId();
        } catch  {
            throw new ConnectorNotFoundError();
        }
    }
    async ready() {
        this.ensureWallet();
        if (!this._wallet) return false;
        const permissions = await this.request({
            type: "wallet_getPermissions"
        });
        return permissions?.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].ACCOUNTS);
    }
    async account(provider) {
        this.ensureWallet();
        const locked = await this.isLocked();
        if (locked || !this._wallet) {
            throw new ConnectorNotConnectedError();
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WalletAccount"](provider, this._wallet);
    }
    async connect(_args = {}) {
        this.ensureWallet();
        if (!this._wallet) {
            throw new ConnectorNotFoundError();
        }
        let accounts;
        try {
            accounts = await this.request({
                type: "wallet_requestAccounts"
            });
        } catch  {
            throw new UserRejectedRequestError();
        }
        if (!accounts) {
            throw new UserRejectedRequestError();
        }
        this._wallet.on("accountsChanged", async (accounts2)=>{
            await this.onAccountsChanged(accounts2);
        });
        this._wallet.on("networkChanged", (chainId2, accounts2)=>{
            this.onNetworkChanged(chainId2, accounts2);
        });
        await this.onAccountsChanged(accounts);
        const [account] = accounts;
        const chainId = await this.requestChainId();
        this.emit("connect", {
            account,
            chainId
        });
        return {
            account,
            chainId
        };
    }
    async disconnect() {
        this.ensureWallet();
        if (!this._wallet) {
            throw new ConnectorNotFoundError();
        }
        this.emit("disconnect");
    }
    async request(call) {
        this.ensureWallet();
        if (!this._wallet) {
            throw new ConnectorNotConnectedError();
        }
        try {
            return await this._wallet.request(call);
        } catch  {
            throw new UserRejectedRequestError();
        }
    }
    async isLocked() {
        const accounts = await this.request({
            type: "wallet_requestAccounts",
            params: {
                silent_mode: true
            }
        });
        return accounts.length === 0;
    }
    async requestChainId() {
        const chainIdHex = await this.request({
            type: "wallet_requestChainId"
        });
        return BigInt(chainIdHex);
    }
    ensureWallet() {
        const global_object = globalThis;
        const wallet = global_object?.[`starknet_${this._options.id}`];
        if (wallet) {
            this._wallet = wallet;
        }
    }
    async onAccountsChanged(accounts) {
        if (!accounts) {
            this.emit("disconnect");
        } else {
            const [account] = accounts;
            if (account) {
                const chainId = await this.requestChainId();
                this.emit("change", {
                    account,
                    chainId
                });
            } else {
                this.emit("disconnect");
            }
        }
    }
    onNetworkChanged(chainIdHex, accounts) {
        if (chainIdHex) {
            const chainId = BigInt(chainIdHex);
            const [account] = accounts || [];
            this.emit("change", {
                chainId,
                account
            });
        } else {
            this.emit("change", {});
        }
    }
};
;
;
var WALLET_NOT_FOUND_ICON_LIGHT2 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iYmxhY2siPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTkuODc5IDcuNTE5YzEuMTcxLTEuMDI1IDMuMDcxLTEuMDI1IDQuMjQyIDAgMS4xNzIgMS4wMjUgMS4xNzIgMi42ODcgMCAzLjcxMi0uMjAzLjE3OS0uNDMuMzI2LS42Ny40NDItLjc0NS4zNjEtMS40NS45OTktMS40NSAxLjgyN3YuNzVNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6bS05IDUuMjVoLjAwOHYuMDA4SDEydi0uMDA4eiIgLz4KPC9zdmc+";
var WALLET_NOT_FOUND_ICON_DARK2 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0id2hpdGUiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTkuODc5IDcuNTE5YzEuMTcxLTEuMDI1IDMuMDcxLTEuMDI1IDQuMjQyIDAgMS4xNzIgMS4wMjUgMS4xNzIgMi42ODcgMCAzLjcxMi0uMjAzLjE3OS0uNDMuMzI2LS42Ny40NDItLjc0NS4zNjEtMS40NS45OTktMS40NSAxLjgyN3YuNzVNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6bS05IDUuMjVoLjAwOHYuMDA4SDEydi0uMDA4eiIgLz4KPC9zdmc+Cg==";
var walletIcons2 = {
    argentX: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA2NS4xOTUwOCA1Ny43MzU2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjUuMTk1MDggNTcuNzM1NjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkY4NzVCO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwLjk4NTkyLDBIMjQuMjA4ODhjLTAuNTYsMC0xLjAxMDAxLDAuNDUxMDItMS4wMjE5NywxLjAxMjAyCgljLTAuMzM4OTksMTUuNzU1LTguNTgyMDMsMzAuNzA4OTgtMjIuNzcwMDIsNDEuMzAwOTljLTAuNDUwMDEsMC4zMzcwMS0wLjU1Mjk4LDAuOTY3OTktMC4yMjQsMS40MjNsOS44MTU5OCwxMy41NzMKCWMwLjMzNDA1LDAuNDYyMDEsMC45ODUwNSwwLjU2NTk4LDEuNDQyOTksMC4yMjY5OWM4Ljg3MTAzLTYuNTc5MDEsMTYuMDA3MDItMTQuNTE3LDIxLjE0NjA2LTIzLjMxNQoJYzUuMTM4LDguNzk4LDEyLjI3Mzk5LDE2LjczNTk5LDIxLjE0NiwyMy4zMTVjMC40NTY5NywwLjMzODk5LDEuMTA3OTcsMC4yMzUwMiwxLjQ0MTk2LTAuMjI2OTlsOS44MTYwNC0xMy41NzMKCWMwLjMyODk4LTAuNDU1MDIsMC4yMjY5OS0xLjA4Ni0wLjIyNC0xLjQyM0M1MC41ODk4NiwzMS43MjEwMSw0Mi4zNDY4OCwxNi43NjcwMyw0Mi4wMDc4OSwxLjAxMjAyCglDNDEuOTk1ODcsMC40NTEwMiw0MS41NDY4OSwwLDQwLjk4NTkyLDAiLz4KPC9zdmc+Cg==",
    braavos: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zMjMuNDQgNDEuMzg4NkMzMjQuMTk4IDQyLjY3MjggMzIzLjE5NSA0NC4yNjAzIDMyMS43MDQgNDQuMjYwM0MyOTEuNTEgNDQuMjYwMyAyNjYuOTY1IDY4LjE2NTYgMjY2LjM4OSA5Ny44NzFDMjU2LjA1IDk1Ljk0MDcgMjQ1LjMzNyA5NS43OTU2IDIzNC43NTQgOTcuNTc4N0MyMzQuMDIzIDY4LjAwOSAyMDkuNTQgNDQuMjYwMyAxNzkuNDQ1IDQ0LjI2MDNDMTc3Ljk1MyA0NC4yNjAzIDE3Ni45NDkgNDIuNjcxNiAxNzcuNzA3IDQxLjM4NjVDMTkyLjMyMyAxNi42MzMgMjE5LjQ4MyAwIDI1MC41NzMgMEMyODEuNjY0IDAgMzA4LjgyNCAxNi42MzM5IDMyMy40NCA0MS4zODg2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzIzMjRfNjE4NjkpIi8+CjxwYXRoIGQ9Ik00MTguNzU2IDIyNi44OTRDNDI2LjM3IDIyOS4yIDQzMy41ODEgMjIyLjUxNyA0MzEuMDM2IDIxNC45NzlDNDA0LjUwNyAxMzYuNDAxIDMxNi41MzUgMTA0LjM1OCAyNTAuMTU5IDEwNC4zNThDMTgzLjY3NCAxMDQuMzU4IDkzLjczOTEgMTM3LjQxOCA2OS4zMDUxIDIxNS4zMzFDNjYuOTU3NCAyMjIuODE4IDc0LjE0NjUgMjI5LjI3NSA4MS42NDc5IDIyNi45NzdMMjQ0LjI1IDE3Ny4xNTFDMjQ3LjU2OSAxNzYuMTM0IDI1MS4xMTYgMTc2LjEyOCAyNTQuNDM5IDE3Ny4xMzVMNDE4Ljc1NiAyMjYuODk0WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzIzMjRfNjE4NjkpIi8+CjxwYXRoIGQ9Ik02OS43MTY1IDIzOS40MjZMMjQ0LjM3IDE4Ni40NTZDMjQ3LjY2OSAxODUuNDU2IDI1MS4xOTEgMTg1LjQ1MyAyNTQuNDkyIDE4Ni40NDhMNDMwLjIzMiAyMzkuNDUyQzQ0NC43NiAyNDMuODMzIDQ1NC43MDEgMjU3LjIxNiA0NTQuNzAxIDI3Mi4zOVY0MzAuNDgxQzQ1NC4wMjggNDY5LjA3IDQxOS4zNjIgNTAwIDM4MC43ODYgNTAwSDMxNi43MTJDMzEwLjM3OSA1MDAgMzA1LjI1IDQ5NC44NzcgMzA1LjI1IDQ4OC41NDNWNDMzLjExNUMzMDUuMjUgNDExLjI4OSAzMTguMTY3IDM5MS41MzUgMzM4LjE1NSAzODIuNzkyQzM2NC45NDkgMzcxLjA3MSAzOTYuNjQ2IDM1NS4yMTggNDAyLjYwOCAzMjMuNDA2QzQwNC41MzIgMzEzLjEzOCAzOTcuODM3IDMwMy4yMzQgMzg3LjU5NSAzMDEuMTk4QzM2MS42OTkgMjk2LjA1MSAzMzIuOTg5IDI5OC4wMzkgMzA4LjcxMSAzMDguODk4QzI4MS4xNSAzMjEuMjI1IDI3My45NCAzNDEuNzMxIDI3MS4yNzEgMzY5LjI3TDI2OC4wMzYgMzk4LjkzOEMyNjcuMDQ3IDQwOC4wMDUgMjU4LjU0NiA0MTQuOTUyIDI0OS40MjkgNDE0Ljk1MkMyMzkuOTk4IDQxNC45NTIgMjMyLjkyNiA0MDcuNzY5IDIzMS45MDMgMzk4LjM4OEwyMjguNzI4IDM2OS4yN0MyMjYuNDQyIDM0NS42ODEgMjIyLjI5OCAzMjIuNzY3IDE5Ny45MTIgMzExLjg2QzE3MC4wOTUgMjk5LjQxOSAxNDIuMTQxIDI5NS4yODcgMTEyLjQwNCAzMDEuMTk4QzEwMi4xNjIgMzAzLjIzNCA5NS40NjcgMzEzLjEzOCA5Ny4zOTEzIDMyMy40MDZDMTAzLjQwNSAzNTUuNDk1IDEzNC44NTQgMzcwLjk4NSAxNjEuODQ0IDM4Mi43OTJDMTgxLjgzMyAzOTEuNTM1IDE5NC43NSA0MTEuMjg5IDE5NC43NSA0MzMuMTE1VjQ4OC41MzNDMTk0Ljc1IDQ5NC44NjcgMTg5LjYyMiA1MDAgMTgzLjI4OSA1MDBIMTE5LjIxNEM4MC42Mzc0IDUwMCA0NS45NzE2IDQ2OS4wNyA0NS4yOTc5IDQzMC40ODFWMjcyLjM0OUM0NS4yOTc5IDI1Ny4xOTQgNTUuMjE0MiAyNDMuODI0IDY5LjcxNjUgMjM5LjQyNloiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8yMzI0XzYxODY5KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzIzMjRfNjE4NjkiIHgxPSIyNDUuOTg2IiB5MT0iLTI3IiB4Mj0iNDI1LjQ5NiIgeTI9IjUwMi4zNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RDQ1RSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk2MDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzIzMjRfNjE4NjkiIHgxPSIyNDUuOTg2IiB5MT0iLTI3IiB4Mj0iNDI1LjQ5NiIgeTI9IjUwMi4zNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RDQ1RSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk2MDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzIzMjRfNjE4NjkiIHgxPSIyNDUuOTg2IiB5MT0iLTI3IiB4Mj0iNDI1LjQ5NiIgeTI9IjUwMi4zNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RDQ1RSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk2MDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4="
};
var LegacyInjectedConnector = class extends Connector {
    constructor({ options }){
        super();
        __publicField(this, "_wallet");
        __publicField(this, "_options");
        this._options = options;
    }
    get id() {
        return this._options.id;
    }
    get name() {
        return this._options.name ?? this._wallet?.name ?? this._options.id;
    }
    get icon() {
        const defaultIcon = {
            dark: walletIcons2[this.id] || WALLET_NOT_FOUND_ICON_DARK2,
            light: walletIcons2[this.id] || WALLET_NOT_FOUND_ICON_LIGHT2
        };
        return this._options.icon || this._wallet?.icon || defaultIcon;
    }
    available() {
        this.ensureWallet();
        return this._wallet !== void 0;
    }
    async chainId() {
        this.ensureWallet();
        if (!this._wallet || !this._wallet.provider) {
            throw new ConnectorNotConnectedError();
        }
        const chainIdHex = await this._wallet.provider.getChainId();
        const chainId = BigInt(chainIdHex);
        return chainId;
    }
    async ready() {
        this.ensureWallet();
        if (!this._wallet) return false;
        return await this._wallet.isPreauthorized();
    }
    async connect(_args = {}) {
        this.ensureWallet();
        if (!this._wallet) {
            throw new ConnectorNotFoundError();
        }
        let accounts;
        try {
            accounts = await this._wallet.enable({
                starknetVersion: "v5"
            });
        } catch  {
            throw new UserRejectedRequestError();
        }
        if (!this._wallet.isConnected || !this._wallet.account || !accounts) {
            throw new UserRejectedRequestError();
        }
        this._wallet.on("accountsChanged", async (accounts2)=>{
            if (!accounts2) return;
            await this.onAccountsChanged(accounts2);
        });
        this._wallet.on("networkChanged", (network)=>{
            this.onNetworkChanged(network);
        });
        await this.onAccountsChanged(accounts);
        const account = this._wallet.account.address;
        const chainId = await this.chainId();
        this.emit("connect", {
            account,
            chainId
        });
        return {
            account,
            chainId
        };
    }
    async disconnect() {
        this.ensureWallet();
        if (!this.available()) {
            throw new ConnectorNotFoundError();
        }
        if (!this._wallet?.isConnected) {
            throw new UserNotConnectedError();
        }
        this.emit("disconnect");
    }
    async account() {
        this.ensureWallet();
        if (!this._wallet || !this._wallet.account) {
            throw new ConnectorNotConnectedError();
        }
        return this._wallet.account;
    }
    async request(call) {
        this.ensureWallet();
        if (!this._wallet) {
            throw new ConnectorNotConnectedError();
        }
        try {
            switch(call.type){
                case "wallet_getPermissions":
                    {
                        if (this._wallet) {
                            return [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].ACCOUNTS
                            ];
                        }
                        return [];
                    }
                case "wallet_requestAccounts":
                    {
                        if (this._wallet.account) {
                            return [
                                this._wallet.account.address
                            ];
                        }
                        return [];
                    }
                case "wallet_requestChainId":
                    {
                        if (this._wallet.chainId) {
                            return this._wallet.chainId;
                        }
                        return null;
                    }
                case "wallet_addInvokeTransaction":
                    {
                        if (!this._wallet) {
                            throw new Error("Send transaction failed");
                        }
                        const calls = (call.params.calls ?? []).map(// @ts-ignore
                        ({ calldata, contract_address, entry_point })=>({
                                calldata,
                                contractAddress: contract_address,
                                entrypoint: entry_point
                            }));
                        return await this._wallet.account?.execute(calls);
                    }
                default:
                    {
                        throw new Error(`Wallet API method ${call.type} is not supported.`);
                    }
            }
        } catch  {
            throw new UserRejectedRequestError();
        }
    }
    ensureWallet() {
        const installed = getAvailableWallets(globalThis);
        const wallet = installed.filter((w)=>w.id === this._options.id)[0];
        if (wallet) {
            this._wallet = wallet;
        }
    }
    async onAccountsChanged(accounts) {
        let account;
        if (typeof accounts === "string") {
            account = accounts;
        } else {
            account = accounts[0];
        }
        if (account) {
            const chainId = await this.chainId();
            this.emit("change", {
                account,
                chainId
            });
        } else {
            this.emit("disconnect");
        }
    }
    onNetworkChanged(network) {
        switch(network){
            // Argent
            case "SN_MAIN":
                this.emit("change", {
                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$chains$40$3$2e$1$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$chains$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"].id
                });
                break;
            case "SN_SEPOLIA":
                this.emit("change", {
                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$chains$40$3$2e$1$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$chains$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"].id
                });
                break;
            // Braavos
            case "mainnet-alpha":
                this.emit("change", {
                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$chains$40$3$2e$1$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$chains$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"].id
                });
                break;
            case "sepolia-alpha":
                this.emit("change", {
                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$chains$40$3$2e$1$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$chains$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"].id
                });
                break;
            default:
                this.emit("change", {});
                break;
        }
    }
};
function getAvailableWallets(obj) {
    return Object.values(Object.getOwnPropertyNames(obj).reduce((wallets, key)=>{
        if (key.startsWith("starknet")) {
            const wallet = obj[key];
            if (isWalletObject(wallet) && !wallets[wallet.id]) {
                wallets[wallet.id] = wallet;
            }
        }
        return wallets;
    }, {}));
}
function isWalletObject(wallet) {
    try {
        return wallet && [
            // wallet's must have methods/members, see IStarknetWindowObject
            "request",
            "isConnected",
            "provider",
            "enable",
            "isPreauthorized",
            "on",
            "off",
            "version",
            "id",
            "name",
            "icon"
        ].every((key)=>key in wallet);
    } catch (err) {}
    return false;
}
;
// src/connectors/helpers.ts
function argent() {
    return new InjectedConnector({
        options: {
            id: "argentX",
            name: "Argent X"
        }
    });
}
function braavos() {
    return new InjectedConnector({
        options: {
            id: "braavos",
            name: "Braavos"
        }
    });
}
function injected({ id }) {
    return new InjectedConnector({
        options: {
            id
        }
    });
}
function legacyInjected({ id }) {
    return new LegacyInjectedConnector({
        options: {
            id
        }
    });
}
// src/connectors/discovery.ts
function useInjectedConnectors({ recommended, includeRecommended = "always", order = "alphabetical", shimLegacyConnectors = [] }) {
    const [injectedConnectors, setInjectedConnectors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const refreshConnectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInjectedConnectors.useCallback[refreshConnectors]": ()=>{
            const wallets = scanObjectForWallets(window);
            const connectors2 = wallets.map({
                "useInjectedConnectors.useCallback[refreshConnectors].connectors2": (wallet)=>{
                    if (shimLegacyConnectors.includes(wallet.id)) {
                        return legacyInjected({
                            id: wallet.id
                        });
                    }
                    return injected({
                        id: wallet.id
                    });
                }
            }["useInjectedConnectors.useCallback[refreshConnectors].connectors2"]);
            setInjectedConnectors(connectors2);
        }
    }["useInjectedConnectors.useCallback[refreshConnectors]"], [
        shimLegacyConnectors.includes
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInjectedConnectors.useEffect": ()=>{
            refreshConnectors();
        }
    }["useInjectedConnectors.useEffect"], [
        refreshConnectors
    ]);
    const connectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useInjectedConnectors.useMemo[connectors]": ()=>{
            return mergeConnectors(injectedConnectors, recommended ?? [], {
                includeRecommended,
                order
            });
        }
    }["useInjectedConnectors.useMemo[connectors]"], [
        injectedConnectors,
        recommended,
        includeRecommended,
        order
    ]);
    return {
        connectors
    };
}
function mergeConnectors(injected2, recommended, { includeRecommended, order }) {
    const injectedIds = new Set(injected2.map((connector)=>connector.id));
    const allConnectors = [
        ...injected2
    ];
    const shouldAddRecommended = includeRecommended === "always" || includeRecommended === "onlyIfNoConnectors" && injected2.length === 0;
    if (shouldAddRecommended) {
        allConnectors.push(...recommended.filter((connector)=>!injectedIds.has(connector.id)));
    }
    if (order === "random") {
        return shuffle(allConnectors);
    }
    return allConnectors.sort((a, b)=>a.id.localeCompare(b.id));
}
function shuffle(arr) {
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [
            arr[j],
            arr[i]
        ];
    }
    return arr;
}
function scanObjectForWallets(obj) {
    return Object.values(Object.getOwnPropertyNames(obj).reduce((wallets, key)=>{
        if (key.startsWith("starknet")) {
            const wallet = obj[key];
            if (isWalletObject2(wallet) && !wallets[wallet.id]) {
                wallets[wallet.id] = wallet;
            }
        }
        return wallets;
    }, {}));
}
function isWalletObject2(wallet) {
    try {
        return wallet && [
            // wallet's must have methods/members, see IStarknetWindowObject
            "request",
            "isConnected",
            "provider",
            "enable",
            "isPreauthorized",
            "on",
            "off",
            "version",
            "id",
            "name",
            "icon"
        ].every((key)=>key in wallet);
    } catch (err) {}
    return false;
}
;
;
var MockConnector = class extends Connector {
    constructor({ accounts, options }){
        super();
        __publicField(this, "_accounts");
        __publicField(this, "_accountIndex", 0);
        __publicField(this, "_connected", false);
        __publicField(this, "_chainId", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$chains$40$3$2e$1$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$chains$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devnet"].id);
        __publicField(this, "options");
        if (accounts.mainnet.length === 0 || accounts.sepolia.length === 0) {
            throw new Error("MockConnector: accounts must not be empty");
        }
        this._accounts = accounts;
        this.options = options;
    }
    switchChain(chainId) {
        this._chainId = chainId;
        this._accountIndex = 0;
        let account;
        if (this.options.unifiedSwitchAccountAndChain) {
            account = this._account.address;
        }
        this.emit("change", {
            chainId,
            account
        });
        if (this.options.emitChangeAccountOnChainSwitch ?? true) {
            this.switchAccount(this._accountIndex);
        }
    }
    switchAccount(accountIndex) {
        this._accountIndex = accountIndex;
        this.emit("change", {
            account: this._account.address
        });
    }
    get id() {
        return this.options.id;
    }
    get name() {
        return this.options.name;
    }
    get icon() {
        return this.options.icon ?? "";
    }
    available() {
        return this.options.available ?? true;
    }
    async chainId() {
        const chainIdHex = await this.request({
            type: "wallet_requestChainId"
        });
        const chainId = BigInt(chainIdHex);
        return chainId;
    }
    async ready() {
        const permissions = await this.request({
            type: "wallet_getPermissions"
        });
        if (!permissions?.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].ACCOUNTS)) {
            return false;
        }
        return true;
    }
    async connect() {
        if (this.options.failConnect) {
            throw new UserRejectedRequestError();
        }
        this._connected = true;
        const accounts = await this.request({
            type: "wallet_requestAccounts",
            params: {
                silent_mode: true
            }
        });
        const chainId = await this.chainId();
        const [account] = accounts;
        return {
            account,
            chainId
        };
    }
    async disconnect() {
        this._connected = false;
        this.emit("disconnect");
    }
    async request(call) {
        const { type, params } = call;
        if (!this.available()) {
            throw new ConnectorNotFoundError();
        }
        if (this.options.rejectRequest) {
            throw new UserRejectedRequestError();
        }
        switch(type){
            case "wallet_requestChainId":
                return this._chainId.toString();
            case "wallet_getPermissions":
                if (this._connected) return [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$io$2b$types$2d$js$40$0$2e$7$2e$10$2f$node_modules$2f40$starknet$2d$io$2f$types$2d$js$2f$dist$2f$esm$2f$wallet$2d$api$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Permission"].ACCOUNTS
                ];
                return [];
            case "wallet_requestAccounts":
                return [
                    this._account.address
                ];
            case "wallet_addStarknetChain":
                return true;
            case "wallet_watchAsset":
                return true;
            case "wallet_switchStarknetChain":
                {
                    if (!params) throw new Error("Params are missing");
                    const { chainId } = params;
                    this.switchChain(BigInt(chainId));
                    return true;
                }
            case "wallet_addDeclareTransaction":
                {
                    if (!params) throw new Error("Params are missing");
                    const { compiled_class_hash, contract_class, class_hash } = params;
                    return await this._account.declare({
                        compiledClassHash: compiled_class_hash,
                        contract: {
                            ...contract_class,
                            abi: JSON.parse(contract_class.abi)
                        },
                        classHash: class_hash
                    });
                }
            case "wallet_addInvokeTransaction":
                {
                    if (!params) throw new Error("Params are missing");
                    const { calls } = params;
                    return await this._account.execute(transformCalls(calls));
                }
            case "wallet_signTypedData":
                {
                    if (!params) throw new Error("Params are missing");
                    const { domain, message, primaryType, types } = params;
                    return await this._account.signMessage({
                        domain,
                        message,
                        primaryType,
                        types
                    });
                }
            default:
                throw new Error("Unknown request type");
        }
    }
    async account(provider) {
        if (!this.available()) {
            throw new ConnectorNotFoundError();
        }
        if (!this._connected) {
            throw new ConnectorNotConnectedError();
        }
        return this._account;
    }
    get _account() {
        let account;
        if (this._chainId === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$chains$40$3$2e$1$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$chains$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"].id) {
            account = this._accounts.mainnet[this._accountIndex];
        } else {
            account = this._accounts.sepolia[this._accountIndex];
        }
        if (!account) {
            throw new ConnectorNotConnectedError();
        }
        return account;
    }
};
function transformCalls(calls) {
    return calls.map((call)=>({
            contractAddress: call.contract_address,
            entrypoint: call.entry_point,
            calldata: call.calldata
        }));
}
;
;
;
;
;
;
var AccountContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({
    account: void 0,
    address: void 0
});
function useStarknetAccount() {
    const { account, address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AccountContext);
    return {
        account,
        address
    };
}
function AccountProvider({ address, account, children }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AccountContext.Provider, {
        value: {
            account,
            address
        },
        children
    });
}
;
var defaultQueryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$76$2e$0$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]();
var StarknetContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(void 0);
function useStarknet() {
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StarknetContext);
    if (!state) {
        throw new Error("useStarknet must be used within a StarknetProvider or StarknetConfig");
    }
    return state;
}
function useStarknetManager({ chains, provider, explorer, connectors = [], autoConnect = false, defaultChainId }) {
    const defaultChain = defaultChainId ? chains.find((c)=>c.id === defaultChainId) ?? chains[0] : chains[0];
    if (defaultChain === void 0) {
        throw new Error("Must provide at least one chain.");
    }
    const seen = /* @__PURE__ */ new Set();
    for (const chain of chains){
        if (seen.has(chain.id)) {
            throw new Error(`Duplicated chain id found: ${chain.id}`);
        }
        seen.add(chain.id);
    }
    const { chain: _, provider: defaultProvider } = providerForChain(defaultChain, provider);
    const connectorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        currentChain: defaultChain,
        currentProvider: defaultProvider,
        connectors
    });
    const updateChainAndProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStarknetManager.useCallback2[updateChainAndProvider]": ({ chainId })=>{
            if (!chainId) return;
            for (const chain of chains){
                if (chain.id === chainId) {
                    const { chain: newChain, provider: newProvider } = providerForChain(chain, provider);
                    setState({
                        "useStarknetManager.useCallback2[updateChainAndProvider]": (state2)=>({
                                ...state2,
                                currentChain: newChain,
                                currentProvider: newProvider
                            })
                    }["useStarknetManager.useCallback2[updateChainAndProvider]"]);
                    return;
                }
            }
        }
    }["useStarknetManager.useCallback2[updateChainAndProvider]"], [
        chains,
        provider
    ]);
    const handleConnectorChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStarknetManager.useCallback2[handleConnectorChange]": async ({ chainId, account: address })=>{
            if (chainId) {
                updateChainAndProvider({
                    chainId
                });
            }
            if (address && connectorRef.current) {
                setState({
                    "useStarknetManager.useCallback2[handleConnectorChange]": (state2)=>({
                            ...state2,
                            currentAddress: address
                        })
                }["useStarknetManager.useCallback2[handleConnectorChange]"]);
            }
        }
    }["useStarknetManager.useCallback2[handleConnectorChange]"], [
        updateChainAndProvider
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStarknetManager.useEffect2": ()=>{
            if (!connectorRef.current) {
                setState({
                    "useStarknetManager.useEffect2": (state2)=>({
                            ...state2,
                            currentChain: defaultChain,
                            currentProvider: providerForChain(defaultChain, provider).provider
                        })
                }["useStarknetManager.useEffect2"]);
            }
        }
    }["useStarknetManager.useEffect2"], [
        defaultChain,
        provider
    ]);
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStarknetManager.useCallback2[connect]": async ({ connector })=>{
            if (!connector) {
                throw new Error("Must provide a connector.");
            }
            const needsListenerSetup = connectorRef.current?.id !== connector.id;
            if (needsListenerSetup) {
                connectorRef.current?.off("change", handleConnectorChange);
                connectorRef.current?.off("disconnect", disconnect);
            }
            try {
                const { chainId, account: address } = await connector.connect({
                    chainIdHint: defaultChain.id
                });
                if (address !== state.currentAddress) {
                    connectorRef.current = connector;
                    setState({
                        "useStarknetManager.useCallback2[connect]": (state2)=>({
                                ...state2,
                                currentAddress: address
                            })
                    }["useStarknetManager.useCallback2[connect]"]);
                }
                if (autoConnect) {
                    localStorage.setItem("lastUsedConnector", connector.id);
                }
                if (needsListenerSetup) {
                    connector.on("change", handleConnectorChange);
                    connector.on("disconnect", disconnect);
                }
                updateChainAndProvider({
                    chainId
                });
            } catch (err) {
                setState({
                    "useStarknetManager.useCallback2[connect]": (state2)=>({
                            ...state2,
                            error: new ConnectorNotFoundError()
                        })
                }["useStarknetManager.useCallback2[connect]"]);
                throw err;
            }
        }
    }["useStarknetManager.useCallback2[connect]"], [
        autoConnect,
        state.currentAddress,
        defaultChain.id,
        handleConnectorChange,
        updateChainAndProvider
    ]);
    const disconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStarknetManager.useCallback2[disconnect]": async ()=>{
            setState({
                "useStarknetManager.useCallback2[disconnect]": (state2)=>({
                        ...state2,
                        currentAddress: void 0,
                        currentProvider: defaultProvider,
                        currentChain: defaultChain
                    })
            }["useStarknetManager.useCallback2[disconnect]"]);
            if (autoConnect) {
                localStorage.removeItem("lastUsedConnector");
            }
            if (!connectorRef.current) return;
            connectorRef.current.off("change", handleConnectorChange);
            connectorRef.current.off("disconnect", disconnect);
            try {
                await connectorRef.current.disconnect();
            } catch  {}
            connectorRef.current = void 0;
        }
    }["useStarknetManager.useCallback2[disconnect]"], [
        autoConnect,
        handleConnectorChange,
        defaultProvider,
        defaultChain
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStarknetManager.useEffect2": ()=>{
            async function tryAutoConnect(connectors2) {
                const lastConnectedConnectorId = localStorage.getItem("lastUsedConnector");
                if (lastConnectedConnectorId === null) {
                    return;
                }
                const lastConnectedConnector = connectors2.find({
                    "useStarknetManager.useEffect2.tryAutoConnect.lastConnectedConnector": (connector)=>connector.id === lastConnectedConnectorId
                }["useStarknetManager.useEffect2.tryAutoConnect.lastConnectedConnector"]);
                if (lastConnectedConnector === void 0) {
                    return;
                }
                try {
                    if (!await lastConnectedConnector.ready()) {
                        return;
                    }
                    connect({
                        connector: lastConnectedConnector
                    });
                } catch  {}
            }
            if (autoConnect && !connectorRef.current) {
                tryAutoConnect(connectors);
            }
        }
    }["useStarknetManager.useEffect2"], []);
    return {
        address: state.currentAddress,
        provider: state.currentProvider,
        chain: state.currentChain,
        connector: connectorRef.current,
        explorer,
        connect,
        disconnect,
        connectors,
        chains
    };
}
function StarknetProvider({ chains, provider, connectors, explorer, autoConnect, queryClient, defaultChainId, children }) {
    const { account, address, ...state } = useStarknetManager({
        chains,
        provider,
        explorer,
        connectors,
        autoConnect,
        defaultChainId
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$76$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient ?? defaultQueryClient,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(StarknetContext.Provider, {
            value: state,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AccountProvider, {
                address,
                account,
                children
            })
        })
    });
}
function providerForChain(chain, factory) {
    const provider = factory(chain);
    if (provider) {
        return {
            chain,
            provider
        };
    }
    throw new Error(`No provider found for chain ${chain.name}`);
}
function starknetChainId(chainId) {
    switch(chainId){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$chains$40$3$2e$1$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$chains$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"].id:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].StarknetChainId.SN_MAIN;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$chains$40$3$2e$1$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$chains$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"].id:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].StarknetChainId.SN_SEPOLIA;
        default:
            return void 0;
    }
}
;
function StarknetConfig({ children, ...config }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(StarknetProvider, {
        ...config,
        children
    });
}
// src/explorers/cartridge.ts
var CartridgeExplorer = class {
    constructor(chain){
        __publicField(this, "name", "Cartridge Explorer");
        __publicField(this, "link");
        this.link = chain.explorers?.["cartridge"]?.toString() ?? "";
    }
    block(hashOrNumber) {
        return `${this.link}/block/${hashOrNumber.hash ?? hashOrNumber.number}`;
    }
    transaction(hash3) {
        return `${this.link}/tx/${hash3}`;
    }
    contract(address) {
        return `${this.link}/contract/${address}`;
    }
    class(hash3) {
        return `${this.link}/class/${hash3}`;
    }
};
var cartridge = (chain)=>{
    return new CartridgeExplorer(chain);
};
// src/explorers/starkscan.ts
var StarkscanExplorer = class {
    constructor(chain){
        __publicField(this, "name", "Starkscan");
        __publicField(this, "link");
        this.link = chain.explorers?.["starkscan"]?.toString() ?? "";
    }
    block(hashOrNumber) {
        return `${this.link}/block/${hashOrNumber.hash ?? hashOrNumber.number}`;
    }
    transaction(hash3) {
        return `${this.link}/tx/${hash3}`;
    }
    contract(address) {
        return `${this.link}/contract/${address}`;
    }
    class(hash3) {
        return `${this.link}/class/${hash3}`;
    }
};
var starkscan = (chain)=>{
    return new StarkscanExplorer(chain);
};
// src/explorers/viewblock.ts
var ViewblockExplorer = class {
    constructor(chain){
        __publicField(this, "name", "Viewblock");
        __publicField(this, "link");
        this.link = chain.explorers?.["viewblock"]?.toString() ?? "";
    }
    block(hashOrNumber) {
        if (hashOrNumber.hash && hashOrNumber.number === void 0) {
            throw new Error("The viewblock explorer doesnt support hashes for blocks. Please provide a hash.");
        }
        return `${this.link}/block/${hashOrNumber.number}`;
    }
    transaction(hash3) {
        return `${this.link}/tx/${hash3}`;
    }
    contract(address) {
        return `${this.link}/contract/${address}`;
    }
    class(hash3) {
        return `${this.link}/class/${hash3}`;
    }
};
var viewblock = (chain)=>{
    return new ViewblockExplorer(chain);
};
// src/explorers/voyager.ts
var VoyagerExplorer = class {
    constructor(chain){
        __publicField(this, "name", "Voyager");
        __publicField(this, "link");
        this.link = chain.explorers?.["voyager"]?.toString() ?? "";
    }
    block(hashOrNumber) {
        if (hashOrNumber.number !== void 0 && hashOrNumber.hash === void 0) {
            throw new Error("The voyager explorer doesn't support numbers for blocks. Please provide a hash.");
        }
        return `${this.link}/block/${hashOrNumber.hash}`;
    }
    transaction(hash3) {
        return `${this.link}/tx/${hash3}`;
    }
    contract(address) {
        return `${this.link}/contract/${address}`;
    }
    class(hash3) {
        return `${this.link}/class/${hash3}`;
    }
};
var voyager = (chain)=>{
    return new VoyagerExplorer(chain);
};
;
;
function getAddress(address) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validateAndParseAddress"])(address);
}
// src/hooks/use-provider.ts
function useProvider() {
    const { provider } = useStarknet();
    return {
        provider
    };
}
// src/hooks/use-account.ts
function useAccount() {
    const { connector, chain } = useStarknet();
    const { provider } = useProvider();
    const { address: connectedAddress } = useStarknetAccount();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(connectedAddress === void 0 ? {
        status: "disconnected"
    } : {
        status: "connected",
        connector,
        chainId: chain.id,
        account: void 0,
        address: getAddress(connectedAddress),
        isConnected: true,
        isConnecting: false,
        isDisconnected: false,
        isReconnecting: false
    });
    const refreshState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAccount.useCallback3[refreshState]": async ()=>{
            if (connector && provider && connectedAddress) {
                setState({
                    status: "connected",
                    connector,
                    chainId: chain.id,
                    account: void 0,
                    address: getAddress(connectedAddress),
                    isConnected: true,
                    isConnecting: false,
                    isDisconnected: false,
                    isReconnecting: false
                });
                connector.account(provider).then({
                    "useAccount.useCallback3[refreshState]": (connectedAccount)=>setState({
                            "useAccount.useCallback3[refreshState]": (state2)=>({
                                    ...state2,
                                    account: connectedAccount
                                })
                        }["useAccount.useCallback3[refreshState]"])
                }["useAccount.useCallback3[refreshState]"]);
            } else {
                return setState({
                    status: "disconnected",
                    connector: void 0,
                    chainId: void 0,
                    account: void 0,
                    address: void 0,
                    isConnected: false,
                    isConnecting: false,
                    isDisconnected: true,
                    isReconnecting: false
                });
            }
        }
    }["useAccount.useCallback3[refreshState]"], [
        provider,
        connector,
        chain.id,
        connectedAddress
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAccount.useEffect3": ()=>{
            refreshState();
        }
    }["useAccount.useEffect3"], [
        refreshState
    ]);
    return state;
}
;
;
function useQuery(args) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$76$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        ...args,
        structuralSharing: false
    });
    return {
        data: base.data,
        error: base.error,
        status: base.status,
        isSuccess: base.isSuccess,
        isError: base.isError,
        isPending: base.isPending,
        fetchStatus: base.fetchStatus,
        isFetching: base.isFetching,
        isLoading: base.isLoading,
        refetch: base.refetch
    };
}
function useMutation(args) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$76$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(args);
    return {
        data: base.data,
        error: base.error,
        reset: base.reset,
        isError: base.isError,
        isIdle: base.isIdle,
        isPending: base.isPending,
        isSuccess: base.isSuccess,
        isPaused: base.isPaused,
        mutate: base.mutate,
        mutateAsync: base.mutateAsync,
        status: base.status,
        variables: base.variables
    };
}
function useInfiniteQuery(args) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$76$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        ...args,
        structuralSharing: false
    });
    return {
        data: base.data,
        error: base.error,
        status: base.status,
        isSuccess: base.isSuccess,
        isError: base.isError,
        isPending: base.isPending,
        fetchStatus: base.fetchStatus,
        isFetching: base.isFetching,
        isLoading: base.isLoading,
        refetch: base.refetch,
        fetchNextPage: base.fetchNextPage,
        fetchPreviousPage: base.fetchPreviousPage,
        hasNextPage: base.hasNextPage,
        hasPreviousPage: base.hasPreviousPage,
        isFetchingNextPage: base.isFetchingNextPage,
        isFetchingPreviousPage: base.isFetchingPreviousPage
    };
}
// src/hooks/use-wallet-request.ts
function useWalletRequest(props) {
    const { connector } = useStarknet();
    const { type, params, ...rest } = props;
    const { mutate, mutateAsync, ...result } = useMutation({
        mutationKey: mutationKey({
            type,
            params
        }),
        mutationFn: mutationFn({
            connector
        }),
        ...rest
    });
    const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWalletRequest.useCallback4[request]": (args)=>mutate(args ?? {
                type,
                params
            })
    }["useWalletRequest.useCallback4[request]"], [
        mutate,
        type,
        params
    ]);
    const requestAsync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWalletRequest.useCallback4[requestAsync]": (args)=>mutateAsync(args ?? {
                type,
                params
            })
    }["useWalletRequest.useCallback4[requestAsync]"], [
        mutateAsync,
        type,
        params
    ]);
    return {
        request,
        requestAsync,
        ...result
    };
}
function mutationKey({ type, params }) {
    return [
        {
            entity: "walletRequest",
            type,
            params
        }
    ];
}
function mutationFn({ connector }) {
    return async ({ type, params })=>{
        if (!connector) throw new Error("No connector connected");
        if (!type) throw new Error("Type is required");
        return await connector.request({
            type,
            params
        });
    };
}
// src/hooks/use-add-chain.ts
function useAddChain(props) {
    const { params, ...rest } = props;
    const { request, requestAsync, ...result } = useWalletRequest({
        type: "wallet_addStarknetChain",
        params,
        ...rest
    });
    const addChain = (args)=>{
        return request(args ? {
            params: args,
            type: "wallet_addStarknetChain"
        } : void 0);
    };
    const addChainAsync = (args)=>{
        return requestAsync(args ? {
            params: args,
            type: "wallet_addStarknetChain"
        } : void 0);
    };
    return {
        addChain,
        addChainAsync,
        ...result
    };
}
;
;
;
;
;
function useContract({ abi: abi2, address, provider: providedProvider }) {
    const { provider: currentProvider } = useStarknet();
    const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useContract.useMemo2[contract]": ()=>{
            const provider = providedProvider ? providedProvider : currentProvider;
            if (abi2 && address && provider) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Contract"](abi2, address, provider).typedv2(abi2);
            }
            return void 0;
        }
    }["useContract.useMemo2[contract]"], [
        abi2,
        address,
        providedProvider,
        currentProvider
    ]);
    return {
        contract
    };
}
;
;
;
function useBlockNumber({ blockIdentifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BlockTag"].LATEST, ...props } = {}) {
    const { provider } = useStarknet();
    return useQuery({
        queryKey: queryKey({
            blockIdentifier
        }),
        queryFn: queryFn({
            provider,
            blockIdentifier
        }),
        ...props
    });
}
function queryKey({ blockIdentifier }) {
    return [
        {
            entity: "blockNumber",
            blockIdentifier
        }
    ];
}
function queryFn({ provider, blockIdentifier }) {
    return async ()=>{
        const block = await provider.getBlock(blockIdentifier);
        if (block.status !== "PENDING") {
            return block.block_number;
        }
        return void 0;
    };
}
// src/hooks/use-invalidate-on-block.ts
function useInvalidateOnBlock({ enabled = true, queryKey: queryKey12 }) {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$76$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [prevBlockNumber, setPrevBlockNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const { data: blockNumber } = useBlockNumber({
        enabled
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInvalidateOnBlock.useEffect4": ()=>{
            if (!prevBlockNumber) {
                return setPrevBlockNumber(blockNumber);
            }
            if (blockNumber !== prevBlockNumber) {
                queryClient.invalidateQueries({
                    queryKey: queryKey12
                }, {
                    cancelRefetch: false
                });
                return setPrevBlockNumber(blockNumber);
            }
        }
    }["useInvalidateOnBlock.useEffect4"], [
        blockNumber,
        prevBlockNumber,
        queryKey12,
        queryClient
    ]);
}
// src/hooks/use-network.ts
function useNetwork() {
    const { chain, chains } = useStarknet();
    return {
        chain,
        chains
    };
}
// src/hooks/use-balance.ts
var DEFAULT_FETCH_INTERVAL = 5e3;
function useBalance({ token: token_, address, refetchInterval: refetchInterval_, watch = false, enabled: enabled_ = true, blockIdentifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BlockTag"].LATEST, ...props }) {
    const { chain } = useNetwork();
    const token = token_ ?? chain.nativeCurrency.address;
    const { contract } = useContract({
        abi: balanceABIFragment,
        address: token
    });
    const queryKey_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useBalance.useMemo3[queryKey_]": ()=>queryKey2({
                chain,
                token,
                address,
                blockIdentifier
            })
    }["useBalance.useMemo3[queryKey_]"], [
        chain,
        token,
        address,
        blockIdentifier
    ]);
    const enabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useBalance.useMemo3[enabled]": ()=>Boolean(enabled_ && contract && address)
    }["useBalance.useMemo3[enabled]"], [
        enabled_,
        contract,
        address
    ]);
    const refetchInterval = refetchInterval_ ?? (blockIdentifier === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BlockTag"].PENDING && watch ? DEFAULT_FETCH_INTERVAL : void 0);
    useInvalidateOnBlock({
        enabled: Boolean(enabled && watch),
        queryKey: queryKey_
    });
    return useQuery({
        enabled,
        refetchInterval,
        queryKey: queryKey_,
        queryFn: queryFn2({
            chain,
            contract,
            token,
            address,
            blockIdentifier
        }),
        ...props
    });
}
function queryKey2({ chain, token, address, blockIdentifier }) {
    return [
        {
            entity: "balance",
            chainId: chain?.name,
            token,
            address,
            blockIdentifier
        }
    ];
}
function queryFn2({ chain, token, address, contract, blockIdentifier }) {
    return async ()=>{
        if (!address) throw new Error("address is required");
        if (!contract) throw new Error("contract is required");
        const options = {
            blockIdentifier
        };
        const isNativeCurrency = token === chain.nativeCurrency.address;
        let symbol = chain.nativeCurrency.symbol;
        if (!isNativeCurrency) {
            const symbol_ = await contract.symbol(options);
            symbol = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shortString"].decodeShortString(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["num"].toHex(symbol_));
        }
        let decimals = chain.nativeCurrency.decimals;
        if (!isNativeCurrency) {
            const decimals_ = await contract.decimals(options);
            decimals = Number(decimals_);
        }
        const balanceOf = await contract.balanceOf(address, options);
        const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_typescript$40$5$2e$8$2e$3_zod$40$3$2e$24$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(balanceOf, decimals);
        return {
            value: balanceOf,
            decimals,
            symbol,
            formatted
        };
    };
}
var balanceABIFragment = [
    {
        name: "core::integer::u256",
        type: "struct",
        members: [
            {
                name: "low",
                type: "core::integer::u128"
            },
            {
                name: "high",
                type: "core::integer::u128"
            }
        ]
    },
    {
        name: "balanceOf",
        type: "function",
        inputs: [
            {
                name: "account",
                type: "core::starknet::contract_address::ContractAddress"
            }
        ],
        outputs: [
            {
                type: "core::integer::u256"
            }
        ],
        state_mutability: "view"
    },
    {
        name: "symbol",
        type: "function",
        inputs: [],
        outputs: [
            {
                type: "core::felt252"
            }
        ],
        state_mutability: "view"
    },
    {
        name: "decimals",
        type: "function",
        inputs: [],
        outputs: [
            {
                type: "core::integer::u8"
            }
        ],
        state_mutability: "view"
    }
];
;
function useBlock({ blockIdentifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BlockTag"].LATEST, ...props } = {}) {
    const { provider } = useStarknet();
    return useQuery({
        queryKey: queryKey3({
            blockIdentifier
        }),
        queryFn: queryFn3({
            provider,
            blockIdentifier
        }),
        ...props
    });
}
function queryKey3({ blockIdentifier }) {
    return [
        {
            entity: "block",
            blockIdentifier
        }
    ];
}
function queryFn3({ provider, blockIdentifier }) {
    return async ()=>await provider.getBlock(blockIdentifier);
}
;
;
var DEFAULT_FETCH_INTERVAL2 = 5e3;
function useCall({ abi: abi2, address, functionName, args, blockIdentifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BlockTag"].LATEST, refetchInterval: refetchInterval_, watch = false, enabled: enabled_ = true, parseArgs, parseResult, ...props }) {
    const { chain } = useNetwork();
    const { contract } = useContract({
        abi: abi2,
        address
    });
    const queryKey_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCall.useMemo4[queryKey_]": ()=>queryKey4({
                chain,
                contract,
                functionName,
                args,
                blockIdentifier
            })
    }["useCall.useMemo4[queryKey_]"], [
        chain,
        contract,
        functionName,
        args,
        blockIdentifier
    ]);
    const enabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCall.useMemo4[enabled]": ()=>Boolean(enabled_ && contract && functionName && args)
    }["useCall.useMemo4[enabled]"], [
        enabled_,
        contract,
        functionName,
        args
    ]);
    const refetchInterval = refetchInterval_ ?? (blockIdentifier === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BlockTag"].PENDING && watch ? DEFAULT_FETCH_INTERVAL2 : void 0);
    useInvalidateOnBlock({
        enabled: Boolean(enabled && watch),
        queryKey: queryKey_
    });
    return useQuery({
        queryKey: queryKey_,
        queryFn: queryFn4({
            contract,
            functionName,
            args,
            blockIdentifier,
            parseArgs,
            parseResult
        }),
        refetchInterval,
        enabled,
        ...props
    });
}
function queryKey4({ chain, contract, functionName, args, blockIdentifier }) {
    return [
        {
            entity: "readContract",
            chainId: chain?.name,
            contract: contract?.address,
            functionName,
            args: JSON.stringify(args, (_, v)=>typeof v === "bigint" ? v.toString(10) : v),
            blockIdentifier
        }
    ];
}
function queryFn4({ contract, functionName, args, blockIdentifier, parseArgs = true, parseResult = true }) {
    return async ()=>{
        if (!contract) throw new Error("contract is required");
        if (contract.functions[functionName] === void 0) {
            throw new Error(`function ${functionName} not found in contract`);
        }
        return contract.call(functionName, args, {
            parseRequest: parseArgs,
            parseResponse: parseResult,
            blockIdentifier
        });
    };
}
;
function useConnect(props = {}) {
    const { connector, connectors, connect: connect_, chain } = useStarknet();
    const { mutate, mutateAsync, variables, ...result } = useMutation({
        mutationKey: [
            {
                entity: "connect",
                chainId: chain.name
            }
        ],
        mutationFn: connect_,
        ...props
    });
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConnect.useCallback5[connect]": (args)=>mutate(args ?? {
                connector
            })
    }["useConnect.useCallback5[connect]"], [
        mutate,
        connector
    ]);
    const connectAsync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConnect.useCallback5[connectAsync]": (args)=>mutateAsync(args ?? {
                connector
            })
    }["useConnect.useCallback5[connectAsync]"], [
        mutateAsync,
        connector
    ]);
    return {
        connector,
        connectors,
        pendingConnector: variables?.connector,
        connect,
        connectAsync,
        variables,
        ...result
    };
}
;
;
function useContractFactory({ compiledContract, classHash, abi: abi2 }) {
    const { account } = useAccount();
    const contractFactory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useContractFactory.useMemo5[contractFactory]": ()=>{
            if (compiledContract && account && classHash) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ContractFactory"]({
                    compiledContract,
                    classHash,
                    account,
                    abi: abi2
                });
            }
            return void 0;
        }
    }["useContractFactory.useMemo5[contractFactory]"], [
        compiledContract,
        classHash,
        account,
        abi2
    ]);
    return {
        contractFactory
    };
}
// src/hooks/use-declare-contract.ts
function useDeclareContract(props) {
    const { params, ...rest } = props;
    const { request, requestAsync, ...result } = useWalletRequest({
        type: "wallet_addDeclareTransaction",
        params,
        ...rest
    });
    const declare = (args)=>{
        return request(args ? {
            params: args,
            type: "wallet_addDeclareTransaction"
        } : void 0);
    };
    const declareAsync = (args)=>{
        return requestAsync(args ? {
            params: args,
            type: "wallet_addDeclareTransaction"
        } : void 0);
    };
    return {
        declare,
        declareAsync,
        ...result
    };
}
// src/hooks/use-deploy-account.ts
function useDeployAccount({ classHash, constructorCalldata, addressSalt, contractAddress, options, ...props }) {
    const { account } = useAccount();
    const { mutate, mutateAsync, ...result } = useMutation({
        mutationKey: mutationKey2({
            account,
            classHash,
            constructorCalldata,
            addressSalt,
            contractAddress,
            options
        }),
        mutationFn: mutationFn2({
            account,
            classHash,
            constructorCalldata,
            addressSalt,
            contractAddress,
            options
        }),
        ...props
    });
    return {
        deployAccount: mutate,
        deployAccountAsync: mutateAsync,
        ...result
    };
}
function mutationKey2(props) {
    return [
        {
            entity: "deployAccount",
            ...props
        }
    ];
}
function mutationFn2({ account, classHash, constructorCalldata, addressSalt, contractAddress, options }) {
    return async ()=>{
        if (!account) throw new Error("account is required");
        if (!classHash) throw new Error("classHash is required");
        return await account.deployAccount({
            classHash,
            constructorCalldata,
            addressSalt,
            contractAddress
        }, options);
    };
}
// src/hooks/use-disconnect.ts
function useDisconnect(props = {}) {
    const { disconnect, chain } = useStarknet();
    const { mutate, mutateAsync, ...result } = useMutation({
        mutationKey: [
            {
                entity: "disconnect",
                chainId: chain.name
            }
        ],
        mutationFn: disconnect,
        ...props
    });
    return {
        disconnect: mutate,
        disconnectAsync: mutateAsync,
        ...result
    };
}
;
function useEstimateFees({ calls, options, watch = false, enabled: enabled_ = true, ...props }) {
    const { account } = useAccount();
    const queryKey_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useEstimateFees.useMemo6[queryKey_]": ()=>queryKey5({
                calls,
                options
            })
    }["useEstimateFees.useMemo6[queryKey_]"], [
        calls,
        options
    ]);
    const enabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useEstimateFees.useMemo6[enabled]": ()=>Boolean(enabled_ && calls)
    }["useEstimateFees.useMemo6[enabled]"], [
        enabled_,
        calls
    ]);
    useInvalidateOnBlock({
        enabled: Boolean(enabled && watch),
        queryKey: queryKey_
    });
    return useQuery({
        queryKey: queryKey_,
        queryFn: queryFn5({
            account,
            calls,
            options
        }),
        enabled,
        ...props
    });
}
function queryKey5({ calls, options }) {
    return [
        {
            entity: "estimateInvokeFee",
            calls,
            options
        }
    ];
}
function queryFn5({ account, calls, options }) {
    return async ()=>{
        if (!account) throw new Error("account is required");
        if (!calls || calls.length === 0) throw new Error("calls are required");
        return account?.estimateInvokeFee(calls, options);
    };
}
// src/hooks/use-explorer.ts
function useExplorer() {
    const { explorer, chain } = useStarknet();
    if (!explorer) throw Error("Explorer is undefined. Try adding it to StarknetConfig.");
    const explorerInstance = explorer(chain);
    if (!explorerInstance) throw Error("Explorer Instance is undefined");
    return explorerInstance;
}
;
function useNonceForAddress({ address, blockIdentifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BlockTag"].LATEST, ...props }) {
    const { provider } = useStarknet();
    return useQuery({
        queryKey: queryKey6({
            address,
            blockIdentifier
        }),
        queryFn: queryFn6({
            address,
            provider,
            blockIdentifier
        }),
        ...props
    });
}
function queryKey6({ address, blockIdentifier }) {
    return [
        {
            entity: "nonce",
            blockIdentifier,
            address
        }
    ];
}
function queryFn6({ provider, blockIdentifier, address }) {
    return async ()=>{
        const nonce = await provider.getNonceForAddress(address, blockIdentifier);
        return nonce;
    };
}
// src/hooks/use-read-contract.ts
function useReadContract(props) {
    return useCall(props);
}
// src/hooks/use-send-transaction.ts
function useSendTransaction(props) {
    const { calls, ...rest } = props;
    const params = calls ? {
        calls: transformCalls2(calls)
    } : void 0;
    const { request, requestAsync, ...result } = useWalletRequest({
        type: "wallet_addInvokeTransaction",
        params,
        ...rest
    });
    const send = (args)=>{
        return request(args ? {
            params: {
                calls: transformCalls2(args)
            },
            type: "wallet_addInvokeTransaction"
        } : void 0);
    };
    const sendAsync = (args)=>{
        return requestAsync(args ? {
            params: {
                calls: transformCalls2(args)
            },
            type: "wallet_addInvokeTransaction"
        } : void 0);
    };
    return {
        send,
        sendAsync,
        ...result
    };
}
function transformCalls2(calls) {
    return calls.map((call)=>({
            contract_address: call.contractAddress,
            entry_point: call.entrypoint,
            calldata: call.calldata
        }));
}
// src/hooks/use-sign.ts
function useSignTypedData(props) {
    const { params, ...rest } = props;
    const { request, requestAsync, ...result } = useWalletRequest({
        type: "wallet_signTypedData",
        params,
        ...rest
    });
    const signTypedData = (args)=>{
        return request(args ? {
            params: args,
            type: "wallet_signTypedData"
        } : void 0);
    };
    const signTypedDataAsync = (args)=>{
        return requestAsync(args ? {
            params: args,
            type: "wallet_signTypedData"
        } : void 0);
    };
    return {
        signTypedData,
        signTypedDataAsync,
        ...result
    };
}
;
;
function useStarkAddress({ name, contract, enabled: enabled_ = true, ...props }) {
    const { provider } = useProvider();
    const { chain } = useNetwork();
    const enabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useStarkAddress.useMemo7[enabled]": ()=>Boolean(enabled_ && name)
    }["useStarkAddress.useMemo7[enabled]"], [
        enabled_,
        name
    ]);
    return useQuery({
        queryKey: queryKey7({
            name,
            contract,
            network: chain.network
        }),
        queryFn: queryFn7({
            name,
            contract,
            provider,
            network: chain.network
        }),
        enabled,
        ...props
    });
}
function queryKey7({ name, contract, network }) {
    return [
        {
            entity: "addressFromStarkName",
            name,
            contract,
            network
        }
    ];
}
function queryFn7({ name, contract, provider, network }) {
    return async ()=>{
        if (!name) throw new Error("name is required");
        const namingContract = contract ?? StarknetIdNamingContract[network];
        const p = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Provider"](provider);
        const encodedDomain = encodeDomain(name);
        const result = await p.callContract({
            contractAddress: namingContract,
            entrypoint: "domain_to_address",
            calldata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CallData"].compile({
                domain: encodedDomain,
                hint: []
            })
        });
        if (BigInt(result[0]) === BigInt(0)) throw new Error("Address not found");
        return result[0];
    };
}
var StarknetIdNamingContract = {
    sepolia: "0x154bc2e1af9260b9e66af0e9c46fc757ff893b3ff6a85718a810baf1474",
    mainnet: "0x6ac597f8116f886fa1c97a23fa4e08299975ecaf6b598873ca6792b9bbfb678"
};
var encodeDomain = (domain)=>{
    if (!domain) return [
        "0"
    ];
    const encoded = [];
    for (const subdomain of domain.replace(".stark", "").split("."))encoded.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["starknetId"].useEncoded(subdomain).toString(10));
    return encoded;
};
;
;
function useStarkName({ address, contract, enabled: enabled_ = true, ...props }) {
    const { provider } = useProvider();
    const { chain } = useNetwork();
    const enabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useStarkName.useMemo8[enabled]": ()=>Boolean(enabled_ && address)
    }["useStarkName.useMemo8[enabled]"], [
        enabled_,
        address
    ]);
    return useQuery({
        queryKey: queryKey8({
            address,
            contract,
            network: chain.network
        }),
        queryFn: queryFn8({
            address,
            contract,
            provider,
            network: chain.network
        }),
        enabled,
        ...props
    });
}
function queryKey8({ address, contract, network }) {
    return [
        {
            entity: "starkName",
            address,
            contract,
            network
        }
    ];
}
function queryFn8({ address, contract, provider, network }) {
    return async ()=>{
        if (!address) throw new Error("address is required");
        const namingContract = contract ?? StarknetIdNamingContract2[network];
        const p = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Provider"](provider);
        return await p.getStarkName(address, namingContract);
    };
}
var StarknetIdNamingContract2 = {
    sepolia: "0x154bc2e1af9260b9e66af0e9c46fc757ff893b3ff6a85718a810baf1474",
    mainnet: "0x6ac597f8116f886fa1c97a23fa4e08299975ecaf6b598873ca6792b9bbfb678"
};
;
;
function useStarkProfile({ address, useDefaultPfp = true, namingContract, identityContract, enabled: enabled_ = true, ...props }) {
    const { provider } = useProvider();
    const { chain } = useNetwork();
    if (!StarknetIdcontracts[chain.network]) throw new Error("Network not supported");
    const { contract: multicallContract } = useContract({
        abi: multicallABI,
        address: StarknetIdcontracts[chain.network]["multicall"]
    });
    const enabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useStarkProfile.useMemo9[enabled]": ()=>Boolean(enabled_ && address)
    }["useStarkProfile.useMemo9[enabled]"], [
        enabled_,
        address
    ]);
    const { refetchInterval, ...rest } = props;
    return useQuery({
        queryKey: queryKey9({
            address,
            namingContract,
            identityContract,
            network: chain.network,
            useDefaultPfp
        }),
        queryFn: queryFn9({
            address,
            useDefaultPfp,
            namingContract,
            network: chain.network,
            identityContract,
            multicallContract
        }),
        enabled,
        refetchInterval,
        ...rest
    });
}
function queryKey9({ address, namingContract, identityContract, network, useDefaultPfp }) {
    return [
        {
            entity: "starkprofile",
            address,
            namingContract,
            identityContract,
            network,
            useDefaultPfp
        }
    ];
}
function queryFn9({ address, useDefaultPfp, namingContract, identityContract, network, multicallContract }) {
    return async ()=>{
        if (!address) throw new Error("address is required");
        if (!multicallContract) throw new Error("multicallContract is required");
        if (!network) throw new Error("network is required");
        const contracts = StarknetIdcontracts[network];
        const identity = identityContract ?? contracts["identity"];
        const naming = namingContract ?? contracts["naming"];
        const data = await multicallContract.call("aggregate", [
            [
                {
                    execution: staticExecution(),
                    to: hardcoded(naming),
                    selector: hardcoded(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"].getSelectorFromName("address_to_domain")),
                    calldata: [
                        hardcoded(address),
                        hardcoded(0)
                    ]
                },
                {
                    execution: staticExecution(),
                    to: hardcoded(naming),
                    selector: hardcoded(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"].getSelectorFromName("domain_to_id")),
                    calldata: [
                        arrayReference(0, 0)
                    ]
                },
                {
                    execution: staticExecution(),
                    to: hardcoded(identity),
                    selector: hardcoded(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"].getSelectorFromName("get_verifier_data")),
                    calldata: [
                        reference(1, 0),
                        hardcoded(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shortString"].encodeShortString("twitter")),
                        hardcoded(contracts["verifier"]),
                        hardcoded("0")
                    ]
                },
                {
                    execution: staticExecution(),
                    to: hardcoded(identity),
                    selector: hardcoded(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"].getSelectorFromName("get_verifier_data")),
                    calldata: [
                        reference(1, 0),
                        hardcoded(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shortString"].encodeShortString("github")),
                        hardcoded(contracts["verifier"]),
                        hardcoded("0")
                    ]
                },
                {
                    execution: staticExecution(),
                    to: hardcoded(identity),
                    selector: hardcoded(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"].getSelectorFromName("get_verifier_data")),
                    calldata: [
                        reference(1, 0),
                        hardcoded(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shortString"].encodeShortString("discord")),
                        hardcoded(contracts["verifier"]),
                        hardcoded("0")
                    ]
                },
                {
                    execution: staticExecution(),
                    to: hardcoded(identity),
                    selector: hardcoded(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"].getSelectorFromName("get_verifier_data")),
                    calldata: [
                        reference(1, 0),
                        hardcoded(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shortString"].encodeShortString("proof_of_personhood")),
                        hardcoded(contracts["verifier_pop"]),
                        hardcoded("0")
                    ]
                },
                // PFP
                {
                    execution: staticExecution(),
                    to: hardcoded(identity),
                    selector: hardcoded(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"].getSelectorFromName("get_verifier_data")),
                    calldata: [
                        reference(1, 0),
                        hardcoded(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shortString"].encodeShortString("nft_pp_contract")),
                        hardcoded(contracts["verifier_pfp"]),
                        hardcoded("0")
                    ]
                },
                {
                    execution: staticExecution(),
                    to: hardcoded(identity),
                    selector: hardcoded(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"].getSelectorFromName("get_extended_verifier_data")),
                    calldata: [
                        reference(1, 0),
                        hardcoded(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shortString"].encodeShortString("nft_pp_id")),
                        hardcoded("2"),
                        hardcoded(contracts["verifier_pfp"]),
                        hardcoded("0")
                    ]
                },
                {
                    execution: notEqual(6, 0, 0),
                    to: reference(6, 0),
                    selector: hardcoded(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"].getSelectorFromName("tokenURI")),
                    calldata: [
                        reference(7, 1),
                        reference(7, 2)
                    ]
                }
            ]
        ]);
        if (Array.isArray(data)) {
            const name = data[0][0] !== BigInt(0) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["starknetId"].useDecoded(data[0].slice(1).map({
                "queryFn9.useDecoded": (val)=>BigInt(val)
            }["queryFn9.useDecoded"])) : void 0;
            const twitter = data[2][0] !== BigInt(0) ? data[2][0].toString() : void 0;
            const github = data[3][0] !== BigInt(0) ? data[3][0].toString() : void 0;
            const discord = data[4][0] !== BigInt(0) ? data[4][0].toString() : void 0;
            const proofOfPersonhood = data[5][0] === BigInt(1);
            const profile = data.length === 9 ? data[8].slice(1).map((val)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shortString"].decodeShortString(val.toString())).join("") : void 0;
            const profilePicture = profile ? profile.includes("base64") ? parseBase64Image(profile) : await fetchImageUrl(profile) : useDefaultPfp ? `https://starknet.id/api/identicons/${data[1][0].toString()}` : void 0;
            const res = {
                name,
                twitter,
                github,
                discord,
                proofOfPersonhood,
                profilePicture,
                profile
            };
            return res;
        }
        throw new Error("Error while fetching data");
    };
}
var hardcoded = (arg)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CairoCustomEnum"]({
        Hardcoded: arg
    });
};
var reference = (call, pos)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CairoCustomEnum"]({
        Reference: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cairo"].tuple(call, pos)
    });
};
var arrayReference = (call, pos)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CairoCustomEnum"]({
        ArrayReference: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cairo"].tuple(call, pos)
    });
};
var staticExecution = ()=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CairoCustomEnum"]({
        Static: {}
    });
};
var notEqual = (call, pos, value)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CairoCustomEnum"]({
        IfNotEqual: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cairo"].tuple(call, pos, value)
    });
};
var parseBase64Image = (metadata)=>{
    return JSON.parse(atob(metadata.split(",")[1].slice(0, -1))).image;
};
var parseImageUrl = (url)=>{
    return url.startsWith("ipfs://") ? url.replace("ipfs://", "https://ipfs.io/ipfs/") : url;
};
var fetchImageUrl = async (url)=>{
    try {
        const response = await fetch(parseImageUrl(url));
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.image) {
            return parseImageUrl(data.image);
        }
        return void 0;
    } catch (error) {
        console.error("There was a problem fetching the image URL:", error);
        return void 0;
    }
};
var StarknetIdcontracts = {
    sepolia: {
        naming: "0x154bc2e1af9260b9e66af0e9c46fc757ff893b3ff6a85718a810baf1474",
        identity: "0x3697660a0981d734780731949ecb2b4a38d6a58fc41629ed611e8defda",
        verifier: "0x60B94fEDe525f815AE5E8377A463e121C787cCCf3a36358Aa9B18c12c4D566",
        verifier_pop: "0x15ae88ae054caa74090b89025c1595683f12edf7a4ed2ad0274de3e1d4a",
        verifier_pfp: "0x9e7bdb8dabd02ea8cfc23b1d1c5278e46490f193f87516ed5ff2dfec02",
        multicall: "0x07a9013697371ce40d0306b4c810c6a4db9bfda119dd9ae1e8701c8e288d734b"
    },
    mainnet: {
        naming: "0x6ac597f8116f886fa1c97a23fa4e08299975ecaf6b598873ca6792b9bbfb678",
        identity: "0x05dbdedc203e92749e2e746e2d40a768d966bd243df04a6b712e222bc040a9af",
        verifier: "0x07d14dfd8ee95b41fce179170d88ba1f0d5a512e13aeb232f19cfeec0a88f8bf",
        verifier_pop: "0x0293eb2ba9862f762bd3036586d5755a782bd22e6f5028320f1d0405fd47bff4",
        verifier_pfp: "0x070aaa20ec4a46da57c932d9fd89ca5e6bb9ca3188d3df361a32306aff7d59c7",
        multicall: "0x034ffb8f4452df7a613a0210824d6414dbadcddce6c6e19bf4ddc9e22ce5f970"
    }
};
var multicallABI = [
    {
        name: "ComposableMulticallImpl",
        type: "impl",
        interface_name: "composable_multicall::IComposableMulticall"
    },
    {
        name: "composable_multicall::Execution",
        type: "enum",
        variants: [
            {
                name: "Static",
                type: "()"
            },
            {
                name: "IfEqual",
                type: "(core::integer::u32, core::integer::u32, core::felt252)"
            },
            {
                name: "IfNotEqual",
                type: "(core::integer::u32, core::integer::u32, core::felt252)"
            }
        ]
    },
    {
        name: "composable_multicall::DynamicFelt",
        type: "enum",
        variants: [
            {
                name: "Hardcoded",
                type: "core::felt252"
            },
            {
                name: "Reference",
                type: "(core::integer::u32, core::integer::u32)"
            }
        ]
    },
    {
        name: "composable_multicall::DynamicCalldata",
        type: "enum",
        variants: [
            {
                name: "Hardcoded",
                type: "core::felt252"
            },
            {
                name: "Reference",
                type: "(core::integer::u32, core::integer::u32)"
            },
            {
                name: "ArrayReference",
                type: "(core::integer::u32, core::integer::u32)"
            }
        ]
    },
    {
        name: "composable_multicall::DynamicCall",
        type: "struct",
        members: [
            {
                name: "execution",
                type: "composable_multicall::Execution"
            },
            {
                name: "to",
                type: "composable_multicall::DynamicFelt"
            },
            {
                name: "selector",
                type: "composable_multicall::DynamicFelt"
            },
            {
                name: "calldata",
                type: "core::array::Array::<composable_multicall::DynamicCalldata>"
            }
        ]
    },
    {
        name: "core::array::Span::<core::felt252>",
        type: "struct",
        members: [
            {
                name: "snapshot",
                type: "@core::array::Array::<core::felt252>"
            }
        ]
    },
    {
        name: "composable_multicall::IComposableMulticall",
        type: "interface",
        items: [
            {
                name: "aggregate",
                type: "function",
                inputs: [
                    {
                        name: "calls",
                        type: "core::array::Array::<composable_multicall::DynamicCall>"
                    }
                ],
                outputs: [
                    {
                        type: "core::array::Array::<core::array::Span::<core::felt252>>"
                    }
                ],
                state_mutability: "view"
            }
        ]
    },
    {
        kind: "enum",
        name: "composable_multicall::contract::ComposableMulticall::Event",
        type: "event",
        variants: []
    }
];
// src/hooks/use-switch-chain.ts
function useSwitchChain(props) {
    const { params, ...rest } = props;
    const { request, requestAsync, ...result } = useWalletRequest({
        type: "wallet_switchStarknetChain",
        params,
        ...rest
    });
    const switchChain = (args)=>{
        return request(args ? {
            params: args,
            type: "wallet_switchStarknetChain"
        } : void 0);
    };
    const switchChainAsync = (args)=>{
        return requestAsync(args ? {
            params: args,
            type: "wallet_switchStarknetChain"
        } : void 0);
    };
    return {
        switchChain,
        switchChainAsync,
        ...result
    };
}
;
function useTransactionReceipt({ hash: hash3, watch, enabled: enabled_ = true, ...props }) {
    const { provider, chain } = useStarknet();
    const queryKey_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTransactionReceipt.useMemo10[queryKey_]": ()=>queryKey10({
                chain,
                hash: hash3
            })
    }["useTransactionReceipt.useMemo10[queryKey_]"], [
        chain,
        hash3
    ]);
    const enabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTransactionReceipt.useMemo10[enabled]": ()=>Boolean(enabled_ && hash3)
    }["useTransactionReceipt.useMemo10[enabled]"], [
        enabled_,
        hash3
    ]);
    useInvalidateOnBlock({
        enabled: Boolean(enabled && watch),
        queryKey: queryKey_
    });
    return useQuery({
        queryKey: queryKey_,
        queryFn: queryFn10({
            provider,
            hash: hash3
        }),
        enabled,
        ...props
    });
}
function queryKey10({ chain, hash: hash3 }) {
    return [
        {
            entity: "transactionReceipt",
            chainId: chain?.name,
            hash: hash3
        }
    ];
}
function queryFn10({ provider, hash: hash3 }) {
    return async ()=>{
        if (!hash3) throw new Error("hash is required");
        return await provider.getTransactionReceipt(hash3);
    };
}
// src/hooks/use-watch-asset.ts
function useWatchAsset(props) {
    const { params, ...rest } = props;
    const { request, requestAsync, ...result } = useWalletRequest({
        type: "wallet_watchAsset",
        params,
        ...rest
    });
    const watchAsset = (args)=>{
        return request(args ? {
            params: args,
            type: "wallet_watchAsset"
        } : void 0);
    };
    const watchAssetAsync = (args)=>{
        return requestAsync(args ? {
            params: args,
            type: "wallet_watchAsset"
        } : void 0);
    };
    return {
        watchAsset,
        watchAssetAsync,
        ...result
    };
}
// src/hooks/use-universal-deployer-contract.tsx
function useUniversalDeployerContract(props) {
    const { address, provider } = props || {};
    return {
        udc: useContract({
            abi,
            address: address ?? "0x04a64cd09a853868621d94cae9952b106f2c36a3f81260f85de6696c6b050221",
            provider
        }).contract
    };
}
var abi = [
    {
        name: "UniversalDeployerImpl",
        type: "impl",
        interface_name: "openzeppelin::utils::universal_deployer::interface::IUniversalDeployer"
    },
    {
        name: "core::bool",
        type: "enum",
        variants: [
            {
                name: "False",
                type: "()"
            },
            {
                name: "True",
                type: "()"
            }
        ]
    },
    {
        name: "core::array::Span::<core::felt252>",
        type: "struct",
        members: [
            {
                name: "snapshot",
                type: "@core::array::Array::<core::felt252>"
            }
        ]
    },
    {
        name: "openzeppelin::utils::universal_deployer::interface::IUniversalDeployer",
        type: "interface",
        items: [
            {
                name: "deploy_contract",
                type: "function",
                inputs: [
                    {
                        name: "class_hash",
                        type: "core::starknet::class_hash::ClassHash"
                    },
                    {
                        name: "salt",
                        type: "core::felt252"
                    },
                    {
                        name: "from_zero",
                        type: "core::bool"
                    },
                    {
                        name: "calldata",
                        type: "core::array::Span::<core::felt252>"
                    }
                ],
                outputs: [
                    {
                        type: "core::starknet::contract_address::ContractAddress"
                    }
                ],
                state_mutability: "external"
            }
        ]
    },
    {
        kind: "struct",
        name: "openzeppelin::presets::universal_deployer::UniversalDeployer::ContractDeployed",
        type: "event",
        members: [
            {
                kind: "data",
                name: "address",
                type: "core::starknet::contract_address::ContractAddress"
            },
            {
                kind: "data",
                name: "deployer",
                type: "core::starknet::contract_address::ContractAddress"
            },
            {
                kind: "data",
                name: "from_zero",
                type: "core::bool"
            },
            {
                kind: "data",
                name: "class_hash",
                type: "core::starknet::class_hash::ClassHash"
            },
            {
                kind: "data",
                name: "calldata",
                type: "core::array::Span::<core::felt252>"
            },
            {
                kind: "data",
                name: "salt",
                type: "core::felt252"
            }
        ]
    },
    {
        kind: "enum",
        name: "openzeppelin::presets::universal_deployer::UniversalDeployer::Event",
        type: "event",
        variants: [
            {
                kind: "nested",
                name: "ContractDeployed",
                type: "openzeppelin::presets::universal_deployer::UniversalDeployer::ContractDeployed"
            }
        ]
    }
];
;
var DEFAULT_PAGE_SIZE = 5;
function useEvents({ address, eventName, fromBlock: fromBlock_, toBlock: toBlock_, pageSize }) {
    const { provider } = useProvider();
    const rpcProvider = provider;
    const keyFilter = eventName ? [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["num"].toHex(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hash"].starknetKeccak(eventName))
    ] : [];
    const keys = [
        keyFilter
    ];
    const fromBlock = fromBlock_ ? blockIdentifierToBlockId(fromBlock_) : void 0;
    const toBlock = toBlock_ ? blockIdentifierToBlockId(toBlock_) : void 0;
    const chunkSize = pageSize ? pageSize : DEFAULT_PAGE_SIZE;
    const fetchEvents = async ({ pageParam })=>{
        const res = await rpcProvider.getEvents({
            from_block: fromBlock,
            to_block: toBlock,
            address,
            keys,
            chunk_size: chunkSize,
            continuation_token: pageParam === "0" ? void 0 : pageParam
        });
        return res;
    };
    return useInfiniteQuery({
        // TODO: useMemo ?
        queryKey: queryKey11({
            address,
            eventName,
            fromBlock: fromBlock_,
            toBlock: toBlock_,
            pageSize
        }),
        queryFn: fetchEvents,
        initialPageParam: "0",
        getNextPageParam: {
            "useEvents.useInfiniteQuery": (lastPage, pages)=>lastPage.continuation_token
        }["useEvents.useInfiniteQuery"]
    });
}
function queryKey11({ address, eventName, fromBlock, toBlock, pageSize }) {
    return [
        {
            entity: "events",
            address,
            eventName,
            fromBlock,
            toBlock,
            pageSize
        }
    ];
}
function blockIdentifierToBlockId(blockIdentifier) {
    if (blockIdentifier === null) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BlockTag"].PENDING;
    }
    if (typeof blockIdentifier === "number") {
        return {
            block_number: blockIdentifier
        };
    }
    if (typeof blockIdentifier === "string") {
        if (blockIdentifier === "latest" || blockIdentifier === "pending") {
            return blockIdentifier;
        }
        return {
            block_hash: blockIdentifier
        };
    }
    throw new Error(`Unsupported BlockIdentifier type: ${typeof blockIdentifier}`);
}
;
function jsonRpcProvider({ rpc }) {
    return (chain)=>{
        const config = rpc(chain);
        if (!config) return null;
        const chainId = starknetChainId(chain.id);
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$starknet$40$6$2e$24$2e$1$2f$node_modules$2f$starknet$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RpcProvider"]({
            ...config,
            chainId
        });
        return provider;
    };
}
// src/providers/public.ts
function publicProvider() {
    return jsonRpcProvider({
        rpc: (chain)=>{
            const rpcs = chain.rpcUrls.public.http;
            const nodeUrl = rpcs[Math.floor(Math.random() * rpcs.length)];
            if (!nodeUrl) return null;
            return {
                nodeUrl
            };
        }
    });
}
// src/providers/alchemy.ts
function alchemyProvider({ apiKey }) {
    return jsonRpcProvider({
        rpc: (chain)=>{
            const baseHttpUrl = chain.rpcUrls["alchemy"]?.http[0];
            if (!baseHttpUrl) return null;
            const nodeUrl = `${baseHttpUrl}/${apiKey}`;
            return {
                nodeUrl
            };
        }
    });
}
// src/providers/blast.ts
function blastProvider({ apiKey }) {
    return jsonRpcProvider({
        rpc: (chain)=>{
            const baseHttpUrl = chain.rpcUrls["blast"]?.http[0];
            if (!baseHttpUrl) return null;
            const nodeUrl = `${baseHttpUrl}/${apiKey}`;
            return {
                nodeUrl
            };
        }
    });
}
// src/providers/cartridge.ts
function cartridgeProvider() {
    return jsonRpcProvider({
        rpc: (chain)=>{
            const nodeUrl = chain.rpcUrls["cartridge"]?.http[0];
            if (!nodeUrl) return null;
            return {
                nodeUrl
            };
        }
    });
}
// src/providers/infura.ts
function infuraProvider({ apiKey }) {
    return jsonRpcProvider({
        rpc: (chain)=>{
            const baseHttpUrl = chain.rpcUrls["infura"]?.http[0];
            if (!baseHttpUrl) return null;
            const nodeUrl = `${baseHttpUrl}/${apiKey}`;
            return {
                nodeUrl
            };
        }
    });
}
// src/providers/lava.ts
function lavaProvider({ apiKey }) {
    return jsonRpcProvider({
        rpc: (chain)=>{
            const baseHttpUrl = chain.rpcUrls["lava"]?.http[0];
            if (!baseHttpUrl) return null;
            const nodeUrl = `${baseHttpUrl}/${apiKey}`;
            return {
                nodeUrl
            };
        }
    });
}
// src/providers/nethermind.ts
function nethermindProvider({ apiKey }) {
    return jsonRpcProvider({
        rpc: (chain)=>{
            const baseHttpUrl = chain.rpcUrls["nethermind"]?.http[0];
            if (!baseHttpUrl) return null;
            const nodeUrl = `${baseHttpUrl}/?apikey=${apiKey}`;
            return {
                nodeUrl
            };
        }
    });
}
// src/providers/reddio.ts
function reddioProvider({ apiKey }) {
    return jsonRpcProvider({
        rpc: (chain)=>{
            const baseHttpUrl = chain.rpcUrls["reddio"]?.http[0];
            if (!baseHttpUrl) return null;
            const nodeUrl = `${baseHttpUrl}/${apiKey}`;
            return {
                nodeUrl
            };
        }
    });
}
;
function slotProvider({ projectId }) {
    return jsonRpcProvider({
        rpc: ()=>{
            const chain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$starknet$2d$react$2b$chains$40$3$2e$1$2e$3$2f$node_modules$2f40$starknet$2d$react$2f$chains$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSlotChain"])(projectId);
            const nodeUrl = chain.rpcUrls.public.http[0];
            return {
                nodeUrl
            };
        }
    });
}
;
 //# sourceMappingURL=index.js.map
}}),
}]);

//# sourceMappingURL=0d955_%40starknet-react_core_dist_index_d63e4bda.js.map