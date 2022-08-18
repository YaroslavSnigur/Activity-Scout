const router = require("express").Router();
const postCtrl = require("../controllers/posts");

router.get("/", postCtrl.index);
router.post("/", postCtrl.create);
router.post("/filter", postCtrl.filter);
router.delete("/", postCtrl.deletePost);
module.exports = router;
