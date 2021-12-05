//import logo from './logo.svg';
//import './App.css';
import { useState } from 'react';
import Screen0 from './components/Screen0.js';
import Screen123 from './components/Screen123.js';


function App() {
	
	const [screen0, setScreen0] = useState(true);
	const[query, setQuery] = useState("");
	
	const [screen2Icons, setScreen2Icons] = useState(false);
	const [screen3Icons, setScreen3Icons] = useState(false);
	
    return (
	    <>
			{screen0 ? <Screen0 setScreen0={setScreen0} query={query} setQuery={setQuery} /> : <Screen123 setScreen0={setScreen0} screen2Icons={screen2Icons} setScreen2Icons={setScreen2Icons} screen3Icons={screen3Icons} setScreen3Icons={setScreen3Icons} />}
		</>
	);
}


export default App;
