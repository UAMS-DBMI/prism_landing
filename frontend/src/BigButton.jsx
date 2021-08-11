import './BigButton.css';
import FolderSearch from './img/folder_search.svg';
import SearchGlass from './img/search_glass.svg';
import Chart from './img/chart.svg';
import Microscope from './img/microscope.svg';
import MRI from './img/mri.svg';

export function BigButton(props) {
	let icons = {
		'folder': FolderSearch,
		'search': SearchGlass,
		'chart': Chart,
		'microscope': Microscope,
		'mri': MRI
	};
	return (
		<a className="bigbutton" href={props.link}>
			<img src={icons[props.icon]} alt="Search Icon"/>
			<h3>{props.title}</h3>
			<p>{props.text}</p>
		</a>
	);
}