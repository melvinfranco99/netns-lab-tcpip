# netns·lab — Aprende TCP/IP capa a capa con `ip netns`

Laboratorio web para aprender el modelo TCP/IP construyendo redes virtuales en tu propio Linux (pensado para Arch Linux) con network namespaces. Solo se usan comandos básicos, uno a uno, sin scripts.

**Web:** https://melvinfranco99.github.io/netns-lab-tcpip/

## Contenido

- **Capa 2 (enlace):** veth, MAC, tramas Ethernet hechas a mano con scapy, ARP y tabla de vecinos, ping construido pieza a pieza en emisor y receptor, switch (bridge) y FDB, VLAN y trunks, MTU y STP.
- **Capa 3 (red):** IP y rutas, router entre dos redes, routers en cadena, routers en malla con rutas de respaldo y OSPF (BIRD), ICMP y traceroute a mano, fragmentación, DHCP/DNS/web con dnsmasq, NAT, cortafuegos con iptables y nftables, nmap y tcpdump, VPN WireGuard, red de relevos tipo onion, IPv6, enrutamiento por políticas.
- **Capa 4 (transporte):** puertos, UDP, TCP, handshake SYN/SYN-ACK/ACK escrito a mano, estados, conntrack, pérdidas y retardos con `tc netem`.
- **Capas 5-7:** HTTP a mano (cliente y servidor), cookies y keep-alive, codificación frente a cifrado, TLS con certificados propios, DNS por dentro, SSH y túneles.
- **Permisos e identidad:** root y capabilities, sudoers con mínimo privilegio, cortafuegos por usuario, SSH con claves y AllowGroups, directorio LDAP tipo Active Directory (OpenLDAP) y Samba AD opcional.
- **Chuleta y limpieza.**

## Uso local

Es HTML estático: abre `index.html` en el navegador.
