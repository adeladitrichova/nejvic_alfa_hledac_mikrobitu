let distance = 0
radio.setGroup(111)
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    let data = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    console.log(data)
    led.plotBarGraph(data, distance)
})
