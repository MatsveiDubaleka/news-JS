export type Callback<T> = (data: T) => void;
export interface ISources {
    id: string;
    name: string;
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
    sources?: IPortal<string>[];
    articles?: IPoster[];
}

export interface IPortal<T> {
    id: T;
    category: T;
    country: T;
    description: T;
    language: T;
    name: T;
    url: T;
}
