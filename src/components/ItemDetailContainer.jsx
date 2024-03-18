import { useEffect, useState } from "react";
import { GetItemById } from "../FetchData";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () =>{

    const [item,setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        GetItemById(Number(id))
            .then((resp) => setItem(resp))
    }, [id])

    return(
        <div className="pt-36 pb-20">
            {item &&
            <ItemDetail item={item} />}
            
        </div>
    )

}

export default ItemDetailContainer