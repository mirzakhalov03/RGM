import React from 'react'
import './faq.scss'
import Footer from '../../components/footer/Footer'
import Post from '../../components/post/Post'
import post1img from '../../img/allergy.jpg'
import post2img from "../../img/ear_cleaning.jpg"
import post3img from "../../img/easy_breathing.jpg"
import { useTranslation } from 'react-i18next'

const FAQ = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className='w-full faq'>
      <div className="container py-[80px]">
        <h2 className='h2-titles'>Blog</h2>
        <div className='faq_wrapper'>
          <Post img={post1img} title={t("post1_Title")} text={t("post1_TextP1")} date={Post.date} id={1}/>
          <Post img={post3img} title={t("post3_Title")} text={t("post3_TextP1")} date={Post.date} id={3}/>
          <Post img={post2img} title={t("post2_Title")} text={t("post2_TextP1")} date={Post.date} id={2} />
        </div>
      </div>
      
      
    </div>
    <Footer/>
    </>
  )
}

export default FAQ