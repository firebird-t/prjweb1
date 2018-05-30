import paho.mqtt.client as mqtt #import the client1

broker_address="localhost" 
#broker_address="iot.eclipse.org"

print("creating new instance")
client = mqtt.Client("P1") #create new instance

print("connecting to broker")
client.connect(broker_address) #connect to broker

print("Subscribing to topic","/sensor/temp")
client.subscribe("/sensor/temp")

print("Publishing message to topic","/sensor/temp")
client.publish("/sensor/temp","OFF")
