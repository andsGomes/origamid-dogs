import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { UserHeader } from './UserHeader';
import { Feed } from '../Feed/Feeds';
import { UserPhotoPost } from './UserPhotoPost';
import { UserStats } from './UserStats';
import  { UserContext } from '../../UserContext';
import { NotFound } from '../NotFound';

export const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </section>
  );
};