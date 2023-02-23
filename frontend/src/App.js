import Button from "./components/Button";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios"


function App() {

  const [photos,setPhotos] = useState([])
  const [updateUi,setUpdateUi] = useState("")

  useEffect(() => {
    axios.get(("http://localhost:5000/api/get"))
    .then((res) => {
      console.log(res)
      setPhotos(res.data)

    })
    .catch((err) => console.log(err))
  },[updateUi])
  return (
    <div className="App">

    <Navbar/>
    <Grid photos={photos}/>
    <Button setUpdateUi={setUpdateUi}/>
    </div>
  );
}

export default App;
