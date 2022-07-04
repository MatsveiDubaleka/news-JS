// GET https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY
export interface ISource {
    id: string;
    name: string;
}
export interface IPoster {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: ISource;
    title: string;
    url: string;
    urlToImage: string;
}
export interface INews {
    status: boolean;
    totalResults: number;
    sources: [];
}
