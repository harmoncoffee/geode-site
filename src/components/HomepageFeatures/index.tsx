/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '👥 Replication and Partitioning',
    description: (
      <>
          Data can easily be partitioned (sharded) or replicated between nodes allowing performance to scale as needed. Durability is ensured through redundant in-memory copies and disk-based persistence.
      </>
    ),
  },
  {
    title: '🧊 Persistence',
    description: (
      <>
          Super fast write-ahead-logging (WAL) persistence with a shared-nothing architecture that is optimized for fast parallel recovery of nodes or an entire cluster.
      </>
    ),
  },
  {
    title: '🚀 Performance',
    description: (
      <>
          Linear-scaling low latency for transactions, reads,
          writes and query processing of indexed or unindexed data.
      </>
    ),
  },
    {
        title: '🧠 In-Memory Storage',
        description: (
            <>
                Blazing fast in-memory storage optimized for large heaps, with the option of using off-heap storage, compression and features such as disk-overflow, eviction and expiration of data.
            </>
        ),
    },
    {
        title: '⚙️ Functions',
        description: (
            <>
                Distributed location-aware user functions can be deployed and executed by the same nodes storing relevant sharded data for fast parallel processing. Failed operations can be retried on replicant nodes.
            </>
        ),
    },
    {
        title: '🔀 Transactions',
        description: (
            <>
                ACID distributed transactions support efficient and safe coordinated operations on colocated data. Transactions can be initiated or suspended by either a client or a server.
            </>
        ),
    },
    {
        title: '🗂️ OQL and Indexes',
        description: (
            <>
                Object Query Language allows distributed query execution on hot and cold data, with SQL-like capabilities, including joins. Multiple kinds of indexes can be defined and consistently maintained across the cluster.
            </>
        ),
    },
    {
        title: '💡 Events',
        description: (
            <>
                Clients can be notified about server-side data events, and servers can react synchronously or asynchronously with guaranteed delivery of ordered events.
            </>
        ),
    },
    {
        title: '🫧 Clustering',
        description: (
            <>
                Highly scalable, robust advanced clustering technology with failure detection, dynamic scaling, and network-partition detection algorithms.
            </>
        ),
    },
    {
        title: '🎡 Multi-Cluster',
        description: (
            <>
                Geode clusters can be replicated over WAN in various topologies: active-active, active-passive, ring, hub-spoke, star, etc.
            </>
        ),
    },
    {
        title: '🔎 Continuous Query',
        description: (
            <>
                Clients can stay up to date by registering OQL queries with the Geode servers,
                making event-driven applications possible.
            </>
        ),
    },
    {
        title: '⌨️ Clients',
        description: (
            <>
                Clients are available for Java, C++, and C# .NET Framework. A REST API is available for all other languages.
            </>
        ),
    },
    {
        title: '🔌 Adapters',
        description: (
            <>
                Geode can be used as a drop-in replacement for memcached,
                allowing use of Geode's server-side features like multi-cluster replication.
            </>
        ),
    },
];

function Feature({ title, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--left padding-horiz--md">
                <Heading as="h3" className={styles.featuresHeading}>{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

function TopAboutSection() {
    return (
        <div className={styles.aboutSection}>
            <div className="container">
                <div className={styles.aboutContent}>
                    <p className={styles.aboutTagline}> Apache Geode™ is a data management platform that provides real-time, consistent access to data-intensive applications throughout widely distributed cloud architectures.</p>
										<div className={styles.aboutButtons}>
												<a className={clsx('button button--lg', styles.primaryButton)} href="https://github.com/apache/geode/releases">Download Geode</a>
												<a className={clsx('button button--lg', styles.secondaryButton)} href="https://cwiki.apache.org/confluence/display/geode/">Learn more</a>
										</div>
                </div>
            </div>
        </div>
    );
}

function BottomAboutSection() {
    return (
        <div className={styles.aboutSection}>
            <div className="container">
							<div className={styles.aboutContent}>
										<Heading as="h2" className={styles.aboutHeading}>FAQs</Heading>
										<Heading as="h3" className={styles.aboutHeading}>What is Geode?</Heading>
                    <p className={styles.aboutDescription}>
                  		Apache Geode™ is an in-memory distributed database designed to provide high performance, low latency, extreme scale-out concurrency and consistency for data storage. Unlike traditional relational databases with scaling limitations, Geode scales out horizontally across many nodes to provide low latency response for thousands of concurrent read and write operations on terabytes of data in memory. And unlike many in-memory data grids, Geode can maintain a high degree of data consistency across many concurrent transactions and can operate as a highly available, resilient service. This makes possible the deployment mission-critical applications at very high scale.
										</p>
										<Heading as="h3" className={styles.aboutHeading}>Why should I use Geode?</Heading>
	                  <p className={styles.aboutDescription}>
											Application developers and IT architects who need extremely fast processing and consistent data using open source software often run into trouble. When their applications are required to support thousands of concurrent transactions that access hundreds of gigabytes of operational data, they start having performance problems, or problems with the integrity of data. Geode helps solve these problems.
										</p>
										<Heading as="h3" className={styles.aboutHeading}>Who uses Geode?</Heading>
                    <p className={styles.aboutDescription}>
                      Apache Geode™ is a mature, robust technology originally developed by GemStone Systems. Commercially available as GemFire™, it was first deployed in the financial sector as the transactional, low-latency data engine used in Wall Street trading platforms. Today, hundreds of enterprise customers use Geode technology for high-scale business applications that must meet low latency and 24x7 availability requirements.
										</p>
										<a className={clsx('button button--md', styles.primaryButton)} href="https://cwiki.apache.org/confluence/display/GEODE/FAQ">Read more</a>
                </div>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.homepageMain}>
            <TopAboutSection />

            <div className={styles.featuresSection}>
                <div className="container">
									<Heading as="h2" className={styles.featuresTitle}>Key features</Heading>		
											<div className="row">
		                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </div>

            <BottomAboutSection />
        </section>
    );
}
