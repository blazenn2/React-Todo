import Head from 'next/head'
import Header from '../components/Header'
import TodoList from '../components/TodoList'
import Profile from '../components/profile'
import Setting from '../components/settings'
import { useState } from 'react';

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [showCredentials, setShowCredentials] = useState(true);

  return (
    <div className={`${!isLightMode ? 'bg-dark_blue' : null} h-screen relative`}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="A todo application" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Profile />
      <Header mode={isLightMode} changeMode={setIsLightMode} />
      <TodoList mode={isLightMode} />
      {showCredentials ? (<Setting />) : null}
    </div>
  )
}
