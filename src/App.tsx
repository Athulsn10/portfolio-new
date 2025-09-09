import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingButton from './page/LandingButton';
import { Analytics } from "@vercel/analytics/react";

function App() {

  return (
    <>
      <LandingButton />
      <Analytics/>
    </>
  )
}

export default App
