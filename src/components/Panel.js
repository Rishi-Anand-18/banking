/*import Split from 'react-split';
import Panel1 from './Panel1.js';
import Panel2 from './Panel2.js';
import Panel3 from './Panel3.js';*/
import Panel1View from './panels/Panel1View.js';
import Panel2View from './panels/Panel2View.js';
import Panel3View from './panels/Panel3View.js';
import Panel12View from './panels/Panel12View.js';
import Panel13View from './panels/Panel13View.js';
import Panel23View from './panels/Panel23View.js';
import Panel123View from './panels/Panel123View.js';

import { useState } from 'react';

function Panel({panel1View, panel2View, setPanel2View, panel3View, setPanel3View, screen2Icons, setScreen2Icons, screen3Icons, setScreen3Icons, fileName, setFileName}) {
	
	const [pageNumber, setPageNumber] = useState(0);
	if(panel1View && !panel2View && !panel3View) {
		return(<Panel1View setPanel2View={setPanel2View} screen2Icons={screen2Icons} setScreen2Icons={setScreen2Icons} screen3Icons={screen3Icons} setScreen3Icons={setScreen3Icons} setFileName={setFileName}  />);
	} else if(!panel1View && panel2View && !panel3View) {
		return(<Panel2View setPageNumber={setPageNumber} fileName={fileName} setFileName={setFileName} />)
	} else if(!panel1View && !panel2View && panel3View) {
		return(<Panel3View pageNumber={pageNumber} fileName={fileName} setFileName={setFileName} />)
	} else if(panel1View && panel2View && !panel3View) {
		return(<Panel12View setPanel3View={setPanel3View} screen3Icons={screen3Icons} setScreen3Icons={setScreen3Icons} setPageNumber={setPageNumber} fileName={fileName} setFileName={setFileName}/>);
	} else if(panel1View && !panel2View && panel3View) {
		return(<Panel13View pageNumber={pageNumber} fileName={fileName} setFileName={setFileName} />);
	} else if(!panel1View && panel2View && panel3View) {
		return(<Panel23View setPageNumber={setPageNumber} pageNumber={pageNumber} fileName={fileName} setFileName={setFileName} />);
	} else if(panel1View && panel2View && panel3View) {
		return(<Panel123View setPageNumber={setPageNumber} pageNumber={pageNumber} fileName={fileName} setFileName={setFileName} />);
	} else if(!panel1View && !panel2View && !panel3View) {
		return(null);
	}
	
}


export default Panel;