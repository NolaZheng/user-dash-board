import { useState, useEffect } from 'react'
import { InfoCard } from '../../components/info-card'
import { ScrollPanel } from 'primereact/scrollpanel'
import { useLocation } from 'react-router-dom'

import { BasicCard } from '../components/basic-card'
import { EditForm } from '../components/edit-form'
import { CloseButton } from '../components/close-button'
import { getData as getDataFromServer } from '../data/index'

export const UserInfo = () => {
  const { state } = useLocation()
  const { title, image } = state

  const [data, setData] = useState()
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    getDataFromServer().then(d => setData(d))
  }, [])

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <InfoCard title={title} image={image} />
      </div>
      <ScrollPanel style={styles.scrollPanel}>
        {editMode ? (
          <EditForm />
        ) : data ? (
          <BasicCard data={data} onEditClick={() => setEditMode(!editMode)} />
        ) : (
          <></>
        )}
        <CloseButton />
      </ScrollPanel>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  card: {
    margin: 24,
  },
  scrollPanel: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    padding: 24,
    flex: 1,
  },
}
