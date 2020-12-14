## $5 Tech Unlocked 2021!
[Buy and download this Course for only $5 on PacktPub.com](https://www.packtpub.com/product/improving-your-splunk-skills/9781838981747)
-----
*The $5 campaign         runs from __December 15th 2020__ to __January 13th 2021.__*

# Improving your Splunk skills
Splunk makes it easy for you to take control of your data and drive your business with the cutting edge of operational intelligence and business analytics. Through this Learning Path, you'll implement new services and utilize them to quickly and efficiently process machine-generated big data.

You'll begin with an introduction to the new features, improvements, and offerings of Splunk 7. You'll learn to efficiently use wildcards and modify your search to make it faster. You'll learn how to enhance your applications by using XML dashboards and configuring and extending Splunk. You'll also find step-by-step demonstrations that'll walk you through building an operational intelligence application. As you progress, you'll explore data models and pivots to extend your intelligence capabilities.

By the end of this Learning Path, you'll have the skills and confidence to implement various Splunk services in your projects.

## What You Will Learn
* Master the new offerings in Splunk: Splunk Cloud and the Machine Learning Toolkit
* Create efficient and effective searches
* Master the use of Splunk tables, charts, and graph enhancements
* Use Splunk data models and pivots with faster data model acceleration
* Master all aspects of Splunk XML dashboards with hands-on applications
* Apply ML algorithms for forecasting and anomaly detection
* Integrate advanced JavaScript charts and leverage Splunk's API

### Related GitHub repositories
Implementing Splunk 7, Third Edition https://github.com/PacktPublishing/Implementing-Splunk-7-Third-Edition
Splunk Operational Intelligence Cookbook https://github.com/PacktPublishing/Splunk-Operational-Intelligence-Cookbook-Third-Edition

### Instructions and Navigation
All of the code is organized into folders. Each folder starts with a number followed by the application name.

The following code bundle contains a data generator which can be used to test the queries given in the book. However, since the data is randomly generated, not all queries will work as expected and you may have to modify them accordingly.

Accordingly the use of other files is mentioned, as and when needed, in individual chapters of the book.

None of the chapters have code files, all required support files are present in the bundle.

The code will look like the following:
```
sourcetype="impl_splunk_gen" ip="*"
| rex "ip=(?P<subnet>\d+\.\d+\.\d+)\.\d+"
| table ip subnet
```

To start with the book, you will first need to download Splunk from https://www.splunk.com/en_us/download.html.
You can find the official installation manual at http://docs.splunk.com/Documentation/Splunk/latest/Installation/Systemrequirements.
