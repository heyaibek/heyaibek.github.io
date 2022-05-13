import React from 'react';

export const MyMusic = () => {
  return (
    <div className='my-music'>
      <h2>My Music</h2>
      <div className='soudcloud-tracks'>
        <div className='track'>
          <iframe title="one-way" width="100%" height="300" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1160080870&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
        </div>
      </div>
      <a href='https://soundcloud.com/brakata/tracks' target='_blank' rel='noopener noreferrer'>
        <span>Listen more on</span>
        <span className='logo-soundcloud' />
      </a>
    </div>
  )
}
