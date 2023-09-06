import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1 className="text-4xl font-bold">Error</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* Check if error is an object */}
      {error instanceof Object && (
        <>
          <i>{'statusText' in error ? error.statusText as string : 'message' in error ? error.message as string : 'nothing'}</i>
        </>
      )}
    </div>
  )
}

export default ErrorPage;