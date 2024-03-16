import { useEffect, useState } from "react";
import { GetItemById } from "../FetchData";
import { ItemDetail } from "./ItemDetail";


const ItemDetailContainer = ({itemId}) =>{

    const [item,setItem] = useState(null);

    useEffect(() => {
        GetItemById(itemId)
            .then((resp) => setItem(resp))
    }, [itemId])

    return(
        <div>
            {item &&
            <ItemDetail item={item} />}
            
        </div>
    )

}

export default ItemDetailContainer