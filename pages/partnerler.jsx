
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partnerler
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.gg/nykaaGCEuA">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/icons/957298912107053117/b0f9480e40cb734bdf8cda343cc0e4b2.webp?size=4096" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">SonSusturucu</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                        Eski Model Araçlar Üzerine Kurulmuş Bir Sunucudur. Sizleri Bekleriz!
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                    <div className="flex flex-col justify-center text-white rounded">
                        <a href="https://discord.gg/fR7zzAcQfX">
                            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/icons/764491361856389131/8591be82d6b11c578d96cb24e640e7d2.webp?size=4096" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">DPC GROUP</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                    Assetto Corsa Adlı Oyun İçin Bir Kuruluştur Bu Sunucuda Bulunan IP Adresinden Sunucumuzda Oynayabilirsiniz!
                                    </p>
                                </div>     
                            </div>
                        </div>
                        </a>
                        </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};