'use client'

import React,{useState ,useEffect} from 'react'
import './style.css'
import Image from 'next/image';

export interface PostProps{
    _id:string;
    img: string;
    category: string;
    date:string;
    title:string;
    brief:string;
    avatar:string;
    author:string;
  
  }
  
  const initialPost = {
    img: '',
    category: '',
    date: '',
    title: '',
    brief: '',
    avatar: '',
    author: ''
  };

export default function PostItem({params}:{params:{ id:string }}) {
    const id: string=params.id;

    const [item, setItem] = useState(initialPost);

    const getSinglePostData = () =>{
        fetch(`/api/postitems/${id}`)
        .then(res=> res.json())
        .then(data=> setItem(data))
        .catch(e=> console.log(e.message));
    };

    useEffect(()=>{
        getSinglePostData();
    },[]);

    return (
       <main id='main'>
        <section className='single-post-content'>
        <div className="container">
            <div className="row">
                <div className="col-md-9 post-content">
                   <div className="single post">
                    <div className="post-meta">
                        <span className="date">{item.category}</span>
                        <span className='mx-1'>
                        <i className="bi bi-dot"></i>
                        </span>
                        <span>{new Date (item.date).toLocaleDateString('en-US')}</span>
                    </div>
                    <h1 className='mb-5'>{item.title}</h1>
                    <p>
                        <span className='firstcharacter'>
                          {item.brief && item.brief.charAt(0)}
                        </span>
                        {item.brief && item.brief.substring(1)}
                    </p>
                    <p>
                    Working from home has become increasingly popular
                    offering flexible opportunities for people seeking part-time jobs. 
                    Some of the most in-demand roles include freelance writing, virtual assistance, data entry, 
                    customer service, and online tutoring. These jobs allow you to set your own hours and work from the
                    comfort of your home, making them ideal for those balancing other commitments such as studies or caregiving. 
                    With the growth of remote work platforms, finding part-time roles in various fields like social media management, content creation, and 
                    digital marketing has never been easier
                    </p>
                    <figure className='my-4'>
                        <Image 
                        src={`/${item.img}`} 
                        alt=''
                        className='img-fluid'
                        width={100}
                        height={1000}
                        layout='responsive'
                        />
                        {/* <img src={`/${item.img}`} alt='' className='img-fluid'/> */}
                        <figcaption>
                        Work From Home Part-Time Jobs You Can Do Now: Explore flexible opportunities like freelance writing, virtual assistance, data entry, online tutoring, and social media management, allowing 
                        you to work remotely while balancing other commitments.  
                        </figcaption>
                    </figure>
                    <p>
                    <p>In today digital age, there are countless opportunities for part-time work that can be done from home. Many companies are offering roles like virtual assistance, which involves managing schedules, emails, and other administrative tasks for businesses. 
                    This flexible job allows you to work remotely while providing essential support to teams or entrepreneurs.
                    </p>

                    <p>
                    Another popular option is freelance writing or content creation. If you have a knack for writing, you can take up assignments from blogs, websites,
                    or social media channels. Freelance platforms make it easy to connect with clients in need of well-written content, making this a rewarding part-time career that 
                    you can manage from your own home.
                    </p>

                    <p>
                    Data entry is another in-demand part-time job that can be done from home.
                    Companies often outsource data entry tasks to remote workers,
                    </p>
                    <p>
                    Lastly, online tutoring has become a booming field, especially with the rise of e-learning platforms. If you are knowledgeable in subjects like math, 
                    science, or languages, you can offer tutoring services to students around the world. This is a flexible and fulfilling way to use your skills while working from home  
                    </p>
                    </p>
                    </div> 
                </div>
            </div>
        </div>
        </section>
       </main>
    );
  
}