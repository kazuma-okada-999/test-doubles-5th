import {AuthServer, LaunchMissileSystem, Missile} from './Types'

export class LaunchMissileImpl implements LaunchMissileSystem {
    missile: Missile
    authServer: AuthServer

    constructor(missile: Missile, authServer: AuthServer) {
        this.missile = missile
        this.authServer = authServer
    }

    login(userId: string) {
        // テストが通るように実装してください
    }

    async launchBy(userId: string) {
        // テストが通るように実装してください
    }
}