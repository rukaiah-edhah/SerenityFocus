const router = require('express').Router();
const path = require('path');



const allRoutes = (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/public/index.html'))
}

router.get("/", allRoutes);

module.exports = router;