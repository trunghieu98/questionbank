import api from './axios';
export default function CallApi(endpoint,method,data){
    return api({
        method: method,
        url: `/${endpoint}`,
        data: data
    }).catch(err=>{
        console.log("Error CallApi Please..."+err);
    });
}
