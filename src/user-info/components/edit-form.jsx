import React, { useRef, useState } from 'react'
import DatePicker from 'react-mobile-datepicker'
import dateFormat from 'dateformat'

import { useForm, Controller } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Notice } from './notice'
import { ActionButton } from './action-button'
import { Block } from './block'
import { Dialog } from 'primereact/dialog'
import { classNames } from 'primereact/utils'
import { useImageUpload } from '../hook/image-upload'

import '../form.css'

const regions = [
  { value: '台北市' },
  { value: '新北市' },
  { value: '桃園市' },
  { value: '臺中市' },
  { value: '臺南市' },
  { value: '高雄市' },
  { value: '新竹縣' },
  { value: '苗栗縣' },
  { value: '彰化縣' },
  { value: '南投縣' },
  { value: '雲林縣' },
  { value: '嘉義縣' },
  { value: '屏東縣' },
  { value: '宜蘭縣' },
  { value: '花蓮縣' },
  { value: '臺東縣' },
  { value: '澎湖縣' },
  { value: '金門縣' },
  { value: '連江縣' },
  { value: '基隆市' },
  { value: '新竹市' },
  { value: '嘉義市' },
]

export const EditForm = ({ data, onFormSubmit, leaveEditMode }) => {
  const [displayDialog, setDisplayDialog] = useState()
  const { name, birthday, height, weight, region, phone, code, account } = data
  const selectedBirthday = useRef(new Date(birthday))

  //#region form
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
  //#end region

  //#region image upload
  const { image, upload } = useImageUpload()
  //#end region

  //#region dropdown
  const selectedCountryTemplate = option => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <div>{option.value}</div>
        </div>
      )
    }

    return <span>{region}</span>
  }

  const countryOptionTemplate = option => {
    return (
      <div className="country-item">
        <div>{option.value}</div>
      </div>
    )
  }
  //#end region

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
          <div style={styles.imageUpload}>
            {image ? (
              <img
                style={{ height: '100%', width: '100%' }}
                src={image}
                alt="upload-data"
              />
            ) : (
              <>
                點擊上傳身分證照
                <input type="file" style={styles.inputFile} onChange={upload} />
              </>
            )}
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
        <Block label="主要服務縣市" error={getFormErrorMessage('region')}>
          <Controller
            defaultValue={region}
            name="region"
            control={control}
            rules={{ required: '主要服務縣市為必填欄位' }}
            render={({ field, fieldState }) => (
              <Dropdown
                id={field.name}
                value={field.value}
                options={regions}
                onChange={e => field.onChange(e.value)}
                optionLabel="value"
                filter
                filterBy="value"
                placeholder="Search"
                emptyFilterMessage="查無地區"
                valueTemplate={selectedCountryTemplate}
                itemTemplate={countryOptionTemplate}
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
    textAlign: 'center',
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
  inputFile: {
    height: '100%',
    width: '100%',
    opacity: 0,
    position: 'absolute',
  },
}
