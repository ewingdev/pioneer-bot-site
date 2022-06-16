import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

export default function Commands() {
  const commands = [
    "arat",
 "/devam",
 "/dj",
 "/durdur",
 "/döngü",
 "/filtre",
 "/geri",
 "/geç",
 "/invite",
 "/istatistik",
 "/kapat",
 "/kaydet",
 "/oynat",
 "/ping",
 "/ses",
 "/sıra",
 "/temizle",
 "/zaman",
 "/şuanda-çalan"
      ]
  return (
    <>
      <div>
      <div className="flex w-full justify-center">
      <img width="500" src="/img/bck2.png" />
      </div>
        <p className="text-xl font-medium text-white">
          <i className="fal fa-cogs text-amber-400 mr-2" />
         Bot Komutları
        </p>
        <p className="text-white text-sm text-opacity-50 mb-5">
        Pioneer Botun komutları hakkında bilgi alabilirsiniz.
        </p>

        <div>
          <Menu as="div" className="w-full relative inline-block text-left">
          <div>
              <Menu.Button className="left-0 transition w-full duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6 flex justify-between items-center">
                <div className="flex items-center gap-x-1 text-white text-opacity-60">
                 
                    <>
                      <i className="fa fa-hashtag text-white text-opacity-20" />
                     Komut Listesini Görüntüle
                    </>
                
                </div>
              </Menu.Button>
            </div>

            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="z-1 custom-scroll absolute left-0 w-full mt-2 origin-top-right bg-black overflow-auto max-h-60 border border-black border-opacity-20 bg-opacity-95 rounded-lg p-1">
                <div className="px-1 py-1 w-full">

            {commands.map(pioneer => (

                <Menu.Item>
                    <button className={`w-full rounded-lg p-2 cursor-pointer text-white flex items-center space-x-3 transition-all duration-200`}>
                    <>
                          <i className="fa-spin text-xl text-white text-opacity-20" />
                         {pioneer}</>
                    </button>
                    </Menu.Item>
            ))}
              
        </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
  <Link href={"https://discord.com/api/oauth2/authorize?client_id=873192637438496768&permissions=8&scope=bot%20applications.commands"}>
  <a className={"flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Pioneer'i Sunucuna Ekle</a>
  </Link>

  <div className="py-10"></div>
  
  <Link href={"https://discord.gg/NxCVKx62fD"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Destek Sunucusu</a>
  </Link>

  <div className="py-10"></div>
  
  <Link href={"https://top.gg/bot/873192637438496768/vote"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Pioneer'i Oyla</a>
  </Link>
</div>

      </div>
      <div className="py-20"></div>
    </>
  )
  }
