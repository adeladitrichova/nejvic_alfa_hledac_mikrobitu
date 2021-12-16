distance = 0
rez = -10
radio.set_group(111)
def on_received_number(receivedNumber):
    dist_rez = distance + rez
    data = radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH)
    console.log(data)
    led.plot_bar_graph(data, dist_rez)
radio.on_received_number(on_received_number)