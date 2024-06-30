import { useEffect } from "react";

function Socials() {
    useEffect(() => {
        const downloadButton = document.getElementById('downloadButton');
    
        if (downloadButton) {
          downloadButton.addEventListener('click', function () {
            var pdfPath = './Resume/resume.pdf';
            var downloadLink = document.createElement('a');
            downloadLink.download = 'Athul-resume.pdf';
            downloadLink.href = pdfPath;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
          });
        }
      }, []); 
      
      const handleDownload = () => {
        var pdfPath = '/resume/resume.pdf';
        var downloadLink = document.createElement('a');
        downloadLink.download = 'Athul-resume.pdf'; 
        downloadLink.href = pdfPath; 
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };
    
    return (
        <div className="ms-3">
            <p className="urbanist-heavy fs-2">SOCIALS</p>
            <p className="urbanist fs-4 my-2 social-link"><i className="fa-brands fa-square-github pe-2 fs-3"></i><a target="_blank" href="https://github.com/Athulsn10">GITHUB</a> <i className="fi fi-bs-arrow-up-right fs-6" /></p>
            <p className="urbanist fs-4 my-2 social-link"><i className="fa-brands fa-linkedin pe-2 fs-3"></i><a target="_blank" href="https://www.linkedin.com/in/athul-nair123/">LINKEDIN</a> <i className="fi fi-bs-arrow-up-right fs-6" /> </p>
            <p className="urbanist fs-4 my-2 social-link"><i className="fa-brands fa-square-instagram pe-2 fs-3"></i><a target="_blank" href="https://www.instagram.com/_athul.s.nair/">INSTAGRAM</a> <i className="fi fi-bs-arrow-up-right fs-6" /></p>
            <hr className="m-0" style={{border:'1px solid #fffff'}} />
            <p className="urbanist-heavy fs-2">RESUME</p>
            <p onClick={handleDownload} className="urbanist fs-4 my-2 social-link"><i className="fa-solid fa-file  pe-2 fs-3"></i>DOWNLOAD <i className="fi fi-bs-arrow-up-right fs-6" /></p>
        </div>
    )
}

export default Socials