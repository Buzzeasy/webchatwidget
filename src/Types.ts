import { Activity } from './directLine';

export interface FormatOptions {
    showHeader?: boolean // DEPRECATED: Use "title" instead    
    showUploadButton?:boolean
}

export type ActivityOrID = {
    activity?: Activity
    id?: string
}