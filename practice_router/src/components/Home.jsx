import React from 'react'

const Home = () => {
  return (
    <div style={{
      background : '#282a35',
      minHeight  :"100vh",
      maxWidth   :"100%",
      color      : 'white',
      display    : 'flex',
      flexDirection: "column",
      alignItems   : 'center',
      // justifyContent: 'center',
      gap : '2.5rem'
    }}>
      <h1 style={{
        fontWeight : 'bold',
        fontSize   : '3rem',
        marginTop  : "2.5rem",
      }}>Bootstrap Versions</h1>
      <p style={{
        width : '40%',
        fontWeight :'bold',
        // fontSize: "1.2rem",
        textAlign:'justify'
      }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officiis tempora error consequuntur dicta voluptas vitae. Aut natus inventore voluptate quis illum quae iusto.</p>
      
      <div style={{
        display :'flex'
      }}>
        <div>
        <div>
          <div style={{
            background : '#846bae',
            minHeight     : '50vh',
            width      : "18vw",
            // border        : '2px solid red',
            borderTopLeftRadius : "10px",
            borderBottomLeftRadius: '10px',
            display : 'flex',
            flexDirection : 'column',
            alignItems : 'center',
            gap        : '2rem',
            padding     :"0 25px 0 25px",
          }}>
                <div style={{
                  fontSize : '5rem',
                  fontWeight: 'bold',
                  border : "2.5px solid whitesmoke",
                  borderRadius : "20px",
                  padding:"0 15px 0 15px",
                  marginTop : '2.5rem',
                  textAlign : 'center'
                }}>B3</div>
                <div style={{
                  border : '1.5px solid whitesmoke',
                  padding : '10px 30px',
                  borderRadius : '5px',
                  fontSize : '1.2rem',
                  fontWeight: 'bold',
                  cursor    : 'pointer'
                }}>Learn Bootstrap 3</div>
                <div style={{
                textAlign : 'justify',
                letterSpacing : '1.2px',
                marginBottom: '2.5rem'

                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam, et voluptate velit amet ipsam.</div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div style={{
            background : '#5f4884',
            minHeight     : '50vh',
            width      : "18vw",
            // border        : '2px solid red',
            // borderTopLeftRadius : "10px",
            // borderBottomLeftRadius: '10px',
            display : 'flex',
            flexDirection : 'column',
            alignItems : 'center',
            gap        : '2rem',
            padding     :"0 25px 0 25px",
          }}>
                <div style={{
                  fontSize : '5rem',
                  fontWeight: 'bold',
                  border : "2.5px solid whitesmoke",
                  borderRadius : "20px",
                  padding:"0 15px 0 15px",
                  marginTop : '2.5rem',
                  textAlign : 'center'
                }}>B4</div>
                <div style={{
                  border : '1.5px solid whitesmoke',
                  padding : '10px 30px',
                  borderRadius : '5px',
                  fontSize : '1.2rem',
                  fontWeight: 'bold',
                  cursor    : 'pointer'
                }}>Learn Bootstrap 3</div>
                <div style={{
                textAlign : 'justify',
                letterSpacing : '1.2px',
                marginBottom: '2.5rem'

                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam, et voluptate velit amet ipsam.</div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div style={{
            background : '#6c3ec1',
            minHeight     : '50vh',
            width      : "18vw",
            // border        : '2px solid red',
            borderTopRightRadius : "10px",
            borderBottomRightRadius: '10px',
            display : 'flex',
            flexDirection : 'column',
            alignItems : 'center',
            gap        : '2rem',
            padding     :"0 25px 0 25px",
          }}>
                <div style={{
                  fontSize : '5rem',
                  fontWeight: 'bold',
                  border : "2.5px solid whitesmoke",
                  borderRadius : "20px",
                  padding:"0 15px 0 15px",
                  marginTop : '2.5rem',
                  textAlign : 'center'
                }}>B5</div>
                <div style={{
                  border : '1.5px solid whitesmoke',
                  padding : '10px 30px',
                  borderRadius : '5px',
                  fontSize : '1.2rem',
                  fontWeight: 'bold',
                  cursor    : 'pointer'
                }}>Learn Bootstrap 3</div>
                <div style={{
                textAlign : 'justify',
                letterSpacing : '1.2px',
                marginBottom: '2.5rem'

                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam, et voluptate velit amet ipsam.</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
