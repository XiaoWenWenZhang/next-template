export interface ICatalog {
    id: number;
    name: string;
    url: string;
    Title: string;
    MetaTagDescription: string;
    children?: ICatalog[];
    hasChildren: boolean;
    alias: string;
}
