import { AuthContext } from "../context/Authcontext";
import { useContext } from "react";

export const useAuth = () => {
    const { token, setToken } = useContext(AuthContext)
    return { token, setToken }
}