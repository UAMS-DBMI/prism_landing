import './App.css';
import { BigButton } from './BigButton';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home(props) {
  const path_db_link = `http://pathdb.${window.location.host}`
  const nbia_link = `http://nbia.${window.location.host}/nbia-search`
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
            <BigButton
              icon='folder'
              link="/collections"
              title="Browse Collections"
              text="Browse and manage file collections in your PRISM"/>
            <BigButton
              icon='search'
              link="/cohort_builder"
              title="Cohort Builder"
              text="Build subject cohorts using RDF loaded into the PRISM triplestore"/>
            <BigButton
              icon='folder'
              link="/facet_browser"
              title="Facet Browser"
              text="Browser files uploaded into the generic data repository Facet"/>
            <BigButton
              icon='mri'
              link="/"
              new_tab={true}
              title="Posda"
              text="Curate and load DICOM files into PRISM"/>
            <BigButton
              icon='mri'
              link={nbia_link}
              new_tab={true}
              title="NBIA"
              text="Use the NBIA search interface to browse and download radiology DICOM files"/>
            <BigButton
              icon='microscope'
              link={path_db_link}
              new_tab={true}
              title="PathDB"
              text="Use the PathDB Histopathology Portal to perform detailed searches and visualize images"/>
            <BigButton
              icon='chart'
              link='/config'
              title='Configure'
              text="Configure your PRISM install"/>
          </Col>

        </Row>
      </Container>
      <Row className="description-area">
        <Col className="description-block">
          <h5>About PRISM</h5>
          <p>Platform for Imaging in Precision Medicine (PRISM) is a UAMS-centric repository for biomedical image-based software tools.</p>
        </Col>
        <Col className="description-block">
          <h5>PRISM Links</h5>
          <a href="https://prismtools.dev/">Project Home</a>
          <a href="https://prismtools.dev/docs/">Documentation</a>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
