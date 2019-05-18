export interface SlipModel {
    id?: string,
    itemDescription: string,
    purchaseDate: string,
    category: Array<string>,
    store: string,
    purchaseLocation: string,
    selectWarrantee: string,
    approximateValue: number,
    taxClaimable: boolean,
    pictures: Array<string>,
    notes: string
}