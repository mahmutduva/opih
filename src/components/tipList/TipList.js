import React from 'react'
import './TipList.css'

const TipList = ({tips}) =>
  <div className='tip-bg'>
    <h3 className='tip-title'>TIPS</h3>
    <div className='tip-line' />
    <ul className='tip-list'>
      {tips.map(tip =>
        <li key={tip.id}>
          <div className='image-cover'>
            <img className='image' src={tip.user.photo.prefix + '40x40' + tip.user.photo.suffix} alt='user' />
          </div>
          <div className='user'>{tip.user.firstName} {tip.user.lastName}</div>
          <div className='text'>{tip.text}</div>
        </li>
      )}
      <li>
        <div className='all'>All Tips</div>
      </li>
    </ul>
  </div>

export default TipList
