import {Missile} from './Types'

export default class DefaultMissile implements Missile {
    fire() {
        console.log("本物の花火が打ち上げられたよ")
    }
}