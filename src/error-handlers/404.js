'use strict'

// handling non-existent pages


function handle404(req,res,next) {
    res.status(400).json({
        status: "404",
        message: "Page not Found!"
    })
}

module.exports = handle404;