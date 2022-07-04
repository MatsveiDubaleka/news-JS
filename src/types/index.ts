// GET https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY
export interface ISource {
    id: string;
    name: string;
}
export interface IPoster {
    author: string | null;
    content: string;
    description: string;
    publishedAt: string;
    source: ISource;
    title: string;
    url: string;
    urlToImage: string;
}
export interface INews {
    status: string;
    totalResults?: number;
    sources?: IPortal[];
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
