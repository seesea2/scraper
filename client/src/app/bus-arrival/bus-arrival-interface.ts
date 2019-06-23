interface BusStopInfo {
  BusStopCode: string;
  RoadName: string;
  Description: string;
  Latitude: number;
  Longitude: number;
}

interface BusArrivalReturn {
  busStopInfo: BusStopInfo;
  busArrival: { Status: number; BusStopCode: string; Services: Service[] };
}

interface Service {
  ServiceNo: string;
  Operator: string;
  NextBus: NextBusData;
  NextBus2: NextBusData;
  NextBus3: NextBusData;
}

interface NextBusData {
  OriginCode: string;
  DestinationCode: string;
  EstimatedArrival: string;
  Latitude: string;
  Longitude: string;
  VisitNumber: string;
  Load: string;
  Feature: FeatureType;
  Type: VehicleType;
}

const enum LoadType {
  SEA = 0, // seats available
  SDA, // standing available
  LSD // limited standing
}

const enum FeatureType {
  WAB = 0 // wheel-chair accessible
}

const enum VehicleType {
  SD, // single deck
  DD, // double deck
  BD // bendy
}

interface BusTable {
  service: string;
  bus1: string;
  bus2: string;
  bus3: string;
  load: string;
}

export {
  BusArrivalReturn,
  BusStopInfo,
  FeatureType,
  LoadType,
  NextBusData,
  BusTable,
  Service,
  VehicleType
};
