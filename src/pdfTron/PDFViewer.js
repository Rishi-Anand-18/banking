import React, {useState, useRef, useEffect, Fragment} from 'react';
import WebViewer from '@pdftron/webviewer';

const PDFViewer = ({pdfFile}) => {
    const viewer = useRef(null);

    useEffect(() => {
		WebViewer(
		  {
			path: '/lib',
			initialDoc: pdfFile,
		  },
		  viewer.current,
		).then((instance) => {
			const { documentViewer } = instance.Core;
			// you can now call WebViewer APIs here...
		  });
	  }, []);

      return(
        <div className="MyComponent">
            <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
        </div>
      )
}

export default PDFViewer;