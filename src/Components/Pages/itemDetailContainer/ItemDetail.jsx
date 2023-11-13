import CounterContainer from "../../Common/counter/CounterContainer"
import "./ItemDetail.css";
import { Link } from "react-router-dom";


export const ItemDetail = ({ productSelected, onAdd, initial, showCounter }) => {
  return (
    <div>
      <div className={"containerItemDetail"}>
        <div className={"containerImage"}>
          <img src={productSelected.img} alt="" />
        </div>

        <div className={"containerDetail"}>
          <h2 style={{ fontFamily: "helvetica" }}>
            <span style={{ fontSize: "23px" }}>Nombre:</span>{" "}
            {productSelected.title}
          </h2>
          
          <h2 style={{ fontFamily: "helvetica" }}>
            <span style={{ fontSize: "23px" }}>Precio:</span> $
            {productSelected.price}.-
          </h2>

          <div className={"detailText"}>
        <h2 style={{ fontFamily: "helvetica" }}>
          <span style={{ fontSize: "23px" }}>Más detalles:</span>{" "}
          <div style={{ fontSize: "17px" }}>{productSelected.detail}</div>
        </h2>
        </div>
        </div>
      </div>

      {
        initial && <h4>Ya tienes {initial} unidades</h4>
      }
       

      {
         showCounter ?  <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <CounterContainer
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </div> :  <Link to="/cart">Finalizar tu compra</Link>
      }

     

     
    </div>
  );
};
