import Tree from 'react-fs-treeview';

function Folder() {
	
	return(
		<Tree
			basePath="./"
			disableContextMenu={false}
			onItemSelected={(selectedItem) => console.log(selectedItem)}
		/>
	);
	
}


export default Folder;