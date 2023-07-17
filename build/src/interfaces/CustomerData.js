"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDataDTO = void 0;
const zod_1 = require("zod");
exports.CustomerDataDTO = zod_1.z.object({
    fullName: zod_1.z.string().nonempty(),
    email: zod_1.z.string().nonempty(),
    mobile: zod_1.z.string().nonempty(),
    document: zod_1.z.string().nonempty(),
    zipCode: zod_1.z.string(),
    street: zod_1.z.string().nonempty(),
    number: zod_1.z.string().nonempty(),
    complement: zod_1.z.string().optional(),
    neighborhood: zod_1.z.string(),
    city: zod_1.z.string().nonempty(),
    state: zod_1.z.string().nonempty(),
}).transform((data) => data);
