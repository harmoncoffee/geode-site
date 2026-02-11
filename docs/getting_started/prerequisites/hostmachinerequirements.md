---
sidebar_label: Host Machine Requirements
sidebar_position: 1
---
# Host Machine Requirements

Host machines must meet a set of requirements for Apache Geode.

Each machine that will run Apache Geode must meet the following requirements:

- Java SE Development Kit 8 with update 121 or a more recent version 8 update. The same versions are supported with OpenJDK.
- A system clock set to the correct time and a time synchronization service such as Network Time Protocol (NTP). Correct time stamps permit the following activities:
  - Logs that are useful for troubleshooting. Synchronized time stamps ensure that log messages from different hosts can be merged to reproduce an accurate chronological history of a distributed run.
  - Aggregate product-level and application-level time statistics.
  - Accurate monitoring of the Geode system with scripts and other tools that read the system statistics and log files.
- The host name and host files are properly configured for the machine. The host name and host file configuration can affect gfsh and Pulse functionality.
- Disable TCP SYN cookies. Most default Linux installations use SYN cookies to protect the system against malicious attacks that flood TCP SYN packets, but this feature is not compatible with stable and busy Geode clusters. Security implementations should instead seek to prevent attacks by placing Geode server clusters behind advanced firewall protection.

To disable SYN cookies permanently:

1. Edit the /etc/sysctl.conf file to include the following line:

    ```net.ipv4.tcp_syncookies = 0```
2. Setting this value to zero disables SYN cookies.

Reload ```sysctl.conf```:

```bash 
sysctl -p
```

[//]: # (TODO - Add link to docs)
See Disabling TCP SYN Cookies for details.