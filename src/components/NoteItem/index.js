import {MainContainer, Title, Description} from './styledComponents'

export default function NoteItem({eachObj}) {
  console.log(eachObj)
  return (
    <MainContainer>
      <Title>{eachObj.title}</Title>
      <Description>{eachObj.notesDescription}</Description>
    </MainContainer>
  )
}
