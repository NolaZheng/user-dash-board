import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Notice } from './notice'
import { ActionButton } from './action-button'
import { Block } from './block'
import '../form.css'
import { Dialog } from 'primereact/dialog'
import DatePicker from 'react-mobile-datepicker'

export const EditForm = ({ data, onFormSubmit, leaveEditMode }) => {
  const [displayDialog, setDisplayDialog] = useState()
  const { name, birthday, height, weight, region, phone, code, account } = data

  const {
    control,
    formState: { errors, isDirty, dirtyFields },
    handleSubmit,
  } = useForm({ defaultValues: data })

  const showImageUploadArea = !!dirtyFields.name

  const onSubmit = data => {
    onFormSubmit(data)
    leaveEditMode()
  }

  return (
    <div style={styles.container}>
      <p style={styles.title}>修改您的照服員基本資料</p>
      <p>請選擇您需要修改的欄位進行填寫，若不需修改，請保留原始資料即可。</p>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <Block label="姓名">
          <Controller
            defaultValue={name}
            name="name"
            control={control}
            rules={{ required: 'Name is required.' }}
            render={({ field, fieldState }) => (
              <InputText id={field.name} style={styles.input} {...field} />
            )}
          />
        </Block>
        {showImageUploadArea && (
          <>
            <button
              type="button"
              style={styles.imageUpload}
              onClick={() => setDisplayDialog(true)}
            >
              點擊上傳身分證照
            </button>
          </>
        )}
        <Block label="出生年月日">
          <Controller
            defaultValue={birthday}
            name="birthday"
            control={control}
            rules={{ required: 'Name is required.' }}
            render={({ field, fieldState }) => (
              <InputText
                onFocus={() => setDisplayDialog(true)}
                id={field.name}
                style={styles.input}
                {...field}
              />
            )}
          />
          <Dialog
            header="請選擇出生年月日"
            visible={displayDialog}
            style={{ width: '70vw', height: 300 }}
            footer={() => (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px 0px',
                }}
              >
                <ActionButton
                  label="確認"
                  position="right"
                  onClick={leaveEditMode}
                />
              </div>
            )}
            onHide={() => setDisplayDialog(false)}
          >
            <DatePicker
              showHeader={false}
              showFooter={false}
              isPopup={false}
              theme="ios"
              isOpen={displayDialog}
              dateConfig={{
                year: {
                  format: 'YYYY',
                  caption: 'Year',
                  step: 1,
                },
                month: {
                  // format: value => monthMap[value.getMonth() + 1],
                  caption: 'Mon',
                  step: 1,
                },
                date: {
                  format: 'DD',
                  caption: 'Day',
                  step: 1,
                },
              }}
            />
          </Dialog>
        </Block>
        <Block label="身高" unit="公分">
          <Controller
            defaultValue={height}
            name="height"
            control={control}
            rules={{ required: 'Name is required.' }}
            render={({ field, fieldState }) => (
              <InputText id={field.name} style={styles.input} {...field} />
            )}
          />
        </Block>
        <Block label="體重" unit="公斤">
          <Controller
            defaultValue={weight}
            name="weight"
            control={control}
            rules={{ required: 'Name is required.' }}
            render={({ field, fieldState }) => (
              <InputText id={field.name} style={styles.input} {...field} />
            )}
          />
        </Block>
        <Block label="主要服務縣市">
          <Controller
            defaultValue={region}
            name="region"
            control={control}
            rules={{ required: 'Name is required.' }}
            render={({ field, fieldState }) => (
              <Dropdown
                id={field.name}
                value={field.value}
                onChange={e => field.onChange(e.value)}
                options={['台北市', '新北市']}
                style={styles.input}
              />
            )}
          />
        </Block>
        <Block label="電話">
          <Controller
            defaultValue={phone}
            name="phone"
            control={control}
            rules={{ required: 'Name is required.' }}
            render={({ field, fieldState }) => (
              <InputText id={field.name} style={styles.input} {...field} />
            )}
          />
        </Block>
        <Block label="銀行代碼">
          <Controller
            defaultValue={code}
            name="code"
            control={control}
            rules={{ required: 'Name is required.' }}
            render={({ field, fieldState }) => (
              <InputText id={field.name} style={styles.input} {...field} />
            )}
          />
        </Block>
        <Block label="銀行帳號">
          <Controller
            defaultValue={account}
            name="account"
            control={control}
            rules={{ required: 'Name is required.' }}
            render={({ field, fieldState }) => (
              <InputText id={field.name} style={styles.input} {...field} />
            )}
          />
        </Block>
        <Notice />
        <div style={styles.buttons}>
          <ActionButton
            label="會員資料"
            position="left"
            onClick={leaveEditMode}
          />
          <ActionButton
            type="submit"
            label={`下一步\n送出修改`}
            position="right"
            disabled={!isDirty}
          />
        </div>
      </form>
    </div>
  )
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  title: {
    fontSize: 25,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    padding: '24px 0px',
  },
  input: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  imageUpload: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    width: '100%',
    height: 184,
    backgroundColor: '#F1F3F6',
    border: '1px dashed #767676',
    borderRadius: 5,
    marginBottom: 16,
  },
}
