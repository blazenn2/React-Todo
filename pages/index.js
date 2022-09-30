import Head from 'next/head'
import Header from '../components/Header'
import TodoList from '../components/TodoList'
import Profile from '../components/profile'
import Setting from '../components/settings'
import { useEffect, useState } from 'react';
import { useNodeContext } from '../context/nodes/NodeContext'
import Router from 'next/router'
import axios from 'axios'

export default function Home() {
  const ctx = useNodeContext();
  useEffect(() => {
    if (ctx.auth !== true) Router.push("/login")
    axios.get()
  }, [])
  const [isLightMode, setIsLightMode] = useState(true);
  const [showCredentials, setShowCredentials] = useState(false);
  const [isLoading, setIsLoading] = useState(null);

  return (
    <div className={`${!isLightMode ? 'bg-dark_blue' : null} h-screen relative`}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="A todo application" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      {ctx.auth ? (<><Profile setCredentials={setShowCredentials} mode={isLightMode} user={ctx.name} />
        <Header mode={isLightMode} changeMode={setIsLightMode} />
        <TodoList mode={isLightMode} />
        {showCredentials ? (<Setting setCredentials={setShowCredentials} mode={isLightMode} />) : null}</>) : null}

    </div>
  )
}
