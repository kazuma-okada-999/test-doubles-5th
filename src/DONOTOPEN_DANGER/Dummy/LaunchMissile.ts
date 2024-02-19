import {LaunchMissileSystem, Missile} from './Types'

export class LaunchFireworkImpl implements LaunchMissileSystem {
    password: string
    missile: Missile

    constructor(missile: Missile, password: string) {
        this.missile = missile
        this.password = password
    }

    launch() {
        this.missile.fire()
    }
}