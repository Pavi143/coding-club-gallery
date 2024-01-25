import DarkModeSwitcher from "@/components/darkmodeswitcher";
import logo from "@/assests/codingclublogo.png";
import img from "@/assests/img.png";
import { Divider } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faInstagram, faGithub, faYoutube, faLinkedin, faWhatsapp, faTelegram, faInstagramSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

const items = [img, img, img, img]

export default function Home() {
  return <div className="flex flex-col">
    <div className="flex flex-col">
      <img src={logo.src} className="w-24 object-contain" alt="try later"></img>
      <p className="text-6xl">CODING CLUB GCT</p>
    </div>
    <div className="flex justify-evenly p-4 w-full gap-8"  >
      <div className="flex w-2/3 bg-mantle">
        <p className="text-2xl p-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, nihil Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="flex flex-col bg-mantle items-center w-1/3">
        <p className="text-xl p-4">Lorem ipsum, dolor</p>
        <div className="flex gap-4 ">
          <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
          <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
          <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
          <FontAwesomeIcon icon={faYoutube} className="w-4 h-4" />
          <FontAwesomeIcon icon={faTelegram} className="w-4 h-4" />
        </div>
      </div>
    </div>
    <div>
      <p className="text 6pxl">RECENT EVENTS</p>
    </div>
    <div className="grid grid-rows-2 grid-cols-2 p-8 ">
      {
        items.map((item, i) => <div key={i}>
          <img src={img.src} alt="img1" className="w-full " ></img>
        </div>
        )
      }
    </div>
    <div className="grid grid-rows-2 grid-cols-2 p-4 gap-2">
      <div className="flex flex-col p-4 bg-mantle  h-50 " >
        <div>
          <p>2018</p>
        </div>
        <div className="mt-20 " >
          <p>jan 16</p>
          <p>mega launch</p>
        </div>
      </div>
      <div className="flex p-4 bg-mantle">
        <div className="flex flex-col p-4 bg-mantle  h-50 " >
          <div>
            <p>2018</p>
          </div>
          <div className="mt-20 " >
            <p>jan 16</p>
            <p>mega launch</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col-2 p-4 bg-mantle">
        <div className="flex flex-col p-4 bg-mantle  h-50 " >
          <div>
            <p>2018</p>
          </div>
          <div className="mt-20 " >
            <p>jan 16</p>
            <p>mega launch</p>
          </div>
        </div>
      </div>
      <div className="flex p-4 bg-mantle">
        <div className="flex flex-col p-4 bg-mantle  h-50 " >
          <div>
            <p>2018</p>
          </div>
          <div className="mt-20 " >
            <p>jan 16</p>
            <p>mega launch</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col p-2 gap-4">
      <p>WHAT THEY SAY</p>
      <div className="flex flex-col bg-mantle gap-2 p-2 ">
          <p className="flex ml-8">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eum nulla. Vel neque laudantium optio itaque veniam? Commodi dolorem vero fuga, beatae impedit praesentium nesciunt in, expedita nihil voluptatem omnis."
          </p>
        <div className="flex flex-col ml-8">
          <p>harry potter</p>
          <p>gucci</p>
          <p>actor</p>
        </div>
      </div>
      <div className="flex flex-col bg-mantle gap-2 p-2" >
          <p className="flex ml-8">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eum nulla. Vel neque laudantium optio itaque veniam? Commodi dolorem vero fuga, beatae impedit praesentium nesciunt in, expedita nihil voluptatem omnis."
          </p>
        <div className="flex flex-col ml-8">
          <p>harry potter</p>
          <p>gucci</p>
          <p>actor</p>
        </div>
      </div>
      <div className="flex flex-col bg-mantle gap-4 p-2">
          <p className="flex ml-8">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eum nulla. Vel neque laudantium optio itaque veniam? Commodi dolorem vero fuga, beatae impedit praesentium nesciunt in, expedita nihil voluptatem omnis."
          </p>
        <div className="flex flex-col ml-8">
          <p>harry potter</p>
          <p>gucci</p>
          <p>actor</p>
        </div>
      </div>
    </div>
  </div>
}
