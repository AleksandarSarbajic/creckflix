import classes from "../Account/account.module.css";
import Link from "next/link";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function Account(props) {
  // console.log(props);
  const [isClicked, setIsClicked] = useState(false);
  function setClickedHandler() {
    if (isClicked === false) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Account</h1>
      <span className={classes.date}>Member Since {props.user[0].date}</span>
      <div className={classes.outline} />
      <div className={classes.grid}>
        <div className={classes.sidelane}>
          <span className={classes.about}>Membership & biling</span>
          <button className={classes.button}>Cancel Membership</button>
        </div>
        <div className={classes.rightside}>
          <div className={classes.mainside}>
            <div className={classes.left}>
              <p className={classes.email}>{props.user[0].email}</p>
              <p className={classes.password}>Password: ********</p>
            </div>
            <ul className={classes.right}>
              <li className={classes.item}>
                <Link href={"/"} className={classes.link}>
                  Change account email
                </Link>
              </li>
              <li className={classes.item}>
                <Link href={"/"} className={classes.link}>
                  Change password
                </Link>
              </li>
              <li className={classes.item}>
                <Link href={"/"} className={classes.link}>
                  Add phone number
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes.mainside}>
            <div className={classes.left}>
              <p className={classes.email}>{props.user[0].email}</p>
              <p className={classes.password}>
                Your next billing date is {props.user[0].date}
              </p>
            </div>
            <ul className={classes.right}>
              <li className={classes.item}>
                <Link href={"/"} className={classes.link}>
                  Menage payment info
                </Link>
              </li>
              <li className={classes.item}>
                <Link href={"/"} className={classes.link}>
                  Add backup payment method
                </Link>
              </li>
              <li className={classes.item}>
                <Link href={"/"} className={classes.link}>
                  Billing details
                </Link>
              </li>
              <li className={classes.item}>
                <Link href={"/"} className={classes.link}>
                  Change billing day
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes.mainside}>
            <div className={classes.left}></div>
            <ul className={classes.right}>
              <li className={classes.item}>
                <Link href={"/"} className={classes.link}>
                  Redeem gift card or promo code
                </Link>
              </li>
              <li className={classes.item}>
                <Link href={"/"} className={classes.link}>
                  Where to buy gift cards
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.outline} />
      <div className={classes.grid}>
        <div className={classes.sidelane}>
          <span className={classes.about}>PLAN DETAILS</span>
        </div>
        <div className={classes.rightside}>
          <div className={classes.mainside}>
            <div className={classes.left}>
              <p className={classes.email}>
                Premium <span className={classes.bordertext}>ULTRA HD</span>
              </p>
            </div>
            <ul className={classes.right}>
              <li className={classes.item}>
                <Link href={"/"} className={classes.link}>
                  Redeem gift card or promo code
                </Link>
              </li>
              <li className={classes.item}>
                <Link href={"/"} className={classes.link}>
                  Where to buy gift cards
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.outline} />
      <div className={classes.grid}>
        <div className={classes.sidelane}>
          <span className={classes.about}>SECURITY & PRIVACY</span>
        </div>
        <div className={classes.rightside}>
          <div className={classes.mainside}>
            <div className={classes.left}>
              <p className={classes.text}>
                Control access to this account, view the most recently active
                devices and more.
              </p>
            </div>
            <ul className={classes.right}>
              <li className={classes.item}>
                <Link href={"/"} className={classes.link}>
                  Manage access and devices
                </Link>
              </li>
              <li className={classes.item}>
                <Link href={"/"} className={classes.link}>
                  Sign out of all devices
                </Link>
              </li>
              <li className={classes.item}>
                <Link href={"/"} className={classes.link}>
                  Download your personal information
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.outline} />
      <div className={classes.grid}>
        <div className={classes.sidelane}>
          <span className={classes.about}>PROFILE & PARENTAL CONTROLS</span>
        </div>
        <div className={classes.rightside}>
          <div className={classes.mainside}>
            <div className={classes.images}>
              <img src={props.user[0].image} className={classes.img} />
              <div className={classes.textover}>
                <p className={classes.name}>{props.user[0].name}</p>
                <p className={classes.maturnity}>All Maturity Ratings</p>
              </div>
            </div>
            <ul className={classes.right}>
              <li className={classes.item}>
                <button
                  className={`${classes.btnicon} ${
                    isClicked ? classes.rotate : ""
                  }`}
                  onClick={setClickedHandler}
                >
                  <BsChevronDown className={classes.icon} />
                </button>
              </li>
            </ul>
          </div>
          {isClicked && (
            <>
              <div className={classes.mainside}>
                <div className={classes.images}>
                  <div className={classes.textover}>
                    <p className={classes.name}>Language</p>
                    <p className={classes.maturnity}>English</p>
                  </div>
                </div>
                <ul className={classes.right}>
                  <li className={classes.item}>
                    <Link href={"/"} className={classes.link}>
                      Change
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={classes.mainside}>
                <div className={classes.images}>
                  <div className={classes.textover}>
                    <p className={classes.name}>Viewing Restrictions</p>
                    <p className={classes.maturnity}>No Restrictions.</p>
                  </div>
                </div>
                <ul className={classes.right}>
                  <li className={classes.item}>
                    <Link href={"/"} className={classes.link}>
                      Change
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={classes.mainside}>
                <div className={classes.images}>
                  <div className={classes.textover}>
                    <p className={classes.name}>Profile Lock</p>
                    <p className={classes.maturnity}>Off</p>
                  </div>
                </div>
                <ul className={classes.right}>
                  <li className={classes.item}>
                    <Link href={"/"} className={classes.link}>
                      Change
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={classes.mainside}>
                <div className={classes.images}>
                  <p className={classes.name}>Transfer this profile</p>
                </div>
                <ul className={classes.right}>
                  <li className={classes.item}>
                    <Link href={"/"} className={classes.link}>
                      Transfer
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={classes.mainside}>
                <div className={classes.images}>
                  <p className={classes.name}>Viewing activity</p>
                </div>
                <ul className={classes.right}>
                  <li className={classes.item}>
                    <Link href={"/"} className={classes.link}>
                      View
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={classes.mainside}>
                <div className={classes.images}>
                  <p className={classes.name}>Ratings</p>
                </div>
                <ul className={classes.right}>
                  <li className={classes.item}>
                    <Link href={"/"} className={classes.link}>
                      View
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={classes.mainside}>
                <div className={classes.images}>
                  <p className={classes.name}>Subtitle appearance</p>
                </div>
                <ul className={classes.right}>
                  <li className={classes.item}>
                    <Link href={"/"} className={classes.link}>
                      Change
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={classes.mainside}>
                <div className={classes.images}>
                  <p className={classes.name}>Playback settings</p>
                </div>
                <ul className={classes.right}>
                  <li className={classes.item}>
                    <Link href={"/"} className={classes.link}>
                      Change
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
      <div className={classes.outline} />
      <div className={classes.grid}>
        <div className={classes.sidelane}>
          <span className={classes.about}>SETTINGS</span>
        </div>
        <div className={classes.rightside}>
          <div className={classes.mainside}>
            <ul className={classes.right}>
              <li>
                <Link href={"/"} className={classes.link}>
                  Manage access and devices
                </Link>
              </li>
              <li>
                <Link href={"/"} className={classes.link}>
                  Sign out of all devices
                </Link>
              </li>
              <li>
                <Link href={"/"} className={classes.link}>
                  Download your personal information
                </Link>
              </li>
            </ul>
            <div></div>
          </div>
        </div>
      </div>
      <div className="padding"></div>
    </div>
  );
}
