import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from '../_store';

export { Home };

function Home() {
  const dispatch = useDispatch();
  const { user: authUser } = useSelector(x => x.auth);
  const { users } = useSelector(x => x.users);

  useEffect(() => {
    dispatch(userActions.getAll());
  }, [dispatch]);

  return (
    <div>
      <h1>Hi {authUser?.firstName}!</h1>
      <p>You&apos;re logged in with React 18 + Redux & JWT!!</p>
      <h3>Users from secure api end point:</h3>
      {users.length &&
        <ul>
          {users.map(user => 
            <li key={user.id}>{user.firstName} {user.lastName}</li>
          )}
        </ul>
      }
      {users.loading && <div className="spinner-border spinner-border-sm"></div>}
      {users.error && <div className="text-danger">Error loading users: {users.error.message}</div>}
    </div>
  );
}