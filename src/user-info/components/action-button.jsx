export const ActionButton = ({
  label,
  position,
  onClick,
  disabled,
  size = 58,
  icon = 'arrow',
  iconSize = 17,
  backgroundColor = '#F1F3F6',
  opacity = 0.5,
  ...props
}) => {
  const styles = disabled ? disabledStyles : defaultStyles
  const orange = `rgba(255, 172, 48, ${opacity})`

  return (
    <button onClick={onClick} disabled={disabled} {...props}>
      <div
        style={{ ...styles.container, backgroundColor, borderColor: orange }}
      >
        {position === 'left' && (
          <div
            style={{
              ...styles.circle,
              height: size,
              width: size,
              borderRadius: size / 2,
              backgroundColor: orange,
              borderColor: orange,
            }}
          >
            <i className={`pi pi-${icon}`} style={{ fontSize: iconSize }}></i>
          </div>
        )}
        <span style={styles.label}>{label}</span>
        {position === 'right' && (
          <div
            style={{
              ...styles.circle,
              height: size,
              width: size,
              borderRadius: size / 2,
              backgroundColor: orange,
              borderColor: orange,
            }}
          >
            <i className={`pi pi-${icon}`} style={{ fontSize: iconSize }}></i>
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
  circle: {
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
    margin: '0px 20px',
    whiteSpace: 'pre-wrap',
    fontSize: 14,
    textAlign: 'center',
  },
}

const disabledStyles = {
  container: {
    ...defaultStyles.container,
    backgroundColor: 'rgba(241, 243, 246, 0.2)',
    border: '1px solid rgba(255, 172, 48, 0.2)',
  },
  circle: {
    ...defaultStyles.circle,
    backgroundColor: 'rgba(255, 172, 48, 0.2)',
    border: '1px solid rgba(255, 172, 48, 0.2)',
  },
  label: {
    ...defaultStyles.label,
    color: 'rgba(0, 0, 0,0.2)',
  },
}
