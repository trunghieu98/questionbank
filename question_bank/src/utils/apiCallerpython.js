
import api from './axiospy';
export default function callAPI(endpoint,method,data){
    return api({
        method: method,
        url: `/${endpoint}`,
        data: data
    }).catch(err=>{
        console.log("Error CallApi Please..."+err);
    });
}
