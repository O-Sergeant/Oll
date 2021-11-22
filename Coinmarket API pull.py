import a as a
from requests import Request, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json

baseurl = 'https://pro-api.coinmarketcap.com'
endpoint_listing_latest = '/v1/cryptocurrency/listings/latest'
endpoint_quotes_latest = '/v1/cryptocurrency/quotes/latest'

parameters = {
  'start':'1',
  'limit':'5000',
  'convert':'USD'
}
headers = {
  'Accepts': 'application/json',
  'X-CMC_PRO_API_KEY': 'f7e49c8e-7e10-472f-afe9-78a73ddc12ab',
}
parameters2 = {
  'id':'1',

}

session = Session()
session.headers.update(headers)

def make_request(url,endpoint,parameters):
  try:
    response = session.get(url + endpoint, parameters)
    data = json.loads(response.text)
    #print(data)
  except (ConnectionError, Timeout, TooManyRedirects) as e:
    print(e)


make_request(baseurl,endpoint_quotes_latest,parameters2)


#print(data['data']['1']['quote']['USD']['price'])

