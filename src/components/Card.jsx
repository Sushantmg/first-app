import Header from "./Header";
import { Welcome } from "./Welcome";
import Info from "./Info";
import Footer from "./Footer";
import Name from "./Name";

export  function Card(props){
    const { husband, wife, invitation } = props;
    return (
        <div className="card">
            <Header />
            <Name h={husband} w={wife} />
            <h1>WELCOME</h1>
         <Welcome />
         <Info inv={invitation} />
         <Footer />
        </div>
    );
  }
  