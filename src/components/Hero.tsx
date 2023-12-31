import Navbar from "./Navbar";

function StarSky () {
  const starSmall = "absolute w-[0.13rem] h-[0.13rem] rounded-[0.13rem] bg-gray-300 animate-twinkleSmall"

  const starBig = "absolute w-[0.15rem] h-[0.15rem] rounded-[0.15rem] bg-gray-300 animate-twinkleSmall"

  return (
    <div className="relative w-full h-full z-30 flex grow overflow-hidden">
      <p 
        className={starSmall}
        style={{
          top: '20%',
          right: '3%'

        }}
      ></p>
      <p 
        className={starSmall}
        style={{
          top: '24%',
          left: '19%'

        }}
      ></p>
      <p 
        className={starSmall}
        style={{
          top: '7%',
          right: '19%'

        }}
      ></p>
      <p 
        className={starSmall}
        style={{
          top: '27%',
          right: '19%'

        }}
      ></p>
      <p 
        className={starSmall}
        style={{
          top: '47%',
          left: '29%'

        }}
      ></p>
      <p 
        className={starSmall}
        style={{
          top: '43%',
          right: '9%'

        }}
      ></p>
      <p 
        className={starSmall}
        style={{
          top: '87%',
          left: '19%'
        }}
      ></p>
      <p 
        className={starSmall}
        style={{
          top: '70%',
          left: '49%'
        }}
      ></p>
      <p 
        className={starSmall}
        style={{
          top: '13%',
          left: '10%'

        }}
      ></p>
      <p 
        className={starBig}
        style={{
          top: '50%',
          left: '80%'

        }}
      ></p>
      <p 
        className={starSmall}
        style={{
          top: '10%',
          left: '30%'

        }}
      ></p>
      <p 
        className={starSmall}
        style={{
          top: '30%',
          left: '8%'

        }}
      ></p>
      <p 
        className={starBig}
        style={{
          top: '25%',
          left: '55%'

        }}
      ></p>
      <p 
        className={starSmall}
        style={{
          top: '80%',
          left: '30%'

        }}
      ></p>
      <p 
        className={starBig}
        style={{
          top: '90%',
          left: '90%'

        }}
      ></p>
      <p 
        className={starSmall}
        style={{
          top: '20%',
          right: '3%'

        }}
      ></p>
      <p 
        className={starBig}
        style={{
          top: '85%',
          left: '65%'

        }}
      ></p>
      <p 
        className={starSmall}
        style={{
          top: '20%',
          right: '3%'

        }}
      ></p>
      <p 
        className={starBig}
        style={{
          top: '50%',
          left: '80%'

        }}
      ></p>
      <p 
        className={starBig}
        style={{
          top: '95%',
          left: '45%'

        }}
      ></p>
      <p 
        className={starSmall}
        style={{
          top: '8%',
          left: '3%'

        }}
      ></p>
      <p 
        className={starBig}
        style={{
          top: '70%',
          left: '10%'

        }}
      ></p>
      <p 
        className={starSmall}
        style={{
          top: '50%',
          left: '47%'

        }}
      ></p>
      <p 
        className={starSmall}
        style={{
          top: '88%',
          left: '2%'

        }}
      ></p>
      <p 
        className={starSmall}
        style={{
          top: '3%',
          left: '60%'

        }}
      ></p>
    </div>
  )
}

export default function Hero () {
  return (
    <div className='relative z-30 w-full h-[100vh] bg-darkBlue flex grow glow flex-col justify-center items-start'>

      <StarSky />

      <div className='absolute w-full h-[100vh] flex grow text-white flex-col justify-center items-start'>

      <Navbar />
      <div
        className="w-full md:w-10/12 lg:w-8/12 universalPadding flex flex-col gap-12 justify-start items-start"
      >
        <div className="text-5xl md:text-6xl xl:text-7xl flex flex-col gap-2 justify-start items-start"> 
          <p
            data-aos="fade-right"
          > Building products that
          </p>
          <p 
            data-aos="fade-right"
            data-aos-delay="550"
            className="underline decoration-orange underline-offset-4 font-medium"
            > people love
          </p>
        </div>

        <p
          className="text-xl lg:text-2xl text-blue"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          Hey, I am Palak, a full stack developer and a henna artist, based in India. Using my development experience to build amazing products for the worldwide web. I help companies make user friendly and scalable software.
        </p>
      </div>
    </div>
    </div>
  )
}