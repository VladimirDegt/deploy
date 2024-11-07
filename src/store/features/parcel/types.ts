import { ParcelStatus } from '@/utils/ParcelStatus.ts';

export type Address = {
    street: string;
    city: string;
    country: string;
};

export type Driver = {
    name: string;
    lastName: string;
    phoneNumber: string;
};

export type Recipient = {
    name: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
};

export type ParcelAdditionalInfoType = {
    driver?: Driver;
    recipient: Recipient;
};

export type ParcelRequestDriver = {
    name: string;
    lastName: string;
    departureAddress: Address;
    arrivalAddress: Address;
};

export type ParcelGeneralInfoType = {
    parcelId: number;
    senderId: number;
    status: ParcelStatus;
    type: string;
    cost: number;
    shippingAddress: Address;
    shippingDate?: string;
    deliveryAddress: Address;
    deliveryDate?: string;
    details?: string;
    hasRequests?: boolean;
    driverRequested?: ParcelRequestDriver[];
};

export type Parcel = ParcelGeneralInfoType & Partial<ParcelAdditionalInfoType>;
