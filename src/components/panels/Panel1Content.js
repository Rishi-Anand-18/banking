import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Documents from '../../images/documents.jpg';
import IconButton from '@mui/material/IconButton';
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import LooksOne from "@mui/icons-material/LooksOne";
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';

function Panel1Content({size, setPanel2View, screen2Icons, setScreen2Icons, screen3Icons, setScreen3Icons}) {
	
	const imageData = [
		{ quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
		{ quarter: 2, earnings: 16500 },
		{ quarter: 2, earnings: 16500 },
		{ quarter: 2, earnings: 16500 },
		{ quarter: 2, earnings: 16500 },
    ]
	
	
	const handleThumbnailClick = () => {
		if(screen2Icons === false) {
			setPanel2View(true);
			setScreen2Icons(true);
			setScreen3Icons(false);
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
			{imageData.map(elem => (
				<Grid item xs={size} key={imageData.indexOf(elem)}>
				<ImageListItem>
					<img
						className="panel-thumbnail"
						src={Documents}
						loading="lazy"
						onClick={() => handleThumbnailClick()}
					/>
					<ImageListItemBar
					    position="top"
						title="sample.pdf"
						actionIcon={
						  <IconButton
							
						  >
							<LooksOne style={{color: 'white'}} />
						  </IconButton>
						}
					/>
					<ImageListItemBar
						actionIcon={
						  <IconButton
							
						  >
							<PictureAsPdf style={{color: 'white'}} />
						  </IconButton>
						}
					/>
				</ImageListItem>
				</Grid>
			))}
			</Grid>
				
			</div>
		
	);
	
}

export default Panel1Content;