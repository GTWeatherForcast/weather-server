const controller = require("../controller/auth.contoller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/v1/auth/sign-in", controller.signin);



    app.post("/api/v1/auth/sign-up", controller.signup);
};