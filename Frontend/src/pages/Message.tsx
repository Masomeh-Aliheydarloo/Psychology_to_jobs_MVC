import { BsClipboard2XFill } from "react-icons/bs";

export default function Message({ message }:any) {
  return (
    <main className="flex justify-center items-center  p-8">
      <section className=" bg-light_bg_subnav dark:bg-dark_bg_subnav shadow-md rounded-lg max-w-md w-full p-6">
        <div className="flex items-center space-x-4">
          <div className=" text-4xl">
            <BsClipboard2XFill />
          </div>
          <div>
            <h3 className="text-xl font-semibold  mb-2  text-text_white">Warning</h3>
            <p className="text-gray-700">{message}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
