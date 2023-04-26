import { budgetData } from "../helper/budgetData";

const Home = () => {
  console.log(budgetData);
  return (
    <>
      <div className="flex items-center h-screen w-full justify-center">
        This is Home Page
      </div>
    </>
  );
};

export default Home;
