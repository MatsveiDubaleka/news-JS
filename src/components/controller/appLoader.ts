import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'aab3e5a12de448d3bd638915807b80e6',
        });
    }
}

export default AppLoader;
