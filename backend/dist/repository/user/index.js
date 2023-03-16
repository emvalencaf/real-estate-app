"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// db auths functions
const auth_1 = require("firebase/auth");
const firestore_1 = require("firebase/firestore");
const auth_2 = __importDefault(require("../../auth"));
const db_1 = require("../../db");
class UserRepository {
    static signIn({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    // create a new user in auth firebase
    static signUpAuth({ name, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userCredentials = yield (0, auth_1.createUserWithEmailAndPassword)(auth_2.default, email, password);
            UserRepository;
            yield UserRepository.update(name);
            const { user } = userCredentials;
            return user;
        });
    }
    // create a new user in firestore
    static signUp({ name, email }, uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const refDoc = (0, firestore_1.doc)(db_1.db, "users", uid);
            const data = {
                name,
                email,
            };
            return yield (0, firestore_1.setDoc)(refDoc, data);
        });
    }
    static update(name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!auth_2.default || !auth_2.default.currentUser)
                throw new Error("server error");
            yield (0, auth_1.updateProfile)(auth_2.default.currentUser, {
                displayName: name,
            });
        });
    }
}
exports.default = UserRepository;
