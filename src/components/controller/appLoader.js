import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '28a0789eaa764c06b2e703541856408e',
        });
    }
}

export default AppLoader;
