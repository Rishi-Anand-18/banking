import Split from 'react-split';
import Panel2Content from './Panel2Content.js';
import Panel3Content from './Panel3Content.js';


function Panel23View({setPageNumber, pageNumber}) {
	
	return(
		<Split
			gutterSize={5}
			minSize={[250, 250]}
			direction="horizontal"
			cursor="col-resize"
			className="split-flex"
		>
			<Panel2Content setPageNumber={setPageNumber} />
			<Panel3Content pageNumber={pageNumber} />
		</Split>
	);
	
}


export default Panel23View;