#! openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes


from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl

# Define server address and port
server_address = ('localhost', 4443)  # Port 4443 is commonly used for testing HTTPS

# Create HTTP server
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)

# Configure SSL (replace 'cert.pem' and 'key.pem' with your certificate files)
httpd.socket = ssl.wrap_socket(
    httpd.socket,
    certfile="cert.pem",  # Path to your SSL certificate
    keyfile="key.pem",    # Path to your private key
    server_side=True
)

print(f"Serving on https://{server_address[0]}:{server_address[1]} ...")
httpd.serve_forever()
