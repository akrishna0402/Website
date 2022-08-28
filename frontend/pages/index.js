import React, { useEffect, useState } from "react";
import s from "../styles/Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import navigation from "../data";
import Carousels from "../components/Carousel/Carousels";
import Tiltle from "../components/Title";
import Loader from "../components/loader/Loader";

export default function Home({ sponsers }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://13.127.85.83/api/gallery/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (!data) return <p>Backend have some problem check your api</p>;

  return isLoading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div>
      <Header items={navigation} navPosition="right" home={true} />
      <section className={s.hero}>
        <div className={s.heroImageContainer}></div>
      </section>
      <div className={s.container}>
        <section className={s.about}>
          <Tiltle title="ABOUT US" font="36" margin="30" />
          <p>
            The Indian Society for Technical Education(ISTE) is the leading
            National Professional non-profit making Society for the Technical
            Education System in our country with the motto of Career Development
            of Teachers and Personality Development of Students and overall
            development of our Technical Education System operating in
            association with All India Council for Technical Education (AICTE)
            and other International Projects.
            <br /> <br />
            ISTE NIT Durgapur took birth on the auspicious occasion of Saraswati
            Puja Day way back in February, 1995 in our erstwhile called REC
            Durgapur and is the Oldest Student Chapter of Eastern
            India. Additionally, ISTE NIT Durgapur nominates projects and papers
            for the Indian Journal of Technical Education (IJTE) published by
            the ISTE HQ, New Delhi on quarterly basis with the aim to provide an
            appropriate platform presenting well considered, meaningful, constructively thought provoking, non-political
            and non-conventional but critically analysing and synthesizing
            present and future aspects of the technical education system
            supported with meaningful suggestions for solutions, refinement and
            innovation.
          </p>
        </section>
        <section className={s.gallery}>
          <Tiltle title="PHOTO GALLERY" font="36" margin="45" />
          <div className={s.Carousel}>
            <Carousels images={data} />
          </div>
        </section>

        <section className={s.faculty}>
          <Tiltle title="FACULTY ADVISORS" font="34" margin="30" />
          <div className={s.wrapper}>
            <div className={`${s.profileCard}`}>
              <div className={s.profileCard__img}>
                <img src="/fa2.png" alt="profile card" />
              </div>
              <div className={`${s.profileCard__cnt} ${s.jsProfileCnt}`}>
                <div className={s.profileCard__name}>
                  Dr. Anita Pal <br />{" "}
                  <span className={s.profileCard__name__designation}>
                    {" "}
                    CHIEF-FACULTY ADVISOR{" "}
                  </span>
                </div>
                <div className={s.profileCard__txt}>
                  {/* Get abuzz and shroud yourself with knowledge to extinguish
                  moribundity,as knowledge is a wing with which one can fly to
                  the heaven. */}
                </div>
              </div>
            </div>
            <div className={`${s.profileCard}`}>
              <div className={s.profileCard__img}>
                <img src="rowdra.png" alt="profile card" />
              </div>
              <div className={`${s.profileCard__cnt} ${s.jsProfileCnt}`}>
                <div className={s.profileCard__name}>
                  Prof. Rowdra Ghatak <br />
                  <span className={s.profileCard__name__designation}>
                    {" "}
                    FACULTY ADVISOR{" "}
                  </span>
                </div>
                <div className={s.profileCard__txt}>
                  {/* Nothing in this world can take the place of persistence.
                  Talent will not: nothing is more common than unsuccessful men
                  with talent. Genius will not; unrewarded genius is almost a
                  proverb. Education will not: the world is full of educated
                  derelicts. Persistence and determination alone are omnipotent. */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={s.sponsers}>
          <Tiltle title="OUR SPONSERS" font="36" margin="60" />
          <div className={s.slider}>
            <div className={s.slideTrack}>
              {sponsers.map((data) => {
                return (
                  <div key={data.id} className={s.slide}>
                    <img src={data.Image} height="150" width="150" alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch("http://13.127.85.83/api/sponsers/");
  const sponsers = await res.json();

  // By returning { props: { events } }, the component
  // will receive `events` as a prop at build time
  return {
    props: {
      sponsers,
    },
  };
}
