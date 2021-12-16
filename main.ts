let distance = 0
let rez = -10
radio.setGroup(111)
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    let dist_rez = distance + rez
    let data = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    console.log(data)
    led.plotBarGraph(data, dist_rez)
})
