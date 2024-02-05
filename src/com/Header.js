import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl' >
          <div className='row'>
            {/* <div className='col-6'></div>
            <div className='col-6'></div> */}

          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl' >
          <div className='row alert-items-center '>
            <div className='col-2'>
              <h2>
                <Link className='text-white'>Amazon</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Search Product " aria-label="Search Product " aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='fs-6' />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link>
                    <img src='images/compare.svg' alt='compare'></img>
                    <p>Compare<br />Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link>
                    <img src='images/wishlist.svg' alt='wishlist'></img>
                    <p>Fevourite<br />Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link>
                    <img src='images/user.svg' alt='login'></img>
                    <p>Log in<br />
                    </p>
                  </Link>
                </div>
                <div>
                  <Link>
                    <img src='images/cart.svg' alt='Cart'></img>
                    <div className='d-flex flex-column'>
                     <span className='badge bg-white text-dark'> 0</span>
                    </div>
                  </Link>  
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;