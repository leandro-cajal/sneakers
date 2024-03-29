import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc} from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailContainer = () =>{

    const [item,setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        
        const docRef = doc(db,"products", id);
        getDoc(docRef)
            .then((resp) =>{
                setItem({ ...resp.data(), id : resp.id})
            })


    }, [id])

    return(
        <div className="pt-36 pb-20">
            {item &&
            <ItemDetail item={item} />}
            
        </div>
    )

}

export default ItemDetailContainer