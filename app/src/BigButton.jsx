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
	if(props.new_tab){
		return (
			<a className="bigbutton" href={props.link} target="_">
				<img src={icons[props.icon]} alt="Search Icon"/>
				<h4>{props.title}</h4>
				<p>{props.text}</p>
			</a>
		);

	}
	return (
		<a className="bigbutton" href={props.link}>
			<img src={icons[props.icon]} alt="Search Icon"/>
			<h4>{props.title}</h4>
			<p>{props.text}</p>
		</a>
	);
}