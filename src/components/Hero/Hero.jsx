import React from "react";
import "./style.scss";
import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">
        Проектирование и установка систем видеонаблюдения
      </h1>
      <p className="hero__text">Защитите свой бизнес от неожиданных сбоев!</p>
      <button className="hero__btn">Узнать больше</button>
      <img src={heroImg} alt="" className="hero__img" />
    </section>
  );
};

export default Hero;
