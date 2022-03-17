import Head from "next/head";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initialUserData } from "../../redux/slices/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import initializeAuthentication from "../../firebase";
import cover from '../../styles/Home.module.css'

const Layout = ({ title, children }) =>
{
  initializeAuthentication();

  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser);
  const dispatch = useDispatch();
  const auth = getAuth();
  //   // observer function
  useEffect(() =>
  {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
    {
      if (user) {
        dispatch(initialUserData({ user }));
      } else {
        dispatch(initialUserData(null));
      }
    });
    return () => unsubscribe;
  }, [auth]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className={cover.main}>{children}</main>
    </>
  );
};

export default Layout;
