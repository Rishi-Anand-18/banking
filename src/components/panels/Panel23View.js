import Split from 'react-split';
import Panel2Content from './Panel2Content.js';
import Panel3Content from './Panel3Content.js';


function Panel23View({setPageNumber, pageNumber, fileName}) {
	console.log('Panel123View ===> ', fileName);
	return(
		<Split
			gutterSize={5}
			minSize={[250, 250]}
			direction="horizontal"
			cursor="col-resize"
			className="split-flex"
		>
			<Panel2Content setPageNumber={setPageNumber} fileName={fileName}/>
			<Panel3Content pageNumber={pageNumber} fileName={fileName}/>
		</Split>
	);
	
}


export default Panel23View;