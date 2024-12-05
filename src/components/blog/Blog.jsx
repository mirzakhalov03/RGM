import React from 'react'
import Post from '../post/Post'
import './blog.scss'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import post1img from '../../img/allergy.jpg'
import post2img from "../../img/ear_cleaning.jpg"
import post3img from "../../img/easy_breathing.jpg"
import Aos from 'aos'
import "aos/dist/aos.css"


const Blog = () => {
  const {t} = useTranslation();

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='w-full mt-[100px]'>
        <div className="container">
            <h2 className='h2-titles'>{t("blog_headline")}</h2>
            <div data-aos="fade-up" className='blogMob wrapper py-[50px] w-full items-center justify-center gap-[30px] '>
                <Post img={post1img} title={t("post1_Title")} text={t("post1_TextP1")} date={"02.12.2024"} id={1}/>
                <Post img={post3img} title={t("post3_Title")} text={t("post3_TextP1")} date={"02.12.2024"} id={3}/>
                <Post img={post2img} title={t("post2_Title")} text={t("post2_TextP1")} date={"02.12.2024"} id={2} />
            </div>
        </div>
    </div>
  )
}

export default Blog