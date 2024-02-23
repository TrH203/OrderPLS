import express from "express";
import initWebRoutes from "./router/web.js";
const app = express();
const port = 6969;

initWebRoutes(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
