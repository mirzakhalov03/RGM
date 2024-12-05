import { GiArchiveRegister } from "react-icons/gi";
import React, { useState } from 'react';
import './lineup.scss';
import { useTranslation } from 'react-i18next';
import { ConfigProvider, DatePicker, Divider, Input } from "antd";
import Footer from "../../components/footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'moment/locale/uz'; 
import locale from 'antd/locale/uz_UZ';  // Ant Design Uzbek locale

const LineUp = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        selectedTime: "",
        selectedDate: "",
        fullName: "",
        mobileNumber: "",
    });

    const resetForm = () => {
        setFormData({
            selectedTime: "",
            selectedDate: "",
            fullName: "",
            mobileNumber: "",
        });
    };

    const handleTimeSelect = (time) => {
        setFormData((prevData) => ({ ...prevData, selectedTime: time }));
    };

    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({ ...prevData, [field]: value }));
    };

    const handleDateChange = (date, dateString) => {
        setFormData((prevData) => ({ ...prevData, selectedDate: dateString }));
    };

    const disabledDate = (current) => {
        return current && current.day() === 0; // Disable Sundays
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.selectedTime || !formData.selectedDate) {
            alert(t("lineUp_chooseTimeError"));
            return;
        }

        const FormattedLineUp = `
            <b>Mijoz:</b> <i>${formData.fullName}</i>\n<b>Sana:</b> <i>${formData.selectedDate}</i>\n<b>Vaqt:</b> <i>${formData.selectedTime}</i>\n<b>Tel:</b> <i>+998 ${formData.mobileNumber}</i>
        `;

        try {
            const response = await fetch(import.meta.env.VITE_URL_LINEUP_API_BOT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: import.meta.env.VITE_URL_LINEUP_CHAT_ID,
                    parse_mode: "html",
                    text: FormattedLineUp,
                }),
            });

            const responseData = await response.json(); 

            if (!response.ok) {
                console.error('Error response:', responseData);
                throw new Error(t("lineUp_registrationFailed"));
            }

            console.log('Success response:', responseData);

            toast.success(t("lineUp_registrationSuccess"));
            resetForm();

        } catch (error) {
            toast.error(t("lineUp_registrationFailed"));
        }
    };

    return (
        <>
            <div className='lineup'>
                <div className="container">
                    <h2 className='h2-titles'>{t("heroBtn1")}</h2>
                    <div className="lineup_wrapper">
                        <div className="lineupSide times">
                            <h3 className='text-center'>{t("lineUp_available")}</h3>
                            <small className='block text-center text-[gray]'>({t("lineUp_timeSmall")})</small>
                            <div className="flex items-center sm:justify-center pt-2">
                                <ConfigProvider locale={locale}>
                                    <DatePicker
                                        onChange={handleDateChange}
                                        disabledDate={disabledDate}
                                        className="custom-datepicker border-2 border-[limegreen]"
                                    />
                                </ConfigProvider>
                            </div>
                            <div className="times_wrapper">
                                {["13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"].map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => handleTimeSelect(time)}
                                        className={`time_tag sm:hover:scale-105 ${formData.selectedTime === time ? "chosen" : ""}`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                            <br />
                            <h3 className='text-center'>{t("lineUp_register")}</h3>
                            <form className="forms_wrapper" onSubmit={handleSubmit}>
                                <span>
                                    <label className='block text-left text-[#00000088]'>
                                        <small><span className='text-[10px] text-[crimson]'>*</span>{t("lineUp_registerName")}</small>
                                    </label>
                                    <Input
                                        placeholder="Full Name"
                                        required
                                        className='mb-[15px] nameInput'
                                        value={formData.fullName}
                                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                                    />
                                </span>
                                <span>
                                    <label className='block text-left text-[#00000088]'>
                                        <small><span className='text-[10px] text-[crimson]'>*</span>{t("lineUp_registerMobile")}</small>
                                    </label>
                                    <Input
                                        maxLength={9}
                                        addonBefore="+998"
                                        required
                                        placeholder="(xx)-xxx-xx-xx"
                                        className='mb-[10px] phoneInput'
                                        value={formData.mobileNumber}
                                        onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                                    />
                                </span>
                                <br />
                                <button className="sm:hover:text-[--softBlue]" type="submit"><GiArchiveRegister className="" />{t("lineUp_registerBtn")}</button>
                            </form>
                        </div>
                        <Divider><b>{t("lineUp_importantTitle")}</b></Divider>
                        <p className="mb-1">- {t("lineUp_important1")}</p>
                        <p className="mb-1">- {t("lineUp_important3")}</p>
                        <p className="mb-1">- {t("lineUp_important4")}</p>
                        <p className="mb-1">- {t("lineUp_important5")}</p>
                        <p className="mb-1">- {t("lineUp_important6")} <a href="https://t.me/+GhpK0PHEeIdiZWJi" className="ml-3 sm:hover:text-[--softBlue] sm:hover:bg-[white] px-2 py-1 bg-sky-400 text-white rounded-lg" target="_blank">Telegram</a></p>
                        <p className="mt-4 text-center p-1 bg-[#ffffff8a] text-[crimson] rounded-lg"><b> {t("lineUp_important2")}</b></p>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default LineUp;
