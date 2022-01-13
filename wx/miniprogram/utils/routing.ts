// 页面跳转强类型重构
export namespace routing {
    export interface DrivingOpts {
        trip_id : string
    }
    export function drving(o:DrivingOpts) {
        return `/pages/driving/driving?trip_Id=${o.trip_id}`
    }

    export interface LockOpts {
        car_id:string
    }
    export function Lock(o:LockOpts) {
        return `/pages/lock/lock?car_id=${o.car_id}`
    }

    export interface registerOpts {
        redirect?:string
    }
    export interface registerParams {
        redirectURL :string
    }
    export function register(o?:registerParams) {
        const page = '/pages/register/register'
        if (!o) {
            return page
        }
        return `${page}?redirect=${encodeURIComponent(o.redirectURL)}`
    }
    export function Mytrips() {
        return '/pages/mytrips/mytrips'
    }
}