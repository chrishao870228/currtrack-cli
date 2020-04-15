A CLI tool that can give the current currency rate and also send email notofications if the price drop to certain amount.


Develop based on Brad Traversy's coindex-cli

FIXME:
1. Current currency rate API doesnn't need a key, so the key ccommand is not utilized. It could be used for reconizeing some other API key
2. The current check price command can only output only one rate, which is CNY. It should be able to output as many currency as the user wants.

TODO:
1. rate drop notification (SMS or EMAIL)
2. trends over 1 day, 7 day, 30 day
3. This tool can also be used for tracking stocks
