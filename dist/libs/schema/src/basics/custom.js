"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    customFieldSchema: function() {
        return customFieldSchema;
    },
    customFieldsDefault: function() {
        return customFieldsDefault;
    }
});
const _zod = require("zod");
const customFieldSchema = _zod.z.object({
    id: _zod.z.string().cuid2(),
    icon: _zod.z.string(),
    name: _zod.z.string(),
    value: _zod.z.string()
});
const customFieldsDefault = [];

//# sourceMappingURL=custom.js.map