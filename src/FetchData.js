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

export const GetItemsByName = (words) => {
    console.log(words);
    if (words.trim() !== "") { // Verificar si la palabra de búsqueda no está vacía
        const filteredItems = Data.filter((item) => item.name.toLowerCase().includes(words.toLowerCase()));
        return Promise.resolve(filteredItems); // Devolver los elementos filtrados directamente
    } else {
        return Promise.resolve([]); // Devolver un array vacío si la palabra de búsqueda está vacía
    }
}


