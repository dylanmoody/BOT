import mechanicalsoup
import sys


name = sys.argv[1]

# create stateful browser
brow = mechanicalsoup.StatefulBrowser()

shipping_ids = ["checkout_email" ,"checkout_shipping_address_first_name", "checkout_shipping_address_last_name", "checkout_shipping_address_address1", "checkout_shipping_address_address2",
									"checkout_shipping_address_city", "checkout_shipping_address_province", "checkout_shipping_address_zip", "checkout_shipping_address_phone" ]


shipping_values = ["bobob@bob.com","bob", "BOBOB", "68 Road Lane", "", "Troy", "New York", "12180", "1234567789"]




#set proxy/proxies
proxies={'http': 'my proxy',}
brow.session.proxies = proxies

# use brow to open link
brow.open("https://shopnicekicks.com/cart/10638898049:1")
# check url
print(brow.get_url())
# select form
brow.select_form(nr=0)

for i in range(len(shipping_ids)):
	brow.get_current_form().form.select('input[id="'+ shipping_ids[i] +'"]')[0]['value'] = shipping_values[i]



# submit form (shipping information page)
brow.submit_selected()
# check url
print(brow.get_url())

# navigate to checkout page
brow.select_form(nr=0)
brow.submit_selected()
print(brow.get_url())


brow.select_form(nr=2)
# brow.get_current_form().print_summary()

print("Used default shipping information for",name,"to arrive at the checkout link.")


sys.stdout.flush()
