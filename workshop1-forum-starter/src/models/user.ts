export default  class User {
    uid: string;
    avatar: string;
    uname: string;
  
    constructor(uid: string, avatar: string, uname: string) {
      this.uid = uid;
      this.avatar = avatar;
      this.uname = uname;
    }
  }
  