import Image from "next/image";
import Link from "next/link";

const AppLogo=()=> {
  return (
    <div className="flex items-center justify-between  ">
      <Link href={'/'} className="flex gap-4 items-center">
        <div className="relative flex items-center justify-center">
          <Image src='/images/logo.png' width={35} height={36} alt='logo'/>
        </div>
        <h1 className={"text-2xl font-bold "}>Extensions</h1>
      </Link>
    </div>
  );
}
export default AppLogo