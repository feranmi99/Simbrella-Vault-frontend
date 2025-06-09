type MakeModelMap = {
    [subCategoryId: number]: {
        [make: string]: string[];
    };
};

export const makeModelMap: MakeModelMap = {
    1: {
        Toyota: ['Corolla', 'Camry', 'RAV4', 'Highlander', 'Yaris', 'Avensis', 'Land Cruiser', 'Hilux', 'Tacoma'],
        Honda: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Fit', 'Odyssey', 'HR-V'],
        Ford: ['F-150', 'Focus', 'Escape', 'Explorer', 'Edge', 'Mustang', 'Fusion'],
        BMW: ['3 Series', '5 Series', '7 Series', 'X1', 'X3', 'X5', 'X6'],
        'Mercedes-Benz': ['C-Class', 'E-Class', 'GLA', 'GLC', 'GLE', 'S-Class', 'A-Class'],
        Lexus: ['RX', 'ES', 'GX', 'NX', 'IS', 'LX', 'LS'],
        Nissan: ['Altima', 'Sentra', 'Rogue', 'Murano', 'Pathfinder', 'Maxima', 'Xterra'],
        Hyundai: ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Accent', 'Palisade', 'Kona'],
        Kia: ['Rio', 'Cerato', 'Sportage', 'Sorento', 'Seltos', 'Optima', 'Telluride'],
        Volkswagen: ['Golf', 'Passat', 'Tiguan', 'Jetta', 'Polo', 'Touareg', 'Arteon']
    },
    2: {
        Toyota: ['Hiace', 'Coaster', 'Granvia', 'Dyna', 'Quantum'],
        Ford: ['Transit', 'E-Series', 'Tourneo', 'Econoline'],
        'Mercedes-Benz': ['Sprinter', 'Vito', 'Viano', 'MB 100', 'T1'],
        Nissan: ['Urvan', 'NV350', 'Caravan', 'Civilian'],
        Volkswagen: ['Transporter', 'Crafter', 'LT', 'Caravelle', 'Multivan'],
        Hyundai: ['H1', 'Starex', 'County', 'Grace', 'Aero Town'],
        Isuzu: ['NQR Bus', 'Journey', 'Erga Mio', 'LT Series'],
        TATA: ['Winger', 'Starbus', 'CityRide', 'LP 709'],
        Iveco: ['Daily', 'TurboDaily', 'Irisbus', 'EuroRider']
    },
    3: {
        Caterpillar: ['320 Excavator', 'D6 Dozer', '950H Wheel Loader', '140H Grader', 'CAT 416 Backhoe'],
        Komatsu: ['PC200', 'D85 Dozer', 'WA320 Loader', 'GD655 Grader', 'WB97 Backhoe'],
        'John Deere': ['210G LC', '850K Dozer', '544K Loader', '310L Backhoe', '670G Grader'],
        Hitachi: ['ZX200', 'EX120', 'ZAXIS 210', 'EX200-5', 'ZW220 Wheel Loader'],
        Volvo: ['EC210', 'EC240', 'L90G Wheel Loader', 'BL71 Backhoe', 'A40G Articulated Hauler'],
        JCB: ['3CX Backhoe', 'JS220 Excavator', '426ZX Loader', 'VMT860 Compactor', '455ZX Loader'],
        Liebherr: ['R 914', 'L 550 Loader', 'PR 736 Dozer', 'A 914', 'LTM 1055 Crane'],
        Doosan: ['DX225LC', 'DL300 Wheel Loader', 'DX140LCR', 'DA30 Articulated Dump Truck'],
        Hyundai: ['R210LC-9', 'HL770-9 Loader', 'R140W-9', 'R60CR-9A Mini Excavator'],
        Case: ['580N Backhoe', 'CX210C Excavator', '570N EP Tractor Loader', 'SR210 Skid Steer']
    },
    4: {
        Honda: ['CBR500R', 'CBR1000RR', 'CB125F', 'Africa Twin', 'Rebel 500', 'CRF250L'],
        Yamaha: ['YZF-R3', 'YZF-R1', 'MT-07', 'MT-15', 'FZ-S', 'NMAX 155'],
        Suzuki: ['GSX-R1000', 'Gixxer SF', 'Access 125', 'Burgman Street', 'DR-Z400SM'],
        Kawasaki: ['Ninja 400', 'Ninja 650', 'Z650', 'Versys 650', 'KLX 250'],
        Bajaj: ['Boxer 100', 'Pulsar 150', 'Pulsar NS200', 'CT 100', 'Dominar 400'],
        TVS: ['Apache RTR 160', 'Star HLX 125', 'Ntorq 125', 'Jupiter', 'XL 100'],
        Hero: ['Splendor Plus', 'HF Deluxe', 'Glamour', 'Xpulse 200', 'Maestro Edge'],
        Kymco: ['Like 150i', 'X-Town 300i', 'Agility 125', 'People S 150'],
        Vespa: ['Primavera 150', 'GTS Super 300', 'Sprint 150', 'LX 125'],
        Piaggio: ['Liberty 150', 'MP3 500', 'Typhoon 50', 'Fly 150'],
        Ducati: ['Panigale V4', 'Monster 821', 'Scrambler Icon', 'Diavel 1260'],
        'Harley-Davidson': ['Iron 883', 'Street 750', 'Sportster S', 'Fat Boy', 'Road King']
    },
    5: {
        'Mercedes-Benz': ['Actros', 'Atego', 'Axor', 'Sprinter', 'Unimog'],
        Mack: ['Anthem', 'Granite', 'Pinnacle', 'Vision', 'Super-Liner'],
        Volvo: ['FH', 'FMX', 'FE', 'FM', 'VNL', 'VNR'],
        MAN: ['TGS', 'TGM', 'TGX', 'TGL'],
        Scania: ['R-Series', 'G-Series', 'P-Series', 'S-Series'],
        DAF: ['XF', 'CF', 'LF'],
        Iveco: ['Stralis', 'Eurocargo', 'Daily', 'Trakker'],
        Ford: ['Cargo', 'F-Max', 'Transit', 'F-Series'],
        Toyota: ['Dyna', 'HiAce', 'Land Cruiser Pickup'],
        Isuzu: ['N-Series', 'F-Series', 'Giga', 'ELF', 'Forward'],
        Foton: ['Auman', 'Aumark', 'Tunland', 'BJ1039'],
        FAW: ['J5P', 'J6P', 'TIGER V', '8x4 Dump Truck']
    },
    6: {
        
    }
}
