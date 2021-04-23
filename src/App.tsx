import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Hello = () => {
  const [state, set] = useState<any[]>([]);
  useEffect(() => {
    setTimeout(() => {
      set(
        new Array(10).fill(0).map(() => ({
          key: Math.random(),
          src: `https://www.caniuse.com`,
        }))
      );
    }, 500);
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          set((x) => {
            return [
              ...x,
              { key: Math.random(), src: `https://www.caniuse.com` },
            ];
          });
        }}
      >
        add
      </button>
      <div>
        {state.map((i) => {
          return <button key={i.key}>{i.key}</button>;
        })}
      </div>
      <div
        style={{
          height: 600,
          width: 800,
        }}
      >
        {state.map((i: any) => (
          <Web key={i.key} {...i} />
        ))}
      </div>
    </div>
  );
};
const Web = (props: any) => {
  return (
    <div>
      <div>---line---</div>
      <webview src={props.src}></webview>
    </div>
  );
};
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
