import { useState } from '@hookstate/core'
import ChatBox from 'react-custom-chat'
import store from '../../store'

const FirstPersonChat = () => {
  const { firstPersonMessageList, secondPersonMessageList, totalMessagesSend } = useState(store);

  const handleSendMessage = newMessage => {
    firstPersonMessageList.merge([{text: newMessage, person: 'primary'}])
    setTimeout(() => {
      secondPersonMessageList.merge([{text: newMessage, person: 'secondary'}])
    }, 500)
    totalMessagesSend.set(count => count + 1)
  }

  return (
    <ChatBox
      messageList={firstPersonMessageList.get()}
      onSendMessage={handleSendMessage} 
      settings={{
        position: 'left',
        navColor: 'green',
        navText: 'Mycroft'
      }}
    />
  )
}

export default FirstPersonChat