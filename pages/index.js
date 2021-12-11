import Navbar from "../components/Navbar";
import Head from "../components/Head";
import Roadmap from "../components/Roadmap";
import FAQ from "../components/FAQ";
import Team from "../components/Team"
import Footer from "../components/Footer";

function index() {
  return (
    <>
     <Navbar /> 
     <Head />
     <Roadmap />
     <FAQ />
     <Team />
     <Footer />
    </>
  )
}

export default index
