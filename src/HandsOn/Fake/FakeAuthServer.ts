import {AuthServer, User} from './Types'

// Fakeの役割を果たすように書き換えてください
export default class FakeAuthServer implements AuthServer {
    private authedUsers: string[] = []

    login(userId: string): void {
        this.authedUsers.push(userId)
    }

    getUser(userId: string): Promise<User | undefined> {
        if(this.authedUsers.includes(userId)) {
            return Promise.resolve({name: "user name", email: "example@mail.com"})
        } else {
            return Promise.resolve(undefined)
        }
    }
}