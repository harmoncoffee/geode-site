---
title:  gfsh Command Help
---

<!--
Licensed to the Apache Software Foundation (ASF) under one or more
contributor license agreements.  See the NOTICE file distributed with
this work for additional information regarding copyright ownership.
The ASF licenses this file to You under the Apache License, Version 2.0
(the "License"); you may not use this file except in compliance with
the License.  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

This section provides help and usage information on all `gfsh` commands, listed alphabetically.

-   **[alter](../gfsh/command-pages/alter.html)**

    Modify an existing  resource.

-   **[backup disk-store](../gfsh/command-pages/backup.html)**

    Back up persistent data from all members to the specified directory.

-   **[change loglevel](../gfsh/command-pages/change.html)**

    Changes the logging level on specified members.

-   **[clear defined indexes](../gfsh/command-pages/clear.html)**

    Clears all the defined indexes.

-   **[close](../gfsh/command-pages/close.html)**

    Close durable client CQs and durable clients.

-   **[compact](../gfsh/command-pages/compact.html)**

    Compact online and offline disk-stores.

-   **[configure](../gfsh/command-pages/configure.html)**

    Configure Portable Data eXchange for all the cache(s) in the cluster.

-   **[connect](../gfsh/command-pages/connect.html)**

    Connect to a jmx-manager either directly or via a locator.

-   **[create](../gfsh/command-pages/create.html)**

    Create async-event-queues, disk-stores, gateway receivers, gateway senders, indexes, and regions.

-   **[debug](../gfsh/command-pages/debug.html)**

    Enable or disable debugging output in `gfsh`.

-   **[define index](../gfsh/command-pages/define.html)**

    Define an index that can be used when executing queries. Then, you can execute a single command to create multiple indexes all at once using `create defined          indexes`.

-   **[deploy](../gfsh/command-pages/deploy.html)**

    Deploy JAR-packaged applications to a member or members.

-   **[describe](../gfsh/command-pages/describe.html)**

    Display details of a member's configuration, shell connection, disk-stores, members, or regions.

-   **[destroy](../gfsh/command-pages/destroy.html)**

    Delete or unregister functions, remove indexes, gateway senders, gateway receivers, disk stores and regions.

-   **[disconnect](../gfsh/command-pages/disconnect.html)**

    Close any active connection(s).

-   **[echo](../gfsh/command-pages/echo.html)**

    Echo the given text, which may include system and user variables.

-   **[execute function](../gfsh/command-pages/execute.html)**

    Execute functions on members or regions.

-   **[exit](../gfsh/command-pages/exit.html)**

    Exit the `gfsh` shell. You can also use `quit` to exit the shell.

-   **[export](../gfsh/command-pages/export.html)**

    Export configurations, data, logs and stack-traces.

-   **[gc](../gfsh/command-pages/gc.html)**

    Force GC (Garbage Collection) on a member or members.

-   **[get](../gfsh/command-pages/get.html)**

    Display an entry in a region.

-   **[help](../gfsh/command-pages/help.html)**

    Display syntax and usage information for all the available commands.

-   **[hint](../gfsh/command-pages/hint.html)**

    Display information on topics and a list of commands associated with a topic.

-   **[history](../gfsh/command-pages/history.html)**

    Show or save the command history.

-   **[import](../gfsh/command-pages/import.html)**

    You can import data into a region or import an existing cluster configuration into the cluster.

-   **[list](../gfsh/command-pages/list.html)**

    List existing  resources such as deployed applications, disk-stores, functions, members, servers, and regions.

-   **[load-balance gateway-sender](../gfsh/command-pages/load-balance.html)**

    Causes the specified gateway sender to close its current connections and reconnect to remote gateway receivers in a more balanced fashion.

-   **[locate entry](../gfsh/command-pages/locate.html)**

    Locate a region entry on a member.

-   **[netstat](../gfsh/command-pages/netstat.html)**

    Report network information and statistics via the "netstat" operating system command.

-   **[pause gateway-sender](../gfsh/command-pages/pause.html)**

    Pause a gateway sender.

-   **[pdx rename](../gfsh/command-pages/pdx.html)**

    Renames PDX types in an offline disk store.

-   **[put](../gfsh/command-pages/put.html)**

    Add or update a region entry.

-   **[query](../gfsh/command-pages/query.html)**

    Run queries against  regions.

-   **[rebalance](../gfsh/command-pages/rebalance.html)**

    Rebalance partitioned regions.

-   **[remove](../gfsh/command-pages/remove.html)**

    Remove an entry from a region.

-   **[restore redundancy](../gfsh/command-pages/restore.html)**

    Restore redundancy to partitioned regions and optionally reassign which members host the primary copies.

-   **[resume gateway-sender](../gfsh/command-pages/resume.html)**

    Resume any gateway senders that you have paused.

-   **[revoke missing-disk-store](../gfsh/command-pages/revoke.html)**

    Instruct the member(s) of a cluster to stop waiting for a disk store to be available.

-   **[run](../gfsh/command-pages/run.html)**

    Execute a set of GFSH commands.

-   **[set variable](../gfsh/command-pages/set.html)**

    Set variables in the GFSH environment.

-   **[sh](../gfsh/command-pages/sh.html)**

    Execute operating system commands.

-   **[show](../gfsh/command-pages/show.html)**

    Display deadlocks, logs, metrics and missing disk-stores.

-   **[shutdown](../gfsh/command-pages/shutdown.html)**

    Stop all members.

-   **[sleep](../gfsh/command-pages/sleep.html)**

    Delay `gfsh` command execution.

-   **[start](../gfsh/command-pages/start.html)**

    Start servers, locators, gateway senders and gateway receivers, and monitoring tools.

-   **[status](../gfsh/command-pages/status.html)**

    Check the status of the cluster configuration service, partitioned region redundancy and  member processes, including locators, gateway receivers, gateway senders, and servers.

-   **[stop](../gfsh/command-pages/stop.html)**

    Stop gateway receivers, gateway senders, locators and servers.

-   **[undeploy](../gfsh/command-pages/undeploy.html)**

    Undeploy the JAR files that were deployed on members or groups using `deploy` command.

-   **[validate offline-disk-store](../gfsh/command-pages/validate.html)**

    Validate offline disk stores.

-   **[version](../gfsh/command-pages/version.html)**

    Display product version information.

-   **[wan-copy region](../gfsh/command-pages/wan_copy_region.html)**

    Copy the data of a region from a WAN site to the same region on another WAN site by using a gateway sender.


