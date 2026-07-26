import { site } from "../../data";

export default function Preloader() {
  return (
    <div className="loader" id="loader" aria-hidden="true">
      <div>
        <div className="loader-row">
          <div className="loader-name">{site.name.toUpperCase()}</div>
          <div className="loader-count" id="loader-count">
            0
          </div>
        </div>
        <div className="loader-bar">
          <span id="loader-bar" />
        </div>
      </div>
    </div>
  );
}
