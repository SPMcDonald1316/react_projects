import { Link, useRouteError } from 'react-router';

const Error = () => {
  const error = useRouteError();

  return (
    <main className='grid min-h-screen place-items-center px-8'>
      {error.status === 404 ? (
        <div className='text-center'>
          <p className='text-9xl font-semibold text-primary'>404</p>
          <h1 className='mt-4 text-5xl font-bold tracking-tight md:text-3xl'>
            Page not found
          </h1>
          <p className='mt-6 text-lg leading-7'>
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className='mt-10'>
            <Link to='/' className='btn btn-secondary'>
              Return Home
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h4 className='text-center font-bold text-4xl'>
            There was an error...
          </h4>
        </>
      )}
    </main>
  );
};
export default Error;
