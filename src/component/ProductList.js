
function ProductList({product,addToCart}){


    
    return(
        <div className="flex">{
            product.map((productItem,productIndex)=>{
                return(
                    <div style={{width:'50%'}}>
                       <div className="product-item">
                        <img src={productItem.url} width='50%' />
                        <p>{productItem.name} | {productItem.category}</p>
                        <p>{productItem.seller}</p>
                        <p>RS . {productItem.price}/-</p>
                        <button
                        onClick={()=>addToCart(productItem)}>Add to Cart</button>
                       </div>
                    </div>
                )
            })
        }
        
        </div>
    )
}

export default ProductList;