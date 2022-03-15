export const Block = ({ label, unit, children }) => {
  return (
    <div style={styles.container}>
      <div style={styles.label}>{label}</div>
      <div style={styles.inputContainer}>
        {children}
        {unit && <span style={styles.unit}>{unit}</span>}
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
  },
  unit: {
    paddingLeft: 5,
    whiteSpace: 'nowrap',
    fontWeight: 500,
  },
}
