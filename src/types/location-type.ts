interface City {
    id: number;
    name: string;
}

interface Location {
    id: number;
    name: string;
    cities: City[];
}