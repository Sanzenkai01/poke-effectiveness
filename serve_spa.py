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
    def _resolve_safe_file_path(self, request_path):
        parsed = urlparse(request_path)
        relative_path = parsed.path.lstrip('/')
        if not relative_path:
            return os.path.join(ROOT, 'index.html')
        target = os.path.abspath(os.path.join(ROOT, relative_path))
        if os.path.commonpath([ROOT, target]) != ROOT:
            raise ValueError('Path traversal denied')
        return target

    def _write_json_file(self, request_path, data_bytes):
        target = self._resolve_safe_file_path(request_path)
        os.makedirs(os.path.dirname(target), exist_ok=True)
        with open(target, 'wb') as output_file:
            output_file.write(data_bytes)
        return target

    def do_PUT(self):
        try:
            target = self._resolve_safe_file_path(self.path)
            content_length = int(self.headers.get('Content-Length', '0'))
            body = self.rfile.read(content_length) if content_length > 0 else b''
            if not body:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(b'Empty body')
                return
            self._write_json_file(self.path, body)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            self.wfile.write(b'{"ok": true}')
        except ValueError:
            self.send_response(403)
            self.end_headers()
            self.wfile.write(b'Forbidden')
        except Exception as exc:
            self.send_response(500)
            self.end_headers()
            self.wfile.write(f'Write failed: {exc}'.encode('utf-8'))

    def do_POST(self):
        self.do_PUT()
    def guess_type(self, path):
        lower_name = os.path.basename(path).lower()
        if lower_name == 'admin-page_1983liniko@':
            return 'text/html; charset=utf-8'
        return super().guess_type(path)

    def translate_path(self, path):
        # Let the base implementation map URL to filesystem path
        path = urlparse(path).path
        return super().translate_path(path)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

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
    # Allow socket reuse to avoid TIME_WAIT issues
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        print(f"Serving {ROOT} at http://localhost:{PORT} (SPA fallback to /app.html)")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print('\nShutting down')
