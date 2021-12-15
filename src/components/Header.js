import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import HomeIcon from '@mui/icons-material/Home';
import FolderOff from "@mui/icons-material/FolderOff";
import FolderOpen from "@mui/icons-material/FolderOpen";
import AccountBox from "@mui/icons-material/AccountBox";
import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeft";
import Print from "@mui/icons-material/Print";
import Email from "@mui/icons-material/Email";
import Download from "@mui/icons-material/Download";
import Search from "@mui/icons-material/Search";
import useStyles from "../theme/CustomTheme.js";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

function ElevationScroll(props) {
  const { children } = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header({setScreen0, folderView, setFolderView, panel1View, setPanel1View, panel2View, setPanel2View, panel3View, setPanel3View, screen2Icons, setScreen2Icons, screen3Icons, setScreen3Icons, searchCheckbox, setSearchCheckbox}) {
	
	const handleHomeIconClick = () => {
		setScreen0(true);
		setScreen2Icons(false);
		setScreen3Icons(false);
	}
	
	const handleFolderIconClick = () => {
		setFolderView(!folderView);
	}
	
	const handlePanel1IconClick = () => {
		setPanel1View(!panel1View);
	}
	
	const handlePanel2IconClick = () => {
		setPanel2View(!panel2View);
	}
	
	const handlePanel3IconClick = () => {
		setPanel3View(!panel3View);
	}
	
	const handleSearchIconClick = () => {
		setSearchCheckbox(!searchCheckbox);
	}
	
	const classes = useStyles();
	return(
		<ElevationScroll>
			<AppBar position="fixed" style={{backgroundColor: '#222'}}>
				<Toolbar>
					<Tooltip title="Home" placement="bottom" arrow>
						<IconButton onClick={handleHomeIconClick}>
							<HomeIcon className={classes.icon} />
						</IconButton>
					</Tooltip>
					
					<Tooltip title={!folderView ? "Folder closed" : "Folder open"} placement="bottom" arrow>
						<IconButton onClick={handleFolderIconClick}>
							{!folderView ? <FolderOff className={classes.icon} /> : <FolderOpen className={classes.icon} />}
						</IconButton>
					</Tooltip>
					
					{screen2Icons ? (
						<>
						<Tooltip title="First Panel" placement="bottom" arrow>
							<IconButton onClick={handlePanel1IconClick}>
								<AccountBox className={classes.icon} />
							</IconButton>
						</Tooltip>
						
						<Tooltip title="Second Panel" placement="bottom" arrow>
							<IconButton onClick={handlePanel2IconClick}>
								<ArrowCircleLeft className={classes.icon} />
							</IconButton>
						</Tooltip>
						
						<Tooltip title="Print" placement="bottom" arrow>
							<IconButton>
								<Print className={classes.icon} />
							</IconButton>
						</Tooltip>
						
						<Tooltip title="Email" placement="bottom" arrow>
							<IconButton>
								<Email className={classes.icon} />
							</IconButton>
						</Tooltip>
						
						<Tooltip title="Downnload" placement="bottom" arrow>
							<IconButton>
								<Download className={classes.icon} />
							</IconButton>
						</Tooltip>
						</>
					) :null}
					
					
				    <Box sx={{ flexGrow: 1 }} />
					
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
					
					{screen3Icons ? (
						<Tooltip title="Third Panel" placement="bottom" arrow>
							<IconButton onClick={handlePanel3IconClick}>
								<ArrowCircleLeft className={classes.icon} />
							</IconButton>
						</Tooltip>
					) : null}
					
					<Tooltip title="Search" placement="bottom" arrow>
						<IconButton onClick={handleSearchIconClick}>
							<Search className={classes.icon} />
						</IconButton>
					</Tooltip>
					
					</Box>
				</Toolbar>
			</AppBar>
		</ElevationScroll>
	);
}

export default Header;