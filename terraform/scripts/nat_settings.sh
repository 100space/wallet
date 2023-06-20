#!/usr/bin/env bash

sed -i "s|#net.ipv4.ip_forward=1|net.ipv4.ip_forward=1|g" /etc/sysctl.conf
sysctl --system

iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
iptables-save