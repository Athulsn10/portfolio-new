import { Analytics } from "@vercel/analytics/react";
import PortfolioPage from "./page/PortfolioPage";

function App() {
  return (
    <>
      <PortfolioPage />
      <Analytics />
    </>
  );
}

export default App;
