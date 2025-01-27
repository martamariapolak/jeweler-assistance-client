import ReactDOM from'react-dom/client';
import RestApiClient from './utils/RestApiClient';

async function main()
{
let api= new RestApiClient("http://localhost:3001");
if(process.env.REact_APP_MODE==="render")  //zmienna środowiskowa w katalogu zmiennych środowiskowych env
{
  api=new RestApiClient("https://jeweler-assistant-server-0tg3.onrender.com");
}
const response=await api.get("/ping");

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>{response.message}</h1>);
}
main();
