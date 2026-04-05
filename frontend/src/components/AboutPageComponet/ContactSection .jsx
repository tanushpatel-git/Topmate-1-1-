import { PhoneCall, MapPin } from "lucide-react";
import Image from "../../assets/topmate-light-logo.svg";

const ContactSection = () => {
  return (
    <div className="w-full bg-[#e6d3b3] h-[70vh] px-36 py-20 md:px-20 max-[800px]:h-auto max-[800px]:py-10 max-[800px]:mt-10 max-[800px]:mb-10 overflow-hidden flex flex-col items-center justify-center">
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
        Let's connect!
      </h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        
        <div className="flex-1 bg-white rounded-2xl border border-black p-8 flex flex-col justify-between">
          
          <div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-semibold text-lg">Reach out</h3>
                <p className="text-lg mt-2">support@topmate.io</p>
              </div>

              <PhoneCall size={28} />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-10">
            <img src={Image} alt="" />
          </div>
        </div>

        <div className="flex-1 bg-white rounded-2xl border border-black p-8 relative">
          
          <div className="absolute top-6 right-6">
            <MapPin size={32} />
          </div>

          <div className="space-y-6">
            
            <div>
              <h3 className="font-semibold text-lg">San Francisco</h3>
              <p className="text-sm mt-1">
                548 Market St PMB 30073, San Francisco
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Singapore</h3>
              <p className="text-sm mt-1">
                160 Robinson Road, #14-04 Singapore Business Federation Center,
                Singapore (068914)
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Bengaluru</h3>
              <p className="text-sm mt-1">
                Topmate.io, Ground Floor, 656, 13th Cross Rd, Sector 2, PWD
                Quarters, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;