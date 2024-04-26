import Btn from "./btn";


export default async function Home() {
  const b = await fetch("https://supreme-winner-q7vgw555gxg4cpwg-3000.app.github.dev/api/aa",{cache:'no-store'});
  const c = await b.text();
  return (
   <div className="bg-slate-200 h-screen flex justify-center items-center">
    {c}
    <Btn>Click here</Btn>
   </div>
  );
}
