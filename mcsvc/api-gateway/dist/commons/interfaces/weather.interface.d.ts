export interface IWeather {
    id: number;
    weather_state_name: WeatherStateName;
    weather_state_abbr: WeatherStateAbbr;
    wind_direction_compass: WindDirectionCompass;
    created: Date;
    applicable_date: Date;
    min_temp: number | null;
    max_temp: number | null;
    the_temp: number | null;
    wind_speed: number;
    wind_direction: number;
    air_pressure: number | null;
    humidity: number | null;
    visibility: number | null;
    predictability: number | null;
}
export declare enum WeatherStateAbbr {
    C = "c",
    Hc = "hc",
    LC = "lc",
    Lr = "lr",
    S = "s"
}
export declare enum WeatherStateName {
    Clear = "Clear",
    HeavyCloud = "Heavy Cloud",
    LightCloud = "Light Cloud",
    LightRain = "Light Rain",
    Showers = "Showers"
}
export declare enum WindDirectionCompass {
    False = "False",
    N = "N",
    Nne = "NNE",
    Nw = "NW",
    Wsw = "WSW"
}
