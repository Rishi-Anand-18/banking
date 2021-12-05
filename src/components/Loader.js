import useStyles from "../theme/CustomTheme.js";
import Backdrop from '@mui/material/Backdrop';
import PacmanLoader from 'react-spinners/PacmanLoader';


function Loader({loading}) {
	
	const classes = useStyles();
	
	return(
		<Backdrop open={loading} className={classes.backdrop} >
			<PacmanLoader loading={true} color="white" size={17} />
		</Backdrop>
	);
	
}


export default Loader;