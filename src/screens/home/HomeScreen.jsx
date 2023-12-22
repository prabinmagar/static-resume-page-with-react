import {
  BackgroundEffect,
  CertificateAward,
  Cursor,
  Education,
  Experience,
  Header,
  Hobbies,
  Skill,
} from "../../components";

const HomeScreen = () => {
  return (
    <div className="page-container">
      <Header />
      <Experience />
      <Education />
      <Skill />
      <CertificateAward />
      <Hobbies />

      {/* Effects */}
      <Cursor />
      <BackgroundEffect />
    </div>
  );
};

export default HomeScreen;
