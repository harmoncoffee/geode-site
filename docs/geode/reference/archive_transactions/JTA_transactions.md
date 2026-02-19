

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


The Java Transaction API, JTA, is a standard Java interface you can use to coordinate
 transactions and JDBC transactions globally under one umbrella. 

You can use JTA global transactions to coordinate  transactions and JDBC transactions.

JTA provides direct coordination between the  cache and another transactional
resource, such as a database. The parties involved in a JTA transaction include:

-   The Java application, responsible for starting the global transaction
-   The JTA transaction manager, responsible for opening, committing, and rolling back transactions
- The transaction resource managers, including the  transaction manager
and the JDBC resource manager, responsible for managing operations in the  cache and database, respectively

Using JTA, your application controls all transactions in the same standard way, whether the
transactions act on the  cache, a JDBC resource, or both together. When a JTA
global transaction is finished, the  transaction and the database transaction are
both complete.

When using JTA global transactions with , you have two options:

-  Coordinate with an external JTA transaction manager in a container (such as WebLogic or JBoss)
-  Set  as the â€œlast resourceâ€ while using a container (such as WebLogic or JBoss) as the JTA transaction manager

An application creates a global transaction by using `javax.transaction.UserTransaction` bound to
the JNDI context `java:/UserTransaction` to start and terminate transactions. During the
transaction, cache operations are done through  as usual.

**Note:**
See the Java documentation for more information on topics such as JTA, `javax.transaction`, committing and rolling back global transactions, and the related exceptions.

-   **[Coordinating with External JTA Transactions Managers](#concept_cp1_zx1_wk)**

     can work with the JTA transaction managers of several containers like JBoss, WebLogic, GlassFish, and so on.

-   **[Using  as the "Last Resource" in a Container-Managed JTA Transaction](#concept_csy_vfb_wk)**

    The "last resource" feature in certain third party containers such as WebLogic allow the use one non-XAResource (such as ) in a transaction with multiple XAResources while ensuring consistency.

-   **[Behavior of  Cache Writers and Loaders Under JTA](cache_plugins_with_jta.html)**

    When  participates in a global transactions, you can still have  cache writers and cache loaders operating in the usual way.

-   **[Turning Off JTA Transactions](turning_off_jta.html)**

    You can configure regions to not participate in any JTA global transaction.

<a id="concept_cp1_zx1_wk"></a>

# Coordinating with External JTA Transaction Managers

 can work with the JTA transaction managers of several containers such as JBoss, WebLogic, GlassFish, and so on.

At startup  looks for a TransactionManager
(`javax.transaction.TransactionManager`) that has been bound to its JNDI context. When
 finds such an external transaction manager, all  region
operations (such as get and put) will participate in global transactions hosted by this external JTA
transaction manager.

This figure shows the high-level operation of a JTA global transaction whose resources include a  cache and a database.

<img src="../../images/transactions_jta_app_server.png" id="concept_cp1_zx1_wk__image_C2935E48415349659FC39BF5C7E75579" class="image" />

An externally coordinated JTA global transaction is run in the following manner:

1.  Each region operation looks up for presence of a global transaction. If one is detected, then a  transaction is started automatically, and we register a `javax.transaction.Synchronization` callback with the external JTA transaction manager.
2.  At transaction commit,  gets a `beforeCommit()` callback from the external JTA transaction manager.  does all locking and conflict detection at this time. If this fails, an exception is thrown back to JTA transaction manager, which then cancels the transaction.
3.  After a successful `beforeCommit()`callback, JTA transaction manager asks other data sources to commit their transaction.
4.   then gets a `afterCommit()` callback in which changes are applied to the cache and distributed to other members.

You can disable JTA in any region that should not participate in JTA transactions. See [Turning Off JTA Transactions](turning_off_jta.html#concept_nw2_5gs_xk).

## <a id="task_j3g_3mn_1l" class="no-quick-link"></a>How to Run a JTA Transaction Coordinated by an External Transaction Manager

Use the following procedure to run a  global JTA transaction coordinated by an external JTA transaction manager.

1.  **Configure the external data sources in the external container.** Do not configure the data sources in cache.xml . They are not guaranteed to get bound to the JNDI tree.
2.  

    Configure  for any necessary transactional behavior in the `cache.xml` file. For example, enable `copy-on-read` and specify a transaction listener, as needed. See [Copy on Read Behavior](../../basic_config/data_entries_custom_classes/copy_on_read.html).
3.  

    Make sure that JTA transactions are enabled for the regions that will participate in the transaction. See [Turning Off JTA Transactions](turning_off_jta.html#concept_nw2_5gs_xk) for details. 
4.  

     Start the transaction through the external container. 
5.  

    Initialize the  cache.  will automatically join the transaction. 
6.  

     Execute operations in the cache and the database as usual. 
7.  

     Commit the transaction through the external container. 

<a id="concept_csy_vfb_wk"></a>

# Using  as the "Last Resource" in a Container-Managed JTA Transaction

The "last resource" feature in certain third party containers such as WebLogic allow the use of one
non-XAResource (such as ) in a transaction with multiple XAResources while
ensuring consistency.

In the previous two JTA transaction use cases, if the  member fails after the
other data sources commit but before  receives the `afterCommit` callback,
 and the other data sources may become inconsistent. To prevent this from
occurring, you can use the container's "last resource optimization" feature, with
 set as the "last resource". Using  as the last resource
ensures that in the event of failure,  remains consistent with the other
XAResources involved in the transaction.

To accomplish this, the application server container must use a JCA Resource Adapter to accomodate
 as the transaction's last resource. The transaction manager of the container
first issues a "prepare" message to the participating XAResources. If the XAResources all accept the
transaction, then the manager issues a "commit" instruction to the non-XAResource (in this case,
). The non-XAResource (in this case, ) participates as a
local transaction resource. If the non-XAResource fails, then the transaction manager can rollback
the XAResources.

<img src="../../images/transactions_jca_adapter.png" id="concept_csy_vfb_wk__image_opb_sgb_wk" class="image" />

<a id="task_sln_x3b_wk"></a>

## How to Run JTA Transactions with  as a "Last Resource"

1.  Locate the version-specific `geode-jca` RAR file within 
the `lib` directory of your  installation. 
2.  Add your container-specific XML file to the `geode-jca` RAR file.
    1. Create a container-specific resource adapter XML file named `<container>-ra.xml`.  
      For example, a WebLogic resource adapter XML file might look like this:

         ```xml
         <?xml version="1.0"?>
         <!DOCTYPE weblogic-connection-factory-dd PUBLIC '-//BEA Systems, Inc.//DTD WebLogic 9.0.0 Connector//EN'
         'http://www.bea.com/servers/wls810/dtd/weblogic810-ra.dtd'>

         <weblogic-connection-factory-dd>
            <connection-factory-name>GFE JCA</connection-factory-name>
            <jndi-name>gfe/jca</jndi-name>
         </weblogic-connection-factory-dd>
         ```
    2. Create a folder named `META-INF`, and place the container-specific XML file inside it.  
      The folder structure should look like:

      ```text
      META-INF/weblogic-ra.xml
      ```

   3. Navigate to the directory above the `META-INF` folder and execute the following command (adjust paths and file names as needed):

        ```bash
        jar -uf /path/to/lib/geode-jca-X-X-X.rar META-INF/weblogic-ra.xml
        ```
3.  Make sure that the `geode-dependencies.jar` is accessible in the CLASSPATH of the JTA transaction coordinator container.
4.  Deploy the version-specific `geode-jca` RAR file on the JTA transaction coordinator container. When deploying the file, you specify the JNDI name and so on. 
5.  Configure  for any necessary transactional behavior. Enable `copy-on-read` and specify a transaction listener, if you need one.  See [Copy on Read Behavior](../../basic_config/data_entries_custom_classes/copy_on_read.html).
6.  Get an initial context through `org.apache.geode.cache.GemFireCache.getJNDIContext`. For example:

    ``` pre
    Context ctx = cache.getJNDIContext();
    ```

    This returns `javax.naming.Context` and gives you the JNDI associated with the cache. The context contains the `TransactionManager`, `UserTransaction`, and any configured JDBC resource manager.

7.  Start and commit the global transaction using the `UserTransaction` object rather than with 's `CacheTransactionManager`. 

    ``` pre
    UserTransaction txManager = (UserTransaction)ctx.lookup("java:/UserTransaction");
    ```

8.  Obtain a  connection.

    ``` pre
    GFConnectionFactory cf = (GFConnectionFactory) ctx.lookup("gfe/jca");

    //This step of obtaining connection is what begins the
    //LocalTransaction.
    //If this is absent, GFE operations will not be part of any
    //transaction
    GFConnection gemfireConn = (GFConnection)cf.getConnection();
    ```

