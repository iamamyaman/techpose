import React,{useEffect,useState} from "react";
import "../styles/home.css";
import {BsThreeDots} from "react-icons/bs";
import logo from "../../src/logo.jpg";
import postImage from "../../src/post-image.jpg";
import {AiOutlineLike,AiFillHeart,AiFillLike,AiFillCaretDown} from "react-icons/ai";
import {GoComment} from "react-icons/go"
import {RiShareForwardLine} from "react-icons/ri";
import userImage from "../../src/user.jpg";


const Home = ()=>{
    const [data, setData] = useState()
    useEffect(function () {
      const url = 'http://localhost:8000/api/posts';
      fetch(url, {
         method: 'GET',
         headers: {
             'Content-Type': 'application/json;charset=utf-8'
         }
      })
      .then(res => res.json())
      .then(data=>setData(data[0]))
      .catch(err=>console.log(err))
  }, []);
  console.log(data);
  

    return(
        <div className="Homepage">
           <div className="main-area">
               <div className="post">
                   <div className="top-section">
                       <div className="page-info">
                           <div className="profile-pic">
                               <img src={logo}/>
                           </div>
                           <div className="info">
                               <p>{data?.pageName}</p>
                               <span>Sponsored</span>
                           </div>
                       </div>
                       <BsThreeDots/>
                   </div>
                   <div className="caption">
                      {data?.postCaption}
                   </div>
                   <div className="post-image">
                       <img src = {postImage}/>
                   </div>
                   <div className="call-to-action">
                       <div className="cta-link">
                           <p style={{fontSize:10,color:"#636363"}}>GIVEINDIA.ORG</p>
                           <p style={{fontSize:15,color:"black",fontWeight:"bold"}}>Help 34 abondoned children</p>
                           <p style={{fontSize:12,color:"#636363"}}>Not affiliated with facebook</p>
                       </div>
                       <div className="cta-button">
                           <button>Donate now</button>
                       </div>
                   </div>
                   <div className="social-count">
                       <div className="likes-count">
                          <div style={{fontSize:17,display:"flex", gap:"3px",alignItems:"center"}}>
                            <AiFillLike style={{backgroundColor:"#1281F7",color:"white",padding:"3px",borderRadius:"50%"}}/>
                            <AiFillHeart style={{backgroundColor:"red",color:"white",padding:"3px",borderRadius:"50%",marginLeft:"-5px"}}/>
                            <p style={{fontSize:13,color:"gray"}}>2.1K</p>
                          </div>
                       </div>
                       <div className="comments-count" style={{fontSize:13,color:"gray"}}>
                           33 Comments 101 Shares
                       </div>
                   </div>
                   <div className="engage-section">
                       <div className="likes" style={{display:"flex",justifyContent:"center",alignItems:"center",flex:3,fontSize:"14px",fontWeight:"bold",color:"#6f6f70",gap:"3px"}}>
                         <AiOutlineLike style={{fontSize:16}}/><p>Like</p>
                       </div>
                       <div className="comments" style={{display:"flex",justifyContent:"center",alignItems:"center",flex:3,fontSize:"14px",fontWeight:"bold",color:"#6f6f70",gap:"3px"}}>
                         <GoComment style={{fontSize:16}}/><p>Comment</p>
                       </div>
                       <div className="share" style={{display:"flex",justifyContent:"center",alignItems:"center",flex:3,fontSize:"14px",fontWeight:"bold",color:"#6f6f70",gap:"3px"}}>
                        <RiShareForwardLine style={{fontSize:16}}/>Share
                       </div>
                       <div className="user" style={{display:"flex",justifyContent:"center",alignItems:"center",flex:1}}>
                        <img 
                          src={userImage}
                          style={{borderRadius:"50%",width:23}}
                        />
                        <AiFillCaretDown style={{fontSize:12,color:"gray"}}/>
                       </div>
                   </div>

               </div>
           </div>
        </div>
    )
}

export default Home;