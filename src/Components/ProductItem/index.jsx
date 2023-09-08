import {Link} from "react-router-dom";
const ProductItem = (props) => {
    const {id, title} = props.productObject;
    return (
        <li className="list-group-item">{title}
            <Link to={`detail/${id}`}>
            <button className="btn btn-dark">Detalle</button>
            </Link>
        </li>
    )
}

export default ProductItem;