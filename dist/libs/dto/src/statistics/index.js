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
    StatisticsDto: function() {
        return StatisticsDto;
    },
    statisticsSchema: function() {
        return statisticsSchema;
    }
});
const _dto = require("nestjs-zod/dto");
const _z = require("nestjs-zod/z");
const statisticsSchema = _z.z.object({
    views: _z.z.number().int().default(0),
    downloads: _z.z.number().int().default(0)
});
let StatisticsDto = class StatisticsDto extends (0, _dto.createZodDto)(statisticsSchema) {
};

//# sourceMappingURL=index.js.map