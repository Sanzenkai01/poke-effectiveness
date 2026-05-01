#!/usr/bin/env python3
"""
Simple static file server with SPA fallback to /app.html.
Run from repo root: python serve_spa.py [port]
"""
import http.server
import socketserver
import sys
import os
from urllib.parse import urlparse

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8001
ROOT = os.getcwd()

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Let the base implementation map URL to filesystem path
        path = urlparse(path).path
        return super().translate_path(path)

    def do_GET(self):
        url_path = urlparse(self.path).path
        fs_path = self.translate_path(url_path)

        # If requested file exists, serve normally
        if os.path.exists(fs_path) and not os.path.isdir(fs_path):
            return super().do_GET()

        # If it's a directory with index.html, serve that
        if os.path.isdir(fs_path):
            index_rel = url_path.rstrip('/') + '/index.html'
            self.path = index_rel
            return super().do_GET()

        # Fallback to app.html (SPA shell)
        self.path = '/app.html'
        return super().do_GET()

if __name__ == '__main__':
    os.chdir(ROOT)
    handler = SPAHandler
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        print(f"Serving {ROOT} at http://localhost:{PORT} (SPA fallback to /app.html)")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print('\nShutting down')
