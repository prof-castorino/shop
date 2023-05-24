import axios from 'axios'
//GET
//url = {url get api}
//CallBack = {função que retorna o resp}
export const getAxios = (CallBack, url) => {
    axios
        .get(url)
        .then((response) => {
            CallBack(response)
        }).catch(function (error) {
            console.log(error);
        })
}
//POST
//url = {url get api}
//CallBack = {função que retorna o resp}
//data = {json com os parametro}
export const postAxios = (CallBack, url, data) => {
    axios
        .post(url, data)
        .then((response) => {
            CallBack(response)
        }).catch(function (error) {
            console.log(error);
        })
}
