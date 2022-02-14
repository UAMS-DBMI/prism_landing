import './App.css';
import { BigButton } from './BigButton';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {
  return (
    <div className="frontpage-container">
      <Container className="front-top-container">
        <Row>
          <Col className="search-area">
            <h5>PRISM Search</h5>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Coming soon</Tooltip>}>
              <input placeholder="Search..." disabled tooltip="coming soon"/>
            </OverlayTrigger>
            <p>Try searching for</p>
            <ul className="undecorated-list">
              <li>Text in collection descriptions...</li>
              <p className="example-search-text"><strong>CPTAC-LSCC</strong> ...accelerate the understanding of the <span className="collection-search-text">molecular basis</span> of cancer through the application...</p>
              <li>Elements of clinical data...</li>
              <p className="example-search-text"><strong>brachytherapy_dose_A</strong> Numeric value to represent the total dose in cGY of <span className="clinical-search-text">brachytherapy</span> treatment given to the first reference point</p>
              <li>Curated values...</li>
              <p className="example-search-text"><strong>Cancer Stage</strong> <span className="curated-search-text">Stage II</span> The extent of a cancer in the body. Staging is usually based on the size of the tumor, whether lymph nodes contain cancer, and whether the cancer has spread from the original site to other parts of the body.</p>
            </ul>
          </Col>

          <Col sm={7} className='link-area'>
            <BigButton icon='folder' link="/collections" title="Browse Collections" text="Explore information about all submitted collections to TCIA. This is the best way to get a comprehensive picture of all data types associated with each collection."/>
            <BigButton icon='search' link="/beam" title="Cohort Builder" text="Build subject cohorts using curated clinical data from across TCIA collections."/>
            <BigButton icon='folder' link="/facet_browser" title="Facet Browser" text="Browser files uploaded into the generic data repository facet."/>
            <BigButton icon='folder' link="/" title="Posda" text="Curate and load DICOM files into PRISM"/>
            <BigButton icon='mri' link="https://www.cancerimagingarchive.net/nbia-search/" title="Search Radiology" text="Use the TCIA Radiology Portal to perform detailed searches across datasets and visualize images before you download them."/>
            <BigButton icon='microscope' link="https://www.cancerimagingarchive.net/histopathology-imaging-on-tcia/" title="Search Histopathology" text="Use the TCIA Histopathology Portal to perform detailed searches and visualize images before you download them."/>
          </Col>

        </Row>
      </Container>
      <Row className="description-area">
        <Col className="description-block">
          <h5>About PRISM</h5>
          <p>Platform for Imaging in Precision Medicine (PRISM) is a UAMS-centric repository for biomedical image-based software tools.</p>
        </Col>
        <Col className="description-block">
          <h5>Links</h5>
          <a href="https://prismtools.dev/">Home</a>
          <a href="https://prismtools.dev/docs/">Documentation</a>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
