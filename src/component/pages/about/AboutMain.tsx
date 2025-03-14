"use client";
import Image from "next/image";
import scss from "./AboutMain.module.scss";
import aboutImg from "../../assets/images/about/aboutHistoryImg.jpg";
const AboutMain = () => {
  return (
    <section className={scss.AboutMain}>
      <div className="container">
        <div className={scss.content}>
          <h1>About Tork Ash</h1>
          <h6>
            A leading manufacturer of automatic machines for filling gas
            cylinders with a commitment to precision, safety, and innovation.
          </h6>
          <div className={scss.aboutContent}>
            <div className={scss.aboutStory}>
              <h5>OUR STORY</h5>
              <h2>Leading the Gas Industry Forward</h2>
              <div className={scss.description}>
                <h6>
                  Tork Ash is a leading manufacturer of automatic machines for
                  filling gas cylinders. We create reliable, high-precision, and
                  safe systems that ensure efficient and accident-free filling
                  of cylinders of various capacities.
                </h6>
                <h6>
                  Founded in 2005, we've grown from a small engineering firm to
                  an international player in the gas cylinder automation
                  industry. Our commitment to innovation and safety has made us
                  a trusted partner for companies worldwide.
                </h6>
                <h6>
                  We specialize in developing comprehensive solutions that
                  optimize the entire gas cylinder filling process, from initial
                  setup to quality control and distribution.
                </h6>
              </div>
            </div>
            <Image src={aboutImg} alt="" width={400} height={200} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
