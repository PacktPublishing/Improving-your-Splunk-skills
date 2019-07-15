import splunklib.client as client
import splunklib.results as results

HOST     = "localhost"
PORT     = 8089
USERNAME = "admin"
PASSWORD = "changeme"

service = client.connect(
	host=HOST,
	port=PORT,
	username=USERNAME,
	password=PASSWORD)

kwargs = {"earliest_time": "-15m",
	"latest_time": "now",
	"search_mode": "normal",
	"output_mode:":"JSON",
	"exec_mode": "blocking"}

searchquery = "search index=main sourcetype=\"access_combined\" | stats count by clientip"

job = service.jobs.create(searchquery, **kwargs)
print "Job completed...printing results!\n"

search_results = job.results()

reader = results.ResultsReader(search_results)
for result in reader:
	print "Result: %s => %s" % (result['clientip'],result['count'])

#total  = job["resultCount"]
#offset = 0;
#count  = 5;

#while (offset < int(total)):
#	page_args = {"count": count,
#		"offset": offset}
#
#	search_results = job.results(**page_args)
#	reader = results.ResultsReader(search_results)
#	for result in reader:
#		print "Result: %s => %s" % (result['clientip'],result['count'])
#	offset += count
