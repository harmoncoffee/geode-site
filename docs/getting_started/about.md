---
sidebar_label: About Apache Geode
sidebar_position: 1
---
# About Apache Geode
Apache Geode is a data management platform that provides real-time, consistent access to data-intensive applications throughout widely distributed cloud architectures.

Geode pools memory, CPU, network resources, and optionally local disk across multiple processes to manage application objects and behavior. It uses dynamic replication and data partitioning techniques to implement high availability, improved performance, scalability, and fault tolerance. In addition to being a distributed data container, Geode is an in-memory data management system that provides reliable asynchronous event notifications and guaranteed message delivery.

Main Concepts and Components
Caches are an abstraction that describe a node in a Geode cluster. Application architects can arrange these nodes in peer-to-peer or client/server topologies.

Within each cache, you define data regions. Data regions are analogous to tables in a relational database and manage data in a distributed fashion as name/value pairs. A replicated region stores identical copies of the data on each cache member of a cluster. A partitioned region spreads the data among cache members. After the system is configured, client applications can access the distributed data in regions without knowledge of the underlying system architecture. You can define listeners to create notifications about when data has changed, and you can define expiration criteria to delete obsolete data in a region.

For large production systems, Geode provides locators. Locators provide both discovery and load balancing services. You configure clients with a list of locator services and the locators maintain a dynamic list of member servers. By default, Geode clients and servers use port 40404 to discover each other.

[//]: # (TODO: @harmoncoffee )
For more information on product features, see Main Features of Apache Geode.