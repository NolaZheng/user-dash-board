export const CloseButton = () => (
  <a href="/" style={styles.button}>
    <i className="pi pi-times" style={styles.icon} />
  </a>
)

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
