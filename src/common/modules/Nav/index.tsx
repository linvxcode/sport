export const Navbar = () => {
  return (
    <div className="grid grid-cols-3 items-center p-8">
      <div className="">
        <h1 className="text-2xl font-bold">
          <span className="text-[#EF7708]">YOU-</span>GAMING
        </h1>
      </div>

      <div className="flex gap-7 justify-center">
        <button className="hover:opacity-10 transition-opacity duration-300">
        <h1 >Category</h1>
        </button>
        <button className="hover:opacity-10 transition-opacity duration-300">
        <h1>Product</h1>
        </button>
        <button className="hover:opacity-10 transition-opacity duration-300">
        <h1>About</h1>
        </button>
      </div>

      <div className="flex justify-end items-end">
        <button className="buttoneffect ">
        Login
        </button>
      </div>
    </div>
  );
};
