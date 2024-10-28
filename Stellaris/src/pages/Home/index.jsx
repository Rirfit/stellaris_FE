
import Footer from "../../components/Footer"
import CallToActionDois from "../../components/Home/CallToActionDois/CallToActionDois"
import NavBar from "../../components/Navbar"
import ContentFeedback from '../../components/Home/ContentFeedback'
import '../Home/styles.css'
import ContentMarketing from '../../components/Home/ContentMarketing'
import ContentGuia from '../../components/Home/ContentGuia'
import ContentResultado from '../../components/Home/ContentResultado'
import CalltoActionUm from '../../components/Home/CalltoActionUm'

import Divisao from "../../components/Divisao"


export const Home = () => {
    return (
        <>
            <NavBar />

                <CalltoActionUm/>
                <Divisao/>
                <ContentResultado/>
                <Divisao/>
                <ContentGuia/>
                <ContentMarketing/>
                <ContentFeedback/>
                <CallToActionDois />
            <Footer />
        </>
    )
}
export default Home