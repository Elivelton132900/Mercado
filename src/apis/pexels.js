import axios from "axios";

const pexels = (termo) => axios.get(`https://api.pexels.com/v1/search?query=${termo}`,  
    {
    params: {
        locale: 'pt-BR',
    },
    headers: {
        'Authorization': '563492ad6f91700001000001aba390c4a2b244b2bb903498d7f6308d',
    }
}
)

export default pexels