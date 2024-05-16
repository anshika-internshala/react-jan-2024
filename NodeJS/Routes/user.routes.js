import { register, login } from "../controllers/users.controller.js"

// eslint-disable-next-line no-undef
export function userRoutes(app)  {
    app.post("/api/register",  register);
    app.post("/api/login", login);
}
