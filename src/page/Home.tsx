import About from "../components/About"
import Experience from "../components/Experience"
import Profile from "../components/Profile"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Socials from "../components/Socials"

function Home() {

  return (
    <>
      <div className="home-bg p-3">
        {/* <div style={{height:'50px'}} className="nav-bar d-flex align-items-center justify-content-center w-100 rounded-5 bg-light">
        </div> */}
        <div className="row">
          <div className="container-fluid rounded-5 mt-2 col-lg-10 col-md-10 col-sm-12" style={{ background: '#fff' }}>
            <div className="row">
              <div className="col-sm-12 col-lg-4 col-md-6"><Profile /></div>
              <div className="col-sm-12 col-lg-8 col-md-6"><About/></div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 mt-2 ps-lg-2 p-0">
            <div className="flex-column d-flex justify-content-center text-dark rounded-5 w-100 h-100 p-3" style={{ background: '#ff3904' }}>
             <Socials/>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-7 col-md-6 col-sm-12 py-4 p-0 pe-1" style={{height:'330px'}}><Experience/></div>
          <div className="col-lg-5 col-md-6 col-sm-12 rounded-5 bg-light">
           <Skills/>
          </div>
        </div>
        <div className="mt-5">
          <Projects/>
        </div>
        <div className="mt-5">
        <div className="container-fluid">
          <hr />
            <p style={{ overflowY: 'hidden' }} className="head text-center mt-5 fs-3 urbanist fw-bold text-light">
              Thank You For Scrolling <i className="icon fa-solid fa-heart" ></i>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home