import './App.css';
import { BigButton } from './BigButton';

function Home() {
  return (
    <div className="frontpage-container">
      <div className="front-top-container">

        <div className="search-area">
          <h5>PRISM Search</h5>
          <input placeholder="Search..."/>
          <p>Try searching for</p>
          <ul className="undecorated-list">
            <li>Text in collection descriptions...</li>
            <p className="example-search-text"><strong>CPTAC-LSCC</strong> ...accelerate the understanding of the <span className="collection-search-text">molecular basis</span> of cancer through the application...</p>
            <li>Elements of clinical data...</li>
            <p className="example-search-text"><strong>brachytherapy_dose_A</strong> Numeric value to represent the total dose in cGY of <span className="clinical-search-text">brachytherapy</span> treatment given to the first reference point</p>
            <li>Curated values...</li>
            <p className="example-search-text"><strong>Cancer Stage</strong> <span className="curated-search-text">Stage II</span> The extent of a cancer in the body. Staging is usually based on the size of the tumor, whether lymph nodes contain cancer, and whether the cancer has spread from the original site to other parts of the body.</p>
          </ul>
        </div>

        <div className="link-area">
          <BigButton icon='folder' link="/collections" title="Browse Collctions" text="Explore information about all submitted collections to TCIA. This is the best way to get a comprehensive picture of all data types associated with each collection."/>
          <BigButton icon='mri' link="https://www.cancerimagingarchive.net/nbia-search/" title="Search Radiology" text="Use the TCIA Radiology Portal to perform detailed searches across datasets and visualize images before you download them."/>
          <BigButton icon='microscope' link="https://www.cancerimagingarchive.net/histopathology-imaging-on-tcia/" title="Search Histopathology" text="Use the TCIA Histopathology Portal to perform detailed searches and visualize images before you download them."/>
          <BigButton icon='search' link="/beam" title="Cohort Builder" text="Build subject cohorts using curated clinical data from across TCIA collections."/>
        </div>

      </div>
      <div className="description-area">
        <div className="description-block">
          <h5>About the Cancer Imaging Archive (TCIA)</h5>
          <p>TCIA is a service which de-identifies and hosts a large archive of medical images of cancer accessible for public download. The data are organized as “collections”; typically patients’ imaging related by a common disease (e.g. lung cancer), image modality or type (MRI, CT, digital histopathology, etc) or research focus. DICOM is the primary file format used by TCIA for radiology imaging. Supporting data related to the images such as patient outcomes, treatment details, genomics and expert analyses are also provided when available.</p>
        </div>
        <div className="description-block">
          <h5>About the Cancer Imaging Program (CIP)</h5>
          <p>The Cancer Imaging Program (CIP) is one of four Programs in the Division of Cancer Treatment and Diagnosis (DCTD) of the National Cancer Institute. For complete information about the Cancer Imaging Program, please see the Cancer Imaging Program Website.</p>
        </div>
        <div className="description-block">
          <h5>Hosting TCIA at UAMS</h5>
          <p>In October 2015 Dr. Prior and the core TCIA team relocated from Washington University to the Department of Biomedical Informatics at the University of Arkansas for Medical Sciences.  The archive continues provides high quality, high value image collections to cancer researchers around the world.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
