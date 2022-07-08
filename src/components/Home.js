import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="mainHome">
      <div className="mainBg"></div>
      <span className="homeIntro">
        Your dream PC Build awaits you!
        <Link to="/catalog">Catalog</Link>
      </span>
    </main>
  );
};

export default Home;
