import React, { useEffect, useState } from "react";
import Header from '../components/Header'
import navigation from "../data"; 
import Footer from '../components/Footer';
import AlumniSection from "../components/Alumni/AlumniSection";
import Title from "../components/Title"
import Loader from "../components/loader/Loader";

function Alumni({alumni}) {
  const styles = {
    marginTop : "120px"
  }
  const headerStyle = {
    display : "flex",
    width : "45%",
    marginRight : "auto",
    marginLeft : "auto",
    alignItems : "center",
    justifyContent : "space-between"
  }
  
   // loader screen 
  //  const [spinner, setSpinner] = useState(true);

   // It will be executed before rendering
 
  //  useEffect(() => {
  //    setTimeout(() => setSpinner(false), 0)
  //  }, []);
 
  //  // [] means like componentDidMount
 
 
 
  //  return spinner ? (
  //    <div>
  //    <Loader/>
  //    </div>
  //  ) :
 
 
  // (
    return (
    <div style={styles} >
      <Header items={navigation} navPosition="right" home={false} />
      <div className="flex justify-center align-center text-center ">
        <a href="/team">
          <h1 className=" text-3xl font-semibold flex text-center items-center justify-center" >TEAM</h1>
        </a>
        <h1 className="text-2xl flex items-center justify-center mx-6"> / </h1>
        <a href="/alumni">
        <h1 className="text-blue-600 text-3xl font-semibold flex text-center items-center justify-center underline decoration-1 decoration-black underline-offset-8" >ALUMNI</h1>
        </a>
      </div>
      
      <AlumniSection alumni={alumni}  year={2020} />
      <AlumniSection alumni={alumni} year={2021} />
      <AlumniSection alumni={alumni} year={2022} />
      <AlumniSection alumni={alumni}  year={2023} />
      <AlumniSection alumni={alumni} year={2024} />
      <AlumniSection alumni={alumni} year={2025} />
      <AlumniSection alumni={alumni}  year={2026} />
      <AlumniSection alumni={alumni} year={2027} />
      <AlumniSection alumni={alumni} year={2028} />
      <AlumniSection alumni={alumni}  year={2029} />
      <AlumniSection alumni={alumni} year={2030} />
      <AlumniSection alumni={alumni} year={2031} />
      <AlumniSection alumni={alumni}  year={2032} />
      <AlumniSection alumni={alumni} year={2033} />
      <AlumniSection alumni={alumni} year={2034} />
      <AlumniSection alumni={alumni}  year={2035} />
      <AlumniSection alumni={alumni}  year={2036} />
      <AlumniSection alumni={alumni}  year={2037} />
      <AlumniSection alumni={alumni}  year={2038} />
      <AlumniSection alumni={alumni}  year={2039} />
      <AlumniSection alumni={alumni}  year={2040} />
     
      <Footer />
    </div>
  );
}

export default Alumni;


export async function getStaticProps() {
  const res = await fetch("http://13.127.85.83/api/alumni/");
  const alumni = await res.json();

  return {
    props: {
      alumni,
    },
  };
}
