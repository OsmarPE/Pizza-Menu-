import CreateUser from "../components/CreateUser";

export default function Home() {
  return (
    <div className="py-20 text-center">
      <h1 className=" text-[#44403C] tracking-wide text-3xl md:text-4xl font-medium">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser/>
    </div>
  )
}
