import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data } = useFetch(
    "http://localhost:9130/interoperability/api/ChargesBy/EG/20190101/20200101"
  );

  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <div>
          <p>This is intraPass</p>
          <p>{data}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
