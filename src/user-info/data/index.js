const data = {
  name: '李珊珊',
  gender: '女',
  birthday: '1995/03/11',
  height: '158',
  weight: '47',
  region: '台北市',
  phone: '0934-324-772',
  code: '812',
  account: '03112340210583',
}

export const getData = () =>
  new Promise((resolve, reject) => {
    resolve(data)
  })
