import { createContext, useContext, useState } from "react";

const NodeContext = createContext();

export const useNodeContext = () => useContext(NodeContext);

export default function Context(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    const loginHandler = (token) => {
        localStorage.setItem(token);
        setIsAuthenticated(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem(token);
        setIsAuthenticated(false);
    };

    return (
        <NodeContext.Provider value={{
            login: { loginHandler },
            logout: { logoutHandler },
            auth: isAuthenticated
        }}>
            {props.children}
        </NodeContext.Provider>
    );
};