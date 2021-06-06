import { useState } from '@hookstate/core'
import store from '../../store'

const TotalMessagesSendPersons = () => {
  const { totalMessagesSend } = useState(store);

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', 
        borderRadius: '5px'
      }}
    >
      <p 
        style={{ 
          fontSize: '1rem', 
          fontFamily: 'Roboto', 
          color: '#7159c1' 
        }}>
          Total de mensagens trocadas: <span style={{ color: '#020202' }}>{totalMessagesSend.get()}</span>
      </p>
    </div>
  )
}

export default TotalMessagesSendPersons