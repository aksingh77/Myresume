import ReactWeather, { useOpenWeather } from 'react-open-weather';

const fetchData = (e) => {
    console.log("fetch data", e.target.value);
}
const WeatherModuele = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'b3db72cf8d90309e886d0c8cbf9bee1f',
        lat: '48.137154',
        lon: '11.576124',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
    }

    );

    console.log(isLoading)
    return (
        <>
            <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="en"
                locationLabel="mumbai"
                unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                showForecast
            />
            <input type="text" onChange={fetchData} />
        </>
    );

};
export default WeatherModuele;