import React, { useEffect, useState } from "react";

import s from "../styles/team.module.scss";

import Header from "../components/Header";
import navigation from "../data";
import Footer from "../components/Footer";
import TeamSection from "../components/Teams/TeamSection";
import Title from "../components/Title";
import Loader from "../components/loader/Loader";

function Team({ teams }) {
  // loader screen
  // const [spinner, setSpinner] = useState(true);

  // It will be executed before rendering

  // useEffect(() => {
  //   setTimeout(() => setSpinner(false), 0);
  // }, []);

  // // [] means like componentDidMount

  // return spinner ? (
  //   <div>
  //     <Loader />
  //   </div>
  // ) : (
    return (
    <div className={s.container}>
      <Header items={navigation} navPosition="right" home={false} />
      <div className="flex justify-center align-center text-center ">
        <a href="/team">
          <h1 className=" text-blue-600 text-3xl font-semibold flex text-center items-center justify-center underline decoration-1 decoration-black underline-offset-8" >TEAM</h1>
        </a>
        <h1 className="text-2xl flex items-center justify-center mx-6"> / </h1>
        <a href="/alumni">
        <h1 className=" text-3xl font-semibold flex text-center items-center justify-center" >ALUMNI</h1>
        </a>
      </div>
      <TeamSection teams={teams} title="OFFICE BEARERS" year={4} />
      <TeamSection teams={teams} title="THIRD YEARS" year={3} />
      <TeamSection teams={teams} title="SECOND YEARS" year={2} />

      <Footer />
    </div>
  );
}

export default Team;

export async function getStaticProps() {
  const res = await fetch("http://13.127.85.83/api/student/");
  const teams = await res.json();
  // const res2 = await fetch("http://127.0.0.1:8000/api/alumni/");
  // const alumni = await res2.json();

  return {
    props: {
      teams,
      // alumni,
    },
  };
}
