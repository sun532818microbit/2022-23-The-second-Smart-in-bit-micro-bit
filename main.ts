kittenwifi.on_wifi_connected(function () {
	
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Your ip is")
    basic.showString(kittenwifi.wifi_addr())
})
input.onButtonPressed(Button.B, function () {
    let Marks = 0
    A = "I got" + Marks + "Marks in the game"
    kittenwifi.mqtt_publish_basic("I got a lot of marks!", A)
})
input.onPinPressed(TouchPin.P1, function () {
    kittenwifi.wifi_join("", "")
})
let Your_ip = ""
let A = ""
basic.showString("Welcome!")
kittenwifi.wifi_init_pw(kittenwifi.SerialPorts.PORT1)
basic.showString("Starting game…")
kittenwifi.mqtt_sethost_auth(
"Sever 1",
"node01",
"Player",
"Sever1"
)
basic.showString("Starting game…")
basic.pause(100)
basic.showString("Starting game…")
basic.showString("Done")
basic.forever(function () {
    Your_ip = kittenwifi.wifi_addr()
})
