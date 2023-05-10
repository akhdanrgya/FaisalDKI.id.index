import Headers from "../Components/Headers";
import Home from "../Components/Home";
import Tentang from "../Components/Tentang";
import Visi from "../Components/Visi";
import ProgramKerja from "../Components/ProgramKerja";
import Kabar from "../Components/Kabar";
import Relawan from "../Components/Relawan";
import Galeri from "../Components/Galeri";
import Footer from "../Components/Footer";


const Main = () => {
    return(
        <>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        {/*================Header Menu Area =================*/}
        <Headers />
        {/*================Header Menu Area =================*/}

        {/*================Home Banner Area =================*/}
        <Home />
        {/*================End Home Banner Area =================*/}

        {/*================Tentang Area =================*/}
        <Tentang />
        {/*================Tentang Area =================*/}

        {/*================Visi dan Program kerja Area =================*/}
        <Visi />
        <ProgramKerja />
        {/*================End Visi dan Program kerja Area =================*/}

        {/*================Kabar Area =================*/}
        <Kabar />
        {/*================End Kabar Area =================*/}

        {/*================Relawan Area =================*/}
        {/*================End Relawan Area =================*/}

        {/*================Latest Galeri Area =================*/}
        <Galeri />

        {/* {Footer Area} */}
        <Footer />
      </>
    )
}

export default Main