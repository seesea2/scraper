interface BusArrivalReturn {
  'odata.metadata': string;
  BusStopCode: string;
  Services: Service[];
}

interface Service {
  ServiceNo: string;
  Operator: string;
  NextBus: NextBusData[];
  NextBus2: NextBusData[];
  NextBus3: NextBusData[];
}

interface NextBusData {
  OriginCode: number;
  DestinationCode: number;
  EstimateArrival: Date;
  Latitude: number;
  Longitude: number;
  VisitNumber: number;
  Load: LoadType;
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

export {
  BusArrivalReturn,
  FeatureType,
  LoadType,
  NextBusData,
  Service,
  VehicleType
};
