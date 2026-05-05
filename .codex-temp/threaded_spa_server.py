#!/usr/bin/env python3
import http.server
import os
import sys
from urllib.parse import urlparse


PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8001
ROOT = os.getcwd()


class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        return super().translate_path(urlparse(path).path)

    def do_GET(self):
        url_path = urlparse(self.path).path
        fs_path = self.translate_path(url_path)

        if os.path.exists(fs_path) and not os.path.isdir(fs_path):
            return super().do_GET()

        if os.path.isdir(fs_path):
            self.path = url_path.rstrip("/") + "/index.html"
            return super().do_GET()

        self.path = "/app.html"
        return super().do_GET()


if __name__ == "__main__":
    os.chdir(ROOT)
    server = http.server.ThreadingHTTPServer(("127.0.0.1", PORT), SPAHandler)
    print(f"Serving {ROOT} at http://127.0.0.1:{PORT} (SPA fallback to /app.html)")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
