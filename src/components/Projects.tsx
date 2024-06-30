import { useEffect } from "react";
import { projectData } from "../Json/projects.js";
export default function Projects() {
  useEffect(() => {
    console.log(projectData);
  }, []);
  return (
    <>
      <p className="guntertest-font fs-2 text-center text-light">PROJECTS</p>
      <div className="w-100">
        {projectData.length != 0 ? (
          <div
            className="d-flex"
            style={{
              overflowX: "auto",
              width: "100%",
              margin: "auto",
            }}
          >
            {projectData.map((item) => (
              <div
                className="m-2 project-card"
                style={{ width: "300px", flex: "0 0 auto" }}
                key={item.id}
              >
                <div className="card h-100 bg-light">
                  <img
                    src={item.screenshot}
                    className="img-fluid card-img-top"
                    alt={item.projectName}
                  />
                  <div className="card-body">
                    <p className="card-title overflow-hidden fw-bold urbanist">
                      {item.projectName}
                    </p>
                    <p className="card-text urbanist-light" style={{fontSize:'14px'}}>{item.description}</p>
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "#ffffff" }}
                    >
                      <button
                        type="button"
                        className="rounded-pill w-100 d-flex justify-content-center align-items-center btn btn-dark"
                      >
                        Visit Site<i className="fi ms-1 fi-bs-arrow-up-right" style={{fontSize:'12px'}}/>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              width: "100%",
              height: "250px",
            }}
          >
            <p>Loading Projects For You...</p>
          </div>
        )}
      </div>
    </>
  );
}
