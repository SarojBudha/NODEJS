"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_controller_1 = __importDefault(require("./employee.controller"));
const employeeCtrl = new employee_controller_1.default();
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/get-employee/", employeeCtrl.getAllEmployee);
router.get("/get-employee/:id", employeeCtrl.getEmployee);
router.post("/post-employee/", employeeCtrl.insertEmployee);
router.put("/put-employee/:id", employeeCtrl.updateEmployee);
router.delete("/delete-employee/:id", employeeCtrl.deleteEmployee);
module.exports = router;
//# sourceMappingURL=index.js.map