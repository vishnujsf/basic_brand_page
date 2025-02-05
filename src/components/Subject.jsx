import React from "react";
import { Link } from "react-router-dom";

const Subject = () => {
 
  return (
    <>
      <div className="main flex">
        <div className="matter">
          <h1 className="font-bold text-8xl mx-25 my-10">
            YOUR FEET
            <br />
            DESERVE
            <br /> THE BEST
          </h1>
          <h5 className="mx-27">
            YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP
            <br /> YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND
            <br /> WE’RE HERE TO HELP YOU WITH OUR SHOES.
          </h5>
          <div className="btn flex mx-40 my-7">
            <button className="bg-red-600 mx-5 px-3 rounded-md font-bold hover:bg-red-700">Shop Now</button>
            <button className="bg-slate-700 text-white font-bold rounded-md px-3 hover:bg-slate-900">Category</button>
          </div>
        </div>
        <div className="img">
            <img className="w-130" src="/images/shoe_image.png"></img>
            <div className="sm flex mx-30 class">
                <h6>Available on</h6>
            <a href="https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMzkzNDU0NTk4MDI3NzkzOjE3Mzg3MzY2NDk6c3BfbXRmOjMwMDE4ODA0OTI0NzUzMjo6MDo6&url=%2FBacca-Bucci-Streetwear-Sneakers-Designed%2Fdp%2FB09LS4K24D%2Fref%3Dsr_1_23_sspa%3Fadgrpid%3D59258866472%26dib%3DeyJ2IjoiMSJ9.GCyCUc8n_2bBzuIRut1BEip8c_hUozdqmvivleH6socf2XeMNalAu-bUcy6eoHyVQgpMn8rVdWjCXqk6zgr7NNpXafeaoArvU79e39XKNA_2WBnzEtAx60KEb6sIo_1B3yySFXea8GuB1I-CTyv9XTuKRRcRGIxKQRC3-6mg8U83hPTtsMJTVyn9qw8rMuppVL1hXzZbseHoezwnGeN5gQUAsT5-synrIOcwrmwZjj4Zc0Y0dgf3HtlTnQ7dixd7W4j4WKyEwbr1JQxtK3AGPtwWy3QNifDgMmwBRs36xQQ.TJA5qgz_4L6DZvjNfSGMyDRH7yz9axpAF_FWeOyBpRM%26dib_tag%3Dse%26ext_vrnc%3Dhi%26hvadid%3D590652573055%26hvdev%3Dc%26hvlocphy%3D9181771%26hvnetw%3Dg%26hvqmt%3De%26hvrand%3D9802827640906587155%26hvtargid%3Dkwd-412030866176%26hydadcr%3D24567_2265462%26keywords%3Dshoes%26qid%3D1738736649%26sr%3D8-23-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1"><img className="mx-4" src="/images/amazon.png"></img></a>
            <a href="https://www.flipkart.com/ishransh-fashionable-chukka-boots-women/p/itm7684cbd35e0ee?pid=SHOGDGJMT9J2HDQ8&lid=LSTSHOGDGJMT9J2HDQ8XZF807&marketplace=FLIPKART&store=osp&srno=b_1_9&otracker=browse&fm=organic&iid=c946befb-fd77-4c39-b436-726e5745d52a.SHOGDGJMT9J2HDQ8.SEARCH&ppt=sp&ppn=productListView&ssid=82g1hhodog0000001738736688138"><img className="mx-4" src="/images/flipkart.png"></img></a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Subject;
