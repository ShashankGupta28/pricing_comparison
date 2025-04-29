import FlipMove from "react-flip-move";
import Card from "./Card";
import { TailSpin } from "react-loader-spinner";
import "./productlist.css";

const ProductList = ({ products, searchText }) => {
  return (
    <>
      {products ? 
          <div className="product-list">
          {/* <div className="header">
            <h4>Clothing and Accessories</h4>
            <span>(Showing 1 – 40 products of 1,00,302 products)</span>
          </div> */}
          <FlipMove className="products">
            {products?.map((product) => (
              <Card
                key={product.position}
                id={product.position}
                title={product.title}
                price={product?.price?.raw}
                image={product.image}
                asin={product.asin}
                link={product.link}
              />
            ))}
          </FlipMove>
          </div>
        : searchText ? ( <TailSpin
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperClass="spinner"
          />)
          :
          <div className="zero_state">Please search some product.</div>
     
      }
    </>
  );
};

export default ProductList;
