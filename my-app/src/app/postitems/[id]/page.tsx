'use client'

import React, { useState, useEffect } from 'react'
import './style.css'
import Image from 'next/image';
import Preloader from '@/components/Preloader';
import SidePostItem from '@/components/SidePostItem';

export interface PostProps {
  _id: string;
  img: string;
  category: string;
  date: string;
  title: string;
  brief: string;
  avatar: string;
  author: string;
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

export default function PostItem({ params }: { params: { id: string } }) {
  const id: string = params.id;

  const [item, setItem] = useState(initialPost);
  const [items, setItems] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  const tabsData = [
    { id: 1, name: 'Popular', active: true },
    { id: 2, name: 'Trending', active: false },
  ];

  const [tabs, setTabs] = useState(tabsData);

  const handleTabActive = (id: number): void => {
    setTabs(tabs.map(tab => ({
      ...tab,
      active: tab.id === id
    })));
  };

  const getSinglePostData = async () => {
    try {
      const res = await fetch(`/api/postitems/${id}`);
      const data = await res.json();
      setItem(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getItemsData = async () => {
    try {
      const res = await fetch(`/api/postitems`);
      const data = await res.json();
      setItems(data);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSinglePostData();
    getItemsData();
  }, [id]);

  return (
    <main id="main">
      <section className="single-post-content">
        <div className="container">
          <div className="row">
            <div className="col-md-9 post-content">
              {loading ? (
                <Preloader />
              ) : (
                <div className="single post">
                  <div className="post-meta">
                    <span className="date">{item.category}</span>
                    <span className="mx-1">
                      <i className="bi bi-dot"></i>
                    </span>
                    <span>{new Date(item.date).toLocaleDateString('en-US')}</span>
                  </div>
                  <h1 className="mb-5">{item.title}</h1>
                  <p>
                    <span className="firstcharacter">
                      {item.brief && item.brief.charAt(0)}
                    </span>
                    {item.brief && item.brief.substring(1)}
                  </p>
                  <figure className="my-4">
                    {/* <Image
                      src={`/${item.img}`}
                      alt=""
                      className="img-fluid"
                      width={100}
                      height={100}
                      layout='responsive'
                      /> */}
                      <img src={`/${item.img}`} alt='' className='img-fluid' />
                    <figcaption>
                      Work From Home Part-Time Jobs You Can Do Now
                    </figcaption>
                  </figure>
                  <p>Working from home has become increasingly popular...</p>
                  {/* Add your additional content here */}
                </div>
              )}
            </div>
            <div className="col-md-3">
              <div className="aside-block">
                <ul className="nav nav-pills custom-tab-nav mb-4">
                  {tabs.map(tab => (
                    <li className="nav-item" key={tab.id}>
                      <button
                        className={`nav-link ${tab.active ? 'active' : ''}`}
                        onClick={() => handleTabActive(tab.id)}
                      >
                        {tab.name}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="tab-content">
                  <div className={`tab-pane fade ${tabs[0].active ? 'show active' : ''}`}>
                    {items.slice(0, 6).map((item: PostProps) => (
                      <SidePostItem key={item._id} item={item} />
                    ))}
                  </div>

                  <div className={`tab-pane fade ${tabs[1].active ? 'show active' : ''}`}>
                    {items.slice(6, 12).map((item: PostProps) => (
                      <SidePostItem key={item._id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
              <div className='aside block'>
                <h3 className='aside-title'>Video</h3>
                 <div className='video-post'></div>

                  <a
                  target='blank'
                  href='https://www.youtube.com/watch?v=uHNS_ZhI62c'
                  className=' link-video'
                  >
                    <span className='bi-play-fill'></span>
                    <img
        src='/assets/img/post-landscape-3.jpg'
        alt='Landscape'
        className='img-fluid'
         />

                  </a>
                  
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
