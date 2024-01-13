import { Provite } from "./LoginPages/Provite";
import { Public } from "./LoginPages/Public";
import { useEffect } from "react";
import { useAuth } from "./hook/useAuth";
import './App.css';

function App() {
  // const { token } = useAuth()
  const token = localStorage.getItem("token")

  // useEffect(() => {
  //   window.location.reload()
  // }, [token])

  return (
    <div className="App">
      {
        token ? <Provite /> : <Public />
      }
    </div>
  );
}

export default App;
