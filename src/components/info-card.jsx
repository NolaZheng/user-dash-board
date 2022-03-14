import { Avatar } from 'primereact/avatar'
import avatar from '../asset/avatar.svg'

export const InfoCard = ({ image, title, showStatus }) => (
  <div style={styles.container}>
    <div style={styles.avatarContainer}>
      <Avatar style={styles.avatar} image={image ?? avatar} size="large" />
    </div>
    <div style={styles.infoContainer}>
      <p style={styles.title}>{title}</p>
      {showStatus && <p style={styles.status}>上線中</p>}
    </div>
  </div>
)

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  avatarContainer: {
    display: 'flex',
    flex: 2,
    justifyContent: 'flex-end',
  },
  avatar: {
    height: 69,
    width: 69,
    alignSelf: 'flex-end',
  },
  infoContainer: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '18px',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  status: {
    color: '#B9DEA8',
    fontSize: 15,
  },
}
