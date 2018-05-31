import json
import paho.mqtt.client as mqtt
import random
import time
import threading
import sys

mqttc = mqtt.Client("leonardo", clean_session=True, userdata=None, transport="tcp")
mqttc.username_pw_set("oubvlxlo", "1qrkhzaMzUoN")
mqttc.connect("iot.eclipse.org", 1883, 60)

def pub():
    mqttc.publish("sensor/temp", payload= str(random.normalvariate(30, 0.5)), qos=0)
    threading.Timer(5, pub).start()

pub()
