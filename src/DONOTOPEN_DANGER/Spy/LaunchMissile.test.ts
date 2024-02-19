import {SpyMissile} from './SpyMissile'
import {LaunchFireworkImpl} from './LaunchMissile'

// Dummyでは、花火が発射されていないことのテストしかできませんでした。
// では正しく打ち上げられるかどうかをテストするにはどうしたらよいでしょうか？
// Spy（呼ばれたか・呼ばれていないか・どのように呼ばれたかを記録するもの）を使いましょう。

describe('花火発射システム（LaunchFireworkImpl）のテスト', () => {

    it('正しいパスワードの場合、spyMissile.fire(）が呼ばれていること', () => {
        const spyMissile = new SpyMissile()
        const correctPassword = 'black300'
        const launchMissile = new LaunchFireworkImpl(spyMissile, correctPassword)


        launchMissile.launch()


        expect(spyMissile.fire_wasCalled).toBeTruthy()
    })

    it('間違ったパスワードの場合、spyMissile.fire(）が呼ばれないこと', () => {
        const spyMissile = new SpyMissile()
        const invalidPassword = 'white200'
        const launchMissile = new LaunchFireworkImpl(spyMissile, invalidPassword)


        launchMissile.launch()


        expect(spyMissile.fire_wasCalled).not.toBeTruthy()
    })
})
