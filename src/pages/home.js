import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Cate from "../component/cate";

export default function Home() {

    return(
        <div className="home-wrap con-wrap">
            <div className="inner">
                <Cate />
            </div>
        </div>
    );
}