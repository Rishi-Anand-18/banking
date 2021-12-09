import React, {useState, useRef, useEffect, Fragment} from 'react';
import WebViewer from '@pdftron/webviewer';

const PDFViewer = ({pdfFile, currentPage}) => {
    const viewer = useRef(null);
	const [docViewer, setDocViewer] = useState(null);

    useEffect(() => {
		WebViewer(
		  {
			path: '/lib',
			initialDoc: pdfFile,
		  },
		  viewer.current,
		).then((instance) => {
			// you can now call WebViewer APIs here...
			const { documentViewer } = instance.Core;
			documentViewer.addEventListener('documentLoaded', function() {
				setDocViewer(documentViewer);
				if(currentPage){
					documentViewer.setCurrentPage(currentPage);
				}
			});
		  });
	  }, []);
	  
	  useEffect(() => {
		  if(currentPage && docViewer){
					docViewer.setCurrentPage(currentPage);
				}
	  }, [currentPage])

      return(
        <div className="MyComponent">
            <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
        </div>
      )
}

export default PDFViewer;