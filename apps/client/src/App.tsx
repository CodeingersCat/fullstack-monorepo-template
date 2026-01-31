import * as React from 'react';
import { Container, createRoot } from 'react-dom/client';
import { calculateSum } from './lib/api';

const { useEffect, useState } = React;

function App() {
    const [a, b] = [
        Number((Math.random()*10).toFixed(2)),
        Number((Math.random()*10).toFixed(2))
    ];
    const [ sum, setSum ] = useState(0);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        async function loadSum () {
            setLoading(true);
            const sum = await calculateSum(a, b);
            setSum(sum);
            setLoading(false);
        }

        loadSum();
    }, [])

    return (
         <>
            <h1>The Sum Of</h1>
            <h3>{a} and {b} is { loading ? ' loading...' : sum }</h3>
         </>
    )
} 

const root = createRoot(document.getElementById('root') as Container);
root.render(<App/>);