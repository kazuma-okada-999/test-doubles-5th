import {LaunchFireworkSystem, Weather, WeatherRepository} from './Types'


export class LaunchFireworkImpl implements LaunchFireworkSystem {
    weatherRepository: WeatherRepository

    constructor(weatherRepository: WeatherRepository) {
        this.weatherRepository = weatherRepository
    }

    async launch() {
        // ここにコードを記述して下さい
        const weather = await this.weatherRepository.getByCity("Nagoya")
        if (weather === Weather.SUNNY) {
            return "花火を打ち上げました"
        }
        return "中止しました"
    }
}