import { useEffect } from "react";
export default function Projects() {
    const projectData = [
        {
          projectName: "Teachify",
          description:
            "MEAN Stack project where students of BSc CS under calicut university can access their notes",
          liveUrl: "https://teachify-swart.vercel.app/",
          screenshot:"/projectImage/teachify.png",
          techStack: [["AngularJS", "NodeJS", "ExpressJS", "MongoDB"]],
        },
        {
          projectName: "Chatify",
          description:
            "MERN Stack Chat Application utilizing Socket.IO for real time communication using websockets ",
          liveUrl: "https://chatify-brown.vercel.app/",
          screenshot: "/projectImage/chatify.png",
          techStack: [["NodeJS", "ExpressJS", "MongoDB", "ReactJS", "Socket.io"]],
        },
        {
          projectName: "Enigma Doc App",
          description:
            "React App for performing CRUD operations with Google's Firebase",
          liveUrl: "https://enigma-doc-app.vercel.app/",
          screenshot: "/projectImage/enigma.png",
          techStack: [["ReactJS", "Firebase"]],
        },
        {
          projectName: "Contact Manger",
          description: "React App for CRUD operations with JSON Server",
          liveUrl: "https://contact-manager-crud.vercel.app/",
          screenshot:"/projectImage/contact-manager.png",
          techStack: [["ReactJS", "JSON Server"]],
        },
        {
          projectName: "Netflix Clone",
          description: "Clone App of Netflix created using React",
          liveUrl: "https://netflix-clone-reactjs-athul.netlify.app/",
          screenshot: "/projectImage/netflix.png",
          techStack: [["ReactJS", "RUST API", "AXIOS"]],
        },
        {
          projectName: "Google Translate Clone",
          description: "Google Translate clone using LibreTranslate API",
          liveUrl: "https://google-translate-clone-reactjs.netlify.app/",
          screenshot:"/projectImage/google-translate.png",
          techStack: [["ReactJS", "RUST API", "AXIOS"]],
        },
        {
          projectName: "Nike webpage clone",
          description: "Clone webpage",
          liveUrl: "https://athulsn10.github.io/Beki-parallax/",
          screenshot: "/projectImage/beki.png",
          techStack: [["HTML", "CSS"]],
        },
      ];
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
            {projectData.map((item:any) => (
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
