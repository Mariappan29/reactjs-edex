import React, { useState } from 'react'

const Task1 = () => {
  const [veriable, setElement] = useState([{
    imgg: "https://community-cdn-digitalocean-com.global.ssl.fastly.net/e5y5ptPSFg2LXVAtEYUBr1rx",
    name: 'mari',
    age: 22,
  },
  {
    imgg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
    name: "MARIAPPAN",
    age: 20
  }, {
    imgg: "https://th.bing.com/th/id/R.180de7f308c14303b35c2c5a950c889a?rik=HL8Bl%2fKPKbbVDQ&riu=http%3a%2f%2fwww.easytolearning.com%2fwebroot%2fck_files%2ffiles%2fhtml-image-tag.png&ehk=Eui%2ft5zilj3cOztgAC285DJIvQJ8DNB2mDFM%2brPK280%3d&risl=&pid=ImgRaw&r=0",
    name: "MARIAPPAN",
    age: 20
  }, {
    imgg: "https://th.bing.com/th/id/OIP.DjJ15IGFAsMKZFZGOl-fYgAAAA?rs=1&pid=ImgDetMain",
    name: "surya",
    age: 19
  }, {
    imgg: "https://community-cdn-digitalocean-com.global.ssl.fastly.net/e5y5ptPSFg2LXVAtEYUBr1rx",
    name: "suryarai",
    age: 18
  }, {
    imgg: "https://community-cdn-digitalocean-com.global.ssl.fastly.net/e5y5ptPSFg2LXVAtEYUBr1rx",
    name: "suryarai",
    age: 18
  }]


  )

  return (
    <div>
      <div class="row  justify-content-around">
      {
        veriable.map(veriable => (
          
            <div class="col-4">
              <div class="card " style={{ width: ' 18rem' }}>
                <img src={veriable.imgg} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <li>{veriable.name}</li>
                  <li>{veriable.age}</li>
                  <button>submit</button>&nbsp;
                  <button>edite</button>
                </div>
              </div>
            </div>
          
            

        ))}
    
     </div>
    </div>

  )
}
export default Task1
