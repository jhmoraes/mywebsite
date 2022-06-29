import React, {useContext} from "react"
import GlobalStateContext from '../../globalState/GlobalStateContext'
import { HomeContainer, HomeBodyContainer, NetworkIcons, ProfileText } from './styledHome'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/Footer'
import fotoPerfil from '../../img/fotoPerfil.png'
import gitHubIcon from '../../img/gitHubIcon.png'
import linkedinIcon from '../../img/linkedinIcon.png'
import watsappIcon from '../../img/watsappIcon.png'


const Home = () => {

    const {colorBackground, colorText} = useContext(GlobalStateContext)  
    //console.log('colorBackground', colorBackground)

    return (
        <div>
            {colorBackground ? 
            <HomeContainer colorBackground={colorBackground}>
                <Header />
                <HomeBodyContainer>
                    <img src={fotoPerfil} />
                    <ProfileText colorText={colorText}>
                        <h1>Hi, I'm Juliana</h1>
                        <h2>Full Stack Developer</h2>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </ProfileText>

                    <NetworkIcons>
                        <a href="https://github.com/jhmoraes"><img src={gitHubIcon}/></a>
                        <a href="https://www.linkedin.com/in/julianamoraes/"><img src={linkedinIcon}/></a>
                        <a href="https://wa.me/5521983648550"><img src={watsappIcon}/></a>
                    </NetworkIcons>

                </HomeBodyContainer>
                <Footer />
            </HomeContainer> : <p>carregando...</p>}
        </div>
    )
}

export default Home