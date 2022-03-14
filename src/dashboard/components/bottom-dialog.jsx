import { useRef, useEffect } from 'react'
import ClipboardJS from 'clipboard'

import { Dialog } from 'primereact/dialog'
import { Toast } from 'primereact/toast'

import '../index.css'
import { BottomButton } from '../../components/bottom-button'

const invitationCode = 'Homexin1314520'

export const BottomDialog = () => {
  const toast = useRef(null)
  const clipboard = new ClipboardJS('.clipboard-btn')

  useEffect(() => {
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
  }, [])

  return (
    <>
      <Dialog
        modal={false}
        header="我的推薦碼"
        position="bottom"
        visible
        footer={
          <BottomButton
            className="clipboard-btn"
            label="點我複製推薦碼"
            data-clipboard-text={invitationCode}
          />
        }
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
