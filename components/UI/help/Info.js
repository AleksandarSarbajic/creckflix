import Link from "next/link";
import classes from "../help/Info.module.css";
import { GrDocumentText } from "react-icons/gr";
export default function Info() {
  return (
    <>
      <div className={classes.bg}>
        <h2 className={classes.header}>Hi, Aleksandar</h2>
        <p className={classes.subheader}>Recommended for you</p>
        <div className={classes.boxes}>
          <div className={classes.box}>
            <GrDocumentText className={classes.icon} />
            <Link href="/browse">How to keep your account secure</Link>
          </div>
          <div className={classes.box}>
            <GrDocumentText className={classes.icon} />
            <Link href="/browse">Parental controls on Netflix</Link>
          </div>
          <div className={classes.box}>
            <GrDocumentText className={classes.icon} />
            <Link href="/browse">How to change your plan</Link>
          </div>
        </div>
      </div>
      <div className={classes.outline} />
      <p>dsds</p>
      <div className={classes.grid}>
        <div className={classes.wrapper}>
          <h2 className={classes.headerlist}>Manage My Account</h2>
          <ul className={classes.list}>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                Plans and Pricing
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                I received an email stating there was a new sign-in to my
                account
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                How to change your plan
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.wrapper}>
          <h2 className={classes.headerlist}>Can't Watch</h2>
          <ul className={classes.list}>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                How to change your Creckflix password
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                Creckflix says to sign up when trying to sign in
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                Creckflix says, 'This app is not compatible with your device.'
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.wrapper}>
          <h2 className={classes.headerlist}>Billing Questions</h2>
          <ul className={classes.list}>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                How to use Creckflix
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                Billing and Payments
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                Creckflix Gift Cards
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.wrapper}>
          <h2 className={classes.headerlist}>Watching Creckflix</h2>
          <ul className={classes.list}>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                How to create, change, or delete profiles
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                How to watch Creckflix on your TV
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                How to download titles to watch offline
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.wrapper}>
          <h2 className={classes.headerlist}>Quick Links</h2>
          <ul className={classes.list}>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                Request TV shows or movies
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                Update email
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                Update password
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                Update payment method
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                Cancel account
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/" className={classes.link}>
                Review payment history
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
