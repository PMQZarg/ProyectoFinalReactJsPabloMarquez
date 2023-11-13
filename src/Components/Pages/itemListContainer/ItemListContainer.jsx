import { useState, useEffect } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Button } from "@mui/material";
import { products } from "../../../productsMock";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = undefined;

    if (!categoryName) {
    
      consulta = productsCollection;
    } else {
      
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });

     

      setItems(newArray);
    });
  }, [categoryName]);


  return (
    <>
      {/*<Button variant="contained" onClick={rellenarDB}>Rellenar</Button>*/}
      {items.length === 0 ? (
        <div style={{ display: "flex", gap: 20 }}>
            <div>
      <ScaleLoader color="#b736d6" cssOverride={{height:"35", width:"4",radius:"2",
      margin: "2",}}/>
        
      </div>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
