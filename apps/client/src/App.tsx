import * as React from 'react';
import { Container, createRoot } from 'react-dom/client';
import { calculateSum } from './lib/api';

const { useEffect, useState } = React;

function App() {
  const [a, _] = useState(() => [
    Number((Math.random() * 10).toFixed(2)),
    Number((Math.random() * 10).toFixed(2))
  ]);
  const [sum, setSum] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSum() {
      setLoading(true);
      const sum = await calculateSum(a[0], a[1]);
      setSum(sum);
      setLoading(false);
    }

    loadSum();
  }, [a]);

  return (
    <>
      <h1>The Sum Of</h1>
      <h3>
        {a[0]} and {a[1]} is {loading ? ' loading...' : sum}
      </h3>
    </>
  );
}

const root = createRoot(document.getElementById('root') as Container);
root.render(<App />);
