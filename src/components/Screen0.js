import '../App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Loader from './Loader.js';


function Screen0({setScreen0, query, setQuery}) {
	
	const[loading, setLoading] = useState(false);
	const resultFound = true;
	
	const handleQueryChange = (event) => {
		setQuery(event.target.value);
	}
	
	const resetQuery = () => {
		setQuery("");
	}
	
	const handleSearch = () => {
		if(query) {
			setLoading(true);
			setTimeout(function() {
				setLoading(false);
				if(!resultFound){
					showToastify("Result not found", "info");
				} else {
					setScreen0(false);
				}
			}, 5000);
		} else {
			showToastify("Please enter search query", "error");
		}
	}
	
	const showToastify = (msg, type) => {
		toast(msg, {
			position: "top-right",
			type: type,
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light"
		});
	}
	
  return (
    <>
		{loading ? <Loader loading={true} /> : null}
		<div className="App">
		  <header className="App-header">
			<TextField
				label="Enter search query"
				type="text"
				autoComplete="current-password"
				value={query}
			   onChange={handleQueryChange}
			/>
			<Button variant="contained" size="large" onClick={handleSearch}>SEARCH</Button>
			<Button variant="contained" size="large" onClick={resetQuery}>CANCEL</Button>
		  </header>
		  <ToastContainer />
		</div>
	</>
  );
  
}


export default Screen0;
