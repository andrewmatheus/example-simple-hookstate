import { createState } from '@hookstate/core'

const store = createState({
  firstPersonMessageList: [],
  secondPersonMessageList: [],
  totalMessagesSend: 0
})

export default store