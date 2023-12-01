import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MainHeading = styled.h1`
  font-size: 30px;
  color: #4c63b6;
  font-family: Bree Serif;
`
export const Form = styled.form`
  height: 200px;
  width: 100%;
  box-shadow: 0px 1px 10px 1px #bfbfbf;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
export const TitleInput = styled.input`
  height: 40px;
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
`
export const ContentInput = styled.textarea`
  flex-grow: 1;
  margin-top: 2px;
  padding: 10px;
  border: none;
  outline: none;
`
export const NoteItemContainer = styled.ul`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
  margin-top: 20px;
`
export const CustomButton = styled.button`
  height: 35px;
  width: 80px;
  border: none;
  border-radius: 5px;
  background-color: #4c63b6;
  color: #ffffff;
  align-self: end;
  margin-top: 10px;
`
export const NoTaskViewContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  height: 100px;
  width: 100px;
`
export const NoNotesCaption = styled.h1`
  font-size: 22px;
  color: #475569;
  font-weight: bold;
  margin-top: 10px;
`
export const EmptyNotesCaption = styled.p`
  font-size: 16px;
  color: #475569;
  margin-top: 10px;
  font-weight: 500;
`
