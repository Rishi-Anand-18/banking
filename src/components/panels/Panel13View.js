import Split from 'react-split';
import Panel1Content from './Panel1Content.js';
import Panel3Content from './Panel3Content.js';


function Panel13View({pageNumber, fileName, setFileName}) {
	
	return(
		<Split
			gutterSize={5}
			minSize={[250, 250]}
			direction="horizontal"
			cursor="col-resize"
			className="split-flex"
		>
			<Panel1Content setFileName={setFileName}/>
			<Panel3Content pageNumber={pageNumber} fileName={fileName} />
		</Split>
	);
	
}


export default Panel13View;