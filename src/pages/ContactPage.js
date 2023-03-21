import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import Contact from "../components/Contact";
import { useEffect } from "react";

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Topbar />
      <Contact/>
      <Footer />
    </div>
  );
}

export default ContactPage;
