import requests
import json
import random
import time
import threading
import sys

def pub():
    payload = {'command':'publish','usuario': 'leonardo', 'senha': '12345678','topic' : '/sensor/temp','value':str(random.normalvariate(30, 0.5))}
    try:
        r = requests.post("http://localhost/device/post", data = payload)
        print(r.text);
    except ValueError:
        print Valueerror
        
    threading.Timer(2, pub).start()

pub()        
