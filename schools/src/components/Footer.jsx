
import React from "react";
import {Link} from 'react-router-dom'

const Footer = () =>{
    return(
        <footer style={{
            backgroundColor : "#280044",
            padding         :"80px 10%",
            display:"flex"
        }}>
            <div style={{
                width : "100%"
            }}>
                <h2 style={{
                    color:"white",
                    fontWeight:"600",
                    // margin :"10px"
                    marginBottom : "15px"
                }}>CodingOtt Schools</h2>
                <p style={{
                    color: "white",
                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, labore.</p>
            </div>
            <div style={{
                width : "100%"
            }}>
                <h2 style={{
                    color:"white",
                    fontWeight:"600",
                    // margin :"10px"
                    marginBottom : "15px"
                }}>Popular Links</h2>
                <ul style={{
                    padding :0,
                    margin  :0,
                    listStyleType :"none",
                    display :"flex",
                    flexDirection :"column",
                    gap :"0.5rem"
                    // margin : "15px"
                }}>
                    <li><Link to='/' style={{
                        color :'white',
                        textDecoration :"none",
                        
                    }}>Home</Link></li>

                    <li><Link to='/teacher' style={{
                        color :'white',
                        textDecoration :"none",
                        
                    }}>Teacher</Link></li>

                    <li><Link to='/holiday' style={{
                        color :'white',
                        textDecoration :"none",
                    }}>Holoday</Link></li>

                    <li><Link to='/contact-us' style={{
                        color :'white',
                        textDecoration :"none",
                    }}>Contact Us</Link></li>
                </ul>
            </div>
            <div style={{
                width : "100%"
            }}>
                <h2 style={{
                    color:"white",
                    fontWeight:"600",
                    // margin :"10px"
                    marginBottom : "15px"
                }}>Social Media</h2>
                <ul style={{
                    padding :0,
                    margin  :0,
                    listStyleType :"none",
                    display :"flex",
                    flexDirection :"column",
                    gap :"0.5rem"
                    // margin : "15px"
                }}>
                    <li><Link to='/' style={{
                        color :'white',
                        textDecoration :"none",
                        
                    }}>
                        <i className="ri-youtube-fill" style={{marginRight : 10}}></i>
                        Youtube</Link></li>

                    <li><Link to='/teacher' style={{
                        color :'white',
                        textDecoration :"none",
                        
                    }}>
                    <i className="ri-threads-line" style={{marginRight : 10}}></i>
                    Instagram</Link></li>

                    <li><Link to='/holiday' style={{
                        color :'white',
                        textDecoration :"none",
                    }}>
                        <i className="ri-messenger-fill" style={{marginRight : 10}}></i>
                        Facebook</Link></li>

                    <li><Link to='/contact-us' style={{
                        color :'white',
                        textDecoration :"none",
                    }}>
                        <i className="ri-twitter-x-line" style={{marginRight : 10}}></i>
                        Twitter X</Link></li>
                </ul>
            </div>
            <div style={{
                width : "100%"
            }}>
                <h2 style={{
                    color:"white",
                    fontWeight:"600",
                    marginBottom : "15px"
                    // margin :"10px"
                }}>Contact Us</h2>
                
                <form action="" style={{
                    display :'flex',
                    flexDirection:'column',
                    gap : '10px'
                }}>
                    <input required name="fullname" placeholder="Fullname" type="text" style={{
                        border :'none',
                        padding: 12,
                        borderRadius: 8,
                        width : "100%"

                    }} />

                    <input required name="email" placeholder="example@gmail.com" type="email" style={{
                        border :'none',
                        padding: 12,
                        borderRadius: 4,
                        width : "100%",

                    }} />

                    <textarea name="" id=""
                    required
                    name ="message"
                    placeholder="Message"
                    style={{
                        border:"none",
                        padding :12,
                        borderRadius:4,
                        width : '100%',
                    }}
                    rows="3"
                    >
                    </textarea>
                    <button style={{
                        border :'none',
                        padding : "12px 24px",
                        borderRadius:8,
                        fontWeight:"bold",
                        fontSize:"1rem",
                        cursor : 'pointer',
                        width:'fit-content',
                        background:"#f38e1e",
                        color:"white"
                    }}>Submit</button>
                </form>
            </div>
        </footer>
    )
}
export default Footer;