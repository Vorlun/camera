import "./style.scss";
import React from "react";

const Faq = () => {
  return (
    <section className="faq">
      <div className="container">
        <h3 className="faq__title">Часто задаваемые вопросы</h3>
        <div className="faq-text">
          <h5 className="faq__question">
            За нами будет закреплен какой-нибудь IT специалист ?
          </h5>
        </div>
        <div className="faq-text">
          <h5 className="faq__question">Какие регионы Вы обслуживаете ?</h5>
        </div>{" "}
        <div className="faq-text">
          <h5 className="faq__question">
            Вы можете предоставлять круглосуточную поддержку ?
          </h5>
          <p className="faq__answer">
            Да, мы можем предоставить расширенный график IT обслуживания и
            круглосуточную работу нашей технической поддержки для клиентов.
            Однако мы всегда предупреждаем наших клиентов, что техническая
            поддержка в графике 24/7 сильно удорожает стоимость договора IT
            обслуживания.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
