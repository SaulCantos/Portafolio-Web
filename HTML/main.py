from fastapi import FastAPI, WebSocket

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket:WebSocket):
    print("Accepting Connection")
    await websocket.accept()
    print("Accept")
    while True:
        try:
            data = await websocket.receive_text()
            print(data)
        except:
            pass
            break