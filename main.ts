input.onButtonPressed(Button.A, function () {
    basic.showString("Your ip is")
    basic.showString(kittenwifi.wifi_addr())
})
let Your_ip = ""
kittenwifi.wifi_init_pw(kittenwifi.SerialPorts.PORT1)
kittenwifi.mqtt_sethost_auth(
"Sever 1",
"node01",
"Player",
"Sever1"
)
basic.forever(function () {
    Your_ip = kittenwifi.wifi_addr()
})
