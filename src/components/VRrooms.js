import React from 'react'
import ArcCard from './Arc-card'
import img1 from './assets/a1.jpg'
import img2 from './assets/a2.png'
import interview from './assets/interview.jpeg'

const VRrooms = () => {
  return (
    <div className='vr-rooms flex-col  flex bg-black pt-8 '>
      <div className="wrapper pb-6">
  <div className="top">VR Rooms</div>
  <div className="bottom" aria-hidden="true">VR Rooms</div>
</div>
      <div className="gap-8 flex items-center justify-center flex-wrap">
      <ArcCard name="Roleplay with AI" title="Practice difficult conversations, sales pitches, negotiations, interviews, and more" umi={img1}/>
      <ArcCard name="Auditorium" title="Dev" umi="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/40d74c42032477.57bdd7d339875.jpg"/>
      <ArcCard name="Interview Panels" title="Dev" umi={interview}/>
      <ArcCard name="Impromptu Storytelling" title="Practice your storytelling by talking about a topic and including new words as you go." umi="https://virtualspeech.com/wp-content/uploads/impromptu-storytelling-image.jpg"/>
      <ArcCard name="Classroom Presentation" title="Dev" umi={img2}/>
      <ArcCard name="Active Listening Exercises" title="A variety of listening exercises, including the Goldilocks exercise and a conference call." umi="https://virtualspeech.com/wp-content/uploads/active-listening-skills-course.jpg"/>
      </div>
    </div>  
  )
}

export default VRrooms
