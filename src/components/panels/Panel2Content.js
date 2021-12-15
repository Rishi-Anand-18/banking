import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Documents from '../../images/documents.jpg';
import IconButton from '@mui/material/IconButton';
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import LooksOne from "@mui/icons-material/LooksOne";
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { Document, Page } from 'react-pdf';
import falcon from '../../pdf/falcon.pdf';
import lionking from '../../pdf/lion-king.pdf';

function Panel2Content({size, setPanel3View, screen3Icons, setScreen3Icons, setPageNumber}) {
	
	const imageData = [];
	for(let i = 1; i <= 15; i = i + 1) {
		imageData.push(i);
	}
	//const imageData = [9, 10, 11, 12, 13, 14];
	
	const handleThumbnailClick = (pgNum) => {
		setPageNumber(pgNum);
		if(screen3Icons === false) {
			setPanel3View(true);
			setScreen3Icons(true);
		}
	}
	
	return(
		<div style={{padding: "15px 10px 15px 10px", background: "#ffffff", whiteSpace: "pre-wrap", overflowWrap: "break-word", textAlign: "center"}}>
			<Grid
                container
                spacing={5}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
				style={{textAlign: "center"}}
            >
				{imageData.map((ele, index) => (
					<Grid item xs={size} key={index}>
						<Box
							 sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 150,
          height: 200,
        },
      }}
						>
						<Paper elevation={3} >
							<Document
								className="panel-thumbnail xyz"
								file={lionking}
								loading="please wait,loading..."
								error="Sorry, not able to display"
								onClick={() => handleThumbnailClick(ele)}
								renderMode="svg"
							>
								<Page pageNumber={ele} height={200} /> 
							</Document>
						</Paper>
						</Box>
					</Grid>
				))}
			</Grid>		
		</div>
		
	);
	
}

export default Panel2Content;