import paho.mqtt.client as mqtt #import the client1

broker_address="m13.cloudmqtt.com" 
#broker_address="iot.eclipse.org"

print("creating new instance")
client = mqtt.Client("Leonardo - Sub") #create new instance
client.username_pw_set("oubvlxlo", "1qrkhzaMzUoN")

print("connecting to broker")
client.connect(broker_address) #connect to broker

print("Subscribing to topic","sensor/temp")
client.subscribe("sensor/temp")

