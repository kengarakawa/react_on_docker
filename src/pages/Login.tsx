import { TextField , Button } from '@mui/material'
import { useForm } from 'react-hook-form'

const Login = () => {
    
  const { register , handleSubmit , formState: { errors } }   = useForm()
  
  const onSubmit = (data:any) => {
    console.log(data)
  }
    
    
  console.table(errors)
  return (
    <>
      <h1>Login</h1>  
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <TextField label="username" typ="text" varient="outlined" { ...register("username" , { required: true}) } 
            error={ errors.username ? true: false}
            helperText={ errors.username ? 'Username is required' : ''}
            />
        </div>
        
        <div>
            <TextField label="password" typ="password" varient="outlined" 
            { ...register("password" , { required: true, })}
            error={ errors.password ? true: false}
            helperText={ errors.password ? 'Password is required' : ''}
            />
        </div>
        
        
        <div>
            <Button variant="contained" color="primary" type="submit">Login</Button>
        </div>
        
        
        
      </form>
    </>
  )
}

export default Login
