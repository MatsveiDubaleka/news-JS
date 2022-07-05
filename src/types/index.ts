export type Callback<T> = (data: T) => void;
export interface ISources {
    id: string;
    name: string;
    status: string;
}
export interface IPoster {
    author: string | null;
    content: string;
    description: string;
    publishedAt: string;
    source: ISources;
    title: string;
    url: string;
    urlToImage: string;
}
export interface INews {
    status: string;
    totalResults?: number;
    sources?: [];
    articles?: IPoster[];
}

export interface IPortal {
    id: string;
    category: string;
    country: string;
    description: string;
    language: string;
    name: string;
    url: string;
}

export interface IView {
    news: object;
    sources: object;
}

export enum Endpoint {
    everything = 'everything',
    sources = 'sources',
}
