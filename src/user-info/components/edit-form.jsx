import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Notice } from './notice'
import { ActionButton } from './action-button'
import { Block } from './block'

export const EditForm = ({ data, leaveEditMode }) => {
  const [formData, setFormData] = useState(data)
  const { name, birthday, height, weight, region } = formData.personal
  const { phone } = formData.contact
  const { code, account } = formData.beneficiary

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: data })

  return (
    <div style={styles.container}>
      <p style={styles.title}>修改您的照服員基本資料</p>
      <p>請選擇您需要修改的欄位進行填寫，若不需修改，請保留原始資料即可。</p>
      <div style={styles.form}>
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
        <Block label="出生年月日">
          <Controller
            defaultValue={birthday}
            name="birthday"
            control={control}
            rules={{ required: 'Name is required.' }}
            render={({ field, fieldState }) => (
              <InputText id={field.name} style={styles.input} {...field} />
            )}
          />
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
                options={['台北市']}
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
          <ActionButton label={`下一步\n送出修改`} position="right" disabled />
        </div>
      </div>
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
}
