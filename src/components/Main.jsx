import React from 'react';
import Success from "./Success";
import HeroImage from "./HeroImage";
import Info from "./Info";
import Form from "./Form";

const isResponse = true;

const Main = () => {
    return (
        isResponse ? 
        <main>
            <HeroImage />
            <article>
                <Info /> 
                <Form />   
            </article>
        </main> 
        :
        <Success />
    );
}

export default Main;