import React from 'react'
import catify from '../IMG/catifylogo.avif'
const Lowernav = () => {
  return (
    <div>
      <div className="center-img d-flex justify-content-center">
      <img className='img-rounded mt-3'  src={catify} alt="catify logo" />
      </div>
      <div className="ul">
        <ul className="list mt-3 me-3">
            <li className="list-item">HOME</li>
            <li className="list-item">BEST SELLERS</li>
            <div class="dropdown">
  <span className='cloth-link' data-bs-toggle="dropdown" aria-expanded="false" style={{cursor:'pointer'}}>
 CLOTHING
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg>
  </span>
  <ul class="dropdown-menu ">
    <li><a class="dropdown-item" href="#">Cat Dresses</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Leggings</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Shirts</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Socks</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Sweatshirts</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Trousers</a></li>
  </ul>
</div>
            <div class="dropdown">
  <span class="accessories-link" data-bs-toggle="dropdown" aria-expanded="false" style={{cursor:'pointer'}}>
  ACCESSORIES
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg>
  </span>
  <ul class="dropdown-menu ">
    <li><a class="dropdown-item" href="#">Cat Earrings</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Rings</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Necklaces</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Bags</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Hats</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Keychains</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Phone Cover</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Pins</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Glasses</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Scarves</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Watches</a></li>
  </ul>
</div>
            <div class="dropdown">
  <span class="home-decor" data-bs-toggle="dropdown" aria-expanded="false" style={{cursor:'pointer'}}>
    HOME DECOR
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg>
  </span>
  <ul class="dropdown-menu ">
    <li><a class="dropdown-item" href="#">Cat Lightning</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Mugs</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Pillows</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Rugs</a></li>
    <li><a class="dropdown-item mt-2" href="#">Cat Stationarey</a></li>
  </ul>
</div>
               <div class="dropdown">
  <span class="collect-menu" data-bs-toggle="dropdown" aria-expanded="false" style={{cursor:'pointer'}}>
    COLLECTIONS
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg>
  </span>
  <ul class="dropdown-menu ">
    <li><a class="dropdown-item" href="#">Under £10</a></li>
    <li><a class="dropdown-item mt-2" href="#">Best Selling</a></li>
    <li><a class="dropdown-item mt-2" href="#">Crazy Cat Lady</a></li>
    <li><a class="dropdown-item mt-2" href="#">Gold</a></li>
    <li><a class="dropdown-item mt-2" href="#">Silver</a></li>
    <li><a class="dropdown-item mt-2" href="#">New Products</a></li>
  </ul>
</div>
        </ul>
      <div className="icons p-3 ">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-handbag" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z"/>
</svg> 
      </div>
      </div>
    </div>
  )
}

export default Lowernav
