import "./style.scss";
import React from "react";

const Question = () => {
  return (
    <section className="question">
      <div className="container">
        <h3 className="question__title">
          СПРОЕКТИРУЕМ СИСТЕМУ ВИДЕОНАБЛЮДЕНИЯ
        </h3>

        <form className="question__form">
          <strong className="question__form-title">
            Решим Вашу IT - задачу
          </strong>

          <div className="question__inputs">
            <div className="question__field">
              <label htmlFor="name">Меня зовут</label>
              <input id="name" type="text" placeholder="Ваше имя" />
            </div>

            <div className="question__field">
              <label htmlFor="phone">Телефон</label>
              <input id="phone" type="text" placeholder="Ваш номер телефона" />
            </div>
          </div>

          <p className="question__note">
            Мне нужна система видеонаблюдения для
          </p>

          <textarea
            className="question__textarea"
            placeholder="Пожалуйста, опишите направление Вашего бизнеса."
          ></textarea>

          <button type="submit" className="question__btn">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Question;
