import { useState } from 'react';
import Header from "./Header.js";
import Grid from '@mui/material/Grid';
import Folder from './Folder.js';
import Panel from './Panel.js';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


function Screen123({setScreen0, screen2Icons, setScreen2Icons, screen3Icons, setScreen3Icons}) {
	
	const [folderView, setFolderView] = useState(false);
	const [panel1View, setPanel1View] = useState(true);
	const [panel2View, setPanel2View] = useState(false);
	const [panel3View, setPanel3View] = useState(false);
	const [fileName, setFileName] = useState('');
	const [searchCheckbox, setSearchCheckbox] = useState(false);
	
	//const [screen2Icons, setScreen2Icons] = useState(false);
	//const [screen3Icons, setScreen3Icons] = useState(false);
	
	
	return(
		<>
			<Header setScreen0={setScreen0} folderView={folderView} setFolderView={setFolderView} panel1View={panel1View} setPanel1View={setPanel1View} panel2View={panel2View} setPanel2View={setPanel2View} panel3View={panel3View} setPanel3View={setPanel3View} screen2Icons={screen2Icons} setScreen2Icons={setScreen2Icons} screen3Icons={screen3Icons} setScreen3Icons={setScreen3Icons} searchCheckbox={searchCheckbox} setSearchCheckbox={setSearchCheckbox} />
			<br/>
			<br/>
			<br/>
			{searchCheckbox ? (
				<Grid container>
					<Grid item xs={10}>
					</Grid>
					<Grid item xs={2}>
						<TextField
							label="Keyword search"
							type="text"
							autoComplete="current-password"
						/>
						<FormControlLabel
							control={<Switch checked={false} />}
							label="Within document"
						/>
					</Grid>
				</Grid>
			) : (
				null
			)}
			<Grid container spacing={2} style={{height: "100vh"}}>
				{folderView ? (
					<>
					<Grid item xs={2}>
						<Folder />
					</Grid>
					<Grid item xs={10}>
						<Panel panel1View={panel1View} panel2View={panel2View} setPanel2View={setPanel2View} panel3View={panel3View} setPanel3View={setPanel3View} screen2Icons={screen2Icons} setScreen2Icons={setScreen2Icons} screen3Icons={screen3Icons} setScreen3Icons={setScreen3Icons} fileName={fileName} setFileName={setFileName}/>
					</Grid>
					</>
				) : (
					<Grid item xs={12}>
						<Panel panel1View={panel1View} panel2View={panel2View} setPanel2View={setPanel2View} panel3View={panel3View} setPanel3View={setPanel3View} screen2Icons={screen2Icons} setScreen2Icons={setScreen2Icons} screen3Icons={screen3Icons} setScreen3Icons={setScreen3Icons}  fileName={fileName} setFileName={setFileName}/>
					</Grid>
				)}
			</Grid>
		</>
	);
	
}


export default Screen123;