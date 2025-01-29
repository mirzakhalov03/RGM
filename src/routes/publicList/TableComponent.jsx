import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/uz"; // Import Uzbek locale
import { useTranslation } from "react-i18next";

dayjs.locale("uz"); // Set locale to Uzbek

// Manually map Cyrillic Uzbek months to Latin Uzbek months
const monthMap = {
  "янв": "Yan", "фев": "Fev", "мар": "Mar", "апр": "Apr",
  "май": "May", "июн": "Iyun", "июл": "Iyul", "авг": "Avg",
  "сен": "Sen", "окт": "Okt", "ноя": "Noy", "дек": "Dek"
};

const convertToLatin = (cyrillicDate) => {
  return cyrillicDate.replace(
    /(янв|фев|мар|апр|май|июн|июл|авг|сен|окт|ноя|дек)/g,
    (match) => monthMap[match] || match
  );
};

const TableComponent = ({ data }) => {
  const { t } = useTranslation();

  // Sort appointments by nearest date & time
  const sortedData = [...(data || [])].sort((a, b) => {
    const dateA = dayjs(a.booking_date);
    const dateB = dayjs(b.booking_date);

    if (dateA.isBefore(dateB)) return -1;
    if (dateA.isAfter(dateB)) return 1;

    // If dates are the same, sort by time
    const timeA = dayjs(a.start_time, "HH:mm");
    const timeB = dayjs(b.start_time, "HH:mm");

    return timeA.isBefore(timeB) ? -1 : 1;
  });

  return (
    <div className="p-4">
      <h1 className="font-semibold text-[--headline] text-center pt-[10px] pb-[20px] text-[26px]">
        Online Navbat Ro'yxati
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-sky-100">
              <th className="py-2 px-4 border-b w-1/12">No</th>
              <th className="py-2 px-4 border-b w-4/12">{t("name")}</th>
              <th className="py-2 px-4 border-b w-3/12">{t("date")}</th>
              <th className="py-2 px-4 border-b w-2/12">{t("time")}</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => {
              const bookingDate = dayjs(row.booking_date);
              const today = dayjs().startOf("day");
              const tomorrow = today.add(1, "day");

              let formattedDate = convertToLatin(bookingDate.locale("uz").format("MMM D"));

              if (bookingDate.isSame(today, "day")) {
                formattedDate = (
                  <span className="bg-[#32CD32] text-white px-2 py-1 rounded-md">
                    Bugun
                  </span>
                );
              } else if (bookingDate.isSame(tomorrow, "day")) {
                formattedDate = (
                  <span className="border border-[#32CD32] bg-[#32cd3214] text-[#32CD32] px-2 py-1 rounded-md">
                    Ertaga
                  </span>
                );
              }

              return (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b text-center">{index + 1}</td>
                  <td className="py-3 px-4 border-b text-center">
                    {row.customer_name}
                  </td>
                  <td className="py-3 px-4 border-b text-center">{formattedDate}</td>
                  <td className="py-3 px-4 border-b text-center">
                    {row.start_time?.slice(0, 5)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
