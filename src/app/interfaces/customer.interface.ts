export interface Customer {
    custid?: number,
    companyName: string;
    lastOrderDate: Date;
    nextPredictedOrder: Date;
}