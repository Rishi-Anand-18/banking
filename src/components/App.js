import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import PacmanLoader from 'react-spinners/PacmanLoader';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Header from "./components/Header.js";
import useStyles from "./theme/CustomTheme.js";


function Loader({loading}) {
	
	const classes = useStyles();
	
	return(
	<Backdrop open={loading} className={classes.backdrop} >
		<PacmanLoader loading={true} color="white" size={17} />
	</Backdrop>)
}


function App() {
	
	const[query, setQuery] = useState("");
	const[loading, setLoading] = useState(false);
	
	const handleQueryChange = (event) => {
		setQuery(event.target.value);
	}
	
	const resetQuery = () => {
		setQuery("");
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
	
	const handleSearch = () => {
		if(query) {
			setLoading(true);
			setTimeout(function() {
				setLoading(false);
			}, 5000);
		} else {
			showToastify("Please enter search query", "error");
		}
	}
	
  return (
    <>
	{loading ? <Loader loading={true} /> : null}
    <div className="App">
	  <Header />
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

export default App;
