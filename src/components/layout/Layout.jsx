import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../header/Header";
import Loading from "../loading/Loading";
const Layout = () => {
  const navigation = useNavigation();
  return (
    <div>
     <div className="max-w-6xl mx-auto">
     <Header></Header>
     {
      navigation.state === 'loading'? <Loading></Loading>:  <Outlet></Outlet>
     }
     
     </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
