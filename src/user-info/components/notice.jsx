export const Notice = () => (
  <div style={styles.container}>
    <p style={styles.title}>注意事項</p>
    <div style={styles.box}>
      <ol>
        <li style={styles.paragraph}>
          按下下方按鈕送出後，可以提醒Home心小幫手趕快幫您審核唷！
        </li>
        <li style={styles.paragraph}>需要小幫手審核通過後，才能再次接案。</li>
      </ol>
    </div>
  </div>
)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '24px 0px 24px 0px',
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  box: {
    border: '1px solid #CCCFD3',
    borderRadius: 20,
    padding: 16,
  },
  paragraph: {
    paddingBottom: 5,
    fontSize: 14,
  },
}
