import React, { useEffect } from 'react'
import './sl2.css'
import './Smatshop.css'
import { Link } from 'react-router-dom'


function Categorie(props) {
  useEffect(() => {
    let elements = document.querySelectorAll(".localll")
    let handleScroll = () => {
      let viewportHeight = window.innerHeight;
      elements.forEach(element => {
        let boundingRect = element.getBoundingClientRect().top;
        if (boundingRect < viewportHeight) {
          element.classList.add('fire');
        } else {
          element.classList.remove('fire');
        }
      })
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  useEffect(() => {
    let elements = document.querySelectorAll(".CategoriesH1")
    let handleScroll = () => {
      let viewportHeight = window.innerHeight;
      elements.forEach(element => {
        let boundingRect = element.getBoundingClientRect().top;
        if (boundingRect < viewportHeight) {
          element.classList.add('fire');
        } else {
          element.classList.remove('fire');
        }
      })
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })


  const Paragraph = ({ text, wordLimit }) => {
    const truncateText = (text, limit) => {
      const words = text.split(" ");
      return words.length > limit
        ? words.slice(0, limit).join(" ") + "......"
        : text;
    };

    return <p>{truncateText(text, wordLimit)}</p>;
  };


  const paragraphText = "Categories With Product..";



  return (
    <div id='div-smart2' className={`bg-${props.mode}`}>
      <h1 style={{ fontWeight: '600', textAlign: 'center', cursor: 'pointer', hover: 'underline', fontFamily: 'Times New Roman, Times, serif', fontSize: '2rem' }} className='CategoriesH1'><Paragraph text={paragraphText} wordLimit={5} /></h1>
      {/* <br /> */}
      <div className='containere'>
        <div className='imgggd localll'>
          <Link   to="/Shopping-App/Womens" rel="noopener noreferrer">
            
            <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917206046.png" alt="" /></Link>
        </div>
        <div className='imgggd localll'>
          <Link to="/Shopping-App/Womens">
            <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917271582.png" alt="" />
          </Link>
        </div>
        <div className='imgggd localll'>
          <Link to="/Shopping-App/Men">
            <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917337118.png" alt="" />
          </Link>
        </div>
        <div className='imgggd localll'>
          <Link to="/Shopping-App/Childrens">

            <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917402654.png" alt="" />
          </Link>
        </div>

        <div className='imgggd localll'>
          <Link to="/Shopping-App/Womens">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917468190.png  " alt="" />
          </Link>
        </div>
        <div className='imgggd localll'>
          <Link to="/Shopping-App/Men">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917533726.png" alt="" />
          </Link>
        </div>
        <div className='imgggd localll'>
          <Link to="/Shopping-App/Childrens">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917599262.png" alt="" />
          </Link>
        </div>
        <div className='imgggd localll'>
          <Link to="/Shopping-App/Womens">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917664798.png" alt="" />
          </Link>
        </div>
        <div className='imgggd localll'>
          <Link to="/Shopping-App/M en">

          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917730334.png" alt="" />
          </Link>
        </div>
        <div className='imgggd localll'>
          <Link to="/Shopping-App/Childrens">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917795870.png" alt="" />
          </Link>
        </div>
        <div className='imgggd localll'>
          <Link to="/Shopping-App/Womens">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917861406.png" alt="" />
          </Link>
        </div>

        <div className='imgggd localll' >
          <Link to="/Shopping-App/Men">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917533726.png" alt="" />
          </Link>
        </div>

        <div className='imgggd localll'>
          <Link to="/Shopping-App/Childrens">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917861406.png" alt="" />
          </Link> 
        </div>

        <div className='imgggd localll' id='last'>
          <Link to="/Shopping-App/Womens">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926917533726.png" alt="" />
          </Link>
        </div>

        {/* <div className='imgggd localll' >
          <img src="https://assets.tatacliq.com/medias/sys_master/images/62926892466206.jpg" alt="" />
        </div> */}
      </div>

    </div>
  )
}

export default Categorie
