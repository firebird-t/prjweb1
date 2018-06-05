import websocket
import json
import pprint
from StringIO import StringIO

try:
    import thread
except ImportError:
    import _thread as thread
import time

def on_message(ws, message):
    try:
        json_object = json.loads(message)
    except ValueError, e:
        print ValueError
    else:
        print json_object['msg']
    
    
def on_error(ws, error):
    print(error)

def on_close(ws):
    print("### closed ###")

def on_open(ws):
    def run(*args):
        #Enviar dados do cliente e autenticar
        ws.send(json.dumps({'command':'subscribe'}))
        # for i in range(3):
        #     time.sleep(1)
        #     #ws.send("Hello %d" % i)
        #     ws.send(json.dumps({'msg': 'connect', 'version': '1', 'support': ['1', 'pre2', 'pre1']}))
        # time.sleep(1)
        # ws.close()
        # print("thread terminating...")

    thread.start_new_thread(run, ())


if __name__ == "__main__":
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp("ws://localhost/ws",
                              on_message = on_message,
                              on_error = on_error,
                              on_close = on_close)
    ws.on_open = on_open
    ws.run_forever()
