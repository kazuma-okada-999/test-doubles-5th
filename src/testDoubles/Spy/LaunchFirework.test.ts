import {SpyFirework} from './SpyFirework'
import {LaunchFireworkImpl} from './LaunchFirework'

// Dummyでは、花火が発射されていないことのテストしかできませんでした。
// では正しく打ち上げられるかどうかをテストするにはどうしたらよいでしょうか？
// Spy（呼ばれたか・呼ばれていないか・どのように呼ばれたかを記録するもの）を使いましょう。

describe('花火発射システム（LaunchFireworkImpl）のテスト', () => {

    it('正しいパスワードの場合、spyMissile.fire(）が呼ばれていること', () => {
        const spyFirework = new SpyFirework()
        const correctPassword = 'black300'
        const launchFirework = new LaunchFireworkImpl(spyFirework, correctPassword)


        launchFirework.launch()


        expect(spyFirework.fire_wasCalled).toBeTruthy()
    })

    it('間違ったパスワードの場合、spyFirework.fire(）が呼ばれないこと', () => {
        const spyFirework = new SpyFirework()
        const invalidPassword = 'white200'
        const launchFirework = new LaunchFireworkImpl(spyFirework, invalidPassword)


        launchFirework.launch()


        expect(spyFirework.fire_wasCalled).not.toBeTruthy()
    })
})
