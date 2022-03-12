import { useRef } from 'react'
import ClipboardJS from 'clipboard'

import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'

import '../index.css'

const invitationCode = 'Homexin1314520'

export const BottomDialog = () => {
  const toast = useRef(null)
  const clipboard = new ClipboardJS('.clipboard-btn')

  clipboard.on('success', _ => {
    if (toast.current) {
      toast.current.show({
        severity: 'success',
        summary: 'Success',
        detail: '成功複製推薦碼',
        life: 3000,
      })
    }
  })

  const Footer = (
    // TODO: custom Button UI

    <Button
      className="clipboard-btn"
      label="點我複製推薦碼"
      data-clipboard-text={invitationCode}
    />
  )

  return (
    <>
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
          我的推薦碼是{invitationCode}
          ，快點一起來Home心接案賺錢吧！註冊成功還有100元可以領取唷！
        </p>
      </Dialog>
      <Toast ref={toast} style={{ width: 300 }} position="bottom-center" />
    </>
  )
}
