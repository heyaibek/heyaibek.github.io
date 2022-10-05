import React from 'react';

export const Profile = () => (
  <>
    <div>
      <h2>
        hi there{' '}
        <span role="img" aria-label=":wave:">
          👋🏻
        </span>
      </h2>
      <p>my name is aibek mazhitov</p>
    </div>
    <ul>
      <li>
        <span role="img" aria-label=":cool:">
          😎
        </span>
        <span>&nbsp;</span>
        <span>i'm a software engineer @ spotify</span>
      </li>
      <li>
        <span role="img" aria-label=":laptop:">
          👨🏻‍💻
        </span>
        <span>&nbsp;</span>
        <span>i'm a creator of chksnd</span>
      </li>
      <li>
        <span role="img" aria-label=":piano:">
          🎹
        </span>
        <span>&nbsp;</span>
        <span>i produce electronic music</span>
      </li>
    </ul>
  </>
);
