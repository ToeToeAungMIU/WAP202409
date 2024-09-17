import User from './user'
export default class Comment {
    rpid: number;
    user: User;
    content: string;
    ctime: string;
    like: number;
  
    constructor(rpid: number, user: User, content: string, ctime: string, like: number) {
      this.rpid = rpid;
      this.user = user;
      this.content = content;
      this.ctime = ctime;
      this.like = like;
    }
  }