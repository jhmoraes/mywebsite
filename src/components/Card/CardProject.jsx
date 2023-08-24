import React from "react"
import {CardContainer} from './styledCard'
import imgCard from '../../img/emBreve.png'
import { useContext } from "react"
import GlobalStateContext from "../../globalState/GlobalStateContext"

export default function CardProjact() {

  const { colorShadowCard } = useContext(GlobalStateContext)

  return (
    <CardContainer colorShadowCard={colorShadowCard}>
      {imgCard?<img src={imgCard}/>:<p>carregando</p>}
      <p>Nome do Projeto</p>
    </CardContainer>
  )
} 