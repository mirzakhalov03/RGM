import { GiArchiveRegister } from "react-icons/gi";
import React, { useState } from 'react';
import './lineup.scss';
import { useTranslation } from 'react-i18next';
import { ConfigProvider, DatePicker, Divider, Input, message, Select, Spin } from "antd";
import Footer from "../../components/footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'moment/locale/uz'; 
import locale from 'antd/locale/uz_UZ'; 
import axios from "axios"; 

const LineUp = () => {
    const defaultDuration = 30; 
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        selectedTime: "",
        selectedDate: "",
        fullName: "",
        mobileNumber: "",
    });
    const [availableTimes, setAvailableTimes] = useState([]); 
    const [loading, setLoading] = useState(false);

    const excludedTimes = ["09:00", "09:15", "09:30", "9:45", "10:00", "10:15", "10:30", "10:45", "12:00", "12:15", "12:30", "12:45"];

    const resetForm = () => {
        setFormData({
            selectedTime: "",
            selectedDate: "",
            fullName: "",
            mobileNumber: "",
        });
        setAvailableTimes([]);
    };

    const handleTimeSelect = (time) => {
        setFormData((prevData) => ({ ...prevData, selectedTime: time }));
    };

    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({ ...prevData, [field]: value }));
    };

    const handleDateChange = (date, dateString) => {
        setFormData((prevData) => ({ ...prevData, selectedDate: dateString }));
        fetchAvailableSlots(dateString); 
    };

    const disabledDate = (current) => {
        return current && current.day() === 0; 
    };

    const fetchAvailableSlots = async (dateString) => {
        if (!dateString) return;
        setLoading(true); 
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/available-slots/?duration_minutes=${defaultDuration}&date=${dateString}`, {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            });
            const fetchedTimes = response?.data?.data?.available_slots || [];
            const filteredTimes = fetchedTimes.filter((time) => !excludedTimes.includes(time));
            setAvailableTimes(filteredTimes);
        } catch (error) {
            console.error(error);
            toast.error(t("lineUp_slotsFetchError"));
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.selectedTime || !formData.selectedDate) {
            message.error(t("lineUp_chooseTimeError"));
            return;
        }

        try {
            const token = import.meta.env.VITE_ACCESS_TOKEN;
            const response = await fetch(import.meta.env.VITE_BACKEND_API, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    service_name: "General Consulting",
                    customer_name: formData.fullName,
                    customer_contact: formData.mobileNumber,
                    booking_date: formData.selectedDate,
                    start_time: formData.selectedTime,
                    end_time: formData.selectedDate, 
                    duration_minutes: defaultDuration,
                }),
            });

            const responseData = await response.json(); 

            if (!response.ok) {
                console.error('Error response:', responseData);
                throw new Error(t("lineUp_registrationFailed"));
            }

            toast.success(t("lineUp_registrationSuccess"));
            resetForm();

        } catch (error) {
            toast.error(t("lineUp_registrationFailed"));
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_URL_LINEUP_API_BOT}`, {
                chat_id: import.meta.env.VITE_URL_LINEUP_CHAT_ID,
                parse_mode: "html",
                text: `
                    <b>Ro'yhatga olindi:</b>\n\n<b>Mijoz: <i>${formData.fullName}</i></b>\n<b>Sana: <i>${formData.selectedDate}</i></b>\n<b>Vaqt: <i>${formData.selectedTime}</i></b>\n<b>Telefon: <i>${formData.mobileNumber}</i></b>
                `,
            })
        } catch (error) {
            console.error(error);
        }
    };

    const formatPhoneNumber = (value) => {
        const digits = value.replace(/\D/g, ""); 
        const length = digits.length;
    
        if (length <= 2) return digits; 
        if (length <= 5) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`; 
        if (length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2, 5)}-${digits.slice(5)}`; 
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 5)}-${digits.slice(5, 7)}-${digits.slice(7, 9)}`; 
    };
    
    const handlePhoneChange = (e) => {
        const { value } = e.target;
        handleInputChange("mobileNumber", value);
        const formattedValue = formatPhoneNumber(value); 
        if (formattedValue !== value) {
            handleInputChange("mobileNumber", formattedValue); 
        }
    };

    const options = [
        { value: "", label: "Select time", disabled: true }, 
        ...availableTimes.map((time) => ({
            value: time,
            label: time,
        })),
    ];

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
                                {loading ? (
                                    <div className="loading">
                                        <Spin size="large" />
                                    </div>
                                ) : (
                                    <Select
                                        placeholder={t("lineUp_selectTime")}
                                        onChange={handleTimeSelect}
                                        style={{ width: "140px", height: "40px" }}
                                        value={formData.selectedTime}
                                        options={availableTimes.map((time) => ({
                                            value: time,
                                            label: time,
                                        }))}
                                    />
                                )}
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
                                        addonBefore="+998"
                                        maxLength={15} 
                                        required
                                        placeholder="(xx) xxx-xx-xx"
                                        className="mb-[10px] phoneInput"
                                        value={formData.mobileNumber}
                                        onChange={handlePhoneChange}
                                    />
                                </span>
                                <br />
                                <button className="sm:hover:text-[--softBlue]" type="submit"><GiArchiveRegister className="" />{t("lineUp_registerBtn")}</button>
                            </form>
                        </div>
                        <Divider><b>{t("lineUp_importantTitle")}</b></Divider>
                        <p className="mb-1">- {t("lineUp_important1")}</p>
                        <p className="mb-1">- {t("lineUp_important3")}</p>
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
