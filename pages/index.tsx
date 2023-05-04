import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};

export default function App() {
  const { register, 
          handleSubmit, 
          watch, 
          formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log('테스트가 통과되었음');    
    console.log(data)
  }

  console.log("value is : ", watch("exampleRequired")) // watch input value by passing the name of it

  // console.log(register("example"));
  
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>

      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && 
      <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}