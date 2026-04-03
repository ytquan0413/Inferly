#!/usr/bin/env python3

from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import threading
import time
import webbrowser


HOST = "127.0.0.1"
PORT = 8000
ROOT = Path(__file__).resolve().parent
URL = f"http://{HOST}:{PORT}/"


class SilentHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        return


def open_browser():
    time.sleep(0.6)
    webbrowser.open(URL)


def main():
    threading.Thread(target=open_browser, daemon=True).start()
    server = ThreadingHTTPServer((HOST, PORT), lambda *args, **kwargs: SilentHandler(*args, directory=str(ROOT), **kwargs))
    print(f"Inferly is running at {URL}")
    print("Press Control-C to stop the server.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping Inferly server...")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
