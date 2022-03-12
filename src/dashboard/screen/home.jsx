import { useState } from 'react'

import { LinkButton } from '../components/link-button'
import { InfoCard } from '../components/info-card'
import { Announcement } from '../components/announcement'
import { ScrollPanel } from 'primereact/scrollpanel'
import { Dialog as Popup } from 'primereact/dialog'
import { BottomDialog } from '../components/bottom-dialog'

import trophy from '../../asset/trophy.svg'
import cv from '../../asset/cv.svg'
import moneyBag from '../../asset/money-bag.svg'

export const Home = () => {
  const [popupTarget, setPopupTarget] = useState()
  const buttons = [
    {
      label: '會員資訊',
      image: cv,
      size: 'small',
      onClick: () => {
        window.location.href = '/user-info'
      },
    },
    {
      label: '薪水查詢',
      image: moneyBag,
      size: 'small',
      onClick: () => {
        setPopupTarget('薪水查詢')
      },
    },
    {
      label: '平台任務',
      image: trophy,
      size: 'large',
      onClick: () => {
        setPopupTarget('平台任務')
      },
    },
  ]

  return (
    <div>
      <ScrollPanel style={styles.scrollPanel}>
        <InfoCard />
        <Announcement />
        <div style={styles.linkButtons}>
          {buttons.map(b => (
            <LinkButton key={b.label} {...b} />
          ))}
        </div>
      </ScrollPanel>
      <BottomDialog />
      {/* add space for bottom dialog */}
      <div style={blockStyles.container} />
      <Popup
        style={dialogStyles.container}
        header={
          <div style={dialogStyles.header}>
            <p>哎呀！</p>
            <p>本頁面還沒有開放!</p>
          </div>
        }
        visible={!!popupTarget}
        footer={<></>}
        onHide={() => setPopupTarget(undefined)}
        contentStyle={dialogStyles.content}
      >
        <p>{`敬請期待${popupTarget}頁面的上線!`}</p>
      </Popup>
    </div>
  )
}

const styles = {
  scrollPanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 24,
  },
  linkButtons: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: ' space-between',
    flexBasis: 'auto',
    margin: '0px -8.5px',
  },
}

const dialogStyles = {
  container: {
    width: 327,
  },
  content: {
    textAlign: 'center',
    color: ' #4B4545',
    fontWeight: 'bold',
    fontSize: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    position: 'relative',
    color: '#D63939',
    fontWeight: 'bold',
  },
}

const blockStyles = {
  container: {
    borderTopRightRadius: 20,
    height: 248,
  },
}
