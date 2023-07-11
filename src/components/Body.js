import Products from "./Products"

const Body = () => {

  return (
      <div className="body">
        <h1>Body</h1>
        <Products filter={(p=>p)}/>
      </div>
    );
}

export default Body;