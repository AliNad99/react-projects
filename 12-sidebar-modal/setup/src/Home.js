import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {AppContext, useGlobalContext} from "./context.js"


const Home = () => {

  const {isModalOpen, openModal, openSidebar} = useGlobalContext();
  console.log(isModalOpen)

  return (
    <main>
      <div className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </div>
      <button className="btn" onClick={openModal}>show modal</button>
    </main>
  )
}

export default Home
