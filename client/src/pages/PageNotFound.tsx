import { Button } from "../components/Button";
import { pagePaths } from "../constants/pagePaths";

export const PageNotFound = () => {
  return (
    <main className="bg-gray-100 min-h-screen flex justify-center items-center">
      <section className="p-12 container text-center">
        <h1 className="mb-8 tracking-wide font-extrabold text-4xl md:text-5xl">
          Page Not Found
        </h1>

        <p className="text-gray-700 text-lg">
          We couldn't find the page you were looking for.
        </p>

        <Button text="Home" link={pagePaths.homePage} />
      </section>
    </main>
  );
};
