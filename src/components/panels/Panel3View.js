import Split from 'react-split';
import Panel3Content from './Panel3Content.js';


function Panel3View({pageNumber, fileName}) {
	
	return(
		<Split
			gutterSize={5}
			minSize={[250]}
			direction="horizontal"
			cursor="col-resize"
			className="split-flex"
		>
			<Panel3Content pageNumber={pageNumber} fileName={fileName}/>
		</Split>
	);
	
}


export default Panel3View;