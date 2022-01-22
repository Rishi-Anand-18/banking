import React, {useState, useRef, useEffect, Fragment} from 'react';
import { Document, Page } from 'react-pdf';
import falcon from '../../pdf/falcon.pdf';
import lionking from '../../pdf/lion-king.pdf';
import { PDFViewer } from '../../pdfTron';

function Panel3Content({pageNumber, fileName}) {
	
	const [numPages, setNumPages] = useState(null);
    //const [pageNumber, setPageNumber] = useState(1);
	const [scale, setScale] = useState(1);

	let file = fileName === 'falcon.pdf' ? falcon : lionking;

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
	
	function changeScale(txt) {
		if(txt === 'zoomin') {
			setScale(scale + 1)
		} else {
			setScale(scale - 1)
		}
	}

    return (
      <div>
		<PDFViewer pdfFile={file} currentPage={pageNumber}/>
	    {/* {scale === 1 ? (<button onClick={() => changeScale('zoomin')}>zoom in</button>) : (<button onClick={() => changeScale('zoomout')}>zoom out</button>)} */}
		{/* <Document
          file={falcon}
		  loading="please wait,loading..."
		  error="Sorry, not able to display"
          onLoadSuccess={onDocumentLoadSuccess}
		  renderMode="svg"
        >
		<Page scale={scale} pageNumber={pageNumber} />
		  
        </Document> */}
      </div>
    );
	
}


export default Panel3Content;