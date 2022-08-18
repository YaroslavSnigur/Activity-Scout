const router = require("express").Router();
const postCtrl = require("../controllers/posts");

router.get("/", postCtrl.index);
router.post("/", postCtrl.create);

router.put("/update/:id", postCtrl.update);
module.exports = router;
