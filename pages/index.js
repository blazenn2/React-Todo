import Head from 'next/head'
import Header from '../components/Header'
import TodoList from '../components/TodoList'
import { useState } from 'react';

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(true);
  return (
    <div className={`${!isLightMode ? 'bg-dark_blue' : null} h-screen`}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="A todo application" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Header mode={isLightMode} changeMode={setIsLightMode} />
      <TodoList mode={isLightMode} />
    </div>
  )
}
