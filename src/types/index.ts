// GET https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY

export interface IPoster {
    id: number;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface INews {
    status: boolean;
    sources: [];
}
