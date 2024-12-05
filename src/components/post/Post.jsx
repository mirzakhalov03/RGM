import { FaAngleDoubleRight } from "react-icons/fa"; 
import React from 'react'
import { Link } from "react-router-dom";

const Post = ({img, title, text, date, id}) => {
  return (
    <div className='postMob post p-5 '>
        <div className='title'>
            <div className=' flex justify-between items-center'>
                <div className='postAvatarMob  rounded-full bg-[--yellow] flex justify-center items-center p-1'>RGM</div>
                <div className="flex justify-between w-[82%] items-center">
                    <div className='postTitleMob'>
                        <h3 className="text-xl font-semibold leading-none text-[--headline] text-white">{title}</h3>
                        <small className=" text-[--lightP]  ">{date}</small>
                    </div>
                    <Link to={`/post/${id}`}  className='postIconMob rounded-full flex items-center justify-center '>
                        <FaAngleDoubleRight className="text-[20px]" />
                    </Link>
                </div>
            </div>
        </div>
        <div className='context'>
            <div className='py-3 pb-5 '>
                <p className="text-[--lightgray]">{text}</p>
            </div>

        </div>
        <div className='photo_container'>
            <img className="" src={img} alt="" />
        </div>
    </div>
  )
}

export default Post
