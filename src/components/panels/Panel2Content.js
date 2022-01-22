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
import { useEffect, useRef, useState } from 'react';
import WebViewer from '@pdftron/webviewer';

function Panel2Content({size, setPanel3View, screen3Icons, setScreen3Icons, setPageNumber, fileName}) {
	const viewer = useRef(null);
	const [pages,setPages] = useState(0);
	const [selectedFile,setSelectedFile] = useState();
	const [pdfTronInstance,setPDFtronInstance] = useState(null);
	const imageData = [];
	for(let i = 1; i <= pages; i = i + 1) {
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

	useEffect(() => {
		let file = fileName === 'falcon.pdf' ? falcon : lionking;
		setSelectedFile(file);
		WebViewer(
		  {
			path: '/lib',
			initialDoc: file,
		  },
		  viewer.current,
		).then((instance) => {
			// you can now call WebViewer APIs here...
			const { documentViewer } = instance.Core;
			setPDFtronInstance(instance);
			documentViewer.addEventListener('documentLoaded', function() {
				setPages(instance.UI.getPageCount());
			});
		  });
	  }, []);

	  useEffect(()=>{
		if(pdfTronInstance && fileName){
			let file = fileName === 'falcon.pdf' ? falcon : lionking;
			setSelectedFile(file);
			pdfTronInstance.UI.loadDocument(file, {
				extension: 'pdf'
			});
			const { documentViewer } = pdfTronInstance.Core;
			documentViewer.addEventListener('documentLoaded', function() {
				setPages(pdfTronInstance.UI.getPageCount());
			});
		}
	  },[fileName])
	
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
								file={selectedFile}
								loading="please wait,loading..."
								error="Sorry, not able to display"
								onClick={() => handleThumbnailClick(ele)}
								renderMode="svg"
							>
								<Page pageNumber={ele} height={200} /> 
							</Document>
						</Paper>
						</Box>
						<p>{index + 1}</p>
					</Grid>
				))}
			</Grid>
			<div style={{display: 'none'}} className="webviewer" ref={viewer}></div>		
		</div>
		
	);
	
}

export default Panel2Content;