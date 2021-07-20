# Initializing data systems with products (BigQuery)

> BigQuery is an enterprise data warehouse that solves this problem by enabling super-fast SQL queries using the processing power of Google's infrastructure

[What is BigQuery?](https://cloud.google.com/bigquery/docs/introduction)

> There are three main ways you interact with BigQuery:
>
> Loading and exporting data
>
> Querying and viewing data
>
> Managing data
>
> To perform these interactions, you can use the following:
>
> The Cloud Console
>
> The bq command-line tool
>
> The BigQuery REST API or client libraries

[Introduction to interacting with BigQuery](https://cloud.google.com/bigquery/docs/interacting-with-bigquery)

> When you use the Cloud Console or the bq command-line tool to load, export, query, or copy data, a job resource is automatically created, scheduled, and run. You can also programmatically create a load, export, query, or copy job. When you create a job programmatically, BigQuery schedules and runs the job for you.

[Introduction to BigQuery jobs](https://cloud.google.com/bigquery/docs/jobs-overview)

> A dataset is contained within a specific project. Datasets are top-level containers that are used to organize and control access to your tables and views. A table or view must belong to a dataset, so you need to create at least one dataset before loading data into BigQuery.
> 
> BigQuery datasets are subject to the following limitations:
> 
> You can set the geographic location at creation time only. After a dataset has been created, the location becomes immutable and can't be changed by using the Cloud Console, using the bq command-line tool, or calling the patch or update API methods.
All tables that are referenced in a query must be stored in datasets in the same location.
> 
> When you copy a table, the datasets that contain the source table and destination table must reside in the same location.
> 
> Dataset names must be unique for each project.

[Introduction to datasets](https://cloud.google.com/bigquery/docs/datasets-intro)

> There are two types of locations:
> 
> A region is a specific geographic place, such as London.
>
> A multi-region is a large geographic area, such as the United States, that contains two or more geographic places.

[Dataset locations](https://cloud.google.com/bigquery/docs/locations)

> A partitioned table is a special table that is divided into segments, called partitions, that make it easier to manage and query your data. By dividing a large table into smaller partitions, you can improve query performance, and you can control costs by reducing the number of bytes read by a query.
> 
> You can partition BigQuery tables by:
>
> Time-unit column: Tables are partitioned based on a TIMESTAMP, DATE, or DATETIME column in the table.
>
> Ingestion time: Tables are partitioned based on the timestamp when BigQuery ingests the data.
>
> Integer range: Tables are partitioned based on an integer column.
>
> If a query filters on the value of the partitioning column, BigQuery can scan the partitions that match the filter and skip the remaining partitions. This process is called pruning.

[Introduction to partitioned tables](https://cloud.google.com/bigquery/docs/partitioned-tables)

> When you create a clustered table in BigQuery, the table data is automatically organized based on the contents of one or more columns in the table’s schema. The columns you specify are used to colocate related data. When you cluster a table using multiple columns, the order of columns you specify is important. The order of the specified columns determines the sort order of the data.
>
> Clustering can improve the performance of certain types of queries such as queries that use filter clauses and queries that aggregate data. When data is written to a clustered table by a query job or a load job, BigQuery sorts the data using the values in the clustering columns. These values are used to organize the data into multiple blocks in BigQuery storage. When you submit a query that contains a clause that filters data based on the clustering columns, BigQuery uses the sorted blocks to eliminate scans of unnecessary data. You might not see a significant difference in query performance between a clustered and unclustered table if the table or partition is under 1 GB.

[Introduction to clustered tables](https://cloud.google.com/bigquery/docs/clustered-tables)

> A wildcard table represents a union of all the tables that match the wildcard expression. For example, the following FROM clause uses the wildcard expression gsod* to match all tables in the noaa_gsod dataset that begin with the string gsod.

[Querying multiple tables using a wildcard table](https://cloud.google.com/bigquery/docs/querying-wildcard-tables)

## Pricing

> BigQuery offers a choice of two pricing models for running queries:
> 
> On-demand pricing. With this pricing model, you are charged for the number of bytes processed by each query. The first 1 TB of query data processed per month is free.
> 
> Flat-rate pricing. With this pricing model, you purchase slots, which are virtual CPUs. When you buy slots, you are buying dedicated processing capacity that you can use to run queries. Slots are available in the following commitment plans:
> 
> Flex slots: You commit to an initial 60 seconds.
> 
> Monthly: You commit to an initial 30 days.
> 
> Annual: You commit to 365 days.
> 
> With monthly and annual plans, you receive a lower price in exchange for a longer-term capacity commitment.
> ...
> Queries (on-demand) $5.00 per TB
> ...
> Storage pricing is the cost to store data that you load into BigQuery. You pay for active storage and long-term storage.
> 
> Active storage includes any table or table partition that has been modified in the last 90 days.
> 
> Long-term storage includes any table or table partition that has not been modified for 90 consecutive days. The price of storage for that table automatically drops by approximately 50%. There is no difference in performance, durability, or availability between active and long-term storage.
>
> The first 10 GB of storage per month is free.

[BigQuery pricing](https://cloud.google.com/bigquery/pricing)