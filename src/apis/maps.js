import axios from 'axios';

const KEY = 'dfhdvfnjbn';

export default axios.create({
    baseURL: 'https://image.maps.api.here.com',
    params: {
        PATH: '/mia/1.6/',
        app_id: 'p3ovXxZETHPAr01Tp72k',
        app_code: 'pi4DDl0CRUHCbowFIMreXg',
        element: ''
    }
})