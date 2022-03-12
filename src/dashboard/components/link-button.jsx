export const LinkButton = ({ label, image, size, onClick }) => (
  <a style={styles.button} onClick={onClick}>
    <p style={styles.label}>{label}</p>
    <img
      src={image}
      style={size === 'small' ? styles.absoluteIcon : null}
      alt={label}
    />
  </a>
)

const styles = {
  button: {
    minWidth: 155,
    height: 101,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: ' space-between',
    backgroundColor: 'white',
    display: 'flex',
    padding: 8,
    flex: 1,
    margin: '8px 8.5px',
    position: 'relative',
  },
  label: {
    alignSelf: 'flex-end',
    fontSize: 25,
    fontWeight: 'bold',
  },
  absoluteIcon: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
}
