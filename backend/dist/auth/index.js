"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("firebase/auth");
// firebaseapp
const db_1 = require("../db");
const auth = (0, auth_1.getAuth)(db_1.firebaseApp);
exports.default = auth;
