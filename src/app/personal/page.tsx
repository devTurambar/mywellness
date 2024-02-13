'use client'

import Title from "../components/Title";
import Button from "../components/Button";
import { useState } from "react"
import Link from "next/Link";

export default function Personal({ searchParams} : {searchParams:string }) {
    console.log(searchParams.search) // Logs "search"
    const [personal, setPersonal] = useState({
        name: "",
        weight: 0,
        age: 0,
        height: 0,
        gender: ""
    });

    const updatePersonal = ({name, weight, age, height, gender}:{name:string; weight:number; age:number; height:number; gender:string;}) => {
        setPersonal({
            name: name,
            weight: weight,
            age: age,
            height: height,
            gender: gender
        })
    };

    let weight = 81;
    let age = 30;
    let gender = "Male";
    let height = 177
    return (
        <div className="w-full">
            <Title title="Personal Information"/>
            <div className="nome">
                Name: {"Jonh Doe"}
            </div>
            <div className="weight">
                Weight: {weight+" kg"}
            </div>
            <div className="age">
                Age: {age+" years"}
            </div>
            <div className="height">
                Height: {height} cm
            </div>
            <div className="gender">
                Gender: {gender}
            </div>
            <Link href="./personal/editPersonal">
                <Button 
                    buttonText="Edit"
                />
            </Link>
        </div>
    );
}