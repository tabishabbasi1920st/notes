import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  MainHeading,
  Form,
  TitleInput,
  ContentInput,
  NoteItemContainer,
  CustomButton,
  NoTaskViewContainer,
  Image,
  NoNotesCaption,
  EmptyNotesCaption,
} from './styledComponents'

export default function Notes() {
  const [notesList, setNotesList] = useState([])
  const [formData, setFormData] = useState({
    title: '',
    notesDescription: '',
  })

  console.log(notesList)

  const handleChange = event => {
    const {name, value} = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleAddBtnClick = () => {
    const newNote = {
      id: uuidv4(),
      ...formData,
    }

    setNotesList(prevState => [...prevState, newNote])
    setFormData({title: '', notesDescription: ''})
  }

  const renderNoNotesView = () => (
    <NoTaskViewContainer>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png "
        alt="notes empty"
      />
      <NoNotesCaption>No Notes Yet</NoNotesCaption>
      <EmptyNotesCaption>Notes you add will appear here</EmptyNotesCaption>
    </NoTaskViewContainer>
  )

  const renderNotesItems = () => (
    <>
      {notesList.map(eachObj => (
        <NoteItem eachObj={eachObj} key={eachObj.id} />
      ))}
    </>
  )

  const renderAppropriateView = () => {
    switch (notesList.length) {
      case 0:
        return renderNoNotesView()
      default:
        return renderNotesItems()
    }
  }

  return (
    <MainContainer>
      <MainHeading>Notes</MainHeading>
      <Form>
        <TitleInput
          onChange={handleChange}
          name="title"
          type="text"
          value={formData.title}
          placeholder="Title"
        />
        <ContentInput
          onChange={handleChange}
          name="notesDescription"
          placeholder="Take a Note..."
          value={formData.notesDescription}
        />
        <CustomButton type="submit" onClick={handleAddBtnClick}>
          Add
        </CustomButton>
      </Form>
      <NoteItemContainer>{renderAppropriateView()}</NoteItemContainer>
    </MainContainer>
  )
}
