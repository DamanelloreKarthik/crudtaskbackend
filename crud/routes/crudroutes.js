const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsersData,
  updateUserData,
  deleteUserData,
} = require("../controllers/crudcontrollers");

router.post("/createuser", createUser);
router.get("/getallusers", getAllUsersData);
router.put("/edituser", updateUserData);
router.delete("/deleteuser", deleteUserData);

module.exports = router;
