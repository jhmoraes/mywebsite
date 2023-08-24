import React, {useContext} from "react"
import GlobalStateContext from '../../globalState/GlobalStateContext'
import { HomeContainer, BarCareerContainer, Formation } from './styledCareer'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/Footer'
import fotoPerfil from '../../img/fotoPerfil.png'
import barCareer from '../../img/barraCareer.jpg'

const CareerPage = () =>{

    const {colorBackground, colorText} = useContext(GlobalStateContext)
    
    return (
        <div>
            {colorBackground ? 
            <HomeContainer colorBackground={colorBackground}>
                <Header />
                <BarCareerContainer>
                    <img src={barCareer}/>
                    <Formation colorText={colorText}>
                        <li>Sistemas de Informação | UVA 2010</li>
                        <li>Qualidade e Gestão de Projetos | UCP 2015</li>
                        <li>Desenvolvimento Front-end | Infinet 2019</li>
                        <li>Formação FullStack | Labenu 2021</li>
                        <li>Arquitetura de Software Distribuido | PUC Minas 2024</li>
                    </Formation>
                </BarCareerContainer>
                <Footer />
            </HomeContainer> : <p>carregando...</p>}
        </div>
    )
}

export default CareerPage