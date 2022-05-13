import Image from "next/image";

export default function Main() {
  return (
    <>
      <div className="w-full">
        <div className="mx-auto text-center p-5">
          <div className="h-48 w-48 relative mx-auto">
            <Image
              src="/profile.jpg"
              alt="My picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full transition-all active:rotate-180"
            />
          </div>
          <p className="text-7xl text-white font-extrabold pb-5">Hey 👋</p>
          
        </div>
      </div>
    </>
  );
}

function Age() {
  var dob = new Date("09/05/2006");
  var month_diff = Date.now() - dob.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  var age = Math.abs(year - 1970);
  return age;
}
