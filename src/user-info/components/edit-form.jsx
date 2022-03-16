import React, { useRef, useState } from 'react'
import dateFormat from 'dateformat'
import { useForm, Controller } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Notice } from './notice'
import { ActionButton } from './action-button'
import { Block } from './block'
import '../form.css'
import { Dialog } from 'primereact/dialog'
import DatePicker from 'react-mobile-datepicker'
import { classNames } from 'primereact/utils'

export const EditForm = ({ data, onFormSubmit, leaveEditMode }) => {
  const [displayDialog, setDisplayDialog] = useState()
  const { name, birthday, height, weight, region, phone, code, account } = data
  const selectedBirthday = useRef(new Date(birthday))

  const {
    control,
    formState: { errors, isDirty, dirtyFields, isValid },
    handleSubmit,
    register,
    setValue,
  } = useForm({ defaultValues: data, mode: 'onChange' })

  const showImageUploadArea = !!dirtyFields.name

  const onSubmit = data => {
    onFormSubmit(data)
    leaveEditMode()
  }

  const getFormErrorMessage = name => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    )
  }

  return (
    <div style={styles.container}>
      <p style={styles.title}>修改您的照服員基本資料</p>
      <p>請選擇您需要修改的欄位進行填寫，若不需修改，請保留原始資料即可。</p>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <Block label="姓名" error={getFormErrorMessage('name')}>
          <Controller
            defaultValue={name}
            name="name"
            control={control}
            rules={{ required: '姓名為必填欄位' }}
            render={({ field, fieldState }) => (
              <InputText
                id={field.name}
                style={styles.input}
                className={classNames({
                  'p-invalid': fieldState.invalid,
                })}
                {...field}
              />
            )}
          />
        </Block>
        {showImageUploadArea && (
          <div>
            <button
              type="button"
              style={styles.imageUpload}
              // onClick={() => setDisplayDialog(true)}
            >
              點擊上傳身分證照
            </button>
          </div>
        )}
        <Block label="出生年月日" error={getFormErrorMessage('birthday')}>
          <Controller
            defaultValue={birthday}
            name="birthday"
            control={control}
            rules={{ required: '生日為必填欄位' }}
            render={({ field, fieldState }) => (
              <InputText
                onFocus={() => setDisplayDialog(true)}
                id={field.name}
                style={styles.input}
                className={classNames({
                  'p-invalid': fieldState.invalid,
                })}
                {...field}
              />
            )}
          />
          <Dialog
            header="請選擇出生年月日"
            visible={displayDialog}
            style={styles.dialog}
            footer={() => (
              <div style={styles.dialogFooter}>
                <ActionButton
                  size={46}
                  iconSize={15}
                  label="確認"
                  icon="check"
                  position="right"
                  backgroundColor="white"
                  opacity={1}
                  onClick={() => {
                    setValue(
                      'birthday',
                      dateFormat(selectedBirthday.current, 'yyyy/mm/dd'),
                      { shouldValidate: true, shouldDirty: true }
                    )
                    setDisplayDialog(false)
                  }}
                />
              </div>
            )}
            onHide={() => setDisplayDialog(false)}
          >
            <DatePicker
              value={selectedBirthday.current}
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
                  caption: 'Mon',
                  step: 1,
                },
                date: {
                  format: 'DD',
                  caption: 'Day',
                  step: 1,
                },
              }}
              onChange={c => {
                selectedBirthday.current = c
              }}
            />
          </Dialog>
        </Block>
        <Block label="身高" unit="公分" error={getFormErrorMessage('height')}>
          <Controller
            defaultValue={Number(height)}
            name="height"
            control={control}
            render={({ field, fieldState }) => (
              <InputText
                id={field.name}
                type="number"
                style={styles.input}
                className={classNames({
                  'p-invalid': fieldState.invalid,
                })}
                {...register('height', {
                  required: '身高為必填欄位',
                  max: {
                    value: 300,
                    message: '身高需介於100-300之間',
                  },
                  min: {
                    value: 100,
                    message: '身高需介於100-300之間',
                  },
                })}
                {...field}
              />
            )}
          />
        </Block>
        <Block label="體重" unit="公斤" error={getFormErrorMessage('weight')}>
          <Controller
            defaultValue={weight}
            name="weight"
            control={control}
            render={({ field, fieldState }) => (
              <InputText
                id={field.name}
                type="number"
                style={styles.input}
                className={classNames({
                  'p-invalid': fieldState.invalid,
                })}
                {...register('weight', {
                  required: '體重為必填欄位',
                  max: {
                    value: 200,
                    message: '體重需介於20-200之間',
                  },
                  min: {
                    value: 20,
                    message: '身高需介於20-200之間',
                  },
                })}
                {...field}
              />
            )}
          />
        </Block>
        <Block label="主要服務縣市">
          <Controller
            defaultValue={region}
            name="region"
            control={control}
            rules={{ required: '主要服務縣市為必填欄位' }}
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
        <Block label="電話" error={getFormErrorMessage('phone')}>
          <Controller
            defaultValue={phone}
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <InputText
                id={field.name}
                style={styles.input}
                className={classNames({
                  'p-invalid': fieldState.invalid,
                })}
                {...register('phone', {
                  pattern: {
                    value: /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/,
                    message: '手機號碼格式錯誤',
                  },
                })}
                {...field}
              />
            )}
          />
        </Block>
        <Block label="銀行代碼" error={getFormErrorMessage('code')}>
          <Controller
            defaultValue={code}
            name="code"
            control={control}
            render={({ field, fieldState }) => (
              <InputText
                id={field.name}
                type="number"
                style={styles.input}
                className={classNames({
                  'p-invalid': fieldState.invalid,
                })}
                {...register('code', {
                  minLength: {
                    value: 3,
                    message: '銀行代碼為3碼',
                  },
                  maxLength: {
                    value: 3,
                    message: '銀行代碼為3碼',
                  },
                })}
                {...field}
              />
            )}
          />
        </Block>
        <Block label="銀行帳號" error={getFormErrorMessage('account')}>
          <Controller
            defaultValue={account}
            name="account"
            control={control}
            render={({ field, fieldState }) => (
              <InputText
                id={field.name}
                type="number"
                style={styles.input}
                className={classNames({
                  'p-invalid': fieldState.invalid,
                })}
                {...register('account', {
                  minLength: {
                    value: 9,
                    message: '銀行帳號為9-14碼',
                  },
                  maxLength: {
                    value: 14,
                    message: '銀行帳號為9-14碼',
                  },
                })}
                {...field}
              />
            )}
          />
        </Block>
        <Notice />
        <div style={styles.buttons}>
          <ActionButton
            label="會員資料"
            icon="arrow-left"
            position="left"
            onClick={leaveEditMode}
          />
          <ActionButton
            type="submit"
            icon="arrow-right"
            label={`下一步\n送出修改`}
            position="right"
            disabled={!isDirty || !isValid}
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
    width: '100%',
    height: 184,
    backgroundColor: '#F1F3F6',
    border: '1px dashed #767676',
    borderRadius: 5,
    marginBottom: 16,
  },
  dialog: {
    width: '70vw',
    height: 300,
  },
  dialogFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 0px',
  },
}
