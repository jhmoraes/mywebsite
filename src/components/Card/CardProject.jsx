import React from "react"
import { CardContainer } from './styledCard'
import { useContext } from "react"
import GlobalStateContext from "../../globalState/GlobalStateContext"

export default function CardProject({project}) {  

  const { imgproj, urlProject, nameProjct, linkGit, description } = project
  

  const { colorShadowCard } = useContext(GlobalStateContext)

  return (
    <CardContainer colorShadowCard={colorShadowCard}>
      <a href={urlProject} target="blanc">
        {imgproj && <img src={imgproj} />}
      </a>
      <ul>
        <a href={urlProject} target="blanc"><li>{nameProjct}</li></a>
        <a href={linkGit} target="blanc"><li>Ver no github</li></a>
        <li>{description}</li>
      </ul>


    </CardContainer>
  )
} 