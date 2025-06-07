//https://axios-http.com/es/
//https://axios-http.com/es/docs/intro

import axios from 'axios'

const url = 'https://683e444a1cd60dca33dadfc0.mockapi.io/users'

export const obtenerUsuarios = async () => {
    try {
        const { data:users } = await axios.get(url) 
        return users
    }
    catch(error) {
        console.error("Hubo un error en la solicitud", error)
    }
}