import React from 'react'
import results from './assets/results.png'

const SkillsAssessment = () => {
  return (
    <div className='h-[100vh] flex items-center justify-center p-12 gap-12 bg-black'>
      <img className='rounded-2xl border border-4 border-white' width={"600px"} src="https://virtualspeech.com/wp-content/uploads/progress-and-recordings-sample-data.jpg" alt="" />
      <div className="txt text-white flex flex-col gap-4 w-[35vw]">
        <h2 className='text-4xl'>Skills Assessment Dashboard</h2>
        <p className='text-lg'>Measure the skills you are practising and identify any skill gaps.</p>
            <p className='text-lg'>
            Using proprietary algorithms, AI, and sentiment analysis, see how performance in VirtualSpeech relates to real-life soft skills like communication, active listening, storytelling, and leadership.</p>
      </div>
    </div>
  )
}

export default SkillsAssessment
