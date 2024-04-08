import React from 'react'
import ArcCard from './Arc-card'

const VRrooms = () => {
  return (
    <div className='vr-rooms flex gap-8 items-center justify-center h-[100vh] bg-black'>
      <ArcCard name="Jiya" title="Dev" umi="https://virtualspeech.com/wp-content/uploads/chatgpt-powered-conversation-ai-1.jpg"/>
      <ArcCard name="Jiya" title="Dev" umi="https://virtualspeech.com/wp-content/uploads/presentation-skills.jpg"/>
      <ArcCard name="Jiya" title="Dev" umi="https://virtualspeech.com/wp-content/uploads/chatgpt-powered-conversation-ai-1.jpg"/>
    </div>  
  )
}

export default VRrooms
