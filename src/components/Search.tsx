import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export default function Search() {
  
  const nav = useNavigate()
  const { register,handleSubmit,formState:{errors} } = useForm({defaultValues:{value:''}})

  const onSubmit = (data:{value:string}) =>{
      nav(`/order/${data.value}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="relative flex items-center gap-4">
        <input  {...register('value',{required:true})}  type="search" placeholder="Search Order" className="w-full outline-none min-w-[200px] md:hover:min-w-[300px] md:focus:min-w-[300px] border-2 border-transparent hover:border-yellow-500 focus:border-yellow-500 transition-all duration-500 bg-yellow-100 h-12 md:h-9 rounded-3xl px-4 placeholder:text-sm placeholder:text-gray-400  "/>
        <input type="submit" value="Buscar" className="md:hidden py-3 px-6 rounded-3xl bg-yellow-200"  />
      </form>
    </div>
  )
}
