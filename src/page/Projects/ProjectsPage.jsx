import React, { useContext } from "react"
import GlobalStateContext from '../../globalState/GlobalStateContext'
import { HomeContainer, ProjectsBodyContainer } from './styledProject'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/Footer'
import CardProjact from "../../components/Card/CardProject"


const ProjectsPage = () => {

    const { colorBackground, colorText } = useContext(GlobalStateContext)

    return (
        <div>
            {colorBackground ?
                <HomeContainer colorBackground={colorBackground}>
                    <Header />
                    <ProjectsBodyContainer>
                        <CardProjact></CardProjact>
                        <CardProjact></CardProjact>
                        <CardProjact></CardProjact>
                        <CardProjact></CardProjact>
                    </ProjectsBodyContainer>
                    <Footer />
                </HomeContainer> : <p>carregando...</p>}
        </div>

    )
}

export default ProjectsPage