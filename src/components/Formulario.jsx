import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import useNoticias from '../hooks/useNoticias'

const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'technology', label: 'Technology'},
    { value: 'business', label: 'Business'},
    { value: 'entertainment', label: 'Entertainment'},
    { value: 'health', label: 'Health'},
    { value: 'science', label: 'Science'},
    { value: 'sports', label: 'Sports'},
]

const Formulario = () => {
    const { categoria, handleChangeCategoria } = useNoticias()
    

  return (
    <form >
        <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
                label='Categoria'
                onChange={handleChangeCategoria}
                value={categoria}
            >
                {CATEGORIAS.map( categoria => (
                    <MenuItem 
                        key={categoria.value} 
                        value={categoria.value}
                    >
                        {categoria.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </form>
  )
}

export default Formulario