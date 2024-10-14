import React, { useContext } from "react"
import GlobalStateContext from '../../globalState/GlobalStateContext'
import { ProjectsBodyContainer, ProjetcContainer } from './styledProject'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/Footer'


const ProjectsPage = () => {

    const { colorBackground, colorText, showProject } = useContext(GlobalStateContext)
    


    return (
        <div>
            {colorBackground ?
                <ProjetcContainer colorBackground={colorBackground}>
                    <Header />
                    <ProjectsBodyContainer>
                       {showProject()}
                    </ProjectsBodyContainer>
                    <Footer />
                </ProjetcContainer> : <p>carregando...</p>}
        </div>

    )
}

export default ProjectsPage