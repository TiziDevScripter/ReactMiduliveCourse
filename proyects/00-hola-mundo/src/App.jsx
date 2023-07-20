import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { FollowButtonComponent } from './FollowButtonComponent'

function App() {
  const addAt = (userName) => `@${userName}`;
  let users = [
    {
      name: "Tiziano Montenegro",
      userName: 'tizielpro2',
      initialIsFollowing: false
    },{
      name: "Santino Montenegro",
      userName: 'santimonte7711',
      initialIsFollowing: true
    }
  ]
  return (
    <div className='app'>
      <article className='follow-section'>
        <span className='follow-section__title'>Follow People</span>
        {
          users.map(({userName, name, initialIsFollowing}) => 
             (
              <FollowButtonComponent 
              key={userName}
              addAt={addAt} 
              userName={userName}
              initialIsFollowing={initialIsFollowing}
              >{name}</FollowButtonComponent>
            )
          )
        }
        {/* <FollowButtonComponent 
          addAt={addAt} 
          userName='tizielpro2'
        >Tiziano Montenegro</FollowButtonComponent>
        <FollowButtonComponent 
          addAt={addAt} 
          userName='santimonte7711'
          initialIsFollowing
        >Santino Montenegro</FollowButtonComponent> */}

      </article>
    </div>
  )
}

export default App
