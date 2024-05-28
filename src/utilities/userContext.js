import { createContext } from "react";

const userContext = createContext({
    currentUser: "defaultUser",
});

export default userContext;