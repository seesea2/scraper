const ltaAccountKey = '6sVzf9zXRaCgkJUdjxIw2A==';

const busArrivalUrl =
  'http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2';
const busStopsUrl = 'http://datamall2.mytransport.sg/ltaodataservice/BusStops';

const headerConfig = {
  headers: {
    AccountKey: ltaAccountKey
  }
};

export { busArrivalUrl, busStopsUrl, headerConfig };
