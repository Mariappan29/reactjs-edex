import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import "./hover.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Toaster, toast } from 'alert';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';





const Project = () => {

 const[categories, categoriesset] = useState([
  
    { src: "src/assets/shoes_05_167x.avif", label: "Sandals" },
    { src: "src/assets/shoes_06_167x.avif", label: "Boots" },
    { src: "src/assets/shoes_07_167x.avif", label: "Sneakers" },
    { src: "src/assets/shoes_08_167x.webp", label: "Athletics" },
    { src: "src/assets/shoes_09_167x.avif", label: "Pumps" },
    { src: "src/assets/shoes_10_167x.avif", label: "Loafers & Slip-Ons" },

 ])

 const [orders, setOrders] = useState([
  { id: 1, name: "Women's Brady Pump", price: 78, img: "src/assets/1_3c178dca-319a-4812-952e-ce6f8078aa98_229x.avif" },
  { id: 2, name: "Sneaker", price: 55, img: "src/assets/antique_er_726x copy.webp" },
  { id: 3, name: "Men's Bushacre Boot", price: 123, img: "src/assets/1_940a6e88-94b2-473b-9e4a-5c7d0f90c1f2_229x.avif" },
  { id: 4, name: "Kids Brady Pump", price: 33, img: "src/assets/1_1f45f62b-a2c6-4354-b929-2fe1c054e6d9_229x.webp" },
  { id: 5, name: "Women's Boots", price: 157, img: "src/assets/1_96f1124a-bf8e-4b41-9d91-89013ebe4101_229x.avif" },
  { id: 6, name: "Men's Sneaker", price: 93, img: "src/assets/1_521d8383-8d0b-4286-8b3c-9dc094e64d4a_229x.avif" },
  
]);

const [orderDetail,setOrderDetail]=useState({
  name:'',
  price:'',
  img:'',

})





const addToCart = (product) => {
 
  
  // setOrders([...orders, product]);
  // alert(`${product.name} added to your cart!`);
    orderDetail.img=product.img
    orderDetail.name=product.name
    
    orderDetail.price=product.price
    
  
  
  setShow(true);
};


const addToCartt = (product1) => {
 
  
  // setOrders([...orders, product]);
  // alert(`${product.name} added to your cart!`);
    orderDetail.img=product1.img
    orderDetail.name=product1.name
    
    orderDetail.price=product1.price
    
  
  
  setShow(true);
};
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);

const [orderss, setOrderss] = useState([
  { id: 1, name: "Kids Sandel", price: 78, img: "src/assets/project (6).avif" },
  { id: 2, name: "Women's High Shaft Boots Knee", price: 55, img: "src/assets/project (5).avif" },
  { id: 3, name: "Kids Sneaker", price: 123, img: "src/assets/project (4).avif" },
  { id: 4, name: "Men's Boots", price: 33, img: "src/assets/project (3).avif" },
  { id: 5, name: "White Men's Sneaker", price: 157, img: "src/assets/project (2).avif" },
  { id: 6, name: "Women's Fashion Boots", price: 93, img: "src/assets/project (1).avif" },
  
]);
  return (
    <div>
    <div className="container-fluid">
<div className="row">
<div className="col-4">
 <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Men</Nav.Link>
            <NavDropdown title="Woman" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Women Shoes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Women Shoes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Children</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
</div>
      </div></div>
      <div className="container-fluid">
<div className="row">
  <div class="col-6">
  <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/assets/shoes_01_726x.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Shop mens#</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/assets/shoes_03_726x.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h2>Shop Mens#</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/assets/shoes_03_726x.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h2>Shop Children's#</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  
 
       <div className="col-md-6 d-flex flex-column justify-content-center align-items-center  text-center" style={{backgroundImage:`url(${"src/assets/antique_er_726x.webp"})`}}>
          <h2 className="text-uppercase">Big Sale</h2>
          <h1 className="display-1 text-dark">-60%</h1>
          <p className="lead">  </p>
    <div className="hover-container">
      <a href="#shop" className="hover-underline">
        Clearance *
      </a>
    </div>
</div></div></div>
<div className="container-fluid mt-4">
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-2 text-center" key={index}>
              <Image src={category.src} roundedCircle />
              <p>{category.label}</p>
            </div>
          ))}
        </div>
      </div> 
  <div className="row mt-5px justify-content-around">
<div class="col-10 ">
  <div className="hover-container">
      <h2 style={{position:'relative'}}>
      Top Rated
      </h2>
      </div>
    </div>

    </div>


      <div className="container-fluid mt-5 justify-content-around">
        <div className="row">
          {orders.map((product) => (
            <div key={product.id} className="col-md-2 justify-content-around" style={{position:'relative'}}>
              <div className="card">
                <img src={product.img} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <p className="card-title">{product.name}</p>
                  <p className="card-text">${product.price}</p>
                  
                  <div>
      <button  onClick={()=>addToCart(product)}>Create a toast</button>
    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


 
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <h3>Your Orders</h3>
              <img src={orderDetail.img} className="card-img-top" alt={orderDetail.name} />
              <lable>size of shoes</lable>
           
               {orderDetail.name} - ${orderDetail.price}
          
       
          
        </Offcanvas.Body>
      </Offcanvas>
 <div className="row mt-5px justify-content-around">
 <div class="col-10 ">
   <div className="hover-container">
       <h2 style={{position:'relative'}}>
       Most Gifted
       </h2>
       </div>
     </div>
 
     </div>
     <div className="container-fluid mt-5 justify-content-around">
        <div className="row">
          {orderss.map((product1) => (
            <div key={product1.id} className="col-md-2 justify-content-around" style={{position:'relative'}}>
              <div className="card">
                <img src={product1.img} className="card-img-top" alt={product1.name} />
                <div className="card-body">
                  <p className="card-title">{product1.name}</p>
                  <p className="card-text">${product1.price}</p>
                  <div>
      <button  onClick={()=>addToCartt(product1)}>Create a toast</button>
    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> 
      
      
      
      
      
      
      
       </div>


  )}


export default Project
