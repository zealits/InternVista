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
    EmailDto: function() {
        return EmailDto;
    },
    emailSchema: function() {
        return emailSchema;
    }
});
const _dto = require("nestjs-zod/dto");
const _z = require("nestjs-zod/z");
const emailSchema = _z.z.object({
    to: _z.z.string().email(),
    subject: _z.z.string(),
    content: _z.z.string()
});
let EmailDto = class EmailDto extends (0, _dto.createZodDto)(emailSchema) {
};

//# sourceMappingURL=mail.js.map