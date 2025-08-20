import { useRouteError } from "react-router-dom"

const ErrorPages = () => {

  const error = useRouteError()

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] max-w-[550px] mx-auto text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-5">Page Not Found</h1>
      <p>
        We apologize, the page you are looking for could not be found. Please return to the homepage or use the navigation menu to find what you need.
      </p>
      <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPages