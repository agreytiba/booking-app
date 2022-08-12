import useFetch from "../hooks/useFetch"
import Spinner from "../spinner/spinner"
import "./featuredProperties.css";

const FeaturedProperties = () => {

  //  fetching data using "useFetch hook"
   const { data, loading, error } = useFetch("/hotels?featured=true&limit=4")

  return (
    <div className="fp">

      {/* checking for loading state */}
      {loading ? <Spinner /> : 
        <>
       {/* map through object data to get indivindual array */}
    {  data.map(item =>(
      <div className="fpItem" key={item._id}>
        <img
          src={item.photos[0]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{item.name }</span>
        <span className="fpCity">{ item.city}</span>
        <span className="fpPrice">Starting from ${item.cheapestPrice }</span>
        {item.rating && <div className="fpRating">
          <button>item.rating</button>
          <span>Excellent</span>
        </div>}
      </div>
      ))
          }
        </>
      }
    </div>
  );
};

export default FeaturedProperties;
