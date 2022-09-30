import { createContext, useContext, useState } from "react";

const NodeContext = createContext();

export const useNodeContext = () => useContext(NodeContext);

export default function Context(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [userName, setUserName] = useState(null);

    const loginHandler = (token, userName) => {
        localStorage.setItem('token', token);
        setUserName(userName);
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
            auth: isAuthenticated,
            name: userName
        }}>
            {props.children}
        </NodeContext.Provider>
    );
};