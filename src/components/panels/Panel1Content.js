import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Documents from '../../images/documents.jpg';
import IconButton from '@mui/material/IconButton';
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import LooksOne from "@mui/icons-material/LooksOne";
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import falcon from '../../pdf/falcon.pdf';
import lionking from '../../pdf/lion-king.pdf';
import Paper from '@mui/material/Paper';
import { Document, Page } from 'react-pdf';

function Panel1Content({size, setPanel2View, screen2Icons, setScreen2Icons, screen3Icons, setScreen3Icons}) {
	
	const imageData = [
		{ key: falcon, name: 'falcon.pdf', size: 6 },
        { key: lionking, name: 'lion-king.pdf', size: 15 }
    ]
	
	
	const handleThumbnailClick = (fileName) => {
		console.log(fileName);
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
                spacing={5}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
				style={{textAlign: "center"}}
            >
				{imageData.map((ele, index) => (
					<Grid item xs={size} key={index}>
						<p style={{position: 'relative', top: '25px', margin: '0px', right: '-145px', zIndex: 1,border: '1px solid black',width: '20px', backgroundColor: '#000000', color: '#ffffff'}}>{ele.size}</p>
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
								file={ele.key}
								loading="please wait,loading..."
								error="Sorry, not able to display"
								onClick={() => handleThumbnailClick(ele.name)}
								renderMode="svg"
							>
								<Page pageNumber={9} height={200} /> 
							</Document>
						</Paper>
						</Box>
						<p style={{position: 'relative', top: '-30px', margin: '0px', right: '-60px', zIndex: 1}}><PictureAsPdf style={{color: 'black'}} /></p>
						<p>{ele.name}</p>
					</Grid>
				))}
			</Grid>
		
		</div>
	);
	
}

export default Panel1Content;