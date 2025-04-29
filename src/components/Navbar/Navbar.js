import { useRef, useState } from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = ({...props}) => {
  const serachInput = useRef("");

  const [serachText, setSerachText] = useState("");

  function handleSearch (val) {
    props.handleSearch(val);
  }

  function handleSearchTerm () {
    if(serachText){
      setSerachText("");
      serachInput.current.value = "";
    } else {
      setSerachText(serachInput.current.value);
    }
    handleSearch(serachInput.current.value);
  }

  return (
    <>
      <div className="navbar">
        {/* <img src={logo} alt="logo" /> */}
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search for products"
            ref={serachInput}
          />
          <svg
          onClick={handleSearchTerm}
            className="search-icon"
            fill="red"
            width="20"
            height="20"
            viewBox="0 0 17 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#2874F1" fillRule="evenodd">
            { serachText ? <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path> :
            <>
             <path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path>
             <path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path>
            </>
            }
            </g>
          </svg>
        </div>

        <div className="navbar-items">
          {/* <div>
            <span>My Account</span>
            <svg
              width="4.7"
              height="8"
              viewBox="0 0 16 27"
              xmlns="http://www.w3.org/2000/svg"
              className="arrow"
            >
              <path
                d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                fill="#fff"
              ></path>
            </svg>
          </div>
          <div>
            <span>More</span>
            <svg
              width="4.7"
              height="8"
              viewBox="0 0 16 27"
              xmlns="http://www.w3.org/2000/svg"
              className="arrow"
            >
              <path
                d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                fill="#fff"
              ></path>
            </svg>
          </div>

          <div>
            <svg
              className="cart"
              width="14"
              height="14"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                fill="#fff"
              ></path>
            </svg>
            <span>Cart</span>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
