import React, { useState, useEffect, ComponentType } from "react";

/* HOC */
function withLoading<P>(Component: ComponentType<P>) {
  return (props: P & { isLoading: boolean }) => {
    if (props.isLoading) {
      return <p>Memuat user...</p>;
    }

    return <Component {...props} />;
  };
}

/* Component */
const UserProfile = ({
  username,
  email,
}: {
  username: string;
  email: string;
}) => (
  <div>
    <h3>Profil User</h3>
    <p>Nama: {username}</p>
    <p>Email: {email}</p>
  </div>
);



/* HOC result */
const UserProfileWithLoading = withLoading(UserProfile);



/* Main */
export default function Hocs() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setUser({
        username: "Nyong",
        email: "nyong@mail.com",
      });
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <UserProfileWithLoading
      isLoading={isLoading}
      username={user.username}
      email={user.email}
    />
  );
}
