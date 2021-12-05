import Split from 'react-split';
import Panel1Content from './Panel1Content.js';


function Panel1View({setPanel2View, screen2Icons, setScreen2Icons, screen3Icons, setScreen3Icons}) {
	
	return(
		<Split
			gutterSize={5}
			minSize={[250]}
			direction="horizontal"
			cursor="col-resize"
			className="split-flex"
		>
			<Panel1Content setPanel2View={setPanel2View} screen2Icons={screen2Icons} setScreen2Icons={setScreen2Icons} screen3Icons={screen3Icons} setScreen3Icons={setScreen3Icons} />
		</Split>
	);
	
}


export default Panel1View;