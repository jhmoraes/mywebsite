import React from "react"
import { CardContainer } from './styledCard'
import { useContext } from "react"
import GlobalStateContext from "../../globalState/GlobalStateContext"

export default function CardProjact({ imgproj, urlProject }) {

  const { colorShadowCard } = useContext(GlobalStateContext)

  return (
    <CardContainer colorShadowCard={colorShadowCard}>
      <a href={urlProject} target="blanc">
        {imgproj ? <img src={imgproj} /> : <p>carregando</p>}
        <p>Nome do Projeto</p>
      </a>

    </CardContainer>
  )
} 