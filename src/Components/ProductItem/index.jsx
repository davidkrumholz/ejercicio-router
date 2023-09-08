const ProductItem = (props) => {
    const {id, title} = props.productObject;
    return (
        <li className="list-group-item">{title}</li>
    )
}

export default ProductItem;