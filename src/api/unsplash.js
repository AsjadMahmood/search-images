import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID o9iRiT7STKKFhI6kQgUKqOupvkFXJaB5KbOKe_CTWDA'
    }
})