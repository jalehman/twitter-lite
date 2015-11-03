# twitter-lite

## Setup

You'll want to serve this project via a local webserver -- the application will
use jQuery's ajax function for fetching a local json file (to simulate an
eventual API request), and we'll eventually plug in an actual one (probably). An
easy option is `python SimpleHTTPServer`. Clone this repo, `cd` into the
directory, and type the following at the command line:

```shell
python -m SimpleHTTPServer 8000
```

This will serve the files in this directory at `http://localhost:8000` (looks
for `index.html` by default).

See this
[blog post](http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/)
for more info about using `SimpleHTTPServer`.
