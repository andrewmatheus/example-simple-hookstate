import { useState } from '@hookstate/core'
import ChatBox from 'react-custom-chat'
import store from '../../store'

const SecondPersonChat = () => {
  const { firstPersonMessageList, secondPersonMessageList, totalMessagesSend } = useState(store)

  const handleSendMessage = newMessage => {
    secondPersonMessageList.merge([{text: newMessage, person: 'primary'}])
    setTimeout(() => {
      firstPersonMessageList.merge([{text: newMessage, person: 'secondary'}])
    }, 500)
    totalMessagesSend.set(count => count + 1)
  }

  return (
    <ChatBox
      messageList={secondPersonMessageList.get()}
      onSendMessage={handleSendMessage}
      settings={{
        position: 'right',
        navColor: 'blue',
        navText: 'Cortana'
      }}
    />
  )
}

export default SecondPersonChat