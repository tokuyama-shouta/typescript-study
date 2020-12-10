interface Engineer {
  name: string;
  role: string;
}
interface Blogger {
  name: string;
  follower: number;
}
// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends  Engineer,Blogger{}
const quill: EngineerBlogger = {
  name: 'Quill',
  role: 'fromt-end',
  follower: 1000
}
type  NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;