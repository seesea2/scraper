export interface BusArrival {
  busStop: BusStop;
  busArrival: { Status: number; BusStopCode: string; Services: Service[] };
}

export interface BusStop {
  BusStopCode: string;
  RoadName: string;
  Description: string;
  Latitude: number;
  Longitude: number;
}

export interface NearByBusStop {
  dist: number;
  busStop: BusStop;
}

export interface Service {
  ServiceNo: string;
  Operator: string;
  NextBus: NextBusData;
  NextBus2: NextBusData;
  NextBus3: NextBusData;
}

export interface NextBusData {
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

export enum LoadType {
  SEA = 0, // seats available
  SDA, // standing available
  LSD // limited standing
}

export enum FeatureType {
  WAB = 0 // wheel-chair accessible
}

export enum VehicleType {
  SD, // single deck
  DD, // double deck
  BD // bendy
}

export interface BusTable {
  service: string;
  bus1: string;
  bus2: string;
  bus3: string;
  load: string;
}
