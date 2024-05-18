import { create, fetch, fetchOne, updateOne, deleteOne } from "../controllers/restaurants.controller.js"
import { verifyToken } from "../middleware/verifyToken.js";

// eslint-disable-next-line no-undef
export function routes(app)  {
    app.post("/api/restaurant",  create);
    app.get("/api/restaurants", verifyToken, fetch);
    app.get("/api/restaurant/:id", fetchOne);
    app.put("/api/restaurant/:id", updateOne);
    app.delete("/api/restaurant/:id", deleteOne);
}
