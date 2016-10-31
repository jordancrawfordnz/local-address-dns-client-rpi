[View on Docker Hub](https://hub.docker.com/r/jordancrawford/local-address-dns-client-rpi/)

[View on GitHub](https://github.com/jordancrawfordnz/local-address-dns-client-rpi/)

---

# Local Address DNS Client (RPi)

## What is this?
This is a web service (written in NodeJS) that responds with a JSON result containing your devices IP address on a **local** network interface.

This responds in the form:

```
{
	ip : [local ip address]
}
```

This is used by [local-address-dns](https://github.com/jordancrawfordnz/local-address-dns). local-address-dns is run on an internet facing (IP address known) server. You don't always know the IP address your Raspberry Pi will be assigned on your local network (and don't always have access to / can be bother with MAC based DHCP assignments). local-address-dns turns a DNS entry like ``local.pi.example.com`` into your local IP address.

Your Pi must be able to be accessed from the internet facing machine, such as via a VPN connection. local-address-dns-client-rpi runs on your Pi to provide your IP address to local-address-dns. local-address-dns runs a DNS server that responds with the local address of the Pi.

## Determining the interface to use
Fill in interface with the network interface that you would like to get the IP address for (e.g.: ``eth0``). Use ``ifconfig`` to list all your available interfaces.

## Using Docker

### Building
Build with ``docker build -t jordancrawford/local-address-dns-client-rpi .``.

### Running
Run with ``docker run -d -p 3000:3000 --restart always --name local-address-dns-client --net=host jordancrawford/local-address-dns-client-rpi [interface]``

## Using Directly
Ensure NodeJS is installed on your system and run: ``node client [interface]``. The server is available at port 3000.