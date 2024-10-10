import React, { useContext } from "react"
import GlobalStateContext from '../../globalState/GlobalStateContext'
import { HomeContainer, ProjectsBodyContainer, ProjetcContainer } from './styledProject'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/Footer'
import CardProjact from "../../components/Card/CardProject"
import imgDW from '../../img/img-projetos/DW.jpg'
import imgEmbreve from '../../img/img-projetos/emBreve.png'


const ProjectsPage = () => {

    const { colorBackground, colorText } = useContext(GlobalStateContext)

    return (
        <div>
            {colorBackground ?
                <ProjetcContainer colorBackground={colorBackground}>
                    <Header />
                    <ProjectsBodyContainer>
                        <CardProjact imgproj={imgDW} urlProject={"https://jhmoraes.github.io/direcao-web/"}></CardProjact>
                        <CardProjact imgproj={imgEmbreve}></CardProjact>
                        <CardProjact imgproj={imgEmbreve}></CardProjact>
                        <CardProjact imgproj={imgEmbreve}></CardProjact>
                    </ProjectsBodyContainer>
                    <Footer />
                </ProjetcContainer> : <p>carregando...</p>}
        </div>

    )
}

export default ProjectsPage