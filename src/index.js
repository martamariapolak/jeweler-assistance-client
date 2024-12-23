import ReactDOM from'react-dom';

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello render</h1>);

import sqlite3 from "sqlite3";
const db=new sqlite3.Database("jeweler-assistance.db");
