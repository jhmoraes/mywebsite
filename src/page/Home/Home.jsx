import React, { useContext } from "react"
import GlobalStateContext from '../../globalState/GlobalStateContext'
import { HomeContainer, HomeBodyContainer, NetworkIcons, ProfileText } from './styledHome'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/Footer'
import fotoPerfil from '../../img/fotoPerfil.png'
import gitHubIcon from '../../img/gitHubIcon.png'
import linkedinIcon from '../../img/linkedinIcon.png'
import watsappIcon from '../../img/watsappIcon.png'
import email from '../../img/email.png'


const Home = () => {

    const { colorBackground, colorText } = useContext(GlobalStateContext)

    return (
        <div>
            {colorBackground ?
                <HomeContainer colorBackground={colorBackground}>
                    <Header />
                    <HomeBodyContainer>
                        <img id='photoPerfil' src={fotoPerfil} />
                        <ProfileText colorText={colorText}>
                            <h1>Olá! Sou a <br/>Juliana Moraes</h1>
                            <label>Desenvolvedora Full Stack <br /> Instrutora de programação <br />Arquiteta de software em desenvolvimento</label>
                            <p>"Acredite no poder dos estudos!"</p>
                        </ProfileText>

                        <NetworkIcons>
                            <a href="https://github.com/jhmoraes" target="_blank" title="github"><img src={gitHubIcon} /></a>
                            <a href="https://www.linkedin.com/in/julianamoraes/" title="linkedin" target="_blank"><img src={linkedinIcon} /></a>
                            <a href="mailto:juliana.hmoraes@gmail.com?body=My custom mail body" title="juliana.hmoraes@gmail.com" target="_blank"><img src={email} /></a>
                        </NetworkIcons>

                    </HomeBodyContainer>
                    <Footer />
                </HomeContainer> : <p>carregando...</p>}
        </div>
    )
}

export default Home