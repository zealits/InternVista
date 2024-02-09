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
    SecretsDto: function() {
        return SecretsDto;
    },
    secretsSchema: function() {
        return secretsSchema;
    }
});
const _schema = require("@reactive-resume/schema");
const _dto = require("nestjs-zod/dto");
const _z = require("nestjs-zod/z");
const secretsSchema = _z.z.object({
    id: _schema.idSchema,
    password: _z.z.string().nullable(),
    lastSignedIn: _z.z.date().nullable(),
    verificationToken: _z.z.string().nullable(),
    twoFactorSecret: _z.z.string().nullable(),
    twoFactorBackupCodes: _z.z.array(_z.z.string()).default([]),
    refreshToken: _z.z.string().nullable(),
    resetToken: _z.z.string().nullable(),
    userId: _schema.idSchema
});
let SecretsDto = class SecretsDto extends (0, _dto.createZodDto)(secretsSchema) {
};

//# sourceMappingURL=secrets.js.map