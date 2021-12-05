import Split from 'react-split';
import Panel1Content from './Panel1Content.js';
import Panel2Content from './Panel2Content.js';


function Panel12View({setPanel3View, screen3Icons, setScreen3Icons, setPageNumber}) {
	
	return(
		<Split
			gutterSize={5}
			minSize={[250, 250]}
			direction="horizontal"
			cursor="col-resize"
			className="split-flex"
		>
			<Panel1Content />
			<Panel2Content setPanel3View={setPanel3View} screen3Icons={screen3Icons} setScreen3Icons={setScreen3Icons} setPageNumber={setPageNumber} />
		</Split>
	);
	
}


export default Panel12View;