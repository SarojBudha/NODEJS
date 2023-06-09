"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authuser_controller_1 = __importDefault(require("./authuser.controller"));
const authCtrl = new authuser_controller_1.default();
const auth_service_1 = __importDefault(require("../middleWare/auth.service"));
const authoCtrl = new auth_service_1.default();
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/signup/", authCtrl.insertUser);
router.post("/login/", authCtrl.loginUser, authCtrl.genToken);
router.get("/getuser/", authCtrl.getuser);
router.get("/verifyUser/", authoCtrl.verifyToken, authCtrl.getTokenUser);
module.exports = router;
//# sourceMappingURL=index.js.map