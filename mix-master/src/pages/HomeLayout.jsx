import { Outlet } from 'react-router';

const HomeLayout = () => {
  return (
    <div>
      <h1>HomeLayout</h1>
      <Outlet />
    </div>
  );
};
export default HomeLayout;
