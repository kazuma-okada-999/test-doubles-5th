import {MockFirework} from './MockFirework'
import {LaunchFireworkImpl} from './LaunchFirework'
import SpyFirework from './SpyFirework'

// また仕様が変わって、発射されなかった場合に花火を無効化するようににdisableメソッドを呼ぶことになりました。
// そのため、打ち上げられるテストケースでは、fireが呼ばれることに加えて、disableが呼ばれていないことも合わせてテストしたいです。
// 打ち上げられないテストケースも同様に、fireが呼ばれないことに加えて、disableが呼ばれていることを合わせてテストします。
// Spyをそのように書き換えると、リファクタリングの必要があることに気づきます。
// リファクタリングの結果、Spyにアサートが含まれることとなりましたが、それはもうすでにSpyではなくMock（自己検証するSpy）です。

describe('花火発射システム（LaunchFireworkImpl）のテスト', () => {

    describe('リファクタ前', () => {
        it('正しいpasswordが設定されている場合、花火を発射して自爆はしないこと', () => {
            const spyMissile = new SpyFirework()
            const correctPassword = 'black300'
            const launchMissile = new LaunchFireworkImpl(spyMissile, correctPassword)


            launchMissile.launch()


            expect(spyMissile.fire_wasCalled).toBeTruthy()
            expect(spyMissile.disable_wasCalled).not.toBeTruthy()
        })

        it('不正なpasswordが設定されている場合、花火を発射せず自爆すること', () => {
            const spyMissile = new SpyFirework()
            const invalidPassword = 'white200'
            const launchMissile = new LaunchFireworkImpl(spyMissile, invalidPassword)


            launchMissile.launch()


            expect(spyMissile.fire_wasCalled).not.toBeTruthy()
            expect(spyMissile.disable_wasCalled).toBeTruthy()
        })
    })

    describe('リファクタ後', () => {
        it('正しいpasswordが設定されている場合、花火を発射して自爆はしないこと', () => {
            const mockMissile = new MockFirework()
            const correctPassword = 'black300'
            const launchMissile = new LaunchFireworkImpl(mockMissile, correctPassword)


            launchMissile.launch()


            mockMissile.verifyFire()
        })

        it('不正なpasswordが設定されている場合、花火を発射せず自爆すること', () => {
            const mockMissile = new MockFirework()
            const invalidPassword = 'white200'
            const launchMissile = new LaunchFireworkImpl(mockMissile, invalidPassword)


            launchMissile.launch()


            mockMissile.verifyDisable()
        })
    })
})

