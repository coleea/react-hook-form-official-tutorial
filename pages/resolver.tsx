import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: '최소 1글자 이상 필요' }),
  age: z.number().min(10, {message : "최소 10 이상의 숫자 필요"}),
});

const App = () => {

  const {register, handleSubmit, formState : {errors}} = useForm({resolver : zodResolver(schema)})

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: zodResolver(schema),
  // });

  return (
    <div className="" style={{width : "50%"}} >
        <form onSubmit={handleSubmit((d) => console.log(d))} style={{display : "flex", flexDirection : "column", gap : "1em"}}>
          <input {...register('name')} />
          {errors.name?.message && 
          <p style={{color : "red"}}>{JSON.stringify(errors.name?.message)}</p>}

          <input type="number" {...register('age', { valueAsNumber: true })} />
          {errors.age?.message && 
          <p style={{color : "red"}}>{JSON.stringify(errors.age?.message)}</p>}

          <input type="submit" />
        </form>
    </div>
  );
};

export default App