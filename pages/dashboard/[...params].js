import Head from "next/head";
import DashboardRoutes from "../../components/Dashboard/Dashboard/DashboardRoutes";
import withProtected from "../protect";

const Dashboard = (props) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main>
        <DashboardRoutes jobs={props.jobs} />
      </main>
    </>
  );
};

export default withProtected(Dashboard);

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { jobType } = query;

  // without filtering
  if (jobType) {
    const response = await fetch(
      `https://murmuring-spire-15534.herokuapp.com/jobs/?jobType=${jobType}`
    );
    const data = await response.json();

    return {
      props: {
        jobs: data.data,
        count: data.count,
      },
    };
  } else {
    const response = await fetch(
      "https://murmuring-spire-15534.herokuapp.com/jobs"
    );
    const data = await response.json();
    return {
      props: {
        jobs: data.data,
        count: data.count,
      },
    };
  }
};
