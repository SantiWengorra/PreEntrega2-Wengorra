import { Link } from "react-router-dom";

function DropDownContent({categoryId, category}) {
    return (<>
        <div className="DropD">
        <Link className="text-dark hover-underline" to={`/category/${categoryId}`}>{category}</Link>
        </div>
        </>
    )
}

export default DropDownContent;