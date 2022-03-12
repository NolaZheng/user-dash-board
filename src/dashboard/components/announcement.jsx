export const Announcement = () => (
  <div style={styles.container}>
    <p style={styles.title}>Home心公告</p>
    <div style={styles.content} />
    <li style={styles.paragraph}>疫情期間，大家要多注意勤洗手，小心健康！</li>
    <li style={styles.paragraph}>
      若您已經施打完疫苗，可以透過小幫手回報給我們唷！
    </li>
  </div>
)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F1F3F6',
    width: '100%',
    textAlign: 'left',
    borderRadius: 20,
    padding: 16,
    margin: '8px 0px',
  },
  content: {
    height: 2,
    backgroundColor: '#E0E0E0',
    margin: '8px 0px',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: '21.6px',
  },
}
