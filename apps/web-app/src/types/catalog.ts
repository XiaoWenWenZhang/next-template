export interface ICatalog {
    id: number;
    name: string;
    url: string;
    Title: string;
    MetaTagDescription: string;
    hasChildren: boolean;
    alias: string;
    children?: ICatalog[];
    iconUrl?: string;
}
