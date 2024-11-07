import { ParcelStatus } from '@/utils/ParcelStatus.ts';
import { ParcelGeneralInfoType } from '@/store/features/parcel/types.ts';

export type Address = {
    street: string;
    city: string;
    country: string;
};

export type Recipient = {
    name?: string;
    lastName?: string;
    phoneNumber?: string;
    emailAddress?: string;
};

export type Sender = {
    name?: string;
    lastName?: string;
    phoneNumber?: string;
    emailAddress?: string;
};

export type SenderRequestedType = {
    fromSenders: ParcelGeneralInfoType[];
    myRequests: ParcelGeneralInfoType[];
};

export type RideAcceptedParcels = {
    rideId: number;
    parcelId: number;
    type: string;
    details: string;
    cost: number;
    departureAddress: Address;
    departureDate: string;
    arrivalAddress: Address;
    arrivalDate: string;
    sender: Sender;
    recipient: Recipient;
};

export type RideGeneralInfoType = {
    driverId: number;
    rideId: number;
    status: ParcelStatus;
    parcelsTypes: string[];
    totalCost: number;
    departureAddress: Address;
    departureDate?: string;
    arrivalAddress: Address;
    arrivalDate?: string;
    acceptedParcelList?: RideAcceptedParcels[];
    hasRequests?: boolean;
    senderRequested?: SenderRequestedType;
};

export type Ride = RideGeneralInfoType;
