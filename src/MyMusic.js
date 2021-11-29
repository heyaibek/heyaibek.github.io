import React from 'react';

export const MyMusic = () => {
  return (
    <div className='my-music'>
      <h2>My Music</h2>
      <div className='soudcloud-tracks'>
        <div className='track'>
          <iframe title="music-4" width="100%" height="300" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1160080870&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
        </div>
        <div className='track'>
          <iframe title="music-3" width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1314662467&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
        </div>
        <div className='track'>
          <iframe title="music-2" width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1314662230&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
        </div>
        <div className='track'>
          <iframe title="music-1" width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1314661984&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
        </div>
      </div>
    </div>
  )
}
