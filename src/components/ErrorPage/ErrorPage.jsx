import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center mt-60 text-center">
      <div className="space-y-5 text-red-500">
      <h1>Opps!!</h1>
      <h2>This page not available😁👌</h2>
      <Link className="btn btn-primary normal-case" to="/">
        Go Home
      </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
