"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _nxtsconfigpathsplugin = require("@nx/vite/plugins/nx-tsconfig-paths.plugin");
const _vite = require("vite");
const _default = (0, _vite.defineConfig)({
    cacheDir: "../../node_modules/.vite/utils",
    plugins: [
        (0, _nxtsconfigpathsplugin.nxViteTsPaths)()
    ],
    test: {
        globals: true,
        environment: "jsdom",
        cache: {
            dir: "../../node_modules/.vitest"
        },
        include: [
            "src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"
        ]
    }
});

//# sourceMappingURL=vite.config.js.map