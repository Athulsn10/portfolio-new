
function Skills() {
    return (
        <>
            <div className="p-3 d-flex flex-column justify-content-center h-100">
                <div className="d-flex justify-content-start align-items-center">
                    <p className="guntertest-font fs-1 invert-cursor">SKILLS</p>
                </div>
                <hr className="m-0 mb-2" />
                <div className="row fs-5 urbanist  invert-cursor">
                    <div className="col-6 ">
                        <p><i className="fa-brands fa-react"></i> React</p>
                        <p><i className="fa-brands fa-angular"></i> Angular</p>
                        <p><i className="fa-brands fa-vuejs"></i> Vue js</p>
                    </div>
                    <div className="col-6">
                        <p><i className="fi fi-brands-typescript"></i> TypeScript</p>
                        <p><i className="fa-brands fa-js"></i> JavaScript</p>
                        <p><i className="fa-brands fa-node-js"></i> Express.js</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills