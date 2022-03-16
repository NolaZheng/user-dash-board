export const Block = ({ label, unit, error, children }) => {
  return (
    <div style={{ ...styles.container, marginBottom: error ? 35 : 15 }}>
      <div style={styles.label}>{label}</div>
      <div style={styles.inputContainer}>
        {children}
        {unit && <span style={styles.unit}>{unit}</span>}
        <div style={styles.error}>{error}</div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    position: 'relative',
  },
  label: {
    display: 'flex',
    alignSelf: 'flex-end',
    borderBottom: '2px solid',
    flex: 2,
    justifyContent: 'center',
    fontSize: 17,
    marginRight: 18,
    paddingBottom: 5,
    fontWeight: 500,
  },
  inputContainer: {
    display: 'flex',
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  unit: {
    paddingLeft: 5,
    whiteSpace: 'nowrap',
    fontWeight: 500,
  },
  error: {
    position: 'absolute',
    bottom: -20,
  },
}
