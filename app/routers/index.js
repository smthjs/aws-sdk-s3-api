const { Router } = require("express");
const buckets = require("./buckets.router");
const objects = require("./objects.router");
const files = require("./files.router");

const router = Router();

router.use("/api/buckets", buckets);
router.use("/api/objects", objects);
router.use("/api/files", files);

module.exports = router;
