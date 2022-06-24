import logo from "./logo.svg"
import "./App.css"
import desktopBox from "./images/illustration-box-desktop.svg"
import mobileIllustration from "./images/illustration-woman-online-mobile.svg"
import desktopIllustration from "./images/illustration-woman-online-desktop.svg"
import arow from "./images/icon-arrow-down.svg"
import { useState } from "react"

function App() {
  const [first, setFirst] = useState(true)
  const [second, setSecond] = useState(true)
  const [third, setThird] = useState(true)
  const [fourth, setFourth] = useState(true)
  const [fifth, setFifth] = useState(true)

  let firstDrop,
    secondDrop,
    thirdDrop,
    fourthDrop,
    fifthDrop,
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    t1,
    t2,
    t3,
    t4,
    t5
  if (first) {
    firstDrop += " hidden"
    icon1 = ""
  } else {
    firstDrop -= " hidden"
    icon1 = "rotate-180"
    t1 = "font-bold"
  }
  if (second) {
    secondDrop += " hidden"
    icon2 = ""
  } else {
    secondDrop -= " hidden"
    icon2 = "rotate-180"
    t2 = "font-bold"
  }
  if (third) {
    thirdDrop += " hidden"
    icon3 = ""
  } else {
    thirdDrop -= " hidden"
    icon3 = "rotate-180"
    t3 = "font-bold"
  }
  if (fourth) {
    fourthDrop += " hidden"
    icon4 = ""
  } else {
    fourthDrop -= " hidden"
    icon4 = "rotate-180"
    t4 = "font-bold"
  }
  if (fifth) {
    fifthDrop += " hidden"
    icon5 = ""
  } else {
    fifthDrop -= " hidden"
    icon5 = "rotate-180"
    t5 = "font-bold"
  }

  return (
    <div className='md:max-w-[57.5rem] flex bg-white overflow-hidden p-[50px] bg-desktop rounded-3xl'>
      <div className='flex items-center'>
        <img
          src={desktopBox}
          alt='illustration'
          className='absolute left-[8.438rem] bottom-[17.188rem] z-50'
        ></img>
        <img
          src={desktopIllustration}
          alt='illustration'
          className='relative left-[-8rem]'
        ></img>
        <img
          src={mobileIllustration}
          alt='mobile-illustration'
          className='hidden'
        ></img>
      </div>
      <div className='md:min-w-[22.5rem] mr-[50px]'>
        <h1 className='font-bold text-4xl mb-[50px]'>FAQ</h1>
        <div
          className='mb-[10px] flex items-center justify-between cursor-pointer field'
          onClick={() => setFirst(!first)}
        >
          <h2 className={t1}>How many team members can I invite?</h2>
          <img src={arow} alt='arow' className={icon1} />
        </div>
        <p className={firstDrop + " para"}>
          {" "}
          You can invite up to 2 additional users on the Free plan. There is no
          limit on team members for the Premium plan.
        </p>{" "}
        <hr className='mb-[15px]' />
        <div
          className='mb-[10px] flex items-center justify-between cursor-pointer field'
          onClick={() => setSecond(!second)}
        >
          <h2 className={t2}> What is the maximum file upload size?</h2>
          <img src={arow} alt='arow' className={icon2} />
        </div>
        <p className={secondDrop + " para"}>
          {" "}
          No more than 2GB. All files in your account must fit your allotted
          storage space.{" "}
        </p>
        <hr className='mb-[15px]' />
        <div
          className='mb-[10px] flex items-center justify-between field cursor-pointer'
          onClick={() => setThird(!third)}
        >
          <h2 className={t3}>How do I reset my password?</h2>
          <img src={arow} alt='arow' className={icon3} />
        </div>
        <p className={thirdDrop + " para"}>
          Click “Forgot password” from the login page or “Change password” from
          your profile page. A reset link will be emailed to you.
        </p>{" "}
        <hr className='mb-[15px]' />
        <div
          className='mb-[10px] flex items-center justify-between cursor-pointer field'
          onClick={() => setFourth(!fourth)}
        >
          <h2 className={t4}> Can I cancel my subscription?</h2>
          <img src={arow} alt='arow' className={icon4} />
        </div>
        <p className={fourthDrop + " para"}>
          Yes! Send us a message and we’ll process your request no questions
          asked.
        </p>
        <hr className='mb-[15px]' />
        <div
          className='mb-[10px] flex items-center justify-between cursor-pointer field'
          onClick={() => setFifth(!fifth)}
        >
          <h2 className={t5}> Do you provide additional support? </h2>
          <img src={arow} alt='arow' className={icon5} />
        </div>
        <p className={fifthDrop + " para"}>
          Chat and email support is available 24/7. Phone lines are open during
          normal business hours.
        </p>
        <hr />
      </div>
    </div>
  )
}

export default App
