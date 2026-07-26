import { useEffect, useState } from "react";
import { site } from "../../data";

export default function Footer() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: site.footer.timezone,
        }),
      );
    };

    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <p className="label">{site.footer.copyright}</p>
        <p className="label">
          {site.location} — <span id="clock">{time}</span>{" "}
          {site.footer.timezoneLabel}
        </p>
        <a className="label" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
