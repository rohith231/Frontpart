import * as types from './types';

const isSuccess = (payload) => {
    return {
        type: types.ON_RESULT,
        payload
    }
}
const onInit = () => {
    return {
        type: types.ON_INIT
    }
}

export const initilize = () => {
    return onInit();
} 
export const postFlight = (url, payload, title) => {
    return postData(url, payload, title, isSuccess);
}

const postData = (url, payload, title, done) => {
    return async(dispatch) => {
        try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),
            credentials: 'same-origin',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });

        if(!response.ok){
            throw Error(response.statusText);
        }
        const data = await response.json();
        if(data){
            delete data._id;
            delete data.__v;
            console.log("Result: "+ JSON.stringify(data));
            let result = Object.keys(data).map((key) => {
                if(!key._id || !key.__v){
                  return data[key];
                } 
                return true;  
            }).join("-");
            dispatch(done({result: result, title: title}));
        }
    }catch(e){
    console.log("Error: "+e.statusText);
    }
    }

}
