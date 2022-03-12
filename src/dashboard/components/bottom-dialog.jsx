import { Dialog } from 'primereact/dialog'
import '../index.css'
import { Button } from 'primereact/button'

export const BottomDialog = () => {
  const Footer = () => (
    // TODO: custom Button UI
    <Button
      label="點我複製推薦碼"
      // onClick={() => onHide(name)}
      className="p-button-text"
    />
  )

  return (
    <Dialog
      modal={false}
      header="我的推薦碼"
      position="bottom"
      visible
      footer={Footer}
      closable={false}
      className="dialog-bottom"
      style={{ margin: 0 }}
    >
      <p>
        我的推薦碼是Homexin1314520，快點一起來Home心接案賺錢吧！註冊成功還有100元可以領取唷！
      </p>
    </Dialog>
  )
}
