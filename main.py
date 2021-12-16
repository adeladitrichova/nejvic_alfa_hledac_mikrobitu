distance = 0
radio.set_group(111)
def on_received_number(receivedNumber):
    data = radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH)
    console.log(data)
    led.plot_bar_graph(data, distance)
radio.on_received_number(on_received_number)