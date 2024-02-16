# install dependeces

```npm install```

# install k6

<https://k6.io/docs/get-started/installation/>

# remove limits Linux

```
sysctl -w net.ipv4.ip_local_port_range="1024 65535"
sysctl -w net.ipv4.tcp_tw_reuse=1
sysctl -w net.ipv4.tcp_timestamps=1
ulimit -n 250000
```

# executing test

```npm run start-10k```

or

```npm run start-1k```

or

```npm run start-500```

or

```npm run start-100```
