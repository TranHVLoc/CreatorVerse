import { useState } from 'react'
import { useRoutes } from "react-router-dom";

import ShowCreators from './pages/ShowCreators';
import EditCreator from './pages/EditCreator';

import './App.css'
import AddCreator from './pages/AddCreator';

function App() {

  const [creator, setCreator] = useState({
    name: "",
    instagram_url: "",
    twitter_url: "",
    youtube_url: "",
    image_url: "",
    description: "",
  })

  let element = useRoutes([
    {
      path: "/",
      element: <ShowCreators creator = {creator} setCreator = {setCreator} />
    },
    {
      path: "/edit/:id",
      element: <EditCreator creator = {creator} setCreator = {setCreator} />
    },
    {
      path: "/create",
      element: <AddCreator creator = {creator} setCreator = {setCreator} />
    },
  ])

  return (
    <>
      {element}
    </>
  )
}

export default App
