import React from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../../db/Posts'
import './singlepost.scss'
import Footer from '../../components/footer/Footer'
import { useTranslation } from 'react-i18next'
import { Divider } from 'antd'




const SinglePost = () => {
    const {id} = useParams()
    const {t} = useTranslation()

    const post = posts.find((post) => post.id === id);

    if(!post){
        <h1 className='text-center mt-[100px] text-3xl font-bold text-[--headline]'>No post</h1>
    }


  return (
    <>
        <div className='singlepost'>
            <div className="container">
                <small className='text-center block'>{t("post_warning")}</small>
                <small className='text-center block'>{t("post_warning2")}</small>
                <h2 className='h2-titles'>{post.title}</h2>
                <div className="singlepost_wrapper">
                    <div className='content '>
                        <span className='flex flex-col mb-[12px]'>
                            <h1 className='text-[24px] text-[#2D150D] leading-tight'><b>{post.title}</b></h1>
                            <Divider className='m-0'/>
                            <span className='flex justify-between'>
                                <small className='text-[#6b6b6b]'>Muallif: <i>{post.author}</i></small>
                                <small className='text-[#6b6b6b]'>Tahrirlandi: <i>{post.date}</i></small>
                            </span>
                        </span>
                        <p>{post.content1}</p>
                        <br />
                        <p>{post.content2}</p>
                        <br/>
                        <p>{post.content3}</p>
                    </div>
                    <div className='content_images'>
                        <img src={post.image} alt="" />
                    </div>
                </div>
                <div className='singlepost_btnWrapper'>
                    <a href='https://t.me/rgm_clinic' target='_blank'>Bizni <span className='underline'>Telegramda</span> Kuzating</a>
                </div>
            </div>
            
        </div>
        <Footer/>
    </>
  )
}

export default SinglePost