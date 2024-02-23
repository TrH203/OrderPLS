import express from "express";
import adminController from "../controller/adminController.js";
let router = express.Router(); // use Express's router 

// function that init all route in project
const initWebRoutes = (app) => {
    //router.get("/login",);
    router.get("/", adminController.testDB);

    return app.use("/", router); // web start with "/"
}
export default initWebRoutes;