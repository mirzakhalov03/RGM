import { BsPersonCircle } from "react-icons/bs"; 
import React, { useState } from "react";
import { FaQuoteLeft, FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Input, Divider } from "antd";
import "./feedback.scss";

const { TextArea } = Input;

const Reviews = () => {
  const { t } = useTranslation();
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackUser, setFeedbackUser] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!feedbackText || !feedbackUser) {
      alert(t("fill_all_fields"));
      return;
    }

    const formattedMessage = `
      <b>Xabar: <i>${feedbackText.charAt(0).toUpperCase() + feedbackText.slice(1)}</i></b>\n\n<b>Ism: <i>${feedbackUser.charAt(0).toUpperCase() + feedbackUser.slice(1)}</i></b>
    `;

    try {
      const response = await fetch(import.meta.env.VITE_URL_FEEDBACK_API_BOT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: import.meta.env.VITE_URL_FEEDBACK_CHAT_ID,
          parse_mode: "html",
          text: formattedMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("Xabar yuborilmadi. Xatolik yuz berdi!");
      }

      alert("Xabaringiz yuborildi");
      setFeedbackText("");
      setFeedbackUser("");
    } catch (error) {
      alert(error.message);
    }
  };

  const FeedbackCard = ({ text, author, date }) => (
    <div className="feedbackCard">
      <div className="py-4 px-8 flex w-full justify-between gap-3">
        <FaQuoteLeft className="feedback-quote" />
        <div className="feedback-content">
          <div className="quote">
            <q>{text}</q>
          </div>
          <br />
          <div className="bottom-quote">
            <div className="author">
              <cite>{author}</cite>
              <small className="block leading-none">{date}</small>
            </div>
            <div className="avatar">
              <BsPersonCircle className="avatar_img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white mt-[100px]">
      <div className="container">
        <h2 className="h2-titles">{t("review_headline")}</h2>
        <div className="feedbackCardWrapper">
          <FeedbackCard
            text="Klinikaga kayfiyatsiz borsangiz ham, yaxshi kayfiyat bilan chiqasiz. Tajribali Shifokorlar, toza klinika, va arzon narxlar – barchaga tavsiya qilaman! 👍"
            author="Abdulbosit Hamidov"
            date={`${t("dateNovember")} 22` }
          />
          <FeedbackCard
            text="Juda ham zo'r klinika barchaga tavsiya qilaman Shifokorlarning barchalari hushmomila, bemorning qulayliklariga alohida etibor berilgan. OMAD 'RGM THE BEST'✅👍🏻👂🏻"
            author="Sardorbek Habibullayev"
            date={`${t("dateDecember")} 5` }
          />
          <FeedbackCard
            text="Bu klinikada juda sifatli hamda hush muomila vrach va hamshiralari bilan alohida maqtovga loyiq. Ozoda shinam eng asosiysi tajribali mutaxassislar tomonidan sizga hizmat koʻrsatiladi "
            author="Islomjonova Mohichehra"
            date={`${t("dateMarch")} 11, 2025` }
          />
        </div>
        <div className="w-full p-[50px] flex items-center justify-center">
          <form
            id="feedbackForm"
            onSubmit={handleFormSubmit}
            className="flex items-center flex-col"
          >
            <h2 className="h2-titles">{t("comment")}</h2>
            <TextArea
              rows={4}
              className="w-[300px] rounded-xl"
              placeholder={t("feedback_text")}
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
            />
            <Input
              className="w-[300px] rounded-xl mt-2"
              placeholder={t("feedback_userName")}
              value={feedbackUser}
              onChange={(e) => setFeedbackUser(e.target.value)}
            />
            <Divider className="w-[300px]" />
            <button
              type="submit"
              className="w-[300px] flex items-center justify-center py-2 border rounded-xl buttonGlow"
            >
              <FaTelegramPlane className="mr-2" />
              {t("send_comment")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
