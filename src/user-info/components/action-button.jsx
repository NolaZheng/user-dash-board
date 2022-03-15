export const ActionButton = ({
  label,
  position,
  onClick,
  disabled,
  ...props
}) => {
  const styles = disabled ? disabledStyles : defaultStyles

  return (
    <button onClick={onClick} disabled={disabled} {...props}>
      <div style={styles.container}>
        {position === 'left' && (
          <div style={styles.arrow}>
            <i className={`pi pi-arrow-${position}`} style={styles.icon}></i>
          </div>
        )}
        <span style={styles.label}>{label}</span>
        {position === 'right' && (
          <div style={styles.arrow}>
            <i className={`pi pi-arrow-${position}`} style={styles.icon}></i>
          </div>
        )}
      </div>
    </button>
  )
}
const defaultStyles = {
  container: {
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: '#F1F3F6',
    borderRadius: 50,
    alignItems: 'center',
    border: '1px solid rgba(255, 172, 48, 0.5)',
  },
  arrow: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 172, 48, 0.5)',
    border: '1px solid rgba(255, 172, 48, 0.5)',
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: 'center',
  },
  label: {
    margin: '0px 10px',
    whiteSpace: 'pre-wrap',
    fontSize: 14,
    textAlign: 'center',
  },
  icon: {
    fontSize: 17,
  },
}

const disabledStyles = {
  container: {
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: 'rgba(241, 243, 246, 0.2)',
    borderRadius: 50,
    alignItems: 'center',
    border: '1px solid rgba(255, 172, 48, 0.2)',
  },
  arrow: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 172, 48, 0.2)',
    border: '1px solid rgba(255, 172, 48, 0.2)',
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: 'center',
  },
  label: {
    margin: '0px 10px',
    whiteSpace: 'pre-wrap',
    fontSize: 14,
    textAlign: 'center',
    color: 'rgba(0, 0, 0,0.2)',
  },
  icon: {
    fontSize: 17,
    color: 'rgba(0, 0, 0,0.2)',
  },
}
