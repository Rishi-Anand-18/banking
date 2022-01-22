import Split from 'react-split';
import Panel1Content from './Panel1Content.js';
import Panel2Content from './Panel2Content.js';


function Panel12View({setPanel3View, screen3Icons, setScreen3Icons, setPageNumber,fileName, setFileName}) {
	console.log('Panel12View ===> ', fileName);
	return(
		<Split
			gutterSize={5}
			minSize={[250, 250]}
			direction="horizontal"
			cursor="col-resize"
			className="split-flex"
		>
			<Panel1Content setFileName={setFileName} />
			<Panel2Content setPanel3View={setPanel3View} screen3Icons={screen3Icons} setScreen3Icons={setScreen3Icons} setPageNumber={setPageNumber} fileName={fileName}/>
		</Split>
	);
	
}


export default Panel12View;