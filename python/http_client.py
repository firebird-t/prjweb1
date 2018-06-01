import requests
import json
import random
import time
import threading
import sys

def pub():
    payload = {'command':'publish','nome_usuario': 'leonardo', 'senha': '12345678','topic' : "sensor/temp",'message':str(random.normalvariate(50, 35))}
    try:
        r = requests.post("http://localhost/device/post", data = payload)
    except ValueError:
        print Valueerror
        
    threading.Timer(10, pub).start()

pub()        
