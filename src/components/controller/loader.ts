import { Callback } from '../../types/index';

class Loader {
    baseLink: string;
    options: object;
    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>(
        { endpoint = 'string', options = {} },
        callback: (data: T) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        console.log('🚀 ~ file: loader.ts ~ line 21 ~ Loader ~ errorHandler ~ res', res);
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: object, endpoint: string): string {
        const urlOptions: object = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;
        Object.keys(urlOptions).forEach((key: string): void => {
            console.log('🚀 ~ file: loader.ts ~ line 35 ~ Loader ~ Object.keys ~ urlOptions', urlOptions);
            url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
        });

        return url.slice(0, -1);
    }

    load<TResp>(method: string, endpoint: string, callback: Callback<TResp>, options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
