import { useNavigate } from 'react-router-dom'

export const CloseButton = () => {
  const navigate = useNavigate()
  return (
    <button style={styles.button} onClick={() => navigate('/')}>
      <i className="pi pi-times" style={styles.icon} />
    </button>
  )
}

const styles = {
  button: {
    display: 'flex',
    position: 'absolute',
    right: 24,
    top: 0,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  },
  icon: {
    color: 'black',
    height: 13,
    width: 13,
  },
}
