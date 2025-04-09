type UserDataRegisterController = {
    email: string | undefined,
    firstName: string | undefined,
    lastName: string | undefined,
    phone: string | undefined,
    password: string | undefined,
    repass: string | undefined
}

type UserDataRegisterService = {
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    hashedPassword: string,
}



type UserDataLoginController = {
    email: string | undefined,
    password: string | undefined,
}

type UserDataLoginService = {
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    hashedPassword: string,

}

type ErrorResponse = {
    message: string;
}

type BikeCreate = {
    model: string;
    manufacturer: Manufacturer;
    color: string;
    engineCapacity: number;
    price: number;
    year: number;
    used: boolean;
    img?: string;
    description: string;
}
type BikeDetails = {
    id: string;
    model: string;
    manufacturer: Manufacturer;
    color: string;
    engineCapacity: number;
    price: number;
    year: number;
    used: boolean;
    img?: string;
    description: string;
    ownerId: string;
    owner: {
        id: string;
        username: string;
        email: string;
    };
    likedByUsers: {
        id: string;
        username: string;
        email: string;
    }[];
    createdAt: Date;
    updatedAt: Date;
}


export {
    UserDataRegisterController,
    UserDataRegisterService,
    UserDataLoginController,
    UserDataLoginService,
    ErrorResponse,
    BikeCreate,
    BikeDetails
};


type Manufacturer =
    | "Access_Motor"
    | "Adly"
    | "Aeon"
    | "AGM_MOTORS"
    | "Aixam"
    | "American_Ironhorse"
    | "Aprilia"
    | "Arctic_Cat"
    | "Baotian"
    | "Barossa"
    | "Bashan"
    | "Beeline"
    | "Benelli"
    | "Beta"
    | "Big_Dog_Motorcycles"
    | "Bimota"
    | "Black_Tea"
    | "Blata"
    | "BMW"
    | "Bombardier"
    | "Boom"
    | "Brixton"
    | "Brough_Superior"
    | "BRP"
    | "BSA"
    | "Buell"
    | "Burelli"
    | "Cagiva"
    | "Can_Am"
    | "Cectek"
    | "CFMOTO"
    | "CPI"
    | "Daelim"
    | "Derbi"
    | "Dinli"
    | "DKW"
    | "DREEMS"
    | "Ducati"
    | "e_max"
    | "emco"
    | "Energica"
    | "e_Schwalbe"
    | "E_Ton"
    | "evmoto"
    | "Explorer"
    | "Fantic"
    | "FB_Mondial"
    | "Felo_Moto"
    | "Futura"
    | "Gasgas"
    | "Generic"
    | "GG_Motorradtechnik"
    | "Gilera"
    | "GOES"
    | "Gorilla"
    | "Govecs"
    | "Harley_Davidson"
    | "Heinkel"
    | "Hercules"
    | "Herkules"
    | "Honda"
    | "Horex"
    | "Horwin"
    | "Husaberg"
    | "Husqvarna"
    | "Hyosung"
    | "Indian"
    | "Italjet"
    | "Jawa"
    | "Jinling"
    | "Kawasaki"
    | "KAYO"
    | "Keeway"
    | "Kimi"
    | "KL_Mobility_Piper"
    | "Knievel"
    | "Kreidler"
    | "KSR"
    | "KTM"
    | "Kumpan"
    | "Kymco"
    | "Lambretta"
    | "Laverda"
    | "Lifan"
    | "Linhai"
    | "LiveWire"
    | "LML"
    | "Loncin"
    | "Luxxon"
    | "Maico"
    | "Malaguti"
    | "Mash"
    | "MBK"
    | "Megelli"
    | "Metorbike"
    | "Motobi"
    | "Moto_Guzzi"
    | "Moto_Morini"
    | "Motowell"
    | "Motron"
    | "MV_Agusta"
    | "Mz"
    | "NAON"
    | "Nerva"
    | "NITO"
    | "NIU"
    | "Norton"
    | "NSU"
    | "Odes"
    | "Online"
    | "Pegasus"
    | "Peugeot"
    | "PGO"
    | "Piaggio"
    | "Piper"
    | "PohlBock"
    | "Polaris"
    | "Puch"
    | "QJ_Motor"
    | "Quadix"
    | "Quadro"
    | "Ray"
    | "Rewaco"
    | "RGNT"
    | "Rieju"
    | "Rivero"
    | "Royal_Alloy"
    | "Royal_Enfield"
    | "Sachs"
    | "Scrooser"
    | "Seat"
    | "Segway"
    | "Seikel"
    | "Sherco"
    | "Shineray"
    | "Si_o"
    | "Silence"
    | "Simson"
    | "Skyteam"
    | "SMC"
    | "Stark"
    | "Steereon"
    | "Stels"
    | "Super_Soco"
    | "Sur_Ron"
    | "Suzuki"
    | "SWM"
    | "SYM"
    | "Talaria"
    | "Tauris"
    | "TGB"
    | "Thunderbike"
    | "TiSTO"
    | "TM"
    | "Triton"
    | "Triumph"
    | "TRS"
    | "UM"
    | "Ural"
    | "Vespa"
    | "VICTORY"
    | "VOGE"
    | "Voltago"
    | "Voxan"
    | "WMI"
    | "Yamaha"
    | "Zero"
    | "Zhongyu"
    | "Zontes"
    | "Zündapp"
    | "Other";