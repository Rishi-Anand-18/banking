import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Documents from '../../images/documents.jpg';
import IconButton from '@mui/material/IconButton';
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import LooksOne from "@mui/icons-material/LooksOne";
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';

import { Document, Page } from 'react-pdf';
import falcon from '../../pdf/falcon.pdf';

function Panel2Content({size, setPanel3View, screen3Icons, setScreen3Icons, setPageNumber}) {
	
	const imageData = [9, 10, 11, 12, 13, 14];
	
	const handleThumbnailClick = (pgNum) => {
		setPageNumber(pgNum);
		if(screen3Icons === false) {
			setPanel3View(true);
			setScreen3Icons(true);
		}
	}
	
	return(
		<div style={{padding: "15px 10px 15px 10px", background: "#ffffff", whiteSpace: "pre-wrap", overflowWrap: "break-word"}}>
			<Grid
                container
                spacing={1}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
				{imageData.map((ele, index) => (
					<Grid item xs={size} key={index}>
						<ImageListItem>
							<Document
								className="panel-thumbnail xyz"
								file={falcon}
								loading="please wait,loading..."
								error="Sorry, not able to display"
								onClick={() => handleThumbnailClick(ele)}
								renderMode="svg"
							>
								<Page pageNumber={ele} height={250} /> 
							</Document>
						</ImageListItem>
					</Grid>
				))}
			</Grid>		
		</div>
		
	);
	
}

export default Panel2Content;