import Title from "../components/Title";

export default function Personal() {
    let weight = 81;
    return (
        <div className="w-full px-10">
            <Title title="Personal Information"/>
            <div className="nome">
                Nome: {"Jonh Doe"}
            </div>
            <div className="weight">
                Peso: {weight+" kg"}
            </div>
        </div>
    );
}