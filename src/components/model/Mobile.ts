export interface Mobile {
    id?:string
    model:string
    ram:string
    rom:string
}
export interface User {
    id?:number
    name:string
    email:string
    password:string
  }

export interface contextType {
    mobileList: Mobile[];
    users: User[];
    mobiles:Mobile[];
    postUser:(user:User)=>void
    postMobile:(mobile:Mobile)=>void
    updateUser:(id:number, user:User) => void
    updateMobiles:(id:string, mobile:Mobile)=>void
    deleteMobiles:(id:string)=>void
    addMobile:(mobile:Mobile)=>void
    updateMobile:(mobile:Mobile)=>void
    deleteMobile:(id:string)=>void

  };

