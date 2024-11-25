import { Link } from "react-router-dom"; 
import ProductList from "../../components/product/ProductList";

const Index = () => {
    return (
        <div>
            <Link to="/create" className="btn btn-primary">Create Product</Link>
            <ProductList/>
        </div>
    );
};

export default Index;