import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { usePizza } from '../hookss/usePizza';

function CreateUser() {
  const navigate = useNavigate();

  const { setUser } = usePizza()
  
  const [value, setvalue] = useState('')
  const { formState:{errors}, register, handleSubmit } = useForm({defaultValues:{username:''}})

  function submit(data:{username:string}) {
    const { username } = data
    if (username.length < 3) return;
    setUser(username)
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='mt-8'>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={value}
        {...register('username',{required:'Complete the username correct',min:3,onChange:(e) => setvalue(e.target.value) })}
        className="input mb-8 mt-6 w-[90%] max-w-72 h-12 rounded-3xl px-6 placeholder:text-sm outline-none border border-transparent transition-all duration-500 hover:border-yellow-500 focus:border-yellow-500 "
      />
      {
        errors.username && <p>{errors.username.message}</p>
      }

      {value.length >= 3 && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;