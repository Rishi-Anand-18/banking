import Split from 'react-split';
import Panel1Content from './Panel1Content.js';
import Panel3Content from './Panel3Content.js';


function Panel13View({pageNumber}) {
	
	return(
		<Split
			gutterSize={5}
			minSize={[250, 250]}
			direction="horizontal"
			cursor="col-resize"
			className="split-flex"
		>
			<Panel1Content />
			<Panel3Content pageNumber={pageNumber} />
		</Split>
	);
	
}


export default Panel13View;