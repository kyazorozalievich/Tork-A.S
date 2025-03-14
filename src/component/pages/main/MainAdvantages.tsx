"use client";
import Image from "next/image";
import scss from "./MainAdvantages.module.scss";
import { MdSwipeRight } from "react-icons/md";

const MainAdvantages = () => {
  return (
    <section className={scss.MainAdvantages}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <h5>WHY CHOOSE US</h5>
            <h1>Our Advantages</h1>
            <p>
              At Tork Ash, we pride ourselves on delivering industry-leading
              solutions that set the standard for quality, precision, and
              reliability.
            </p>
            <div className={scss.left__cards}>
              <div className={scss.left__card}>
                <div className={scss.icon}>
                  <MdSwipeRight />
                </div>
                <h6>High Precision</h6>
                <p>
                  Achieve minimal gas loss with our high-precision filling
                  systems, ensuring maximum safety and efficiency.
                </p>
              </div>
              <div className={scss.left__card}>
                <div className={scss.icon}>
                  <MdSwipeRight />
                </div>
                <h6>High Precision</h6>
                <p>
                  Achieve minimal gas loss with our high-precision filling
                  systems, ensuring maximum safety and efficiency.
                </p>
              </div>
              <div className={scss.left__card}>
                <div className={scss.icon}>
                  <MdSwipeRight />
                </div>
                <h6>High Precision</h6>
                <p>
                  Achieve minimal gas loss with our high-precision filling
                  systems, ensuring maximum safety and efficiency.
                </p>
              </div>
              <div className={scss.left__card}>
                <div className={scss.icon}>
                  <MdSwipeRight />
                </div>
                <h6>High Precision</h6>
                <p>
                  Achieve minimal gas loss with our high-precision filling
                  systems, ensuring maximum safety and efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className={scss.right}>
            <Image
              src="https://i.pinimg.com/736x/58/76/cb/5876cb293557d7e42f1a2aedbcaba616.jpg"
              alt="img"
              width={550}
              height={700}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainAdvantages;
