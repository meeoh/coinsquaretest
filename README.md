# Coinsquare Trading Test

The project can be seen running on http://meeohcoinsquare.surge.sh/ (already using github pages for my personal site).

The front-end is done in react and the UI is just basic use of CSS3's grid. State management is done via redux to show a loading spinner (pure css spinner) while the `last_price` is fetched from bitfinex at https://api.bitfinex.com/v1/pubticker/btcusd. 

Both user and api errors are displayed in red (can test by entering a negative number or number larger then the current usd balance). 

Lastly, since its deployed on a static page, it was simpler to keep everything in the index.html file (since the babel transpiler is included there).
