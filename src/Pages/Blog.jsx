import React from 'react'
//styles
import '../styles/Blog.css'

//images
import dot from '../images/dot.svg';
import side from '../images/sideimage.jpg';

//blog data
const blogs = [
    {
        id: 1, 
        author: "Paul Ducklin",
        blogimage: 'blogimage.jpg',
        date: "23rd March 2022", 
        title: "Serious Security: DEADBOLT – the ransomware that goes straight for your backups", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim ornare odio ultrices quis enim mauris id dictumst amet. Leo cras tempus in in quam. Odio risus ultrices ut ut turpis nulla porta lacus. Amet molestie ut pretium sed dui ullamcorper. Nec, vel porttitor posuere arcu, placerat at arcu. Porttitor porta congue sociis nunc enim diam. Aenean donec nisl et elit turpis auctor massa.....",
        commenter: "Amarachi Ag",
        ridiculous: "This is ridiculous",
        commenterimage: "small-image.jpg"
    },
    {
        id: 2, 
        author: "Richard Tate",
        blogimage: 'blogimage.jpg',
        date: "23rd March 2022", 
        title: "Serious Security: DEADBOLT – the ransomware that goes straight for your backups", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim ornare odio ultrices quis enim mauris id dictumst amet. Leo cras tempus in in quam. Odio risus ultrices ut ut turpis nulla porta lacus. Amet molestie ut pretium sed dui ullamcorper. Nec, vel porttitor posuere arcu, placerat at arcu. Porttitor porta congue sociis nunc enim diam. Aenean donec nisl et elit turpis auctor massa.....",
        commenter: "Amarachi Ag",
        ridiculous: "This is ridiculous",
        commenterimage: "small-image.jpg"
    }
]

const sideblog = [
    {id: 1, author: "Frank Korg", content: "Alleged Kaseya ransomware attacker arrives in Texas for trial", date: "23rd March 2022", image:"sideimageone.jpg"},
    {id: 2, author: "Abel Johanns", content: "OpenSSL patches infinite-loop DoS bug in certificate verification", date: "23rd March 2022", image:"sideimagetwo.jpg"},
    {id: 3, author: "Dowell McPherson", content: "S3 Ep74: Cybercrime busts, Apple patches, Pi Day, and disconnects...", date: "23rd March 2022", image:"sideimagethree.jpg"},
    {id: 4, author: "Phil Abraham", content: "Beware bogus Betas – cryptocoin scammers abuse Apple’s...", date: "23rd March 2022", image:"sideimagefour.jpg"},
    {id: 5, author: "Frank Korg", content: "CISA warning: “Russian actors bypassed 2FA” – what happened...", date: "23rd March 2022", image:"sideimagefive.jpg"},
    {id: 6, author: "George Run", content: "Apple patches 87 security holes – from iPhones and Macs to Wind...", date: "23rd March 2022", image:"sideimagesix.jpg"},
]


function Blog() {
  return (
    <div className='gcet__blog '>
        <div className='header-blog-color'>
            
        </div>
        <div className="gcet__blog-hero marginp">
            <h1>Get Informed!</h1>
            <p>Read the latest news here on our platform</p>
            <div className="gcet__blog-search">
                <input type="text" placeholder='Search for keywords or trends' />
                <button>Search</button>
            </div>
        </div>
        <div className="gcet__blog-container marginp">
            <div className="gcet__blog-main">
                {blogs.map(blog => (
                <div key={blog.id} className="gcet__blog-main_item">
                    <div className='blog-main_img'><img src={`/blog-image/${blog.blogimage}`} alt="" /></div>
                    <div className="blog-main_author">
                        <p>{blog.author}</p>
                        <p>{blog.date}</p>
                    </div>
                    <div className="blog-main_title"><h2>{blog.title}</h2></div>
                    <p className='blog-main_content'>{blog.content}<span>Read more</span></p>
                    <div className="blog-main_authorimg">
                        <img src={`/commenter-image/${blog.commenterimage}`}  alt="" />
                        <p>{blog.commenter}</p>
                        <span><img src={dot} alt="" /></span>
                        <p className='ridc'>{blog.ridiculous}</p>
                    </div>
                </div>
                ))}   
            </div>
            <div className="gcet__blog-side">
                {sideblog.map(sideblog => (
                    <div key={sideblog.id} className="gcet__blog-side_item">
                    <div className="gcet__blog-side_item-img"><img src={`/side-image/${sideblog.image}`} alt="" /></div>
                    <div className="gcet__blog-side_content">
                        <div className="blog-main_author">
                            <p>{sideblog.author}</p>
                            <p>{sideblog.date}</p>
                        </div>
                        <div className="gcet__blog-side_content-text">
                            <p>{sideblog.content}</p>
                        </div>
                    </div>
                </div>
                ))} 
            </div>
        </div>
    </div>
  )
}

export default Blog