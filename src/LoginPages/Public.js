import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Login, LoginUp } from "../loginRegister";
import { Pablic__Nav } from "../components"
import "./style.css"



export const Public = () => {

    return (
        <div className="pablic">
            <Routes>
                <Route index element={<Pablic__Nav />} />
                <Route path="/login" element={<Login />} />
                <Route path="/loginup" element={<LoginUp />} />
            </Routes>
        </div>
    )
}