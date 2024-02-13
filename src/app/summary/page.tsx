'use client'
import Title from "../components/Title";
import { useEffect, useState } from "react";

export default function Summary() {
    const [tmb, setTmb] = useState(0);
    return (
        <div className="w-full px-10">
            <Title title="Summary"/>
            <div>
                Taxa Metabólica Basal: 
            </div>
        </div>
    );
}