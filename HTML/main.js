import { useEffect } from "react";

function App(){
    ws = null;
    useEffect(() =>{
        ws = new WebSocket("ws://localhost:8000/ws");
        ws.onopen = () => ws.send("Connected to React");
        ws.onmessage = (e) => {
            console.log("Mensaje Aceptado", e);
        }
    })
    return <div className = "App">Hello World</div>
}

export default App;