import '../App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Loader from './Loader.js';
import {Paper,Grid,Avatar} from '@mui/material'
import {makeStyles} from '@material-ui/core/styles'
import FindInPageIcon from '@mui/icons-material/FindInPage';

const useStyles = makeStyles((theme)=>({

	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		height:'60vh', 
		width:'100vh'      
	},
 
	grid:{
	 display: 'flex',
	 alignItems: 'center',
	 justifyContent: 'center',
	 width: '100vw',
	 height: '100vh' 
	},        
		  
   btnContainer:{
	marginTop: '5vh',
	display:'block',
   },

	cancelButton:{
	 marginLeft: '20px !important',
	  },
 
  itemsContainer:{
	  height:'100%',
	  marginTop:'20px'
  },
 
  notchedOutline: {
	 borderWidth: "0.5px",
	 borderColor: "black !important"
   }
 
 }))

function Screen0({setScreen0, query, setQuery}) {
	
	const[loading, setLoading] = useState(false);
	const resultFound = true;
	const classes = useStyles();
	const avatarStyle = {backgroundColor:'black'}
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
		<Grid container spacing={2} className={classes.grid}> 
        <Grid item xs={12} md={6} >
            <Paper elevation={20} className={classes.paper}> 
			  <Grid align="center">
               <Avatar style={avatarStyle}><FindInPageIcon/></Avatar>
                 <h2>Search your documents here...</h2>
                </Grid>
                <div className={classes.itemsContainer}>
                   <div className={classes.btnContainer}>
				   <TextField  InputProps={{
                         classes: {
                         notchedOutline: classes.notchedOutline
                      } }}
					 placeholder='Enter your ID here....' 
					  type="text"
					  autoComplete="currentpassword"
					  value={query}
					  onChange={handleQueryChange} fullWidth required/>

					  <TextField className={classes.textField}  InputProps={{
                         classes: {
                         notchedOutline: classes.notchedOutline
                      } }}
					  style={{marginTop:'20px'}}
					 placeholder='Enter your document name here....' 
					  type="text"
					  autoComplete="currentpassword"
					  value={query}
					  onChange={handleQueryChange} fullWidth required/>
                   
				    </div>
                    <div className={classes.btnContainer}>
                        <Button type='submit' style={{backgroundColor: '#222', color: '#FFFFFF'}} variant='contained' onClick={handleSearch}>Search</Button>
                        <Button className={classes.cancelButton} type='submit' style={{backgroundColor: '#222', color: '#FFFFFF'}} variant='contained' onClick={resetQuery}>Cancel</Button>
                    </div>
                </div>

            </Paper>
        </Grid>
     </Grid>
		  <ToastContainer />
		</div>
	</>
  );
  
}


export default Screen0;
