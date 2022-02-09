import './App.css';
import { BigButton } from './BigButton';
import {
  Link,
  useParams
} from "react-router-dom";
import collections from './all_collections.json';


function Collection() {
  let { id } = useParams();

  let collection = collections[id];

  return (
    <>
      <h3>{collection.name}</h3>
      <div dangerouslySetInnerHTML={{__html: collection.raw_html}} />
    </>
  );
}

export default Collection;
