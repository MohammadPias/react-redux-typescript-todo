import * as React from 'react';

export interface HomeProps {
    heading: string;
}

export default function Home(props: HomeProps) {
    return (
        <div>
            <h1>{props.heading}</h1>
        </div>
    );
}




