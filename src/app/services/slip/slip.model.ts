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
    pictures: Array<picture>,
    notes: string
}

interface picture {
    url?: string,
    fileLocation?: FileLocation,
    fileOperation?: FileOperation
}

enum FileLocation {
    TEMP_CAMERA,
    FILE_SYSTEM,
    CLOUD
}

enum FileOperation {
    DELETE,
    CREATE
}