import React, { useEffect } from 'react'
import './Hot.css'
// import So from './Images/so.png'

function Hot(props) {
  useEffect(() => {
    const elements = document.querySelectorAll('.lakals');
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      elements.forEach(element => {
        const boundingRect = element.getBoundingClientRect().top;
        if (boundingRect < viewportHeight) {
          element.classList.add('fire');
        } else {
          element.classList.remove('fire');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.lakals2');
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      elements.forEach(element => {
        const boundingRect = element.getBoundingClientRect().top;
        if (boundingRect < viewportHeight) {
          element.classList.add('fire');
        } else {
          element.classList.remove('fire');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let elements = document.querySelectorAll(".lakals3")
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
    let elements = document.querySelectorAll(".local")
    let handleScroll = () => {
      let viewportHeight = window.innerHeight;
      elements.forEach(element => {
        let boundingRect = element.getBoundingClientRect().top;
        if (boundingRect < viewportHeight) {
          element.classList.add('firee');
        } else {
          element.classList.remove('firee');
        }
      })
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })


  useEffect(() => {
    let elements = document.querySelectorAll(".locall")
    let handleScroll = () => {
      let viewportHeight = window.innerHeight;
      elements.forEach(element => {
        let boundingRect = element.getBoundingClientRect().left;
        if (boundingRect < viewportHeight) {
          element.classList.add('fireef');
        } else {
          element.classList.remove('fireef');
        }
      })
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })


  useEffect(() => {
    let elements = document.querySelectorAll(".localll")
    let handleScroll = () => {
      let viewportHeight = window.innerHeight;
      elements.forEach(element => {
        let boundingRect = element.getBoundingClientRect().top;
        if (boundingRect < viewportHeight) {
          element.classList.add('fireee');
        } else {
          element.classList.remove('fireee');
        }
      })
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  useEffect(() => {
    let elements = document.querySelectorAll(".locallll")
    let handleScroll = () => {
      let viewportHeight = window.innerHeight;
      elements.forEach(element => {
        let boundingRect = element.getBoundingClientRect().top;
        if (boundingRect < viewportHeight) {
          element.classList.add('fireeee');
        } else {
          element.classList.remove('fireeee');
        }
      })
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })


  return (
    <div className='hot-container max-w-100'>
      <h1 className='lakals2'
        style={{ fontStyle: 'oblique', fontWeight: '600', textAlign: 'center', cursor: 'pointer', hover: 'underline', fontFamily: 'Times New Roman, Times, serif', fontSize: '2rem', }}
      >
        Hot Shopping Deals
      </h1>
      <br />
      <div className="grid margin-auto  display-grid grid-container">
        <div className="grid-item grid-item-1  local ">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/63187666698270.jpg" alt="" />
        </div>
        <div className="grid-item grid-item-2 local ">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/63187666829342.jpg" alt="" />
        </div>
        <div className="grid-item grid-item-3 local">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/63187666894878.jpg" alt="" />
        </div>
        <div className="grid-item grid-item-4 local ">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/63187666960414.jpg" alt="" />
        </div>
      </div>
      <br />
      <h1 className='lakals2' style={{ fontStyle: 'oblique', fontWeight: '600', textAlign: 'center', cursor: 'pointer', hover: 'underline', fontFamily: 'Times New Roman, Times, serif', fontSize: '2rem', }}>
        Deals on Shop Appliances
      </h1>
      <br />
      <div className="grid2">

        <div id='griditem' className="grid-item local ">
          {/* <img src={props.Aq1} alt="" /> */}
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1736948728/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Our%20New%20Favourites/January/15012025/HP_2Split_SOH_JBL_15Jan2025_ccbh45.png?tr=w-1024" alt="" />
        </div>

        <div className="grid-item  locall ">
          {/* <img src={props.Aq2} alt="" /> */}
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1737021293/Croma%20Assets/CMS/LP%20Page%20Banners/2025/Our%20New%20Favourites/January/16012025/HP_CC_TCL_16Jan2025_v2fwmz.png?tr=w-1024" alt="" />
        </div>

      </div>
      <br />
      <h1 className='lakals3' style={{ fontStyle: 'oblique', fontWeight: '600', textAlign: 'center', cursor: 'pointer', hover: 'underline', fontFamily: 'Times New Roman, Times, serif', fontSize: '2rem', }}>
        Deals Of The Day
      </h1>
      <br />
      <div className="grid margin-auto  display-grid grid-container">
        <div className="grid-item grid-item-1 local ">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/63187665190942.jpg" alt="" className='' />
        </div>
        <div className="grid-item grid-item-2 locall ">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/63187665322014.jpg" alt="" />
        </div>
        <div className="grid-item grid-item-3 localll ">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/63187665256478.jpg" alt="" />
        </div>
        <div className="grid-item grid-item-4 locallll ">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/63187665387550.jpg" alt="" />
        </div>
      </div>
      <br />
    </div>
  )
}

export default Hot
