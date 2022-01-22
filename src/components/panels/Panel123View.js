import { useState } from 'react';
import Split from 'react-split';
import Panel1Content from './Panel1Content.js';
import Panel2Content from './Panel2Content.js';
import Panel3Content from './Panel3Content.js';


function Panel23View({setPageNumber, pageNumber, fileName, setFileName}) {//33.3333
	
	/*const [panel1Size, setPanel1Size] = useState(6);
	const [panel2Size, setPanel2Size] = useState(6);
	const [panel3Size, setPanel3Size] = useState(12);*/
	
	
	const resetPanelSize = (sizes) => {
		/*if(sizes[0] < 30) {
			setPanel1Size(12);
		} else if(sizes[0] > 30 && sizes[0] < 40) {
			setPanel1Size(6)
		} else {
			setPanel1Size(4);
		}
		if(sizes[1] < 30) {
			setPanel2Size(12);
		} else if(sizes[1] > 30 && sizes[1] < 40) {
			setPanel2Size(6);
		} else {
			setPanel2Size(4);
		}*/
	}
	
	
	return(
		<Split
			gutterSize={3}
			minSize={[300, 300, 300]}
			direction="horizontal"
			cursor="col-resize"
			className="split-flex"
			onDragEnd={(sizes)=> resetPanelSize(sizes)}
		>
			<Panel1Content setFileName={setFileName}/>
			<Panel2Content setPageNumber={setPageNumber} fileName={fileName}/>
			<Panel3Content pageNumber={pageNumber} fileName={fileName}/>
		</Split>
	);
	
}


export default Panel23View;