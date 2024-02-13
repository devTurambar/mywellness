import Title from "../../components/Title";
import Button from "../../components/Button";
import { useState } from "react"
import TextForm from "../../components/TextForm";
import Link from "next/Link";

const editPersonal =  () => {
    return (
        <div className="w-full px-10">
            <Title title="Edit Personal Information"/>
            <div className="">
                <form className="w-full flex flex-col items-center">
                    <TextForm classes="mb-4" label="Name" />
                    <TextForm classes="mb-4" label="Weight" />
                    <TextForm classes="mb-4" label="Age" />
                    <TextForm classes="mb-4" label="Height" />
                    <TextForm classes="mb-4" label="Gender" />
                    <Link
                        href={{
                        pathname: './',
                        query: {
                            search: 'search'
                        }
                        }}
                    >
                        <Button buttonText="Submit"/>
                    </Link>
                </form>
            </div>
        </div>
    );
}
export default editPersonal;
