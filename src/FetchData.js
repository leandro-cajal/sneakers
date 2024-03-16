import Data from "./products";

export const FetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () =>{
            resolve(Data);
        },500) 
    })
}

export const GetItemById = (id) =>{
    return new Promise((resolve,reject) =>{

        const item = Data.find((item) => item.id === id);

        if (item){
            resolve(item)
        }else{
            reject({
                error: "No tenemos este producto"
            })
        }
    })
}

