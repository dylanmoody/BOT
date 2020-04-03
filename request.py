# from requests import Request, Session
import requests

shipping = {
	"checkout_email": "bobob@bob.com",
	"checkout_shipping_address_first_name": "bob",
	"checkout_shipping_address_last_name": "BOBOB",
	"checkout_shipping_address_address1": "68 Road Lane", 
	"checkout_shipping_address_address2": "", 
	"checkout_shipping_address_city": "Troy",
	"checkout_shipping_address_province": "New York",
	"checkout_shipping_address_zip": "12180",
	"checkout_shipping_address_phone": "1234567789", 
}

# with requests.Session() as s:
session = requests.Session()
respG = session.get("https://shopnicekicks.com/cart/10638898049:1")
resp = session.post("https://shopnicekicks.com/cart/10638898049:1", data=shipping)
print(resp.url)