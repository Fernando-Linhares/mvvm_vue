export default Application;

function Application()
{
  return {
    props: {
      msg: String
    },

    data(){
      return {
        message: "Application MVVM is Running"
      };
    }
  };
}